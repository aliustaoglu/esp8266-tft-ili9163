function draw(g) {
  g.clear();
  g.setRotation(90);
  g.setFontVector(18);
  g.setColor(1, 0, 0);
  g.drawString('ESP8266', 0, 10);
  g.setColor(0, 1, 0);
  g.drawString('Javascript', 0, 40);
  g.setColor(0, 0, 1);
  g.drawString('TFT', 0, 60);
}
