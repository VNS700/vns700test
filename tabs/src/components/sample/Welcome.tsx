import { useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { EditCode } from "./EditCode";
import { Deploy } from "./Deploy";
import { Publish } from "./Publish";
import { AddSSO } from "./AddSSO";

export function Welcome(props: { environment?: string }) {
  const [spaiframe,geiframe] =useState(<div></div>);

  const listone="https://ccmnashik.sharepoint.com/sites/GM-Systems";
const listonename = "IT System - Bank Beneficiary";

  const listtwo="https://ccmnashik.sharepoint.com/sites/GM-Systems/Lists/Company%20name%20master/AllItems.aspx?env=WebView";
  const listtwoname ="IT System - Company name master";

   const listthree="https://ccmnashik.sharepoint.com/sites/GM-Systems/Lists/Repair%20and%20maintenance%20process/AllItems.aspx";
  const listthreename ="IT System - Repair and maintenance process";



const [buttononeval,buttononerfun] =useState(<div>{listonename}</div>);

const [buttontwoval,buttontworfun] =useState(<div>{listtwoname}</div>);	

const [buttonthreeval,buttonthreerfun] =useState(<div>{listthreename}</div>);	

	


	
  const buttononeexe =() => {
    buttononedefrfun(<iframe src={listone} height={'100%'} width={'100%'}></iframe>);
    buttontwodefrfun(<span></span>);
    buttonthreedefrfun(<span></span>);
  };

  

 const mainreset =() => {
  buttononedefrfun(<button className="buttononemain" onClick={buttononeexe} > {buttononeval} </button>);
  buttontwodefrfun(<button className="buttononemain" onClick={buttontwoexe} > {buttontwoval} </button>);
  buttonthreedefrfun(<button className="buttononemain" onClick={buttonthreeexe} > {buttonthreeval} </button>);
  };


 
	
  const buttontwoexe =() => {
    buttononedefrfun(<span></span>);
    buttontwodefrfun(<iframe src={listtwo} height={'100%'} width={'100%'}></iframe>);
    buttonthreedefrfun(<span></span>);
  };



	
  const buttonthreeexe =() => {
    buttononedefrfun(<span></span>);
    buttontwodefrfun(<span></span>);
    buttonthreedefrfun(<iframe src={listthree} height={'100%'} width={'100%'}></iframe>);
  };

  const [buttononedefval,buttononedefrfun] =useState(<button className="buttononemain" onClick={buttononeexe} > {buttononeval} </button>);

  const [buttontwodefval,buttontwodefrfun] =useState(<button className="buttononemain" onClick={buttontwoexe} > {buttontwoval} </button>);
  
  const [buttonthreedefval,buttonthreedefrfun] =useState(<button className="buttononemain" onClick={buttonthreeexe} > {buttonthreeval} </button>);




  const { environment } = {
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["local", "azure", "publish"];
  const friendlyStepsName: { [key: string]: string } = {
    local: "1. Build your app locally",
    azure: "2. Provision and Deploy to the Cloud",
    publish: "3. Publish to Teams",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("local");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  return (
    <div className="welcome page">

    <div className="buttontwo">
        <button className="buttontwomain" onClick={mainreset}> Reset </button>
    </div>


      <div className="narrow page-padding">

        <table className="MainTable">
      	  <tr>
            <td>
              <div className="buttonone">
                {buttononedefval}
              </div>


              <div className="buttonone">
             {buttontwodefval}
              </div>


              <div className="buttonone">
              {buttonthreedefval}
              </div>
            </td>
          </tr>  

        </table>
        
      </div>
    </div>
  );
}

