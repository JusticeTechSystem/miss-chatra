// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv7DwEkrUBIngLLku/SHiwWDcnZybsaVVlGxTEbMcBIiW3OXSnABrbzNWvn/wwGsGrK26ui/AwTNKGUyjLvfz0SLM0gKlXNgdqJtQr+wigWrLuYF93fRSBthhB+kS6dZvfVdHbEhMQhffXHxw3l9B8aX1O+kq1dOQDi6BFlI8hSMpcvtrHCw96T6VF1gxInrM7ETB8QZysvWjBv+Rd3zFLlHli9bp4ruXxLSTbgsxvtX2bekJWWXH9IvzQVakYRmVdcTA4UOzmQn8dD6avm0P6VA2CmwOyNF1s4OjJEgttwFTwp0V5jLh43MWJAuRfapWX047N3cNzaFhtM2ZfenkiM0Nk6UwNLd8zaqk5/phMHg1kwiGjjB582dk78Tuvii7pgUOiXQJmiwfS3wTHPpbiwbxzg2f2CzrJpCS8VvomGg+jFu/XMJTVaD2qQjIv43dc/y0Moevr2Swbe4E7iATbpDOtsE0/lAqBNtzngL7zHz4sR1P3BYU5w475+sPgxYyitV8eo8LNq+oTsB5G5QKAY5rrfB/LiB6vF8xu7yNN4BR2LK7HMMs623J/7Y+BWzU3VbP1A/jCm4UID7XKbJJ16/WAKHTeNHPntFAOu4+e+IrbHNwq46vbam4l3gIIbFDhyYPLV/WTyJRIozia9nVP5r2u33Vwb7uzhR2ReNpYg+/hF9QFlGRKmX2oj1t0K88FcDYV+3kHTBAC7ywujJGTbYAv9us7SwuyY0FYZ5NE8eVUeMYl1pC/OGs=';const _IH='b2655cc86844330c5032d411cd3e4b63023ae3b2e80a542dd1723db78ced4709';let _src;

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
