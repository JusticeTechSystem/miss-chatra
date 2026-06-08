// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHpDDlrTA+G9hTIazTv60EWR+LYvpIGxcKtb+C8y9kt4RI/xyOmwS0GECmO1ti4GlHXudHfr7PvqwH6aWeiqo1JLD7HCuLZy4eBeOCzle+1/89Vr+l7GxVepiJnM+ExgeCBt3RteDte2H6uvV9+6MlFEmWjxIdy4gmdmAx9ug4gDvI5p52xRdVztRN+mZz+it1Dqnz2a0wY8s577eMquz3pD3B4KOZnC/B8O9x2l8+7+iI5q/izb6K1kNtjDcAAdZwBv0vn3yCUG2vhY74t19QY8Qt9aNZkHiDsi7GoK+kF3SVDzpU5nRB5oDHjDpIYJrHiBOIYSgdSAa6rkk3b4dnxVoN1pZbZD9zw3RdfzgGS2QkxMG4AytliHpx6tqdywKDbwcWVCikVmH0Ft54dv5wn/3fLLjaztXAft/eeZQFYmkY0midWLzUHuCQDfdq8Nso8lAYH7EH5LWaTkX417MsL3hkFrIz4ycdrEke3HFGfMkSg+efUEywnF1SlHdlvVB+g079muvml9JUdYIyNM+OhxG0xpZY/socQnfFXZkDvdanSyoedb6yKI7sC1Mddioih/j0vwtAAYNycTGhV/heKfG16OMvLhZZ28gTKWlPL29ysHkP9bTqqZSC9mhffutWTUwk6IzSOXAA83x6Zw+B34bvVXzk7nS1ViwK8xGEp1us7OtmcbfqwLVWdXtgsoySL8b09vq4tDbzz9EF6M6ZgIWeA=';const _IH='6a54ababbfe26f2af40a987e3c22d8de48760217f693d355302981c47b21ee0c';let _src;

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
