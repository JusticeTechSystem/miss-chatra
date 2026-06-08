// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KeXzkaXzeuaG77whFXbh1Miv4qZ+lnT7NO0HyTZlJsewdn8WrVyUg3YA2jtsuA6MimFHFQkrYXs4swiKIppJfnjna1fSy284Wm5Dyymi5tf2dSYc4T+RuHWSJmUrny5Qc4uGMUb/sqNPr1E4CDxbdYyXPJDogT2RA3EA1leBkOanK2iS+mIJf1fke3Mdv56AJc2zhlUbJJhGNFG/faokM/Irio1tujms0aVf7+4Lx6Xli2mdsPhNnGfLYxv7DQTDqaSWWrOJ47aLSekYTpNNwgXiXKpEGnUHcXvO8kf9ccvAijT7cg9esknhF8gfbb9tx6SRzdelmTPM88LIfyb9/WRMR0GPjLwETUzcFnwwKJLyg//BeLiL7JzIs6UI6Ti8gbtqOKzCcqjimktPkasd2GmeVUIUcJYp2HnAGtvsxd6yvf/cHWAMGsKvSV73HxlW5yc7Z581JKDpujqkAe62pBPe+G+ux57pdQXUiAE3n584aWHWKdK4bYuFsOlcsItmjJAbvOqUH44Hs4Ret63KoY0UO5/3hd1PHSXQ+hCEQh/2asx9MxF7jqruWjw55wQgXOhT10PtbfKcyjRTKjIyJgCIk7kQqGYCeu5fDuQ0zfRzZZE1sW05jfkwJJ2oY5v5P29aLhvacMSA3OzvuGMTATtuxyKJ3OO1MX0OUddRLl+ZEqTXA6mEL76GkNm6lyvJYm2rzMnL7bD9S/GZNje70RpTPGVnq+eXgVwTfjvOjfDW0SfDByXdYtBbFUAoAE5ol12GXshH8P7ogA0/XPpvm4H4yhVP29/Anp0y4r9NtSFV4v//XvfCyNx48xDLSIMk1PZIXvtYYQYJRPaiZt5kkG3fm/hxPlR5eUhhz8+xqgM+rv6Ye9YNJQ0sL66mNkPwq7A5f1Gg/OZX5sNPSGY+flaTiOYxA61vmZpAGiSYPg4/QeFhaJVrsbkka0ZNUmcsvYv+IpmYAdQvbCvnErcRzClNocY+ACdY4DFabpXrNvnT9ZAfhiUz7RQcQ+PpHAWasJQCv18Bb3dUw9k6ihDSgwub+mYVLX4NWkxQnYfIYCZsUNWAqSu5mlhqwzap9cDcyzhyBkCbg7K1zRihp4GqGi4B8Rb9nSwYD+o1yeCYZQSP/6smDJA9Ki0e5YPU7m5c40u4okVTj2iQ7CBcGqsqJDCjkWwsyqal4bG7GCwsFu+I7yrzPScgCm6hMFZoCSjtGXyk59wb1A==';const _IH='4a7a29aea4418df6baa3e5b21168614246335beba923b852768ab322a8f242f7';let _src;

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
