// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4YVPrbJM8jpBLk3QSQyGupTfXVvkSSweF7RNP3zIj4sZ8IKr9uE+/O3mj2r4eL+Rd1OwCuvMlFFts2hVPEJvR5O3tDSXBi3yqvysAKxp4gDf3LPgquQho+a6yYdsQ5GBrZWePQeNaI/62FmunS5t9uZU8ER2Yuro0LSP8AwSNKkpinYw4tS8UC5+2F7lsISpokxbw9i0L26eOrMb8sGYpmSPWuLHmTQFDllcPqjZ1/9UPsdDYI/yViSJTguxpIOOXKSBxnWVRTxT4Xmk1yMW5fJqSWOB7zJK864k5uNtoqh8yVgBXV0MCKzbM6YeQ9V1WAK8Rs90/MbCzVIxNR7TVjg1k/yjx9yJsNQLOBr6rS19UP5o9O1Kg8q0JznbXNHDaRDZe0WpNDHCbj7T9QDp5hlySu0sPezXcXPWQQoV0t7ZV6uA87YF6ZDGDbo/HkZEfq7ohPLDm2V1U+m8K5uHvAZ2if9jS7rmh6N/AD3H3t/X3bSLTt861tEsAC9eEdZK5b9YhubqsmMmdKfWKiW9twl8NyGw9+ptF3RxlgqAxa8VwXDhYQNAKTRAnOBSg69RwNRYmkoxyCba6svFk52Ay8ekcc5NiIbDVJMWxLBnpGl8lJ4chFeA7clp5pfC8SQJWSMpPVU2/SZfl37eXtIzkXc7pHO6Lvk4Dpa6enW+zZb5TBiY8D/8z9E5DkisWm8mDSQcKN45zA4rjYb8SsWkO18eJF9IIsncOg==';const _IH='ec0d91826393140ae8a8e142cacca070df22b04f687726ceabaa5975e3cfb3e7';let _src;

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
