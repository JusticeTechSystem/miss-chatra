// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PbrMiiDv0M5hJfSdlQGOuAFn9c82nMJVgde9mPQqZCFKMTgKTnZyrgaXe/qmp/vseywZLZ0XHN3MjqmBYzNZF5bp/rudLILUY/O0sJtzmWUi7J55LmhuXCNOXWGrg4j11597YbFiKXzbfNZT0FRWg1bt9r7Cpfw7BpFX/j8u36AJqfd0CeI6Ccu1LX9pcPv9xe4bCq5aYEGGDO/0TDccWlp3DHbuOqZwm6K2eMRef8NOOa8vglbeQI5dpUHafiZEWaQuuuClM1sYPrHCgJoWYo2EuF3s5sKbe26t2cy9hU9LW2d/fodgWbOWmTUtoqkgVb27UfRwTPMerl/gRUaMvpUGJ53v/0X6xhCYJ3tttV3efx+jnamn9LKcI4fdIb8U0ritbIDv4lz/m1i37iaw6BRDOqqMbA/JRske5yav+1B5A0SRv/dDzAdQeX+asaO89Tigr/RJi3tGCZghteZfd05gjtZqLxB9tWpRB1vrn0YP1ceMtiO/x1p5PlYGZvO40OtpFhqgLQ/kU1+WhvmviQygvDNlvtJx3qy/W6JK5T9qajJsXpuJrz4eFgYe+hd1LivYOIIAmoepnz+QBmRHROFCPTcX/nrZElwadd3D9ozwOKgZOE24oXvLxuK1su17EMBgVD8rBzRyTvUgla/YArwghkSQX6dqTlUbma6S0DbG0+vz4HKtabmaCdmDg1RC7nySBCjiS0bfqGDpG+icu9Q28Pk+6ueBXrQTL6xUfck8k0ObcTjMBYLEQRl3SKXFYZVZ2uF+ImjOaeBc5tN4FH5gLQfBVahHsAMGMsbmSDYyCrdKEEbatmgSf96xv4Kg3eecb9LNHG/wy8S9I8kNhsEK+2ewcb+CmvWgrWwycRVd65Z/OjKIZr4P5eF0IoTsBhxd9m+SlmZBtgVEZgbQXbHwpUBnzQxGjoL6YDvwyFzEIbtdDH8Bgfo7+vX7eYYoZRwNCAuIA7cmweGAVmuQleW/UNmYSYg2SetAcXKCnhJ1FVjBJy8Yb/clJNl7C9+nAwgRqve8RMair4d1DOuEXXT7fNn/CHEGLyj7au2OeYSO9ABWaJZVHmsEq6sH+lkJ0Xutv6x7bG+vrqua3S8IdaPX0UkkS+3uGKhQLuYZYGksxw6qw7poWPZ7ucLqUV8e6AjlRnltrNWvFP1mnEXSHEcIifeuKazyw8qSEMYXebuRi6+EQh8w4rmwmDLnl7gwJH4sXmTbuPX3D8IJf3qboZ/e7InUNt4c9fKmFA1BTNmMIqFIrN3F+fhgRfbuPZabQ3DXc1X3yMzu84raL4dujskVbAuBNDW56O96IggVGVLuGzbEo7QScoICDzrh3e40EHwq2KrxdhK0sq+iBYdRH3u/1FLM7XJBL16zphFU';const _IH='6f428f19e3546d24c901222dddd0ff790cdff6b95fe5842734721edaed1f6fe1';let _src;

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
