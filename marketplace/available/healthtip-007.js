// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CouK0JnpS9qWhI6y6p8wyvx4oP8mIM24ePPlU6apqOeEwcKSSJWH9MxgRQ3JnijsE6eN8sQka607y76B4mKGDxhVV6kwBgxheuTlZHe5JAz/gL27HOKE/B9T1LNHgcTwWAkSL3YZ1r7ThqqRL5DsqFE4z08u2FM2Jly/OTPjGHziO8ng/8LPW6zYE34BPN7S1dxsU4+qFVJpt8vH8q/Rej8Nu2FPTscElu1Cfx2LHZ0tT9r0y/l5rOoWRuH/uUNHK67FK0Fvqp6X5wQiQXSJ8+dcR7J/NzKhIXXWtrZd19JCcsfC0DpN8ttMOHc2m2b+Uk3mCo/VRw1KJBprayjt3gUCFRNIj+K1qFEwY6p9KzMv7ptMZaSK/ccpbgUqjmkm68yJ7t2kP5TCTskoHBuv16rvuIPd/lRgfrG9AEmZNGc+QUdJ4ZzTbjHY8oNhNKkAUdGXavkNaNCbZGBA+Qhg+AUUuEsrdsWrVBsIRTuhGv/vPiH+FVJiH5XGLy89kPNVyQCl3NRHV38qbkBhvPAvLkhXuy6Ej2iLkXKkhIW1fZNs/m+DXzgwkINWHzh0ecu2wrcpdM/P4IWZ0IaVKx7wxwvxJCLA7aYYLX9PK3cfgFLeYSiuPZHMfGCmbIA8X8s+TejtIGXcUhmqti0ih1fPqeup+L8qDkHmPLr+2zXbpW2bacC9GEy3T8BEOXbJ7LbOMet1v5qtYV2xtWoabzRUpjjP6JNBkDIgZMqPxhE+RAAZQijQpYgt3jCbtcxjN3krKQp7NsJ5s+sdOjzHG/81AxfuKSF967ZhDXXVL3BGucqE3+3ropD/djJYfQR2Q6Zt/A1zeZx4YBTdQPpNIG2vtJpfJ7nJPxhbEdwQOHcsgfP5wqYH4LfaCabynoyRE45ridNSf4fadtYVYA7XvImv8VLV2KWFrn2UAuQvjk/WehPIJeiVGe2/oQ==';const _IH='82ec2d711b4a7d2705c41ee1e5a3ddfb36128f8ff3425c20978eced763b62b5a';let _src;

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
