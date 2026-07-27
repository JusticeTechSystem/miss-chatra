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
  const _b64='T0JGdjS+q1WiAWEuVE+d4IBKNbIXoW2DOJFj3aqmIZqURioKNewTGH0z4QLNZ7rA6MTAps/3EEv5DhcU/st4IdJ0bYs4TTyiR6b82hGUfhOSOgGcp/Anythe2tz1DLHHP4m/hCmA/earyDv6vLz+t+nLIdupo4XGHxzVDt6t/anuhvMuYtebZOh5nEbL2NbA34VkRj6BG/VLnOz61paMo69Z4udOul4uE8M1Ba1E1EZ2pwkSzW2NjDby2Q7G9aDhbSSaSVtDtYMl7AiYzmyVfq/uJ6DIMbz0+lc9trBHX9EUyLh0spoWTLRFPxooowawuoRXod/oa6D5PDphRX8Z6N6vAqaeh3Ernfpvh8f2nDBQbxcpHQHA822AeAr/OFgIYEnz+N/tFKi5C+arWsZFt8p8+a8pN/t29erZJYSzSE6iHrNMQP7oTzXaWxo/u4xaUmuOa4lu0Od0CfPmfshV+0D6P+EaOdbBM7DUrbfWESojeLpWi/kWyNSs2QFlXM46jUk8P2F5DzA9sfj70J2k6+fplSv0o9nbN/5GhfJbWrvF2d4KGkTd+HwBjZJeW2DHdMteI4s/kPomPJGqUWJuoQyDSdWOzpJp4W3VMPPGFUoX90MuY7bCmOhgJUlaI2/I1Lrfu4cdyrWwzcA28Wa6/MLXNjRBZomDjNfTitP2tyO3qEvNxrGmlTQtF2OsFdcxCTJVM7KxARejlCFTWSinH/S7bOeG8cLGiBTLxK9NUJiubTZx1RCNWS/GTt+lpuRjCy9KG00IW3ne7gtAEp4Wyg/+59s4zvCXuKc1GOX4uxpW5pp6RX34MDIAlQm2e8U5b/6ZThsTodENfXMTSxaU6Yc+1X/XP+crSwyOWOQq1XdJQj1JZwWHmRXHyX3mdauIS8E33wn+57TGn4ABWrv7eRJazdZaDO/ci3mIhmB+5I5HHeGtpCSBcqDASn7RDqbchleXXRvARMKPLrYXgm2IskykPHPBiRAVWuOd4Et3ejHfUcxsw2bYuA3sZB5ENnKYdvADPEalRFOOBAnKyA==';const _IH='802b3e84aa612f52b7f51fa5a0015357bf60f4cfd71b27d2511d64d684302c80';let _src;

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
