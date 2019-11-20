let s = 'My_Prototype 10:28 18/12/1232 <>?"\\|*';

s = s.replace(/[:\/\\*?<>|"]/g, "");
// s = s.replace(":", "");
console.log(s);
