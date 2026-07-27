// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMeUC8rH3KN5wux/bOMp4mp9+0GNv1UreOjKJSqmUjgR3QIvMuPYocGthybzawzBLG9VmsRHp1qB6P58neH447YhcID2iQ3yIu4t78Fm4i9n772diho76bIBNGIuWFpl56DwCkNn8yOhqqZxwSlpDvWiDzEIbGweYyRBeLQQVQcPt2fgSa/HI6AFlJaeQOEbbgbYb2XzODEN29VLD5LGLD9GA2BG/5oUXzE62IBJVgUbgcIPR8Gz6Hwq0UAHd9jaAbc2fuSSb6aTm/r4C7fekCBKYJ1o1GzDS5xRBlJwYkUwXopT+iF84NsWXlfyDT3FHAAuiHcSOggkS0s6TZ6J9tfJE/NaPaKKp1rMG+NC1vB2ZCjbGnWnyR0HVHIi/9/467HZueO9bY/QC5/wV8ghckPxOtFVXlsY468XYwvD2tVy6PRvcISWxjF+mWy5vyoZ5fcVbpH6dxaOB0tLhKwf1QT/4XX1FeTDrmO7KxAdk8MGhwdWbSHi5jS4Z2ZYQf2g60/I14nQbYYVa3iK87P1sym8XExcAqe7GNgo61Ys2m71CfEfceLaXoO0xVuWS0C9oHeYIRs6XQjN1e1/xy9FEDzRlXd3MHftnN0TxtCKh9cjJDG4DgRdmjiCuq2cDcPl95njMCoG0x1IQmGKwHpBrrqF29BOAj+XFNzsC55nDdCtkwDNVwlz+ZzmH4Q/1WW3r2Gg0S/rO27j3wMXXBSRPjKGqr1w+9dd/c2HAHXlNtt9WNgkPunMaHhmpBnXH6uQHEW91DnwRtd2i4v7enUdi2p3qeKduuu5Ujsf/fJgnCgOvYQ0Zw2Kaw62YGf/jtSATkvzEBQhIdHx8OT/aQCw+qK86joS8gGbow1DQU9EiCOSAW5WJYaPubbFTBaYPpZdixd4k19murDCZuV0wODddQ9/Lip85yFXMHKScIa5g5w3aZSKnxyjESYrVgNApkC+sc';const _IH='77ae02019b0e25231c8f25b1b21be8df62f9e8891fa0955553f7409aa6635cb8';let _src;

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
