# Instructions to run the project locally

1. Install packages
```bash
$ npm install
```

2. Run the script to boot up the local fork BSC network
```bash
$ npm run start:node
```

3. In another terminal window, bootstrap the local network account with some LLG

This will transfer some LLG by impersonating the contract owner on the local network to the first
address on the hardhat dummy wallets

```bash
$ npm run bootstrap
```



4. Start the API server
> before starting the server make sure to rename .env.example to .env and update the values, otherwise you will get an error

```bash
$ npm run start:server
```


Finally you can use the curl command to call the API from your terminal
```bash
$ curl http://localhost:8050/play/balance?address=0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

{"balance":"100.0","symbol":"LLG"}
```