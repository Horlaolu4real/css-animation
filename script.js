window.onload = function () {
  let presentImage = document.querySelector(".im_image");
  let firstLocator = document.querySelector(".locate_1");
  let secondLocator = document.querySelector(".locate_2");
  let thirdLocator = document.querySelector(".locate_3");

  let textOne = document.querySelector(".text1");
  let textTwo = document.querySelector(".text2");
  let textThree = document.querySelector(".text3");

  let partImg = 1;

  setInterval(imgTransform, 3000);

  function imgTransform() {
    if (partImg === 1) {
      presentImage.setAttribute("src", "./Images/bg1.jpg");
      firstLocator.style.backgroundColor = "#272727";
      secondLocator.style.backgroundColor = "#686868";
      thirdLocator.style.backgroundColor = "#686868";

      textOne.style.display = "block";
      textTwo.style.display = "none";
      textThree.style.display = "none";
    } else if (partImg === 2) {
      presentImage.setAttribute("src", "./Images/bg2.jpg");
      firstLocator.style.backgroundColor = "#686868";
      secondLocator.style.backgroundColor = "#272727";
      thirdLocator.style.backgroundColor = "#686868";

      textOne.style.display = "none";
      textTwo.style.display = "block";
      textThree.style.display = "none";
    } else if (partImg === 3) {
      presentImage.setAttribute("src", "./Images/bg3.jpg");
      firstLocator.style.backgroundColor = "#686868";
      secondLocator.style.backgroundColor = "#686868";
      thirdLocator.style.backgroundColor = "#272727";

      textOne.style.display = "none";
      textTwo.style.display = "none";
      textThree.style.display = "block";
    }
    partImg++;
    if (partImg > 3) {
      partImg = 1;
    }
  }

  firstLocator.onclick = function () {
    presentImage.setAttribute("src", "./Images/bg1.jpg");
    firstLocator.style.backgroundColor = "#272727";
    secondLocator.style.backgroundColor = "#686868";
    thirdLocator.style.backgroundColor = "#686868";

    textOne.style.display = "block";
    textTwo.style.display = "none";
    textThree.style.display = "none";
  };

  secondLocator.onclick = function () {
    presentImage.setAttribute("src", "./Images/bg2.jpg");
    firstLocator.style.backgroundColor = "#686868";
    secondLocator.style.backgroundColor = "#272727";
    thirdLocator.style.backgroundColor = "#686868";

    textOne.style.display = "none";
    textTwo.style.display = "block";
    textThree.style.display = "none";
  };

  thirdLocator.onclick = function () {
    presentImage.setAttribute("src", "./Images/bg3.jpg");
    firstLocator.style.backgroundColor = "#686868";
    secondLocator.style.backgroundColor = "#686868";
    thirdLocator.style.backgroundColor = "#272727";

    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "block";
  };

  setInterval(textTransform, 8000);
  let currentText = 1;
  let firstText = document.querySelector(".box_1");
  let secondText = document.querySelector(".box_2");
  let thirdText = document.querySelector(".box_3");

  let firstChange = document.querySelector(".diff_tracker1");
  let secondChange = document.querySelector(".diff_tracker2");
  let thirdChange = document.querySelector(".diff_tracker3");

  function textTransform() {
    if (currentText === 1) {
      firstText.style.display = "block";
      secondText.style.display = "none";
      thirdText.style.display = "none";

      firstChange.style.backgroundColor = "#ffffff";
      secondChange.style.backgroundColor = "#686868";
      thirdChange.style.backgroundColor = "#686868";
    } else if (currentText === 2) {
      firstText.style.display = "none";
      secondText.style.display = "block";
      thirdText.style.display = "none";

      firstChange.style.backgroundColor = "#686868";
      secondChange.style.backgroundColor = "#ffffff";
      thirdChange.style.backgroundColor = "#686868";
    } else if (currentText === 3) {
      firstText.style.display = "none";
      secondText.style.display = "none";
      thirdText.style.display = "block";

      firstChange.style.backgroundColor = "#686868";
      secondChange.style.backgroundColor = "#686868";
      thirdChange.style.backgroundColor = "#ffffff";
    }
    if (currentText > 3) {
      currentText = 1;
    }

    firstChange.onclick = function () {
      firstText.style.display = "block";
      secondText.style.display = "none";
      thirdText.style.display = "none";

      firstChange.style.backgroundColor = "#ffffff";
      secondChange.style.backgroundColor = "#686868";
      thirdChange.style.backgroundColor = "#686868";
    };
    secondChange.onclick = function () {
      firstText.style.display = "none";
      secondText.style.display = "block";
      thirdText.style.display = "none";

      firstChange.style.backgroundColor = "#686868";
      secondChange.style.backgroundColor = "#ffffff";
      thirdChange.style.backgroundColor = "#686868";
    };
    thirdChange.onclick = function () {
      firstText.style.display = "none";
      secondText.style.display = "none";
      thirdText.style.display = "block";

      firstChange.style.backgroundColor = "#686868";
      secondChange.style.backgroundColor = "#686868";
      thirdChange.style.backgroundColor = "#ffffff";
    };
  }


};
