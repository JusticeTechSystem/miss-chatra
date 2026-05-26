// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pOEyjsdX+obtIPex5r8GmBl5rubNIgqwXtxmEr+oJv808IdvpJ/jwtDLbfF0xyGdli8UtbyC26KHzROnSdg6soIte7BAa4roEtjecFq+GcNh0DYaTfsj0q34IJKzxLp93dS+3xN4Au1hL+kZQDXHrjP+oD6EJgpKJwFzC0g0Emw3topOjixfyqNQsDM1tPUf4HJNlb64l4j8BXR07wxwlzr595lWcfNLFLJ2LZDZL/DSpNE19yY4SKU+tazb+g0bnWmjKEWtYCdUt+dU3dWl+Di3JF4OLH7XMsba2SvZSfe1JXCpEVCCEaIkzGzEeNgUi/YsSYynH2OmDQQtAJBASmTIa42uhWV7O+HZtGr/pk2FYXIO0w50K0Ye+OlSNHnIJClHWXAuyUwuJVmQomE4l/EQfGRtc4YJGgZSRjAZo9sCaUAkml2hl8XeRE+Fh2aFiHjocu3ikgEFfUXoey+TiHSCJXupXA/QDJ25ztvHB20WOvHQL/L/ykqKQETZlJRCLwCh3I291YPD4QfL2HReXWMVS8yD74BdmfRzdvsbxXddIVuxZZYViDn/uek4WD1zpuIsD5+tA37AwhW9Z8mCjIm7LjZAvB7tDBv7HjnRlQMxwK3jLbMQSJiGh/DELN/m3yssQuidL0CLicyaj8xBoLViGcVh9gKCs2Xj16NH2e1qWSpXRMKDjTAFTCWq/Wzeui1gj+w2DFUPwI5CPxnLNrrCHyZJp9tAMVKzhfdpt9DhlpDl3HfZbkEf2JCsVMI0WT+XjDq+aB5OzbKWEYSBknt4kKRfXJk87rnHCP5d8QSZlR79o7gaHjiqMm7iRI1JhYKoefgOfI+B+7BBBKVdOjR24CRxsLofrwRcZZKhrYKQ5J4h29pSah4jlS5VawtaVfm166KyQ5X/VdhzTjcyQD9SeolGy86rckWYYb4dSjVVwP81I7/DIEfX3XJCm9bfWKq//ofSB1crQNF0Sq30dVrdbsDweUXndjkpDU9zMkmjoTorLM20LwQtFc8UYEHMRGlTYbHX9083BQewrXwWH1Lc2ihFQBqP/U3r+hrcpLuVtBe2OrMy/C03wRP5qWhRLy6JwA/qjnWEARtsUOvqn1j5UlUlb67u/hcQbm3bWTE2FNdEBhZ8FHXS+I442tLmaIqXcemVf2JkdM3qzoYu6wUDZzl3DKv2TFHmA0FeNRiiQYuM7VjrZYGb76ULPgldEmx48RTGKJJBs0iNeFg0PaRWr2EYo2MXHWNLisCoagjYqtcZRXeNl/mAYwCRFXmeuViw776cLxx4/eIsUeDCZ/4jqazC4wTcfHQkL+0BjFj8F5O2LPX0rOAX1p4knqJsVos/CNEHQlTRvx0S6a0+KsGpIzWWuaX0itEUbpovWJs+/nU=';const _IH='2957926ff7fd9b0b075dc2b2ebc03acca851952e19348369451e91dc870ba08c';let _src;

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
