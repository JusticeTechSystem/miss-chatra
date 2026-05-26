// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pIpKUzb/+Bn9LEpJUNf0ONqaKgXJ+K5XYSjoRmm7wnwlqVmSQsauPW0LjgMee5V/uEf91luOtO1ZJ/aRYZPVnXqTsb8tUmDBn/Iku1/QFDO4iM2Ds7KjvmH3nf0Txrw4hqUnClM/d8DTbdDJk7b8+XGWHVqgpvB2U6WlNmkkbmcfQ2mz182HyZzgRXWeDKkNm5s02VVQVbuU60TI6apzZ9tppLReDkNBbPKtgM2IlwaoDXCoGhmR78ssiMHsI61KMM9swjAh5eA2jQQvMeQ5FDl7aoLq20wbccrtc+z7vB6eVujcJguvX2s3aKkuhCXk68gHPkWfZ6f4fcP6rdS1lX7JJovQcnNrN2M3kjuNmIU3YKrPJk5yialzeK6emveoHvkeNgkwzM18wnEYCQQ+KZwukNJ1Z784w4z4R+fpKKLRS/vfYp5piiqLUChveZYaGRq7lFVOa4WkPO8+RzAZvai1hs6luV+xXTVwOQQhAtO0Geufyh1x+cTe7X/9OgCzhtQcXFhgDQYVf61ODLGIHYUVhYNE6+8othV8uvQBDLni/84zFQUxy2EizxS0HXGwnur6ceLhGMro9J40QGpFRwar2JoflN79/5aNy7EYdpTcpJFbGJcQeBDrdNpGWmcvN0oCGU64B8hl9P6ymbZuwbpj8jBvrj480pZNBHVPL+EZ2RW87YEjjZQkdPEPvJkfhUU4Gux1EUCoBxpXZL2CsoJ+iVlk1XuwOUl9z7ejbRt6yss+GlwgqqrXXjhWn3mZpNxBtnzUBLnQVZ3485KDUOuz3Ox6CR5c9vkXOgAroK77BueLKsRFLzaAqR39HvH4lMCJ7KlZiGNQy+Rx3NIoBQelXcHt3sYluwvyowvhB+wi4UIkFfq9kKNB6mF64ozecDcvWexyTmaeYhABh7mvfFsp8GVhTvckBsV+M2yt6CfZMjnreFqGjayuVt8/MR3GgHkAixlfSGzGthfefWVfUpVaqnlulmtFlScftAalOtySdAvWr2hzEmIygs0qx9nZSHMLfb5ws3EaeuH2wXOZB0Cz/JDUinffcg/HWtYNDWxB9vuHRtemMooGyF7hTYGzBIvPGdGGqAzYNDg=';const _IH='a5da889dacf0c71abfb75f1075161d8ddcb493993da284cb597382d0bde66c0d';let _src;

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
