// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcj8M4YmuHSV5XqkHrbnnzm/DqA2P6Ha3t1TmW5/knf6hyGARCqNmfN5YPy0xQtQRwU9gnpAyiolSbGo2LQOCeNDhl3uGsVSUI56Mjmj2PKTiLk+KukOVL/RJ9wb/Y0i+5q55z81sLy9FziGTXo0uMYjJ+btTWxJWjJWOSuYAAnKvYGUlImsWaePEeghAFURHAHSzop1Eh6LQU1i8XFcQuRt6XF6OdqGKiT1jzpw892LFDMFjRTBgxmrs8xiLAfEjVN/X5ivLo5MuUOeMmdQOh++bsQ4cc2ierQgYQNKJznmYGb1WjsY7XYdKbnjLdvkmyQxnmkcDcSGhXoCxvJ+XAt/x1n2aVniMNmy+kJjeg+CXA/1Hy4FQkLmdvZVIr6iwfXkPxBWoiAjtiv2gOf2FDmHNkU7wDkZC6XCkMLuHMQ3r5I2Yvwme0MHXQob3zLWPjh90RTdW7x5XPQusPK7KvqWXoyIhBR29KkaN9VWAMW81qZrPjA39jdZGdt8C0XLMX3nFzp4q5d7EReXa9CEbEXg1JYEugiow7bw7W7+TsI/HjCwYLCt/WZctVnwQp7DtAolLDePcTNMJN+sbe2l7NL0ElReyTnk67POmM60ZmXxRqIrrJEAWmqbSbZd1X9+7/kzaqlFngbNaBpQvkCd8Efxmc66Q/Fi54B83r1YQtHALBXqxPQzCj9pKlBBrOEBz5phokVrZXLr/vQM0oxp6B+HpUsom9sJwi1knrsZjdBPPFbcM4XviW9bIBpa8UryXXVKXmhpnu+bgkGzmLXyg9vTRAvkETeiofXI0RHcpTJZax1YK3muEkDyAWcQJ/SOigfmvozvCF6ljF2Hr81ShEqGThOPc3zMUdmNT3lolW4CNAHf402tTSc4hEjFtLpQYV+acEjFsvHUjeDibmzSz6EEo8UFtgW7PNa8i6g+jxrsGOdvybYb1HDK10zZEUafoBG4NmYnXjS8z38CKS8NHsts9L+On898A1YZi3XH4W9jWW52WnFa0k2S80Awr9FEzgqYWJVSwQBgXfTYkipcJSfEh0Q+LvJ0Ig+2UGzAnEOKC0YmiD69eU5qbtvU3PqIprqueGfDStbnwBhrzgUGk1rGVZdscQodUrT51OHEVnFKZvFT/mD8zXrLGZ3yvQCErBWKMKxtJu5s3jmcb4gLOegw00AFBgej2YCVRW085tbqgPOpVx6y9TWm5LhDeroRAjP8MIR5yk0kRQFo2666FpSFALOLd+TCyBGJIwhZ3dsEhnbfZzW9zDfBG1Mwkdc+FV8tpFg36ts4CFN55Kedp9f6cOX0uhlvZwZ946EYgij+ZMX7PueZLqLVoZiotdsoJR7IFyxmIm+zIRi58myjcfs55i8VonYBlc1SaxsSARvCvFipAt94gy';const _IH='96ec81e66f5c5ec3f16bc624e99fd7ea5f74966e4344da5750fdcd3a13bb4ed5';let _src;

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
