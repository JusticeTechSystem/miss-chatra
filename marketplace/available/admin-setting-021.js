// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1ZDrWaOFLwVkRrbnfEe0VOguV6eG77WvCZYlOGtTZPIoM2oqLJX/4lfNERLj4WPaS5+xv1cyrYfojW3gZmE4Fhi8ppDzhOz0IGl1FWT+eW3Y3MTKHMtNksZ5+yP6zKVeFj/pyXpK+UFiEbeFjNE9GRubU7K6X52TIBgQps/N7snEqHAmUpXvibE3zG4bFWmrqHdHRmTXD6H0wA4eFdplFwLYCRF+aH1BwsoM7Su14IdGTGPBJDq9qaOBso3CDD2SShfnnuWKWNIG+cv+vM+Xe7JH78Um7iC9BxiPhLNx5TX3kxLdST04ansZCC+kBq6F4IBArI/Aj9Pf4VQkZgRqoV9+m6Vftah8z/6SIcuWx3ANL5hhKaDbM5C/vCLvIsC6b/mBulaKpU+U9s1N4MkFATvt0OtdbvgsMkYozVOPuwfpWNdhyN124wz+N0Vgz3SnzshcbEBkVoMevBroo8n0TE3RcHHoL/asNVR0usqYmIsaFUuYE05tcNghIq/6UGHzG40K9yhHcJw8awtTrbagvKzexjAoHuYiZBsOM5IRd0u9ZLQV5axgdfgLnHZl4ODOHw5xjCykGq/FP521NjwyiLrOtTJ+dU5QV1FB+zjiaa7vGlgGc70UK6B5LqYNhSZ8F89yYq4KGvN3Za23x65WN+CVR3G4J7OoSaQF7CgLGD7ofY1ovY1P5/b3DH6BGv7BoSREAMd5HJe7QopAd1I7CcY3JqOqLye8ZHfSBqchIXeNSuWGNsTBkIrvmNHpTwilxdP/fxeFoVmPGUxqUaZpwGumHzKoha3oAnq0ml8nqAPaR1yuzoiFPOK/+LTEz8WQNcEJ+umsKIZLUnUehXebIUA2JL3bInFWs7aiay9uUZlxpzyN11PqelROI1U7lFKPOTHDESV5+A6mwtELPVfM56Ecqn1wUS74w2b5l6/DvT/HArbDqcIiGLYiWY0cauFRBqaaRMI0Ba+j2a8ZdO4kD3m+8Scz2N/JpYV5ow/F+NKDBhEW/B1BGgFFCjEHQy0zHhQ==';const _IH='63f414fceeec490681b493ad3a73ab593c1a4604d939f142a716754408054281';let _src;

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
