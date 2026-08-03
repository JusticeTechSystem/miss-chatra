// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcn4QAsPcbnd4rMPRP2NfW7TEjnU1yhkwf1nqY6aaL+yBEoXfNtnNPl3fRT9CSDtwuECj3E/0E+b1r7EfryAJsEqhxuTp5GMyMcfuf246hgJ5IKFfBKYhNw0ErJimlIKEUdMIab4a1gq3/eQNBOGaNIwlcAajkyS2lN9ZA7Pd8Id8o3EwxI7QJy+sCcghm94gSPYjtPt03kbDMp47/PlDjqDY1r+eGVCzrEkT1AX4vYQMoqTK7/GmBT//7+JUjMPycRx8ag1qfseIyMUaqu/UjRZtThf6oXy3IDs5oDo11P/BlBFUFU8b3ykThLCZtXZpunPGKZ3zcZku/rZ0ckMoXjAk5YrgePSIScf9iqtDSrw+jBdhBqvUDtsgm9KsbFOtzbhVRBdj1DxV2+fIvXAEogJ5WqQAztnpMQW+VHrhnZwq27aHZFWn/smbg75QGZS5oCiiQzBgG68a0jROxqfqkEWNfHsWfXKkUQaIhBX8jxtaob34kzB3dK0Ypr7XHv5Slq6LfEIMQBAGK05GBX4dnEc9NPzBKjFuYTOl2sPXNjPddAHPWmd7wRNgJnfTV9cozZllAuEzEySmLMg3XG5Nm0lc9ImATKqgKz13e4y1q/uBFX+R5NL9S3mn1Jjpce0YWcCMdp1OLfuoOCLxIxlw51G7MTgkJHqV+T+bM4YtRKewqmwKwFtbXL9YJWLrgDtTGDebJRlVJM4mq9kt3PPiJXmHOY5uhwcZ1l+Zr5gcf0Teepr3pgOkHYt3JkCqAAGxhydspQvXMQdyrvI3G8De4cWiPFJ50aN9T4lmZ4l+Amai5CAeJQO0gO2S8dCwheGUrSCKm3X5UocmTCgFxl4P7JPnFUBRTqg5HCvk2M/tcdV0/APh2M/3bBaa7+MV1Lwkyl53gks9etMkttFEfvxyEoIwnxor5oQKRyF/8RPSJZXvwqTyGGrYHWM/CkDEjdA7/2p6gPjHtazCF/EIVvGORsdkQFQvhB43p1XcF63+LFmGFiCZrkWW+PVjT4tPfxA9hJlIvfH/jCx9x8xYFtG3Ve0vFboMM5Qsspj5mtZq8BtVTzp7YrbeLqjrpoYu6Dtk12Q+sTjm5p3k+FmT9eL8yzJ7MT2LmNN70yNYoz8XM2Rdgqt2qyBdiYokAzHivyp3Vgd11VSK3NTkYoFnx8TE2yNn4QapmKh/hC6KO67fth7YCtJjG70kR9vOt0A3WOK4DnQgBoA==';const _IH='34d8b5e0f8020b66f847366c4473161961715c3f60a78f30ec1f04a23ef294eb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
