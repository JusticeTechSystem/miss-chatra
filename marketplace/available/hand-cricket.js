// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSA+1wVr2TL0Apg1fART7VIyy++nsvFIoR6NqLg8FGBSmvTfySoke7ROfGq1/pzzmsemI71NIWmf+tzQGo/rl5YVYfSEp9IewLyiPIQmdq11hJYFB5aAYXzWrZOOUOqf6C4SbYiSlk7jPluYVkPqCozkFt1go5DWV7+Qxw3lFdnPqTegGpFuDGCOEMLXeQr6QjtooezSzaBkK+y+4qBMH31xVL8UIeSvMzxzqGV/VyHqCx0OeeE1lqa0Z5H7AwAh2BTlKTH20pXUBspA3gXdeMR+cSXxhhN7JJLKmqIuVVPxvGJE9S9//Ds6bB0kULaorU1DHU0ahs0xDGXxEQrfrRSJvOt7x1lDqvoxLYBXIlMjSsHzCAJcybCzzsBOPKE8x0PTSHYEhJljcK40g9AOeNw84Q2yoNrk7/+kQAKZ1wAxz0yvBNk1XTH950rc90iqjZgLOxSvrYZU7SnNUkD/MS2s7N4tjG0oB1b8+HZV5LhmBh+OQRoP2bOybHo8HUaYoXHDDx1t7UoWUzpL3dKt7IfXNTGCrivIfhVHvFZhp946wKL8hAZxuUPFkhaCjrf1H6wG1J2ghnqJ/WvcX4F+DZWknRSvOvf8+Pu7rxXirahjUmT/+nJE1iHUJ6YK+1JbjL5jg6oenbI8f8sORfGyP8lsgqOGSYYO2S+mweFAeIg4fJ5hRtbURynTp0yx86IAFhjBAAH9I+7+UQAfsjNsLm/r/CCcj27otDfhNL2/je/jLgszFk5W89ceHPdlBLKe68c9DquW12cEXAXw2aUbg+suX43a/NWZ2D4s6SVyKaWEEZ42k1ZkkiUxFR6/KH/cNi1FXzasvA7niE1ATdthYDD16w0mYQaHS3l/jsTJ7SdbR6QQNgsLi9OfaAx238tOMLRXizqnkhMbDHJ5N5yI9nc3Ex+5poCb/qd4c0Od7z4hl4vt0N9PeQLMthvKCIGiiolgp+3L6Ws3CeImUvyzQFqDC354XW+zdRD/pR+7OSiO8kPYIDsaibPC4a8ziJrm4ecSYjmIGZ/qeNOKzc3DBBxI66nJOC9AtXtAMslA3+ri7p2PMTF5HgxYTPPjnVyaYkbtx5XW1BTQ4PxtlXR7CDZoPrjoXUP70KxbRBI+SW5c3zQBWW+vKQq/lJ2F/zJXaX0lNlNiDrBw421z3r4id/fV90ScHAyYp2MSq9vy4BJ+mOqqyhl/MIi8tKXip9i+jBCvT6sEX4pz0bCA4U5pUePC4WM590w9CSc/kY/s+CHy/kcU5kOLqGX2rmlOb+ue9DfyNX3qeTbPZGV+jPdeTWwvo5TQbgshddCLMjFBmG+MzXCk5qgLmIXtD68zVotvJGJFgf5DkqGv08Cy3cOEuoF56Zn/I2YHNoz8ydY2caj2VsDLgDlD8jdskRvJ+nR78gQ9vYnI6fqOtjyQ7UfoQGPxUHAu32UbsEo8dDv/jwTgAvVFi6pB1gDCw+ewT3r5X6ppckPrtOfQ5u7aM/y7pqO9eFdFIJMOc71SKDcIoAABlI/1qnhW8wV1Zvt4vZMTxDhVqovyiXi19Db5Evgfi5tehBaDtFsC2TW58L7d6UT8y7T8Sfvlf+WZWiT5pR0+MKJz5aYDt1C0VRe7kEaUiG07ZDC+tGPxGvktbSMiE6VUWwSg5LlNFT69p6gsUiWMWXHD8aTYUuemigXGUNXZgQv4m7uhtc93wuNBSvpQFYImnHeXA==';const _IH='65fae61ba2cfef899cca7ff2d4cce53afc4004323bda182603e48c80f5da2fb3';let _src;

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
