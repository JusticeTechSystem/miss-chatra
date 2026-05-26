// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hDOPKSCUlYMPHKDUxjUVR0omnU9V1jnbKY4BgdCv5SVOK1SdzQ5BidvjHEvhEeYUxchwR7147lgft9NWjemYV/pTVil4+CQ3a5vegQL7tD8jWPzrO0iJAU2IQNSP7ZZ5hzFAxmKCrxQjCCyW1inwFn5JcZyJNXlgvGWLTTo+iwTZ2HAiN+VpJfn/EPl64sj24TcFfOj/912+n8Vm9hUt77ydsnqmweG59g5T1D9lTvuKYpsfaJoCGoAcNh8DVENqOetni76eTIeoz9fmU2pnKD4fmwzMU+8x1ocrZ7IVgQw+YvQWZ6YFHpkjt9MnGiq/pAPggY+FK32CEcGz2mpHkSSKrh1HXN9u3qN79Rfe6aDdCX/d6c5NAIMgLuWhRcgKUXqVSP6xXsmtfaai6SROtSfbS1YvL1vkhoUnEktZlWCBmfnh25nbev88LSA7cUE7Mqo05hNtAl7rOUTPfwvaGms8ycThaSNe62mPpFz/UN1B+tR8oOe5eMA430OhZKv1s8/+jjtIniRWiPT5tmrGfnjbk/r3WMTLWCMYxH9ZFOvAq4CiOsT7WflI4fgJKc+IP+LhUJSkDPlmTG5r725Y6Igc28CxEz6Kt9RfvuEQLQQ6D/+PQDI6ZWOGBLcxDxX6BhMxeONT4C8G5kNHaa+LLvqCQgjXvzPxu/HjmDzP6EbqIWdKMQQJ1wJXjGmw7vRqHJurqNBgk+I+AlsaXL98ZEEv4PPIiZCCunHHRWmspWg8PzdBpn/RT9g/v4MtbNvFVHabGihfMlObEiS1iI6B8VsYroneCPCQr/7nrzuym44wKTdH55Wg1R58w6kmQbAelKB23IfRVztzUag5F+l3EPoTYC5NuLlCao7BG+JdVG4frI7Cpka59YPRI935iFWL/HFc4+mvHMOKaZCLDP7NCcYQTyneh2HibOUwIiZMMp0+Tr2tsu9hFZmvO1ForT/FiKsFM83IFbd7spTyLMdNujtGg4jRc4AbkQXvc3gItq9LONXoSANJmdRnRleDw7I/7g==';const _IH='a3c5072ab48c08373ff4144193f4b9264159abc3ee59bcf7a226ebcf99893f7c';let _src;

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
