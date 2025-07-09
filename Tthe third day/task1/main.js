const container = document.querySelector('.center');
const navigationMenu = document.getElementById('navigation');
const topRightImage = document.getElementById('header');

const centerPageContent = ()=> {
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';
}

const positionHeaderImage = ()=> {
    topRightImage.style.position = 'absolute';
    topRightImage.style.top = '0';
    topRightImage.style.right = '0';
}

const createBottomLeftImage = ()=> {
    const footerContainer = document.createElement('div');
    const bottomLeftImage = document.createElement('img');

    bottomLeftImage.src = 'dom.jpg';
    bottomLeftImage.alt = 'hello..it rains over here:';
    bottomLeftImage.style.position = 'absolute';
    bottomLeftImage.style.bottom = '0';
    bottomLeftImage.style.left = '0';

    footerContainer.appendChild(bottomLeftImage);
    container.appendChild(footerContainer);
}

function initializeLayout() {
    centerPageContent();
    positionHeaderImage();
    createBottomLeftImage();
}

initializeLayout();
