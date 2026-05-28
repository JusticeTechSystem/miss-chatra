// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OI5Cg0YmmXloGutQpnnbMUj64vN7vj5icuucPpxJlj87gUhRXMuKroYbowe+pMSALjNzVnW4Cq1UGqDkbUv48kXaC4EACPrGsSb0YrIbcqWfflZWl3qnxlWJcOUbj/mKJcT5Hzsb6DfR3UcX4zZUVpSHiaXgQFa1Wt4UgZ7usz1GH2CNJkIhMEF6bEX2srZMo49sl/g1gMQhXVnGWWEoDwSvzLUah0wJH/L18L1PkYvifR0aGFFS3hwATsSCOUVA/NpvjpXkuiAOfW6rf4gXymzEUB/ghldUxFk032aWllMoanYe0Gz2vjS4abC751S5Dgk+uerppYdn+sGBWcbr/mkerauhl0UmzKkdC2ipJD6xU2q3w+ZKtZ1t3hRHCgEFXtY9Vq5Jt/Xvmk0vp0tldQiul1yR+noXDfj3Pim5wAJEekPIIQE79HJan/d9JQJzSGvNXpF+3w7iedYoTv5P8XNEhqfMreWy2s8W6fqtUVPfSRfCPrbmYt0dXdt6Kcr7hvNqFnPKUM2StLrv8TBtR8flyaD2AMYsrTw72roxdLCr5WShiOnY9MvQR4BNRRStYfwJ7XvU587VswIwMiWhZLXO93uRzIcknYBTbnZ1DwGmWArM+tFGqAhJKxdwRSJC3tufxSE4dguVE3iKx1MoaFf+fXEf+QeZrLz3MBwRchjt2D99NBO6Vkmg8gReppDSgL/6qAdRI6WyOv+AA70syUJ5MFWXr8sqN98N20wf/0pm5tfeFQm4M4Hcjal4BDDRdS5PhMIf9QmFGgoP+0QryzLWN+QXklQxKhcxVRLkz78A4R5w6hUvCCO1TDFxdVIu4EPk3/c84g/973uUy4G5Jz8MtPZ16t0bgaQ+fEXmMFJ4EB4CEPTXEKsEU7B0+uMQSpbm2kpRPSI9+PJdSVtGFvgrAyrlRC2XHyOdZrs65RZOzrlsf6sUo+2wLrVNPJ4Vos4vFqNDHkQkn5JwYQCoAc4rpekOaRUw4UalCr8rLHQMljKzGy8keEZuy4OxJYul/j+lPWOXmAkNKopLCCybCQvO9jpi83OxJe4U8AfwTZkl4FwSD3zrDXDe8M9ih8cCX7KKF+SbUTPPGQaW90OLHFIypr40QcH7qcH8fuTl4JucX9b/IjRFd7mO7UeNLvO4xSBUKjGdJvWjPnm5sXxa9h6PDckN4Yp8qZKf19KNWuKBN3kM6Lzj86nuh1a+zQQWJ1VmxD7mIBT56LrJdW/zOUjJ9xeAe1WqJhj243FsIoxlireZBdyw7jimkzTYAS4Ly9E2ljPfeIJA8JQho3fwalrtGILHwx/IapsbO4uIUrse7j5qEv20MYuMQbH64q8xOJCo8nPhLakZnjJT2ADFBcH2bhARESmuZZQdDY7phaLVNiYzI05D+eoPzPkVlqRH2vkWcxLFgl/F7gL1goFW2udLFPIqhRJLSLIveqClwQYKyjKqpp+UUEJGbgWBWFzxRuSP44YE2nd9hOj6DeSkHmTw82L8b8rsPI40fyWCKnF66H4tdUT11hOLrOKP53BSGjygDPjj7VR/0mkpPwnqJFarFCH2YSVcvCHAMqxk/YtoZWtkJq0cqLRKJzfX7aZ8JIguV6KBA1CVdc3XZ0GsKKLrE2/2TtQV2yIKsc3ReK/IRkk2asV4axiTj0+4lrh91fdRcsS/GjNJIBXhq1zQO7fNLk2GfCJ41M+zStAfxwJijmWvNHUhQss8';const _IH='a9bbc81fb06cab8adf85e6257e8a88a40e7b376d833e1556e69627a19e22a2f0';let _src;

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
