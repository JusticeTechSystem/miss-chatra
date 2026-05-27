// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V0YREDpY9dp7kZ3EFgj838/SzuBZypGwuHEQKXI5dmshRz4OQnjo85FhCByhX01leSqVZJl27gNC9US89iDBDSlPeLq+BVFdT6Cwv0yPN2mvdJyE+euR6trxhHjfKehefzRsEx+L5433uyOt1nD4Ja5IQfAZPhEW8Q7HBX9XYhq0qN/8hPprJfBKpbb4SDmORcipJj4AQU7iPk7q7YyBoSQZH1Wiv9k8pZaFhkB6bVKNQliY/+xAUqmoyWF0gm7sgpHmzQ/UBZrLY5Q2eiHIfvTHE0iTOb5GZdg3PLxaBcvIxpDaVNPhC50lPZvRFQN4J1o3LQ0yz0pZ8tU8nFN13qMvRMdAWdmn68f7vCZiy0WmMWrsNAopia62KKb5nfiVVP1NBak9Cscs9oW36k5IyiaRoz21l/dBBubDcYmOBYRaoN8K9NSMhVHYYrivPC2dYMafea3UCA5qF7B614cuSPRu1ftjnkGQq+3/6kt9wgSvSmm6fVd8XtNy4eGM8fWh9VqX5OF1hhmsaAEdjzLBv3Ty6MNCcu8whiFUejTacszZoXQILVDlLMWvWRhdgbyRHVPw2C5LzJ7IHz/aLBRCV8w7FLVZNSCsnc5ivNOVr5L5j4afVabaKmOzJPyyISNdmxuF06aAEUWWyiJAGRwLl9Uktho/r7ARxHu9KBFQmwyh/Sc6ipbLCf/dA+0cqw19uL1k5RZG8tKfzXSzpizu04BYeArJ0ZJ28/ppZMzt8UeeAQrLzCCpZSVcD78EiYT60/Eu2Wiub6oq/paVSm0q5GPg+u3XPRyZq8dk9pR/b+kxvGg600tzGZmnTCT5llbeoixdYSPwdD7UsKZT9iqQK9I7IFbyckaeFBV3kQidXngRhqEqiUWXofcWYO5tR4ggsGGRFgyOrQdC2I5/MsYlCpuqBzjI7n0VD2Z0jqgHE9xVzpSiDJPyKwrrc4u+6RgW0kWzej3bUHCp/6v+eHvU3cWxX9dRx6/+55lXjhfRcwu/uQEHp6//K0x7FisWlfXjcSrzXqke21zVMyPCNdg/3cbX3+gJNDW14K6DocFU5B58JRvPZ/JCPZv1CNJyMYRK2blF+r759PA0zxiQ1NNA5lUmj8Do97dR+S34pecKcrfi+wD2kKl484gEnzG3FN+OZ0b08THilPb2Xyysre+/qrCQDjdc+rz2wrG4rylUZLjK01f/pJxXMvssVIbjGkbwhnJXYVpH4uaHtbDmZgBzYdqHvVeqTAwovVqOTROAfHgA+25GXh2QprZTS+GNi+o6vILeVT3Dg3U0AWBLEROgJix3mDyCUhcGAgZwehqUuSTp1/MUg0ZYZeDKCFmTUMLs8sNXdDE=';const _IH='7c97c938a2bd6c5c2d6da66c7a0bc322a6296b51d4ad1a93b6cc7830fbdca342';let _src;

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
