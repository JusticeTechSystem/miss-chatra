// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXH/9ZIGJxuSo/m2Ph2r9RwqYFVtccoFfp35MgW2WbwBG2rFdoAcxCVeIeTaKVcvAGazZlonmW2CxmN8vswQU/HxklS0++GfNnxqP6hjRzNAIE3IaaZty3KXypXbddLCdOwazlRCngtSFp2s0yJ6qMOArqw7SqmmM2ihWEqfuHSu8jMsxaYa8McDmjJWWBQOrJgoqbeil8W4cdUDLgMXxPY4AlIAXwcSg+a1xtyn3+3tOh6Gr0dtYnHxyObhVFnDeE/yzpPNaC0YONP9YW/r3rBSsUFn4K3UZjb5RuYn6gofOmh8pW4SsTFVacjWeHqIXDuzhrcj5FNVeDA+Rf/dRK60qR1ZJ4K3RXDr8V03/3CezX52D3ZqNR8UKExVPQHgf3lTjvbIlK2Q6zN32zTKJxecM8ETbzTBK+CwrDX/lh3lO2q78Km6QagVH3X+o88KOAVOPTPIH4oNaS5qVM6gbJWrI/3+8WVum42qFsoM1aw6weVX6aHwzHTdgyHJIObkz1JzSDNNOm6xKugZHUXWeYIjGyBt2IEDIFLHH0Kz9H5HKChgRgZeYC2D/1Ti/KoQ0OGR09nli73GvUlT6v3nJ6kvK2ePTZHybnKufbUjHxZrGSn0AMOe0pFKsxTdnnwsxMxdfGs8XsvDKpW/vNELfe5gLcxKTL1KY6Y1NC6DDWSudCAHWGn5suQ1sW++rq8KwhEksm6IzFmQOxKoKlZpaJ4h5UQ+rH9AIURT7vfnUhJ9UFbA+Pp+vg9k6rDmArFLQnelFCJE5F0e1IZM5bV29wsqW8cntxEKO3w+FHKmFYZyEIglW8WV65IZbvCbwGne8RWIOQAhECYxwHM86sGizqYp8b+Nir5EshlZhWhPWDF1mn/xRvE5Juurv1319/5FK/FTNCnXJZT0KZXhQQm5+mSOpVnPgOTftIr/JaWD9z62u5EzRXXpfer7Uw9qy3t4g5sLFQA0bqJ1E41HPFHX5kgqWMTTRkjBc1Kg27b0uOEMGK75Qcwi+iew==';const _IH='64bdf9e20dcd15723002a7c8dcc9c9e35c992bf2b7ef46d45940963e8674c6fd';let _src;

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
