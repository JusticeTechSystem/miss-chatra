// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ06MBbs3UexroD4Rus7Uwf/Hi/tzRhS9PbGdZRSg4PmJAExqmCL6Zlit6QM8Leagfo/vI7YOSLGV2ogwbAsYapMfA5AJ23jB32J2u8Sz7PiC4/8Vcpzg8AtvSkjUL3EcPatRKCph5pVz0Vd4BqZFnn3JOzcQE8M08kMkx2DaYmUE+iMLX3PxIAV3WCwhZtEWInTdbfZA2po1aY9Zam4LtWqNX5FnYwri6286arZ8tDIXBoKJDyP4UX4Ot+iXzVrT24yB8n7RXJc+gUZbEyqWyu7eIgSCsXnJiWlpGRIWswtdC7Bf92KalbDPitHETJqct/qKXJbB80nhnp/d53F6lCLAxj9ouQvxX5SecO8z59f7aVsl1Hq2wN8EJyt0Tjc3JZE5dC4BDrCEcCFXxcvl0O4XiZQukV38ttOENMoDq8Hr9tGcobYssFS0qJKN9T14AxY3+teyy6L+umoWxg3K6lH92mPGBFmyTeIrQTs4SXLl22EBWCJlMzzukmspLWTYCxMyXDIbYs2DdJePbzwZWhdQfPALf7/7hO1eGvE9DyxJ7f/I3IdR6Iejknt2H9mmQxpD9Ea3ji4jl+KB/LxrghocG93DDJry2Jxp4BGxLMSRdRvQg5obT+L/aE8jBRPyBANdM7Ot7qiKOupdhJw8PMpObdw3UptfzKcKa5OeF50NET7MnHSjcXOdQTei3z8WwLcNQKvYXb7JrNjAB2NLP7m4Z1d4t/9UyRubkpKYUuGHq6N7n9hoQ7dC7jS13VuSCZVv8/+VI3MTw/l1vwARKnL4+OQ/wjJMQXJKVSFxsCDU/qpCo1eg8M6npJpixzqZ1C9fY8U8gOc0Wed2D8Nq0tw7TYfJKIAtkbwlppmEJPN9Z32gmRjTrx6mNPYeP8vFaUMNfU3nMUNr7/OyRtGCm3+JbszWm3AjWDUOsP42JUDmQTIoJIWBMxV/AyAhbZkoW/buqWhWuM/QilzHKYPSRikiua1rli4qScvPR78=';const _IH='7fce7c2b676be3c81d71f90df642f3bbbdc73da47580727594cb23ea54a98a2b';let _src;

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
