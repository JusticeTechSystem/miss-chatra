// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nTBI9VR+jSEimImGie/EdPnWE96zrqWWInbGqP+dyFiG6goehKhiEurid80hQbmfS/q4OBL2H39NNcuAaf41iMSmrIlsFknhQy5+knraHhO+Ti9VIxIyCm91UfzWqJz50C/uUbzQlos14Mq5qqQCLKHRNkHbfxM5Jdj60NnYkhWXad2Z2O4zqjLfIvWyVJNhta5NVl+ihoJBCHy9cag8PZFZrTdpgED2rLKJXiriFyE4wJ1x6d4JEQnnSIUrbRLxive2ulKhpcRKvxqsEwS81f7BXZWUQtzNt/pBMtXaFqPfVKPbCneeHvapR0jzWNLRyux1zR1CWqQT2St/Xt7Owzg4AaTW6TT/HqufJZVfpCcv1wiWmHo7CQoEdYio9VnMpAf/5HXqwAL/HAmJtID5judkiIkOAJomVVliX4/kDMk9vZy6yJnQVmccPYpMKCuuow300vvJVJDIWdN3nae3BMwdXbwFRB4hGoyraM+20DDcv/Up620dFgJaEsfYTcCWap2ZgSNIWVPFoSk+up4xObicIKF8a4YPyw0CYKDqzlu3Bx6vrRZ6rs77hsh0k8dTIb6arTSUyIzqLPRXfgFFSxN89s9RFER7zyaj12/IuoJkZcQqvcQNLKt2o79jZtHV1KDZeC43wWXE5YD8v3qdGaRcTIwWoZQTlRUoKuMtUOeIRVZNbX+HIs+ufAvxSIuMkvlEpONpQiPqRmTWCJrbP8Md84u1eGMoP+SpoxBDDKkiI4Sj+zLS6nS5sG6Xu4mpV26Qvt078yiLnwJO1R29CDZRSnXASYWu9XfXe6UJZNQt6jFa4fBLoo6UAwbfX7wQ49waKGjFe8RFX7vD6XMPEsoOQ1yoiZhhotCQidTyDMEKAQ7ZjPzwVfr7PCVGI/R6jnZ/GEDsnUb5aEDZfIuFgAuuK7SpyIAyvFmj2bei5vaIWMgsBXqc69PDLKRBmklm2L3K8+VIEPjxWZYAI3R8sqQVrFfoQuzvTclFbdpbvOXdAxw7ucBvZnPXUgAgI3/7Ig==';const _IH='f1ccdb4eba7591b9e07c590187377fff87b43b991a0b2b59377f47f2e56b9e65';let _src;

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
