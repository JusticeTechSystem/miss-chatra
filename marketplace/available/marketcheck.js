// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tn6MmY1vz4yFhNN6IJBpJlnfrsaU20ivsUeuEYhv2O0dulUsHrW3/velDoQFeGAZ19hhoPShztlhszL45ko5eb13kuClj5acYMMiqc4T3XZ39s10g2CkwgGfqoYPgDYzCvBQAWpCZPTWe09s+V4QGO2nDS/PRdj3Syi0ZNo8VDgM5lxt9aoSfIbMhBglThZumHPZ1QmFvzZwQTds4NtkrXvpUan06s0k+lIzeqrkmliuYs2mgRWb27OJbFtN5FRrYvfHk2rYjI8Iedp4gI/KDKbJPAHq3mPbM17ZFTgt+t9qYRtS6cj6A6KgWRE/YMJWtggyzhne9QYkaG6rBiEiV7TfQckbfA11yhay/1meqa4/SoL19fucMJmgWLRl8v07kDfMZU1YJtzfQWOxu2uOpCH+x6H3qFmbzBqoFaC3Ae8+utQig+FepjM2KODTZIKtkYWLx/Hgaen8tyWOVeH3sbEJqMe6NWVh0EzcZsHgwYajo+sKHLvsRimJmcM1A9KHWYDVf1mE12sn6aopHMFpzuz4L3+qWT33hyOO4vCFIw6oGkr6lD5ie0wY06PZPWkY988MRIj+czMxo7hjgasyJmrtx6woq8yidWRB+HG/I5k2IHX5ioQL0AMbwJyHHmiQFdBH7w0u+UFINHnfP6j4CgVrDUJd587VIaGDLVJbwf9IEV9UV2frG1n3ZUPNOytxK3JVQvTaz6vbwUMS/JmWtM4gAsn+lxbF0iSjWnD0QNydNoJsw2HYihZ+5AGl+7AGkMGECSZrE8rTNlqZOwkgMODEYbjoWag0G6KmTnl2hW/MmU9uthmXq/CSN/zZ7N9tROSRZhPYISoKrMroHtyCYQ+q+tdvjDE4DAKu1gi7a4ycrIhPfNJ+lISN3jcYZs/1p5M3s6QKPud+GoMRC/LPDLPvueaRORq5SIU6ILdw0s3O5DYpZfHVHthCQj/4ad6IxXWBToCicw4PaHzUwLDKcZlEEQvKOs6WugcbVAe9QjIvaQGp/9mrhGbNEjRHbXVC2bET2ktVAps1263lKDw2PeW7J7bDVGVAm3eefHeYDc27UWBqVV8EJJRcby7/KIeBqefjK+4wpDXh9oxa4jtI0pQQ5feIVbAaa/v3mGTcWL7qUUCSp/8Hlf9/kVRQvelkTQTJSztYfzkEw8qhpiVX1RDYWzSgm5DW1Gz+fckTM1yTo+PcYTaZT6ZzffA5uApHdK89';const _IH='8a4d1bf7423b780e0987923c21f4ecd795a789bb0188ec7552aff5125ff9638e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
