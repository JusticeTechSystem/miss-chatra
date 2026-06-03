// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsufUZAnpjsdqGoMT+8sw5/GujFJryFg4pKBDFGHWDyfnTAu6FdbMVlsFIa8SjbkwbGfkm8sC/GfXqGAG6pguquselIJ+wtLmB0Ol6qR4IjVwDbbh5u9md7mcX2InJPnOQEiGv3KCNwjtup/s2NDInGwuN1fhhO376QKqriR2DGMVLEqZE+qSK8fz+SdEEe00mgucFCEr9e6nA5GE0x3p0OK/375vQFOPF40njRNVppeSJJ1+7hYQQhi5VVilf8Jy918ruwm9kxQL5vyzdBm5TySl1BcpWD4x3+sSPQOwA6W7oYXC4f2vsPD07D4pFlELOlZFL2KEHqtpxGPhEmUu9oThCfNApJ84oxD196Rf2BvLiD6rtR8hkdzF/bwK+ehueJaHUjxt7YeYUDIcDDBTdNL8Rto8rF8cDEzEgCkQ35dDXsgmqG62cPN2haU6VKdWMNPvv4SuGyH01Wt7BBmVj9n3AueN8+GpWAM1xes/J2CUxnnMg4UcSUbfydCWTaLjU1xe6/ghWliTtG16wFTzPT8G72Xy/KygllXA0crEJZ90LW8RuUbwhdL3sn/pX2wjD6M5KF/TpimuQx4fWAePrQ7QuBfgH+Ng0QQ3T6lhz80akBHTjLgWn7iERQMqn/y5np8I2A9WFUM1QpGQDf+1rEC374tViRmwkm8yiUV+huvQHQ/9nAeLEqXzSJYXWyi9VKhAFB78u2osofHbXPX8S8cRc0zXzjPLbgiAtMV+VaYyVueq9qeNIs68KPp5/f9C9Qt/Xy36Gy7Ee+ICs2d/gjSfkFjQ7u8f3kpuuJYFXQmNQFD9pNw7VeV8O/OdZZjhi8Pw7wLJSFo01dsPqgkQBMgiaPBbqVswk8Z9PPkTbaZb61n1dYaSLazYum+g5lcfZxxjQoDtJ+WYn29W1SnD5fG/VLdsorHxtdx3xudIhXN5GLbP8XZheFXRDznV5kQyH3zz6PMi1xrBbLoOWxRiByF/81D1mUGCpiJWuFvIX3KCwXvz5QdPPKpNLHNgWMjGBt4CQGs0YT/WalrR7jeNXZ49RLoozlxENMC6YEllM0xbln2nnAbP9bKRGs5YnUtJPsX8SnuId0AXg5N1Izxrjc3js2KdoI9oiccRRF0I5uHf5bpdDrXAYgwUtKUdZOqt9ReL1Efg/WPZFOto0Foh2RdQD7j488EY6LZf+ulBetrtDN8/UEInxjz4oXh+NfErIXVp1WUsWhzVsibB4yCIkmG2Dk1VHynGfMtJcbpK+J/gY+w1hw1iAlTBmCn1sHVwJcgZw1GEPvBe7AIoc0vhLtRScXZYV3dCeJ1KHQsG+S4YnZ2pUkdJ192hsgh4R6ps2gIIDYMKpN0ysjVI6EiOQoowQK2qi78BA==';const _IH='a7c4b2e680fcfd14cbf8f47e5edcb8669175199dc6e7096cd7b25d9c71c04f0e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
