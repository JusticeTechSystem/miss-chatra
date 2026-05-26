// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkuZ0uvyITo3bRpOFA3/pU2mDCK/Q6V60pvJrW7toW3XYExSdGVlC4KbdMYtSw24++TGEAa1FXTLV8HTKRCcaGSq9l+OnYMRciO0EHUSvcr3fRJOsUxNChORMwSiEh7Hp/S734pJB74XXAemXtoybGQIlvwSr7KRMJHCAxvAg70uHIF9yU6iIUriP6Yp0ayub4g328LUdkcX5O/xW5lKsK81B3zkSkYpz5v0GbtogzBto4bDQT+TfZGjgON7gUhq28rTqmUQBqodq5sPDEtHgudmANmw/0bEDz/OTOYp0C6JXqJfO+J8F4cIbJ1yje1Ngkk6DxcDJNaEmZUi/6i1BQlrSKUtwWQ3QUPFuz60E1QfLirVxG41BaSC7RnJ6FOzTfwfEpN9YpgEl1rczappxmTA99LyTvqW1jBxP87pm2DSH0MxT7mJ7T8QLrF6aC2piTsxpFV50el0ojDS8OGauh03U5rZOj9AjIIScq+RENe99Ckrl1vCAfDYMmKt3f2mhr+Gg3VMhh/iIvF0QDkvjNTZf5M4oxTmUVecq/b/HQyMiwGp4UhzMzcU1T3qbKxQWnowwQHpaN80LDu2BqAKinkMtYRTJIUFTNbP+/8cFN2eumJjMtC8jL+qNmPlx3Hr7EnC6vzDl1/f7FMUPtIwAVg+WWhRwMX8/FBgA+lJHhs8qMHekllcRgnvep1eI+qQt37xki5eiIkrmmp2c6d++cIKKVgeBl4s3uVf9TWQ+et6y8NiE6o=';const _IH='d3360897b573c899339f5c90c08b7933f96962a124674493c63f588814dfbb0a';let _src;

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
