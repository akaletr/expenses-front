import './App.module.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import styles from "./App.module.css"
import Page from "./Components/Page/Page";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.nav}>
                <Navigation/>
            </div>
            <div className={styles.page}>
                <Page/>
            </div>
        </div>
    );
}

export default App;
