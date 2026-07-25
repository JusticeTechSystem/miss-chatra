// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSURV+15rOxRShTzsPUTv93gBWl2udYU1kFjoRuqUySohRAax6Nvd5BhNHkAWeV1YsJSFGchoLTNUKjVpwPIBYg4ujKzkq6pADNPQu+5/35j1RbpSZI+T77nipdrgFnHlWEzSYa+Ft5i2elHtec98zd8FGfCT7XT+x8DsiY4oVfhS4MyLw6iDGcAakprwGt7bw/Npm9HMg6i1kmAc2qfoxhRJaC02zLrbRaxAMgwxOezLGzzIlsDED8a/sEQYEBWaQ3MYEfPkLrz6uFCPu/ZHxyplrDWvXvp6+hAkoMOTyhTl3NKaAAMfbNwiA9muVSjtpCkB9Se+kYdgGponGEEqWRYUV19IPkv/Vijgjy+4rli56yLIv1nvTrYEfK1R/HWZCgEYSxlmHtU/T3LT0si3I2H3HtugJX23Ow745JzUY20KMgL1Mt92k7Yz1YSfEBMyR59bymfOW2Zv3+0ZQ3kiBooS9S6TafOheIlTgCEj+lekOeNt6QBl1JDG0lir7Bigg8jW9V6uDF7eteRtljTApbCBMAKAx/R78Ljd2BWIpi5q8cZATBfTcAnLP+DJVY8lJwRRMRSiLm5crvBIWbL/pDP0Rj6YsPmHtJ6tFlIYtnakzFpnv7N+xo2LPYwAUbHtpd+hzsWboDJ359xyZwLzfTDJwmUtxZKrxFm0lapVVBeEzB2OpFXqWhOVHBQpwUk1nq2lwZM50uGoGuvooAm77P6QU6mhX7DFLe7WdHN8deL7FJGMLKeGFC2kqClbGzFGbVk2uJXGoY0H15p4yrc5HpL5dz8tsxequmgv3PZKu58csENZJUmrOjCW20sZq6qXWEOgEkjbAahsSopFIUSN0cRXopKqIbcpS3mvExSLXVTeQfvqRMw2dtIw0Y+CVFWNcdkrw+liQP56ilZNUVSr+2qD3AVn+oiWtaUXRt9/G9U/kULyUMkceVKBoO6KMw8kgRtlA81Gm8V3KhgWwWBcSwrDcntNKsTmXSiuxoIweaKl9dU8dsCrhFbc=';const _IH='27cf66f1ea1b4e8358d9bdc10dcc38f6d99aa1aeac93d3e4cb20baecc065fb12';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
