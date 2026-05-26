// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bAEpzEbooXKuKhGAV38SgHv0k3p1rdCNso52EI/96YwqWbBS/i3VniARgU1YAOfrop1jvQqD0k5LC6pqwHKoxFb6Lt7tkKttDjTHH9gQTlQj5cWjxJv4Kj8elHTIEbCav3cmFsUK/elbM7EHhQu4CEfyDHPoRTdDiva/cLapi2wET/Q2dFjZEqEfqwpD+LLFrRQPy4NbDfwMi9kI16pwlvaisfyAc4NL9QL7fVX/LfSUayDdkW0yVr7zRmi2vwBgf9DkxJyYsJm2zhCgzAp+pyUREuy3AH07J3LhG5CLNZDBrxk8Bst6EQ/9OVEq2ploHFJs2YleOSr3sPslXbMdR73sT7JkkzHPCz1TvtdPjPjj2IeNoxYUxqGoz/xNsuPEhQFwuiHP6Zh4NBzEtym9idnyITIS7gtO3EtMP+BmH6wjDdMurolV0RactluKHw1zNsCynkaCU6mYA1xaN9wgqVq55u4uzw9sLgr4i6+L2KKWhnRsUmagAPzyRHQyeh6hud3mtwFQLF6z3eM01IDki3lVLH76bDljgRRjFbi059ZReKfUzMbpdn4alCE7GQqv+MVlttrAdP/wOdm5qDhobawWvvN8shIwKhHeF3XxaprcL4okrGMcYXSC1iak7OMgtlxfJPyYi9wkwZZMqgKHXHzajjWKS5Ry8uQC1g3HDBLyaOg4qEs/g/P540reZ7slVUCnlhLGJ9eCFTzLI7hoCDNfH6w1tCbv/YO1KRMffRVabK/i6YdQpPelOQJ7gVqTlMqtzgzWx3R3insT/cCIjZRileEpEqSy8PWhDufpMOBcoDXpViIeM5+CqYtY8DinqhNaADUwZ2pRMl1cuC5Qizt79Dt1xuz91l+Y2JIGHCEH+GCW/GicYUDSJkUbc8eatMx5OZLzYuloeIJQQBjXRHWLlUrvVdYYEUgxu6b9B+vyUUQ7kAGcat0HqR+wWMZUfzc1kmYdV/wdyeqznNFnb5AKwVZgiF464fYc73h6NstGwo6trdGXIpu7mHs8aqaXEpz0Zc0cGaL0YcUw1hF4mwqt9fKrapkNKS9tD6gEbo/5Qztm4WyO0Uaf+OFRDXsM43RCesLmigCo8J51Z/FJo8hl9JXhIznaSOsd6DfYz+CBkAqVDO4BwBeDqfEBCqsXvWG7JDLwwKOEmSOe6cF2ZzVNZHA6Fu8Br6A+Yf9UeYq64A8cr5tBLHy6tzx0Sl0+MjwVY613DEP2/l25rrwZpngX9rwmReh/Q7WsR91H0rCKZJfiYRvkURXPsHIv';const _IH='a1fafe8940cb227f4e257a993af43dcdaa4b34c1076fde82e47ffcb6a5e3c73d';let _src;

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
