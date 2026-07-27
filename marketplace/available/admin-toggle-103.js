// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7O5zJg/ytltwA7vtRbYKg0gH1nb9V5WzX0EeP1ww4QZhyFAMXMZ6nZNsebOsZ6ltVFSuTM6wi6l0hbbVUwRh4dyWksqg6fi9RPZr6IFecqtuqGQHeAPgvXiRsOEl7bXWzTiN2Dqtq65cp9QSS765ZOUdE7yaeh/BraHUeZTOmL3bdorPZBOY3zBx8ZjQ7VbajreIcwEU3GMmqh9nwyMsmNoBggAoyrzKA1QaMWpBpZ2kJVR8pUFNtyApb3AfJg0lyOOAnnsMAdXYRJVyV3k/kU++Pw+cxolobUkvgWyhuPO4oik7XkK5gMY+l5A8up+cx+KphPal9en3buTDZIsLVrYDRnas7D8ZAsDD2YMit/SNavicmtmDtdR23KaZUQPUxdERlMfH2kly4r1TEV3bQ0DiVL+UbRCW2OqR5yvGTWp3p75d/693plprC3nDSoPCSw0TEha+KieOKzoy/heWW/sovGK/s6SuQre1Lw4rMA2936uBaFIpgrGAfCpTIrfXA3XnFNLKJ0OTMkOx8felllxwO8CCv+XrwSU9JPuOdUg7v4Ze+OQC21CP8XixCneFq3Csu8psULQNffeds7x7YU8lW8zOtNWMOoYGC8KynUKZ3PpXtnzhzugD0YKkbY6dmpFsqbjevIZ66bL140gfwgAbnAL5m8N11nUj5l85GBH0Y6dblodvhpRoQpmdl79vYwmQyS5oOYtPUCbWtEfBB3kWPJLMThvsFr9j1PeWg5DrTVXP3PoTKKwM17V0k+uYjCt5Pwl5VqO13XrGi5A3gWx5X0dq2yjGL0B0dtQMW5madtVNX6FFOuP23N5uJeagDICNZ81AwU4qClGFWY9i/8tPUlV/Hg85ZzCH+A6ysydCscQ2IXkGwsPLtNWxqvjIHj2QN3SGxNIGXPw8cd4UX+K3J2vkk9gBswtdC96ip8L6t7UhUkhhQGtcJKCDrVWCl/9vF8TU1f9FPqPKI7mc/8A075zPAabNXVDm2SFRslH+vAeUMtwAror6xpm3gXPxS';const _IH='48b80c0e26f92194555c677fbabec750b09be58e4b81084b7185e03250031b34';let _src;

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
