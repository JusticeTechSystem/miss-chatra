// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkDE+NAZzEbeszBgJ4N2yMgGMk7pENpEmziTiwsdukSJVWZZ7f4fKXa+PG59+WwrZmT4UxNsTFfJaJQWu9armf3a1DtYyqVPkDkYchA3DjA8VHePCNVcQYgHwuq7VPjlKOAraqVKk0X7AMPW3RUHoxHjtaI6w+2OqnPGH0nAB5gm4IY9j1fDtkIvDSgcTtz/KDgPmankdKADX+kP3QoI0eggcdAVRpeIM1bSPciJ9eVDpokVQXotvRr74kz7vnuxyNxyLU0zUWK5yFY3daRsGuq9JhxlfQ1rKTck2CwJMUJ+hyvGaf6Cz0O1CUhwg8z37NWUMfSdeLGGuj8rV6hDyl2MqP8NBcRKb4bR103JoKkC2Q2Gthm+N3SiBXtvZY0ThneFOPuk4UwfsBtUG8eyEW793484dlxPh9tgOfAKLiFix7Ud4hPAZfSoQchQ7uBe4yeGiwtuYBtCuJ2oQ9cAusMcEkAEh0k200KBapJrllH/udInBLZMU7MbWGN81CGvoxo6RsqkJB9rdMM2FqZRCqMivZtaFoKOFYHY/IkOP5tYYDaER+wQ1IVUnUhzZZiwj71V0TIFBdaz0p2vt6GyOQDgDbZQCVwhPTQpKBAjT2W8OIxs0THtBX4O3pWyjS+nBKZil1IR7zKMEbmv/tGRr9M1wy6hBJ/XIJWU+pobTgFGWltyqpnZcqUOs11VnFmz1HPDONEFwJ8FG1sH+iyIi7U3GSnUlthK3gJzDrM08wIXkLJOSGqoh+ygI=';const _IH='f81c9442fba388cbd6170a1c3712dc154067b43f2e8aa871fd71eaf452885d72';let _src;

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
