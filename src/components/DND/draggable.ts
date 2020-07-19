import { useState } from 'react'
import { cloneDeep } from '../../utils'

export interface Item {
    number: string;
    title: string
}

export type DragEvent = React.DragEvent<HTMLElement>

export default function useDraggable(items: Item[]) {

    const initialState = {
        el: null as null | HTMLElement,
        draggedFrom: null as null | number,
        draggedTo: null as null | number,
        isDragging: false,
        originalOrder: [] as Item[],
        updatedOrder: [] as Item[]
    }

    const [list, setList] = useState(items)

    const [dragAndDrop, setDragAndDrop] = useState(initialState);

    function reset() {
        setDragAndDrop(cloneDeep(initialState))
    }

    const onDragStart = (event: DragEvent) => {
        dragAndDrop.el = event.currentTarget as HTMLElement
        dragAndDrop.el.classList.add('on-drag')
        dragAndDrop.el.classList.add('prevent-childrens-pointer')

        const initialPosition = Number(dragAndDrop.el.dataset.position);

        setDragAndDrop({
            // we spread the previous content
            // of the hook variable
            // so we don't override the properties 
            // not being updated
            ...dragAndDrop,

            draggedFrom: initialPosition, // set the draggedFrom position
            isDragging: true,
            originalOrder: list // store the current state of "list"
        });


        // Note: this is only for Firefox.
        // Without it, the DnD won't work.
        // But we are not using it.
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData("text/html", '');
    };

    const onDragOver = (event: DragEvent) => {
        event.preventDefault();

        if (!event.currentTarget.classList.contains('prevent-childrens-pointer')) {
            event.currentTarget.classList.add('prevent-childrens-pointer')
        }

        if (!event.currentTarget.classList.contains('on-drag-over')) {
            event.currentTarget.classList.add('on-drag-over')
        }

        // Store the content of the original list
        // in this variable that we'll update
        let newList = dragAndDrop.originalOrder;

        // index of the item being dragged
        const draggedFrom = dragAndDrop.draggedFrom!;

        // index of the drop area being hovered
        const draggedTo = Number(event.currentTarget.dataset.position);

        // get the element that's at the position of "draggedFrom"
        const itemDragged = newList[draggedFrom];

        // filter out the item being dragged
        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        // update the list 
        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        // since this event fires many times
        // we check if the targets are actually
        // different:
        if (draggedTo !== dragAndDrop.draggedTo) {
            setDragAndDrop({
                ...dragAndDrop,

                // save the updated list state
                // we will render this onDrop
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }

        return false;
    };

    const onDragLeave = (event: DragEvent) => {
        event.currentTarget.classList.remove('prevent-childrens-pointer')

        if (event.currentTarget.classList.contains('on-drag-over')) {
            event.currentTarget.classList.remove('on-drag-over')
        }

        event.preventDefault()
        event.stopPropagation()
    }

    const onDrop = (event: DragEvent) => {
        event.stopPropagation()
        event.dataTransfer.dropEffect = 'move';

        dragAndDrop.el!.classList.remove('on-drag')
        event.currentTarget.classList.remove('on-drag-over')
        event.currentTarget.classList.remove('prevent-childrens-pointer')
        // we use the updater function
        // for the "list" hook
        setList(dragAndDrop.updatedOrder);

        // and reset the state of the DnD
        reset()

        return false;
    };


    return {
        list, onDragStart, onDragOver, onDragLeave, onDrop
    }
}