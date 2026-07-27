// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTozQICliHJiQVvFrUwVwsecRzX8tsQUQOnFq4D22aujAV5SxdsaI3/5adigVVT/dR+7eqwb1MLT1xMaeanx0kK0jCzJDO5BIhhNXBvtSS9LtrFizl0NeeQvgTl5K5CRsfW5fnbmguu3FhJoUNU8dKAMBeBeRLdpT0pkoMxHt0GeNzDl50F2Prvqq1Vt8sT1wfsTRE4SyFNlFE0P1Et/TPV0J7B/o81ooKco2rxTw/XZEMO0h1vTZ1WquCmN/2ztjfbamW9UO/u+TRpiDEcaPkUnSz8xTuV6YR0J4PZYPkG7+86KfWP+3SVuCsMhaf4FxhykTGY0Chw24mizxwd5VZ7MbyCV2TMkQ3diwjn+ie795iX+X9+kHIeT+i8/OavJhcN71JTgGbuowqmD/2AhHBw3BFjZh25PJ5j1P7tGEgY76EvAXhwV9yd/bnrXLxE3T3EBk/e7nTJnD2O/ejLktOQtRtmIVoha97LlCrhr7QZmXJt0wCQWisZjuKN37JXJfrO5ykOPT2lg8njBldIsJToYJg2MTKCwJn2Vbb8lKEGYhzTZOP3IAKLM0YNwlUDR0AOSAecWEKDjqAC4J+LdjWJJV4Ro76AaKW0xvnYp4AO3Au+ewPIf8yuF87yA8iTVqFrqd03KUVfgLiWb+3n8Xk+HDhTWST4vlo7QGoE3lFz21aa9sG+kbeWl3xD5t/0kAlONDjG/RK0BCn6UhCcpw3QxUhUE8h75zpox7exjbDn1IFB+gaztw==';const _IH='e3043b4e47ff5dcadb498dfb4f60a8d514d172187ae7ecab236aef6e41117440';let _src;

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
