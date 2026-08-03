// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGoIZf9z+kxtkN3lMsqLSOG1KSTXzCDi9GJ9ffU/0kXhdmsCPeDT1bc6ecMb6yfiurdQk5Csz5R2LA6LLi/ruhgqY19FGMXNYLYkaLd9I5FptHxPbndtTEa4fE0CuTzfX0JN3SRhoIcn5UkJC493AsMhbJqLWN38v68YRQoho4Aohx0Xu2XHPyGP2h6PrLnSM27wu4Md8TbcM+/aLIXg+IATn6A2HTydh53EyRcsZo9abtIj+hFhAVt7wvcMu9WYQ7rBTgPCyayIe9p423pfbCwv7VpH/iKA8iDht2yF6xr8tKp+2E1cNP4kCK5u5PGDZc0B5LAOmllmQpmt1oK0t/ogJubHxZ6z8ASaL8GXsYVmKY8UK4JVy1AqDLg+CDsQYCVU068tzlXDjkKWImFlRmzx7euFWBxliTtjvWGTM+UJYj+Y6kcP2jeOOmfxUJwYTLQuF6YcA8T1gcTMco4gnkDGFW/Dk6EY4usuXLiJADbTZoZPaCoIlOO76306FkUKYI47rHGN1gsUG2RWo93jU8/RXX4gZM1njjP2GNJF29ITR6K/Cw9Pz2WiZbV26pGwSQK5rVlP7kiMZzMECTsiSbGd9JTC1+8yWtNarPS9PQNRXAbYSNBXJXB0Bjm5CkPt/U2HQWZVNi7nf80quhhSdskyBcjC8=';const _IH='ddd0cf8b23f70d7a1bb393a934c61cf4706d237e5fe5bd5ebf05c6e3375a0e4b';let _src;

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
