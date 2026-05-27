// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ucxm9hmB9yes0z8IAZJfIhSvpwmijpEQ7qMBfjuFp1gjRVD1VmKe3jCnnDzUEIBeJWCBwdhIgcymD0e8ktCgjLTcXpMz32chz/0nOuzuxIRAGyVhU/v+iSi5+SDgo2zQ+9FH5q8t7p6uFrfbKzSoD+f13R72SC5d/oFgzI0c551zBGtZpyA8pGWDFc+zmYH86MWtT3mDL3V0jXJQzavF2n3qDZLOJgTNC266n21GrnOiI8xAi6B9LzTa745+x7rfq/WRTxQ5azEI/5RBNkoD8jKvELonIZ4Lko/nOuDG++TYFtpf1PT89CwpEHvh2XtERjxCeJkIxO/QInsjPKVnVt8P2RFJcDJtHRC/htP4E9nJQcSL1M+aipwgLwld5uejJLFWoWB9qcVRQsKBpPtoGIrk8UGZJRx5ZrknM9y7gq22AIbdUxXRER+VzuxJg2Z7weQ/8cy81NaLFJB+kwvQWXRawGybK/6xQK+fZZcXEH2yZNpdBeHgKp6R1+92VZIso0knsNGnOT3/bE2ewL+1DIW0rkeZqd7WGiIc6Ex62bn+gSx81gAi3Gm9tXsOeKgjVaZDcL6SyXox1l6wfEWSc1wxBQLj2myB3/nz/OFGOpd3r5/3x6wGMbC+sM1J+BB234Dsm1Oe6HDpXKBXKnLhRvEv3tBOsVHyYIXZohZOjl8bspH5LulKOLzQOmtr2rwbZIA3X9jntAEfmJccYVbovwqznpY5ZgbVyFBHsnAn0sTZAsa4V0bfjVPGOQ9pm5L3P7gHD5N+vvd/EQzBVivv0Z6LZj+3rOgXuhVAJm2gwopskJkOclRpaEG23P/5c83E6DIhP1dCtmcjyk5uQxJgIrlog73QO8yx3+Q+Ve6IRoPK33ZNoooRdKA0N4skSQrV+JqEROZtvSG/XhfU1SyItjF1vSp6sGqdrLUybqM5kSf2gfQ4EyG6AABamHhbwU9/zn60oq2IfOnsC5ynl4Uoe7U28jG8AJ1j+U+K3WlK1DeiQYK05CU=';const _IH='a46573d3be326d48effdb3b523701e98d3ee39689dddbbd315c89924a1f029f7';let _src;

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
