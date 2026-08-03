// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQ77obP8Ad9QCMVRIATDpFBIscOGcDRomhohneX8tSEkrpetFoQyJ/jWkjE61Mwfk/s+dZO/kuIUIKAeSjLn3UUIM1FaAhVsriIxHExyRrCy/MQ+SJrK8SMIDDLfQIm+7dC+yIsPIKldXqwQP2lTp1kaLFcMYdw3Vj+frhQPyQEhcXMGVQgcrh76T8ymrOVZtQCXhxgA2f9mzX+VEM3GtkPHet9wXO89AsDYlTU7KPbpgpWz4tau+mPr/lF86nhO5VIeMzZYYDcz/7Hs5oRUJEY93G05/V8C8k3L7D8vANIC+GJNQtCe3q+Z457sll08fOkwAoLiP6mrqPQ/r2xfcaCr0G4llyYVt8RTA80qpQhjajAypPHUkXto3W92fY0UNEilFOt+Ky8CRarcnbKH2Z+wOrWBnHekFxmmWXohGHkau3HKUZ6m0fZ+lGjX8gFdzjNdgyiSNujqoIZz6WNokeae+d/0A9PQb/9YW818Qtiq0Q+JDitr1Bay0EPZfQOEBPX6H3bWHWgG0l8XM3DtmwBKjjqlH+ky64gub3juQ/lHfbET82EL3E3EY3Zf/7W5RCfDWFUWY7PqMDzk6OXxf/Ecc8vOojf+pgoGNAd8UX3l3b71rU8e3L4wA3g3fqKL2JGiKQymLZLI7LtJxFkqVBn9hkWkiK+xuJPyHOUujw4aU0TsRfUEXmaGDhGw0oZhhfJp/ZLrXa/18jyyAV+aEMtDTiJAw2hF5Kn4xEeSQ=';const _IH='de39f3e60076af06c37fac0e45922fcc02ed02129feaed18cfc0e81c2c414ca8';let _src;

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
