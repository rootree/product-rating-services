#!/bin/bash

mongo localhost/Adidas --eval 'var document = {"productId": "FW1079","name": "A+P LUNA ROSSA 21 SCHOENEN" }; db.products.insert(document);'
mongo localhost/Adidas --eval 'var document = {"productId": "FW1079","averageReviewScore":   5,"numberOfReviews": 6}; db.productreviews.insert(document);'
mongo localhost/Adidas --eval 'var document = {"username": "me","password": "**********" }; db.users.insert(document);'
