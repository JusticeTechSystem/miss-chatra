// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBUmxgscedf1J0JSkLn40r62GNFG9duGwEUbPjFRVxL+BWt/4L0+f5F8Q97wrU5bxbJyX2Dwzjfs92d4i3r0gR0Y5ogYRgmQ96+PKobCUzuBCiP2xn945QRVlDHpgQy4zRNyWxxTkwYHsOtMu8lfb9D+Qz77/DGWAMPsOAU9wDlwbA9uW3qID0py+iFWe69S3MWRzXUjTAtTKXcPSdhM+G9nG454w0o9IO8XFlLK9tSZ8JWkXmohL3dOR1ZeIHhulPNQKmVoqLdnharsL8mg6ckiM+8CSZtveSv4/pN28Pb2FNtlA/+Noq/VoVLDHOFjlNbUCA5P4FslSgjyM0h6oAbd8dLZsJV3aQuQwu+bWtL8i26yIs/PE+6WlwichBu+ITOgfYW7jA18MNjhEtKY3AugkPYm9tqNllJ4qBwX0Jr5vCm8wtoWGxpMxRBPN9YUFyhSF965i7yb7w3iaekgfrBJ0BQs+sBQjrPrncH7yiva/hyzdDRt9xfOeOSaaYbEfJvgFJoWlfRDrycd8A8yzNWzUaVdT1KFoLIogqYj8LMBNjd9/jre2XLDd0Zt4/SMNKpdmAy5HQGODLpnV9/UhEtURdBRe5IDVxZ07N0cSAPR4uU7L+J7Ferwj+XF3vJ3XXgUJkpofFO5QRS4akPaz2DfMEn4Ago8qXJnXqDUp9zB0U2Zin+e8jAftiOkdZBHCC+CPjdpiRg3XhikNUsy4T4ApIHuD/KFZWuejKLPe6Ds4t9alI7k4M5LGdgq3Myymyr9TD8LM6UMkjugz7RJKj9SeFLftRfHOxns+CEq+42+IXmU1rDNZ59I8lbMqV2zDbxnl98/WAi4vnTW+uDf9erZUWLpM5sK2g/Ahi1vn6atU19phikGILTKRnRjnLrsIIuw6tz37niQAwUmGr1yP+9MZXYmBqausvkIYgd8sKDTytcEhyZOQB1MNKZIKpUQWJmlfPyEPEbqeAyqSCAQ3sqMUPyAnR+ELGjZL3vr7QKGGMhopnb8SMNDY4OmXnrgUsl/UychYJVuIeSqpG2muJ9R/i1RFrCGnGqNwsiAB9DcVu2ykAienryTdOF3gh1u0DqYBBedVgG8bqnFc7oIPN6Elw7YzaWutoYuU0G4EJsxGfbiZz7DlBCmKh8J9i+Uqj0oP59cphkzC+nVlnmacob9J729L0mM5uzFcjQvBT8hMkdL2j6kUGFAYO5mb0T1lksEq/LBvYkKXKj3KG+5IUYBzpCtMyU6SwPzDlXvVzMvJfnIhm4Otn4eLeNbXragqpFD7bzcqBrPwRU4PwC/dk2qTomd9ozR8dwyplH9bJltZ/iItd6IJsYlXg9ZAnc0ZDMo9a/wCZgq0QpKylpee7HpryHIudLVKdg/yatzE=';const _IH='c655a2f0a304772d45863774ea002879f19982317f3ad6790e8e2ecfda5f3254';let _src;

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
