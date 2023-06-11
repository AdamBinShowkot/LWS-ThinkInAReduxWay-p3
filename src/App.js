import Header from "./components/Header";
import HomeComponent from "./components/Home";
import ChartComponent from "./components/Chart";
import './assets/css/index.css'
import { Fragment, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [activePage,setActivePage]=useState({
    homeActive:true,
    chartActive:false
  })
  return (
    <Fragment>
      <Provider store={store}>
        <nav className="bg-[#171C2A] py-4">
          <Header setHandler={setActivePage}/>
        </nav>
        <main className="py-16">
          {
            activePage.homeActive && !activePage.chartActive?(
              <HomeComponent/>
            ):(
              <ChartComponent/>
            )
          }
        </main>
      </Provider>
    </Fragment>
  );
}

export default App;
