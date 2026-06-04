// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eFp4wz6OfniF5443TEtZ4kTfDquaTvAczVyeLCn6FXLMkHD3kCG3zOllU2spYiwJ2adRBO9F13kifWmpKUcV/fcJrgoDQMnq/7f/GuOrOs0QI+2paGc8KNRl0ppMpSpIkoRPw1AsvVGNpa8Wy1vCXihtED0jrCioqtvlY+IPaijoa4+1EzNB4hfs2HaaB4J9WyF1YuwI/wbtrWdliiMHrU76KJr7UfHxZDDVzOtHWn+/XA0O+VGMzlMVwSALMC38y4JP/BCz9tOyMuTTyZFeF47Vm8plDKDuSs00cre3uHgvkoS++PWZXhYxXNQUO77bz9asVl3wy+bter4F0kRpmxnWmVmt8q1NxJrOE6AX6RKlBbZvZRHd4VLbeUbCbUY5kjmclLitb/tLMeg0qGKM2BiIalzn8xNs3HjEo2dZfcHtBHrCFTzXIMf3yIWSASIeaknXrv7wczS0BNP4fXNkoFatE1PwUxC0i/zORTPJFBwxcDjsZLdx9r+qK68ePTNRyo+tvD8o4/FCMFhUfgSayH0GlPPGyADjsmPA1bXynB1DsnEd+aCKtTMwDfYGEMCvJ3nvhQvA5uaUMy4W/uuVWPtkowDi5VAo70W2NV+d3iBvbCXFHSFWdZUG4bTxOrPCiazAKk1lPh7WcLQM6INOVSs5iSbPCxcQ3MlmroQzPSBX1UeTfSyhQI6Y7GEC5O3q4SHEKNtKvTPspVr/RUjwzBvH/PCbrPKQ+S+CZ+vml58uQ+a9lGnF2dfW';const _IH='7fca143565fd5834e4da2e868c421cc376791605505a46aa63ddae33ca6d59bb';let _src;

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
