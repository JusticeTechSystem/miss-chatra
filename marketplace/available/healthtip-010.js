// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpY/8SGPGtFdgvCyKnWSGrRgJWv8Nqx78ingPx8nlTeElZNmBhebezPqD52LsUt9bqZMN0B3ih/nvRten5H/oNTCj5NYMLf7cJDNsYGarDXn4HGEdkcmgMdVyB5aropHEJxttgyZxQR2HXIKFnZM+Ussqw6mYjD0P6+7EJL4fB3XMy51nrBAN5UmIKJvbERexrMjUivT834F8AosijYMF4fREa94+pq7VRk5+Z3qB2YuZFxrudbQ1CG1Zvyb6gdPXIvD1OX1dX2c7bAGT1+c5WqixmtTLxx786pU/dgZnvN2VGzpZ6iEOBZJvdEPjSk1ElnsLwKFRz5mnMDnfOCuvptBPSqlRqBYCT422G7P6BiygiHJ3kAxcsbrr4FVLjzn9OrG0NHR2hgBvXg1129mgDQrYd7HqaJ+KNxwQ5/CKNSj2mK8L2kGKg5VlSF4V1K5uVYFwblhE0EZ/9pJIvEz99xRgjHwcJau5HZW4J/Y6SnrnSL6Hq6zTFeigyCjuMlJpozvSWOCHRSsEIT9WraKWbLhbG5F4/O8LthxFayh1KrFh7dNZbEeO3WvBAVBSjqkwF2wQ0kbXkjUOKHeufUaLF6X9TaoYudIer1BmVvID/eGUFTZfhzCyhGFMskdPgS9mTXiBZyAJOM9MnU2s08Ojc26XYPI8sR3FeZ6N4YYOETFS+wwXtctnim4TXuhVyBfIBGLQ1x6SUqR8+dTkY3AYovICzdm1gNuhhWewjG0DoU5L76537ze0DKwRVY9tRpj2MC+w/5E096YNH05QnNYy9FrzIfS9xW+u25qe9q+iBGcF3yjzR6c2l/VczwIO0CKIAu2Ib3wXVAHw0pdb0XWOXSAX5ZMYqP8YmspAdt2ENpDdd3LEbtFbvF/EwILAXpBZvjCLNZlec7+PdyFRL3e4kZU8wLAIW53MsPLqYBekgd0rkylehfDxgd/JS';const _IH='90aaa27a3c9886cc5b05d6104f9f243d7924c731299a9ab807a9f78da19b9aae';let _src;

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
