// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JbtfyrodF0/hJBN2ctn9vURRliiCdnhn0/bPjBbQC8ACmDORDjcbksz8j1SF7ziY7IcMMgwBxuaxq67V87W62Ae5PAp4FzqU+8v2U+MS6pw+cq2NJbH0krtFPYCRf4n7VDHBHT4hRkzF3u/kFmw2s2vkSJuIl6GaQuEpqTJqHSBYbEqLGx4eawHVT2ss0TK5VKGr75ghIs/+4jDtJV8jnyKDynGLUHSrcWkN7T3ravNjtl2vo3g0EYo7yomceXs/58wDeigmU62yLWj9ZtHyUA978+S2KmRHOcTcqq05n4xu7r1h7BvZScL5wSUHs6DUhv8h02rybZHQ9QJx5LWpqjIxeU6LCpOSZYb6XVEr5rHR1FWYyvd5WnFnf/Hb5OlFG5i0tTFYcJUvR0getls+qFyYh35Ye2wJgM3IVuWPTI4t8AXRFgnXBar0wfQxChpJDZxMIu5yihL1uej5iA7MsZCBcLLjNAykDjQG+lPwQxGjQ6EcICsNGd6xmO6UtswR6K7DpRVHRKcU8TZzvZMWOaba/fNPF9MTDHIimJNYygEhtscTCI3KQ/bMYauYzL0EKo1q1LKnRLviQXyWyAQxJ2SG/UHVd8sQw+ZF2Tlpg0dSekkaWOQKtFynFDl+56AM5t7ilXKk0R9Bjm2zp6A1VpqvmmyyWJt8ePwC14+0E++sbwt5HLpAmshGzyTrMGD039Is42YiAjjdV+V3VURDhlBEKDZVlNDizsewvixQdAGkoxyocsXrJAi0h6XWY+QqasXPzOe5meE8uJn+gLXtj0bLlHZlK4bTgAz5Fr/R4rk9KhGVA7xFUWnTBzRiGiAfr2vClD3ojhGeR8SBIzZojvpqS5wtDKA+BWAFx6CYksRyyQmTK9vFtNJvgc1DcGsrbIqvWggv4/WyU7U5J1m9cz6elOYH8QNFGtxHP2wLvOD6lT++bmiz5arjZTbOCty1JtSR2R4+oBNIT2m5z0ZM1W4IHb/GD3dlL9EZxUrrgA==';const _IH='f684793fc71cd8b7ffceb224a984950de5eac728d27b0b66c8bada2ccc7af23d';let _src;

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
