// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKC6Vmnwq+QQ6TV8c/2hx+iWugrgvEO8rcTTltVLnQ+skUzxdj3WLduDQgEfpLA/0n0b6SBBQPePwEWzBEZfwEa9Gv8Os0+9CkP9RFdANInA4iWbntgnMKXumiFU5OoEFLJa5+KukwAYnlTGWKMiauEqG5p7PW5GTfRYgjqfrpiU/AN9+1ZQpDNgLvO+MMsTUOTQ4p18dfeontBkYTbubDiQH5/uGorUtDIVNSyOSru/3/LQuAE6Wb7o3vqDQjemumwqP8HXEumBhQULSCfIvDuSvSJ1iXN7Yu6Sl4k8eu5PBZuVACtA1h4yIp5SvtxDgPLXBEMqQyKltJWQjGBQy/cPeLTtxuQCrC669Q2gbjLE/SArK4zgWFqny/A3Q7GIBZK5fpcOgyrcbl39uTRr/VV7Be+vuq4pA6sYmr/sJgIvWm5KmtdIAlQBasbWLcVI7gSTWLtyB+PBwlWQY17OXTApJkItcqZXieLbNVTW1KvGEckR+obOkL4OAQetV/KvoevJ0S0tE9Ge0MoqwWUkGbbb8su2JMgy29z52MtJ9W0Guoas1IbGHQUhfoBj+Gs5XyqDqKdaWTSqHbaizuAch2ZbZVE3OWUZ+3/u3JI+7Kt0VbPauDJVZAZhseo1svu80ly7nj7FE2HZCldoNZt03s9ASi7Bqu5Qh8K24p66Jeoi0MhFTIv3516HbqTFO5LsY2DEMnfVmCRoWm9AoQQp5wEKQVHVe0CwwgffOWnEx7xGChAXB1PNCw+DnmTVaBwM+p9qAZoQpvrQeKr4IVhsery+4HBlMlFesHFxNgPClLZHaq0zEk42jUtlhE7EJTm1qqSwtAi7Y5AmLpSFQsy1VVehOVHitusSeY3W5GxXQw20Oi6WMgszaPPUysdenAvau7pWYejHJJ4hCHdcXFR8DEzPW++ADTc+dz5aGgYy1gZsopFi4kbRZ+nTmO6W7Y4VY6uffY87rVKtIY/WlIRNFdJL7jFAsV8pzt8cTug1qU+vEOPqmqaVKAWeVH0mmq/IT6EvqgVnjiZW6Txt0XE6VdQBScyg+/pBtAn8DduvqiZNog3tylWQwmLevAhBwE+juQ+y2RGEbFGt+KZcN89ulXtVpOHImBXX4eska1A1/OlUutBnQoCtnmr7RHFin2Zqy8HGbWv7GqfgIRagjhf61VdaXk1rhjvVgD/B7L9Ob82VoeLblRyV3oPL5nBRj+1O9iWpR4L3wLow==';const _IH='cd013b48fe669e8a10dab789d75d582cf84eb9487c59edec80db9e04ab780698';let _src;

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
