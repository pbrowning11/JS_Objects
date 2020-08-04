//object literals
//key:value
// const blogs = [
//     { title:'why mac and cheese rules',likes:30},
//     { title:'10 things to make with marmite',likes:50}
// ]

let user = {
    name:'parker',
    age: 30,
    email: 'parker@gmail.com',
    location: 'charlotte',
    blogs: [
        { title:'why mac and cheese rules',likes:30},
        { title:'10 things to make with marmite',likes:50}
    ], 
    login: function() {
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out')
    },
    logBlogs() {
        //console.log(this.blogs)
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user);
console.log(user.name);

user.age = 35;

console.log(user.age);
console.log(user['email']);

user['email'] = 'browning@gmail.com';
console.log(user['email']);

const key = 'location';

console.log(user[key]);

console.log(typeof user);

user.login();
user.logout();
user.logBlogs();
