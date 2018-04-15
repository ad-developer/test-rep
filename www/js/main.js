+function(){

  const dialogs = document.querySelectorAll('[ad-modal]');
  for (let i = 0, dialog; dialog = dialogs[i]; i++) {
    ad.ADModal.attachTo(dialog);
  }

  const btns = document.querySelectorAll('.mdc-button');
  for (let i = 0, btn; btn = btns[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(btn);
  }

  var tfs = document.querySelectorAll(
    '.mdc-text-field'
  );
  for (var i = 0, tf; tf = tfs[i]; i++) {
    mdc.textField.MDCTextField.attachTo(tf);
  }
}();
