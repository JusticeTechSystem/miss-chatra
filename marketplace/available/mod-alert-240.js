// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FDpdWj/u/nkmHD2eg97c4hSuiVcJcGZ7Gtcen2GuZ43y+HahYn5JvPFBVW2HGhWZtCF/QinKw1XrDAPNQ4dBxfn9Xd34CjkSDq36J9WyT2Qe7iWKUNZvDJr4DZD3I3c/IkSq0dBctObnXYpUL7RRuz7Eo/5BaVTJvKf535kGPen7Lqy2iLoxGFkhtgR0Q5cCZVks+a8SfQL17WAhziq6Z8CxfNVz5iWOM77JJ2aqNhi7K1rL9zUerjwixK6WdBPmyTDuoCwrHHuMSU73ugPUaMmqqkn3ldL/vmBe2LzRMFxj6OiWw9WNMvTdkftwsFrkYHOt32Lnw/2MjsjHeqpGC0Ahm+F5PuSsK1GjHaYXv7APiJQMCqnYOCI3B69YDJTRcpYziSQrQOGLPxy46jv6bMA6jtXZMFAb5exWj2FdvNeMi3N48TMbtpY/nUVn4GF/nk8lfw5mB+1cab4zSXfZfIltU0dFXCEYXrikiJyOVMD+twlHiOju9BkCHdm24wDPItntoVLUf8RrlCt82slZg+9R1oLAVHXie9YKBmkiNJo60FeBqO4s51cG0CF9eDtvXllR8EzWdptvxDc447YPsRn6wXklPDcdBocDOKqD+4Wi4cBdgyPwayBHH2xiMGqwGCz2ZnJCK1bz4KjOCKtckL00rb35L+uUtsm5e39pzDNSTEAEAWCLEok0tGXrQVPZESs4gDcjPaK/uvSlNszTO0sqfMkY8lc9L9zOS+/xvbmHIMPPCaZPWT6eEHJeyKUOzTtbj4L9JzKRIosXjBQ4xH7mzqFssFwFSF/BZSkbkSxUlGzZkRXiVuBtBFf/vrR+b/J7PK9q9gA6ngYPpw9gRyV4xnqvC66PlOqujpifhmHSyVxNwyYVz+dwiMHIni1RO/hSyPRsY3jvlbObB8PBNbCJaToiSJTCSKYFCbD6Ga5bZIdAY8EpOY6L/ECZsp4xbuuUBasKGzVjPqyN4/jxA/A3JszMgVcLfvHfRt4U/Z2L/3KApC7ldGal4VbB4rZofr778NCXSgRKtgjDpZ3E2hV7lW8ixE9ZUFG94+tId+XnJXNoNd3CQa7GaGzi5XP0sOphmllOt+23ZJHe9A3imbvH0JBkJy2835a5S5nqAUn+h5KjjWQ2mN1WaUJlCI5KSXQzYHBdt/V8t+npnpA9iWrz1KzYJ2j2UO5b94cXvh+Jb5FoV1qKSk43jBxUQcpyONyHwVnp0q8qSvzH5qRYHLR3rz1/PPnjI2AnxB14zuveJGGGP+pc1QWRd3B5NL9QzV7QR0fGzset3f/ftwVQsA5gFfm0Fr0+ySlVECEuqNUMHJK127FPUn+xpgo8HnKnKPWeC8jf3XJ/3L94gy3sPPCwdh7AQbqBe+3aTKg2';const _IH='fb370d7d6b45b256c88c3a1a17cfeebadd55fff79cae4b2e01822452af911c7a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
