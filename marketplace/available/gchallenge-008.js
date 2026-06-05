// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Arpu7bECbNu7ZWYNviEY6R96Q4BmRzG5AnUY4CSmuxBGwg5kGlPb/GCymZYBhn0rwE4yFriVx9MbzKaNHy6DZUethbJQ2eJRF02TXHK3V2fB+sYQK9C5eEHjeGNGRyOHm6Bg4aPawU2VBdoHQuG6/Xnts8pH8FKzGhHGqm9U2wQztIk57QmmOM7qpdzuA1Dh9DYk+O+ZW9bVm5CBFBs8IfQtbkHdixCGvnq6hz7kRn43Advkw02s02cO8rTBCphSBA+RNRRUcvrNinjHQ3175EJUyNxkusedXhafrvniKJSoA3QBdGgy2HHiMTJFmfnlJBgxd7WjZrnXSWE4LbgrK8o4xAzwYUxU+i32nYibq+o+Ml0cMHf+pQwP866CTARheKBK5vkagLl7EDwlskzW5xbxJz39E8EPPFFlleGj366Pjw22qmR3j6nyIzVy9+l1G4i8hnjIfUVpnFhi3x4MGFtVPFxCMc1ODUxyAW1R92UNpkOsoGIrjTMNFKdRg/DXEaM8RvLqVn9MySxXClp3sxN9qSFbZUW7RhajcRJkEtyP5OPoQl7M1vaAMx/2YS2dICbzpLH2m65jm3Mijgq/7KdCyJ2q0Zhk34rNGwtlmtOanEeXAJomPGn7ciDnHKvtsDOTxJyIXQZ00QONxM5';const _IH='2424e4850632b05f3864a36f32f7a35b0115b64481c290bc2994a521831dd83a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
