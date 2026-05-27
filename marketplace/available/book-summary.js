// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNBFFu8DoJWus3WV6C25MD1rz49oBTnQedgB+y6TNiYC6g4AAbf0O3k43OWPZ0fSJhniFocovh2JhiYJ2PB8VstKfZy0rjJ3MKLTTfB5IfZX4nW2OfmtPKf2gR1wfI3Rtf8UC9+4JNg4dS81rhkN1TRSGDQJcphwB2JrvonqBzYBwrYfoJrWETs31cegHneSYOJkpr6cFbaYaUlGAofBTi6AbPrnyj0Rc7d+pRI2I6eJvp7jM6gkPVNBGdpg4VlbtYA4Aa9/cNuHW3lSzp3JywRVu2uFEttHjOVMR4KeLu8svQuvcrMpp6164ZwXhk0x5EZOe/inLJCdULrzlhz5gFJhiC8YqdImPMeDpj/E7yhu8kzu3glJbb3+/oTqd3bKYqdzhbxRFoV3U+U31nUa6bQQIPhGy1M0kUvWaXfz7WbtSADKGhmiNf3mt6qf0Ql3y8BQzgC8N7eZnFpIRTowTAKqFCwsIpg=';const _IH='71905215267f66555c4772523f4732176843539cd7a2097c604a669a3a4dad13';let _src;

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
