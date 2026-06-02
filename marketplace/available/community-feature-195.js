// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYmh7r0+RuiyJsS1GyjNQfssuN4ltWOaLufaanQ/dl6S7pXjZzVzKFTEHnL9PN47LA9VAYjk5SUnz5dsvfNDwM73pBuF8unD6PiLzIy+GXeXFhx3fTzeugJFzu12NXuj2h2C+F6gBPB7iU+FvTwVRSsCgjCsSGfg4WBYXRA7xm+LSUxMcV9jeIZB3qvBuBUCJ4FYKiGC2w9UEFM4+PwPxqnT66UU1acBNSW3cg9GlqplP0EUr2Qhz64jxJyOXMqytw25jKfXsT99uhlEiNjjWS1cqY49jD/Rm+q5FD/Gf7a+Nu8FR/vB56sxjWd8oe7Eq/WV/bhiZA4cnTuktz9t7y9gVgwucPUozAuoSGOHyQsq0X4TXOl05oLwyrET0PHpCN5wjCCGOpL6ezzm1Q40ExW+ok0sUsBbsKHzEQOcdg3tlp1Z+BEJUJOjQm4OZ/4/owfAh46s84VDeFA1Ob835UgtlQuB7r2nnR5Q5EoNGIddqFhqvg3Jazvxr3+eKOLmGrac5QouIMVUoQ9uyPslvbVBFK8Xj+ZLxkza24mK3HztkVQ9xm++2qZBaMJMFP4AS6jmskBEI9SuRJKpZNMwb+IL4P9FI7Ahz15/DWMOEqvcwLwutVZ9NejSrDPP9iCgy0iyHkyrpE8AuSyIMfxss5YmOQwEPBPgT0APW4ltLblGjH8pl+RMdrLMMCflXl9C0/WnVYPbOLR+N832sPkLh+3RtFtCqK2kMo9fdb1RwPHGIcj5YLDtB0KO';const _IH='9af5a0f640eb88c8ebc3cba9fd1e0494f44e0552557cdbcc601e71c156b6b1ab';let _src;

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
