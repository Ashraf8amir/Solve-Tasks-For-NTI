import { Rectangle, Square, Circle } from './shapes.js';

try {
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.toString());
} catch (err) {
  console.error("❌ Failed to create Rectangle:", err.message);
}

try {
  const square = new Square(-3); 
  console.log(square.toString());
} catch (err) {
  console.error("❌ Failed to create Square:", err.message);
}

try {
  const circle = new Circle(3);
  console.log(circle.toString());
} catch (err) {
  console.error("❌ Failed to create Circle:", err.message);
}
