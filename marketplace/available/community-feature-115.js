// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmZUpHtb270YfYK+BdZ9Gb5jqTYd6vEM4nIdVC+86nW+lMUdjoEbl1WQT+fl11k5fJRkX6F9kE2JAsHd3gERmuuEaELsOqYOJlqS8rCj8WCBs/y5xj3cjOyi8pgWJ9lQEvwxg1fuXgFe+J8l4j6HEpfAEYKmEKRw4bqajn+XWHUNnVDl9n/I6wVwMlv2du/juAoHJAOQVXVu5vQjLY5gLIoVgaxjpCguuTtpj93hGsPI+pu7CFMqX/pByk0k2ea3KGV9qxbcwgX3z6u7rAHBMJdCeTUAeFU6a9uAkTcdiqvWwcgxL5A/fEOxY8dYvQRTMe1+T7nSoJfASRbxrJ6SmIWcWIwTX5dsaM20qXW1HvyBkYQKvmFHOkitCa4a2YsSw6pmvvitGmcshrTjUenSeoR+B575dCp9F5D+oaBjl7USjXY3l5kdqoiHcogThWK2Vr4n0AHH8ug5ZtEGFcOZoDtexD/i5nqyP653So/pTm3SKzCJJCjnIARG739BDCjqFC2KJ3pCDinl82/1Mm9NxhbsKpoNvVkxyQB93bksYxjWT1ZjQH5YNXJtYxSGEUygt8Zz9otFueAEbyG2OoPTYIPvLhod9P7Vm1akVMmFNqmCdhIHDIT3oW1uvZHR2X/dC2w0S0KA1y5vDuLQ6eBF8xlPJG6tYv3O3QhBX3iPVMKqVbUth8oB9KSx+p76W6V2BqzXfCAEZ2H+qcaH5aNi0tgPNYKw5H/zDLjX2+KIKetYPYerzips32D8';const _IH='3e834dd6dd056520a4021b5c4261938b53e36f9a58ff2933ad72482c6fd3a4ef';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
