// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TGBsVXnZsrAhX+amak0qDTf5Cdb5vcCK+RjQzA2HzmAbPAQxbSxzvV+JT7y5KHfGY1tLKjtaohIcIXgNFB7Pep69px50bPImSTE3+zA3tWov6+8IS2KCtX0B6xCc1zUBosQOPXt4wYM8Li4VzChoYj/gIC85OHeqo98A+wm5mNdnKrhuHVgLuGgQK/ze4lAslE+KT15MXU+8uy4tEE+uGVBHBq3c69Z2lPUk1q4Y/IylJHB68sBC8wtJ2KT8IzNG8eRfWL2mmSqeivg54ml4NTWEo+HPoY2n0iqmwVCzWcsS3xJ3VRiQTaa/tzFt6bS49FfiBdxXA2GHDsColEaDhEejbj5ZIP3ij30t0NJWMfZ2dvg2JiReJM81KmmorLlAiRy1ZZS5cZrtHRf6HI/MkeJrPq4tDMW+YavV5uNVCQiUOqL3+KmHNA+cmDfe1snYRm8Kd4qwjpzpOS8II+h5N4auSZftcCHEatukE0n5+n5//Pu2gRDtyBk3TH+ChBxuI8I6qpiN4u1QQnYrkOXGjiw036CWj/PSX0KDxFqPERrS00EjTLu2YlVETGnz6bCd520KsRyNaT2M3bvb/C1MG/Z+sOeCgDTNbm8SdKRmcHcsYsLBVROVSu+qSbMhMcb9OGvgxYzrA+Ij152w1pe5Uam1jonVQnq+2ZblMtujNvnT9rLkoWpDKNA3mGS49B8hLhj37ucSlFzOlFkih3AbQlnTpa0QW7DwwGAe8BFUwp5aiEx51QBtnPysAHp0UNn49BjCUZRhtsnS+HkAaOpYGmKyoeYfh5cChHmOY4ogvsc/QOJ8JXfyUNlQ/QU8ytscLRWOp0656ERStca2ZayH8Xgy4gZL8GXN9Rt7onW6U+X1McCHXdXrBR8hSWoZfhv02O7MKX4cJNEIkIQbXu+nSuctC9PJw8hkXI9ypnwMUBUwE+uGgN5v3bGStmwH+d1zHAvhL/1yOYCgN32Q8oShQXpEZfZfW7tQf9aF/m18m6uoIPDIoOWjb1cP+eKnTYWxn+r/FIUlLYsnKnNkuKZ8K8YojJCfABuei0EAvty0npQ1zBMAj8J3nBqvtAFb1VAfvUMXPgDbXel18cesbcdnnhd6yzn6Ssp003lHZi7wL8YNBe0QWxfZfwdLhOEps2kWQOiuunB6rK8PGXFDhTFFlIBuriyM9oQFnDbeMz8yQIQgx+wn2a1rQuJXPSeFq7WmFUL4vvflrGZKQLylGNB4s7+X1+f1bdcyTyA7jF41Ystl9oJ1+83SSWmsYpCc2wQo6GmeLLNoqrEEopmuIkyRqUHbmK1dn3gW6sJxcYcmWhscnLO2UUFDJMJNKy7IDvCAB7ssYAW31c6UDa/lWPjHTwKX9JU885FVf1OPNfAyPSb9Fepf1HjFGw72gNRWHx+1US6gc6aTIOk1XeQwc3HkfwryM2cuaRPopBfpC/32Cc0gunSYUAG3DRJGNJ8Tl7LaRuS0Q7kDT0ufDvUzPDaQXEflE6JDQXSIfWZEi/UuDXiXNRg0sOJWPnBx1hUrm2Lm0YdpQwiUc9TMxF2KctfqDAA+x79R0ZzL3PR69X8AcMT369aqoSte5lziLCsczApMasVRVIl2yTfkxmMf48Po1jfazlaAK+LyrhReFSv1JGVGh/Nt2CH6YeRza5PDP9VJ8vO666h0hkhPoOXzp0WitdrEhH2KeCID0fmn48ArMujERAo=';const _IH='db046ddd051f1beb134aeb04b6447d7c98dd3557b57ead79731e2baacee5c96a';let _src;

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
