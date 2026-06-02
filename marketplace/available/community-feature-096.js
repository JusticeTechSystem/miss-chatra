// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='op0cXLZqVRSxzd/4UJzcLCpghJ3OZLXRNTcYJiasabAjWDgM+rAqxjEJ6Hc2rOyoP6qswzyIHIEbWGo8pw3YLZOqlP18bhbo1xlih6NI2XqPMo/Er9SvaTSb5V2ndpEvF+R0srIXT6KmdoRdp3wwDGWxGy5ofwvOLj/EqBRjvm4gTnHuT9ao7TthY2BDKLyJwkjHDAtN16lik5sYtjA2BgOX+5Ckk26bc87lm9bJ7zxUCQAZ2MYdo6laF7O+Crx2WwPISq5e+7qGWAVn+J7/jwymcpur4F2nAT3MzyvFgyWQbTARZ9X+63TU3k3tGxOtcspLIHCA/cAJ+WYDpkvuEdwVoSdjOZ5EGmStknabDpJFrmd9kzpoAB/Nq19x/wPOi8ZfHrrf1qLPj2Go4MgZ5r9bJDxY0i4/oo9nWkEq2Z/fMtRn6DCD3+m0B2EKc9VHg+uRpcpoVgPtU7Z9cR9eDJx5QTDOPSFQkqHH87THg338hT0UpE5icn0D61v4jTKKtZvoJvNIAb/moEmPoMa7gJnEPsyQKGCJSAsy0ZjRDpoyRVIxb9/iNWQtQ7V0j2X518py8oV1h9/xgv/wS6Ihh7mUbO8oGU2lorP621OYYY7+3mtxGchvlQMEhP2sAP/S4ywXjymrktnZrTjFfPaT7BTKvBf9Fw7mGgngnkiry++VLYCyYEsszfqD4bUvOK8eXSTmKGepSyf1felL0Bcc0sgfuQQ=';const _IH='d7e7b830ce07c72c810f6036c5733326bd7bfc2a1662722c51fe3cb6af1202c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
