// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+t3BMmnXzmGiNUboLuSLpf6MazNrCcX5TLeeMgpFz0S8NLZ4HSZOXdIu0YYePMk2ZLD5m6JY5vXKGtt0qmbggrklvPtp7QolbnRfPdyjij3QLJWV7J3QGA4BtytV6ehS2biFQTaHdbQBZhXsKBoxg4p1fLxPJcYg9CYA5R8CZZZvL6cr4q9QjASmyMuQie4lpmH0Oixl9Krwr5Wr2QgMXTxuMiq6DEmwtCZMNpAZbvspjZ4iA4HIVHpPw44huyK6vav4EDWMmz5/PwehKO5AvbYGt8oXeisehP5aTRsviGcYT5AmP/fVbYyrpuaexuRISWAZqq/vlqrUlkOeqWCPy1WQ0tVSUZBwIh/wSX+e+toqcUWYL23hcpzis88uvxbkbUymc3rekAOuWYsxtdF/wf1yBRFaNit3JouQXIcnqFSqoq22CsGRfLVPJ/Nc3FkpEvt2DxWYrqC+SeEeqH7AjoHV50yBzUAZwn/CSOxle9QjjqI5Vvr0HRfUcy6VVhylt9BTxyW/+jiwGYzjI8pt1ny8oRugXQEgesZZH5o4DfK5woWs7meIFPnijKebjWkH8xUySz9fU5OjuaEmIRzfoxpmUAXfVPiqM8mjBgcU451mIWcBfayulnxI16/kMCFaDqRw1+jnB40rKgGQPt5bwIHX3TBF9c51QJ7JlV+30+xBBXkfmVmvOURTingaymNs7bJeeGXVM+JCjT/dATNds80DDeDR7pNK6mg7JV4KWeN1/hzzjjtYEKEm4Dmc6UbBHasDoGQJ/hClg42s6NpZZ12xpdUaD/H7YExB5kteJT9CvJYCIGPWNcAYHam3BaAvIrE6/Sj/0SDZPGJwrPiwDru6VQtJL5Gy+kvxbhpFj1LoRdw+IuufpVSI0NSkKz8xb7xFDLakJXRDcsNK4ZSfKmIVb0wgv/An29a8ACrjWg1IKsP85lS1JRR7dp+QLa3yJsRG9vgnOTHS1c6s1CGQKINAaPvJjcyRZSNHaek1WWRCo9nWfHQcLLr+0InY4ZL3HX2XY7mWltWDjVirsfCfVy57M4ySxhRaZ8QbUqACdfbpQD5B6fCd+dmzXEWRmuSRhvLWN/IhJgcNH+jYPiGDkmtcu+XDFgRrNc+i9QY7RL1iOpoGUebCz/IM7x1N7AUpoa1HsLQHfun9j5PebhF3u6aP124tuSlN4yRnoD9A8DjS4Nh/ts+b65VmjJ9nqjp6xwS0';const _IH='fff7963b5408e58bf185acd4e174c97c7e33aa24ee09be9adbe4bbb9ab284e52';let _src;

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
