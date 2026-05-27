// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHUFkGI0Yt8i0W6OQWAlary6+W11zAAktYg+EOys9xJHJQf5FTPOr0gxoLgyRIB0qiBusL/bxdzeBDPiFDtHVzhngOdn551+Citoni9p6395/SulFdwZw7NjKtrNOR2Io5WlT7Lb4gpwGh1Zi/7m4mJGIGQLxccsEayW9iFMrKpZ2z8bZ3tVkcPgUeksib1pdROUYgf+VBWw5Zvt8s8ga473SQ8eNkvS8dkkpOGmw0Ra0xM5FgkvAutVCG1/CA5vcraN0zVDpSagj/xDkVlcWJrFlFa6yLyVpfzZtf10ajbp5RdOkvBZBmBpQ/C1ypP6kaSAabKl7KxxC5zTrdhefAvKvSBW2WpjwTIVvU+CEfDN2twpMJjqC5PHn4rBYXoC8s6wfP2ObrSCqcEultyjXCcSHjd5meHZ0/Of+8+cWs6kZ3akbEDEPCiPHEaOJhcljn06GtoWVfhUj2e2zrVrAR5ZZP9iM8tB7INy2oX4B2ZLsMeBq56uob2K6t/VZGm2rVqkrHnj6kcpgJCMbIZOVnXeYW1V7sc+FmiIKfjiNBVm2OamwFMJ7+l9dE5l+OKJxccmOeM+YQVsItILiSkGsr2cYCwFyWqvPD1I18OTC1vQZAbrtTBHSudiapg7N3951PESkuQc8T5AUSgcqU6Ws8JAGm1lTM5HDhgailGrUOtQfMRL8yv2B11+RAUFczBhm3ElUKoHHvEAbpURkvlVwo/8EJU+OdXDhyXx4ml14k7smGF3oCqw73nRLqeRO3MapGVdOiKYr/94QaP8S6y1Y60iS85JEvSmoNFZKUeOSOW3fW+mZ6NDkFpbbUUus//teGnWPkAwir8oohW5wjWRZ7tuRlaxWE4JnjWkpEPVNQILlXxGV8H626c/3iGq/WCoZwbyPoNQgvM/1NUsFesHGRx5oMxamkzquO+q9nqtYi/MTWB2LfF9f0n5OrVRvWJ6gxv+X1MfVJ4cIaQ0BLNN0iJs/nofdfEe9lVwXPBuvg/087h1sFtTN+4dCbBqmV9ZUlLqoIVHqqrfUY5GrVOLVjrTTmzHCA==';const _IH='ce891570ca98f58f37dee5812356dcfe6b083503df0fcf3459071d795afb39f8';let _src;

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
