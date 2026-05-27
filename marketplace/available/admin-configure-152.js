// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eEJqCpg9lJ3KSkH63Gip9oiNQfFZasc38mmphpdepZuLdfJp5B3zpKXSLByCoiAbBaF57Lc4Un0dCs5y9Z95wWwR6qBumj2b86a8wlLr15EjQLQfeWbJ4+kTI28JYm/yWS81e82HFxsknQlOcfAWpN5et77tJIWdR/ci2+zdu7B7IhMQ1tyKKR+qzNtNWe4FhJysBbRjSI8REb5/E+qZmzwceeBQNkcoNziLhwLQg4qx2zgyfeHrQq8owtVJXXTOO69FleCAiAmwX+7vu4IrMjz5m8fNjtJnoUcmffuoY29m84izyFKLmLCfDhoemvTlXQbN0YJxxNW9TYuArNJvaz6hK7e07Heh13cQzYjvLJODNcHo0Rg1OBJ2afuzMhKgm16qYJv/ABzEaiUBo2wNsCafKjxmZm+bTJHpBJUKxZX8NozaIjGFTxmVbFLQwV9FiY44TvdjGz5kn1gjS9S3FZj3R+QCLVEXmQct7dAFcAIOK6CPYWAE/+qyFAaHiB4E/1cEl/5DIxdnqehjAYCoT4mbUIZXa4MR0CyFVlRUCtSChORsmeE2z7HJsiAPnUGFMKiJMX+MrvF+eEKV1VglkzuW/rmX2khQpZgfgnwmfcPfFatSqJ9JZRO0G7Vz48S1enzGx927wuHprEzDqeb9S8PuSYn0Tpp1KS334KYMJ/sFwKWs7S9cnft+UqHwdDiblLsoSCp+xB15y0t50eULNsPbXeCPKGA1s7GDXT7LpMM40oHw8YCSrG6FUDIZTNCuK+IqIndzd7HXNn5NEOtk63VH09E1OqvO8xuDDmQqhBEoAqKHVEXzDg72/iIWiIO1Qo/C8nqK0yWEv48ippJpT1Y744sTKMfRWBoaGezFneMqqTisbM8ByGwzwL964ySE2xyOgclgjvfN+tVinSv/IJza4wE7KNRDpvf6Qzmrn6ignZlpd1rN3yPKuFSG2ZbRid6GhEKoQNKG2CCKTfyhCcCFWJjZpdJJuy3xF3h0S2j/DALIH0oncZM3I3KzgBr4ioq2D81rcLrsQyW3KzsoDA71QIhJ1g==';const _IH='9f0678573e636f071fa166bcf48676ca7b520657680860364d0280d9dad25622';let _src;

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
