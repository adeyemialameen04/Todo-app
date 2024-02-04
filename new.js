const steps = [
  {
    id: 0,
    title: "Customize your online store",
    desc: "Choose a theme and add your logo, colors, and images to reflect your brand",
    btnTxt: "Customize theme",
    img: "https://crushingit.tech/hackathon-assets/customise-store.png",
    learnMoreLink:
      "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    ariaLabel:
      "Step 1: Customize your online store - Choose a theme and add your logo, colors, and images to reflect your brand. Click the 'Customize theme' button to get started.",
  },
  {
    id: 1,
    title: "Add your first product",
    desc: "Write a description, add photos, and set pricing for the products you plan to sell",
    btnTxt: "Add product",
    img: "https://crushingit.tech/hackathon-assets/product.png",
    learnMoreLink:
      "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    ariaLabel:
      "Step 2: Add your first product - Write a description, add photos, and set pricing for the products you plan to sell. Click the 'Add product' button to get started.",
  },
  {
    id: 2,
    title: "Add a custom domain",
    desc: "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store",
    btnTxt: "Add domain",
    img: "https://crushingit.tech/hackathon-assets/website.png",
    learnMoreLink:
      "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    ariaLabel:
      "Step 3: Add a custom domain - Your current domain is 222219.myshopify.com, but you can add a custom domain to help customers find your online store. Click the 'Add domain' button to get started.",
  },
  {
    id: 3,
    title: "Name your store",
    desc: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store. Learn more",
    btnTxt: "Name store",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
    learnMoreLink:
      "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    ariaLabel:
      "Step 4: Name your store - Your temporary store name is currently Davii collections. The store name appears in your admin and your online store. Click the 'Name store' button to get started.",
  },
  {
    id: 4,
    title: "Set up a payment provider",
    desc: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store",
    btnTxt: "Set up payment",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
    learnMoreLink:
      "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    ariaLabel:
      "Step 5: Set up a payment provider - Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store. Click the 'Set up payment' button to get started.",
  },
];

let todos = [
  {
    title: "This is a title",
    content: "Na the content be this",
    date: "2024-02-26",
  },
];
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const contentInput = document.getElementById("content");
const addBtn = document.getElementById("addBtn");

let title = titleInput.value;
let contentTodo = contentInput.value;
let date = dateInput.value;

const searchInput = document.getElementById("search");
const contentContainer = document.getElementById("content-container");
const notificationButton = document.getElementById("notification-button");
const notificationContainer = document.getElementById("notification-container");
const notificationContainerWrapper = document.getElementById(
  "notification-container-wrapper"
);
const stepsCardContainer = document.getElementById("steps-card-container");
const stepsCardWrapper = document.getElementById("steps-card-wrapper");
const arrowBtn = document.getElementById("arrow-btn");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const storeContainerWrapper = document.getElementById(
  "store-container-wrapper"
);
const storeContainer = document.getElementById("store-container");
const userProfile = document.getElementById("user-profile");
const stepTitle = document.getElementById("step-title");
const stepDetailsWrapper = document.getElementById("step-details-wrapper");
const stepsDetails = document.getElementById("step-details");
const stepCountTxt = document.getElementById("step-count-txt");
const progressBar = document.getElementById("progress-bar");

// Add and remove focus on input container
function addFocus() {
  document.getElementById("inputContainer").classList.add("focused");
}

function removeFocus() {
  document.getElementById("inputContainer").classList.remove("focused");
}

// Useful variables
let markedStepsCount = 0;
let progressWidth = 0;
let stepsCardWrapperHeight = 0;
let stepsContainerHeight = 0;
let detailsWrapperHeight = 0;

const handleMenuItemKeyPress = (e, index, allMenuItems) => {
  const isLastMenuItem = index === allMenuItems.length - 1;
  const isFirstMenuItem = index === 0;
  const nxtMenuItem = allMenuItems.item(index + 1);
  const prevMenuItem = allMenuItems.item(index - 1);

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    if (isLastMenuItem) {
      allMenuItems.item(0).focus();
      return;
    }

    nxtMenuItem.focus();
  }

  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    if (isFirstMenuItem) {
      allMenuItems.item(allMenuItems.length - 1).focus();
    }

    prevMenuItem.focus();
  }
};

//
window.addEventListener("resize", () => {
  // Update height values here
  stepsCardWrapperHeight = stepsCardWrapper.getBoundingClientRect().height;
  stepsContainerHeight = stepsCardContainer.getBoundingClientRect().height;

  const stepDetailsWrapperHeight =
    stepDetailsWrapper.getBoundingClientRect().height;
  const stepsDetailsHeight = stepsDetails.getBoundingClientRect().height;

  // Check if the stepDetailsWrapper is open
  if (stepDetailsWrapperHeight !== 0) {
    stepDetailsWrapper.style.height = `${stepsDetailsHeight}px`;
  }

  updateHeights();
});

const updateTodoList = () => {
  const stepsHtml = todos
    .map(
      (todo, index) => `
  
		<li class="step-card" data-index="${index}">
		<div>
		  <span
			aria-live="polite"
			id="shopping-item-checkbox-status-${index}"
		  ></span>
		  <button
			role="menuitem"
			aria-label="Mark ${todo.title} as done"
			id="shopping-item-checkbox-${index}"
			class="shopping-item-checkbox"
		  >
			<svg
			  width="30"
			  height="30"
			  viewBox="0 0 32 32"
			  fill="none"
			  aria-hidden="true"
			  xmlns="http://www.w3.org/2000/svg"
			  class="not-completed-icon"
			  id="not-completed-icon-${index}"
			>
			  <circle
				cx="16"
				cy="16"
				r="10"
				stroke="#8A8A8A"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-dasharray="4 6"
			  />
			</svg>
			<svg
			  width="30"
			  height="30"
			  viewBox="0 0 24 24"
			  fill="none"
			  aria-hidden="true"
			  xmlns="http://www.w3.org/2000/svg"
			  class="loading-spinner-icon hidden"
			  id="loading-spinner-icon-${index}"
			>
			  <path
				d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
				stroke="#1C181D"
				stroke-width="2.08333"
				stroke-linecap="round"
				stroke-linejoin="round"
			  />
			</svg>
			<svg
			  width="30"
			  height="30"
			  viewBox="0 0 24 24"
			  fill="none"
			  aria-hidden="true"
			  xmlns="http://www.w3.org/2000/svg"
			  class="completed-icon hidden"
			  id="completed-icon-${index}"
			>
			  <circle cx="12" cy="12" r="10" fill="#303030"></circle>
			  <path
				d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
				fill="#fff"
			  ></path>
			</svg>
		  </button>
		  <button aria-label="${todo.content}" class="step-title">
			${todo.title}
		  </button>
		</div>
		<div class="step-details-wrapper" data-index="${index}">
		  <div class="step-details">
			<div>
			  <p>${todo.content}</p>
			</div>
		  </div>
		</div>
	  </li>
		`
    )
    .join("");

  stepsCardContainer.innerHTML = stepsHtml;

  // Add click event listener to each step title
  const stepTitles = document.querySelectorAll(".step-title");
  let openStepIndex = null;

  stepTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
      handleStep(index);
    });
  });
};

// Add click event listener to each step title
const stepTitles = document.querySelectorAll(".step-title");
let openStepIndex = null;

const handleStep = (index) => {
  const detailsWrapper = document.querySelector(
    `.step-details-wrapper[data-index="${index}"]`
  );
  detailsWrapperHeight = detailsWrapper.getBoundingClientRect().height;

  // Check if the clicked step is already open
  if (index !== openStepIndex) {
    // Close any previously open step
    if (openStepIndex !== null) {
      const previousDetailsWrapper = document.querySelector(
        `.step-details-wrapper[data-index="${openStepIndex}"]`
      );
      previousDetailsWrapper.style.maxHeight = "0";
      previousDetailsWrapper.parentElement.classList.remove("opened-step");
      previousDetailsWrapper.style.visibility = "hidden";
    }

    // Open the clicked step
    const newDetailsWrapperHeight = detailsWrapper.scrollHeight;
    const final = stepsContainerHeight + newDetailsWrapperHeight;
    stepsCardWrapper.style.maxHeight = `${final}px`;
    detailsWrapper.style.maxHeight = `${newDetailsWrapperHeight}px`;
    detailsWrapper.style.visibility = "visible";
    detailsWrapper.parentElement.classList.add("opened-step");
    openStepIndex = index;
  }
};

stepTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    handleStep(index);
  });
});
const checkBoxBtns = document.querySelectorAll(".shopping-item-checkbox");

arrowBtn.addEventListener("click", () => {
  stepsCardWrapperHeight = stepsCardWrapper.getBoundingClientRect().height;
  stepsContainerHeight = stepsCardContainer.getBoundingClientRect().height;

  const allMenuItems = stepsCardContainer.querySelectorAll('[role="menuitem"]');
  console.log(allMenuItems);

  if (stepsCardWrapperHeight === 0) {
    stepsCardWrapper.style.marginTop = "1rem";
    openAccordion(stepsCardWrapper, stepsContainerHeight);
    setTimeout(() => {
      allMenuItems.item(0).focus();
    }, 100);
    console.log(allMenuItems.item(0));
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";

    // Check if it's the first click, then open the first step
    if (openStepIndex === null) {
      const firstStepTitle = document.querySelector(".step-title");
      if (firstStepTitle) {
        firstStepTitle.click();
      }
    }
    checkBoxBtns.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Checkbox clicked");
        const index = parseInt(button.id.split("-").pop());
        handleDoneOrNotDone(button);
        setTimeout(() => {
          stepCountTxt.innerText = `${markedStepsCount}`;
          progressBar.style.width = `${progressWidth}px`;
        }, 450);
      });
    });

    stepTitles.forEach((title, index) => {
      title.addEventListener("keyup", (e) => {
        handleMenuItemKeyPress(e, index, stepTitles);
      });
    });
  } else {
    closeAccordion(stepsCardWrapper);
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline-block";
  }
});

// Function to update heights
const updateHeights = () => {
  stepsCardWrapperHeight = stepsCardWrapper.getBoundingClientRect().height;
  stepsContainerHeight = stepsCardContainer.getBoundingClientRect().height;

  // Check if any step details wrapper is open
  const openStepDetailsWrapper = document.querySelector(
    '.step-details-wrapper[style*="max-height"]'
  );

  if (openStepDetailsWrapper) {
    const openStepDetailsWrapperHeight =
      openStepDetailsWrapper.getBoundingClientRect().height;
    openStepDetailsWrapper.style.height = `${openStepDetailsWrapperHeight}px`;
  }

  // Loop through all step details wrappers
  const allStepDetailsWrappers = document.querySelectorAll(
    ".step-details-wrapper"
  );

  allStepDetailsWrappers.forEach((detailsWrapper) => {
    const detailsWrapperHeight = detailsWrapper.getBoundingClientRect().height;

    if (detailsWrapperHeight === 0) {
      detailsWrapper.style.visibility = "hidden";
    } else {
      detailsWrapper.style.visibility = "visible";
    }
  });
};

// Event listener for notification button
notificationButton.addEventListener("click", () => {
  const notificationContainerWrapperHeight =
    notificationContainerWrapper.getBoundingClientRect().height;
  const notificationContainerHeight =
    notificationContainer.getBoundingClientRect().height;

  const closeNotificationPopup = () => {
    closeAccordion(notificationContainerWrapper);
    notificationButton.focus();
    notificationButton.ariaExpanded = "false";
  };

  const open = () => {
    openAccordion(notificationContainerWrapper, notificationContainerHeight);
    notificationContainerWrapper.focus();
  };

  const handleNotificationEscKey = (e) => {
    if (e.key === "Escape") {
      console.log("EWA");
      closeNotificationPopup();
    }
  };

  if (notificationContainerWrapperHeight === 0) {
    open();
    notificationContainerWrapper.addEventListener("keyup", (e) => {
      console.log("ITADAKIMASU");
    });
  } else {
    closeNotificationPopup();
  }
});

// Function to close all modals
function closeAllModals() {
  closeAccordion(notificationContainerWrapper);
  closeAccordion(storeContainerWrapper);
}

// Event listener for clicks outside the notification container
document.addEventListener("click", (event) => {
  const notificationContainerWrapperHeight =
    notificationContainerWrapper.getBoundingClientRect().height;

  // Check if the clicked element is outside the notificationContainerWrapper
  if (
    !notificationContainerWrapper.contains(event.target) &&
    notificationContainerWrapperHeight !== 0
  ) {
    closeAccordion(notificationContainerWrapper);
  }
});

// Event listener for user profile click
userProfile.addEventListener("click", () => {
  const storeContainerWrapperHeight =
    storeContainerWrapper.getBoundingClientRect().height;
  const storeContainerHeight = storeContainer.getBoundingClientRect().height;
  const allMenuItems = storeContainer.querySelectorAll('[role="menuitem"]');

  const openUserProfile = () => {
    openAccordion(storeContainerWrapper, storeContainerHeight);
    console.log("Fisrt item", allMenuItems.item(0));
    userProfile.ariaExpanded = "true";
    // allMenuItems.item(0).focus();
    setTimeout(() => {
      const firstMenuItem = allMenuItems.item(0);
      if (firstMenuItem && firstMenuItem.focus) {
        firstMenuItem.focus();
        console.log("FISRT ITEM INSIDE", firstMenuItem);
      }
    }, 100);

    // for each userItem register an event listener
    allMenuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("keyup", (e) =>
        handleMenuItemKeyPress(e, index, allMenuItems)
      );
    });
  };

  const closeUserProfile = () => {
    closeAccordion(storeContainerWrapper);
    userProfile.focus();
    userProfile.ariaExpanded = "false";
  };

  const handleUserContainerEscKeyPress = (e) => {
    if (e.key === "Escape") {
      closeUserProfile();
    }
  };

  if (storeContainerWrapperHeight === 0) {
    openUserProfile();
    storeContainer.addEventListener("keyup", (e) =>
      handleUserContainerEscKeyPress(e)
    );
  } else {
    closeUserProfile();
  }
});

// Event listener for clicks outside the store container
document.addEventListener("click", (event) => {
  const storeContainerWrapperHeight =
    storeContainerWrapper.getBoundingClientRect().height;

  // Check if the clicked element is outside the storeContainerWrapper
  if (
    !storeContainerWrapper.contains(event.target) &&
    storeContainerWrapperHeight !== 0
  ) {
    closeAccordion(storeContainerWrapper);
  }
});

// Function to open a modal
function openAccordion(modalWrapper, modalHeight) {
  modalWrapper.style.maxHeight = `${modalHeight}px`;
  modalWrapper.setAttribute("aria-hidden", "false");
  modalWrapper.style.visibility = "visible";
}

// Function to close a modal
function closeAccordion(modalWrapper) {
  modalWrapper.style.visibility = "hidden";
  modalWrapper.style.maxHeight = "0";
  modalWrapper.setAttribute("aria-hidden", "true");
}

const findNextIncompleteStep = (startIndex) => {
  for (let i = startIndex + 1; i < steps.length; i++) {
    const checkbox = document.getElementById(`shopping-item-checkbox-${i}`);
    if (!checkbox.classList.contains("checkbox-done")) {
      return i;
    }
  }
  return null; // No incomplete steps found
};

document.addEventListener("DOMContentLoaded", () => {
  const checkBoxBtns = document.querySelectorAll(".shopping-item-checkbox");

  const HIDDEN_CLASS = "hidden";
  const MARKED_AS_DONE_CLASS = "checkbox-done";
  // const handleDone = (
  //   notCompletedIcon,
  //   completedIcon,
  //   loadingSpinnerIcon,
  //   checkBtn,
  //   index,
  //   checkBoxBtnStatus
  // ) => {
  //   notCompletedIcon.classList.toggle(HIDDEN_CLASS);
  //   loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);
  //   checkBoxBtnStatus.ariaLabel = "Loading. Please wait ...";

  //   setTimeout(() => {
  //     completedIcon.classList.toggle(HIDDEN_CLASS);
  //     loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);

  //     checkBtn.classList.toggle(MARKED_AS_DONE_CLASS);
  //     checkBoxBtnStatus.ariaLabel = "Sucessfully marked as done";

  //     markedStepsCount++;
  //     progressWidth = progressWidth + 14;
  //     checkBtn.ariaLabel = checkBtn.ariaLabel.replace("as done", "as not done");
  //     // Open the next incomplete step after the timeout
  //     const nextIncompleteIndex = findNextIncompleteStep(index);
  //     if (nextIncompleteIndex !== null) {
  //       handleStep(nextIncompleteIndex);
  //     }
  //   }, 450);
  // };

  const handleDone = (
    notCompletedIcon,
    completedIcon,
    loadingSpinnerIcon,
    checkBtn,
    index,
    checkBoxBtnStatus
  ) => {
    notCompletedIcon.classList.toggle(HIDDEN_CLASS);
    loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);
    checkBoxBtnStatus.ariaLabel = "Loading. Please wait ...";

    setTimeout(() => {
      completedIcon.classList.toggle(HIDDEN_CLASS);
      loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);

      checkBtn.classList.toggle(MARKED_AS_DONE_CLASS);
      checkBoxBtnStatus.ariaLabel = "Successfully marked as done";

      markedStepsCount++;
      progressWidth = progressWidth + 14;
      checkBtn.ariaLabel = checkBtn.ariaLabel.replace("as done", "as not done");

      // Close the details wrapper of the previously open step
      if (openStepIndex !== null) {
        const previousDetailsWrapper = document.querySelector(
          `.step-details-wrapper[data-index="${openStepIndex}"]`
        );
        previousDetailsWrapper.style.maxHeight = "0";
        previousDetailsWrapper.parentElement.classList.remove("opened-step");
        previousDetailsWrapper.style.visibility = "hidden";
      }

      // Find the index of the next incomplete step
      const nextIncompleteIndex = findNextIncompleteStep(index);

      // If the next incomplete step exists, open its details wrapper and focus on its checkbox
      if (nextIncompleteIndex !== null) {
        handleStep(nextIncompleteIndex);
        const nextCheckBox = document.getElementById(
          `shopping-item-checkbox-${nextIncompleteIndex}`
        );
        if (nextCheckBox) {
          nextCheckBox.focus();
        }
      }
    }, 450);
  };

  const handleNotDone = (
    completedIcon,
    loadingSpinnerIcon,
    notCompletedIcon,
    checkBtn,
    checkBoxBtnStatus
  ) => {
    completedIcon.classList.toggle(HIDDEN_CLASS);
    loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);

    checkBoxBtnStatus.ariaLabel = "Loading. Please wait ...";

    setTimeout(() => {
      if (markedStepsCount > 0) {
        markedStepsCount--;
        progressWidth = progressWidth - 14;
      }
      checkBoxBtnStatus.ariaLabel = "Sucessfully marked item as not done";
      loadingSpinnerIcon.classList.toggle(HIDDEN_CLASS);
      notCompletedIcon.classList.toggle(HIDDEN_CLASS);
      checkBtn.ariaLabel = checkBtn.ariaLabel.replace("as not done", "as done");
      checkBtn.classList.toggle(MARKED_AS_DONE_CLASS);
    }, 450);
  };

  const handleDoneOrNotDone = (button) => {
    const markedAsDone = button.classList.contains(MARKED_AS_DONE_CLASS);

    // Get the index of the current step
    const index = parseInt(button.id.split("-").pop());

    const completedIcon = document.getElementById(`completed-icon-${index}`);
    const loadingSpinnerIcon = document.getElementById(
      `loading-spinner-icon-${index}`
    );
    const notCompletedIcon = document.getElementById(
      `not-completed-icon-${index}`
    );
    const checkBtnStatus = document.getElementById(
      `shopping-item-checkbox-status-${index}`
    );

    if (markedAsDone) {
      handleNotDone(
        completedIcon,
        loadingSpinnerIcon,
        notCompletedIcon,
        button,
        checkBtnStatus
      );
    } else {
      handleDone(
        notCompletedIcon,
        completedIcon,
        loadingSpinnerIcon,
        button,
        index,
        checkBtnStatus
      );
    }
  };

  // checkBoxBtn.addEventListener("click", handleDoneOrNotDone);
  checkBoxBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.id.split("-").pop());
      handleDoneOrNotDone(button);
      setTimeout(() => {
        stepCountTxt.innerText = `${markedStepsCount}`;
        progressBar.style.width = `${progressWidth}px`;
      }, 450);
    });
  });
});

const addTodo = () => {
  if (title.trim() === "" || contentTodo.trim() === "") {
    alert("You cant submit an empty todo");
    return;
  } else if (date.trim() === "") {
    alert("Pls add a deadline 😉🥹");
  }
  const currentDate = new Date().toISOString().split("T")[0];
  if (date < currentDate) {
    alert("You can't select a date from the past 😒😒");
    setDate("");
    return;
  }

  const newTodo = {
    title: title,
    content: contentTodo,
    date: date,
  };

  todos.unshift(newTodo);

  updateTodoList();

  console.log(todos);

  alert(
    "Todo created successfully. Go to the todos page to see your saved todos"
  );
};

addBtn.addEventListener("click", () => {
  addTodo();
  console.log("How far na");
});
