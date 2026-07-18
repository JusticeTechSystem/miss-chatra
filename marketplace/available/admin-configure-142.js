// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcqeZ8N3oBUx09vE/mOtmUSYXJQLAZP1z2n7Q50aBGEWLe1Ffz9+/d6BUC7DSCtCdBMBf7gsD3q/pw6TmDLWRYOnDx7GceI3n6i1lJs3vpqqfgJ1oqqyVEi0xOqAeUqKE/tPMRGZnws2dacBkVUUr+imj0ek5PgyuCaHD2vSKcWVmncaO4/uCKDt2OxBKSwU51ppdSP0+DbFODDZZgFQq7pcIpRK3iLVaF5xmgEkfXrfABn4JxIQJT65LsBRBPuVETWvsuOzLmIgl58lilZxOWRpL3/ii8UDQrR/64ndTM+Kw+ex5gwxnwqIu3NfEUpk4ONC4AU62E0X9bG+DY3vgPFOuCP2yAbxU6InVIrPaxGioBD+SvCp9JA5gmNJpKJtBiEN17aG1KE0g9Mv1UrSCX7nnkVGr+7sZVuelND81q/FPWJk8Emk/OBh9zA/+1Etn9GNqPjYkxD6lKqBxAhTU5wa6VH7oEbhgzVLe9/VAHIPlORVYvXQP/mclyybtuqcVvgWrrVE2BacyaSWiFwRHPOqxzCkRTWiB9gCBl60ydHqXTEpHV5OXqfv+R9OVSkfipiXfnXJ+aodPlbRM2Rl1LF/oVqR1cx8o+bxLrlpF5DbIXpydW+X2wGzJOligr+Rt9ffwr5fCR+TfapO9VbUINcYwG5lhJYsAnLCl+qGAIL2eWWuI8nKwJoEl+iO2d68bT5hjPn/rgdJOIem09OUEIwll2ChdlD1+EgslSYATpcOzrnMXdYJd3n9l77vlk1U9FcYNxxBZOHB6G+CAeOa9Xfh+2o5M/JiYlr1qfteiTZdz+8jdmcbnfnXHfqWES0CaGY8bWXIKiAn+OJPWqlO9+PsDz7mAQBGlL4vckWY41SgYZhpzmETifvw1ag0Q/iGLuGiv6oyugTuwtgN0lTWhh5fv3jbVoGp7XIWzlLB1gYKpAwZ3td9aRH/Dgj6yu1jUB+Z82woIuSh9RnCjlsM6BOkQWDF+C4J4+S3DilvCW9JiG3EPTLK/oOXfhbpBDntFPfRRL2j9ucY6pIEepOcceW9zyox3/';const _IH='b58f4d5ff2d5e38109f691dbbf7d5fcd63e1b9c9fe3171e2e66f38c8a7d5e19a';let _src;

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
