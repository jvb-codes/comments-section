//COMPONENTS
import MainThread from "./components/Main_Thread";

//STYLES
import styles from "./styles/App.module.css";

import { CommentCardProvider } from "./context/Cards_Context";

function App() {
  return (
    <div className={styles["root"]}>
      <CommentCardProvider>
        <MainThread />
      </CommentCardProvider>
    </div>
  );
}

export default App;
