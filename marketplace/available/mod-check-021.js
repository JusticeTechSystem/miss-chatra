// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rj3xK15iCtgmh3ZVDTzd0a/ieMdTKUoWvFSZP4KQ1GAFOkmugr5rBoSBeKkJuzzY7/wVvc4WMV/WGyWj04YQjEmtRWkcLIqFMc722tKUMs7SxwRW+fON8c3s4uYx8tY1y+sCBtNVVV6chdGylIaPD1RUhmaTmPhaIFtAK+f48sBp5tHG5l4LMmdlgWyGa0WvXEDH1d6ZYvZ0Rfrf7wTqyAZVnMIeNZAYYicCVG/10IyIwLQ7knfoVSZI6wZGP4M2giFb5OEhmpTa3rlVTm64H+lwmSkIc3sHDTPM8fl9Qlago43x5LNKBc9HUKJlj7gTzmlWzzG6/ni6fLhLqAcz0Czy4oEbUJoevBAc0yYQbPGJcKbF4gfKz7YrzQjELFQjP9qUpzOF2qdGhoDzABhezaj+UJfUMczlwE19Hyxaw4VYynS8oNfTNNvmYGJtGGhfYSLNlH5CgttRsUJgLniAnIzXhjCaozZhH4seZOReO8U7pr8g/p38cDTzt1NiVILAmtDbKgehcebn5kzMKuoE4qpTtfTZ4eARgS4uiCfY5wgp1L+WLljE41nDc3PJeQt+R5vxyyge4jnFwNW0qtoVZJ4iUHmIL/ODZgPHv0SkwAN8WnS/wTd+A6w14Sr40FmrBTFTIKRg/EWB9YS0CZNtrxOBKirj2y8kPjxBmoEdclAMqsJfkAp0bhxYIio/BDSGp/X1vxMhvEjwq4oMBGYAiy2iCbm/zJQyS3ib3FzNwS50GTV5QQ0pnBt5Gt5ybvb/wDzIk+LAGWiBLUdbaumPwI4jX7DILPtDJ7VmYGRhOlQngZh+d8AcAA/Uhm19L3YtLUxAMec3ahVWEWv3N9p+1RecKWMmOSpoYvaxwrn+8oMN0Waf5sek0TWpqi4LHrx6MLzRYpNN5cptHp41z4PxRLT04ML+LlbWuLQncxteGD8dH/T5Z1rW6aMh5WVAWh2FH+BliT0BV6d9wdIMNwJSRcGM5wYHe0pyNETN7t0oKMzpUg81i5mqtgLoeZFe3Fpgu2NwpCOZ/IeSK4Sx2B0rDInakn4Y3Z8E05EwdNgm7iBfVKTbJLZHaQ12kpuqlkup71cq9UwR4CMzJUYHIgrj3mkcOFVqNiru6350c8mly4HLbS3PGKwQUYAGtOjEL9kr5YuV5AAUPRDABTL+MaMPrOwiaA07+DI/P+6RBBvMh7Ea9fpRmTNCG30b2Bei1zikCvJ23PteqaGWVJnJFhuovgKRqKfvnoK3gHb7FB56lup5aBH8+4sGkfebFsp43fo4NtimALYi8tIia1gS7Ys94gWVpMQlQN2mAOC93WzsFlxVqf1OX09Dz2n6ZSprFDcSQgBN45kXuN2FKeoP8vJcY+eQBqow4dfMgg==';const _IH='d26ecaea16bf09e43b68062639db1f8c9f83eec933c15ea44308eb92139f3f78';let _src;

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
