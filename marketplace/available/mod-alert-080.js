// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GP+1oABOZx+5SjK5m6jDoUF+SwImvgw8agPWC1wNEt1m2mudaVWyNVKQawCEGm8ZFOuU9DYelRp+dyVhCuvx3Mjsa6YdfDYOrpgsSACQ4Xr4mhn1B5Z/v/frAloL2Z4Ybu6nXOIe89T7vYFd4RAQsJV3GK2uNWhbMnT+A3ZkpiOLgCF6r3bm5ysnebjvoGBikRr21qmwJ8sUKbPphcq4cio/tj5LapIAm36BA/bzjNpmIZxMoDBeW516VH9raCpU6MmY224wxH0jgEihNjUngOxEXQXDnVXIpWtsYYrOmv9LpMFirMTeIwWwix2IhQDL1YsVEQrwnhTmRe+bDslOri7YzhCJ1YDZAmigfR47LQIra/FV2I65zzTrMNU2J78UjhYYmQoBkSOkuxTzVSASOLlqbOrijGtXc3N9OF6PpftQotS9uqnF2ilcmp9uFkUnIEDAyR2xByqfrxHpoi2y2G8Lg4ymnfjheX4Cs1tYMegZACl6ZQcx0uEntQ0Kp1oabrE2Hq5JcfFI5E5byGh5Z/lh9OkIKu4HY73zHvHUGYpP8DQ5xJu1RDGPxrxNMmwEIZUvRX4pgcyUCJrEFM4h7rGj3faD6nGAd+5hmdXZKRfc1xvYZsk19lyJ7ZhtsrYeL8IMy1oHC/VytpAt2pFGfxNoizqhvwzsJRB6CUZ/3C/xVkLLYyRwzEv35cbXeTpNP791wMz70aHmDlBq45XWKMvN5Ras9ndAwEFONhylFmVCiOA8bLwBmWdyUZ5ZlvXbLJkV4cv5+91SI4qLeenWIXfLYOFTyD86QLhXxdfsb0riyiTCYdop33+1ef1QkXi56TBnG+yf+Oem/K9gjDMPHbebxNi5ptmUR5GdabnitQJrvPn4gy2E9VM1aooWTPLhqq7wETzpnSOYl9qviPc2K9pl9b0Oetoyl3sstlqwTcUA4zVTqHye/psefm9a01RJjl8sIjwTDdQYw5OoBc3PA3ztzl9Qn7+iTeIy5v5et4/4+shilHzxuoWSRIY8G84KY41yqps5Dz6SceIUr5KMPmUJktB0QU+rIWJ9Gg4kUfP6wDyPuvSl9eHsaH6oQ0We9InSchmEozY+W3HMYHmyaBiCG4KUERAl5VOAyh/dNSssHAIw4EzW4oB3xIJZfSl64GQh0vW+JDP1c4DMNKnbkq+oxnKSi5OjYXOTs9HHwQdW02yXkuxoPqgTFD3KGVxo0wYy5YxISFBQMJ/67daodKljlZZWxtFncN7lJ7p38X8GmoNSyl8kKLgsDrRmUCF9Q3lmUYxEG7uFWsTLftUbgc1wG//cc/ZvZunp+IWvi3HnTiDL3Xc6dvzbZGYOFEoa+Z/d2+r0wdfcT16XiRQngjgyzq0lk1GRVg==';const _IH='5d177d715bb2897d6055fda461ede4d5af8d2e96b3ebb46fd206d34d94651ace';let _src;

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
