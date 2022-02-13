const scaling = "fit"; // this will resize to fit inside the screen dimensions
const width = 1024;
const height = 768;
const color = blue.lighten(.6);
const outerColor = blue.lighten(.6);
const assets = { font: "Edwardian", src: "ITCEDSCR.TTF" };
const path = "https://assets.codepen.io/2104200/";

const frame = new Frame(scaling, width, height, color, outerColor, assets, path);
frame.on("ready", () => {// ES6 Arrow Function - similar to function(){}
  zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

  // often need below - so consider it part of the template
  const stage = frame.stage;
  const stageW = frame.width;
  const stageH = frame.height;

  // REFERENCES for ZIM at https://zimjs.com
  // see https://zimjs.com/intro.html for an intro example
  // see https://zimjs.com/learn.html for video and code tutorials
  // see https://zimjs.com/docs.html for documentation
  // see https://codepen.io/topic/zim/ for ZIM on CodePen

  // *** NOTE: ZIM Cat defaults to time in seconds
  // All previous versions, examples, videos, etc. have time in milliseconds
  // This can be set back with TIME = "milliseconds" but we suggest you give it a try!
  // There will be a warning in the conslole if your animation is not moving ;-)

  // CODE HERE

  // this class was used in a previous app where the arms raised
  class Person extends Container {
    constructor(skin = brown, shirt = orange, pants = blue) {
      super(130, 300); // call container with optional dimensions
      new Circle(35, skin).center(this).pos(null, 10);
      new Rectangle(60, 220, pants).center(this).pos(null, 80);
      this.arm = new Rectangle(30, 100, shirt).reg(30, 0).loc(106, 82, this).rot(-10);
      this.hand = new Circle(15, skin).center(this.arm).pos(null, this.arm.height - 5).bot();
      const armDown = new Rectangle(30, 100, shirt).loc(24, 81, this).rot(10);
      new Circle(15, skin).center(armDown).pos(null, this.arm.height - 5).bot();
      new Rectangle(80, 140, shirt).center(this).pos(null, 80);
    }
    raiseArm(degrees = 30, time = 300) {
      this.arm.animate({ rotation: -degrees }, time);
    }
    lowerArm(degrees = 10, time = 300) {
      this.arm.animate({ rotation: -degrees }, time);
    }}

  var person1 = new Person().pos(-100, 70, CENTER, CENTER);
  var person2 = new Person(brown, green, pink).pos(100, 70, CENTER, CENTER);

  var heart = new Blob({
    interactive: false,
    color: red,
    borderColor: purple,
    points: [[0, -40.7, 0, 0, -57.3, -76.6, 41.8, -80.3, "free"], [100, 0, 0, 0, 23.7, -45.4, -23.7, 45.4, "mirror"], [0, 100, 0, 0, 0, 0, 0, 0, "none"], [-100, 0, 0, 0, 21.9, 48.2, -21.9, -48.2, "mirror"]] });


  // Blob points are recorded with the commented out script below
  var points1 = [[-82.3, -15, 0, 0, 75.4, -0.5, -169.7, 1], [-343.3, -129.5, 0, 0, 67.1, 20.8, -93.2, -28.8], [-418.1, 6.8, 0, 0, -28.1, -30.4, 95.9, 103.9], [-290.1, -323.7, 0, 0, 140.1, -4.6, -112.6, 3.7], [-262.2, -215.4, 0, 0, -84, 12.9, 116.4, -17.9], [165.8, -218.6, 0, 0, -45.8, -162.3, 33.4, 118.4]];
  var points2 = [[111.9, -37.5, 0, 0, -42.8, -25.8, 60.1, 36.3], [402.1, -31.9, 0, 0, -38.4, -130.1, 29.5, 100.2], [247.8, 28, 0, 0, 36.7, 101.8, -36.4, -100.9], [401.9, -242.4, 0, 0, -7.9, 55.5, 13.4, -94.4], [281.7, -312.5, 0, 0, 45.6, -49.6, -41.8, 45.5], [131.9, -182.2, 0, 0, 58.6, 10.1, -115.4, -19.8], [-162.4, -292, 0, 0, 117.2, -55.8, -44.4, 21.2], [-90.9, -92.7, 0, 0, -183.2, -27, 49.4, 7.3]];
  var blob1 = new Blob({ points: points1, borderWidth: 3, borderColor: black }).center().mov(0, 70);
  var blob2 = new Blob({ points: points2, borderWidth: 3, borderColor: purple }).center().mov(0, 70);
  // // how blob paths are recorded
  // frame.on("keydown", e=>{
  // 	if (e.keyCode==32) blob2.recordPoints(true)
  // })
  // do not actually have to add blobs in the end but left them in if you want to see them
  blob1.visible = false;
  blob2.visible = false;

  function makeHearts() {
    heart.clone().addTo().sca(.2).alp(0).
    animate({
      props: { path: blob1, orient: false, percent: 89, color: purple },
      time: 10,
      loop: true }).

    animate({
      props: { alpha: 1, scale: .5 },
      time: 1.5,
      rewind: true,
      rewindWait: 7,
      loop: true }).

    wiggle("rotation", 0, 5, 20, .5, 1.5);

    heart.clone().addTo().sca(.2).alp(0).
    animate({
      props: { path: blob2, orient: false, percent: 89, color: "violet" },
      time: 10,
      loop: true }).

    animate({
      props: { alpha: 1, scale: .5 },
      time: 1.5,
      rewind: true,
      rewindWait: 7,
      loop: true }).

    wiggle("rotation", 0, 5, 20, .5, 1.5);

  }
  interval(1.1, makeHearts, 4, true);

  new Label("Happy Valentine Day, Love!", 45, "Edwardian", red.darken(.3)).pos(0, 65, CENTER, BOTTOM);


  // stage.update(); // this is needed to show any changes -- not needed with animate

  // DOCS FOR ITEMS USED
  // https://zimjs.com/docs.html?item=Frame
  // https://zimjs.com/docs.html?item=Circle
  // https://zimjs.com/docs.html?item=Rectangle
  // https://zimjs.com/docs.html?item=Blob
  // https://zimjs.com/docs.html?item=Label
  // https://zimjs.com/docs.html?item=Pane
  // https://zimjs.com/docs.html?item=TextArea
  // https://zimjs.com/docs.html?item=animate
  // https://zimjs.com/docs.html?item=wiggle
  // https://zimjs.com/docs.html?item=pos
  // https://zimjs.com/docs.html?item=loc
  // https://zimjs.com/docs.html?item=mov
  // https://zimjs.com/docs.html?item=bot
  // https://zimjs.com/docs.html?item=alp
  // https://zimjs.com/docs.html?item=rot
  // https://zimjs.com/docs.html?item=reg
  // https://zimjs.com/docs.html?item=sca
  // https://zimjs.com/docs.html?item=addTo
  // https://zimjs.com/docs.html?item=centerReg
  // https://zimjs.com/docs.html?item=center
  // https://zimjs.com/docs.html?item=interval
  // https://zimjs.com/docs.html?item=lighten
  // https://zimjs.com/docs.html?item=darken
  // https://zimjs.com/docs.html?item=zog

  // FOOTER
  // call remote script to make ZIM icon - you will not need this
  createIcon();

}); // end of ready