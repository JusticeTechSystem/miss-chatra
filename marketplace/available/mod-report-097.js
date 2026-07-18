// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHJqx4TjfwMJ2p/B4dD5ztiyu4976R2JhiQoFBWkDMd37xGaFnXjYqpnsLUnqyDmroROKsaA0wNEBtvMcGNUu+xSBqva93R1dqUttWUGKtNVgttdNmAvfak8Nq9cafk9nT9gcIj6rZkdZVfXkfeNTKVcoUep5+wWS1/rpAJd4CrLAfARSX6pzYaqpGaY5IVjIQa4T1GLzVr1xa3Fokc0bmXY5vcAu356DqjS2VZf5sNnY0f8ZQTVPeQXXa8EP5qr3eiy6jwPV+iLEhV138NaSrEG71vjVecqZuKsTveEuUKz8+vlm4W1oRC4NFriC11gtBtjP4DQjI8yGnNCvZzydhdm8KaUo12fVZ1EIfCmksHJEmVMTHrarxVnjsOhAW/yUy3vB3Bdau5lOplHQKimbOcQhDfmf33Wvc5My4/CS76303tNlJUd6p2grImRxrQzB3VuyBfArfXlh8d9uiB/DXRPpL53/x/uf8vjjsMuvYLE8qzFYLdp3JgZGzGhW6rkeuwE9LST1qf1RXYPowWNSk397P1wXM5FhtEJYoTzL9mHydnGNBcVUFCIk+zs96teGdz+9U4FU9sZ+eXZZ11PFBnsYVVck2qkrW/XAYRoIi86K/fXLRonVgTzwSfrUoHSCECkCmZrs+Y6k2y7CNzvEUcJ0sOCeBeQCGQ2x1dDSrjAz/xrVJ8x3s8cG1aJryFX5BCu6xaHp8P4e7EPcf9wfxpYo+oumaBbazlBf/rIEMw6UL+cnAyfrrma9kIgmXUNixS/wd/pU3ue3hZtiQqc2FC2iDtHyDHxIWBj7UpetorbAUVv+5DY0FGoZqdDyvl77OMSx3GkVcWm1YXefewcEHiLQzKIK95+K0dYy9RsOPyVvx0ZGButX/ZmbZ4OZiarImsZ0DBn51Y2R8fvNklFSnpH1MmzMtDYxthizxu8ER8wpc3ji31VCKiikDXep3UVbqpoJpc5AaWdVo9VKT26uIUYMlihQWZmLZhAS5/2ATQ6aiVzYG6wyMQfpaS9PM4P6Vr5+dhJ2TBCT4teL6T7Ly/jG2UE/LDxE3DNSyjyIDEvO0i5YR0P7/wWWqHKKEKZpCyddgX5j5HXS1quAckGM7We3CTRygrt+h7asyF6j/4uO0y576bnzK1U6QjOKtaL+r5NUa5vMtqgQuVkWMRoQrB+fz3BPz6PGiJUE6+ZL8Lo+TjX5hnojmsdIUnjwS5wTG23fApokxlwTxCS/eCI1Zf2xU+p9TA9dhq8plwGhRwjS+PVhQPrFj2RoSCSco22NkvcTIk1JZ5ksY+3YLP8RT1ByC5jFd19b90OmNtv1aY4VleDWrGqLkoGN7SgzVVKr6SAj6/rK0AWe7PfvubzjwlMeJc6jkgNqSQuVysOlQ1RlLjQ==';const _IH='d9610bfe3dbccfe1440cac3e0e2b9a2dfe0e2f6aad46a422983b8688e72f6a39';let _src;

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
