// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Fk2vew63WPUVeGT5F9dPV1Q54Buy4KUQZAAjFGDVVS3saD+sXvb9N2PUQVQkcpqBYDVYxd6meYwhAkc0GfZOzJZUTbxlwrDs6MQL+yRYsAawHxqfVFjeRoIFCb8zFxksp81kKpwgQBZXoapcjMwrLhiLYqusP8RoAZN/pqV6iyrA5TApKsYBORAIK8qS8xWTeyZKSFKDSIWgOsHIvo+UfndRVUEJD9U9mWdb++vV9VzdDPZQ1QHqR74hEJn/5dX0bHiYgeatsb49oAqM5GsqUnYgFfZUMWS9upRKmfISQhQuqg4CQRDyo2xznXyySRW7/OvEdWKH7oeE/NrNDRrGdl8wHndnc0UHJUbk2uNXr4NkalqME32wqA7EU+FPrWE/xfozrBmYHzAL2S5u8YFDu9MX9TBtq2cLLzl4+2Kxxkb3Xy9pwZI0DNKiXjBrrx4AKs8j+A5jMHYI7jRkUM7dVdzMa7YrUy1WJWB6jQLedyTME85nm7v20+wAP4wClpXJCi4hMiayIvxiaafMaA60RMdCeqitZJpbRQas6f2T7SEXlDCxkubIocn2x/8g+FVm2DW9vnQwfMSXI6pcCXAG87z1BdeA7M/9NSQ0ycktPbFBXoTdXCndOXKgLZvPPGbtDqpHav1m+Et+V/aVqOdY83kE8ebD/OZZppFCQudCPwLp/GNP0FH/GFPpvDgRJXXLrFKWPYS589ZfqdemRojxXFQO00ATeD2Jt9uPzC776FnLEs2lTKImju0g1UWKNbglp9bdU8vL736i8e2BkFogcQ1RLJ2HdwlYmfe11b/FY/rXJE+LYTN8zjtEKoBApcAWFE3RcwrGMn2KMi+bZD5M/fCn9USBQQqd97aHg6fKicz4t5R3xJDVyHaI87fv8SrmNUF/XVVAekylaZcPbFQQo8pie/NTIX/DggOXuFRS0ChnaQKurITK3zBc9aAqTU4+n7iviZEZ8cnIWPEzZ8Uc4Ds5QbuUJhNS6bbLswJx5yJwhJ5xwnlnp8PM7DnG3jxZyoAbHZELNgShp2gH8of3l04KhNjYjv7qYeCyzPpHb1cfyPg/TtLlzqFUPnYyMgfvG1a94TCBv1Z05TlUCMxRpjlBBpuwh2p7swdm9GKFVX4YABUjhyS8z4UBll3M1ylqPdabf30a++uz3heMjSa6tLkBQUavjQQXlL/PLeGulrlU6Zi4ufO5GGawzVy0zuSyi+i/5ywAdp1+mwQNfGHCTHuV3W/8bfoxQ/p0TVkl1u1RUAW7y+WR004MR15d3KjyPVZT26DoNn9kFJIhneBi7bwHd45jFYY8U9uW/ouzlmTGr45PQeq/huGC5ay6wNOOhQZVYItcXYjKLAAJAmZ1RbIrd0XTEctkfv6XswT+f+IA+8XU3lvwftOUaYFC+N8Dqua7TUrlM/XXx5LMQ/2JyAzVmzl7XeAALfIYu99rOQTN9tScvVsnshKkdYMZqVIy7+wuRLfNX4yUn2jnajV05s4WNZ9eVU6vRNqxRBhVw6vSC4NAZh5ZpD5XNxyFJlMuH1qbOSJgCHcZW2npXxzr6ZHwrxDzKESr0as2ar8jgVBds0hyOoDA4ve370RhzMEkxKKNGs6bS3be/IdSoMnSkzARIcZH8mrhf9uQ4+TLfDKG4ljDP/M5HWKU2+ZlTd9HWMGh/Op';const _IH='d068000a43857378e3d05a217b6eeb518cee152b4191df5256dc94b955177251';let _src;

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
