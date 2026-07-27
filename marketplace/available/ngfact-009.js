// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNLhOA5JMsU+vcczlYiH3rCwFJL0s6YoPFA32hLsaOBzrXJ2M6U8mAgao5nHNsrxrop5MiyWLc69Ky7AiRirIM1aipShnIfv8jtQfrW3AcV7nB3zOz1U0fTVb9L/8ZmBlx6uSzGB+L/ZTkiy9ln+kC1d172y7g8He1u2aI23c0dEwBBzHzQOZrQEz95Xu3UrHzocJ12fvpMYwRK1AsCN4sUytirSQkP5EHIycQqOXSW4lPEL5/Xd2yGFBnGqnTx4dIA3tdVG2MYozTZiVbzFpHIpbO+CEqRAxl+bFjYNAt2yPYcpB9Fbdqh6ceDsSXchHiChs8uOhexd9lnCsYAsi41kavdhNO9wPtEbs53kuMufWt3/vSU4Y0PK84wCDd0iEyNbcCLlxW3vZp7edT6GnoBv+oXVLEwYgXbrNOqTsmqfpc45LGimxTdz1xtRSkpI/jYg1nb0RdU745k8htOkv88PXMeSU1dsenqVUuh+LzoH4lHaDjCp3C92H83saH0ZtLapv2YGhqM5lqVSYBZ0sAXkFBKzKQpMTvKd/Ajoq0CwkijXjgsAGXY4z1WEtYD6x+0OnayWBIydVyLx7unp2PplOFMsZM6tA97F7AmASmltSHbljgoi9KR3fZJQjohOmYpjtaKpzxkChKM8jizgC6NtaXdfGcFVlnESGdMVvY+4QEe1bTAJJma2JQ/SqzdMk6nSJlVOgN2xG0gQ==';const _IH='30e5fd2ac4015364c4355a4380c6d634c234379c58d38b90cd85494e08c387bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
