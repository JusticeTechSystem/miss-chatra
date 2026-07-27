// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxj3sbBp3TJhId3brtLUnTaq/e1d03vjeYdC792Y6h67BzI9rKN+GsRoqAHf6QwxJl4SlJPQzqSLfvXS5HZB1jDE/LaxWkhe1rU3dufGtamLE0Ats0RnFRk92xCIUtRvd6Fb+rdDZjmZlhKmkQKlfu1rqj4LeC8NbQpud5cI+gTJaPTvPMBkHzRZWZRfj2/o7lG7J+az+3RSvR3mHSO8dsWsvwYolwLaY3U/4vIme53MVHvpymvrmmIwoYaMLP1Oqg2s1xYps4lIBWVksNVvCuQyPyeC0icYpH37x/eZ7MPUPYPQCf2X40yT+cyPG3M4p6DYv2tzGEWqd7k8zEsSzoPEwFwvNfsstd+fYKC5ftzAYhlk2jwzcFPzto3xbrHO0taAdeDfmbAuyOprrDsvgL8ZtCGJzCBEUM+Ys/pr2Lw09Awm8Dd4tELSLUhFn57IeEvb3o2nqLP1V+HAjWovdvPzBOm5+O1KQsDz4HPExc8wxGmxnuY6ouxBFTctst4La/RncyhjPwYi724X2d3J/XNUixX6kGRPOkolBfwUHVe4EH21SAZWuO19d0OuJZ/FDyj7SOkqK92vNJyxKm+o0JP9J1TsRG6JNaYnjMiNKRutW/gkQXwtBTUB/HeK2KgB9iaF5PLDqRYXiWo7/9dUuFmoP+iTzItEkVUuYE7qmpwkb6lAFz5Hrp84D2rgXxyubPMvl4MeOdF8xV0Py//fFsOObw/YBTwx2xtheZ44SUbzkVEi3UDSATikHTTy4jP1U6axSD+33PsOFCtyFm4J38D5Yf9Z4m/RLHJfXLuLfwFfy9ha4RSXU7zX2v8vl7PNqPvJU+VAcbYeylqG9loM0wj2cTGJokbleTG1rDcbjID+uJq1NH2yrlG84w8HhuvHrQpzaacpTS2KmNoMj4ycfPBdJlXx4dv81NpJESK+pC80JE89YNL5Lsz8bIDhOKkNUkjEsp8EDgOvNXSkN6bwusqXNkh1orBEpCtUn1Rr5fwNSSpPBc3tRKU+BmCIqSTX9sr+6sTEyJGmjxunhp9fAaKjDhBo1/QKzoSanI2en8VQkyDryiGWbazlmsRSnMC0tGrzaEhqjv7XRDiiNcQTexHrvyynnEo9xu9SwnFCUOh+ZCqS9W2Pw+ax+26eEJUf0ZmlHYcvan2hK8TmQGFiUsDLmFeUTsgBnsnPEBsLHp3YiAM0HmZ1Dp5cc0aJZ+D5sXioq6grl0GQ==';const _IH='0f8671b58be579e6f610868831ec1b5dec3ace72bf9d6aa197a3dbb71010e52f';let _src;

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
