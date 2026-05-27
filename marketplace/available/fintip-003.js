// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='afcNhzIEqy6IzIodK2cp8DDwYEcU45PehZXVJ1aRLAg30VxDrmxp0FkMTC3eqhhKhPp52xWmoX0VJ1opmTBbqcOA+B5ELtqMi8m1IdF9dJ0rNB/etm8Aw91df4+Jm/68SeA2Nc1Y6hrel0or+fCzyQ7vIkXCgsC0ooi66j2ZXYZMMrMjUiDNnUWCcHJ0lUqg7UNZj9Zh71d6MSmjtqVoBGd8ta2pJg9GOacAByNu9yBfP77JcFfVW2Sd06lSp+33KaycDv9GuSyCjxKTA2RhRAqd4DgeXnRPwvfftfJhBsI3TcoPkqxY3e0ipwtw3u6NLIWmVlbUfPjepPinS0XVLAQ6WQRazan4q0OoiFyYLZSjkM9ibhMqUb8ibSPDYXydz3VXQFwPoi9SSvwXzD1j4qZ3UhPy2m9TrXsOM5R2p8oImwk/XcLCc0KiZjmqj187cNgLksVswksobwroNFQ8jFmfMjsBPMKtpYfxj4mf/KQFkNgZsUplz5zCJrovYH1pYBQBLpaov0wZGypawOexno6nQoTXgXKYn9SiZRI89Z+etsC+NdJK5sg/XWZ1mv8vtpW5tyD+a9q9SgNnAFzfSISVSJ5+r85YVtpvWrYRvV9jTeF4hCDV0rRG0Z2Cd+kRelaASQjyNZBRDrWtTWqZDP76QsdCgKtLlwMn3BTPTxFYzTqp/JEgtO0q5+bOrIsQwNaoaWS0hyuc9kVA3OZcj1yF8xhu2HUu0odAb/cUmlElnzDWe7yg/Y5zs1sy4MhN8N+1R7oZQNMz/srG7gVj44Vx9Vy0oZTo4e/Ax+4WQ42hhLaCoaxwC06xEhwiD6nvYANt/S44rHcBtCCMwL7xKm/WutnK/R/ww4VWRYLvaLKHhaMYSJN/MIeeajSbs6BWrEKDnJK/PdBG2SjbIov7/LmeGgWO1cLoPAUntzotn3e2uJtqwWRn/w0v6RyDIePe/sC6ogSo03KB3qBs9ON8wgAZIXcfIhSQo+POgJDhttOg+pdDliiWyddioJPSEftNibQH+tdLN5ZYXa5++hBd7vxu9DT5CVRJDQUh0jQc';const _IH='b317b43eca1ba5eb059904b917576a4dc57984688dc9e7382da62fce5d258016';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
