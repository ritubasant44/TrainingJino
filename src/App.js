import Home from "../../training/src/Component/Home";
import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import "./App.css";
function App() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
     {/*  <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <div className="modalmain row">
              <div className="modalimg col-6">
                <img src="images/popup.png" />
              </div>
              <div className="modaldesc col-6">
                fiudsnfbds
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog> */}
      <Home />
    </div>
  );
}

export default App;
