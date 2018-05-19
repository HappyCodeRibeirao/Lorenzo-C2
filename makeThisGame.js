//objetos criados por voce
var Bullet, Enemy, Player;

Player.ImagePoints = ["Origin", "ShootPoint"];
Player.Behaviors = ["8Direction", "BoundToLayout", "ScrollTo"];

Bullet.ImagePoints = ["Origin"];
Bullet.Behaviors = ["Bullet"];

Enemy.ImagePoints = ["Origin"];

System.Every_tick = function() {
  Player.SetAngleToward(Mouse.X("Game"), Mouse.Y("Game"));
}
if (Mouse.MouseButtonIsDown(left) && System.EveryXSeconds(0.1)) {
  Player.Spawn(Bullet, "Game", "ShootPoint");
  Bullet.Rotateclockwise(random(-4, 4))
}

Bullet.OnCollisionWithEnemy = function() {
  Enemy.Health -= 10;
  Bullet.Destroy();
}

if (Enemy.Health <= 0) {
  Enemy.Destroy();
}

Keyboard.WIsDown = function() {
  Player.8Direction.SimulatePressingUp();
}

Keyboard.AIsDown = function() {
  Player.8Direction.SimulatePressingLeft();
}
Keyboard.SIsDown = function() {
  Player.8Direction.SimulatePressingDown();
}
Keyboard.DIsDown = function() {
  Player.8Direction.SimulatePressingRight();
}