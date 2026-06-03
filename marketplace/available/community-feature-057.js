// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p7Ya0OXJpGECnmhRt4uENmFiHnCIKwsusA2UuLdxB9j+fOcbLkIX0zhmtxEeIQoIeJhOLaMoe3yQt2r+vDxm2UQIxLs0hRrqriWWkYORitUBDi9Q64bt7eesQiFUSWb7atVgvSiEmozMJUuzRFbKnEPs2ueH6gIGTUTjKjSyl9gICODSehsdhEnzxsWpClVXYGbdtrincpgwu1NhpK4r5kdiZSwt/ATAeF+lB7nc2CvWf8N03D9Qub+WwmEGicbQkUuOnOnWw9O7b8T+7hoKRV/3C1af1yF50hJY8KuQFHYSKzjAIsJHcspt4bsN3EZdlsj4KuLCzCD0P3iTAqk8mPkGGryy+l/BbXp531W2CF69YvXfDpb3so/VkaTvhdTJNLbmRUNszfpB4yIq2mu9QM5MzSeorBUe6GCSoFv29POOfFXTc9MvfR09kfgVtkEpJM0W1u1JScXrXlwJu5bp6GaY/M1usSOPCl3Prm+mzN2JzRocj5IWZPyp2fs0KFuWMR4qPeQde8aX8bmpJ9lmeBq5D36lyakhAKzFyjjS0IQ70Pb4ZIoQiB0jeXXTg8utXuFrEWAGi3MmzEea6qo0g5n7hFSt2Euh7sBw8hYLrbZsREzarsNGoBuJyFYZoLLMRWOvcudlK0t3eJ70C6e4AvNdmjRxjHcHAmsWCiAIKCHjpxkp/D5xfazmRaEoJfAonw/DLDbW+HCKl0JMWVFUoz9wQy7nAKfgy7hiv+6dPA==';const _IH='cc8c3dff60c5b772fd071cb67bf848ab4f8e3f7bafb05684cdfc8cb3bf2814a4';let _src;

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
