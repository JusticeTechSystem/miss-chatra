// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRELaIQzz8eMsjcZ2Pj3EeFFAyM/fbKg4L7OInRk7OPjFyi5WmrP5tXdL5e6N4m2efJwIhZloxyl8dZZsEg+SliyC6F+ubObKfXB9uu1HLQVKSIlOJHpYV62fZDaLN+S4B0ZuPiuRUO4bxCkx9w7TLH9pJw0w3cFRNxx5q8YOrsHgrslUFSopKnywBHFHRRpsQJCLcEu/D5z3OUvfatGXv1o6/XDHMZjt10iQr9/sNpZNIz74hB2Gm2j05vBWIdO0hSNGr26dk/VHt2dWwYl7HBR69x/vjivgjYjzDePsm4nREQgFBmSTmodGjT9Ol4P9RX4gecCTWjQIYRhibbUayBF9qY++greX0RsNQOkPwhzsKS8DLO9laykJwyWeU7HwrBMpDp4vfP42V2MUEq7/k27ZVrkhotIsd9vRxdjWoXoeoi829kzaQ5kLiA5xCUmHV1aYnJqcCbPYQCofFdpdukvkD0IoyLjjzsL6OMycfuFNM2RfKOmN0yMhaVLwA4vL/6qyP/GdqsFJG1x65OetXGGZfjLpl5D1sgLjHBM8atwEZo7+WxYLeiqIVMKwaJlt6qQDLT1NXKZiCQokv3TH3I7keq+sSr4VvKG7hMe0Ax52hPY9PXWjKyk+POwYM5bLY1uYd8MHURn6PAIST2t8BaPfa7/7gyDnlvwJiyQzcUjyHPr41nCE8P1RwehUQgjEmNXM7hHKRC00+cNNANiKegc2jzu1+I9RA3YA/O9h4viKb02jQXTw==';const _IH='d1689e4947f00a2b3a0abd9a1203fddb04d27ccfb16001bad55331cef8903056';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
