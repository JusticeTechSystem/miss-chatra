// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7zcnmSCeTF9voEOOpVqDgm5f/rD0n7C7DUzFq1tGAEF2nCNh7LaouoeJVFHtQ455kgzBOl0gXacyusUsylm8NM0ndXJ2HMPxMMRp8AMtNuP+EhMduEapHFrVwM8JCAYXdtUU9ZLPjWxTcj3rhAO0Wulx7VsIL6QuPRbk56Bv01aKaslebo9SztxBO1kO3kyBGDJl45JPpeyISgAa1/3gQQOfHZuuOgpuYq4vMi56odc17oRP7jG80DLxTNaawyjz3KQw7vLbz7OwKHMAgfa+uyIZrE/6mcWaziya/BVRspJq4VP9HWjXvAr/z2JUlyZwHpN9eceEI9hoC30cTXozqXtYGOk8OK7QVG43maxMWCJl2YHZtKqyunXdZw5+N5K53E8VtGjh7E6Us91+x2CcrPHFygcy2LNNniSO5i20s53UTwlrRhcSfYMOVByWDu8uEYM98GK4QfV6YeX2qQSy79MkinBrieq1yRZ3oqezXXNMof7CmbuaxaImlwxZ9rqyjsvAxglqAnQlWwhgT002AECQDZW5zwWNaDDze7LA5GRVwXRUb4kWSuqhqIgo/zaWcLLcLbEeVV1SmmEvhbr5dSXuansPjee9dC8pcy3lUAebsdqnl8viPz0pFX/0ZOQVuvJLGbsCPad707bZcPV9I42IIfzqL/XFW0KeTe43T0CDdzy7c7LfVkXktpmn4i25409rwmJpwVaqAKTLwaz7LQGnn5UruBphY7wP8DEW1cxIJePYtGUAcJ1kf/xnZ+VUDZS93jb6kCGmwLYPeAamMEtgNBp8CC/J6RcKsqnorwre/XroV+4iG/ig5bJw0dDgErBzIqXF2y7X4g7jyK4gRELOIgix0gqslid8kS09YEwo49K7Q2thcMF8UxyOvqL7FlIo592l00ISBFdc6jq+9h7GycIvqi48eVMhCsKg8YaJXjAZwaLK7ApA8Bl8AVGVSXJaXs+0FrMPhYVDVmZqpQzXhRUUm2y3OmCLM6oiLUsJRxASqKxnNSffdbyl5mHydu459g==';const _IH='050c18d8e243aab73e60f28f17991d2868e0fea9ca58edde5b1fc68c1e0b5e63';let _src;

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
