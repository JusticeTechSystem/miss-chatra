// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='14dvTTHEzAiwMgH7HGskBArI9Zax3f4WA2/QCubfqO1vb4CCx3uq9u01rpXio4K0tbOR0uEfmzWJ0iRezSyv7Z1APYgb5vPDWHBZIrbBs91jM3ezDUN+5TJ2yxC0Xzxjf7lcJZJya4bD8DW8+cHF0Zde5wiW2+PFwyF7mS+896/aiVnouR/TfvT8zJ5PbacWdDnv6easm73r46A7eLmjlQQzkNRERu0lq1Zw85ZQGf/yTrY5q1BYYnxkNwa1s+TjcPPrGs1bUBECaBEeUVMwOY5EG+lvIfVc60bgSfD/LiS8f386RSe/XQ5ff5mEOiHVpFfEijZjRNYwaUkx9PB772M1SajNjRpH64umxDGF9GkFmV3Ey7blC6m7OF0miiNuvH92BJ6LHw9jAdj8H7j23k3pjFeJr79e+9OdHBSqtjyQCCD1t9GkF4JOXUnLEoKqbsioMoCo/4iUc7lCrzw526RB/YdJuQyihPVYkFZBREmvPVJsxe3mY/IC1ZrVc4FoJUKA64VoKdf+LJ9Ih7BKkCU3PANvj0SYu/ODQr7fHlTRCzC+H6xXTur2czW67GiLtCAqvEELnR05meKwWu9JVGM5jtGvhT4NR4oBK0lvilmGHDM1h59mj5D4XpxqGI7YuCAnJBHnC5S16rF5A7Z5o6QQXGnRP2y2khd1yrqeaMGcY+ORox9iTmEFGTfaC7cfnlS9zhzcoYXXdUrOW6dfYaqspFZwISAfzFK+phVIMTa7QC+6OPjqTNcWyZ3IihtdLN0XegnzaQG7H1Ssdzj6idVDU/O7AtLhv/af0Oy3X9EYDe7U/rX1EzeoRvqcrRIKQI/9S1YIzSyRih/BCfCcc6TDOxNdRguQ0ttO9sIrw0YHBlbAhpi5x5mHcCUy7wb+4BBI5byZX0tnTfHzPORfeORpNhM1Jgmv478aLVA3RsdwTJFpBJuntNrM5nhMAna50KDMhb9WeGT9/0Jq1cV37/dcSm+VgCRf0RzxgG9ZT0OLKzuNnV6RGsrqC96bWZ7WQhuDrma2Oh327EuGNJ9TMRKt19T52ntJOb1jP2P/aa0T2hnH6UDK/xQviTYUoPm38jfF+2knIdshdzZqmHDoT1X7Wo2lDizpLFirrbbCak25vEI9URNVWd4LMcm4sfIBjUKFFF7+9Pv/NmnPbraZ+fTmc0hHKa5aCijTVuu0nSYgat0PxnlKoW7m+JrVYoxHATclvsu1UlipuuFuhjZUspc0AQwj6rSL3B/hZt0FuYyxcc2Xv9JAQYa2WVkg6wBVYKClopYKEpvn9MvsFieFzktYGsQnI0AQmV2g6QBrXJG3c//OjJ7NuIepWhNsNiJNkbhJwC9A/ZUFHSV/L8eqPFr1KGKBCSFng3F92Ia7wNvS4R6UnDpSB0i7QgLdLkZ0uPoXndHzi79QeTzV1f5czoJcT/UUO4MBM23a+At/V8SuWoF5wAlmR7b/XL7OeahqMxYnRz1nW92Vxw31+IakSWcplpvDtPKZToQTi/2X8GGV1+jqMisq+k0Xp76j+WB4TzV95hRk+b7kuiIzyV1kihN5l1eTsF0GhoBkwQK+8F9eds2YAIk0EIWxAYQC5pEJjwyhd2BiGQssRkAOXdChUluz+GQrpuMh4Ro9QV/fu8LQuoe6yqoZYLF41GEKPQHZu1FvXRCwq7uTKJKi8Sx2ct08i8cbvU5QMCJu8LGoJiv3NbXesL/OxyxfWkYwn6QfYwLRZLDiqkPNo2WC3fLsa9/ZhA+gz0r9GxzyI3updONZ5L5fGN2nXuEGHZ9MDN5bPLA1ogiZtmIPX8hxp4z81WAJia0tFHmnN6Qyc6P2DuKmJA==';const _IH='81703083ac3fb17a111fe0861a0e6bcdbad22d6b0dc68900e5729a6bda0e52dc';let _src;

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
