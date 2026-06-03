// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+l+ek+seShzkT6P6KYRU6+pAB8SBX1Xy9UJ4hQoBVKxpHdMP7wQYXUpexABa1QGuyBaekWC9Dh2qiU502g7hgsEJHWovl9ftWYE8nxDrd0yEMYQRNwTkoTKNSQ99mY8/aBfCOiT1VjjYBje0/zQZLyad4v40SEm8HERIGCmx7mhKhe9AGhr3WlZoYWPuHq0jN0zoyINKZbdC53XHkxdgtnSn/l337q1Fgr9iUhVD/7jPlhf9VmgxcALVM8cf7okBnCqI/EUL+0naq8qEKC4b77gBAIe/24/R4If+RKokud+3EEHJFOazpgD3m+bEnK+7tuUzh+05jPQqOIR05Pg72JYHPKSIhbPTT6FOqO6Hl4m4CephjZjqF0leMRHifzwPsWEi5C+UzxnVy3JJWPdQi9UFwWwRwGlgKqhaULXRvTegAK+EJV//+gxTQqo0ovPiKnA1HXaMT/DgGzIZuw5oh6x7UfDnYALTPRe6xblbrXppUZl/oh+fTXUpiN95YoE12dCgDMCKvVhtQemz4u1XlxWC+TEOwgoj3798t9dLO4L6nbkcZTHzL1hHwT5F5f8dDSRT9oluoT1zmO/o25jAa+hz2toyqo2ZiY+EUtLwzK+NGrMRxuLHB6TgufG7cxWF03ZMaDVLQ/6wyWZOfEoTAVWZsCedlX/K3pffVsMfCfjSjMSfoV+62pg78sDFxpwMN3byVWJky9kT7rCjlUsTo/F8S9PWKIcEGuGEdvpLtAscvg==';const _IH='16eec7b7e35c7ab72f392dc3df03fd78ed619e47b014d84a401ba63d64c0c389';let _src;

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
