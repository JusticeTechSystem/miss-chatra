// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtwIve7NGpMpxs7dULwfL0B4jY6t+7XKIkXlZFquImlwS/a1UDKNUQdgURATUA4WZcUro2ZpsVKYLh88lnt+io6zBL9SpgWQL16LtUBkaazgtzbeNBez6xkBoKczHIQgu84n5Z+kA8ulWzzwFTVRUKszkmUmE6zSwPdUf4ad7IAbaOvcoUK1jp4lSXCrGwoJn9i5vricPw8PxcKe8oDdVmKiKRxL4pg6qZzhe8rAfHXC66lRUcY1nIazePW0U8dfDz9NM8TGNEJH62aBWt7aeuUbajICBkFFAwog5QeJrZwHkIdQw+AJq59mxX1xEaDv5dTGW8wbe2i8RCK0KmvYS+r0m8Wv2nWfg3d4q3P62cZvLJmgR1WzXp9jzp1Gw0GGrwhPx8stpD2khTUzeGXddzIyQVq8RacRMLhcrO0hoUxBfwYkQwRapumnZlQTSwegxRAyGV3kR5ewzghy7BCnv+5b8OYHes961BflrVozuUBpOfbASgJNSwlX3WSB7gBM84I8W75Drqi9JF7yNARKPRNXzN0PBBoHCEJn+L+6ypU7e3ff8xsSFVJqZfg/ZrxVOo2sjn3HvN/bH18DfruDnCyKNOOy7uKxdo6l60Qn1KXdsDoC8Xw5iQkbwji/FlgMCasympZvOst02JOYbuMwBrTbOaJPwlz5T6bamdUz/1IwGoc6Aip6IwKPZ3Y/XWq2UsDD2y/yUVIiEECnBX9eHHJV0G44qBKLAjKTtMPkiwFDm5NQyu+0Yy/AwGXD30d9AsoBugo6KXMnpwrG2z6jv1PuPk1Tx9cmQ/QkGMLwKA2RvzS3bzI25ODPbAJXj/rtuCGV06U3eZCDjqV4c8m9317wfY1CoXCTReGLYDM1zze8Dnp6yx/25ejnZQC3RILVs26Cl61jrfj0EjETokk0ZEisYmXc/Q3yGxZb8/by7CxJnomhj18SVGlA7uKkdxzUkXkGLKfib6E5WSszeKvu7i9H4xR8LrMnWzav6HVqLlJPsqJ9yfVZLf3jJtG8GNoLpHV5YXQLfK6Zsc/jEahuK+/CdBC4e1rg+jEgDOz667fRfTZbqMsLisd+2V6lx3JVXgktMWA8gCW9Bz9LzFQNDM8WjmYngQTRgLnm1DAUNX3CJT5HUHOMwrhZnoBBmhNvvzmH1z+t/tQ05eDePJyHvektgu3WBzatqsjQnH+fSBxsOSwlkERJqpr/l7QmNi7YpjqWJtdmM+cSA+S5vTHH71GzEdiv3L6pPNdZhVDIiV2Jjr6aZiHRnFnXcGHw2huoYHw5+k13Q/5gk+muY4O6ptibYHu5/VAiXOOEIwT+q2rUgbh1oTQC2M5325VS3JT7no0C8CpYtuEoMIVkTomMYTBL1ExK4o33DD73RZbFgIAT7LT19q+wOZ';const _IH='54b2a8d24a84877b56adde1de0a1a6cc0dc567d103518b128f46f8c1b0322862';let _src;

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
