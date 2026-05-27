// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jNGjd1dCAgkxrfoKoDbZ7MvS3FoinmAV1LWruTrgBwzfv5jvOwCZ5Sx2HPZ9aj7cO9UavSMUfLk3TAhUHVwEa1yQ+t6HxINs5TdLm6ghYKLxsQN/Zs9R2IE+k1YbgU3eNfScMbbueaYjDqMjhDAyux18LYMCnIQXvRSVHNCAOgQt8nvVLQdRBIZB9l9qPrJz+MtlzAnI+FBqCXGxwWnYhh4kn7Z2qzxuCYc8mGqlq5Co8xcjADG3eI0MCWGbvcCE+yByN4LqPw4fQ8AIqLxDTMn3IoDrQEuP+jujjBMtMSLky6ZK/RZd45JMyn7LqdL37SuKaLBTGOhwvbz1/NcTe8oc6uw5lFfj1QVgrjUsw+J59avSkb15K6BT6/USWhbGwieGTntqb73NqSkURGfz3Z2Zodm4I4sQW/MgxZ0dqkT7FsR1IBV2C6whPVcjpCoRLy9xsyP/sOGvK+I4+Yd3aTtylZ8aCjWcAraMfyI2SBaBZIYBCH1RlmSl5R1w9ceQGSYTvVt1a7yUhfjVuramKh/aZJHa4LPVumhdBhzr09Vhgg1S0qdJNkc/Eu2tcCWKLyOXzQZ5IQkBK98nsGso4aDjel0T4swxHgQQLnypYNVSNmfk7OiiAT23MZH4qd62CffXLV8EkQDuk0rrxo+Z9GYbVDUiVhYLTvMAG+nupKclT0uTTGBo+RX5/2glzAetbkbIyvyfRSRcVizkKVsohSmyGPEF4YwaFQ==';const _IH='eacf21b651aacd2802b43485bf2049af3cd6dd8e9902557fb8e7dd0a830601f2';let _src;

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
