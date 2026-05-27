// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHAF79w/cL49sEYkxxsMUthtVd5CqkGn6+N+5GSq4Pce9Qi9x9M+tEd/kLAVz0a/buDWK6noG6U2g4rn4Ck5ktDOefhlBDPydzKiumxvAQPFFZITKuu0EyxA5cSioaobbM7PdmBg8EqDTvsew29XRaIUfooYQ1H3IB8QdWGrbnUtJlCx1pGqNkGdd0SJ3UPBTlc8FdCa+LGxdnntv6oS8Ji8lifbcw655qgtUgfvcdoB/1YNDIYFiMPxp0d8rxCxPjrj/w2CFGZ1JYKB2A9QsS3SvDCJDBSSqRdllgniHStRPYflifwVY+/rFxmjr64TqygUxZbLh0zv5b2Ey3VjyXC1xifvkpddDMWrAJ34ASG0E8Z83ZQXLU/uHnBuyBhWwmhms4+bJVdLp25F2T9Tvh20ARYZ/DK7vVzsSeIMmND5PuByB7TmMl5YTlmneQ4FFkz3TuDuxg3Sew/QRYtLdTe0bf57uUimsEbWo8sP1JJZ/t7Zs4LpukV6baeB6G8hcedSSFdS8GyR/ekqwriAIvIm/OXqx9pfVfU/eJVZDU4XuvqF7qZZS+CzyE5LFjQNKwk5LadY8JDIU4h0N2LJ4i6D5JHx/FzjWmc=';const _IH='950a30660c3a5e0967f412d824200a3d2e14c7002ac74b2cb23e041cf44f4897';let _src;

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
