// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lPolAK0J6/PALLvGn2Ye2jw11Htk0b+ctf4JU0b7RbxrYqDMtxrjy14csi5s7h7WbtRAAR4ppM07ARPPJghORiKLQBX3x4+Zeu7Sv4Xv55oW93+U2OZK99ZmXYbxGEIunyGHX/BxOk4cRc+LkCGOUmd/hAF8M1iJqBhDhmLuoUNR/KM0m745iwfczdFsPt/3b5PZjeUCVP/lv/A0oe1VFpLqifyG4cClN3ocmKl5DP7pylh1hZJsDxYJ0tEf73ohZ0PDJNO+OAdIZ6ApgSHlmIfLqhUzl0f4MVYaidmPsNrtxFOeq6Qeo9BFjVeNu0tU7vNr0xRT5NPG+w0kY+W+ZJS/XyqXbomiYuDHpAUwiJ20ZqIOTS6xm98JhI1Ac1gczI81yiXhY0CDAXbhznHk2FcppOlCwPcIKds4hnXpGKNurK5jeYjx+j76fURVUZAIT6QHKjDe078HVrVIFszIJo0XWAFpd7rVSSrozkSFWuoT2xf27s20Mns8VI6luExK4M6so/WwxQEJkkZg1wKMPio2DaQkT8iNiTyNbL+hzhNqOyaJRn1FFfuWmjhAD95aA3zb4nmyNdzataF+0eof4jDJlXn7S5CXEF9Ol7I3wF4QzqAdVEjqKTlDCWxEbiLpUZwd2DTzDEb6aZdyBNHDflbnAwe2cHWhl2lkjJSMnlVrwZ5HlHiGdsZaBNZF+f+C4PVCH40tQUUbehHm+aIvW31VxePQHbxjnrpI4OFk7B0cvj8dJQ5WgTXxi8u2O2sUGyYJLKUUAnAW4P/AM8PXEzBh8a4kn1D+iCrUuWrLP2zDjsucKwzh1LIEMZ5sI5kxv95uqIu9upmhCGHJpM0jzJtwxwbRmvjfdCZSP91s7cxyx5LZjAVirGxCzhae6lrbctBBuQrprGVGp0L7J1LYPEYeY3Z3ds9kKc7LNcbD56QrzBMkqpfhC6O2AwVAf/wrO8pztIH7KXZf41RYsG3U+3FQ8gqwShwEX2cFpYPWs0dHs86zb+D2sZDLvdLsvk8vzFjdyDdKIqcMmggurhz8er9pjq0ooodnk2zF7eKEtwytyei0cPLqGQ2Ua36S7EImORucdiqg+WC2D52xEqaap6NCM+7Akidaw0HiM7rI0vqscWsRDJMR/UrmXrIn2bgTkPS3tqjThu2dDql7j+w+xAdp/HmWgnzFsBtAieInQ+X5sW/f/Y7e6erUD65HN49AUHk/';const _IH='07846373788a9e6f32b9298a2df79e315cdf54becae323a4520a518ae0b33318';let _src;

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
