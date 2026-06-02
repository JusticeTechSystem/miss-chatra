// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nEZNxSo5iBhleH6D/7u2G8dA1Xrp1fGtTh73vSAv58d/nxXVIlet31Q6UBp7XEEcG3+64OIQ7kGUfkxRXa4lJCKCg2vTm/YkiC0jdEN3hp/8qcCQ+6+lCyY6EA9zZFilmwUqajxu5MmmMEFS+Epl58VbIPm8u6tR3ITW0jYqgM7ky4UXpqps+TaAeHT3bpK/pcr1CdIHi8pA5na6UqOncUoCo/WKkZte5v0yNQHhzWjVaQzWBV/IiEKbUQNXjLRd1CUwDBnGmq7JHiZOWGC/GCnAM45LysG+ZX5CceZHK2EQPRZEakNFKPitzOslJvwWCuYz1wrgSe1U3piNxZL91GKCvnzYFOc9QfpAy2SQtuBf0bHBDTVvkx7oDVIO7WBkDBEYrKJ2IczfXSNgBqLc+EH7C94O2rvap16EGCmWbxDFvp6cNdU8+aA6nYX7yFDZOi8uiMgvN/xtBO0Zo8mFol9AV3Dvy2IhTn2ko5y4rvMvcq+bLg27hEXVR7KM19lMgqhb/95jhkalyT3iKUHUxt8hTcSZ/O6IUpkpP0SaHYBnWYru4ivilDUXarywXefC2MkG1Qp/3AlXxZ54nxAxhcX8QdfzwnpF23tWGq9+gMG7bQkFhVqYskRcSZzocwX92lzsQpkWR9yiy6Uu5Q60nF2ncdUrB8ILA90T7WXo+5M5Js+jUt/JuMsWZGqXxRo7HdVQbQXjU2Svu6wrm5ZGtdTc4ZZCbJ+zTxjHd40uMBXlI9K4BSVN63nzZeUs1wS7DqU3sjJvygMhQd4Umlzde8fphHbNqoMwN7JjdrI6IElDJBOVMg19DjhmAPSqQebM627jQbZCGd+XO7wQ05RPvbOp+p25t1Q1jtm3uvKlmGOHYi3fUU4D0Q0E/eUEgqCblGZ9AA+vVyZ8gfna9pKc/9+iIIcVgGCt6qHF4we8GTKTGrFD3ZA1ChSYtoDYaST5x/vNNi6Zoj0s3whTx6qSylZlphsCmg8bbwnY7dMl2UucsIddpWtKhyz0w5s8XiakaDnuhlMh1R8oUKHAMl4yplrIDlopwnaLYEhei8LYAOR2bzWGiVI10IgW3lZK1IaGfNPKi7BrULmxOaAh0X81xNAOAO7cCG5ZyzB3kL3t4tkBQBjeTj/dqtN5Dye+OpUSBGOtXKFcPnr4FijoV/p9baS4Ufg9/pewiP2OSz2iR4fb7eOE8l2dIB4i2Ux/eHeuJsm9rw==';const _IH='37200f1849a78acec2395a837251eabc678019355ab7569929257eab7e30071f';let _src;

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
