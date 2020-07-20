
import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export function createObservable() {
    const subject = new BehaviorSubject("");

    const obervable = subject.pipe(
        //   filter((v) => v.length > 0),
        debounceTime(500),
        distinctUntilChanged()
    );

    return { subject, obervable }
}