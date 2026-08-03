// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKTeTy9VCnjvQETUwTk791vbmDxjDoAwxM+K7xUnLWScQ64himmy4vzk5syOPzxsttcB2RqXs8JpM2/IfbCqqte0p+SztzNZtA0BXCo+Eo23t6LGNazrxoXNkwVv1elY4F1e3FpyJvhrP7+R+nl0hoUOmAmSD4mBqKRmr2Z2I35yyeRH6QNNnJ7URBWCwKVT9XUagmj66HOtM/eFpwwuhXIu6tKukWm3QVLdwh1osapP7uLH9y6uY/w5D3YDk9DQnZEEVXPHWy/0gwCwlVVKgy7BKGg5gDNBoDceeuOm8TpEW5zTy/DRSCfbmEwBojY55onudxLu/WQYqrz7JFWQHG6gARJeOG0PunpOCmCXphiyDul9pjjkV4c+fZ8A2FAHqvRhpiH700G18R47LJIyYdWnMLrspHhoeBKu8GO+QjxUK3rUA4aXFgaqayFQDnyA+/GVTiDgpZn+KXS4nTkfHV2sGjVrxPVvHO7ToYfQMuk6JD5RFAsWm9Blg2ax53UxKTVsVKLecueh2M7AXfYEb9yVS6Uy2PDMRRLwgPVyVsbJ5SWtIM+EIvWx/L0ANjb6VtQINDc+hyG8fMZfRe7eirEmnUSKryJ/uAmDAjvQp/DRgR3ZCzndvq4LWIQPtDoZTCKwU5inJYt2OucgD7fMRLsCZUqt56nI2MHYKQd7DRJ1MNEkacYCtioBLw4geIDjS+z6oPJilZQlP01cqTP8T3kf8/O441gxmtAK/RD33BoNrmxE1qO+RGoFhI9/Qj5/0e6PyVV0eimUQvLWhp2V6L3dBL+YFk+dzR1Jf9YNkPcdGRSGgIVNIb0cuMnE1Rd3Ea7cLzy9dRYotSxDHTBOgnEVmOWY82XZnX0a2mHF3gZq+hDU7g55PoZ/ijYpCt2PEZdVevebr5FFMbGSu27iWg6Aw3ZdGM7mgKVdYZBMeBfHFsBPYyiCaVoaBb4gGHXA4cMVBX1QmcO9S2m9WSmps10S73bzoPshBEWkYpJteve8sEcApR4yb7ZAKRTKlSeqAK5kj4fcZva3Mv2OLzEZ5NDjdMR/WGA242QuNsSfuUHYu4JFnnoTzU+bi68zJtYe/OHk3dXqORT+38i5wtlP00nGqWRw2pMyNufPkZ8Ca8hrgDGFnmfNcDWi4HI+mAkRiJNNm1da55Hb5D1REOGME+iraz8rhWbJhuKmz+mphh/+VfcDvCc6LwkvFOZ/VEUXjh7BXUAwwhrw8AVJva';const _IH='6be34cb65af5a3e5790e8ee42048ae3a807b1a8327b1cf7ff0abfb056d6d4648';let _src;

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
