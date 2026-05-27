// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AtMplAPE1Sm47+jvrmrzVKALxLGk/nReK8WdAnsnKNGdS5WHoGMCwVU9npISB+C+woEVx1pUKHzTz0EUxoK1dsAScqx+BcChDn4cBYceKo9gUdX2BzpYwQCMKAson1jdAEgkdc8BHUkwZei8QRj6wumSt48KBVQ9jPTTQCv6xMSnMvDeG26dXdlpNkjT6/YQg+sY8FPpE2Uva/+eHFwOTyjw3QXIz+pA0xFPfuT+x3kywiJ3mZ7XbBA0jpzUUTXf+wIxavcOAlaglG3l66QJGI48J1bRon5FORXyX2IBymI8q57GEWuVmcS+YUdcc9lajHJwf1vdb2FxhjouZ5EWmLbPVqvu6kdJEvVT3fyTfW8Jxjhv3nqXrPToh2q7IPLvtVoSh0EBE+aCwH1H83TlgG8JuGwMvQnNgVhg9Q8Yq2FDXf+JmKAqvtUKkVNICJn0oOEIHturf+f/aoG6655khSa2vU6XN/u+V9OVpxZ2DTCxrpBql6WYeTcQduMyBQVdH+CqKG7BpjRnLTwkPgD9BwLmQd/+l31fWPNsWADiYMLyUyVcJWLq5gQji1FdSm8rMZBWmH4+a0VX7Q==';const _IH='40aef00b6da0073aba9c3cd1c8167394f8196b22800e410d1a92c814a7c492cc';let _src;

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
