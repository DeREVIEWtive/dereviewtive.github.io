window.onload = async () => {
    const URLSearch = new URLSearchParams(window.location.search);
    const lesson = decodeURIComponent(URLSearch.get("lesson"));

    const lessonRequest = await fetch(`/lessons/${lesson}.md`);
    const lessonData = await lessonRequest.text();

    const breakIndex = lessonData.indexOf("\n") + 2;
    const headerText = lessonData.slice(0, breakIndex);
    const content = lessonData.slice(breakIndex + 1);

    header.textContent = headerText;
    main.innerHTML = marked.parse(content);
};

// window.onload = async () => {
//     const URLSearch = new URLSearchParams(window.location.search);
//     const navbar = decodeURIComponent(URLSearch.get("navbar"));

//     const navbarRequest = await fetch(`/navbar/${navbar}.md`);
//     const navbarData = await navbarRequest.text();

//     const breakIndex = navbarData.indexOf("\n") + 2;
//     const headerText = navbarData.slice(0, breakIndex);
//     const content = navbarData.slice(breakIndex + 1);

//     header.textContent = headerText;
//     main.innerHTML = marked.parse(content);
// };