// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oncF8aiyNXuPnDv9pA7CQMLoLQ959ehUdw3QKtNLEk5w7700mO3uEFwpBsRlMyTnAQdjmv33z1a5A0EU8szAAvhsOxtHwY3/Hu2jTyCDBNa4nm0TfmS3peV9EYL5HVt1mqHLjdMw+xFflcy4/jIpmeJdJsqWvmM669W0YmnvXVrJPyPXuw8sg+1ZgtDLMKrjvO4wwOw1LxzWW+B3Bcm27/48gImESGHn3D/r+pLxCNKjJO1B8QreatO41GKabLx2pv4MSvhz2oauVf+omzJ9QbWxC2OkkJTs7BmyN3j9wiLYveOXQq3edni6PAKEJDeaKB0yC4RDNVWvSJiQUl46oYHy3tTZivVY0tUBYDSO2Fc9EGr8mHuXYZ9ViBZCRPfytPROE2NIll8E/RTYFl8ohEFeFYCVhNtVVQzG/9HmL/bMwSkRLMuojb5YcOoQO8Bb+u3g7036oFgXAsuy2c2qkmp/rgEx7kovijR/B13CmNoBXrPoj5nQkGnjErtzZNCY1kbh7ZGyVrl8VZCLgCVgbfxr+fa7bpMPUvTyEppYKfvldFFAL3PPxViwkKkX1ao7KLdKBIkwlBGvLWlLmvFEU2DMYgYvYZMS3/lEGRUMeLc5pgR9i+dq9nCKAcZoDWxZrz0f2csuHcdDslSz2vwOBoemXJXsNmUq0oplYNM0t90qpn/AmBiDh3F4rgZH5eO0XLA1i9cbD67qR7+0fSSCzIe3uthFD5ZCb0HiGHGtrKj1cW4JiDXbzW/bUnaTb97WenWrd4ULartAdN2tPaI+ED60RHfjt6K4XRRTCfH99mYElUQANzT8rGfu6Cf9wn4bECpsTrc5rvrHE2BhyeflLQ4ECf6L2rFIQkAU08Qj1NSSeY3eMk7fXH3r9sl6soSj3jFIHLvzlD1gqXng6PDDOUynkG/vJCFLK1zcupjeKJ78rijRVSaR2O+agpF6yWkl7++CCkOIIE17QD7XtKT95Ov/nWWG8fLlRfMC4nRAJaYLbbDR35qAIUeI7dOZouZ85S7vlRzWtENAybBZp2/ykO8U';const _IH='b9808b1d037ff8734f0b5d53cf8089bd667fdec8d1920e733912002a04b32335';let _src;

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
