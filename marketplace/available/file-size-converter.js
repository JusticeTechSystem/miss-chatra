// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INLl8eLo/4Ey4FWcpzrrfw1rCSUu12N344MPgreXCfdSWtJx8RNmtp2tipnqeioog+iI+n3yZ6P4Zz6KQZA/v1opJ+7cKjx/BYx61AvHyMRktLIsBkuyCXfE2/wfcosCCRetFyi3bDb6ODIii8TQbcqJqxet4tIoLgV9yV5bEa0G8p7Mbu4om2AEZuCRPg7s4gJ/gkwrZJDdxQpuDm1vNGLU5gwP0LGFMJPpvRjbBan/iiUqzfp+gVQxgaVn34VwDiosJzHOou/5J3no1U6W6FAG/Z6t12W7up0NZNXjC44YY42QKGmkLFNrH+9SjejkJX8FbtbLcjL3rTnmP/PsWYnaeMaPMnHsjLBHI58NljLWpJ9T8Qz9Pzd/4kESsAHIMPkSKZ3+7u5s4q69b0repQG0ayZit1ZSRnEseM+XFvSAhTomB8cBcvmi0Zfg/YyaoN9HBVZ1lQdikMQ55+draE7gi6KjWZf99sDsXrg2yE+g5zLpRsOE0dsXQOB+xSAln2OrC8clkYZORh6CeOo4zIKeYJazTzInn02a2Li6dnD1+6ec5RwZpmW+ltIRKP+B/j+ZUYHeeNhdRFs7Y2BXa/51AOT4OvabSjQvWbvcFFnhpysQdKEgWnt4Nbc4kNRWU4QwLoXbWJtgr+afLXKCrrt2Fkh+Fd6D9sVFFoRT/82CezWUIqxm6gtcVtj2J38VqDw3nIHdt+hYnAgHwbEHro1uBwlZ4x14LB+tBi8vgoAmzAwLJQLcWCgk+OhCbfxwR7BJI3dB9o6R3oSB5Rm4ZnmMlA/m9HgAvLMnAdK/xqJvocs1NXSzDQVbR/Dc8/xPIi9aty8eQnJv5D/1N/iRar2bok3Koqg5ifc2cQIT0/45RhyPRwdL/Y1SvqJ1h4Ol3cd7XBgcBsavkyrOyR/IsHhB0Lh97kHU7e+gNfh0e6NS/ZrS/5iyKanUNoKwuQWHL+ea0T+EvFK+2Lg2n/0hH8tTX/n8Em0RXs346GnT3VVYUPm5gu245oUBzhETD7MTf6uAjwDnLNhSYQYM/i2p/ZWMN538m7fBzJ3kldlIPinBqH1bz6++6kzoFIr+qzPIH17hLJCJ9wdDGZ93gFNfnGXsDpvJHzxHrWN5Pm171NGJHtDOD3gMilHp+ywglZoxYFNhUGoViehwnkrFYXAXT4kHLVAWlY/pPXofBHGWofe0COYVRlE5E9W8fXWLOmLYZx6xC4WhB2ndH1XeSxzNOujJgXtGYWk3EEPd8FKhBzuF8fj2GcbyyVLGfZ0juUXb+6Fen+Jb3qfgcNmF7gZYj5zuXvU+Uk2LNgvdOFJMlb1Pb4V1bS/b8CgqtFNz2VyH1d8SOUqa2NtZN+C1AS2h0xjvXFmqCi+b1uojCQJLfeGp5nK1sDVIXjUDgLT09I6SyLOFcHLKJ3atAq7CzDMTssgBtbpaj5L5IOZY0RVspB7K5laaxCKWojeXP8sod63SaoRq+t8QNnipVgpeiK2mN82AKrZz/oRAYn2rc/GwU28TcIRgesKzVIG4MEIaNjGB1JLwvGQRshYEm3SynjKFt5oH27NQj9gelJy1uDP/MZ27XR+Llg0WNpSq0I8Yxwbc7vJZzWKht6T1zOxKtaFczqDwhGHRvygUYpSB2rjgmJYRmcIR/EfKE+CFIGcUBjGyUF1pi+hX/z2vMkmhOHuyMfvkBMFLo89tKKi2Gq8wxhcXXT2BOto7xmIJzM7unm63ByA6V5GzGgNpDYzFnRoY1KtxqdkXuMJpLtaIyr2RoDhOXcM+0NlAahMLtRtdeT5nu1S4kq0lH1Pjhebn7frfLx4pEJaXTDRDNTa7infYaoMjcA==';const _IH='1ae3c1f9b496924d288b769d5d2ad0aad05817a5fb22229acdc63ff381e77c8a';let _src;

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
