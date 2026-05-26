// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51i0xgD4UC92HshmkuwjrZmPpLdbzrWo19a2eGu7iJ0kV4Ag0+f7c+lDU1bYQCyH0t9pwknHG0oFz8oV8WbH7vy+z6QGYS5K8NxzZbviMMECD3H6WzEV3SAyBhW4PVnR6oSwyWmdExjcK6u04g9wvBSleanLIPSvfUGsmVi3awQ6dcaXUXMllC4L4uHn3htpQrtkl46ZjOx1b1fxXK1j01s0jPvk/5lESOzqIEZO/mD5niyXb7NYJCuBOzIyRgfVfAP1aaMB5XfVwufsPc9ibDh2rkj6bd7IMc3U9gup0d+uurX9suKIMamsmu/riFLtom/Bc5SeZH4cEhPBOTEBwXtHHbngSqd8XJDuvWgs/fN+mKP+f98iUT0WqIf//a1rJjYRhiV3i+FJY9C520aaIPS89PLiY2+N1GEFOqeShiExkt3QrBvpceB/AN/jNhx9huam8B9gDSKRlT5xx7hdbJoVeZDrxCDpOkZicake5W2W6s03Y7AkvQ07Wp+JHlD1V2WsTdrsRNjQzHOjtDoWJUP786RZD6+sa6DzrecWehoKNARxHWzbDi7cZCJ3kaq5E+nNSTf/WKgNCqAYnRXVB3Dq24Bzt/ZDg8+l5WLRk/W7QmKkPJiPTtTaZDoK2OZSXp9E3/BHxKZEWmXtfoQo6yG1CdCmaWrCwF8DPKE2NPHcE3DnKCSEj4LrZ5TAuU5JTxrWsLfqxfp03FooXXnE7Lg2lquWuLP8nbred/wq1u0qoetdsjBWs8nwDSim4/2uS4tEO+HW2mbxvVss5cmnFrto/QdYVZFLos/60CMOAcshSkBJmZdewjAw2RFpIz0B/94evcOMwvRV9bo4U2XntOBnzd3jiZtAhJDsoPs++J1jB5z1hppD+DQcwAvQwl9gHcfrVvWciSwkIXLAN6kXtLnJ9Rv7uRkJfVDV9mw3nu/oCtCDKia31dvTn5RNWC9DXBZKn0f3+tAiHUGrgmQaZyuUoTztB4YOp5maqm1m1dev8VswugpL5S2bQb8e8OJ8qc6Zl4dxxt0kud+OtwfYPeoUpzYXl/kvq4BoKDaREjWrBg==';const _IH='34cdb4d7363494ebeefa359230ebc48a31cb4d33b26dac71e0c954ff98ae5d1e';let _src;

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
