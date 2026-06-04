// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOEAOPt55jgFMeW6IrcKQcjD0yAW0NQWCilV8cvF80/PZT5darnvSLPYNnTiUnLQ0JGdQmT8lUeyDCMvRT57W0gck/GPFwGsl4g9Jf0Fs4CIednOn8i3YhCJF1qAh+7Vv6ad0f8a5wuXyTbmD0l1YRKhZO+50a+UFn/jgTP+TtCH6inR+E3ueOjh9hU7D9s9CJir+Sx5zTmjVPxDjo54ODYC1hH/IKctGH/PdDbBzdlPe+0+9Q4NY9yKMJ5qCacFAjhWCynTdiO6QdZsVCaWyFIhgkZSGyYYrx+rj4q11wbJ3hWMVOal+pp3q83ulMos3RlpOJn8wvNNLdNmkNQerlgO7xTrNzBAntxoUQ1DJrIzd7Ey3vLMzUffyJ9lqu0hDMrDzd1WzzMGiu+k0jHFKTW4gLk+0Vu6B3WwOs+nYcGtweeloY2Y3Upl4KU00U75MBnuVimClOBgfHkO2PTKBBhdqQ7f5+pwIodvbImwJWdhw+N5ZmnwNgusDxbxq09sG3hOWjoaiTkkfk+MZfIK4C3Vna6QljOp2PvCU7UdzR1mbbR+MijcZf9I2WIYTQJNceZyeomLC7j4sU4dLQ6jehr0Yk2Y7Aj6mve7ilVAZi2zUPy5X4nujN5BzzgiCf+5PPFQtcqiEDsfqMAiZT1BfHlgmDFSnN0e1czgSu9nWxJfrJ4ImWqHHmu4H8AVFI2lCfTaWagUUPW+2EQJIBZWpyNWfIYFaIiL690fQsP1Dj8V/JeD14ceY10TsefX1BvFpEbme2UqId1PF3o65kLjMLcO/EwJg4Fbajx4TlN/KDe47k4vygIM0TrY1q7bW+PQu3KmJHRas5muDRZzcMYLAv9qE/j7Fyk9M+SuazSTgiJjAUQeCKjpwkxo/Mv9vh3KpAtwhEo4PZhn+E5MwdHprnpNZba+ZQN5C8xkqZahaPoBIFCDgGFrOddjn0nKJBWY2Gzh+ClxhAE2t43Xh0Xt22414AzuRmTRqfHZkTJiVo2Awe/aep4=';const _IH='8414173d040f8faeee67643d5731ef8ae82ecf07ca9dca9870bc8e01dac71ea5';let _src;

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
