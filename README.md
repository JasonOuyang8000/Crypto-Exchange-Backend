# CryptoXChange

## Summary

The goal is to allow users create an account and reload fake money to buy crypto currency or to sell crypto currency back for fake money. The fake money should be in terms of USD. The purpose is to give the user a simulation of trading crypto currency using USD.

## Wireframes
https://drive.google.com/file/d/1QGaz5q_t56kmZ5y27n82FFQP0wMhLYXl/view?usp=sharing

### Homepage/Search Page
<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/Homepage.JPG">

### Dashboard Page
<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/Dashboard Page.JPG">

### Login Modal
<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/LoginForm.JPG">

### Signup Modal

<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/SignupForm.JPG">

### All Crypto Page
<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/AllCryptoPage.JPG">

### Trade Page
<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/wireframes/Tradepage.JPG">

## User Stories

1. When user loads home page, it should show them a search page to search for crypto. There should also be a navbar for user to login. 
2. When user searchs for a crypto, it should display the results at the bottom. Each result should show the user the crypto and give the user an option to buy if user is logged in, buy/sell if user owns that current crypto, or prompts user to login for more actions. If buy/sell is clicked it should bring them to the trade page with the prefilled option and form selected. 
3. When user clicks on all crypto link, it should show all the cryptos and also give options to user depending if user is logged in and/or owns the crypto. (same as 2  
4. If user clicks on signup or login, it should show a modal on the screen with the corresponding forms.
5. If user is logged in, the navbar changes and gives user access to the trade and dashboard page.
6. If user is on dashboard page, the user should be able to see their portfolio value, account balance, and crpyto that they own. It should also have a welcome user message.
7. In the trade page, there should be both a buy and sell form, user balance, and user current own crypto. 
8. When user goes on buy form, user should be able to find the crpypto through dropdown and enter an amount they wish to buy.
9. When user goes to sell form, user should be able to find the crpyto through dropdown they own and enter a amount they wish to sell. 
10. Every successful buy should update the current balance and the cryptos they owned in the trade page.
11. Signout button successfully bring the user back to the homepage where the user can search a crypto again. 

## ERD

<img src="https://github.com/JasonOuyang8000/Crypto-Exchange-Backend/blob/master/erd/erd_one.JPG">

## Routes Inventory
### BackEnd
| Http | Route | Description |
|------|-------|-------------|
|   GET   |  /cryptos     |  get all cryptos |
|   GET  |   /cryptos/:id  |   get one crypto |
|   POST   |  /user |  create account|
|   GET  |  /user/verify |  authenticate user|
|   POST   |  /user/login|   login to account|
|   GET  |  /user |  get all user info|
|   GET   |  /user/cryptos|   get all user cryptos|
|   POST   |  /user/cryptos |  user buy/sell crypto|

### Front End
| Http | Route | Description |
|------|-------|-------------|
|   GET   |  /all-cryptos     | all cryptos page        |
|   GET  |   /search |   search a crypto/ homepage      |
|   GET  |   /trade  |   trade crypto page    |
|   GET  |   /dashboard  |   dashboard page|


## MVP Checklist
* All Front End pages to work.
* login/signup modal (with verify, login, and create route)
* Get all cryptos from user.
* Have authentication built in for each route.
* Have a portfolio value be calculated when running GET users/cryptos.
* Have a buy/sell option for each crypto.
* Have dashboard page to show all owned cryptos, welcome message,balance ,and estimated portfolio value.
* Have trade page to show all owned cryptos, balance, estimated profolio value, and buy/sell forms.
* Have all cryptos page to show all cryptos.

## Stretch Goals

