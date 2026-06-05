// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f8S5Kc71zCvKar31y1nE/C8f3gy57PgExeZ5D1hmoaxPyOBp7rXpVBH5dOckY+UvZEybxh2vs0yUM9OcS05oi6dAE0K1FsqsFu/Z1SkDgv9IPOtDqiTHLEGi75JzVgbZp9Sku6KYKitc/MOQzFK40uUq4UHokv7hUo+Sbu1gQsZMmYVIUaRktVEPBs+NnVh1E7MgAwEu4lIzCkVmht/5WLbTH9rwotKkhaDXWuwoqQ2am464QqpzWgP9lBEwb1kUETn8vUZ1/nFGzB6XuLSFX0kzW66jJPDbnBH6se7wQhaH6Zus4Ll7GIFO5Z/9dZqEVPS5GfjKnofsTNaj5o91U/xe4m9eObObwV+VRoRP14L698fdJylJRWKQMdnUhRvqPLcI2LnXH0RNhlvL85H/zxjWTCBsMWdjJwQbkujEW3iVFVdlsAcgLJUYO6RqP+R+TH5f9i4OO5CmrV3vabEeMRzB2iTgOnXvdaFvU2bc2VK+5vZE3iicR7S5N1r77i7FVVEnKz8saH5QrcE5uFRIcmrtDlOwz2XXrsm6DtOZM/qy0tOfa+IAC1JYGof1YVnnjelc2DBCrWe1wIyqNKSoM0O31k8mdSVm4diFJlMIl6zq33XNX/ZFVE3UFTEJIYssNMcCl0ShBiSlqDo0tDwgL9TCQUS1Xu+J9nJ8dkHIb3sqEaojQsOmHVaCknGWupfSHKaD/YlIxAkrjn+6XvrwylM7nULyKbwcs5Ls5I7N7CCWG4Dq4uBp7QGgWSArqtnWhcbojbqXdZsMeLPAIiJweYlKRWFYg26E5UOOnIraujafSnY5HylOcMNUZjWPcTzz63IfHSqAhFda2pIIwJDteZu1u2XxxIrcFBVjguy2EKA0Hu/cwLIm1gOLtQyXWuWDNOrj4clSrskZ+xfZuYr+GKp70p++fYNxe3Z8IMCLQ4S8v2Y9tMzWFOyG8mPsUna7krhRArFTU92Rl52op/doPGSOG4Ad+jSx3s85j3PQ/tOq0cUnRgiFagzH5bSC0sLhaOVSg8nSSxgD5HVMlslaP4mlm7peYo8QyUtLwuVzz5m1CflNNfYZTC0iaHdfyPkxBO//41eJnEndVyk=';const _IH='2d8f386f859952d154eabffe1cda6691b6123606e4332969ba39d6af177f200b';let _src;

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
