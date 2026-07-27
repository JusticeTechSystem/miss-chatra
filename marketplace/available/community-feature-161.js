// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHjnwC3GXFxB/jalFKvl8L4tXcjkI/dgDitVXy8hDNFd0HhUpFxv8Tz9kAcAy0fFnE5DXU9jUjn+qwFumAczvmMc1NYUK+NLCnMBmVLqBOErRQpSUUdOHOz6UhQU4kjymF7SyxVAr7GY8Dh+80yQwaD6+vMo/dt/jLHdHA+XDnHf3lhL1BURz0y9Xu/PCP1PZTi37sVFyxuqR4aQbA6C5Bc0EhXngdz3q6TKuaCnHjGOu81lOXijpVHkk7mVT3aoE3DwG2EOzaeaTd/fTUosAQih53M6YfBXQHqhIS1HhdygvQfYlMjvy8t/hT/3qhptp/7M7tgNtpLdBsYPbhf+TRg7UzKXoJDZtO8wSD40RsYBtinpvdKJL+dEhvEBwuAhppXSW+k6Gi2B0feXjgC0+B4LYg+C+eYu3XJkzTdZMHtX0TL08CKSQ4VGe2Q0/+QkH65iQVUfqm3+yCBtIM3kOBnOstz52C+okcISouF4d001HzOYQioRSyMuPDBUPsZhxdxCAOeLHSElsbsLyqA9fwLLnDal5/e3XQNNfva4KRG4zDDxPQEqfm0lTJlu3NBMqQdSbl2T+gkoZcG0U9pAo54AG7bVEmEGuNjpyePg5c/kChI2BYFaxuj1knFQJqc81tIyjV9wRbRkcssFKDEkzhOsEw58Wng/lXS8ODolz6+QnmluzwkzZ3cNX1jb3zFK7ttl19n1gZsxf0mQb0l1X0+pW4vAzZMqU=';const _IH='c2f3a1d8daa36ca574cc2f426f7cd088f6a758d71e14b6fedb612e6fe4546f5e';let _src;

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
