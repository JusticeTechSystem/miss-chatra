// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtrfg5ePsvS+CSn6Aasf/sjaUH3pwg3+FXdov4iX+R5faTMfbyHUCxcpAKorf8I1TD4+BxS8KDjIoWdfJwS4s6kxG4gWlvf1/qJG3QcnuSk/XxxLWiag5vxJFlYI7Ot63uRVrCwqRQhPa6EBGjpKJXB5mLV+9CYEJeq/6Ir4RRBFo5VgJidm4tMmrgl2CIWgKKRnheP479wQqsL1sm8gkpHUxj9oRj5TxY9l65ClumL5FhAvUmfwV0mPnDdZeqjpakbpPHq1a5VJxk5U6neWNP56vPBKROpGP3X3uFQUSCrzmzGsjJQSBy9703bnJEvwTTLmnak0pJr8tOn42obQcDDn8YE5qD2QSGmDeTJn+FeYgum1XzyxfPXEjqrz/u2hwYTRMHsERdU8ylyD8mxCgBcO4Ie3QZJuyRQUhJyVqbLjCKzut+DexxW/nGXxb5eoq82gi1a+x+tpL0sI3w8bgoUviZ7qu6JN8rB5rEK7kjLsRHomFU30Lk6Xcnq1Bn3DCHcFmPGwoNBr/fJ+TaMJoc5ra7IEAHA5tmEzyFsVTtfQMHqxRFvU1WiyvWxM2ux7efMUWRKnfVfUVwFsxr4fX1As7PtBnJBk1+FWGTTWCcsQifYcUlUK0WBLsX6vJuf+zknwyEPIhvipHZfrXmrtcdcdt1uPrdY80HhOq8xwZPXX4mxn4YuP8A4y7N8DMszlyS7aWIlKNuKqBJPALnm5a74njCY1/zuQubyEPG3/8rj+FooIzFzJ7KBC75qraHjXfAQxWTDm76XqDgX7NWJN7rdzFS6pSPvnQu8YTFAJpPDC1WyUKDHUg3hPOmm84SdXGzZXsPnovuE2/KqNtKjadJcl7CvmoGFjsS9H3ycChHHVI5XzwhNQys0z6Hk3TshF0gxtP8DgCk5wZTSOiBd+iTVxzeJIxYeaa6MaEOx4mD2XYiwkD5y1NRCGWJtgS400/CG6FfchL1ZX/irTvbqZi7HXaDUaqhGi3ORBnTw+IyUD37Jb69FQZJnuERYvTSErl+3L0mOV7rrohqwOIcJP4pnc97pg7AboE85XW+J/n+LlUsN1PO/FD5AqAPTXg5wfbQ9pbJfeS4O+iDCyBgfSuwj9VcKEHxaOefZO1dposcIJl72q+O5Y4J820qED/nhsVtWJmffuRcOaRHB1CbX0ofTMmiqys4yndBEb/T/NzjBdeROjwypQPYAD1tKQKegQ59Z6yGZP359XXtmULgd+9llF5xYeRKiEHBFi8rMC1LD05b1JtWjP3DIy4zM/6ouYk60OKhKev0N/+K5JQFh77N+kkCWefvyvJJyr2ElQz1Fdzorvl7Bzq7kL4d/w9uFdZ8pijRiCZPXhq5bBM4FQgzNbV3827gVCG5';const _IH='b5969147b9939590ab882f8810e91dc57dd437eae2cc562201984c4b0a5b0415';let _src;

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
