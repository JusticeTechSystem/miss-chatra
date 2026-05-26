// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/bs0XQx9M4xmsrRPDzhMmL8bq8RfaG8WvKkJZLAIAD3apJPSGsKYMjqgCWeAVICIN33BpiL+PfkV2gS/aFRszI7Q3WuC/IAcp+429GMx/WkMMnyKw75HOQ2kr66NkC4VvEU9oHVLc+ebCP1bviT+iNsGVGoNipvAjoE2uBB/VayWt9TSWlro4l7LvkXMJs7xMLawDoe6GjI4HJWEs5l4qSR56ArrYkl6NsMzFGgb+eZ8J68yXQsynD9E78nB3/A1eBjmwChyifNF3z1HXx6ir8vT9GgMm145I2qnZ2/KgnYJsmM8t0WWmduqCG1Up06AsnOXWz41sT64nCHLLZhO/iVMmqA6VO7cdN16/Ihv0en3qaWEDAOgZkkW6vcVM5Zegc7uWGCmFtKcdXHcW2aEMReAD6jQB6DdeIRtfWJsJKIzgWYJwsq1RhrBxQsjv4Z0LqBSHyksB3sZMvRE2foRBPFwLU6zld3YZkWTgswx1UslZaqy6rZW7SWpfI+dqhf7L1MZs4mc5F0oGitNoEDDcJfxLF2sgc9vGA92WX+WFIz0iVU5Bi9mdnhYuo8UsLaz6ucXSmzl51UEstiKqsI9FjJ+qSp0stCF9R5pKQyTC/JO/0G2XRkHH00vhj3XGsJh9V6RR6Fg4kCyEOn8h0U7/VmLLzw5Fi3m+xQb612nazFJmg6Ot4I9NuSHoOsImBwIb0j+QnvI+jN7T5gu5yiE6bvG7x/4Oy1JkQRk9zhJIxEdmJI=';const _IH='437a08027861b45db0468e191f024245079295cffa0bba7d288125a0b1a9401d';let _src;

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
