// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ffd/yN4kwOPO/dLO7Zns5bo2Swr5wr9Krs/ivGA2dl/jmq6Llya1sizvm3I37AYQZiUz5qsrL13lkMzmbgTzk38nGLj8SPWwDvyS74r2R1ykcRWVNXKr1NhzINXGinnSNTaH2ALwDS0xWNsnESClAusXFNqBf54Ai6DKAPch9FtDsrnfP5rXyU44DQuDFYSNXztIyI9tVywaecd4/LGnXXAIq2Sz3g6FzmWLB1aSZ3Cn31otA9jERLipMMX8Q+U+TlFiM2YmiuGT90rGwWFkpdm7ayqzLN3i8jC0+pAIZumequapw6/ao8U3Ek9OceTWP3FN+BqdpukXmCoMRS8wzkYu5nj7VU/WwA98IbYOXFg77WAGI63vDBuAlcFVDkNOFASctqBx9WIc5zTjA+0Nl5RjqpoKVFe3vMjOMFYx1BgrLHIbMqNBswODHctFIYIw6VLHvX1a2IUmLwWFHX5wz+geo1C3jd3clCbrRDsF+4/HsnB6824+158dB+ff26m4ZGNa2V//1tO0FNwJ6lyI+pS42qgu6J9DlYs+K1tGpiq3YFzMlTam97Isp1UIEFqapsvG5adhy3vbht9zXCwNR807cYodFD3jZXxxskKMjkqWrQ69reMOaIcMB8Pa8eauXXjl25kUwTBBDVQzmeoYvYPK4ahazaGI5mCk9VEN6PaPeBuitwsBSWx1nGNDesBli/C4v3vsBh1rwAMKHf4TRzkNO+4uNIHel56uiZcX+sdqVtl0d3M9bnsfVYSX8umW+jpn1diqqqYk7W/pg7pN4iWTTGLk0B3+QoEXTZhA4obxPyZBybhDwUBHa019mTiFi9ja5VdRoAUnWrRdFW9KX4Xm+Skgfhxr7i7S61ZtXckXa6N2LhoDi4KPxITvR8IBa8E56bQT1VBE5X53zvI4FWwrpblbi/2UtDL9MZPDGXdRa9qYP9WsH47fGPR5XRz4mt9CsyX65+Tu48reYz7nBmhNEKatU+w/eINh7L4dpUyNSaX64PbY4b4iGmBchm6FXp10zmqzWQKdprHswYtnbFpFy55YCr5+ecJMQxs/rwwvH92CYyy7UzOjyMRrJwkDepsoVxa5ThKvX4zjgAKGP5WgP41bOuSX7nXIBqyhOfdLQGtqKu6FgJmDm4WAnrMz6hjBIyFGrNiUJoQUnzJrgbfBr+4ykWKGujN0+0chzr8mVF9yP81YhBJtgPNKDKy8IBLFaCxAbM5hQ1pD5FyGExu8JCTFKFDL6ap9Hk3Natu29pLyFbh75m+nmmCdfoiDh2SN40VQOO1BdjOxkF3IEBCaxwlpfZMCUv41SvgF2ReV6NRUsIx0fTB9ytDWuHnxOILtkiqWjCYa7Zgrkwl1QpLf39wx3Ayp5gd22Hb6slJipmk33mXoO4nOF0dNEFNkYW2a6/XdDXCMAqGzYcxK27gZc+3FBS69hVRFuB7u3v7CUWyqdPatgPxdrHosGuIJZSa54Wx9NsQa+ACSdmuZz5QKgjzFWewi05WBV2t0Es3SCTD8Ye/AP92etfFVeVbtMtDtVqCBLQfRwpneJZ1ImJBKcJ1Cnw8YZtwtGz0IWr5P0cqsTnPylfdKwOvpZZzgNcKgxWr2KW2acWJV8Kl0/eFtVwI9lHr12A==';const _IH='49dae593c7e7ad9f8b97e01bee5ba4e3f0be0ad31010b50a061e7da35b932fc9';let _src;

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
