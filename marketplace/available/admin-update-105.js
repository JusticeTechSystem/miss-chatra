// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AYHnDTsn4/h8aiOM8R/MJIEeD74xI76wYSyyNs5cTW1NgQFB1RjObZ5qaEyNXmtB+f+Kb7Mh4o+gktf3vKzGhCUHnrNwubqsN7zO0ZPoBJdYXsKGhpV+Ia/EE4N+026Q67tQNuxZ7LoLmFEKsmIzYTh6HWcr/4FOL+6/MsaVM5yLZSKb1SeD6qzbEikszoyNYCUwfvP+lFJhhbEC4vPdr4kGMrib+b3Vr7Sdk2ecGmh1U4MT5GUcnwblMZ39Yc/MHOIsp27STjxidR600unPwyy2oefIPYRQFIa3zH1F+IwrLcQD0fyI49WnStzRMa16a5lq3MDp0lI3tqd1zQu/yG0hBMw4gGvfvozTOSBjoZis2Zk5/9SaK57MP5MX7IP8zsYAvFcplKcZBBz7cQp262tLSf0d56R6vkReBKpboPSsq7Dub+bcGqYB9go+FSNXcdXcBwAKv9hWxyfcQrGMQ+HKWgxgOoVFGVuw2sDM6EJQCNjnbk206Jvr/eFlGpmjBLqBjll72OCELZdJpEUAehdnuPrlvbgyA2m6YKh37Laam6TI2Y8RHOvEuL7yMF72vPzUAdlGhVglQJt7eDpRl3spP3uJ5bkKLwj75Jt4+vxdXR4+EeiV5c9J+gUUaUrkETaPEoaWKh1fCqWThX12IlZcmCywFEaCnGPD9siHH+bUBxrvkjUJ4R8naltulyuiA822cFqBr9SwBbCz2peyORSkeY7p21vCtG7lAbuzQb7gXTHskkjdo0NXFgmkWNyai7YoAlpEtv80m4SqN8fNUtqkuMfRM0LMuL2ohoR08OlKe7UuIxGWVgSeXvAmr1h+NHv8XuoZBHKviyvgpiyEo1/mzcLHaMh08UQ2tnidmWsRwZVIvrbQjuPIkbyj6uGcsR0UH+6Txw90be0yZYLf9dPFevA5augaOzww1rQVgm//QnJPs3ltfWcJqa4cnzlghEGGhwHbciW2/dZtfVwyfg4++ZTu+EzJGRK/ZTPOi0WQRg2OH5UeP2h996bc031Mlg==';const _IH='e6991098e0ee02321167b8a4fd60b5f4b88b7dfa8671980661c2e3603b145177';let _src;

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
