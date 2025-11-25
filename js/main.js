window.onload = async () => {
    const URLSearch = new URLSearchParams(window.location.search);
    let page = URLSearch.get("page");
    if (page != null) page = decodeURIComponent(page);
    let lesson = URLSearch.get("lesson");
    if (lesson != null) lesson = decodeURIComponent(lesson);

    let contentRequest = null;
    
    if (lesson != null) contentRequest = await fetch(`/lessons/${lesson}.md`);
    else
    {
        window.history.replaceState({ }, "", `/${page ?? ""}`);
        contentRequest = await fetch(`/pages/${page ?? "index"}.md`);
    }

    const contentData = await contentRequest.text();

    const breakIndex = contentData.indexOf("\n") + 2;
    const headerText = contentData.slice(0, breakIndex);
    const content = contentData.slice(breakIndex);

    header.textContent = headerText;
    main.innerHTML = marked.parse(content);

    
};


