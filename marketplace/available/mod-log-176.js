// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ro7SKLN5a0TluBVHnGvpEethsUylrrDHHMj847HGR5myDzFFGWnvPRlf/Gx/ZGpJ1q3Ot0cuUxbkcdNl/44p0WEK5qFdad+GwevE2c/LImb2Zi/zAz/bmHls0tWlU4PSH5hGO98ESqs3B4fuHrJzqBo1mVbVO6jo5upntg+B6DzH9zzYsPUh5zqgCwvjKUl5U/RTT7mDw/4A3RjGUsSCWi4ulb3a2NXoS3FL4sbfeG4WXTE4+Q51el5LHkMLs/Lt67jRmm/nHSnfldAHXqehR9xl9Jy+wsIOX2AJLg7C9yeQNPTBZpMNyprcpxaWsDbIJPhMPXCqEPMLnl3QQsCN0cNzWo2OLnq83LxXegcVoMx0BIY4zj9CGXGS+nc6/KVZiYT/wCABP2AjWmTZec28M6FMrBH2lfMXlDt4jVORpPOCzc0YXDm/JW7YPpVm+qCtAdlNH/H+a+J1Dhu256THvgaMRpoYVWX5DHLCJK2jlPaYSHZy+a7uZPa8kTcGlSiWmsM/DyCy7nz68bSEkHB9N6U0AX8fy/IlApC5G5y0SigQpjqp64EYYm/LjMWnzBqbizKpLcPkGPFUHPxVsW6B2vYMubt4A4DRrLYIxwm3iql7pNakM/G3qI9A8t1YOnjpPczFyZhnSvj7RsUQbPumsDsRyilBqQsOwsJIQrnL2AnARo/cNU38IWhe/XE87QbmocjQeUjfaQo2pe6yYfEHB1EesnyUp8qGcOi4vJTziChv6rphevI4Oq5ew3KNMvZe9hK+J3tV1rTMtr5m3j41TgTpZu9eZU2xrGwZAWFk9OjGUBJ/iUASHLGTJw2X7sw3zfoA6j9tdw8uupKb6iVB6WWDfKS0oWDiWd3vCWch9Fkw7WH6GEzokZmMwwS4ts7zpKRvq8teB0By0hfIkjY+aMSVHLiRDRQV2gfXbPiWbpz5U4D/dG/jb2OqRNd+2KSSGgAXoL62KxJhtL/oOWtOnxrRKaOIipH3yUq3EXpsPkTEtGebIHf/jfV+SivPVSLxvrwaKfUJVs/9zXcvTUzrVdqtMKPrKdFXUHSN3fqzzJI2mR3H9wM0kL9RR4qoKpCufjoN9SyNr6NOWIDU1zUHhOqg1oOZhfBB6awU90NlDuiYHJunT/VMBa09xVF/VxwpY8A6Rx+MzLG5wCxWSRvbAxofNY7cwjzyIZOxmBN7XjGdqnIdBuWHm2EgSs1+CkNKVPunlZXZZHCat8I3KQqIfMJThn3XUCMoDeAl9zO+cnHy+8FJipjIoWeBxUR2buILIBYilmVpwfA3qxieLaalWuU/Z5Krvja7jWYh86jMDCw9IBPM0E8pWtXoOiRcorwt8Xwl0WwiWrGRbQ==';const _IH='448abeaae99eea7c685c7b3e2f5b2c258acd4d1b84247551883a0404bcabd0fa';let _src;

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
