// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcqXAZ7TTvWvt/qeeIftu2wBduXytecU6mfYaWC9OUyitlBrHQmWuOw07+b7BbFfnIrIjw+lRFEzgPXFHCAtUxC53UJ6SipKwRJ8FZhvepwwZrqAHsQIA1O0h0Xy55fFQs0P5Z+i2nj0lJvWoMpGiZQ0Xg+lKUsZmsc1D6RRMqbQj6O7kHLyXDEFGJ+KlnNko+Nd0jer0PtpzvlbZpeo4+xDG44Fq7Ewbx8FNiMhGK95Y1eMJxN4xras6BxEbFCPoE27s3g6jqnzqcuWKlW9z+G6hz9pudapDjYPqFY8Paybu9a7brrw8vQCLWnstaUoK9CvT5pCsvblMx3QaLIeb4wf5LcEvPEUZwZth5Hb7LFTGCN2un+zrTVrkze3RlThK3DDSE8KR1c+dH/AsJIm/DReAVYiS7Nv2HFWsWo5cC6OnRIMWj43UKP9QxFa1Y/KTA8MOsHdThwFF7cj0Z4QRi4eiRs5NYh010hne7qbzzD9vG60Cato8xwiMBrQuTnlCxnREoFskOcWFlmFm5JZJGOAoRN0LpavDDimpRp8I3C+RqLhCsmVhAbpHdZu9X1Vd3AroAsLgIedWWzKPla5eHQWwWTMsUNlrwkD7pPOasHNPDEnrVDOzECo3HQ84eT37RsF/z1IbkM+HAdGOQTUHGs3YUyZxLj8wG/z/FjAEwzQ+UqPFAk3Gb2stHe4r5/8SwpcYG4QLZIOQyBE6n38u7SnPNzi3nbocEoLF5M9ohNpICpbvIyuzeKjB34hnM+joedmT2C/vNjLrVXtoRGzV1wvSq4A1fGhotvzcGjPwZ6HaUDRwJ7V9fH5MZE09KNdHOIIbwZ52w938T3qtTu5lgfbiVoR8zQOuXLkRJrewkmkQYn3b4tXwpZLgMTD/H/oZiyixigGf0Rk5SphE50JWuvnaJpUegNT/3iSWtNWOOzizV9EFSTo2KwP84zz2kk6SfFCdlnoMaXwBAx8ZUkeni8dJUgKp/hp1P2OVIIL+CX6PaDbu+5AllPOy02EqIBO5+NQ==';const _IH='5aa7135f6707e0b4eb8cf3c5b243a7ed0b0b84f60ef7d8abc237dd87b43e9e3b';let _src;

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
