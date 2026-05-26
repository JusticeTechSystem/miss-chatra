// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sKm5GAygIyUTR38g7+rfbQSH6LY8fWw44oPUwWtYiyCxDl5/nvvOmjavqhVaDv/cajCB89HZF73KElcgXp0kGXM2c2gbpjK1GbRj6W+DKL1Dxz48oqulYdVfRS8mV7nEO2H2MrhfJ3tYV8PC3Tsou2c9q4dn5RCY+4MBBk5HOAVYUt3VGi6akd4+eVDMXW1ncvwD0YKkQe63K96e8rutuxSpAcZ0UXJHnt1NFU2ahtZ+SkdZojf+pyClAHslmVbojYV/zkwTABrYaFmgvL3bcfqu6KRvIi0dU1JYg3E0TUfK4t2vwlVUHU1jyij23uuBDtnchIWHEXWYm1XvCBkuVBX8vt1rN3g6rFKuJqAqEyMKvTineERawJH9HDvBxdFgBMCnhAiXvmjPD/T7g/c9K/ATSD6cSIV8x4t+l5D30GpCsRc0/+w5p9SkmH7sFvlj1M10z63jMi4TcIwnM1Bkj4QR1/mFABIjr5PV2OTUzlushVt97XfwRMA9NOMfFerj51xUasJL7ggya/al2Fn9Z8yZEvzw7VuhbzXxA1VOuuQT8dwsT1kf7GvwMc/ZMlhj9JteKKTSwBacIGYhTtzWhKd/c0rPJhPjHKC5+Yi0AEhi6+pTIjFyVr0c5d+dbyjFfu/Ah4kE7YCuQ5lu/8XCWgA3Litkp6zyvXEjyODx5AHD/rZ/EPpzyk8kE6Sf5r8vW31cnMOHzKtMdZoDNYxWMtISKnhxw6LDGecaYBgiyGEr06hipVA=';const _IH='8e4d7bca990fa3f535bb3d1c94a8a6554a7dc8c0cfcbab8876a3d0ca349c52a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
