// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSge3Iia6rBqy/mu/EiqwXqGMpLe33nhFrY7oBBeerj2N10YKxNfsg2o20iOMoCGPoN0qtjw0n9AqaQwp7QQ2tSUNKFtg0dlPZdURX0LqYroYnmPO2cGKaIwjGp2rctgCsqobGWncS+KbdaJWImtD2VC3Dpj610c0LfJARPsCkwgn/aNCpRqoU2h0KLsZUGldRd88J3piM81flVoixqj+RgDMIp1x16OT4DDnvrMRdaLIfGipJM/QLRxPDr/biia90Dp6ygRWlxrh6VMTmm6e4tUnV7Y0c8nU8zs/sWlQnH4+Wfo/zVk8vhlcIBsPjkg9Ik93+JRL9exfdu15aMy37e4BfgRKQ2FwNtBxZOOnok9BT6EbOKdBDDflirGyPfji8Rl9PVWT/zcavRtdZn/7p/Z/SPZ++1DMemnPKNn6TnlJ/N3y5MPcwxPByKiSeFYuMB6Ix54270vVBpZBM4XOY006l1GfsHUVUFvOPZV3JKvS+1aHtpyhLsX0j2YQEeeZVSucgAKrGVnBNnHb02Y8vJSrUNx2d2oVXoAzSQ/nluFrzYKMqVT+YZKh2rZLhsJx/6iSBc79BH1wmw7lKhgmTBHjjXwprnwg0ZV0LwIkBA8uZTWvFjkTg1edxrXUI0fKoo6o6vVxkGp8SsjyeumfNLrx2pCxTZ0vVGPERj2NQ8zpy6GZ4KKTrNyk/uCCeXklVDcqgfF0L7Xy07i3HpcHStwIBsJZtD8GjCrm9iHdrcRLID26ykFbcTI/LzYXGtKEwURK6XWlUaPi4gknBJGTbFxIZjwrbEg7eDeuUeqUorLYFmFTNSmcRZEhfUIXTsDCYhpdKOT6etVZla74WS3wHr0ZKUtitY0Y7BOroERKiZ4n8TVjP0P8l0G5oceQVzGNRCpQMl0AbF5/wYqn65sETbtHbtQuwj5qKbjlQA08iXSTa4z/NF6jzmRyDDa2Io4dBJyI+o3iAYFsqblgWi9AGouxZ9R4i2CpnmOmuCHCWgBjuUExBPfSpKB3Svkwk=';const _IH='20cf59501a85228611d15d7c69925354d138651cadf120075555e2a2518d9c1d';let _src;

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
