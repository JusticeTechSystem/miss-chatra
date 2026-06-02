// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2qqRovZyGgn9gQmpq9cMbPHfAwPWCfSCcYJ8X6QsThkVdu9c54qjDewGjhSiIqCF3ZPSuDTb6jGDd+eCWaGtHd/jlPLB53e8TFalfKpdo4mGOj1sp/L7LEcgHQdT7iExSEhe+YLWgtHfmpVzWGsLDHz9mz8XXm56vNGhBtzjtml01vTvEFGpjSINKuLvVNLOsjaT6sXlVh3C1lP9UYZ1CmonifXw+6jnAoj8moAuoBlCR/YRecMlMyAxpPqAs6jK6rLX6qg7GsCJhsO+2afRe7jAddQU1v7ZqjMsWJOycsBn/Rr82IC5qAUUq3O4YxOycEX6mWRCx7dbjYji6Rjg5jveJZsgy1rdchzDC0O6oHeTlvPY45v4gUqNCnO/4toI8xfNn9LqRHq1HSItwMhwsb/50LnLdyC+aZeLQ1ttIyTIy4dVqvZrIuJ8nZS46W8pNqLUX6jf2q4Udu5l/ZprKTufDmmplXboKdAvua60hO/hAFEngj+tN+FzvRmlo60kyoA0pV35nuvc1Y1UYq220tTH3WEgKUGe07W3eGzVoYk7HGZJAIyTBBhPHh6dK/+7CYzn';const _IH='8fde6661ae11131e1dd1877e77e035bc5d1cbd0fae7396e9a4582af0a3642112';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
