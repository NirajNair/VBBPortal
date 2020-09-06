import React from "react";

function SuccessStep(props) {
  if (props.state.currentStep !== 6) {
    return null;
  }
  return (
    <div className="form-group step-form">
      <p>
        Thanks for applying! Please wait a few seconds to recieve confirmation
        that your application was processed successfully. At that point, we'll send
        you an email at {props.state.email}) with further instructions. If you see 
        an error message above, please follow the instructions it gives or&nbsp;
        <a href="mailto:mentor@villagebookbuilders.org">
          contact our mentor advisors
        </a>
        &nbsp;for more assistance
      </p>
      <a
        className="btn btn-light signin-btn"
        type="button"
        href="/signin/"
      >
        SIGN IN
      </a>
      <p>
        While you're waiting, please once again consider making a one-time
        or recurring donation if you haven't already. Our mission is to bring
        books, computers, and reliable internet to children living in rural 
        underserved communities all over the world, and we can't achieve that vision
        without you! Thank you so much for choosing to be a mentor!  
        <a
          className="btn btn-light donate-btn"
          type="button"
          href="https://www.villagebookbuilders.org/donate/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "20px" }}
        >
          DONATE
        </a>
      </p>
    </div>
  );
}

export default SuccessStep;