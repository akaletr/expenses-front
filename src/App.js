import './App.module.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./App.module.css"
import Content from "./Components/Content/Content";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.nav}>
                <Sidebar/>
            </div>
            <div className={styles.page}>
                <Content/>
            </div>
        </div>
    );
}

export default App;
