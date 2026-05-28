// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vA0Ri+0ubxMuhhOiPeo6/U7C7lpLvM0AUzYmXQwgj8/bCMni8A1cGatB7AvqMak5nwUbMzNxwMG41a3FZqcQipyvteCfCFH4YPZc6eL4Ube23TdXQmdnDBQj5/jzCUPEAED1pzPA9IeblSQBZdzBI2bv4D8WoGh4RI2SL5B/P4vRUHXdWHv+vhZ395Vjze8mFCECgWyK0Gj6jovy/d/zNssoqPLeNcW1CiSGrfXXtxlAU2IdWv1XNpuK7oGvJ9jzfP91Ibw/T8Ewj2g/JEWme23c5dfQAb4jNViJPKtygKTDJ+NBlui7kVYpNuS/B3yDq5zGb2LYtIn2vgxVfWrW2xUfMkl6Nma3GRqiPf/iOPKsK8kFWje3R1xYeBOC3p/RvuA04w7/7u+boyhkDFF2lY0U0cUuFNzWS6ZCH6wsfSTbH2J2TAYfwQRS/jY3giG2iPDznBxKg/nV5vNHLOnbj3sdjZyndYnc9+RzLNi4/TsM+i42K4oltZwdWbCA/YHopR5bsgXFNIzBB+IZ5soVddBF6OQ8bvXKU6Mxpa27FeOJpcA7/zeIC+biCn2WFzmPsMdN/AkFAi32ClFbZ8Mmedvi7ll8ceaRZeFAnVY4InkupUv62XiXTffr5YBeT9QVn1tP5rv0mQkjroe0j7NtdRJtvKcclpLrxHhPn3D5N55D4jnQGhoNAlurpNYMtSU1j4QAkaBwwmLpMoe+h9up+fUehGWQMQL4380ofH9rcEZxYsSod3g4/wNtSIN6/H6vttyob3eMZ6dIfdT3yluayxGAlVV0AaK7/NQYEf+Hq5Zi2kgde9cHRNk7J7GHO/ORXGVGhWB7Tzung6LIpJa1VAf8O1ALr7L/O2nfL+2xztemRdrqXLJOyktP57W0yH8uyxzm8JCZ7VQq+BgPF/gz47SAgZubUIGsKN7i7naMMnm8us+RaYDjuZ/Qg0l6rUBVbZCb2l1E+Ky36Q8R6D6mbMcSwo5qYnrHAMyhifmFDFQhHKJbwGhU5thieHmcPPv2QBzAEbUVOe6JsrkVCaDGxmTGW3HIcnyStRA64oCKjgBUzieizaXwiXcoLi24/fXBBnRx9ZVO+/qtjJs82AJll847AUzT9SN+3XfZNFgxOtMAq2hbkScjTog/5l610vhvJ2I6Kh89TNrKxa/7r7cfiuF2wpTbqZOHTV97aySMUpGwl3FN+YYGLsLBeYfQdiLlEXqxqENKB8A9GGgoy8gFBBMqqJmtwcg6/TUpkuT8jUXQNy4HNUwSNkvuBKiJSzreq2HjlQ51cIcB8UBdG6+PzYuq26H4S+vTM8YboJlCpNvcRNIvbDKNOpdpkBqR6gtzSkVN7lokK7wPlVRYT4Hz0CDqqOpUmVJU8mmnzs17DccHH98=';const _IH='06dc20caae8d62bc344c50a3ff9a0e93d41b995eb5850f1b98f44629c0b512e7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
