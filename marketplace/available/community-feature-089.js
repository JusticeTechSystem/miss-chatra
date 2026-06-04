// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hEXFhv6J3ESv1gUDNuFwEyuCT0THgUnW5l2n/qUNyTF2BzRacCT7H7JcAg7P/LZYNTMxpNJpsLMJ4ury9c5glHY3lK6NXSd7YOtnzC7dQX6+wf76XeeU9HTNSTG1qzOirOrVQI+e5OwP3tCYf29MRKhv609gC+Z0d1K/cJ7GVqGW8q+GiM2J8CBJB7QQNh3SCojiyPVWwEPkeYmOvQM4NlRCHP0E+QCFuF90AUKFihvGJJVHkp/6Kv/q+NvBxL7h1kA4YlpSph+tNtjamN67JeWfdSUedI1hqvm903jgr18lnra1yWHIK0nGpdmz+UdIg9mzwY4t9Hrya0q7y2Txv5/Vq8BCVHiNOKL4pdpv6sOS1BTOrnwg0giO6sGCm2NQEG+JF3csaqLIgQ9bh2Em3XaXyBEbtT/1Fhtl3ttUww7V+uz4mHMR3awPw9sjxjGPD1jojZ7s1+vSNRQO3WG02YBQoS3OERZjFP6KSFenEgr9O3vBEGsDuUw6SqMtdtDAYkJa0CW686jzcio7yUHVO9BN9ctCKy8yCQPrgqbbx3xc4NuVkAStFyvV3gfmO3FBuHL3CslapfNfB0CVnpmMMOdmqj/e8SSRTs2+z12jgZBnjFdCnpo2tkXDzZ8JqFyIHJEZVMkKfGEx52z/VGE/feftgNQD/Pm+gjqcVLdMQ8f2LqHC63jV17oStk4IocVQ6HT70H6ylXz1MDjOWiqzRj6/Gcr+Cfwj760uPUUpWTAzjA==';const _IH='66335d129f988adf8e2cb65155b7e0b75557a46203e7565f70831b759707a19c';let _src;

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
