// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAiXXx5eBmmtHNvIRCZl0pCh9Wh9UX2DGtr7iTnykq7s6tcTUgC0kiOPJtew4OEbBS9AROkizZodrCvC0BhgSvqgWidlPibdFBct4uJhNW1jsZOTttKZ7nVSON4NhrHPvS24bqVNUOTiQphnMTxXLgugXdyJ+nrd0AJKHMTs4sXYZPlaFNVXBLYxonmiqLYHvV9mscsBE06MC431vUKSSH6kGhUmijL3tKtY5qaY+fZZo8qCJluDCrHxU/yWZfl/rystDbGUQoiOdUjYbnhCcg1VukVIaNbyKDM/u3SupMAVFCwq3ORnWKIw8KMdNSN8vyec9mLE76zykblrw3TVnGdoEaQHrpR9NWyMI7LdauKS6Nw3fPEYGBrUnfPm/RJEsKnefINDhl4WnqIKO45ECO73BEuB3qK2rBNcsdcv8q6I3/d+5hLFsJg0UxDOmLbyKzT8b8fnCSgzHPyArfJwww1yRcmDm3rohK4ZwcVrlhTIbS4S0eLMKnsrewjGc7DGns6t02WVqv2INwmHIlmZZP0NCbmPVYWShHrpzaxN8nWJM+wVyEJBFEUWjwS+ZfcYt3fU1Y9YhXbw79J2AfrcKIJygbybabcLFu3cJKsj+0yhXo/k4dcoXqkqnNq0Qx5k581464AGKQS0dxi9UGj5bghNt8PkNEzqS6o+wlawCQVsOu/ws3aLb8Ridpi02SuTVv0aLuVJZX8cSLMnNnf9h7lBdAf8f4gvxW51kl0gCaEmQ3K6IEH/Yc4NGhnZe3O6iyPrLBfbWFJG2aTxHps7u03x7VHcnanCtAH7VzBWj+uKEC9UP/KoP4QCq8TCoDXIhuO9MtVxMdlUgeZov9KyGdzzos9xytWcRAuGEP+tfsGZHduEtPqFPjIlWMwhomFhv0ig/Xc601fUhNfy2Ltb5IpbuCJhu5KyDk49Pgo+KcvprAQMdZZeW3ZnrdNjKtgf72kfrYPa3oCjj8a7RFy9LB3siFbgD7tI8B88fLJe9wwxI9bA8s7r0US+2655Mhs6l+Vcmjkng8ZQ==';const _IH='35d88a1efbced3bdbae602cacbf386f297faf2efb0da44edb4127c0cc2b034ce';let _src;

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
