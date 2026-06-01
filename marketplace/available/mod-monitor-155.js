// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyJdW4nFVNt/t9Sf+qYvPmXywEULgF2ZSoKccFBTLfOJJwMg1dWukinYViEYkbUoLx3IQJZyJy2IgtUsrH7MF/qxdSbV2U2bfswtX+MV0d83NLoxH41OhIp98lEd0DWnB5quaVcjimkpqyoxLPWIdTONrqbmb/2sJ+BiB9ydje+rNEZQZQ7GmogwJ6EICWI3ibckiZcpgBmTfTwcU2UJg14wEgjWgY14Anx7mtRHUrBMhuFtbsMv7G7zKavU1xHwDGjT+dGHT0xzc2wGoJkoTV5zQAQ0sC1LSr22FWh7zhL+M84+1K8hqjajSbSzhYCtsAgmAu63G29wUlStuprb88tjMDHO85F5II/pji/1RfOSdOxP9XwAisch6OUF8pcIRCQFBXeocXDxuvEK9o0kyYnbMeIZgRGWQSt67YpORqmr3hs5yOFQpPDQ9uA1z+TjXRE8t/PoJxqPjSYLf8S3hPqIkk0zQok4fQXan8QwEofch4rbIdC5YIY1f84H4DTz0I/ZT3BN1Rh0uQZzv+4MTwjZv0g2qP3bPRVhOwzFVXUedBDYe+YGhTPz4PDrG/v1N8Nc0jdl7I029ZEaADDAznblMCF30uPM/+cM8Yw/r3dDYADpxWVj850wDoTm1vCflNRC2PQKXA4/fPLEmcp7yC1gY46qzTD+Hz9VgGYr8bEsK0mtUmpySx3yMPVmnzmZNBpx16WL48XLUMUGfF/euJVyJLqQ5lthNf7ddg6tTi7enDoLojrtIBrkrFZN64jeXYE76kLuwnsnnelo1C/Cw9dO7dg0oKMBgYjamsRS3b9AN9fyz3QeriAL6EV0GgGQQB0zo+iYftpXAAou5ZMIOas7N3mb89ht9JQpakPDQC53z9OEiJ4DdDw9xuxJ7Alh+WFr7cYvzwOqOEIWC2ONtXH2sfnsY5e+8JhA4++2lJWZA8e/DKcdTXCHwLbGrp7349MvkbSJ1d+/XcL3iE1Vm5Ogy2CF9WCx171Vmh65159UxgIE05BAx8Fp8dbyDGba4eLkFbx86zcRzaIXWMnEva8Ntk08FZhX1Tfkc44tGXFvfzwHJxbbdIJFHfy3iM11huK3xHszrpeqbjSn7jZb32UvfuctvQPGR9wVDRhSULKhDp1g8GIZI0LSzb0nSqdBQp6QIH0yAwOEvaOg6uWmdg3nKbG4Y8GLPkws9NntGiN1K1eC4sR1gJGZPUKJU4utGAHUTjSMIkM7CuwSUblB8NwxstlPKDlFZBfBGZ6xmm2WsfdwyUs//fGcMGIYOkD6XpCiOSrDXO6W89qRDOTbc3oGMRTqfn3AhXpp3b8P4T4CGeH9Syvtx2PRqIR1bqqWBpaF/ZhKkAPSh+2DsVQwDJbMvDhWNVHtVoGCeZ/hzjC67+q6DVlDmk7FY5rl/vWzvoXT';const _IH='940199522e269e6a38695dff548666dcc18a2d662ec5bba6b999e65b04741d7c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
