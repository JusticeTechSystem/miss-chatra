// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/n3Y0o2xmjhCj0ft6rODqGRMngL8DetLo5aqefeK+oguPzZwhWrdQ9zFTEpNc6y58eBlgT+beCg6BoOIu8XzQyN0+vWnJS+/snFlzU1sZd8cC+IZfCQ+XRbpXwr0qE4cpxuE41nTQfY4w6JepJcBpsvVjxN3BRKgRsUsoL4+BJmHw5+0CY84pN5p59kViSAbqwRCQ+qEswqwLBoVI7TeZebRPcWst6MY3WOr9m82eCgbnCNxAcQ5BbwdwyHiFardOxSobKIXGe6ipGYp5SG2k50uchQUdUbUY2WRpsIZHVAB+44121GPGFTYoeRsCL2oWWpgGFMR8ymp1JIEnlzdvOYO2qIFKyyfrFCGOa54k9lPh3muqOcK34HTofKhdkcLmlq6rmrGF5j/lk/87TsxzOu7qBNsruFY4NjBVQXDIGaQQDj1bv1beXouqBiLBWFh5l0WQaZHNMH4ZBaAr5LlXxJocJ4bkn4TTtcVrd0aqO2yI1vwJ7NAWubfY/9IdM+PxAvuqQivxw6RsUkC0NeLCChVujb2mgLzePjYuay3bED72iwX4eQhrNF3pTtJba9ZpmNcL2IKJ7W7rTLxfAL7WUCQ7Vniuy7aiuN2bO4Hq3iePwgdbRFqGWsFiPdX+XM7y7vUgebqp6LMOQebIyzmgoIo4JX4Sxp4tr4KJQF9FrVN/Drvg+RmlW9XZdSbSCLsfkkdH8GaP/VjvqdMww8fS0I0yyNy/n6ifpGIig9l3C/kQ6lm4CrBOj3RLTwHypltWCXQgaliCzUz7ujU9AicEBKTQIbRHO4IPwaOv/OexmfK0h7jxjCoYl9r1lQAHbmoXKZdRly5pACmglYgafehvwxZlY/+HqS7QbUQf4mqLcF6C5xpAuo1GlaR/XTERDiziqNVbymFeqqrGpQ0dqISbxsZNCaKM3VAb6+kIB1nrgKqotLaKktiye/mnuwPY+ebN6VjbjBQr+fHQxTGd5j6oqO+f7FZoFeqGc84L8Iog9vK0yTOzO8zU+3htBH0nazh53Oii2KaeZbrgmjwGxFzhB6gA==';const _IH='4ff22f3f704ecb886caea5d3d2d35a772263f4d677fd659fe7b1ac2a7b26cd95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
