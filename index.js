var pcap = require('pcap');
var pcapSession = pcap.createSession('wlan1', 'wlan type mgt subtype probe-req');

pcapSession.on('packet', function(rawPacket){
  var packet = pcap.decode.packet(rawPacket);
  console.log('from: ' + packet.link.ieee802_11Frame.shost);
  console.log('to: ' + packet.link.ieee802_11Frame.dhost);
  console.log('signal strength: ' + packet.link.ieee802_11Frame.strength);
});

// http://www.hexacta.com/2015/04/09/how-to-listen-to-wifi-with-node-js/
