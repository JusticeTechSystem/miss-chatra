// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jwf+6FwfNzgyZLkkMJVfyVxvrCYsBS3NU4M585wX17yh0GsBiZGJB1zZiKPE86oawHCL+530SIhjUMcrNJB5uwNqBzNS/u/BeELp0qBgzgMq1N1RTava+Cpm5M6qq1QUUaD1xwEZNoz18JjS+lkjZwRzbw30pUmahc8iUtEYJXwLu5nfopCuzVcqYSpE/7ICkZieJNZ62nyAGM4DzbNVhgXK5REW2RKWBqMSCWKGtg25uBsX1KwaiTROHvZ9fXKkZeyTy5WS+Oxw8ul6eihh3KC4ciNrxeLmwth9K0qTTkEaDdWa5PUu2WhyyfTdTG15kUmmS/WAzhiv9/IoRa1/MHUwzVylCbLMAaM/ON3O/wvm6kWa7RWgw4Q4DGxMFGaRlJ+PYvDmeOvmKMqK39Z58wsyYy2ymWyo/toj+iha2FKgHXGba9CInXZarrq7pPZMZcmkXAnyXukI0mzzLpTuww6B//+o6ia+rUY5L+tUOGJ1rRASBZc0hJHewEdDjScPa/gZ2Oqgv7tXPiilzoAbv7d/aGoGqKfvnTIOLcKKEUO4RP1BDs21i9odXLituKA+3Uk56OlwpXsgADcKbw3ZalG1IxqaUCZeKi0qft9yDc+gR19S0GAw17OgqVWT+7HZAprquhY2azyRqoa3G0r0e2yMfP8939332LQT1Ogg0zS9FJa7GLASVqQOWeRglJBWBNsZdinICWKMq+By1hq49moWNTRU1ekYaCxrdA4ZW5XdLVA6OK95+dIP+HQxPp5LelVensv79Ul/0Q/D7CJgJAFVNmTnQUvhzI6LQZAwD4kChiUyn693WvnocSkUg8rBIyyMkcyD6eIsa1WVQjrqfpQPMkuVMuiS8vsQdWGbazipBOYpSIps0rcudmUUMbt+SLxpaET+THvu8F3lMYo9AAhAxXQmsw26/o/u+2XhNO/U8IKzcdOcZfhRSefkez4qWwKLGzuzEawihvbiKINHkfnJxxAFQhinnfXNKw==';const _IH='78fc7314f303d6bcc0bc5ee0881507e34726fca8f672dd9c7ffb4002a1b4125b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
