import { fromEvent } from "rxjs";
import { map, withLatestFrom, takeUntil, concatAll } from "rxjs/operators";

export function moveable(selector: string) {
    const el = document.querySelector(selector) as HTMLDivElement;
    const mousedown$ = fromEvent<MouseEvent>(el, "mousedown");
    const mousemove$ = fromEvent<MouseEvent>(el, "mousemove");
    const mouseleave$ = fromEvent<MouseEvent>(el, "mouseleave");
    const mouseup$ = fromEvent<MouseEvent>(el, "mouseup");
    const { width, height } = el.getBoundingClientRect()
    const validValue = (value: number, max: number, min: number) => {
        return Math.min(Math.max(value, min), max);
    };

    const subscription = mousedown$
        .pipe(
            map(() => mousemove$.pipe(takeUntil(mouseleave$), takeUntil(mouseup$))),
            concatAll(),
            // map((e) => ({ x: e.clientX, y: e.clientY }))
            withLatestFrom(mousedown$, (move, down) => {
                return {
                    x: validValue(move.clientX - down.offsetX, window.innerWidth - width, 0),
                    y: validValue(
                        move.clientY - down.offsetY,
                        window.innerHeight - height,
                        0
                    ),
                };
            })
        )
        .subscribe((pos) => {
            el.style.top = pos.y + "px";
            el.style.left = pos.x + "px";
        });

    return { subscription }
}