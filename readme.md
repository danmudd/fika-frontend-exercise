# Fika Community Tech Test
Hello! This is my solution for the Fika tech test.

I've not worked with `react-native` much before, so this took me a little longer than I'd hoped. It's a little ugly and is far from polished!

## Install & run
In the root folder: 

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run `expo`: 
    ```bash
    npm run start
    ```

3. Install [Expo Go](https://expo.dev/client) and scan the QR code.

If you'd instead prefer to use a web browser, you can do that by running:

```bash
npm run web
```

## Missing features/what's next
I didn't get to tackle a fair few things I was hoping to do, unfortunately! My next steps would be:
- Tests - there's obviously no test coverage. I'd have liked some basic unit and integration testing.
- Refactor component styling - I'm a big fan of things like styled components, and I'd have liked to implement them here rather than direct stylesheets.
- Hoist RTK queries a level up - I'm not happy with the muddling of data logic and views.
- Build a hook/higher-order-component for smarter management of RTK Query states to remove a lot of boilerplate.