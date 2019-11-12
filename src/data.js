const user = [
    {name:'mario',premium:true},
    {name:'goku',premium:false},
    {name:'gohan',premium:true},
    {name:'vegeta',premium:true}
];

const getPremiumUser = (user) =>{
    return user.filter(userItem => userItem.premium === true);
}

export {getPremiumUser, user as default};