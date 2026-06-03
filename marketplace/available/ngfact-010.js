// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lnNmIkXzkMyi72qNy4OYwFIcjWpPwTIYkKyr+PDSpfc1z0D0Fh0E5yfWNr0CFPafjeivzuIQC5Or8aU6m4ANrKrWA8whdOBq3QK8fDjioT9iFpn5jF3uKiuTZ+mZ94aXbPEbJaXzWVKLI8gHisQZWeLkaGHnw8NOCoBsFS+hBluxLn5XsXT5GXmUWDFZLryIksLWVar6NBQ1ZXF1wWmo3u8kWGRV6EECoaQcPXja8rknxP/Cr73aC+PXMJ7LS0q2p81axBqqhyI2QqdQqa4Rtdpn9QadGXMLQkUlGvqjPfiDDpm2eyJNRevIwc1svhCwPOKEN2qgMD1A1KysxB3DF2RTcrq9f/Vspza2y35RvKekwRqtVjN8LrcDJMAYJs8IP7DKSe8EQzl4DroSLNoGeANRx+sUFhaS/XzlPOnu1Ue1TA52nABKcGsP0akMbqvbZ8U3zIeY4fKS0VnDTb5pZXxJybnBcyBeKWz2ofLBmt3mYKKBTQrLoJlXmnUP2SC/q6LdTdlJBMSij99pw/TiMTSPvnp+lyLO92R6AlFi4JTmg9F0HXB81npFamTzP5OheThPRaK7ilzy0CfwuqPjmnESvG1jlzLhfFwWnfC6x9kBigVV/qD42LiMxClPTyizl/E5IWW+6ZziaVyFgcRbBvwN0g6K3snE7s/JYxKp4ay2Uh4AvoJYfv5xJeOsmGEXCDyUk+hOmjs=';const _IH='f1d5b05e4d6e8d4b51b396f602e1155b4c5d8f564d62e25204d7e0907ca6d4ad';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
