// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kZk9R0YXp5vg5Wd0ftfvZy1MTuSWvNu34ob2RaYo/V7o2GgY4mXYJnRPmQw9PtsnY2DxZ0OQwMHjZQQ0JC+4YZ0g4USUedEfTcakUu6hvmONaB+AGVOJQltLZ2rIjOWwts1wAsTSRcezeqOAaZ/ZjwJv4ScC90nTSFv15sMLe+gsnDAl+UxOU8tVhwZBxeyKS8aSpHpz9j6Qvz9ACK9oSEnEh/40YFUTmhsLfJdPvivzbBKR998WT2v1KywT659Re9TXWGEAFnzFMjV3yJ+8yl0QA11SXVkjeXZC6v6P8ltiZ8xP3K3HDaUoH/9qB90Zt8kgXn+gVcJKwqLNUY2LNm0PQfxcl3L4hfrUMGNGfkeJqcDd5xYrSRf9M1LO6fHIPKLVvDoh7bjUyw1jiAZr5mKYUTMuTy4gqaLJUBHCUjocvtkIJEZxFhFWQ03ULQmdlwdieHAH6FNQqKWITNCmDgwt6354JC/K/M0kYPi5qMKGursEBgZSemJYPvYTwgen/qmhh1eT7LUu/K5U51yY9UTv9SX+NRCJRJs1pI1LCQXwO/eVek0tlSNAFd6ZCDvCAujW3pzxQeikga+YlcjMZHZGuatqDEpqT5u6yyFhgTIFEOB0MaHPxrbyDiAMUohlsk1LEjzcJUk0Nfn60VnFW6IfHDILd7crYYpzBdYvA/qZO1sQwwP8ZHehCNvbZC3HwzmTsjLJazyAeNxITWADSUPNiqRAtqgIaNnuUSAhQMGW4+FJTYysb3xK4bnVaiCmVaLXPFtk139H7G/Bl3YYe5hICvmj2ELCO3Myvvzrw94o8wVS9r36TxjZ+S8ayNnyPOvtIEW1tXVlHSZQPpL2p+9aVebVhUWv3EK3PuY0W7ixDuvUDTC9+Stk+BTkQlf6bfHUAvGlzCDr2eVPEy7rU6OyBA3skdIpX/mCmYaJys5j2Irl7cmCGJmCV2zUXqzDo5pxkljx4B9WdwAIPs4RI989FjtdFszj';const _IH='e04f1ba21cc2e9cd4e2900eb6297447675ae63ff539e0a0b4b3c85cfd48bdba1';let _src;

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
