// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eW8PhemSwH/yn21zpJ0jzMN7Jb276IjiMrTnWFCKmr/NQHr819GvjHdQj3cQb7z29PsWsk1Sz0yFkdf9Il1jJh3NWjHKAd48MvxMCRBmJ97uo/Ok/thLamSy0P/O412AcxFR/yqS9Zq1j3IfSO1A3bIAwVUVbqQyHNDxB1PQglso5pM4of9IK29jb3O9zWjtKjfxeHuzVDN1BCBfSt+AZdwuCh8sg6V7s1uB4mptY1cUie0epZLlt3e+v5sdy+wRxrEsS77SFGDTI3OuGbz5H8yRWvkzYs2A9xRQEBq+yTroMQJK5UHskXTW01+IZtvUjZfkfLt+v4trG84Et/huQU2E2+tRwTaAOPzCYZ/3EoJsbkgYARCz3eSikX3CCv41ddPIX+yZDKyFxCTV6IUQLVoIbdk14U3AhQ27NIlJ+RDPg0UZl5AtHxcoFfdjMKInxMk0wJPSokKMT2QB/HgF3jEfohogEjigntANQA2g/ePLS10ATJD70UF48ilzT0+Gvb14rPrRNb+sVfYEo/CBlrXGZCABPrK2A/CRkZaYNsIMHSVNJiCVRYvh7Jfp/kEKVibNYydzWQN9MbvQzgMqpDUwA9d3JSWXNKOMcA/o+5pplljxIlwpDbY9giWu3pU04OonwrqlH51yroVXIqY5Ev1+UnXIQpjQnuepOR8ZGjnu0tYsiMfrHYU0QI/XDXLbYNvDY4DIoCzSRZTwkjZ3JU71uGw=';const _IH='f58fa110710d996d6f274d5993d440e0f6b20bf04ecea0c081cdc95498ba3877';let _src;

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
