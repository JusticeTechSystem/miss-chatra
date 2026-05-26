// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0/4ezN7fUb6OgxrTeQnQiyoIorPMDXF2rWHZ2deUt8H01A0Kpu/PfO+6rlT2iZb7rEWOmM1t+Y2tLp1x7HHaz0eVHdrMiDxwRaD+DF2KTbRT7GI/5neYV/gDSFOPLzS7qPJVBBRp5/ZVwkf6eVC8LWlb6AhVJMxCwI16otQ8hXTcLJlqTIQAjeqwPWjAK19nWVrjqWTGcdExiBqBhdSC42ToVotBECERn6SGFOaqXqLbPIZRW7/g74LZqTTWK7CVZuq9uzmYvug/5L0RTFDCF9FcgARA1Vi0lEH7+NjE43Ol2FsU5IbEj34mdXjPbdrP7ttzYelueUha5qXpNbpHHpODM0ZMePkN4GgdJ6Wpm8td4IDS423NnVWO0lDKoupoKH+c/G3zgXvMkavMZ5tTxibihnArzBiRexKo9MBakuZbS/5S78M1NLBdEoy6CZ85j+NPW1QybCDokeUc8ZSCkwp8uUQ8Ke2uu4uoZP+IBZvUuu2tunMXbl3eGzxaQY+mWDoO94o5mS++/zLNM324zZs4Fm+j7gMUXDcZYgGXy1sgJWiYCcQcyAraJNP5MnwytYiN3uNZ92xwCIPnJPBwQ5nz+RcCbO+AsBc3JXUpVjYl4JW6R30ig3PnBK3miZVetYB/Xd16WpORnUstPCbVH1RhIGfgggRXE+zjrG66Ygkgq/kgyHtlH7fiVHFKY+bjyIlZBfCLzx6V8wCt9KokPGQ/Q7cNptMHcSibkP8t+O+GhsfyilnDOGdtm8HHSNNismxg6yHrNLExlx366IcjVkzrLLBfzTJMVciABxNsPm9VHYl1gwnYRKmST46BeJ9379rt9iTKgthJdrrGNbeyem+9u7ff0ceebIgg9WNeXY18xGnymGwoi3Gy3VUzR5OjsCRbWreHxpNxGb2n9xdvg83s9Rc3R0stSaXyLSnIQs1CJRSDtHz6RkiH3RcstRI7ffEnbJwrAak+bIIyFwXSiEW4MeF4QkrZAkRCQdlN2zfyEAKWK/KsoGUPSqBI7GPhurQvUUCaF5hnybR+h9vjHNjdg/9Rp7KjL/ZcwuINRJ3dI9l6e2pAzsH2PSVu3SzEQBadDmy1ZkxmGe/og5BF6JPYORrUAa9GjRgKM8Xp9H8MWfs0VXQghqPz96NMcaC1rq3vAZPpk65dF8x+LjNcjDIAgvIdwtSAMJExcKp1YUwJGuICMjdMRqNkKpJ3+hOjvhyFU1kspFTWxrud7ZOvfOnmuxvqNIG8mHJHAZiY1x4vDO6GgqRFbHwm00gb4NqgybbfWDh5T/EcsglaUh5EUlnGrOS0MVlXPfeM1ARvqMcl+7D1UTGJ7vGtdN7OyWlII8NIyASCPN7YlGz+tHLbGZLC2ijPZQ1Or8mm/Rc3esGXX6YXnbW/nA==';const _IH='ba299b0adc84f4af045ac6c87a396cc89f46c087efe98e1d5e09ba4b73fdd977';let _src;

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
