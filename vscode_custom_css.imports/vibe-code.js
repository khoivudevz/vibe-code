const getProjectTitle = () => {
	const projectTitle = document.querySelector('.title-container .title');
	if (projectTitle) {
		return projectTitle[0].textContent;
	}
	return '';
}

window.addEventListener('DOMContentLoaded', () => {
	const projectTitle = getProjectTitle();
	if (projectTitle) {
		console.log('🚀~projectTitle :', projectTitle)
	}
})
