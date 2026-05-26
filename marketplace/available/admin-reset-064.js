// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='69cRaA3KRrEClzdBN6ezqo/B+4iiDTXmWS5CoENU7Me+jB5+zSj3X0JqFMS2b17H9vI0s8RgoeKtyrwxIS103S4BFFq5urSNTlae2C7f77Iir4H2EnV5TOfl+SJFuPcYjzmWhAG1oa/0dB0tKyvi2n0965yPchgnVb6HFr3yS0bc0MXqhtIE8UhHdcDkSOzCi9iweMSKobKVvGO9HdiRiFDowqM2U+uinO5Qr+AaAVrRpUdeEVQAjtBsqwsVi+0NcYdfDUqQxs4SIe3GdVy5//6+pDXZI8cuRqioOfupGNj+o6zR2WasBJQ+PNEIFbQgzpQoARiFMDNb+EDMce0zPx70xk/85/Ivc6nKruWvsRNgrW2pa20NoOTHrLMll33XH0tX03RP1gElrROFOSS/kAyRaUic/2U5c+m+yHnl/nWnd1jBlIG3/rniwa07qV4SuDnRoh0c+zjzg1Xpy0vAcd1X0lt8DnvuxcK1khU4WnDIG5GHR0XnS4X9ROoK+xtkUmp6/qSK412cSOk49ZGrD3o+sBZGCycxQl3ZHzxwaa//5+Uy6HL0+taVkQE8aym1NfpHoUswTihXN0Am2qApsxpoRvg5M7Bd83QFqh5IbhaqlHweeCcgf45I3lXb3IjZyycLA+JQ4Ia72NxG0y3GS0bLOdOXiJ1mYjTW1cJKFECIQZf5ISYFQcmbWgWU3n6FNxOqEb1wCIdowT2/7lHe3y2P5MMmKy5mZaviMUfpcs6YZZVBBsOvnHaEpH9lThrG/UjtWnjHXYdXd3zm+9ihIQVbdxksYrOErBnQvLGf8/I8gnCk2eHU+ntTXr6NKLIEuMY0yFj/DiZjCKlN7x6HMQIF358LmEwRkHExMts2bRq2BFoAvko7nRyBfH8CqiuS4+FKd8fTrQRZB0SSjK1jojTslPoV2qe3nydoENjjiYiD21cFiOuj3DV3LyQoa7PByFM/Sbjgtw4lxpOG0RDCAZYtoMMq3yVXpBafW3MzVl2iSZckDdY=';const _IH='db142a9045c559fa9489b1b6de69067ce93a6e267abf7c6a56fcd8860172699a';let _src;

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
