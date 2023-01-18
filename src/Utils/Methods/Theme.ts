export function setTheme(theme: "darkmode" | "lightmode") {
    // alawys be sure to have a string, even if that string represents another object.
    const themeClass = `${theme}`;
    const doc = window.document.documentElement
    if (doc) {
        doc.setAttribute('data-theme', themeClass)
    }
    return doc;
}

export function getTheme() {
    let themeClass: string;
    const doc = window.document.documentElement;
    if (doc) {
        // alawys be sure to have a string, even if that string represents another object.
        themeClass = `${doc.getAttribute('data-theme')}`;
    }
    return themeClass || "notheme";
}

export default setTheme;