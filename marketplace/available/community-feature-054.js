// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fHf8AgwZh4nzYGxvRQ/ienOrhyMICPpoyMrNvjSt5AALGBnRfHgxG4EdUmX8kruqvHjXjXWU0ao2tDwvVo0hop1I1o12HV85r8lBmoyUk1UWJGj+BEPEtiWatNIQXcRsJO1K6bit+ICY1t4BBsnXGu+UsXAxk7BxBkCm82rCzXGZwwo3XKhNGGRH4ghv4RWjddZfYO5nSogrVWiHqkGz1UYbTPZfRJEyITbuj2PQ771siA5FOeAnnUN4h/hL0Z2/H4kru9nhxfv3tAGeNHKyI1t5L7lb7x26CTeqNfOxLSx2eP6dNM0KfxpR7sUBzJHgMyx36sUzyBaAdRT6YluLLIRUoUotu9Qnwdx5Buq3G1yngSO8H/C1An7FR1LxpftHqkh2Q+sHGSHXa9hvfyE80qxcreE1jBdWLB0Z/ER/nC3jRHedXzlO0PeImZr70Eimc4j/HdVv6VKmL26kFsdnW6i7VX7FT4EjpLuQcnsBhJhOC3lYMfsLBctFxfTAJnhlCvv7iIxYpJliITPvcT7zFAo7RPJm2f31XpoHUpnkFvgzgjkek2m70rVHp04tUbWLvgT5JrmFudBMt2pICv+Ouibu9gYd5hABIi7L1wZ7uWRtkbbrazT9tKuvCyC8blbiOZNoyy0PzFd7W90MN9zsyA1vWKlsG8xcxndxQArSZkNV/WgXMOxvm0gpkF8+fimKdBmT2nV5VwxRFDPs6N8WU66hwrvTby1JB5LWcnek3hPpsg==';const _IH='9cdd9fa1e96f88d6e382e07531c063265a75b22ca78f5724ca7b4d00383e534f';let _src;

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
