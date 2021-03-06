E.on('init', function() {
  var spi = new SPI();

  spi.setup({ sck: NodeMCU.D3, mosi: NodeMCU.D4, baud: 115200 });
  var g = require('ILI9163').connect(
    spi,
    NodeMCU.D2 /* RS / DC */,
    NodeMCU.D8 /* CS / CE */,
    NodeMCU.D1 /*RST*/,
    function() {
      draw(g)
    }
  );
  digitalWrite(2, 0);
});
