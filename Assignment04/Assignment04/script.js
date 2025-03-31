const draggables = document.querySelectorAll('.draggable');
const boxes = document.querySelectorAll('.black-box, .white-box, .trash-box');
const blackDiscContainer = document.getElementById('blackDiscContainer');
const whiteDiscContainer = document.getElementById('whiteDiscContainer');
const originalPositions = new Map();

window.addEventListener('DOMContentLoaded', () => {
    draggables.forEach((draggable) => {
        if (draggable.classList.contains('black-disc')) {
            blackDiscContainer.appendChild(draggable);
        } else if (draggable.classList.contains('white-disc')) {
            whiteDiscContainer.appendChild(draggable);
        }
    });
    updateContainerVisibility(blackDiscContainer);
    updateContainerVisibility(whiteDiscContainer);
});

draggables.forEach((draggable) => {
    originalPositions.set(draggable.id, draggable.parentElement);
});

draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggableId = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(draggableId);
        const isBlackDisc = draggableElement.classList.contains('black-disc');
        const isWhiteDisc = draggableElement.classList.contains('white-disc');
        const isBlackBox = box.classList.contains('black-box');
        const isWhiteBox = box.classList.contains('white-box');
        const isDiscTrash = box.classList.contains('trash-box');


        if ((isBlackDisc && isBlackBox) || (isWhiteDisc && isWhiteBox)) {
            if (box.children.length === 0) {
                box.appendChild(draggableElement);
                originalPositions.set(draggableId, box);
                if (isBlackDisc) {
                    updateContainerVisibility(blackDiscContainer);
                } 
                else if (isWhiteDisc) {
                    updateContainerVisibility(whiteDiscContainer);
                }
            } 
            else {
                alert('This square is already occupied!');
                returnDiscToPreviousPosition(draggableElement);
            }
        } 
        else if (isDiscTrash) {
            alert(`Disc removed from the board!`);
            returnDiscToContainer(draggableElement);
        } 
        else {
            alert('Invalid square!');
            returnDiscToPreviousPosition(draggableElement);
        }
        });
});

function returnDiscToPreviousPosition(draggableElement) {
    const previousParent = originalPositions.get(draggableElement.id);
    if (previousParent) {
        previousParent.appendChild(draggableElement);
        if (draggableElement.classList.contains('black-disc')) {
            updateContainerVisibility(blackDiscContainer);
        } else if (draggableElement.classList.contains('white-disc')) {
            updateContainerVisibility(whiteDiscContainer);
        }
    }
}

function returnDiscToContainer(draggableElement) {
    if (draggableElement.classList.contains('black-disc')) {
        blackDiscContainer.appendChild(draggableElement);
        updateContainerVisibility(blackDiscContainer);
    } else if (draggableElement.classList.contains('white-disc')) {
        whiteDiscContainer.appendChild(draggableElement);
        updateContainerVisibility(whiteDiscContainer);
    }
}

function updateContainerVisibility(container) {
    const children = Array.from(container.children);
    children.forEach((child, index) => {
        if (index < children.length - 1) {
            child.style.display = 'none';
        } else {
            child.style.display = 'block';
        }
    });
}
