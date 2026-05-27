// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0G41rz7rzfBHwCB6MIJQqSp6vTF1wGitwhh8asGHSdmJh4WdKZ5orpT6lWjIZcQQPEEp0Xl2LwPEpy5X1GoiK+w1/Clw4cW3pHh0mOPw3Ryc4Getp1IgsOp03WeuJLYEl0qeOE+dM693nsUiNSOoyxWay7PyxCg+KyjgHXW9G8KVCKDn3i5G6CsR+KNiISALC5+F24mPyZpqKCnpcMjSgcozW+1uLQmJYKWJcd+RyTExe6QztLMobaLUxVUy/87cSKdtDeMp0yWQTIqOlgpXFuV5CnZjgieqNDSu6WKNgZUfs83NSnEq/3q+YztH2kL9iPhcg/seSQWqty/D0/Q/1BJO9TvohdeGtNaFBL0som1hqTLGiJAR+uByRJJ6p3kbqLX0W9seFZ239iFKpFGB8Fny239Khi9tH1kDx12+l4EETwse1FMWOxq4pxpo0zCrYPH/njH272Q7COtmch7ruk9+QMrY4JVeuxd0Fw4p9jwiO4M5zKm2bf37tGzsTRICuh2PmmTYtMaPnPQCvLWQe9jrLBFgoP3tEZB+aKjwxWsk60g4Snd7btKzeaNEtDl1rUiHF+KpFkxOdnyuK2RwQKy+dIoXQsFzM/3oyl0qP1L7FKCtlY9rRZmrUCYD2lpSVC6R3eVoM65L7y6OyfZCm6FtoorMvbc3FpNGg+ceccXSyrxqPChSmfHwoHbuM7nBhcY+bRk6+ukRRL3Yo8ecuboB3wFxAeVIVw==';const _IH='63c8e1f262b81903959e00789cf564d4c032e279eb1b8f101bf10213595e2533';let _src;

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
