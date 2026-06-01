// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5lFdNWyLT5P8RV80nkxwSyNzw6F1B9A6JgRZVvtPGPsgWqDWVIMPrsWftIgikgm1TDjlKxIXRjgXTdvDPaQnFM0U7g6wfhcIrefwx6IuXTY1SenYUeVMkLein54QL+4QCKBStV25CJ2KoHsTEiI3UDD/tp5d56V6mkUAvcz1MRc60gxfPIen1We3rL8rBvDmsndlhQqqs3irHAJpI90ZI3PqtkgW7WFYRS5bNolkV6SL7/mBpnaPFfiP3b/e4XXKxqyH3uyYp9jG1tycbrCPCTDgdRntkSoL3k2vyJSQ8BzyFVm0Fa0WoEKT3qKYKcX8fcvO8I4cmMQ1A9N4QyOzU9YM0aDjdkIUj0g1X6+W0pfuabAuP9zfm8s+gMtEoOY+x8XFEOCAylYCutPkR+xuVcfONNJh+vmhi9para9+2T+BOXjVw2L5P8hOzgr1KSQGRQ+rKz2aiY8BJhS3I5GRxd/8dNiwtAk7GoFE1S4GEECctR/Rj7D2/kNkPNj/zUO3BC+4NmouKesnxLh7VP1jeyi2sDrteJuiloXzII+7z4yvWoe2DufIQy27f+JlWTnlqkH/0q5RH3vYhKpAxR+LXlDMUxiG2pEm1VE1/UTJm6KIBMDMO+U4u9dTfcBNMJ3cXlTLmT0J4QUy8MxoAVYzvOEOelK3fp7UkLuAK3vbaEmNlxLMoqvYnCEHaMcWwBqCJKnd6H51qJjPY8fZoLlIt+fuoIHDrZNsCt/Dnt4';const _IH='df97c8a2d4b6a3ef9cb98f5b69ea2671cda824c665dc209c0551ed83ccd723cf';let _src;

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
