# fullstack-coding-test

# preparation
1. Enter to the **api** folder via terminal / bash
2. Install all necessary package using `npm install` or `yarn install`
3. And then enter to the **web** folder as well via terminal / bash
4. And then also install all necessary package using `npm install` or `yarn install`

# database section
1. Create a MySQL database
2. Open `.env` file inside **api** folder and adjust all variable to match your environment
3. Enter the **api** folder via terminal / bash
4. type `npx sequelize-cli db:migrate` or `yarn sequelize-cli db:migrate` to migrate all tables into your MySQL database
5. Please feel free to seed your database first

# API (backend) section
1. Enter the **api** folder via terminal / bash
2. If you are using Windows, please open another terminal / bash which support unix command such as WSL or git bash
3. type `npm ts` or `yarn ts`. Please remember that this command requires `rm` script which is only supported by unix terminal
4. And then please open another terminal / bash and enter the **api** folder as well and if you are Windows user, now you can use powershell to run this command. But please run this command in another terminal / bash
5. type `npm dev` or `yarn dev`
6. Check [http://localhost:8080](http://localhost:8080) to indicate that this server runs successfully
7. To run the test, please shut down the server first and then run `npm test` or `yarn test`

# web (frontend) section
1. Enter the **web** folder via terminal / bash
2. type `npm start` or `yarn start` to start development server
3. Check [http://localhost:3000](http://localhost:3000) to indicate that the application runs successfully
