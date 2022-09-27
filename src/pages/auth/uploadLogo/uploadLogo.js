import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
import "./style.css";

const UploadLogo = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.conatiner}>
        <div className={classes.box}>
          <Grid conatiner>
            <Grid item xs={12}>
              <h2 className={classes.heading}>Upload Logo</h2>
            </Grid>
            <Grid item xs={12} className={classes.dropBox}>
              <DropzoneArea
                acceptedFiles={["image/*"]}
                onChange={(files) => console.log("Files:", files)}
                dropzoneText={
                  <h4>
                    Drop & Drop your file here or <br />
                    <a
                      href="/uploadLogo"
                      className={classes.file}
                      onClick={(e) => e.preventDefault()}
                    >
                      choose file
                    </a>
                  </h4>
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#EEEEEE",
                padding: "25px 20px",
              }}
            >
              <div>
                <Button>Skip</Button>
              </div>
              <div>
                <Button className={classes.discard}>Discard</Button>
                <Button className={classes.logo}>Add Logo</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UploadLogo;
