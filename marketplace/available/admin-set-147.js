// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nM4eo7R2vUY7qxFB5R9VIt81v0U3ddfvUhBsozU0rlUqHxWCEvQGkr4F0/jgup5Q6AnzNGl8bQG/F6z44ELRnp5MiX+Zn1PM46M84HTQ/bpaX4JhfOWaKhrnMVQIAaYNrYMup73z1pqAzmXuzVSDy3gPguYW4pSNZKLdGbh0m85ujzcmI5C8dczaUK5w4YEe4bF2EsyL/2KlBlwP9xjORFoPhTLz2Wjti1ENO5B0kLlBLlljD/aMP8CaP7sEjO7hek+iOjOpJjrLXAhdz6VpATtmb2i+mRHhqN+wgbaTYju34cSvRsp4N7p1LY+4YCF9kK/VCgmxAPE4bsqz+lLTPAy8SqVPJgpHfRWhTXsL7HoHuNhrZ80HIsmlKxT2M3tGd4Vd9qcYCKeBrg9uPkY3lhhlGXXdel1aOoQBnAfU3LVVjhXao0NZ0s9Jmw7y6+Q2svTZTWR/2PbGP1edV1xBkGv8qlHSYBLt83Xra1hilbryVtg3TRTG4uBW3ottmN49WjZ5V/CTyZRglrFoLr1CjWFHza+8tPqzh+EXhmNsW+c2XHRZCVWTwC3EJ/1yWQLFbtjvOEr4f33GMxr8z/cxGErDzXclSdeYITtetLeREs+vFdurJvLIr9ZutAWeDnz4M6yDHTdAm0tPleI4F16QA4bchm5Fa/qh3TK/bSbInyM4YtlALFCoh4e6QZQUgc644wJUPSAHEtukExWI6pb71t60c2s+aMcFQTtG5McrAaFHhtHtHt1AWsqpu9cDbuhW8M+WE/5x4EIfix9FJCYuYDh6AXWhdYARfCiLnU7u7MBOilhhEe2LxoF5t7aj6A03XyY5weDnZb2HXoFPJljcpL4DIXZmwyur7zxBBUr/y4iCSQxnEN0clJjNUFILo1r1hWIuzUhlfeSWRBDyasnMgMneaN2/UCBCGWUvWPO4KehzxBm5DSMLtrEe8SubbXSsAGSFKubtGGq93h70WiuIMgcWyLmRlj8kuo9ttw==';const _IH='b0139b5a9d4783056c7a5907bddfa250effcf13dbc26d23c0b4eb8052c63d6d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
