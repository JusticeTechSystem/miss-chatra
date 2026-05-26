// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tjHxv+Q5WKFBFAcxCP/C4nxAiDIbLRcUVXEGpDcbYvF7IaoqEPrxjXIGawG80MCP/U3m1E7gnfKrAWrMXwtAfFG2b/BMfI0QgOgsub/C88Umqduvr5lKFlobaxgIJe9ysU29X8t2r8+huRp1BYVgFpQu8plr4ZanQGI6q/vUFZUTE5q+33c/TuQ4KDu59f+oRp+UEuGSxO38l0zF5/gbh43xGRjEVtVWFENX6enAiQ7pOZ0CihF0xX6SSCulaRMMzqzIRRhUVi5C9l1WBNmhFuddd6/fV4BF7z5RjpvtHRcEvmF4NiJJ5z6kqaRLyicBuO24DL34Gz1/WXos9/oWrCL2WqTfaOgCz5BIT1ybQJIXmOQvkWr+G7AuGJXwYRwPWg/zFYvDOUF/rq6AxKQOwi1D3GYe7R4PBQ8w2gVDh2BPl6GzNhF8dTTwk3/k50ks+rJrMSaatAYIzlsc7t+HEfk6bZNeADPw8nmkFiirFTK3NJEkSu6KuygWbo+uT1EVCJ+4yGmL/SQiPzg5/mFTcZP4dCejMrGX6w/WkPC0fsfI3eatG6/SIehuJyCKGuec1IsLX37aC5NmBOfo4PypQvqis2jXeE1V+Sr5y6MRN1tjjGur/TU/NrJHm9kBp6zTFh0c6mbFpi0WVrGKxQcL1cgroME081EGwTbOWGR6egpXsT/DTi9DPbrotAoumx5J73j066xJ7Vvvjlw6/ZS8jH0dZ2CmxsxVk5jws4ZfxyDSHpb/zQdf7qhbQBTBFTEcYQO7gJJL84rX1R3DP9jYvzwwv6WbaoXsnEOk5pA2z6eLO6ScabvqoZhVVK6TFhaOxqKRdj3oMSPhSpn7Ba+mT9SU+7rHy58rFsqwT/+zSjTxs4XSC1nQyO+WbZF9I3S+zs4xYpDbQ4zylAu6uJHX4Th14MvC6ab+Nc+90hj9QvInph+rbXTg6QxNaPH8UsL6uaYRxT1wuCUni2abrbcOvPkOAOnEeJRkwxgC+yU4dxUcpgQbz0cZ54gjAxc8bWkk9E99GhXwKUME0p9+GFtWXGQCbInQONkN4bQ0hhgK/6wYXx/rbeGsIMnWkkXrj2DJSYAKG8pv4aWe9aosZnbVfrFrMRjp3QifGzl8aEBbuFTN4kEBkvOKu+kmgJPZzC2uXcSEPs9CzQ00I3dfYMcdYpIAU2v3+eehlaEVie5Qf6/w8zHcY58ujdOMgC5nmQJskNsDTfMeVjCz3Kk=';const _IH='874820d357bcf09b4065b59e29dfde1514eb79588861eaab02e7b653fd394a98';let _src;

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
