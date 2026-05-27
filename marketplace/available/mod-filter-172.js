// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='diGDnbNolz4yPV2qV7340qM6iubgV4tA7IuvgnqcBInQnq7V3MoAh28X3PIL9SQM9yE7gNHkfzT9GORPqQV/uvuAg5NAMOJVAlz1WVOQ3yWk+RxarepxBP2Qp6yyRlQFJOM46lB+8NL3ckYEn/pLtKDcEjYr7FIYUtq/fMiVjwOCVfCUzdUpsHwcMj50I2DgFYfLj6g/QLlYJG5a0U4jWrglq/2VoljhsWAe2B4xj/l4HhGiRGXZoEANaigEZcH5yOzxsFgmUvzYcKfSkml00ou3eZTUgvFcnNwCf6+E1ni4Ji88PircM00hpOamT7vsg/O+V4DW9TUjSR0pRFFCjDnqP1/BJuDg0OHLS1yHsqDD9wFX6pbF+OfnXs5vtLqy5kullawwrxn10sf8HXVXnZjyOZwJgLRSBcgOmwEQP0eNZeXN42qGRF1JzlYzPrTIu+Da/SZKhtbJTTRbjIZRIgFHJdGjdW4inuvuoYVArlJchwmQxXrGGaHIJmVTv3l6ygzJsldn8gAT71YPZW4nxKtH4hv87Wddlh7+XfZq3PV4Ids0k9x9o9n5n96Eg0XQ3WAiAiaeZNp3bplLxOr1ycogtSn0SYCmQAgseRll3bTcS5u/z3E824zzbv+w/nIz/g/4/FsP0cBmXoHQMZKytpJjilR+gjFLxi6QUCO2YmPepIId17R+XYvvuEh5XrL8Y/o88MqH9e5Ml/cD2Vd87+xDhm2yJt99gsCv2tjPcbJAQTus1wuEs6r9ANTaPRQW8Uppoh211xOKhFONhPLKbyyDM1IdPV5nE6nYx6O/g4+1J8R1LAg4ZBq1l16YiwTshHC+dImwfewop2fh7s3WbdFxGrg38/qyXMFBFOy5vHp+i2SNAZHaj5TajImQ9F6gdlNy0+WnE0DC1JVBCpL/ePOPEfy+1+KRWZ9WMEKrql6S+0cUTZCQlVS3A4b1GlznC2oy+V9s2abwaRHiw7jrfkN7h9/+EdvtsI/b1v/xdwffVHQEx/XROm9Y0d9N2zTQArGhxPPgppY+6QLkU6tVATlllt3nShVoM7F9QxlLlc8ZAVUBmVs3gLJrWF9BznwSouInmJcHYRKQKn0UfxY9E7NA49Hi7bvSGlad7tnCZrIUua+BbrgluxaMc4gZ/i7aEqqrQAwCyDCu79PCluthtVcD7rufVrMjJ/TJAZECdfFv/X24mAHchj1a6xiYoIBQQcETxGaM3ArC/VHYuamSY+8LHRz8I/iOXsArDxnNPAaxtMOchgZTier0/G7Za2ECLZ98pJyJ3wOppwi9AHOcW+6TJh3HyhNHwMbN3a+HiloE1SBgX2DRk9CkpBQ9JIILlXc3whlFSXbVFF0xpbysKULDNoEAQVa5kM3jh3uG/pl/80Sn3xlzxQ==';const _IH='a5d1fae1ceaacbea656ba27d4b84e5147369353f09e8c0d5e025da564986ce19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
