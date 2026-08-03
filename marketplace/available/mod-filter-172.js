// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG9Lff5h+CgFFaFjChdDVlR0ebgvvnlsRfmClrCwRBkMMp0qQ0eUxbT3LVNPpJXwKQSJX9x6v10aX8CQKF9q5T2s9vDhW42eVMbU1ktz8kPMedPIRUp+lxJ+51BXwjUY2U5omvLCfazYernnk3liChINEjcKYcYZVZRINII6Ss6RoIyXVsdGWO4Idptg9hxQ/asP4cuZdlvZ5ofePiTNpk8CIo8dvj0HsDJHFezPUrWun/YGN6WgnGBg1y/qdR1pJUk7IDdvvN/o6kU2AzwjG4Tjypj9xCKLhxYzudTRNja9M7tcf8l8cVlAhgtu0Kli7IybXhBzj5mPPlRCdmtvny/NSSMY+g8lw6kKRqDZZ7t/xFW2HgdGDUvE5uQ87U3AMIvMj1zCsmtCsECdeXA3a5/p+K0KwkDKGV/FlvVWOIMrMgq1K7fuEWjvWi+hbUocdB1neaINpp+vZ/kndSWFe3ECRWOjF+E+uCKtVL6ftPnQtW16UhhD7AZo/hGJorMkEf8RI84JoU2l6a+2MHhG75y1tQVlz2GUztf3kTCRoZ5oNeDfByjMPZuqZIF76q7iNHNQvGWPYZlp7dIn6b/LjFeniOPGi8u01+C0wIXpeGen9+6KMMilpU9Ezk6G9CrXeC9Oz0c+RLOi+5Cs4xKpqL/IdmlTpvevGLES8/N/ppxuoVUYH8W4HfD5J2QiOU4kyTtQrPcMoV64npfUur2KZL2MFJHh2uykvXB36JVT4mMm1SjQ95fVPaxBjJ7+PsLmP5xOPLTPFugZEcCydlCBcAD+XdgLjfMEyYI93myp21w94Ve7FGcwFqUAsLXKTG1hkSOBrzeF13et5hepjos8YOnXwBuR6fE9VRXljCwYm3VrHW2SYbq6/32cvLsQjyZZLL7EA/9OgaVzy5nvQNNoKFVphLZd6BHkjk66RIa6kJHT5/tEPThqHh7SLCP3KpdbV0uhJtMEHKg+fqsKk8CwrRhE+zFW8Cn1EInOiUzQtt1je0QRjcrCAw+P2uK2pBXenjLBh5bZV3OO0H2lBRdnWwr/bLxoTdAq22QpJDwqtS1oHnfEYueq6sQzJLbRgDkc6fiCcGiuUivAt03nA2csHV5l6q+6n9UfCWF8z/Q/es5yPQYLDBg9DOYhtIaFFADraAf4uH0xCdXefG0fENhqlJwhb0MJ5VLOhLE6tEkrM3/dRVw+I9xTMoRSqJhMc+FmqzNV1b+zXzvj3tcIMWFLILVu+jgwLrguJkYHvr3wvArwtkfIQ83AJG8HmzAoNSGh/LvK/E07gbUmaDEg6GOBs3OIzZy7Q56qVqitRoiKgmrYWCXcsXDHZwEBWjcSEtqN4HI+Vp63kQCxOi1ngFeejCcIS/ki0WLViROOiPKF1OjPrdBjGy';const _IH='677c5e07c82b860e7f41176c32a255d678a1b9a1ee9222b8b284f8e431a22c31';let _src;

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
