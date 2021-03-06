function DBImport()
{
    //MongoDB setup
    var mongo = require('mongodb');
    var monk = require('monk');
    var db = monk('localhost:27017/280FinalProject');



    var shoes={"shoes1": {"name":"Premier Standard Women's Strappy Chunky Block Low Heel - Formal, Wedding, Party Simple Classic Pump","price":"22.99","description":"EARTH CONSCIOUS: These peep toe sandals are made from 100% vegan leather. This amazing pair makes it so easy to keep up with the most current fashion trends - yet remain environmentally conscious!" +
            " Heel measures approximately 3.75 inches" +
            " A TIMELESS DESIGN: Classic design that is sure to compliment every modern woman's wardrobe. Update your personal style with a touch of color or a flashy, colorful hue by purchasing this pair of heels that will last for all memories!" +
            " THE PERFECT SHOE: This stunning pair of heels is ideal for weddings, parties and every other special occasion that calls for dressy, upscale shoes! These Ankle Strap High Heels are the perfect pair to add a few inches to your frame, elongate your legs and rock every dress, denim jean, or maxi with ease!","reviews":
                {"review1":"Love it and happy with it. So cute and comfortable. Trust me, I find so difficult to find the perfect heels to wear all day long at work but this do the work perfectly. I'm getting a lot of compliments as well. I wear with all black outfit to give that pop of color and it looks amazing.","review2":"I got size 6 & tan color. I bought this so I could wear it to work, turns out I can also wear this everywhere! It can be stylish and professional at the same time. I am in love with this shoes and I am very happy with my purchase!","review3":"The strap broke as I was walking home on the first time I wore them! And all I did was walk to the car, into the restaurant, back to the car, and as I was walking inside the strap came completely undone and the stitching ripped apart"},"rate":"3.8","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/1.jpg"},
        "shoes2":{"name":"DREAM PAIRS Bruno Marc Moda Italy Prince Men's Classic Modern Oxford Wingtip Lace Dress Shoes","price":"34.99","description":"man made material" +
            "Heel height: 1 (approx) " +
            "Lightly cushioned man-made footbed " +
            "CLASSIC WING-TIP " +
            "WOODEN HEEL","reviews":{"review1":"Bought these Shoes in April and Two Months later they fell apart, plus the gasoline smell from when I first got them is still there","review2":"Very well made very satisfied","review3":"It's important to remember the price you are paying. For the price these give you HUGE value. They are special occasion shoes. The heel is hollow, so it's not an every day shoe. They look nice (as pictured) in terms of color. I absolutely recommend these to my friends. They are very comfortable. I dressed up my last day in Vegas because my feet hurt and these shoes were more comfortable than my regular shoes." +
                "If you are looking for an every day shoe of this style, this is not your shoe. You will wear them out quickly. Again, remember the price"},"rate":"4.1","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/2.jpg"},
        "shoes3":{"name":"adidas Originals Women's Cloudfoam QT Racer Running Shoe","price":"46.60","description":"Textile and synthetic" +
            "Imported " +
            "Rubber sole " +
            "Shaft measures approximately Mid-Top from arch" +
            "Cloudfoam MEMORY sockliner moulds to the foot for superior step-in comfort " +
            "Cloudfoam midsole and outsole for step-in comfort and superior cushioning " +
            "Synthetic leather metallic heel patch","reviews":{"review1":"These shoes are really comfy I strongly recommend this product","review2":"These shoes are so comfortable and light! I ordered a size 9 and they fit perfectly! The size is just right! I have wide feet and they still fit great! I’ve worn them for three days now at work! I walk around a lot for my 8 hr shift! I have no complaints! They are snug and comfortable! I will be ordering more in the future!","review3":"The shoes are super comfortable, I bought my size but they're really small, ( this ones don't run bigger like other adidas that I have) it's no unbearable but I like my shoes with a little bit of space, but they are so comfy that I really don't care. The stitching was undone from one little part of the shoe, but they didn't have a size bigger or my size so I didn't return it."},"rate":"3.9","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/3.jpg"},
        "shoes4":{"name":"The Fix Women's Brystal Frayed Cross Strap Slide Dress Sandal","price":"69.00","description":"Textile " +
            "Imported " +
            "Synthetic sole " +
            "Heel measures approximately 0.75 " +
            "This slide sandal brings fringe benefits with tonal eyelash trims and a minimalist heel. " +
            "Slip-on closure","reviews":{"review1":"These are not bad. I thought they would be more casual than they are. I got the yellow color and it looks like a bright shiny gold. It looks pretty dressy and sateen looking.","review2":"Cute shoe, fit was fine, quality was good.","review3":"color is just like in the picture. these slides are really comfortable - cushioned insole and the way the strap crosses makes them even better. can't wait to wear them this fall."},"rate":"4.6","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/4.jpg"},
        "shoes5":{"name":"The Fix Women's Page Block Heel Ghillie Dress Sandal","price":"79.99","description":"Suede Imported Synthetic sole Heel measures approximately 3.5\" Platform measures approximately 0.25 inches Slim ghillie-style lacing contrasts perfectly with the wide strapping of this cage sandal in suede. Rounded stacked block heel, metallic aglets","reviews":{"review1":"I had shoes like this from a different company once and hated them. These shoes are fantastic. They fit well - I'm a 6.5 and they were perfect. They look great, very trendy. The heel is nice, very stable shoe and are perfect for long skirts and ankle jeans.","review2":"Fit as expected and looks as pictured; I'm pleased.","review3":"Beautiful shoes and fit correctly. Thank you."},"rate":"4.7","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/5.jpg"},
        "shoes6":{"name":"SEMANS Men's Suede Chukka Boot Casual Lace up Desert Boot Ankle Shoes Stylish Fashion Fit Comfortable Leather Shoes","price":"30.00","description":"Suede leather " +
            "Rubber sole " +
            "FASHION AND VERSATILITY: Chukkas first became popular in 1940s and has persisted as a prevalent menswear shoe in the 21st century. The plain toe design endows with a combination of fashion, comfort and flexibility. The ankle-high boots can be worn with both suits and more casual wear like jeans. over two decades, widely recognized for its superb quality and craftsmanship, and nearly 200 million pairs of shoes have been shipped to states. " +
            "BREATHABILITY AND COMFORT: The premium genuine suede cowhide leather we chose is produced through 9 refined process and 2 months, bringing fantastically rich texture and delicate touch. Soft and defined microfiber lining creates a dry, breathable and comfortable wearing space. " +
            "ANTISKID AND WEAR-RESISTANCE: This pair of shoes are ergonomically designed to provide great cushion and comfort. The soft insole relieves foot fatigue, lightweight rubber sole suitable to walk for extended periods. Anti-skid outsole with clear ribs offers greater grip and all-day support even on rainy days. " +
            "EXQUISITE WORKMANSHIP: Skilled sewing technology enhances the high grade of our desert boots. Neat and smooth sew thread provides more elegance and durability as expected, embodying the delicate integration of the traditional handicraft and contemporary aesthetics. " +
            "100% HAPPY CUSTOMER GUARANTEED: We devotes to providing the most competitive products and the best service for you. Welcome to contact us at any time if there were any question or quality issue for which free replacement and returns will be possible within one year.","reviews":{"review1":"Really nice, comfortable shoe and an incredible value for the price. Require virtually no \"break in\". Took them out of box and wore out for evening of dinner then party. Felt good all night. Had been thinking about buying a chukka boot for a while. glad I waited and got these.Very happy with this purchase.","review2":"Arrived today, I can’t wait to try it. These boots are as the description. " +
                "The light weight and good-looking boots were made in great quality. " +
                "The leathers are soft and comfortable as well. " +
                "I bought size 9. I found that they are a little longer than my other Size 9 shoes. " +
                "As suggestion from internet, boots should be a little longer than shoes. Very happy with this purchase.","review3":"I like this shoe, it feels comfortable when wearing it, it is made from genuine leathers, so it also works good in keeping the air exchange inside with outside. It will be a good match for a jean, looks great."},"rate":"3.9","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/6.jpg"},
        "shoes7":{"name":"Dr. Martens Women's Pascal Leather Combat Boot","price":"95.00","description":"Leather " +
            "Imported " +
            "Synthetic sole " +
            "Shaft measures approximately 6.75 from arch " +
            "Heel measures approximately 2 " +
            "Platform measures approximately 0.50 " +
            "Vibrant combat boot in smooth leather with iconic lug sole and heel pull tab","reviews":{"review1":"I want to leave a solid review here because it took me some time to purchase these and I read numerous reviews prior to. Sizing is confusing, I wear an 8.5 womens. I went with the 8W (not to be confused with Wide, the W stands for womens). I sized down because I didn't want extra room in my boot. I tend to prefer my shoes on the tighter side, plus I was concerned the extra room would cause blisters from friction and movement (as my Frye boots did when I ordered a size up). These boots are BEAUTIFUL. Exactly as I remembered from my pair I owned in high school. They fit tight on first wear, especially where the tongue meets the boot (the seam). So I wore wet wool socks for 3 hours in them to soften em up and form them to my feet. My left foot a slightly bigger than my right so this shoe fits tighter but not horribly uncomfortable at all. I wore them with regular socks last night for 5 hours and they fit AWESOME already. No discomfort at all. Super fast and easy to break in when it comes to a leather boot. My Fryes took months to break in and quite honestly, they still aren't nearly as comfortable at these. I'd feel confident wearing these all day or to walk around in alot. LOVE LOVE THEM.","review2":"I had tried it on at a Dr. Martens store before buying it online. Amazon had a better price for my size. I was going to buy the gothic purple color, but after seeing it was more gray, I decided to get the red one. I had a cobbler stretch them out for me, not because they were tight, but because they were stiff. They will need a little more breaking in, but it will not be as painful as going through the whole process on your own. I am usually a US size 8 in flats, and 8.5 in sneakers and boots to accomodate the thicker socks.I have slender feet, and my feet were swimming in my regular size size 8, even with the thick socks I wore the day I tried them on. The staff at the store said I should size down to UK size 5.","review3":"I cannot even begin to explain my disappointment in these boots. First of all, it SCREAMS counterfeit in every way. Right out of the box, the paint has already started peeling off in at least 2 spots that I immediately noticed. The stitching (and double stitching) throughout the boot - from the sole to the tongue, is so sloppy, it would never have gotten off the assembly line at an actual Dr. Marten manufacturing plant. The kicker here is that they completely forgot to finish the boot. In fact, it has a cardboard insole! Yes, you read that right. If this is actually the \"new Dr. Marten\" quality, I will never buy another. Sad sad sad."},"rate":"4.4","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/7.jpg"},
        "shoes8":{"name":"Kate Spade New York Women's Sunset Flat Sandal","price":"63.98","description":"Leather " +
            "Imported " +
            "Leather sole " +
            "Heel measures approximately 0.5 " +
            "Platform measures approximately 0.25 inches " +
            "Poms on upper","reviews":{"review1":"These gorgeous sandals were comfortable from first wear. They needed no breaking in and look stunning and unique on. At first glance one might think that the colour of these sandals would be limiting, but in actual fact they have the ability to complement and add a burst of colour to myriad outfits. Couldn't be happier with my purchase.","review2":"The color is amazing! Fits perfect, súper confortables and looks georgus!","review3":"These are real leather, the kind of leather that is soft and does not need breaking in. I have gotten many compliments, and because of the tan and bright colors they are very versatile and can be worn with many outfits."},"rate":"4.9","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/8.jpg"},
        "shoes9":{"name":"Steve Madden Women's Irenee Heeled Dress Sandal","price":"59.96","description":"Leather " +
            "Imported " +
            "Synthetic sole " +
            "Heel measures approximately 2 inches " +
            "2 inch heel height " +
            "Suede or man-made upper material","reviews":{"review1":"I have got lots of compliments on these shoes. Great style that can be used to dress up any outfit.","review2":"Great shoes- perfect for work as the heel is a modest height. The ankle strap is extremely comfortable and I have not experienced any blistering","review3":"The shoe itself is comfortable and I could see myself wearing it all night however the sole was SO slippery I could hardly stand in them without feeling like I was sliding around. They might scratch enough with wear so they lose that but I opted to get a pair of similar shoes from aldo instead that were equally as comfortable but easier to walk in."},"rate":"4.1","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/shoesPictures/9.jpg"}};
    var beauty = {
        "beauty1":{"name":"SHISEIDO Ultimune Power Infusing Concentrat","price":"97.00","description":"A one-of-a-kind boosting pre-treatment that helps defend against multiple signs of aging and damage, while enhancing the effects of skincare that follows. \n" +
            "-Ultimune Complex™ (Bulgarian Rose Water, Aqua In Pool, and Yeast): Helps protect, strengthen, and maintain healthy-looking skin. \n" +
            "- Gingko Biloba Leaf Extract, Shiso, and Thyme",
            "reviews":{
            "review1":"I got this as a 100 reward sample. I have collected about 5 bottles so far and have so far only started using my first bottle. I put this on after double cleansing my face, using the White Lucent softener, and before I put on the Brightening Serum (<another excellent product!). I use this 2x a day as part of my daily skincare regimen. I have used this for 4 days already and I was actually able to see quick results on the 2nd day. After I finish all the samples, I do plan on purchasing the full size. I highly recommend this product!","review2":"Received this as a sample and used it at night with moisturizer over it. I am a serum/moisturizer junkie and always expect products to take time to work, but the results from this were amazing. The next morning lines were less visible and skin incredibly smooth! 4 stars only because of the price.","review3":"I received this as a gift for one of Shisiedo's gift program and I honestly love it! I've been breaking a lot due to stresses, and this product saved my skin. It gives me a glowing look and keeps my acnes at bay. My skin feels and looks much better now and I've only been using it for three days. Will be purchasing the full size soon. Good job shiseido!"},"rate":"4.1","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty1.jpg"},
        "beauty2":{"name":"Eye-Conic Multi-Finish Eyeshadow Palette – Coconut Fantasy Collection","price":"49.00","description":"A long-wearing eyeshadow palette in a glossy white compact with rose gold accents, featuring seven shades in four fashion finishes—velvet, satin, silk, and lamé—to layer and dress your eyes.","reviews":{"review1":"My new favorite palette! Could easily compete with AB soft glam! The colors are so smooth and blendable! A lot of the times you get interesting colors without a way to transition them but this palette is all you need. I'm blonde with blue/green eyes and these colors are perfect! If you're looking for something between all the pink/plums and browns - THIS IS THE ONE!","review2":"I LOVE The colors!!! They are so pretty!!! I just love when Marc Jacobs comes out with these beautiful limited edition items, plus I am a sucker for packaging and it is just packaged so pretty!!! Check your local Sephora stores, even if it says its out of stock online!!! My store had everything!!!!! But I had to ask for it!!!","review3":"Giiirrrrrrlllll these shades!! They are gorgeous! They are very unique and the packaging is super luxurious. The formula is the exact same as all the other Marc Jacobs pallets. Honestly, this collection as a whole is a staple."},"rate":"4.2","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty2.jpg"},
        "beauty3":{"name":"Bestsellers Kit","price":"120.00","description":"A set of bestsellers for crystal clear, healthy-looking skin. The Facial Treatment Essence refines texture, radiance, and firmness while reducing the appearance of wrinkles and spots. The Facial Treatment Mask is a cult-favorite sheet mask that immerses your skin in intense hydration and instantly boosts radiance. And the R.N.A. POWER Cream is an award-winning moisturizing cream that supercharges skin's youthful radiance. ","reviews":{"review1":"The best SK-II kit ever!!! I am living for the Essence no matter what but the RNA Anti-Aging Cream and the Facial Treatment Mask are easily on the list of my top favorites too! This kit is a must have for anyone that wants to try SK-II or even for an SK-II junkie like me!","review2":"The best SK-II kit ever!!! I am living for the Essence no matter what but the RNA Anti-Aging Cream and the Facial Treatment Mask are easily on the list of my top favorites too! This kit is a must have for anyone that wants to try SK-II or even for an SK-II junkie like me!","review3":""},"rate":"5","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty3.jpeg"},
        "beauty4":{"name":"Squalane + Vitamin C Rose Oil","price":"72.00","description":"A luxurious face oil that visibly brightens, firms, and evens skin tone.  Biossance combined the weightless hydration of the sugarcane-derived, sustainable squalane oil with the brightening power of vitamin C, plus rose oil—revered for centuries to reduce the look of lines and wrinkles. Just a drop or two of this exquisite oil delivers exceptionally soft, smooth, and radiantly healthy-looking skin. ","reviews":{"review1":"If you're in the market for a beauty oil or want to try one because your fave \"beauty guru\" uses one on their social media outlet; they haven't experienced anything! I am a dry skin type but LOVE full coverage foundations. For the past two weeks I have been adding 2-3 drops to my KVD foundation and everyone has been complimenting my skin and wanting my foundation. The honest truth is that this oil has changed the game on my application of this foundation. Not only am I still very hydrated throughout the day with this beauty concoction, but my skin is brighter and my trouble area's are smoother! This oil is top 2 for me to mix with my KVD foundation which by the way is made for an oily skin type. #skingoals","review2":"I've been using this product (aka \"the nourisher\") even before they got in Sephora, before the new packaging. I LOVE this product and can't live without it. I use this daily, with several drops going a long way. I use it morning and night after washing my face. It's a good base for tinted moisturizers in the morning, and it's not greasy & heavy that I can pile on other evening products as well. P.S. I'm a very low maintenance, less is more kind of girl. I invest in expensive but valuable products. This definitely is one of the very few skincare essentials I will stick to! :)","review3":"I've only been using this several days now, and there is already a noticeable difference in my skin tone. I have intensely dry/dehydrated skin and have been using 3 drops morning and evening in conjunction with my moisturizer. Almost all the redness around the center of my face is gone. It smells lovely, too. Well worth the price."},"rate":"4.2","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty4.jpg"},
        "beauty5":{"name":"T.L.C. Sukari Babyfacia","price":"80.00","description":"A pro-quality AHA/BHA mask that works as a \"facial\" to reveal greater clarity, improved skin texture and tone, and a more youthful-looking radiance.","reviews":{"review1":"This line is the only one I’ve ever seen results for my melasma, which can be be difficult to treat. I tried the day and night samples first and could see results. Just purchased their sunscreen and the acid trip package. I’m 51 and not have acne but some sun damage. I so thankful to have found a line I love and to see real results! You get what you’re paying for with this line.","review2":"I love this product!! I use twice a week and leave on for 10 minutes - it makes my face baby smooth. It does tingle but only when you first apply it. I think its important to note that this product states that it should not be used with retinol - but it is well worth it.","review3":"I had heard great things about this product, but could never justify spending $80. So, I was REALLY excited when they started offering this mini size. My skin looks glowy and healthy and I finally feel confident without makeup. I have sensitive combination skin, and I've noticed this tingling a little bit when I first put it on, but it's bearable. I've used this 3 times now and there still seems to be more left in the bottle, but I'm ordering another to waiting in the wings! Also I love that it comes with the marula oil!"},"rate":"4.3","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty5.jpg"},
        "beauty6":{"name":"Water Sleeping Mask","price":"25.00","description":"An overnight, moisture-recharging gel mask that quickly absorbs while you sleep to deeply hydrate skin. \n" +
            "Recharge your dehydrated skin while you sleep with this innovative mask. It’s formulated with highly concentrated Hydro Ionized Mineral Water to deliver high doses of moisture to stressed, parched skin. Calming Sleepscent™, infused with orange flower, rose, and sandalwood, and it relaxes and comforts while apricot and evening primrose extracts to brighten and purify fatigued skin. The result: skin looks and feels radiant, refreshed, and soft so you wake up with soft, glowing skin.","reviews":{"review1":"After going through a few DS sizes of this sleeping mask I knew I just had to buy the full size! It redecues my redness and the appearance of my healing acne. I also notice my skin looks overall more nourished and hydrated. I love to use it 2-3x a week to combat my dry skin.","review2":"This is probably the best hydrating over night mask I have ever used. My skin feels so hydrated and supple and it lasts for a days after each use. Its also not irritating at all and I have used this on sunburnt skin too. Definitely worth every dollar","review3":"I like this mask enough to use it as the top layer of whatever serums I'm using. I don't think the performance is anything life-changing, but it smells nice, has a fun texture, is hydrating, and works as a great top layer. My routine from base to top is usually toner > aha/bha > serums (like Sunday Riley Good Genes, niacinamide, vitamin c, whatever else) > moisturizer/Laneige sleeping mask. If you could only pick star items from the Laneige line, I would recommend trying this mask and the lip sleeping mask first, as they are what shot Laneige to fame. This mask falls more into the \"skintertainment\" area for me, and one that I'll indulge because I love that it's fairly inexpensive and hydrating."},"rate":"4.1","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty6.jpg"},
        "beauty7":{"name":"Wild Rose Vitamin C Active Brightening Oil","price":"54.00","description":"A powerful brightening oil infused with real rose petals and boosted with super C to increase skin's absorption of vitamin C by up to 1,000 percent.\n" +
            "Wild rose oil is nature's most potent skin brightener with nine times more vitamin C than found in orange juice. This oil is 94.5 percent natural and suitable for all skin types. All KORRES formulations are made without petrolatum, mineral oil, silicones, propylene glycol, and ethanolamines. They are dermatologist tested and cruelty-free.","reviews":{"review1":"I love this oil. Smells lovely. A little does go a long way. My skin looks glowing and healthy after I use it. I was using only at night but I'm adding it into the morning as well just because I love it so much!!","review2":"I love everything about this oil - the smell, feel, the look of it in the container and the results. It's not too greasy and seems to sink into my skin instead of just staying on the top layer. I've been using it for a few weeks with the Korres sleep mask and I love how my skin looks and feels. It is spendy but it's so pretty! I look forward to my bedtime routine just to use this product!","review3":"Apply after you clean your face and apply your serum. Wait a little to let it penetrates then add your cream. Go to bed, the next morning, PERFECT SKIN DAY! Foundation slide right on, beautiful natural glow and it nourish the dry spots. Less oil in my T-Zone then usually. Seriously, game changer."},"rate":"4.2","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty7.jpg"},
        "beauty8":{"name":"Radiant Creamy Concealer","price":"30.00","description":"An award-winning concealer that provides medium-to-full, buildable coverage and corrects, contours, highlights, and perfects. " +
            "\"Makeup shouldn’t cover your skin, it should enhance your natural beauty, not mask it.\"—François Nars, Founder and Creative Director of NARS Cosmetics","reviews":{"review1":"I have very dark circles and dry skin, this concealer works wonderful on my dry under eye area. It covers beautifully, it is not heavy and makes me look so awake and rest every time I use it. I set it with the Laura Mercier Secret Brightening Powder and I apply it with a beauty blender (it looks horrible on my dry skin if I apply it with a brush.) Hope this info helps you !! =)","review2":"Bought the travel size in Vanilla, while waiting in the huge lineup a week ago. I have to say it is worth every penny! Wow! Smooth - Full Coverage - Not cakey - Blends super well. I will buy again!","review3":"Purchased this concealer for under eye use - I have very dark circles thanks to genetics, so I use under eye concealer on a daily basis. This concealer provides a great amount of coverage without looking caked on and blends very easily. I have used several other products - Yves St Laurent Touche Eclat and Benefit Fake-Up most recently - and find this concealer to be superior to both for all day stay and coverage without being noticeable."},"rate":"4.1","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty8.jpg"},
        "beauty9":{"name":"One Essential City Defense SPF 50","price":"59.00","description":"An invisible revolutionary shield that offers unequaled skin protection against toxins. " +
            "Thanks to a triple anti-pollution action—anti-adhesion, anti-penetration, and anti-oxidization—and powerful UVA/UVB filters, your skin is protected for up to eight hours. It works great as a makeup base, refreshes skin, and delivers youthful-looking radiance. ","reviews":{"review1":"I have tried numerous sunscreens in search of just the right amount of protection without the shine, grease or ghostly pale undertones. This is by far the best facial sunscreen ever. I use it alone or under my foundation and it also smooths as a primer, so no primer needed now. I am hooked. Pricey yes but I feel its worth the splurge.","review2":"This is the best SPF I have ever used. It is lightweight smells amazing and glides on with no chalky residue. Whatever I was using before I threw out!! I tell everyone to try it. You only need a little. This is a staple in my daily routine. If it wasn't so privy if slather it on all over. Best purchase to make","review3":"this one just beat my holy grail sunscreen! I've tried a lot of sunscreens over the years. drugstore and high end ones.I've tried Japanese, European, American, Korean, bb & cc creams and even organic brands but nothing seems to work as well as the Clarins which I always gravitate back to, until I tried this one. -it's lightweight -doesn't clog my pores (i have combination skin) -doesn't give me more breakouts ( i suffer from acne vulgaris) -doesn't irritate my sensitive skin -doesn't feel greasy (still haven't tried it during summertime though) the only con is maybe the price tag, however, with this product a little goes a long way. i only need to use half the quantity of what i generally use with my other sunscreens."},"rate":"4.0","pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/beautyimg/beauty9.jpeg"}};
    var clothes = {
        "clothes1":{"name":"Lana Stripe Sweater","price":"98.50","description":"The spring crew. In a lightweight linen blend for warm days and nights. To layer over or under.\n" +
            " Linen blend " +
            " Straight, relaxed fit " +
            " 24\" in length, based on a size M; our model is 5'9\" and is wearing a size S " +
            " Rollneck; rib knit trim at cuffs and hem; three functioning polished gold-tone buttons at the cuff " +
            " Dry clean " +
            " ImportedClub Monaco cannot accept any in-store returns. ",
            "reviews":{
                "review1":"Great sweater for spring! Lightweight and comfortable.",
                "review2":"This sweater is pleasant. It's modern, slim, light fabric that transitions throughout the seasons, and looks beautiful. It's slightly long enough for leggings, but would be best with jeans or khakis.",
                "review3":"So comfy. Great casual sweater to wear with jeans!"},
            "rate":"4",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c1.jpg"},
        "clothes2":{"name":"Scharpettah Dress","price":"288.00","description":"Minted. A muted pale green hue and an allover swiss dot pattern soften a halter neckline with a vintage nod. For special occasions and weekend dates. " +
            "Polyester; lining: polyester " +
            "Relaxed fit " +
            "44\" in length at center front, based on a size 6; our model is 5'10\" and is wearing a size 2 " +
            "Halter neckline; removable self-tie sash at waist; allover tonal swiss dots; concealed back zip with hook-and-eye closure " +
            "Partially lined " +
            "Pale aloe colorway available online only " +
            "Dry clean " +
            "Imported ","reviews":{"review1":"This dress is so falttering. It hugs the smallest part of your waist, and the hi low is so cute! I wear it to work, and Im planning to take it to Mexico with me for vacation","review2":"This a very cute and comfortable dress. It could be worn casually or dressed up","review3":"This dress fit beautifully! I can't wait to flaunt it in Jamaica!"},
            "rate":"5",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c2.jpeg"},
        "clothes3":{"name":"Crista Jacket in Studio","price":"368.00","description":"Pay homage to the 90s in our Crista Jean Jacket. The classic look is reinvented with slashed side slits that add a special touch to the light denim wash, uncovering what’s underneath. Slightly oversized, a high low hem features light distressing at the edges for a cool, no-fuss silhouette. " +
            "Size and fit " +
            "- 100% Cotton " +
            "- Non-Stretch " +
            "- Fits true to size " +
            "- Model is wearing size Small. " +
            "- Made in Los Angeles ","reviews":{"review1":"This jacket is so sexy and comfortable! It literally brings together ANY look and it is so chic! My only complaint is that it does look a little boxy when you zip it all, it runs slightly small, but you only notice it when you zip it all up. I still got a medium and it feels great. Buy this jacket! It IS SO WORTH IT! I might even buy more in different colors.","review2":"I love love LOVE this jacket. The style is so cute and adds more flare when looking to dress up casual outfits, especially when you just want to wear some tennis ","review3":"I really liked this coat it was very stylish and fit well ... just didn't work or the occasion that I was looking for"},
            "rate":"4.3",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c3.png"},
        "clothes4":{"name":"Zemphira Romper","price":"149.00","description":"A fine frenzy. Bold blooms and a bright hue breathe new life into the romper. For dressing up with heels and hoops or down with sneakers and a tote. " +
            "Polyester " +
            "Straight fit " +
            "3 inseam, based on a size 6; our model is 5'10\" and is wearing a size 2 " +
            "V-neck; concealed modesty snap button; elastic waist; slant pockets; belt at waist " +
            "Dry clean " +
            "Imported ",
            "reviews":{"review1":"This color is gorgeous for spring. It fits well and is of great quality.","review2":"So comfy, so flattering. Will be buying in multiple colors","review3":"Busty girls beware! This shirt is way move low-cut than it looks in the photos."},
            "rate":"3.2",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c4.jpeg"},
        "clothes5":{"name":"Leredey Dress","price":"228.00","description":"Side effect. A singular shoulder ruffle brings a welcome softness to a clean-lined silhouette. For formal and informal occasions alike. " +
            "Polyester; lining: polyester " +
            "Straight fit " +
            "37¾\" in length, based on a size 6; our model is 5'9\" and is wearing a size 2 " +
            "Ruffle at left shoulder; shoulder strap at right shoulder; concealed back zip with " +
            "hook-and-eye closure " +
            "Lined " +
            "Navy colorway available online only " +
            "Dry clean " +
            "Imported ","reviews":{"review1":"This dress is super cute, and I love the side zip detail. The seaming on the chest looks a little odd, but overall the fit is good and it's comfortable.","review2":"Perfect red dresses! Fits well and received so many compliments :)","review3":"Perfect red dresses! Fits well and received so many compliments :)"},
            "rate":"4.4",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c4.jpeg"},
        "clothes6":{"name":"Remi Sweater","price":"148.00","description":"With a twist. Unexpected details transform a slim-fitting sweater into something more dynamic. For jeans, with or without heels.\n" +
            "Viscose blend " +
            "Slim fit " +
            "23½\" in length, based on a size M; our model is 5'9\" and is wearing a size S " +
            "V-neck; cutout at back with twist details; allover rib knit " +
            "Hand wash " +
            "Imported ","reviews":{"review1":"Worn twice, washed once, never dried. Not such a great deal now that I have to have it fixed...","review2":"I wore the top and wash it and when it came out the washer it was damage( un sew) on the arm and the bottom of the top.","review3":"Style is different very cute. Material nice; not too heavy but very soft. Runs a little large; recommend sizing down 1 size. But love it!"},
            "rate":"3.0",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c6.jpeg"},
        "clothes7":{"name":"Katya Pleated Short","price":"148.00","description":"With movement. Tiny pleats give a pair of shorts a touch of sophistication. Instead of a skirt.\n" +
            "Polyester ; lining: polyester " +
            "Straight fit " +
            "3\" inseam, based on a size 6; our model is 5'10\" and is wearing a size 2 " +
            "Elastic waistband with ruffle detail; two adjustable side ties; allover pleats " +
            "Lined " +
            "Dry clean " +
            "Hand wash " +
            "Imported ",
            "reviews":{"review1":"Sooooo cute! I had high hopes for these but was disappointed. These run small in my opinion. And we’re not very flattering to my booty. Tight in all the wrong places.","review2":"There is no lining on these shorts, which is only a problem for the ivory color. Overall fit and style for the darker colors - 5 stars. Ivory pair - 3 stars. I wish they would have made these with lining since they are very cute. They made the striped pair (same style with the high waist and sash tie) with lining!!!","review3":"These shorts are really cute and you can dress them up or down. They run a little bit small but I still fit into my normal size. I like them because are not really short. I bought them in the orange color and love it."},
            "rate":"4.1",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c7.jpeg"},
        "clothes8":{"name":"Kimi Sweater","price":"125.00","description":"Cropping up. An abbreviated cut and bold stripe give a classic sweater a sporty update. Pair with high-waisted jeans, pants, and skirts or with its matching Vekaranda skirt. " +
            "Viscose blend " +
            "Slim, cropped fit " +
            "15¾\" in length, based on a size M; our model is 5'9\" and is wearing a size S " +
            "Crewneck; rib knit trim at neck, hem, and cuffs; short sleeves; horizontal striped motif " +
            "Hand wash " +
            "Imported ",
            "reviews":{"review1":"Sweater runs very small and is very short. Is no where near a slouchy type fit as the picture suggests. I will be returning.","review2":"Definitely boot cut, NOT skinny jeans. Stiff material and awful fit - ordered my normal size and could barely zip them. Was really excited to order these and really disappointed when I put them on.","review3":"Definitely boot cut, NOT skinny jeans. Stiff material and awful fit - ordered my normal size and could barely zip them. Was really excited to order these and really disappointed when I put them on."},
            "rate":"3.8",
            "pictureURI":"https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c8.jpeg"},
        "clothes9":{"name":"Citizens of Humanity Rocket","price":"218.00","description":"The new crop. A skinny silhouette is at its best with a high rise and shorter hemline. From L.A.-based denim brand Citizens of Humanity." +
            "Cotton blend " +
            "Skinny leg; high rise " +
            "26\" inseam; our model is 5'10\" and is wearing a size 26 " +
            "Belt loops at waistband; zip fly with button closure; classic five-pocket styling " +
            "By Citizens of Humanity " +
            "Machine wash " +
            "Made in the USA",
            "reviews":{"review1":"This pants fit just right. i always buy size 0 short. I am 5'3\" and weight 125 pounds. Love them!!","review2":"Love this sweater and how it’s reversible. The twist has a fun edge to it. Lighter which is nice for spring and fall","review3":"cute concept but wrong execution / fit. this sweater, although 100% cotton, felt scratchy. it did not have a casual-sexy drape, but sat very \"stiff\" and a boxy fit"},
            "rate":"3.5",
            "pictureURI":"=https://s3-us-west-1.amazonaws.com/cmpe280finalprojectbucket/clothes/c9.jpeg"}};

    var shoesCollection = db.get('shoes');
    shoesCollection.insert(shoes,function(err,doc){
        if(err)
        {
            console.log("connection error with mongodb");
        }
        else{

        }
    });

    var clothesCollection = db.get('clothes');
    clothesCollection.insert(clothes,function(err,doc){
        if(err)
        {
            console.log("connection error with mongodb");
        }
        else{

        }
    });

    var beautyCollection = db.get('beauty');
    beautyCollection.insert(beauty,function(err,doc){
        if(err)
        {
            console.log("connection error with mongodb");
        }
        else{

        }
    });
}
DBImport();



//random function to generator user's account name, password, last name and first name
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/280FinalProject');
var collection = db.get('user');
function makeInfo(inputType) {

    var text = "";
    var number_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var capital_letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num_count = Math.floor(Math.random()*10)+4;
    var i = 0;
    if(inputType==="number_letter")
    {
        for (; i < num_count; i++)
            text += number_letter.charAt(Math.floor(Math.random() * number_letter.length));
    }
    else if(inputType==="letter"){
        for (; i < num_count; i++)
            text += letter.charAt(Math.floor(Math.random() * letter.length));
    }
    else{
        for (; i < num_count; i++)
            text += capital_letter.charAt(Math.floor(Math.random() * capital_letter.length));
    }

    return text;
}

var count = 0;
for(var j = 0;j<10;j++)
{
    var userName = makeInfo("letter")+"@hotmail.com";
    var password = makeInfo("number_letter");
    var lastName = makeInfo("capital_letter");
    var firstName = makeInfo("capital_letter");
    var result = collection.find({"user_name":userName});

    if(result.length!==0){
        //the account name is not exist in the database, insert the user info to the database
        collection.insert({"user_name":userName,"password":password,"last_name":lastName,"first_name":firstName},function(err,doc){
            if(err)
            {
                res.send("connection error with mongodb");
            }
            else{
                count+=1;
            }
        });
    }

}
//check if the user account is registered or not
