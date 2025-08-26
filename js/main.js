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
