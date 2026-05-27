// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nYPfu/w7CcQN5qw0Z5GlLJnrvk3rPza4/715PDnQqVjlwIDUdxyDR1djodQprsfLh1ISNz8QXcPYK+XZugp47e1ANcbrwHEwvfuM58UijYf4Jn5NfX3h93tTBULXLlryJaTbG6J1dP+xjxW7NbUqndGzxGCGg1k6yroA9JLc6uG5lc7ZFwXWPD6mSsN/r6L9nyYH68RMaCM3Sn6MboS4Lz+9JKiJQSqEaYfsbuJNzZApdWBpix6ClfHjDc5+/RbPSoIxdnyjJ7PK6gcorB/eXTe4Wzd0HtUzpRiaP8QMq+y9X6Dykt3A5PM25NU3VP9jagSstjiSghe3JlHXZzJXUka+ZOc8BrF/x79o0BkZXLUvbwj+y8q71j1cGq7SFoxK9a2pTz0BbpzvF1uQYklcLz0FvHMwDr6mIKZJArff4MtwryHfi0e9gyVINL9U/jED80RXg5NQU0HxfA7jSwV2JxkxpC/YA4ORLUqujJTWKBVMzFuk9Do4K5Txs+02lKDvis5eDAppdBs/cWY4uNuCBSq31SENXtXeCmqI1YJ3sMe3wQY7ucztZGCwSgpYI9PxvCcwR0+L8KphlhI3LagMT5zlcpaLBsTw381l2QuyxfRNtF9NnWApS8qhPCB40oGR6BFlc63gAhg7nhphASuaaoRh/J6c9ZkGgBgFTk3ktCVy+JKllwmfjLACk+hukFqGjMrLAOydNtAAkxjneQTh3W75Ajuy8+NsjIaP45VgQJzwnnudvsESXOJHI4BqflQuMU9MybuQVNekS/dOCra87Wp5t9sEwOyRucZrs8Vcnd8HJ4C4ZMx7fSiXgSECfXh0avD347tuDBCM1y2GULuRWBdliuzq0oJjx50O2EqifgvEGyMxGP7jUTIdD5Vgw8fMilFAHLvJN5cIGYwIBXWuxuYEih2/F+zKQZXFQOVecPxQXlS6gSJpXhRfyIkaz/nUnKk20VI/T7kM97jpXIqLsindsy1JI81O5NoKaxXvt76/3D+zYTthswT/555HqZNxazLv7tXquIp/zToxq+V7B0e+sukvZI2U0z6oGFql+0M1GU7um3lILvjY+0g2Ovuu7ihkOj5Yu5PzFBVIKr37E2SIcDyeJ+ekOMZw0ed9NzIIRVG0iAyyvDG+bmvHz+04m/tIEU2wnf3DhhRK18pwo+J1EE3fMGGPM2dTiGEMw5xC0p/Q5zDQdNWasEoF8/ChepLkzOYatlCW0vSF6DC8J8zcGuWC9INnOMagDzh8Dkg2yqA8YO2XoheLY0Wsvb9GEtxuPegcPBWfqxLcrxKl8yn3cuIIdjY7asxGQcQgKNmIrCivpVFlhq5z5znvHXwQlcqWzFG6gN9c9HbWmuzMF/njjfMawypHAnqoCTFegDJuYiwnkg+fSQ==';const _IH='7f58f883d5efdd753b167c5de35da0e4e5c10140250508b9cb49bee85810d74d';let _src;

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
