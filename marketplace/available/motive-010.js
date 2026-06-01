// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0Jc/pKwd4KzgT7/6w/VJsXXJl0KNg6iglwlMeVpkFpK+2Jzrf7rQgPLxGQRVLkVLudeYZsrBwAG0E3hjHfZQ8v+2QwkCBu1hu2l1yxS1BLdq+tMHlEOfb0KSo1Yh3Uu5x8BhvR0j5TrS4XP2CfaxsnFiVzMu0kIWC3bjUinVuyqEnzSOwm9CrmBvYJxayszfxZ/EDIg0IFTu0fRPm+u7i4WLasabHiwedWfcfKGPoF9jJRne2VhFWNxqTKlVEwLNnabPu0M+Klt2PTFwuDi8sAor5XQVEAod0XPBeebNXPGBxXgGN3lRvE5tkS+n9OCqczaeSjqTaWH0Bh2lbsvS402Ej2UBxCXAPFhNJx+F1mtX4wiAfBq8YTwD12pMkheXPGGMCqSHwUJFRdaHrviZZxdWLCBi0i8pJFeap+AiohOQFTpZmqeKytc/i85Ucv3atNfI+CtmF9HmazvADpwBUnDEeNYGLJPTrn9Abcl5rLO6plh2IhDcJdMTFmbM89DIu363X45Xbi1shJqNRt63r0owJufyxA5cI7WtJt1A7pr1VdaubbK5HRZvfvLL+xL3yGj6/Io783dcVl/1a2LYCGYPD67OjEpG18bMC+ojz6b2BAQ7IfvYnCp2N+01bkfYJeoOEyqMVqSrxsXr1FWZfm408XmhjkvKST6AzyRD/l4d0woZTpm95jWAIcGwZ7ztHJaS6kCs67hL7I1h9q6LxmXX+xY+pFAzftXjHhVODrJdmH/f/Uql6nNu3xwe0DD3aaKB7Vgnfai3DnPIYqOtCyciD5ZThq1s0Pw1Rsw4r+Wlvy85+bDmdX0ynFUk8CxyWgzYX1QQpWslFJUGzTXaI7A9r/nh05ArEhJ6VEOXOGEBhG/BFF3RSRffPPOD49b2LZkaQXPw4N/LNMxGVPC5NLJDsPj8/JCvkO1VKECuOzqhcRRQV/i3Klc/20C20g58VLFkhAuq96dpUwIccWPvVowPHN5OnLHrfzfrFXTeaG0Kwn/Hfz1BQcFXm/gaEY4jb2JOGkDjlPobaZPRb+3C+SB';const _IH='4e13c881f44ad1b5690ee541f4e80742809654840d54b8f06548e7e0860c5a76';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
