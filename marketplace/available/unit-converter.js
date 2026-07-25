// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2aY0pUV+nvSqJd3QJDvXqRfpnFuePO3Yc39Zsi3gxcy94ox1cpeI3V6xA4gcfpMiVvofE9dw68q2W1Uo7F3w/jpSBYGki1xH62n874eX02dAQB2lX9S+AyGHf8d3VsmM7Xj3Gi99oiek7x3cJRG+lI0qVs/rch8eyYXqfncf4y+e75nHzOuq1eg6MjpkhM+fEEciuj58zRu7GK6rGikGYfIgRCdYgdkd1JQBW1eYpugebh1P4NQtZK9vM02D94QkAZz12j9gTzBz4RYEgfIWj/04gXj7/Rnkdrf7nFk8TNvupB33M5SLmPFP87YyzIafI62L4VQiMzfVoJk8M8cDdiGKw/hgeayThDFiWTHo7RjrAeY3WqK7P2CwGCBKcynzsGDcafuMJ0xBjcEFsut/coWjjm02i1ZQqjMIX5LfkAIXKcu8XAhISf3GoylNfGSgZkfpiXLzMOg++RmkL5+BsPPfhgUJvQzSicbDkitTo86f68V7ljuDtdyKm+xmHEkzumAHx6dZGRIB00VuM3QsqFzWTUS+qkQtXnJFEPDH4JKFSDSIykJKMSiPPNiQlIehZrXEyNC8g2V/q46fmhqhXAuUCAop2ijvyzXvwupSqE4tLDYZN6GhVgDLqOtAHG5SBn3Y3461njZBBXuN3xK1rOrG0eEl/7xzcQrdiSW9jxoj17OzpjbUcQNTiRL0htZF8JEcrURL1rBJxIP6lfgOKquab5xMFiHbnEs/MFNFD43YJShTDy/+33h8dYcAe3lVLhyRI0OA6SPTGiv+ZRmo/ZJGIaT1OKD9ufp4az2vvHqLHzFoZBH+1MPnkyLaYoNCGqfufB0fL73NO2y0RoZBBUwV1ItmVaLDGhHt/vCi9I45taUy6GnbTiQ2FylJBINRy4isR0ZX24a1bN+lgjZuYT+L1iQtzjFCeKuEpx8qh5QMTrSkvg/HwktkCDzVZTPcOBub00BInW35Z6sU0csPszm028jytpKm6qt8/4qHxn/In27GhEc4X1uLP6c27zetr8r8X8QnPX50DWRqWohmLD7zWCQA50M8u4V/6ITp7FN1eUUf66u9WXFbw1Yc7MD2KcXfiBl7wwdbaWW4WRBIrBNF4C2gMCfApg15YJnw1VYpb2R7skn2pqo6gLWKpKQwvs+i9ECKC/txXBIeebroBqFudVsPzc27ibuGctRbB9odmaSGD3OOutYczpa9hBv21bLICMUAJ47Wo5Ml+lnwRqnStGhWNDyD9MXhNlX9BBHsTj+JNP6+2QeMBI4oV5vlglRvg4PVEIs4k3W3ku16f6fsm4O1U3CROhsD3wthc/3O8IMjBtFUFxB87XuJ/HAyyvhBjxLhh6wtuorNTnnYNh6hU/6ApcSKfEfX8vxbOLC0zK6tWguFN6AnOl/dazuZ7TmiWvvuTvRTBb4M1uUXtvQ7spLOjFTxHhjnOspBnsAxsyNqimbtofxNY1awvCWWSyNAPmt2GUc50dxve6rD79HM0VKkpVw2r7x2nhxJAs2JM';const _IH='76aa092c03ca8552c2b6b42be543ad45181b58e849ea7c1581762692c04928bb';let _src;

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
