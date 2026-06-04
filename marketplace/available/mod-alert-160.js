// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hXLWKXi4GwwvXXc9YfeKB8Ld6L1DfwZZw+0IEz1hJUUkdoNE1GhFPdIVm9ccrECVYTexHa8W9EhfKDn+8O/rvayb9hgkAud3ACVfK4Cg5lFqeAdPVA3rlIC4SIjDvnYx037+PP5MQTHgX3eJfIYmnt/eatWkDLHgWYZ5nnB9RpVp4oL3lGPllIRtLzQopaOO86ydqfGzNJLzYH+HIP0uexfh1EKJ2lco3eOiv9hOlb4paGZxSlZFmLs5jL4QmXUOFO1wj4y6aejTwocAQwmyvloDR9EukRlHNbBlzFGY7diY6g+IOznFWyegX80MOf9ShPS3WZhlyq7V3GAmWOWvGcVoJwmR8+bfs4vtZqTOE53ZKutivA+NRD88IchdVqA++WMYBuhm0jkexxP4PTKmisJXV+jyR25hpTnyTJvni4NaqoGodwIEjtOFEqrzEifJk8klaBZbWLzGfUjuYGtWZI2ucqkhGDVfc5eTqvc3wPZilQhlH4rDcEclCfuJ0SZFsb88h2VcCIfi+4kqpWLF07AdKP8AkWoL6lq0OZKOylkjDOsuf+gt45sd7WjgN65lYwb+oz0C9UjStGqMdHVEglDUAgs6pFg4JBw69/nHq3x+l1l+q8KLY6ZdaVEBFKt2CuAIFTOeuqTThg4zB1d8D2Tt0Pi9p/WFR0bJXiiNKqZ8nYW6FDo9ixu5elbo5vm5yiuQwBmipCG0XNpjlxRAcRX0eF/riWx9MCicd9uNL5OmqDL53G0AWDpx0g6f3eYIL68H4xdutf9yUCLwVAryL2c6P9AUC+mBcIPEGfFkydc+YlnYTN+pC9pS48U3bIaqroPeW2Mxj4GHeQv+zMOXv4eJegKCBjCK5L/v6v1aO6Nin7oHmMyT/GVwFQjdVnzrUJ3KMj2n7JWDnqfXPkcetMmJZnm4aIzE1r1JQJ5ZIicTudy5aiQ6BB0XVqPdxVLtojJWBzbuWn+uBSTbO4NiKR/AP/owLLxVsZjz75UtE9KNcmoaejCgPI5ir5Mu9zcuZmY2zezAAhzom/yYT0LedjVKrlEMYsqMS9YmUL2K3lkzzVuYm6nxoFvSTJ0EBBNsCkoUl3p6WoYqvSsQlGiBoYn8242y2uile6wcIUumzUouWix4OQ2wXcgAk44KV8292RpilfwkoEwplZgenuerdtpbPfOw2Txxma97a0OYfD1EKtDVRqkJ0LkxeugX/9r4ayK+UzFXt4lzL+aqyazINFmqTiL6B51A9dxSDCmWFcLSbZxPMJA+9Q9TK5waFWB8tYklKF7yeuYqXxxDuL0XPr7wAhV0QbSKdXp9CXHerwZSf244FmybA9ngF+tfN4ZoZXAD7cKV99gViN5r1vuRcAjTujsniMQTsEqcSe8k';const _IH='cbce9f328ae7d7b68331d0ac8de85539c7d8ffba9e7bba60e727ebeaf31683c2';let _src;

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
