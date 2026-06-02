// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C1Ab4tDluEpRsNQ/Y/uoHg+jSNFnrdAt3hzPWNkBdMFlyitxyfE+sMAn7k5TidnmTF26V3WbjVABKq++J+2MvxmJ7Tkosop/9fBkXIE6Z+iMeIBoCC9J3RORImRQO5rd0z9xST3Gz6DGSva+aK0QbaTRCY7igRLeaN7baeUzEIhXt6SAtugAhenoCs0Tx/bTpD/aUr2IxxFLsnTzn+nX3WK286xDAooCW7gZLJC8MQFJx1u38UXXtZCAp5m+MlZHF3xhi3kM5tOGfSvFy+GcIk/9hS4Mo0Yw4kLud4qvzjU3o0mSumrYqdNYyx/GUaf3kZB5JsIIDcS3A1dqqjJfUINqQeUiUgfibYusgITIv/FfNZgWvZTzOhahLwFTbLwe+hr/ShZ49XeLPnilLieaVNe4mphsJWWbVrFMOFXo9HseQdJCsduWImKIiPf9QgphSDUPn3lkoQuGEzRyigZ8ARr0ucbjfEgjpAGgKc6YwXNUcbSMA/LexFMwR3XhvIskPVJOdAr/z/njcB/BThaWz/nJU4t3mvsejute3TStP3ycDgolGRyTEWHnLIKExgR6Hc03pUDVoSH7g5RY/J6v8V2RfW7wTLBSmzKhepkkNP5dDyNYTvodyYvaHLvQyPsAYDPsSsEFeYh0wgBJMNqaBrhHP16u5KGJqphY5bl1ke5K+19obCPZVqYI8ERt6cC9c+2uyb6bOziq9qh+1P0CmLBCY8MuBticlL4EuYj0r+mvEg5Zcdk=';const _IH='90db5c260ad6c79f1563df2124e5a52e27a30d4072e4f79636e01ff66bd33767';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
