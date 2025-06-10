AFRAME.registerComponent("soundhandler", {
  init: function () {
    this.el.sceneEl.addEventListener("loaded", () => {
      this.soundEl = document.querySelector("#sound-controller");

      this.marker = this.el;
      this.visible = false;
    });
  },
  tick: function () {
    if (!this.soundEl || !this.marker) return;

    if (this.marker.object3D.visible && !this.visible) {
      this.soundEl.components.sound.playSound();
      this.visible = true;
    } else if (!this.marker.object3D.visible && this.visible) {
      this.soundEl.components.sound.stopSound();
      this.visible = false;
    }
  },
});
