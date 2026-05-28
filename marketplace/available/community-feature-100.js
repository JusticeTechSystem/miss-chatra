// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AY81hetHGlpAyCXM94g7YEShQ0PJOIA9QAv+h1PRHNkwNaQivuSH/vyGWphPhrWLbEueAC9ZKJspkTdlBrncTzkC0GnSsuYE+0vDOACZVa56ECHxjlBuORAvMOx7hKsbxn5XSJ61sxofOI+55HKbz/0z0Y/07ma1xW1RCxT+GG7ygOMRtzjQzr7tbWZOEI/6N+c1AU41W+FHPchZ8vNh0G0QBJOgyGzEhYxH3v3ZPyW/PHgkTsM07RYnKH05Z+enkXr/wLoRf4tFzA6z9FJCA+WTpCdxXW/0UliYJLUBVhe1q0xr351TUr1v1D4h6pU3rxPHbC3p4giaIH93zRuraNKMj6y8N5nERXCPIF48934Cuo1oHiWeELqVWwPKZMBEhN7kXbGN2hnS2HV6Rzi8dKiAq0TvVhnnvnrtN3YShCdEzTCOsbH6W5QgZMqIME2jiLD91YTEs7+UCmIZF3IRKwtxxFGEa2/fllz0+l43f18Fy1C7WT0VL4ddFNnkQyWJX1or/RAlbP8DDgxy7YrRi3+u76M94b754uchHWMPiiMfqq0GeQKD3yxY43k+KskOgzGdjSpuHCbZfuITfo+j3PbQlVSH0I4eOnQh/t1T943hR3vdEKXdFpclGwJnfhKnwIn1oYIMBEhnZiAuG7XL6gUyhUjIR/Vi/9AhmTKzGzjinI+zDnc2nipe8OfSm2jf6qkZNKIwPx8pkzuFmNhFQH9jwJmpBqwtUf2R43LKbYTZNasrptJFPpk9';const _IH='794097dc457a90c0aa9de30989cf31e64469abafd1816aa35db48332695471d5';let _src;

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
