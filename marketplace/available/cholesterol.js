// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vemTp8Fi8eYI/lWwgMOrR9BH8y3dBH2i9q1lmYI2RdAp/pDISV4DDhThxD319En3rOGx8eRmd53QpyFaxPuf2mnyaaw1D3gkR46h4aLU1R1VO1RSZfCFdCsF+PotJQI6tuEnBObC1yUkRqjsjzHCWeKmk9uK4kel8FkWyg4K2zDbZv2zs2CvYVk802dU9oQX4e734DD5q4YYw/dkUyycpHzMyNknVaOlUQoMFOayaTE3oV8e2cxBYioDnJPBSIDlm0+GDru3IDzLWKxp2jpPf7sPcJ42cKY9BK1j5g1RF422CdOlR21es8tIA6Z8J3Q8LEAfJukpJsKLA5t3/W+MtFVkPJsT9cabvuEuRI6NIuJYUyGTbxQ9Y6kO0dTZNejPidGJssjRC75FPckNKzcb/FMD0uaKOIOBGvLHWQJEMOJ833+/t8L8Av57y9d9UvGvWYmx2OfRKe3bfLX0+lh0GZi2S/nR9zuyy5bGBPHbL0EXjqwOlMF25wWqiVU4DAMEMD6dVjYjvjqX04bWzmoT4Aq1UFPFFZVoI0nsJItHazF+XbiPFC1jhpP+ohq5rJTndtMCg8apzrKg7+nIdytYYRA9jo2vP7kGzmTQhdAcgxPRc+4lUxpjdZke2GiXBbTi5JToVe5MftMNvo9fZZDRMQ8z03AJPD0A8VXfEIF2p0MsF0QZxTyDiMMI8LRrp6XRCl5CSGLnrgdS9WivAfHIHCwf31y1r71z1R1eoJyKmAMAFIJsj8ck6XfcQsyIQhh4yXSBD6VIPf5rdLX7o+x9vUxclNsoSvX9IebGZwbzaMhhasIS6bAlt0Tv9ahLv02JJw1QfJ9KwHqtOxch+5BEUepbabcDHRFGM5zE2eVIykzxKbLaDcENkroS3zknKq8MG+shaohi02Nnp8YXx1GX+IYUOfeDIYDzKvXnxswk12j01fi+PWfoYgmbKfEKmY+T1b+icDhT4IkzNG7laIyS+OuOxnSHE601+Cud8LpkYxeCFtbLbwZl5lG2dq2svI+TPqmLE9Dn09r1/SrFQjOtQH2On/kB8Z0fXWNj4vnyzY6OCvCA2HSrXASJn2iRf/1oWbC0m5426P9EmzLtf7uNVHBYF8VrkNZ0YtSeDY2SANlJ46ceHyE2gHVWS6SaO3dSA3WdIhbvlJtSzF8lmL0xEn8T9wfHqymk7TdzrWuessbbh/nGKrvbCgdo0K3oMJrLvCZOvH+SgpYRXv8=';const _IH='59452c2879de1f0f951eb5843e7fe6b89fdaa8afc7b1553e5470dd30d2f04510';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
