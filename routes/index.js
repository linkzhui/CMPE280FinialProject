let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/userDB');
/* GET Clothes page. */
router.get('/',function(req, res, next){
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('index', { title: 'Home Page', login:req.session.user});
    }
    else{
        res.render('index', { title: 'Home Page', login:'no'});
    }
});

router.get('/clothes', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('clothes', { title: 'Clothes', login:req.session.user});
    }
    else{
        res.render('clothes', { title: 'Clothes', login:'no'});
    }
});

/* GET Shoes page. */
router.get('/shoes', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('shoes', { title: 'Shoes', login:req.session.user});
    }
    else{
        res.render('shoes', { title: 'Shoes', login:'no'});
    }
});

/* GET Beauty page. */
router.get('/beauty', function(req, res, next) {
    console.log("current user: "+req.session.user);
    if(req.session.user)
    {
        res.render('beauty', { title: 'Beauty', login:req.session.user});
    }
    else{
        res.render('beauty', { title: 'Beauty', login:'no'});
    }
});

router.get('/detail/:type/:product_id', function(req, res, next) {
    let type = req.params.type;
    let product_id = req.params.product_id;
    let db = req.db;
    console.log("query type is: "+type);
    console.log("query id is: "+product_id);
    let collection = db.get(type);
    let index = parseInt(product_id)-1;
    let productName,price,productDescription,image, review1, review2,review3;
    console.log("the index is: "+index);
    let cursor = collection.find({}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        else if (result.length !== 0) {
            switch(type)
            {
                case "clothes":
                    switch (product_id)
                    {
                        case "1":
                            productName = result[0].clothes1.name;
                            price = result[0].clothes1.price;
                            productDescription = result[0].clothes1.description;
                            image = result[0].clothes1.pictureURI;
                            review1 = result[0].clothes1.reviews.review1;
                            review2 = result[0].clothes1.reviews.review2;
                            review3 = result[0].clothes1.reviews.review3;
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            break;
                    }
                    break;
                case "shoes":
                    switch (product_id)
                    {
                        case "1":
                            productName = result[0].shoes1.name;
                            price = result[0].shoes1.price;
                            productDescription = result[0].shoes1.description;
                            image = result[0].shoes1.pictureURI;
                            review1 = result[0].shoes1.reviews.review1;
                            review2 = result[0].shoes1.reviews.review2;
                            review3 = result[0].shoes1.reviews.review3;
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image,review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image,review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            break;
                    }
                    break;
                case "beauty":
                    switch (product_id)
                    {
                        case "1":
                            productName = result[0].beauty1.name;
                            price = result[0].beauty1.price;
                            productDescription = result[0].beauty1.description;
                            image = result[0].beauty1.pictureURI;
                            review1 = result[0].beauty1.reviews.review1;
                            review2 = result[0].beauty1.reviews.review2;
                            review3 = result[0].beauty1.reviews.review3;
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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
                            if(req.session.user)
                            {
                                res.render('detail', { title: 'Detail', login:req.session.user,type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
                            }
                            else{
                                res.render('detail', { title: 'Detail', login:'no',type:req.params.type,product_id:req.params.product_id,productName:productName,price:price,productDescription:productDescription,image:image, review1:review1,review2:review2,review3:review3});
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

});

module.exports = router;
