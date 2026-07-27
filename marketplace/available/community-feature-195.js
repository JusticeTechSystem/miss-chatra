// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0VUUM2LslarQ4trr3VPLxYtE5Rzw3jNJlR1+GXmijCaS9s4einBzu1/fZyQQTgeDweu0mN8eWZ43bXrDLRw50UUJpSwXP/PykPsvRyuPKQP86l0q3Y1DJPm9vRbCgST3v/ZYrvBELAHkvvoa/rGbmg5n5N11Ypf81V2BvfgbcNQP+BQ4C+mXgHy8Zp/cYmYExBXWzmTAHgtc1nfm7nYv9ZYgb91t680NZEcklPwpw6osIov3tsTHe1s1hj4El5nW5XdCwmeCWWJZdQwnjopu7KOStcAwYyZSE9+6dqaPiA8PsXmvOvXfVpMVWiFZ/luBEiuS5BnW1p9iNMhsyO0uSKCZ7uuU9ByHJZ0utijAWSYY5cmULbAedpdxXyJXCMg9Kc2YlBwIZ3dKJUYFn//jiPE0KesdQnREBIc9R5cutMEcFm0Cr8lKo12wCDHVanIneHTFyCrGt818Pi+6X9TKBfpPj0600/EGdYaHrIjfvxsxI7flxPXSAGtLyYZ032YgBcOIHmAQXEGTnIgGjjxVhXeanQYXZSaOUfuKmWSmbccNOHhvUtvDeEE+V9XA3SNrOgmgl/H38y/bThRY+rTVA7MF4uCtnwoRu+f4civTy4a22p4aSHyma+cZjaBx2gTpZN+ZcT/QYgN2W15nsm8ZizsFgGRsGwntxL3VoJXeehaEiCbwEaWzxVLZu5ToVJ1hr8tdXhO3w12dRo/5r7waYUIzgZ+ISiWlJyZgKLQcqZcltgehmMIhSIPE=';const _IH='4b0b7a15bc1d1e9e5ba77976f200d69de6ae951e7307f50d16a53e4a2fd751f5';let _src;

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
