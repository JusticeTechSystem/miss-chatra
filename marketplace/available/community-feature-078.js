// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3cST592+mNKl8K0Xd0Lltc8x2om8caiIvEW7YKjsIs0ZKPGBwUnkXXCPxmtnHQyqa+17NFpubdEDva4FMPbmweYATHKcFJsgLs91xKxlW71VuCAWvYzPaufUtAZSOveeRaCzU1ibDTK0eGlauCM00K/j2aTP8kE7vGcMLXu2zQCkKgNutdIjZbFjwDgdY7lMIyVPNGWec2dzWlkEoAZ0WiSpOfMQpEurlEyjKAHYQIvJxVMXSBRR/42s76Ug5zBBQOyGyaDR9vKnwOEx1TH6phKCuSzvt0ubYcrDec2knHMbm1303XYJyO7ChVnElM9nHcOTTbGin6OKF5u4TNCAuFIuQyQdmSNiEsU5qGEdm88KAWK4QkCRNtqFkqj4IIQqYFDLGp9ZLfNAvcd8SbPSSDDSSBij0sMCWjJp5CnGEhBD563AZj8DoLLAC4dor/Iz15QNJH+OKZ7um/Ng6T8PQ8b3BewI8bX4dUGEEa4RQEqx4MybHa9/ozV60aHBcBHh06Tp0mJrA7rVBadHNYv8R/yZBI6628c2A5xChD3kerd5alQLmDwROx0PRQI4Un5RlXEOzDf2d8RZEQfqLDUAB+aDAgaZ8WV4HAtpcZaL0tCXNpRNkjWi6QpUNEVo+8VzoTapITe7Ovk8F9WXUy/CCrS1XjocfGnuygcVzASlpwEiirGjwDrKGiG9FxMGUY8SKvZsUeAxI9RJ3X7CEDgjUtsVqDvHjJZL/';const _IH='37ae7c8aa2e93a649ad88b5b9692dacaca222d3756e93dffe187da6e505cd68e';let _src;

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
