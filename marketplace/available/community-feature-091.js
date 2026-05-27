// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wlE1elqG9XdduygwqIlAqZNJMgtTaCUKc/RguB7s+xT+INHIdqQy62sNrxucm8sdV55LIPQcHdznibxehZlhyO52LwaulCYnB6xWrjwz2eQMWzNW/4fKyV5RnrKcKWjccLU9DsQZEIUemytYEVf6xfDC4Wg9frLivf+eWKd9i2dY6667som+67W8+E1QAUnGwZ+DjPSgY1eGj3Ul1zIj3OkGvN0BeHHRWrb7BMo5Y4oenmDIPToNspnyng+H5pYToLEIuxMATWmbov1iEaWw3QFcWZOlIgYvvW0JyJCnKiZk4soqj/Og3WP4zJpPg4Sd67qcSoeEMaeyCtr+6oXWzPHBhZvDs62jZDiVphX6NNMdO8IRioAH26uZyr4qFF/JM95W3w0xKCeR0b3RKsBc7lU6fR0AKza2MgY+b+r2qkRH52g+qwP31rp2Dt3bo+XS+AgJ4ENqkihUF9TLP8UU25KCyLUpi7wMScTZnHIaE77Fan2azyYDkpbxsgndwpSCCUQ6/TZYY8AgGRtpWki/Q3Xi6u+Px0xXEGHg5PjiwDjaWXIYqdNHqU/i97fVMnmEpmqeZ1Wvyp1xbY3b8i9JeqZEoRpXgIyB2KmjEDTfUhusgNSfvuBrdBqLnvJ8qXKvcKBsh6qy4YwWdcxrZpVdP8f/mxKFjwbrr10e+cm1c4SgXLI8xwyMTxnRefk9eFDW0bGGe3wDPIwz3F5cURmkQxqi0DY=';const _IH='72b843a8a47d58614cd2f2791772e6278cc2768f2fecbeb21a595f610c8e49be';let _src;

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
