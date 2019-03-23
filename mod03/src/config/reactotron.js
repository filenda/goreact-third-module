import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  //  clears the timeline history every time the app is started
  tron.clear();

  console.tron = tron;
}
