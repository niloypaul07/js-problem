const users = [{ name: 'niloy', address: 'dhaka', job: 'engernning' }]

console.log(users[0].name);


const users2 = {

    data: [{ name: 'niloy', address: 'dhaka', job: 'engernning' },
    { name: 'rubel', address: 'dhaka', job: 'engernning' },]
}
console.log(users2.data[0].name);

const user3 = {

    data: {
        user: {
            name: 'niloy',
            address: 'dhaka',
            job: 'engernning'
        },
        name: 'rubel', address: 'dhaka', job: 'engernning'
    },

}
console.log(user3.data.usr?.name)