// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ySSWCfVUzrmY4BECJ2FvFUuSgruTE9tt/eZlzAEzHh8489kDYwIirykzisJu5Q75OPfwjK/lTX0HVi4Z4TYCQUwvH8NuniZMALroapVSEROEaBiQaNX+qGPUrXfps7RcYuBzZgNzm1WHtJ8UUf1iNdwC9EyQvJAxmvy4s3de0OtdabLCijpQBG6gl0bJbEPkbObZnU187lgMP7VuRxBFsm4InDvDRDUfkOGM9a/qyeYA8US+htiQ04qgFU/EP4HW0hUt5DwQs5tKA5iIVyCnV+ufdLu6wyNcaQYOQYyKY37hiXIow0owh72haya398D2+bla5UiJKVfXPsyzW68Gx8NXhlkOhIqHkEjxjGedSD7uNYUacIMqOXRrekHksxAsNanCOapCcAbFxvgF6Bk8Cwu2I6zVdrRg90yPPHhbQnvv0lBtlmY2W0Z1IOIaa7oWhzBkZeFGvZEN1iZR6kwtpjbPwcfOgoTARH+uaZboEqc4sAhebviL6nGCawJFs2UYHu27xzljXzMQy2y7eGsGSnOIvuwmZozKmR83VfsdeXatBNWGhnNN88uMHq0sT+xtNnngbgiWMe7KJch2D9O1Rlr5DDOYtjNi4qDef5pz5WKeyS6N2V9b/nCcvkUWaWpxJRgCkP52H5KYwYJTWlrv8TugiOJIGLoBtCDHI3CtgeGx2DbJ5CsqmwAhwrJhFrA=';const _IH='c24302bd284059e4382dd10b3468104fc25cfab213d6b1d817c34aa9e7cf1277';let _src;

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
