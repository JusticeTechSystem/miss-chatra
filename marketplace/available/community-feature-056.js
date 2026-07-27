// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkbJlr1jUrFiJhhE58XopaQOk+jkPr0IDBvJtrJIuBLDGeeG7O0CEDfu70L5LQj1UN+Kjdr0lktZJIwbZjNWsnx354/z6GMPmt8tFhxCRaZOfFR+JKtUqYJVEXxE8aaqbys/CMfeA2Zaa3fYG0kCoBg7G/M5o7clwwu/NkmIjX1JRMLRJFlHx+QcPs8sd+BYS9JiHJ5hRxe7IMQ8T5Pc/tQ5YrVoz9YGrmPUB18q+VP4n9Bf4z2tkVOeZuyZTWfgRChjhQVXFgwHfzsuHKTdXgPwiqBD78q4g83RXvnv8MRfsWlazj+UqM9K3aok13T7PxatJyXBfdAGIoO/meUXQfeeHqVfh7GX/LWHO4/dMhJiLf7RCMmBnWaR5izOaBkKD3LLk2ikd7RQPvFf2+dpH9UVD+3J3APrQHKuO0BomUIG3d16ElGl9XdxjoIf+bVsVG0Qf+ZbB947R9xA4N49NX0lTV5B3eSMA0SRZMeeVD7FpXW0hJtEWByYSJPXrL6plwMOeXpYTC2iHL5cK+aKRG6yMpVcgxJKoYyQIwjKuCfF32JKVrnJFe1Rt3GCksAjabf3hhSEQXvtg1SZSwktnOV2jE22cwis8Dxhvq9BTgmZWcD0tR1MIvrlO7ILBB2Z8pAKM+AnF/hqIe33dthuF0IZNHthw8w4QnJOuJJE7tdEsEKTgfJwflTqRMHyohwodtxjeJolFBsI4WRxN/r+OWzNMrZA==';const _IH='c398176f1f0cea5351bbc57b3dd980004d57d185a54462c51f50e98e927fba4a';let _src;

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
