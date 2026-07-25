// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJtF2+9rl3ZOhCdm++IImrO+RVbYKwOPPfNGYiC2qKEPaPe97AblLhpe2LjjURZxuXzT+FGPJH5ogNjxCyacfZKuYkMMssJXzDjPNrzBmoeZ+Ri8dLOyz+NDrkyBCuypj8cK//o9pC/jZNVcojuzaVLVEr+j+xujued88awa8G2Dc2CuJMnKC3lVpxUDS5RYIucBg07bKSdmWLXS8sJpRq0qfaFlEFblmbs5ySIzhBeDKl1NVzq6bfkoEO5FnAxBEJ0hZP7d3iAhO93ISDC5j1xptFCO/SUJjPYQRmW2REc0M8BrTa2lHJlz1Ek7Q8UcOG+T8a8mwkiGIWxWv20IKkwPhkkdjAorcgr6l0bsqDbvebQpcx9JNTjsm4EJJ13gOx3VPvDN94Bjn222qS6K24byx5jKuMgiajgzVvAtwUyPhv01W1PaMXetBkOp06QS0mcKRvaqNASOh5WmsdQxMP5GQFllfhNwnv3RmI717NASQ89MzoegN5LKpp6oyl1YfRhrp55J3ztavosnctknOhNRVnRCAh8k3vfTDfeYaoI4x8/7ULtcvJxhcgUkjBWMSI5M4otLyKYYLhSEyuc5fu8fNs+QYZgN2WTAJ1gt8IYS4TAa5/kQywuxkQZn8SAMY7zbDxPsj8EeQEPzPXGPjFLSOrHuFUIfs3hA5nuy8zD9K2dvYvHZ/I/hEDzx25qKLH4NuY9WwV7fcaqHnO/s2h3ghuyjhBMiJG/jSy5ch7kC+Z4+UouHrz1Hsn/CnZY5ODjW9W0NV+iPlJSNqRTTgIlo3dj+YhMI7Yx7R5dBu3SXMKBm9jS+LAiORU/tt8E3r+7wx7eEM7r5jkj/AsDYuh2KOtmDlz+yBxZII7pA0nvmfQpD3PT64+HeLZgCYTG5G5F2pbSQArnoo8KRJkyw/nQlq27imZ0utFNQrIAfVSkoI89i6hx7Ow7gdGtA/+Mz9ZgEaFHq1C/mXVSFFb/9YXhLZ6bf+vjq/CEbUoJeoHkeH09DtrsHuIJrcIbZi2gSw3xXZOPli30fON/+A8RV29/HBI1IhSOEGGJR4V+Ex3+oRD+BP+YfarNMirRfkVTmeMjD5FKcvLVyCYLXM/koGD0cwmOK0mcqm9TZS4BsUkabwl6CVZVCa+TK8r';const _IH='d12cd08bf581aeffafbf9a0d20d18166e7821318c862db0cd05f84c4ec5e7c22';let _src;

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
