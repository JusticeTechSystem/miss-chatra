// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YC1N2L30PhA/tAgYgpXRej0Ix9Bm7S3f7+2X4klKLLlBCrOdhM3VhnQJTnTk4v4K4JyYEtzRmToFwEZY0ZoMW/zyMAjeMoaFaxysA+3b5VOi7ZlNGsnv+y6D8PgbkSKlKk2jfBWlfJtfp0zRSi/5mMqBr9zlOIR1mV5SpNun/Z0f2fH8NxBQ0VWf/m+GOsiH3z1Wy9biqlkGT8q+wzmpV99CS52w/9p9NLfrxXS8RdQlqPnYb2O02UKNVmsJd+5aH0yhoO9vCR/SFO9jWWvQ90k4tVtoMrE9WL0UB3hVUZUrvUpm1KqnEqz5MffOQAIPzhedbu//AqD0JqMrHnVNFWToe94gjhj7yOnOinDyMJU1Wqdf4vHUdWjruEitjQ7EqOJDDCDGQyPN1KdP9Wlr7ReTHwMQ6oFEUaEFAER/0vME6HwaSkwwJi+nPU7thNQ45PomL0G+taie5IZPyEc8yS/RKGTUjkdVtWBnuwsxKZS2r01hJ8h1/htYpXD7/xqkz3Yn780qj1MwrUSuOJM5vl8FIDJfmVTyFISS6Ces6dx1gdCVSwVYKxMCC8eZLmQK6qu16Zb7jAcgDGxHqQJux+tSqHzLqxAaRdAhGHC8UfEFHghg+mTx/5bZ3MDbTvb/6bTJaSII21bS1slR67ZhIddz7MLewhiQxZhQOtokBUGLDUA1IgJHxkJAtDWRr6iIfIaZ3CJdhZFLFCBj81lGEilAV0WlMfWjtooNkvbg6vnz//ZnSOCGWV1nEsFNsZQa9fyiXwNpmKzpM+yMLhIDd0YFe50Xv0OeDhOC67njv8yrdsJROP434BGscSZXlmX4INSksBF6JGcWDvs5xxM2chzSe+M0a/2ppfDOtVg4sCE98WJlUfNa1Sho+XeEvu/H0ysWq40gwk0gDVo4JgAfk+0oo9+gSrRDmiGD1gwGhEFZUZhS8d33Z3EH2y+Vm1FIW66HCU/CYgdk9L4E3+rAnTK9Q6DNf70H0aD2iPAPi6RKaUTkHsQpbUZPKb0Q4iY25TgJpAcw7R7Q3c7Ce7HhZc4JxP4ZEAbM8y3RuiycUoSlrMLAHucQCvfjpQKaDsLSFtJWewyx6HQrhGuKvnSpzH8AKCnABVAY5NOIh68pvSU4WrAuTV8p+r1c7lg0X2rUA3JykhezZmSMq+8xRj0Lh6tO8FBawHSClTKWbo29YpDSOg+S6ou3yJLRa3hU3jo=';const _IH='f27468ffbcb24e33e089d1e8b27a166224a6cc56affd930e9f4121b4698dcbbb';let _src;

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
