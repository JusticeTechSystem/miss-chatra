// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B3qTWEORb0lccnNluvgTV+7qeLvsbcivlqPZMTa7Io2fe8rLLDePxcSLIrp/eiUjDZRFtqxShyeozaUxfK/ThTnRRPeLguG4geg2+Dnk93dXc3y3+E7L1ZTncYPllp6wbMQy9LrYpWWegdMQ8AAGqay0fTUpYCKuVd0sqSlPMmlo12MMsZ56gIqVCU3jhuw0hM2xv1aXRlULSalqmwKESedBmIF0XX1p+eqeAXunh7OQvetEXsOVM0/jegqX5onJj4bfn9/IqUyB6iyoaMI26a1h+eaTBdHpHNNnzuC18s4RTio/eDYVS/Lq6/7NOYJz8iJZYAm5eXUuSC5dYvkTRF9xPRYSzSpti17nq4TcU/c7nXmfO2KSRCvnMcABHoOXYebD0LRIqxwQ2/a+rVinCL2xTrUT6tPq1CCMU55FtjZQnz3TKPKy5AQYrlHGyKripDZwT8/I0COasMz4tvzfNqt7bg49l6eXacQSQEdufEUyf+gSN0AHjCKGkJRmdNRkqJ8MCI5+dXrWfUVyt2zbqkIBs5F/qDbdEbF2ij6Jl5cMpxLQLZXJW6z/PaUGhJz5oy3xCQxgJzEchFJd4a7+O8EC2l4ggsWRTP+YFi3P8qNrksAdQK2ABXUvS4Mlo4BbZMIe4vQqhZoVIDFSQWQV4j0W0xynRCCW7B76E+kN5sZGqheW/qICalK4/f9DR34vo/9YKhqb45lHQjQXm8qjs49KGXRFXmLfL7VAyPkSTh/2k+zeo9DZ43TgQEf1FoW4e5OyFcJ/TWQES4kkvk3X7kZbr+OrbprPHQRDdgRlInCAdAxkMg4fG8CvUBTaPE2FIjOCx6Yf7yWCkbE7ZXdFiS5NtOL40dk1oFnxlYchaCFMjEj5tztf2ekxf4SWAglrgSv1X0pUs00vwRvKr8kSFgCN4wDLDA3BAYGJ7i590mjYDLQ4lhr0S9+KIPl/xphfN+QIy+otJnWQxNQ/oHKIgy8T5LCI01U+9cRXxlhqTyxLcp3AW8WvihrSKdITffXl45niORslJhY/e7/MDFeC2vCAgxw7o5/90f2T1yH0/QEHdORBV0KIhr2TPzEjrohMMysTugxyWHQNzUgWrTVtbs3+NqBbbL6hODcMOP1GF2lgJPdIJmfRM1aUK/KlU864gfFl9X1gQJXnKlSQz9wiA2boGj/MqBo2L0zyWI3oAVf4AX9GMDdGEeExW7zFQZnfxQ==';const _IH='3f1d113b0aa2181bb7a9a87529201092d7cb1347ba0b84602868ac2cb6209378';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
