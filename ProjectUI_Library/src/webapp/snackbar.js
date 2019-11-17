import './styles/snackbar.css';
class Snackbar{
    constructor(){
        this.snackbar = document.createElement('div');
    }

    init(){
        console.log(this.snackbar)
        this.snackbar.classList.add('snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(){
        console.log('triggered');
        document.querySelector('.snackbar').textContent='You clicked me ';
        document.querySelector('.snackbar').classList.add('active');
        setTimeout(()=>{
            document.querySelector('.snackbar').classList.remove('active');
        },2000)
    }
}

export {Snackbar as default};