function submitPost() {
    const content = document.getElementById('postContent').value.trim();
    const section = document.getElementById('sectionSelector').value;

    if (!content) {
        alert('Please write something!');
        return;
    }

    const post = document.createElement('div');
    post.className = 'post';
    post.innerText = content;
    post.tabIndex = 0;
    post.setAttribute('role', 'listitem');

    document.querySelector(`#${section} .posts`).prepend(post);
    document.getElementById('postContent').value = '';
    post.focus();
}
document.addEventListener('keydown', function (event) {
    const sections = ["thoughts", "stories", "notes"];
    const currentsection = document.activeElement.closest('.blog-section');

    if (!currentsection) return;

    const currentindex = sections.findIndex(id => currentsection.id === id);
    let nextindex = currentindex;

    if (event.key === 'ArrowDown') { 
        nextindex = (currentindex + 1) % sections.length;
    } else if (event.key === 'ArrowUp') {
        nextindex = (currentindex - 1 + sections.length) % sections.length;
    }

    if (nextindex !== currentindex) {
        event.preventDefault();
        const nextsection = document.getElementById(sections[nextindex]);
        const heading = nextsection.querySelector('h2');
        if (heading) heading.focus();
    }
});
document.getElementById('postContent').addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        submitPost();
    }
});