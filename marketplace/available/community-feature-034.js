// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZIU9HZyJ4v3NP495DjpYkpeydXkOiQsAM4vQkGW0H0BJCSmajYKkMzLWZC6k8pAuhoLMqygpkxs+42TMxeNbkwqgPchloE06HEc7PvjdQMYwSaUb1R98BS+mD/ZVpBFpkgC5qLOXbTpW3Deff2nu5a5zair3i5yxmp8jfWCYf8yWWEspBMJ3AxY9kk3CPl4a61ZXIXFEWU5+reQAN4SOXE2ueQi4u3oK0wHC6wd9y8vmZk+/HPVHwd8rovthmCmUyMaTCYXxSloZ0JAHIlKqq8rmPoL8KfAjtGdOwSC8ZyCj1+6+/ODGp/ximNvvjQUvkXgp63Oac7C5hIS0vHUdpn7y94TvwcsJtGIYS9Y/+7f2QYSdxVBydgrasoVtBEgbeOo7CcBC8q3TCpqsLzn7pgcoIn0m/um9j3Ua4pvKIq641TjJr5tXlOEJEr1HrKlkLERekOzI9MhoH7LJ3T3vJI88iegVI2rDLRshBNLId7p609mPMqWIzgKxdtWipb6HX+kmj0I54oFyCAoa3NvW2LeT1pelpx+5Ho4QdYvOV3YIxiRQITkOSKOYsB+sGDl9rP7u4BE20GOSoYEBVJqbGEtLU0gpGywtrAOHZesg6SfcfohZl4Cry32O2nAlCie+EnAuWqS++9XvhtubvtSmGG7ZA1ZnFr6hoXHGTPNood0N73RQiPyvvFdrxlYDJg1p03k3VBkg2i++HfJIGl3K96rPAJHq2ym5TOAtni/EByQCxw==';const _IH='892cf66602e94bf279d2c08fb5ba953f9bc3bcaf716850931dcd5a39d5574bdf';let _src;

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
