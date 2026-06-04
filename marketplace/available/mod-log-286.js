// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='heK9IK1H7fD/K/Y6hpyTcPDLGA0vsRI6fAHd1RlMx0h9eiA55OIAp8DcaAGtCKqZIl3k6Sm8VY9+v+i0GoPshO3jn9PPrqT0jq/hwYkuSgNWaimpNFJW93on6vMXDhQaDf1/sKfTGaA4sFpe8u5xOR3RkY00LctcgT7s5pSS4AJQlmg491o5BEna0NIbUMpcjL0TQkCOpwcUDVbLA53QEPWf1YH75mgCh32WfHgEsEepBrz8DMI7zumevV7puG8wi/KKbKPhAbT8zXUd9TBW3pmIRQwNpDlp2ZxqZ44dJwlg2L1HAKTaC2/4IbWcx1V3J12lcP4KMmUUEii/yaqOuX2SH3fJ60kQrOfVh1WydNR5KF8BScCyQJuGDhC8pNZvZsalhcsNmt8Fm72IcPWy/4xd4otxqd/4sVSsvNADLZGa+l/j9HMTKUDTNJyzNeWcG2rOX4m5JwAT8k/Ll7Wv1BUPnNe11Vh1In6vJIJJUvB8lIM+2RyAXradRYZa23fcoM0GVCvs/q+1R1Tkp9/fDym9DLD6jHzQQJti6Sx4VNNAiz6akcQe2gfXckvoZBMyQG8H3HDZqcC+mIskD3A+VKyOqw4TUEZCDQairwwGiYOvyQTed7i64duXKNLFOWHIPOcu85LtKKZw6NDZyjN2fhLNwO977XQRPQ4AJTO0Bta/LofHB+Y4u4qMUSSIyCZwOC01M9YwZtntB0J6aZ/StqoT5BF+63mYi/FQ29Yy+gJPGqr9okO9kShbMgB5xhZcigPDqa7HNXyjqttDicwFtj5vfFU2ZzPHMkUG9sRgsmOPB9kMI9fS0+PFX84U5/CnPlv8+1fn8e4XC2qcNFLpRRFsntVrTIMQNW236YI0RUX5NRSvSpu9BJiq/sm3vm9LnAjmC0wL4+7U0p1EbkDykwhjRhrwe52euPNRW9bm6lapJwR4OT14e2KtyQBOx/lvMSKKTWPPst3fFr2GckDLfQUOumcs7LiyP+gjHb8LbfX1SdOi1qGVts6s4kCO7cbcpkE69tmI66zeQKHhrLEJR9RXvqIXjhvIb2DXHGTviKykyZTMXDPv8L8EbLk9ZyJfUKfF/VfDoi36VcuuBBc4fVDEEWhujTWDrlr8plYDAZ4xNU10Ayjwrq7F1Q5eQ1UYhjufP3cJQPG3R04kIuXAk5XedwH8Y4/6F+uF2IlMvREuj+vFFsC2nnKPAkwc0UFQNp8PXplrOTYe4mqBD8kyOSvaeeLzeKXmVTug/vUC77E8Cct0lFm4HxsNt7PucU+pv8tNXffLiYGlt90l+wdy1DKC7bUqCfq/Qx6GQFZxc1mH51I1FyNIthL5VZh37BcHjG6gLAxd6AAHnA==';const _IH='79d0736a3fed045c8510a4944a703dad94e463b6b131f829f2bd04f8a6e78ffb';let _src;

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
