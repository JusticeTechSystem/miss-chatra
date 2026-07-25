// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgSuJ5j9vzw/8E0tFPPP6a+hsdQ7taQ9MdOZQnVmYjzgREVtvTVqoaTQtoXBjrnAK+qUI3pIWSrXZBvqI47Ox8fZZZWzPbpbjh6krtI9lzIfI3eakHS3PePo12qJuC/jYrE4gzMyqmBmGYoBLqWh53TBvzOWu3aNHCnMGf+v7dx1BiNqettqZxUXnuWptdZZgkyP4zRhRhKKz3cTQnf23DfB/rYfIn8ZgWJo+rIewoCGnwUHBrcEpR7Puui5fwjpSPt0LMbOr+SqxjkoLaTwWrWSNaWTVwyOTq6VW4SchT+DXVpijCVlXFUu0XY4OhS3+AsIbEH4jZu4EbIYnOYI/ctBn0ao6EKaizLY/6wbZTtwb0Tj3Y6xCddG1r5HU6kTdbc5m8nYD+dyrrik4PpYyIUBKP0Rilf13wMbdGGlNxHRWK1vIB3uqJ1Mpr9c3mRZiJjmv6g1jkP+Bc/Mh93XLWx0YdCSEctgBEZJaIiGSZPqFPj0sQAztc9pEeysHaQh76cep7tzShXKmYZDHsH+IJRblYEY3FigU0SD8fovxbmd5M/ibLhka+9lxRATV8nothEVD+xfoZOpAeL0JftYJ5DTFm+SeYuYr1HA2coFZqd9eRPzzqiv01XNOuAm1JFDZELMoTyxxJ3n2ZNmG9iAK1LxCH/pQnf3qJNR1fJAEddZvKCajuy/vplkchqXCI2pg2WeRnFv5mPALPqiktGUJXmiPobluQeczLlrSHO8iJNbXQ5w==';const _IH='e87489bf3168127dbfaf92c4deb6d7f9d83b5687a8b3b9703535b64188f202d6';let _src;

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
