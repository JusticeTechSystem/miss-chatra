// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Dd55fn32xYv91zvY6Sju87x3Ww/B6Y/j9Sy95QJqRgj1XnlqZfazD1rafco2UF9PI0ILj6utC497XgOZGDTG14qscC8cw2QtuTJaYNAW5f9ekQqD/+1Jz+rMgCSRIEFoZUA0ybaDY4NKb7G55NJetLXHGSgx7X5GgjVDas6UoPueb8kJSOSv4groXjAgebvxpNMiUSUm7Hqg+e2EkcOQEBLkVAD0R+VC/IUdvAVpnocx92bogPGJid1IXzu38kSRJDL+2mbf/1giNwsAhif/f++B26knDeLNZwC4SOnLAGD1Ej4+pPPLkXhoSWhqkJlIIXZ5FQI6CniGLAIPZVT0fOrxdBEz9iU3IHREw3uFs10SiZ4vTgb12/d91XVGw4v3J4f1xiYiq0pJunUroKRWVmX0A1aRKPTdsQ6SqzsrVlk4/aY1Zvg3W5nafDW659yj1rUf3+AqmgziMa88UNZxB590AwH/6/LUOxLY2Xqd7qwufXbk1dOpV4EgriOxkjeyy1lLiZmsBolTiQt2nUZccjcFIOTbJzfQBJokLbfEMr1KPFEmWmmQBOH2w0KQm+tQhI227vbcKUaSSFF0zHl1g7F3bsOCpbMI/IVoQkv8fRsdo9L9TbsJxFccomE4O7OeKqHlYScu8tF/AeBLAa+/C+6LOhhIcMnQSel5e98lNBcvVbEUJYky4B7nbWwHVSCCaQJJJTtpSV0v8IM6t9dJSauS63p2T8bHFOdNVSZ/v7pZ84eZ+pV4m3R9+oWS2B0IdtJKP/aCWqDcVgqMtGGjPvXXAgbd702LUWGAuNhtfM3DXpLaWnDX8Bk63F1u2azRWhrjV5erL2fCJUt0ITOB3FwkftsZGQhA+jpJ8YWeqRN8oO+mTrAGDqcAsMgtRSaWN2yTB7eCx21D2NmwmrxdemFokwYcujRhjX9m8v06q8L+cYSj0492SKt7kaGTvcrX+yDpje2Glw8kOt5LgzMhIOEpJNhc2yH2RAmP7ZHksuZ5ShvMdjn/QQ4/3y10qucRj5pknCq8MFrdPrJX1G/PBDiqTFLlkKBdo4UqTQZ7FUAARpZLl7N57fo9M+aR8V4ltmi9aWeXv1mvytbuv9WYIuajj9wYCs/AAU71QfehbrN7CvXXkBYzcMNdL8BfFgLGlKOOUwBF2Z+byTF8RgoLKJbC68mwq4dGpWM6anGuE2iRsQvSsOKbJQK+DrrYuRKADufXCQkwOoKnZtd/sJiwEv5WZ2nvmEEA3m8ck9okvuFNjfML+cD3tjQ4RYu+R0EkpKg9S8+9MHHtBhR/LYKorzB4UiJegBmWrLN05IU/SY1f9vt8R0K7kFJVtRWcyrHC8EUn1ecfibZdwGzOZ+WrJN6UUtUW1ygRVplmk6t';const _IH='e0078781cc591315b5252436fbd31b4c48097cb01042bc7c7855b4dbb96a0c8d';let _src;

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
