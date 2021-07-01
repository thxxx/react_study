export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof(onConfirm) !== 'function') {
        return;
    }
    if (onCancel && typeof(onCancel) !== 'function') { // onCancel 없어도 되지만 있으면 함수여야됨.
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
};