
/*
 * GET user list page.
 */

module.exports.get_userList = function (req, res) {
    var db = req.db;
    var collection = db.get('user');
    collection.find({}, {},
        function (e, docs) {
            res.render('userlist', {"userlist": docs});
        });
};

module.exports.login = function (req, res) {
    var db = req.db;
    var collection = db.get('user');
    var userName = req.body.user_name;
    var password = req.body.password;

    //check if the user account is registered or not
    var cursor = collection.find({"user_name": userName, "password": password}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        else if (result.length !== 0) {
            //the account name is exist in the database, let the user login
            req.session.user=userName;
            console.log(req.session.user);
            res.render('clothes', { title: 'Clothes' ,login:userName});

        }
        else {
            res.render("login");
        }

    });
    //res.render('login');
};


module.exports.register = function (req, res,next) {

    var db = req.db;
    var collection = db.get('user');
    //Get username, password, first name and last name from form
    var userName = req.body.username;
    var password = req.body.password;
    var lastName = req.body.lastname;
    var firstName = req.body.firstname;
    var cursor = collection.find({"user_name": userName}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        else{
            if (result.length === 0) {
                //the account name is not exist in the database, insert the user info to the database
                collection.insert({
                    "user_name": userName,
                    "password": password,
                    "last_name": lastName,
                    "first_name": firstName
                }, function (err, doc) {
                    if (err) {
                        res.send("connection error with mongodb");
                    }
                    else {
                        //Forward to success page
                        req.session.user=userName;
                        console.log(req.session.user);
                        res.render('index', { title: 'Home Page' ,login:userName});
                    }
                });
            }
            else{
                res.send("user already exist in the database");
            }
        }
    });


};

module.exports.update_user = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.body.username;
    var password = req.body.password;
    var lastName = req.body.lastname;
    var firstName = req.body.firstname;

    var collection = db.get('user');

    collection.update(
        {
            "user_name": userName
        },
        {
            $set: {
                "password": password,
                "last_name": lastName,
                "first_name": firstName
            }, $currentDate: {lastModified: true}
        }
    ).then(function (result) {
        res.redirect("/user/userlist");
    })
};

module.exports.delete_user = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.body.username;

    var collection = db.get('user');

    //check if the user account is registered or not
    collection.remove({"user_name": userName}).then(function (err, result) {
            res.redirect("/user/userlist");
        }
    );


};

module.exports.update_page = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.params.user_name;
    var collection = db.get('user');

    //check if the user account is registered or not
    var cursor = collection.find({"user_name": userName}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        if (result.length !== 0) {
            res.render('post', {"userlist": result});
        }
    });
};

module.exports.register_mainpage = function (req, res) {
    res.render(userName);
};

module.exports.detail = function (req, res,next) {
    let type = req.params.type;
    let product_id = req.params.product_id;
    let db = req.db;
    console.log("query type is: " + type);
    console.log("query id is: " + product_id);
    let collection = db.get(type);
    let index = parseInt(product_id) - 1;
    let productName, price, productDescription, image, review1, review2, review3;
    console.log("the index is: " + index);
    let cursor = collection.find({}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        else if (result.length !== 0) {
            switch (type) {
                case "clothes":
                    switch (product_id) {
                        case "1":
                            productName = result[0].clothes1.name;
                            price = result[0].clothes1.price;
                            productDescription = result[0].clothes1.description;
                            image = result[0].clothes1.pictureURI;
                            review1 = result[0].clothes1.reviews.review1;
                            review2 = result[0].clothes1.reviews.review2;
                            review3 = result[0].clothes1.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "2":
                            productName = result[0].clothes2.name;
                            price = result[0].clothes2.price;
                            productDescription = result[0].clothes2.description;
                            image = result[0].clothes2.pictureURI;
                            review1 = result[0].clothes2.reviews.review1;
                            review2 = result[0].clothes2.reviews.review2;
                            review3 = result[0].clothes2.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "3":
                            productName = result[0].clothes3.name;
                            price = result[0].clothes3.price;
                            productDescription = result[0].clothes3.description;
                            image = result[0].clothes3.pictureURI;
                            review1 = result[0].clothes3.reviews.review1;
                            review2 = result[0].clothes3.reviews.review2;
                            review3 = result[0].clothes3.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "4":
                            productName = result[0].clothes4.name;
                            price = result[0].clothes4.price;
                            productDescription = result[0].clothes4.description;
                            image = result[0].clothes4.pictureURI;
                            review1 = result[0].clothes4.reviews.review1;
                            review2 = result[0].clothes4.reviews.review2;
                            review3 = result[0].clothes4.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "5":
                            productName = result[0].clothes5.name;
                            price = result[0].clothes5.price;
                            productDescription = result[0].clothes5.description;
                            image = result[0].clothes5.pictureURI;
                            review1 = result[0].clothes5.reviews.review1;
                            review2 = result[0].clothes5.reviews.review2;
                            review3 = result[0].clothes5.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "6":
                            productName = result[0].clothes6.name;
                            price = result[0].clothes6.price;
                            productDescription = result[0].clothes6.description;
                            image = result[0].clothes6.pictureURI;
                            review1 = result[0].clothes6.reviews.review1;
                            review2 = result[0].clothes6.reviews.review2;
                            review3 = result[0].clothes6.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "7":
                            productName = result[0].clothes7.name;
                            price = result[0].clothes7.price;
                            productDescription = result[0].clothes7.description;
                            image = result[0].clothes7.pictureURI;
                            review1 = result[0].clothes7.reviews.review1;
                            review2 = result[0].clothes7.reviews.review2;
                            review3 = result[0].clothes7.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "8":
                            productName = result[0].clothes8.name;
                            price = result[0].clothes8.price;
                            productDescription = result[0].clothes8.description;
                            image = result[0].clothes8.pictureURI;
                            review1 = result[0].clothes8.reviews.review1;
                            review2 = result[0].clothes8.reviews.review2;
                            review3 = result[0].clothes8.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "9":
                            productName = result[0].clothes9.name;
                            price = result[0].clothes9.price;
                            productDescription = result[0].clothes9.description;
                            image = result[0].clothes9.pictureURI;
                            review1 = result[0].clothes9.reviews.review1;
                            review2 = result[0].clothes9.reviews.review2;
                            review3 = result[0].clothes9.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                    }
                    break;
                case "shoes":
                    switch (product_id) {
                        case "1":
                            productName = result[0].shoes1.name;
                            price = result[0].shoes1.price;
                            productDescription = result[0].shoes1.description;
                            image = result[0].shoes1.pictureURI;
                            review1 = result[0].shoes1.reviews.review1;
                            review2 = result[0].shoes1.reviews.review2;
                            review3 = result[0].shoes1.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "2":
                            productName = result[0].shoes2.name;
                            price = result[0].shoes2.price;
                            productDescription = result[0].shoes2.description;
                            image = result[0].shoes2.pictureURI;
                            review1 = result[0].shoes2.reviews.review1;
                            review2 = result[0].shoes2.reviews.review2;
                            review3 = result[0].shoes2.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "3":
                            productName = result[0].shoes3.name;
                            price = result[0].shoes3.price;
                            productDescription = result[0].shoes3.description;
                            image = result[0].shoes3.pictureURI;
                            review1 = result[0].shoes3.reviews.review1;
                            review2 = result[0].shoes3.reviews.review2;
                            review3 = result[0].shoes3.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "4":
                            productName = result[0].shoes4.name;
                            price = result[0].shoes4.price;
                            productDescription = result[0].shoes4.description;
                            image = result[0].shoes4.pictureURI;
                            review1 = result[0].shoes4.reviews.review1;
                            review2 = result[0].shoes4.reviews.review2;
                            review3 = result[0].shoes4.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "5":
                            productName = result[0].shoes5.name;
                            price = result[0].shoes5.price;
                            productDescription = result[0].shoes5.description;
                            image = result[0].shoes5.pictureURI;
                            review1 = result[0].shoes5.reviews.review1;
                            review2 = result[0].shoes5.reviews.review2;
                            review3 = result[0].shoes5.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "6":
                            productName = result[0].shoes6.name;
                            price = result[0].shoes6.price;
                            productDescription = result[0].shoes6.description;
                            image = result[0].shoes6.pictureURI;
                            review1 = result[0].shoes6.reviews.review1;
                            review2 = result[0].shoes6.reviews.review2;
                            review3 = result[0].shoes6.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "7":
                            productName = result[0].shoes7.name;
                            price = result[0].shoes7.price;
                            productDescription = result[0].shoes7.description;
                            image = result[0].shoes7.pictureURI;
                            review1 = result[0].shoes7.reviews.review1;
                            review2 = result[0].shoes7.reviews.review2;
                            review3 = result[0].shoes7.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "8":
                            productName = result[0].shoes8.name;
                            price = result[0].shoes8.price;
                            productDescription = result[0].shoes8.description;
                            image = result[0].shoes8.pictureURI;
                            review1 = result[0].shoes8.reviews.review1;
                            review2 = result[0].shoes8.reviews.review2;
                            review3 = result[0].shoes8.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "9":
                            productName = result[0].shoes9.name;
                            price = result[0].shoes9.price;
                            productDescription = result[0].shoes9.description;
                            image = result[0].shoes9.pictureURI;
                            review1 = result[0].shoes9.reviews.review1;
                            review2 = result[0].shoes9.reviews.review2;
                            review3 = result[0].shoes9.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                    }
                    break;
                case "beauty":
                    switch (product_id) {
                        case "1":
                            productName = result[0].beauty1.name;
                            price = result[0].beauty1.price;
                            productDescription = result[0].beauty1.description;
                            image = result[0].beauty1.pictureURI;
                            review1 = result[0].beauty1.reviews.review1;
                            review2 = result[0].beauty1.reviews.review2;
                            review3 = result[0].beauty1.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "2":
                            productName = result[0].beauty2.name;
                            price = result[0].beauty2.price;
                            productDescription = result[0].beauty2.description;
                            image = result[0].beauty2.pictureURI;
                            review1 = result[0].beauty2.reviews.review1;
                            review2 = result[0].beauty2.reviews.review2;
                            review3 = result[0].beauty2.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "3":
                            productName = result[0].beauty3.name;
                            price = result[0].beauty3.price;
                            productDescription = result[0].beauty3.description;
                            image = result[0].beauty3.pictureURI;
                            review1 = result[0].beauty3.reviews.review1;
                            review2 = result[0].beauty3.reviews.review2;
                            review3 = result[0].beauty3.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "4":
                            productName = result[0].beauty4.name;
                            price = result[0].beauty4.price;
                            productDescription = result[0].beauty4.description;
                            image = result[0].beauty4.pictureURI;
                            review1 = result[0].beauty4.reviews.review1;
                            review2 = result[0].beauty4.reviews.review2;
                            review3 = result[0].beauty4.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "5":
                            productName = result[0].beauty5.name;
                            price = result[0].beauty5.price;
                            productDescription = result[0].beauty5.description;
                            image = result[0].beauty5.pictureURI;
                            review1 = result[0].beauty5.reviews.review1;
                            review2 = result[0].beauty5.reviews.review2;
                            review3 = result[0].beauty5.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "6":
                            productName = result[0].beauty6.name;
                            price = result[0].beauty6.price;
                            productDescription = result[0].beauty6.description;
                            image = result[0].beauty6.pictureURI;
                            review1 = result[0].beauty6.reviews.review1;
                            review2 = result[0].beauty6.reviews.review2;
                            review3 = result[0].beauty6.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "7":
                            productName = result[0].beauty7.name;
                            price = result[0].beauty7.price;
                            productDescription = result[0].beauty7.description;
                            image = result[0].beauty7.pictureURI;
                            review1 = result[0].beauty7.reviews.review1;
                            review2 = result[0].beauty7.reviews.review2;
                            review3 = result[0].beauty7.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "8":
                            productName = result[0].beauty8.name;
                            price = result[0].beauty8.price;
                            productDescription = result[0].beauty8.description;
                            image = result[0].beauty8.pictureURI;
                            review1 = result[0].beauty8.reviews.review1;
                            review2 = result[0].beauty8.reviews.review2;
                            review3 = result[0].beauty8.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                        case "9":
                            productName = result[0].beauty9.name;
                            price = result[0].beauty9.price;
                            productDescription = result[0].beauty9.description;
                            image = result[0].beauty9.pictureURI;
                            review1 = result[0].beauty9.reviews.review1;
                            review2 = result[0].beauty9.reviews.review2;
                            review3 = result[0].beauty9.reviews.review3;
                            if (req.session.user) {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: req.session.user,
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            else {
                                res.render('detail', {
                                    title: 'Detail',
                                    login: 'no',
                                    type: req.params.type,
                                    product_id: req.params.product_id,
                                    productName: productName,
                                    price: price,
                                    productDescription: productDescription,
                                    image: image,
                                    review1: review1,
                                    review2: review2,
                                    review3: review3
                                });
                            }
                            break;
                    }
                    break;
            }

        }
        else {
            res.render("login");
        }

    });
}