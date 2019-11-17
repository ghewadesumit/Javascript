import ToolTip from './webapp/tooltips';
import Dropdown from './webapp/dropdown';
import Tabs from './webapp/tabs';
import Snackbar from './webapp/snackbar';


const tooltip = new ToolTip(document.querySelector('.tooltip'));
console.log('I\'m ready to build projects');

tooltip.init();
  
const dropdowns = document.querySelectorAll('.dropdown');
console.log(typeof(dropdowns));
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})


//create Tabs

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//show snackbar
const snack = new Snackbar();
    snack.init();
document.querySelector('.snackbar-trigger').addEventListener('click',()=>{

    snack.show();
})