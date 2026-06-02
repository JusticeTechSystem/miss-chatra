// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9kzASLlEHfhcesWeHhiMR4aM3c0dn3pVL9NYvxpcgwPE9bYZ5Z34WqCUsMbpuVsBdNl8R2zO0IwrqbZhiIEe7WOirMCrRpsL1pK/14mPklGPmu55Y8FQ8uA7zuSIjMEpTOEgqBxziMWVPDSxN8IhrxF7UJ++Fq1dYVKKA6Fnqftrs+fRatONx/CVv9iPqsq1Rrczfyf0VroHC6gQjpURkeEfPRuL6C5S3GxooKTiUu73xQHdKxTH5bz+ybU9Lb7YziworOFcWj4n95vxH9sbYQBsGXAbTT/M6lwgU34iZqw7znBfffswQR9yVX8xutaCUc2fnFC19SqTAQ28LmI0kG+JKQMniDECtJWzZDqZJRk6/nUp5fCWRrRFaOW9kH4jC0nbxxoY1asr+CBcPzXMBEv4VVLSqskL8Pdy6BT9eoC3TNW2+gcsWG7w+HTBnFk7w3RUYQjWb9V8eJoIAtQOeKbx8RbkfQY2lLJRkJ3V911oZvZKGbWa3gjzNmNGRyUYOyjA09srYKG/rE5LsQfCIh93FJY70Q6pxv+0jDoHOSdQuTtxKBZ0uGeaojEkpO5eFX1kzrlaOn13L2F/S1PB7f75cRzq2UY4xpSCY5JMEeUyWyBwdmw7gKDEIIrF2Ogp6qu5OyL9OcEmK9zVJOJsEUTE8I96RoLM4LhSKUy9lQXASDK7VxwilRIVfGduAi63xKGlQ4rciPJeHz0rWyJRZmbzCHvnN67ZTtTT1uRcy5Vdbo+2vnprjPBcoOUQaIBVQ+az6883j/8u0l686JZ3EUb2IbO1u4LVA6hb6n3TSKLWXZ2Y/wzgqQxoUfPyfWRipLaK6nxnZz/gOdQL/KXo+Zs9wsWsR5MD3qa6Z76roMaFt3EhYypT5IThK9J90CB7hbWGaQAWQ4fSnAuBwaSuqjWTh0u8F506G9p6PAatc11NOZJjTuVElBVRN4I72cqbtKAobPNu0QSXn3wA2mhavYkfVHjctoEYzY5P9LF7fEsVnjF9Ee0MKzs/V79OzhAKVRYWkbL/6UpMXsMbeNpeB3kf4M6NxiYTMhDPnsZyrlxbyfubMDdDdPrx3aczWW+73dvJDVG+wKOMoECccxB+1/87J4gMdabfDGWu62rwJ407oPeYNkaCHElIY1ndbThYSf6k1UVplFa31eawJ+RIkknY8lUoo6mwytMoAA8hqKZQSv6QUWrPUmrfb90JjEBzH2yEopwdNK8znooY8O21kFkUNtYtfdngsYZOEe81VHTwzyYIzj2Qx54Vb4jVX6xCV3HRy3wbsAB5ecDkNmFX+TG+qqriu2me69k2f6v864h4yQq9TJB3/+QPnDpuM6rto91ApR0MqbZLjUHhdF4azUveC70C1RBPzYbpF+oYR/j3e4xNIhl+lMR7JA+p7iv2fOt1DooXv5xRCMlxh+Dn6EFtDZiCg3T9eQdubee4KUQ/FOcXS9GqhsZvZi8KT+/SWj5/twidqyAb6NUoKqoNoKFU7c5IFb7kFaBlil+2X+q3tMwAojecALl2hvxUpP8G/bYP8w==';const _IH='2947107bcc3781151bc338959eaf0ca1f9e527b34cac5fc133adead6a93af09c';let _src;

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
