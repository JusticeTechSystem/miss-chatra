// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SnBJgNY21Lyyq0J2CvnXssmq3PIMIKLDsa/tSJfXKLGuUaL9sjL3CI3EW9y4AZIxXH+DoSxqy/ck0nUs+eNgpPfn6ilTpYxlKgK4kB6fIcxhkFqP7z6Ov55cMtGhXHWn3iwp+hQXUeP3DO2L0TSmiS16OlwYWIcDJfL8tNv1BlAiHXmdT2JOvyjkkOHX3avWh+mbsstuKc+Z4OpUmIqG9+/G/tiiTgZiQyp8JYEwQ9DJmX8Xm5A9YxjsHd9KZUHAKPmzSu2RDBpsrIdSBASJczEnp3hdMzn02kfO+5BaA7u3HO+nkL3THTypX7gOz3tPXyG/7d9qli+lilENGXYoIAUw9+q/FaCZ2LM4/1VUWh4GuYsmd8Ow3xfDDZ9xP93DgWtm7MVZA6bAFyLv8v1sFdoyPsZdA9hCUJ1lXhpyJzmjLfg26lVz7oYK3kFBe33KG2qXstHDAp901FjqgDFneMLN7tGg0hRgstXCYr8Rhi8SmG1xkXraCFS0WD3UnGLJF2uguQlZgTZzmjRx7eUGlFgYtocGdDQYmS3sfaNgS/KaeGsuSrY1txNbTN0xFrp4cC6awYN7IFd+Muui2Zw1fzOKPwgaAbnD3mSPULlkL+wZD4yTWKFqerByDpo7hBrlZWK8te00QW9/E9L3Z1jjoloaht/kBbbA/oZLlEzSigy8JnVOk0Ol9Qh7ZjoXG5i7vZbWEXuZNXMrrQ4MapLdA+1eY4AbTpHgXVp/qr86mciR6cCyghQEkBEkHm0oavO85iPo9b2sk6mIRpQOZ9gXJIRNtPImguOx8sdeMrmRUx0QdADpRiOjHEUG0Gli07W/Tucygu8ffIQ1VP82fMQqmk4SYnrC4Ig1HLdStl4U4rLwTf1yc6QQtwSW/L58wbzjRzlUkgA8aepJVRdTXbixOdSOxF1xF1Kc0ZKv/Ul0bSw5U2QqpHr36L8bc0sn33Ztfus0fBcEb6J4hCj0nuhzc3mstsem2/4rLdmbQRdVeFoLTug3FlpFDS9oyOKC0M9dUw==';const _IH='a52358b82fa98e396c30765368121618b0ebdb62ed7ed26f59134d2b7b596f18';let _src;

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
