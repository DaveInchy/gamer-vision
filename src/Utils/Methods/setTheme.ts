export default function setTheme(theme: string) {
    // alawys be sure to have a string, even if that string represents another object.
    const themeClass = `${theme}`;
    const doc = window.document.documentElement
    if (doc) {
        doc.setAttribute('data-theme', themeClass)
    }
    return doc;
}