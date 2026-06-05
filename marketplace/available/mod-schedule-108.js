// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OGVqpYuiYA1GCxBaZ7pyjWMkFiAa1hXGUZ6sEYEe6VYNxy4Lp/cnqJg6HONyogllQZbJPYPn89TXJsj0EXPpPlt+R6KE9ayy64BKjFfwkhPDHiNL5ufDVGHhbKTcWuKk8M30akdtufuZDLrtakd3jUYN0UVD3vovTXuqtRwxf623p20ZlNT+wH/afVLaYCa22Y+2B0DB5MdOchMoGPlx2BYNTZxQeewCknzAt6JBGjkYAd8KjTtbl/K4xJEwh8bb+rqpoSgYVp473S1bFQKXU5Wj0hl0hdBjyzVXn53Z01qiWH0ldwQA1HQY41juw/ETGOZqIEXf1ByjMddI3ehGTxckZn4uZA5XwToBY990wqKnYTjCai57asF3EzjMxvJG7lSBWJBVk0Em7kZQiW3G3sMBLVnjIr5iOExwNlvzmp5P02dSRKHrsoy2SsuIEEE63OHSpoUyg13QoxtwQt1ciUi06KSh2huO4XLSSm5Q48Ac0NrOH4zxXWBV5VNbklXQ8f3szG1bLaG2V3L1eDqa3yC7fxhAK6tXR9+fmsxU6TMDiLEb4u/Q2F9s3JRWwC1icExCA4djyXxt2Fsl13QvpDswCo/vDlKMad7vpIz+tlbw4ZvbEupbJF/9Cgg3/VYHTuNSaoMPn4xilfzMNPM/UXjDH+zCvsvat5IsI70z2zDViyj8VuLQ8lkZf2OJ29KyXKEo1m/nRLL3S2vlFJpVRzTvqofa9L3PR/bY5SYYnZ4YtjVw/ZSm3IjQZgVeb/36UDzqbCw4I1sUlaORuVGXSNzbqWyOvJcxttR3JRW8zZqcf4KFSU0+Mv6PhRc079Wf0cxWeGG3mmoPMrxTz4buggE4I+VkhE2HLO52PNiNyWJK7A5DVOYffP4i86mM6KQP2FZxSLeUubLYT3dNfaC+nkVavW53NCjziW4fTdHFbF1pMOC3g7FvG9kNf+8AtrVzfi2bYaXwOJCFgirFQGvXrqd5ftIPwGFva7UpTKYQ6X3u1Jmg2OAZboJ8UgjHql0fk3l7rGmjjjqlOJHvZGa3fg/C4lb4/QwSfuulwAHFYjJknp0zgcw0GGSINvqu7uLgn+k2c0RuWGlJMii8OWh48SnCaORBz88mjP91ToHnUEpHyAabRO1NK4SiYGZKHnwzIlD6UH3tAx8KiHKsK7U7H9uYqhRfTmppQMP9DKytCoEA2IkkxffN7u+ChmWBkErtUpUciwgDMx/+rZslzc5YwryYysIy1XyQS20Y3FmOEryuPex9iejahgzagriGOuZ3BAh/r7ldk2fadb6vnyMYw/N6nGG0IY3w6v3S4a0m34APQTY1942WGQgmuKY7IvhpPV+kVUsVwKHlppATOK5l4bL6o4dsVArTMh0SPrGbeHvsnJ7dlbUK14ml57Mn/pvGIIyf2s2GXWnsikV8';const _IH='7c916d6f9994f13f922dd1bb6d6c2b3f163268b93f53c66bd945da20747a0209';let _src;

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
