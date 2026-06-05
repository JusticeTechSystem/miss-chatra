// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oe4/YfQsmyt3ILPiOb7AqaD1AdPaD9P0sGMxnWJFYJ2C38wGf0ojtLLDvSI4Xgyv4eUgrjZop1NgnqRwe0x91zt2dCpjsa3LZevSmT310KR5MnpLek4tHSYfooU4P9PPbwaqYdLypt9dIPiKkogqIN5GhSXsf5OlMDhgMWzjx0K3gW6fU4emNmKOORkEiSkJZo7wQHfxRM0tvTbWIa7YO/8x8Cr5hO6liJPwdEa22mLiHqM+wOComDwOQcnYwB+DvnCENcRjFGmdJMHbG0+oRCf4U+h1wFqkEaxJfLXEip5i8GtT9fihthKKM+nynz/VV8r/QAVLzOmHJBkoYWk09lQqgwy35lEomJPYgocfnhg9JQ6wSSi0lVLamm5iT7CU9BhLomp6J5jFv5emCrmRkaHpONUoP98nwiVtL3bK2PtCKDdpJGp/JpXyeRV9qYGZryM5i0trOaEiB1qSrf1Y6R4CsaW6ePT3And9byNFn2DDZLbAw2Y3KpGtRaSxDR7optoxt4/ssRcTVD5jklWzJEATXAkwacjsOLo9WEUoE9mOk+eWGWwomykyR0ZzlJnBzbUO8e6tUC5/xOiSyhZ5x0jsbfqtB/NN73io7JgprDlzIeWlS94d6MQbSC59+wEl4/2hnU1geORvWDOrhM06miJiVfrrWjebhNNmM5bp3YQFMi3sB6fx0nbCBVFxDelB+/5ed0FCc7x+iNRSLb959X2yv6mR7zEd+9/i7IAmtn+xoaW4UfVrHtc/LY59N39eIaqiXoGsLLD+0K5rz8Nbnv6qni6Ay9X6LAvY0nXTKJppTEp/ejFOu475nvUU2g3GtSnidy/NHG9MpUtCpfGVYbiv4RL/K/W3tgqZWpOphLR2O+/XzZJ9+GY0KtLx4DQ/IhhH2UhDFjXkkl1LUE3VF2vrjEnb6jR1C2nuUL/2DuLXV1xXPUBX0kUc289tm7gKEZOeiLxI69mGAj9/BduF8fvt61Chm4ExtdzpB1tjpKH9VpQ=';const _IH='3b38607800d823dd58c038f77a40bdfc3278a7d45207d6becf7f239778276f2d';let _src;

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
