export const onCopyText = (selector) => {
    let r = document.createRange();
    r.selectNode(document.querySelector(selector));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Текст скопирован!");
};