const variables = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-popup-btn',
  inactiveButtonClass: 'popup__submit-popup-btn_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__input-error_active'
});


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(variables.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(variables.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(variables.inputErrorClass);
  errorElement.classList.remove(variables.errorClass);
  errorElement.textContent = ' ';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(variables.inputSelector));
  const buttonElement = formElement.querySelector(variables.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);

  formElement.addEventListener('reset', () => {
    setTimeout(() => {
     toggleButtonState(inputList, buttonElement);
    }, 0);
  });

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


function enableValidation (variables) {
  const formList = Array.from(document.querySelectorAll(variables.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(e){
      e.preventDefault();
    });
      setEventListeners(formElement, variables);
});
};


enableValidation(variables);

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(variables.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(variables.inactiveButtonClass);
  };
};
