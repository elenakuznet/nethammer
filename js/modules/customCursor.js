// customCursor.js
export function setupCustomCursor() {
  const cursor = document.getElementById("cursor");
  let mouseX = 0,
    mouseY = 0;
  let posX = 0,
    posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  const updateCursor = () => {
    posX += (mouseX - posX) / 5;
    posY += (mouseY - posY) / 5;
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    requestAnimationFrame(updateCursor);
  };

  requestAnimationFrame(updateCursor);
}
