console.log('Manipulating the DOM');

const styleBody = document.querySelector('body');

const styleBodyFunction = ()=>{
    styleBody.style.background= "red";
}

const addElement = (text)=>{
    const headerElement = document.createElement('h1');
    headerElement.textContent = text;
    styleBody.append(headerElement);
};

export {styleBodyFunction, addElement};

