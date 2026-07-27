// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrC+47KK2L4pwXgRrrWfi94ez7zK+21tALkpT8UN3IV7tqyWJLQAHzwhBqwjWFQ9z5sk2SrhVNxhvQa4YccX9n6+CE3CiCv1aMgf7P7GIaeP8+lN0zn57VEQQnIRxOzbmWRJnn5dVYgb8MGQYJyUGcAY+OUy/xNg8/VFVr+rxxindMpnjrsvzA7dPB6FGjOf+r4vXBqRu/ZRJa50AYDuwWuGJaE9TEjzfatbMxDd0/T92wODUJVF2pWlhtSt9Y/hs6sGJznj76JTJkFYWafLJmWR6+e0kee2L6CZz1g96bDlL6mICxsoJZRbs77TjjYhaKtY3h/vjEwEcATY956R7ROoyr7ROUiZ4JhF88yYfcn1toKGg8bul/ZRyDczp69baDyZ3SyScVBmioVigwwu5Oc4epolqKzYx8KMomn3HdHode90ofBcPxvd3wFPZ5kXpUK4ckBV+Zl3SjUcnOOrQhFzPfVjMpGezbaD0DOHjsOPvgawFxh1Q5ObEuLi7c/wqaqz/qLo9wVONh1ooBG1lrhK0ddfQFvckY+LL9BOTBiV4EQySv4vHwlm2s2clhn8541fS7xTQx+EJFOvPHDElZFF7n6RbphWQmLYERAdrclp3pZGt4MzxGsTFiErpYhNdSldkHAEuzmEq0yT/I+cudpzJEmxJXP8nbmjwcYzB5XjEVYE6MSfNxI8ajyPhz8V0u0/uEc5WiyQd9c/peT/zmVB6GReZC5RxL';const _IH='0d38edcece72f95c19fbb934237196f40b1014c9db0e5c5af8d64aabe5f09dad';let _src;

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
