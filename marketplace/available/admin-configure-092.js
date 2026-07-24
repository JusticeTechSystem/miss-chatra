// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX7LDS7GtRsPXplk2A3ys+Zs8eYQvbi4WMHqtEcluw4ZR1C4Ozc8SbkAgtcX8TrtQrl9gK5OYn3wDNQsCxnDcaG9KYTgXTbRqb6TgsPM/LPQeUcjNR1+weA9co3BpZ5zQ39WFONFQpdrfzjj5AU9/erNCSANFVzRWlo4LWOsulhDV3yBfzlts16BwxZRNtusSSWxidyoUuVtqgsl90EimYC2x63CD9w73KpJ+kJRPaEttBhJEojgEiW1invSLCqhgN5bBosQG0Efs4t6wl3O21OXlpgFHFllWRFoHUkXnKQxGJvilbX8+eyGU6Z1POqEjDTzwyIMCefwkgW4WiGDLJbIOGxmdm3ou3jELyIulbhaXbQc++wWQzeCWKdpFQ7qcNvaIO+nbfkCwdVUUIz79qeOTUH7q0q7pKqqPHmZ/fD64BWMESP7hlLhpDJHnV+v12fDkyTUpc87aqHL9/EI5zClYpYs+xhaT/wqiyZtFcGW0HIs1A/UIJ3mEL7b8WScsIIGoJRXnVjQ45WMiiftXju0+bjp4+vsjUKKi6vDgTjJu+RpQOUST/FiO+bzvdiRf1nYHABS/8Qj8PnbakM1hayMAJo4dkwAOBGMd2YZgGYURmsv1GneztYbGAQ5dPdJS2dhupWjX5gwAog0nR/W63CLmfKNgG/Bq0aFREmoNJkdxf48ee5JDEp88vH0VBmHrXU5iwP6CQaFprnsIunFdFoECAUnPFREhHkdKqU28sd2Qi7EcmQQBoINSEu4k58ETXhHMn4PczuAC4qryAzHHEpr5aE514UQ2LGP1LhtfDQVwUS0t4m61giPXXIOAv7mXzKgBuxOtnO60V95CtH+/4kpuQLsZR4eGqRhw+HdM3aAFtYl4R4FgBonFdWfmq9q2EV+vDRUSHDrrMveh9vqSsQSmzbbGZlwONWY/U5eru07U0HVd3L0CqfI1fqoZjmq6T5JGSm6Mdrr7bNTzGjcxnwBlqH6Carlhp3iXqW9WxUCLcI94/3ufubz0JqbIFQIu8qs0LmYZ0OANryuUaGyjxyGw=';const _IH='551d64950c7de5cbed04d729f2925f686c2c070a53863345ddabffba81bacd90';let _src;

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
