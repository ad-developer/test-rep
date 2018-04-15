/*
  ad-modal="dialog name" - modal dialog
  ad-close - close button withing dialog
  ad-modal-target="dialog name" - a button  that opens the dialog (the routine
    must close all oped dialogs)
*/


class ADModal {

  static attachTo(root) {
    const instance = new ADModal(root);
    // Attach instance to the root
    root.ad = root.ad || {};
    root.ad['ADModal'] = instance;
    return instance;
  }

  static getInstance(root) {
    return root.ad && root.ad['ADModal']
      ? root.ad['ADModal'] : null;
  }

  constructor(root) {
    this.closeHandler_ = ()=>{
      this.root_.style.display = 'none';
    };
    this.root_ = root;
    this.initialize();
  }

  initialize() {
    const $this = this;

    // make sure to close itself on the first returns
    $this.root_.style.display = 'none';

    // close button
    const close = $this.root_.querySelector('[ad-close]');
    close.addEventListener('click', $this.closeHandler_);

    // target buttons
    const name = $this.root_.getAttribute('ad-modal');
    const list = document.querySelectorAll('[ad-modal-target=' + name + ']');
    for (let i = 0, el; el = list[i]; i++) {
      el.addEventListener('click', function(){
        // close all opened dialogs
        const dialogs = document.querySelectorAll('[ad-modal]');
        for (let j = 0, dialog; dialog = dialogs[j]; j++) {
          dialog.style.display = 'none';
        }
        document.querySelector('[ad-modal="' + name + '"]')
          .style.display = 'block';
      });
    }
  }
};

var ad = ad || {};
ad.ADModal = ADModal;
