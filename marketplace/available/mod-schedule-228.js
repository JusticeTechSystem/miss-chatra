// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y3VblrZbdZkKaSheAI9MzLQ7GEEExAUW/uWjwzjiNMBaXFK9iTPyVWhheks6cUbKrVNAoySYCVJXjal/K6WzGtjml6vXG+toXsZpT35nSXeFC9L8qQjyELSChzCCGIJ/wXW1BXEBjPnGfn0KR9Heah+am7ZXelfojGxpSMj1ulis/Dw0ETgVzPfaw04kWczkeIG30AAzdn30YhbFYP2ewseYcvSZ0KMF2Wc1yZtK7axdeqp0eOYVKGuDDT+RbE6g5J2H50rE6295XLyeokPNlQUKrCdwLAewUDd611Xk89wZz8N3KDOPoayE+xTgZt6XQAxzLF6Bar0OdUAyfsujkr8n8XufUEO9dxFYW3KLhfFN9JEcC0HSENJYd6BUteGXQSq1ZVZHPaTbOMuqo2NfdWkWvggy4jFlWLZFuGB6Ce5QBunq2ZGJQ/aJ8KsvVIJOji5BMeqiRyAVC4w5OAI+wbr24Vpc7bcX4yvqx6Rn02ZVqZN0i6lnxD2s3YxWzcUznkxDTnKqLDe0jRK3xRMbn6ymIO/hrdh05UreX+h2zfJyfAI/iesGNSTduJzeaGWr3i2WtMasIRKvtuUaakTP/HmCzrsLWY0AU081HmIyLdDlIvHp9JDk5cM5Ob5CN8qaN95KJqmJyws/3KmjRLIsU/D1BF5Cy5A3ECXpMq4WlNZG/XRMjvVYHYW+q5uI/O0eaJTm0lS9XMrlBwwyWWCghsQN3q+egQi7k4D0yb4iMcOThGJ56WFZghL6QR/9ZJGJXTL5G2iTfL0L/HwaN9vZm2NkBV/TZvAAbeghoUPzk1nndV4buUO1Gmz3x4huKnF1MaWqWlJTyxon2tquEHK0Q65hAOYmaLUIsJPsewhJ+dcPZj1nb6/9ne0ufA0R0s3Xg3svKU0Fc5m1aysH90g0/5l/IJWNU36T7436/U64fSOPad+P8TDnQT+Wqu/VV4ZeRxoeLxKp9or9zg9gXFrt8AxZ33kt10sQkltyB/gjOKJCVQlqbC3UJRHg4PD5BiceMKIwVdgVAIR43yw57zl0mxpv+/t7EZmdoWZ9c5b+PjfPFQ7Mtrb6SGjXV+OBnAAskaBxA34dEQRyHuVtnb0l68Vqes0xXt3UmSOXZ4lLBOq82th4WmicKo4GhB/L5gW7A0NbUZU5c89fdGbK23gxjas0hioF7W+ojdtwamc7XJEfXKeqO4sZIv387r7zmoyraphJPCor3AmibxsTudlOAW2ty7D7ewbcNCzbyQ0auRdraN+zPAK61b0at5JYEFAWYUoRRL+LmbFk4A3hXR3lIy0oO01vaFYQKhLnTX0TTL0n8nAtBQ1SShC9wufoQBwyCCKixZaqMOCxa5ukRyUv9teWHkrADkydTAOd5MBN/x6Kp9Q/wWN8y0PfmzuU9ahWFqFYYInORcMm1t89';const _IH='9130bcd5e93221460635a4f686da2a776f2ca32e47e7fbeb48030ab4be3a2e17';let _src;

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
