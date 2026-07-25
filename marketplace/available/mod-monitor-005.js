// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRztfpZE97n+xA5NQ4VyFQd8cGQQM1nuaqbPvgxS3QAWustQiyDxnspwHGtOyCaQu9HU3Vnc3vl1goqUE8ykUJWWhumMfyUaPRt1EAtBqvT84pPFiLGeYW9FQ+vys/ZZGSsjq08LSnzer3F5RoDSCXsx6LV3VXVVqutZFure18g1mSmwXZcUXajYVkAi4LxG7c4InPKb85/NX6KsAZ5fYc1+995na5YTBubBPHoTGRYx959LFHR4qF3HAU0gawaq3MS4/VX4XxRLEJHmcm7BxOrgd3vadwzwxhpkuJLpXei/jJ9UOge7PVs5qjpWwdepUc+gDXeEnILTKF2WmQvSFVOT5jnR480/zqXhodqaZG62uo3kIpoHRGOHyGjMJuqpoH/al2lwp5OVT1Lj17jtA46KMrkLariTLWngZl/YA0O54Wb1v5EjY0QaojGiAdSVvOs7cDQvYqoltAh1AC97P75tpZbtupJSkQqp2tv+WCTAJXaWrmLvxLq/JFTGEk0lzYNV1wWQCcMp/Gv/aGtJAD1MSGeWXrz/9ysGvMGpIlgX4tDeREbiyPDgOr9MFQaUoxs5B7j8ffmen7NlLL2GDDzKbVURHeT2rGBQVb3axgCgQMEaR34yJwojh2ZiL8oaH2ih1Ceradln8eEXPvyrrdLJALZGNJCLP0JLSWUNpBUkiRH4x1tsu/cWiXVUTj6DJdYu7n+GUVaJLDrnhMPLEMZU0Flvw6woJ+2/wQrthRKUnA7uSjJoZKl6rDsXX7FHbdIC1xr6TzovJoB05KQlmuqr6OCosBEvRkjAZUdEjjF3zB+nrEB9EzOeF2A6DM3a8nwqFkUcwIQL1tc+KPVoEt+1Q088o/rMHkqzHw/PnnINMn9YtGodak77ORKHPJMQ53c0ps4yIybO/1HEKmsXRZIkGOib03Kl0aLDqtImMBZM9+wkxVbOVQwGAj5yAIZadIMLab3um67jDoc+/1JQO9LoYAINEdI7WU4IAeDvulOQcoe+9T7ExIfFfrYLpetz84vceQauw1pFMK3opUAPzBkeBXTGJfKwOMGL/BQO3GDtez4DVTuQcA/zUnVvAI0WdsKD1xDxjimo+fGBZbJ2KwBXNd0Muz+BKLCKYKAXzQLbblYVYQy0rPnOx1dtRo6A2SiGvlnzPazBg9/9qBFQFThxDxp+YlqRCMHVr81x7VW1DH/rnCnfZGxmjQ2QndVBOjkSGZAuyMTyjg2hP5ZbYQYHw/Rul9kXJLIHYlKBcor/3BO7UBHXrI2Vype9sGwi5mvf7096CxfkMg2w475W+yiEHwdv0K5AWlNSLj21QADIvy0cXxDILa7EKWgv54QxOlbVkOfOCnGNirSFm67LmmJkISEq45I8+eh1KbX7gah/rYg+BEq36Np';const _IH='2ed1e59270a989a08c78d140ddc7a1772027ce3090c88287dfeea3d4688a41af';let _src;

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
