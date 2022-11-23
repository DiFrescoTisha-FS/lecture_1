// use a couple of empty functions 

// findUser

// saveUser

// tip of the day
// findUser(something)

// const findUser = (something)

// const findUser = async (something) => {
    // return await User.findOne() ....or User.find() ...[]
// }

// DO NOT HOG TIE YOURSELF WITH THIS - DO NOT DO THIS
// const findUser = async (email) => {
    // return await User.findOne({email: email}) ....or User.find() ...[]
// }


// DO THIS - use the email in your call instead
// const findUser({email: req.body.email})
// now we can also say....
// findUser({firstName: req.body.firstName})

// const findUser = async(obj) => {
    // return await User.findOne(obj)
// }
    // return await User.findOne() ....or User.find() ...[]
// }
