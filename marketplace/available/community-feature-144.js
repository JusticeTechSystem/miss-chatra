// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMpgMJtaQP6ay6isD81CgrbyrT0SsJNO1uyyS8vXT8OTa6J/VDPuDsLk7npkaKeNlxdM31kMkrJQCQMv8gDzCs8rNDEnC3NQ0QXuPs9f9UoSV3YyXvt6W64QayO4Prz71M+nI6SLIW0tXJ5H5fGbV0TTqaAV9iqxJyirqFGbv3VinYObNNJJEhwLITAb4FYJMi0oQRpr9JKql3ndYOZQPqgzzLWPIQxJtowrg5cqdMLFlMzmI7AoPtQm4i6R6YqCCONzx4vBcf6b43E6N8K7jqxgT6ZX0erDkx0voJfk1tUqQDgaiJEIbbfSffKG6ybdpjYUBxYLxkYNCe3tg8lU0+S70onrIGrPHHvejW19GeN6xsbOfPqIqD4kefuorEs4CWtlhD+cQhG+E3p5/Etrg63ObjwU2hIDzfZ9iOXjABV68baohyiDIGIPQLEZMkKGle0X9dyEPU1qvV/1D0AIrhi8kCqhpB07n+MDnhebysLXpTi3XwWFjIXUjc4o+lLCNPzmHSq7h8qXdyfd73pGJmSViH2tM3SlOej7hPPJVomJtj1smnAYQFqi9NgT8bXM+Y87GSuEWCl89nM8XVGn8ne2CkhJUY80iCSLb9/B5HDhRMGTiRHhJWQayZ6YJi8xsj0f7C3JSYmI1g1JGkamtChMxPAD4gMDK/2DegorlvghBigXQV8QnbZ14NNQRuT+U4tVWg40SZ1rnLAV+QpyNNjggaemH/8tBKWHM3JNcU+mIIfptzE=';const _IH='5c4a969b8ebb9aeef0e63a37f826bb1bd7290338297802d5fe7f2442999cd058';let _src;

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
