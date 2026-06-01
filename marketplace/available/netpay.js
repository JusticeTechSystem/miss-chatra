// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9YooSRfRYqYy3CePnHSKixcAS8ey5PL5JWvKuIwenX6P79uwJj7Gbm/4bIitXu6Wdh9tMeHk5sqf9j7lHWrihn56sCnGJ4UR9q/LgvefRA7QX1KEE8gBXsJl3A2Uxrw2zMVHgSOwqktbeLeLfy201jyehDfRku75GGQz9RhjVTydvHhd1Q5OH6gMZevJrrzrEYMGOSyQ23OW+mfwvC7QWWSTa7kAAbZGgfFBooqpYivhR/p4VIMJsWaw4gW7ztuaWsWvUGF+WQF2IT/GkCdknR2rMHi4dfmcE3Wq0H6oZLFxdDhv8OdqdpgplfFkkdpvh84QYh+4luFNxSj2L4KceaIXuTME/R6K57uuhZdetZhaBt6mZAwqhuL8hbH4m5rgNQODAc0+fo7BUmsV5UmbSx1myw2y1g1m/lR2zvlyA7pTTIxg5R7nc6/Kj930kaboCSapAxFMjcuKhSJpmpQuULG4lSJKxfNu4rrgkFZZp0Ikl21505nwKUHB1kzzjW3p5Ej859g+KpaIkOGZrOpQnFRWIenZ1p0fGwcXy04oHfbC0jq/03bavxdt7vEC89k4ZHeK/leeHJomtuMgWdWQw/KQAmRw5X0u7UvwBeHquYxTxLR2Dao0SNu3Ba/7h+L9E1u42GhyKkOMWLfKWGXSvycd/NkUEvuAx6UJx3zK2throaI9p0FkcvCm3V5yRmMCfUaCzWkeIIIhyKht7S/XQ4rhX0a6nftm+pPF1UH//p8ZIK3+8ML/XOKd4LN+OQ+PctdSuDrrODY8YpV18HyDSGdpSfLRgbxwB/XIsBl4fpi4oG+Q+IcJMksQuz9sl4unBm3hX1re17+CyQQLdVSLLVkiJqQxzF104cUN4WYt702mypuWyCHbkcxLH0AIiisv8QVlLqFPi+t7aY4FZqUqFOuuht9LrSAl9AW3N5A+fy8/1C59t0mDJlE6FwVN12qrz4gB9qhxW3bY80xReTlxKqL9n+fhvjXideEoNMnGxH4Z0wQNSGr9dZ/pCJq6yYaMVXaAbOolvO7azhaLn6dQdT2+hJ4ZRkq+o6i9S17Wy6y/pKErmlIqyu2gWUMh4NASxh23s8eWuazTBvWAXHd628Y7Ra6Yzg+6DNGzfKkK38YH86UhpthrCSBc2FxSHj6I8tY128bGpqz8wjaKvEQXA/qxcWLy+W20TO5lxw5Fgo07yhm1KeHfkjxSimIzLhW';const _IH='b87242e5d2d6fd9119e498063ba5eb9d9f8818690b69635fe7961b7ea3da2c3d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
