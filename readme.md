# 🔔 Pling express example

This is the official pling express example. Checkout the official [package](https://github.com/driescroons/pling).

## 👉 Implementation

Implemeting it is quite easy. First install it.

```
yarn add pling
```

### 🤖 Node

Importing the package

```
const notify = require("pling");
```

Copy and paste the following where you'd like to log something.

```
await notify({
    key: process.env.PLING_API_KEY,
    title: "Pling from the package!",
    description: "👋 👋 👋 👋"
});
```

Please make sure to set your **PLING_API_KEY** environment variable. In Node, you can do so by doing the following.

```
process.env[PLING_API_KEY] = "YOUR_API_KEY";
```
