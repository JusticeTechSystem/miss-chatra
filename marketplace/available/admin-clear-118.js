// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vpg7vr2jZveS5xj/DPQienF/Q+w8xUw9ceyTn67tQGIJbIR/fWTQz++yr28HK0UzV7/I8NLnTCrXZ94wVx44Lf0xZ4N/GgI9jrwts/Hj9msCIzq/JwtDOialqkP8FbaXXeC8IiJEdJmJJjWQT5MzgWH3m6C7nizfkL2naWYxpRmfvMfR+XTebqHPza56fl047Mjv2NqLVSzHv+X5vSSf+nwvA6gMdtfvHDdRgwmGWVfxyohI1a8P6sl3+r7rMl5OCehH0NVFEkZY+/S26WGGUYA6LuRolbmZUSmjJ0SUW9g/tcgClT4XhxGEK1jzQP6qmJy87/mVJUsCcaLPRmffvglTVhmANwplXfHNiqGIaP8ghgpSi/9bMm1dneTk0NtUpH+jbugRkoDH8LGZ+413eSDmnoNT3qUJLqyU0/lhOl16MpEjl5zr9tmOduuz1C1XG6aj8Tce18z8vxhNndkfTCkPe3kK1W2U98WwGGBmRCqohflMHQEkuA8Ojdnxclthq9oMJv945zz78e7ka1SHrnIwv33bdDZx5rf1adJvIsNQcaODNGU0hHXSO6LDNk3r93fZh0FNKMdfwBiGZQQer6pLHRMBBHCmUfCvtv1+W2mFBCY9UAqthAEQpqq8wDAB7h9u4bzSTC9kIdZnNyNy+vkJGsKAJN3kW3/RfB8rUerCjBn/LzOy2/zVx4nlzRKB2tQ5VtRhM/i1JWuXUpEarn3jJx+lFYt5LnP+4oCPWz5RLIVMfb8bix7hAUkMk4GftU2ht21oGlph1paM4ge0xaNa5jLPWsdB04NiHVUQ93XsJfzXZE2YdH58xFHvlOPJwd6BgLZWTypoffQ8HQkUgF35ipdjDAjyjzFGIiBB5zLTdYtoEK1DQVKyn5EzQcWd5r/f2RLFqJgIWcoezF9+oSoXAQBAt5eC45+C4r5cdcCUje5pfl9a7Ctzc3A+p0vvEo5FGgoz4vQ7NqrCoLsXWxN2mU+VaR0vCg1FJwdyGbng5S7UtZ3V2dFS';const _IH='badf92d80c3a53c6a1f98fa881ebeade58763a6f03798ce9242b5a7cdc84c248';let _src;

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
