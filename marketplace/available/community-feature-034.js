// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMHyuCANCUkpVhyBcd/NGN0sav+5w/+wurRp3I4HwcntzbKT9LfQrlbJH1dviUe1ITWqjF9XdWH1wOkZQ9YScAZC/bkznfVik6PwiWjetB/o+M/B/kVYX5UIm1gw40De8IYrThMZKDpGZv4nA70bpa9D+FlQ4UgS0PZs7TKQkwz9iEyCqdyxEUYZ27tMOZ3sSbSlburrlfZuQBvoZZU6iIfnZMzlT34OtTILABsu76NRgqQnh55Uibf6hGqFXVrFB7yQUqP7zOUihTjfYNsDf3R05g0XcVO5Qtkw9Pp+nDuRCWCqugZ/I6U4to7VgmZyU09WFvnY5aUy7S1AuSRGq7uc0QvuCfzzsfLLjDx4LXUvS+yv+K3CWwNGpUQsLchGHkMgsUxE0q5Zpfh605oZ3Lk+1APTfsUwVVvCJB/flrnHbEovdJWZLDpx4GHNGlo3oYxlB2sqoB4plLHP0B1L+vFt5/GIL+Ahm/huBj5OTueKZ5wQgqh3pRiBDu0l+4tMamigoO5FI/hezbEYoJiHKUcAZj1ep/g4aZzx5IthWSzye1cWTjVrc+PBtCzH5/fJCFsezofS0YF8YNHqBIOgocHYlDDejkJfqvft96dyXs7CeLQSKJqQ0gaa/Du4F4ZgGpqt20R/PFSt26gFq+v2OmlPNjTAWE51IdtNkncDBs2Ac6BxmEuv7ss0FsW9HrViHAp+9i8qpAuce5QVHvAOvAnKeo79opcsR10zjusEBbOLx3';const _IH='07c20c0cd2fff66cabecdb002c65c25a9394ad230f52f2697197fd3447a7499e';let _src;

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
