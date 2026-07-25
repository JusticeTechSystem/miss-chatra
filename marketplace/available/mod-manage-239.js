// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPvrF6drn7EIeuIeck4zRaGdbiVaXwtPp1kGtMb3Ywh9sA/SYpx5R9IL3dmBuEaIzZKaj7yPt5O2RiJpkUaDXe8pY3hzY2OGdJyJVrrAT9K8pu6T5PYMjiyU6//MKjZFvsrVMYB6X23NNoYm6vKnnN+mk1hFN4ZVWjtSe1t1LpjpTGMQhLcMiY52I69AYkYgy6x2VBkxin2SQKAj2KPmOc0uFmLz9U1HOJsd35qfEkgIZAEF86x46an0PS7OC+y+U3TQFo/FIOrU957O0YoR142mG8cFxrg+nrUKHvAWfJOlBP6JaXCAScvyvHd3zTCvz4f8NECzQPwQ4Efufwae8oPB9mO+PWqpGrT7CPm/5TSRvW9ZK9aM425tZ8fMpcrkR9PEFoH46SBmoR+GN5ryhdzbyH0dM9fKjI5ZLv0agSQwgQ8VRjXZnziZySXqxibgVkD7h/3+WgSiAYGfg+pHf1Z9KhoFAruqUnJrRSnHEzCSSdhwKNC/Z2uJHWYLTOS7WfXTjkt0G7WBSzoHxlw9DaCzvOwm4Nz9tYO+0IcUfrhd17EKTSF1F4CnO13xCkiohd3vsXSRGCx5l4EiF7lm4IBkITdPYHFJ8h4KLqI1mkwToLc+BQYcgkAejJon277Gq/dK3kfLoCEVL2szWsPYdzQq35D4ciFyNWZe2su7+ZJaqlCJni0YdBOGXnCwWSywasOfk8gVSIPXfiQmewvqSCiKYCAr0PnESLuQ/i6Df4nCq1d8Ol5HQMPdyFasRB3eLWyVZxhuLpZgRRfVmIdlPLDi1A9czNGXT/tbkkCbDc89beZS3ZyA5RvLcxGGR/5xj3nxd1RKpzQNLiCMLao2XU9hwZomVuA88f6nNE1Dbw52ownH7DK6yEtm0RG9c9PKegCDHxnQFMGOjN6hubUQys7s4941jsVOW8kPRQaQLPca5dh2CyIrSL5gXHcCMHWzG5gUwsWHBKXXzwVNDeK5Bux0tpTrJEdAvmw2OZ02Oo80tTYq5WOMg4WPgL/88C1k9EPD806UlwCW4o0x31qss1yXMVqCR6QGj+vilNCvvfcQ8MkEoWKJCT7K79cqGk7zFw83lr+KIg9dA/XOo8fx+OrsuyoBKjogIGV0mzWyrKVthODkdDgKYO8HLkU++cX2qeOB0HGJvKhCSc4YL8J2m09r7eSVdlhhH1sWSYXTIVAK3dkiZkrCLpHVs06tfhtFMn+AcujQTxeyxLCXn+E0BSAZGniW6YSH5pq6p70lPLc9Pmyre8o45Y3Txk3AUEPnMjWwA2mKOPYacIJxStFdYud2qOEQGAXjdKHPK41lFfOD1FpUBn9HlHdeYS2ZgTxX9CV0zryT6YSaVoTxuZYQWKEM/kyItE1dsTlPlnWLefdJjpChoivI/M';const _IH='68de1297e1d205f5e7f5f1416e6732c972215dc33831cfc127f5aa3ad7fdb75d';let _src;

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
