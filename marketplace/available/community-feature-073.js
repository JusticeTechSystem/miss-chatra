// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TeD6rm6//Vz0Y4ZMsWiOQzTsbDXW8N7A76yBEQu5Wp4hIK5Sk9eDVP3V3mgmOc+u8lQJ/nKMtYG0mPwaNtyEx2vubdkJG0i9EScIQ6aFnjMp8BXceWj1HVyO8mApvCYrsvBSFyn+60mhV16OG39xcUMlnQ4UdCZqcWCrj+a/bdr3hxjqiCG6h9nVM0Q7jHxWxUNPJqVq0x2ZhXwqHuuHYPZZKzb0efm+vE+IMkQuhuQHmd0+S1V04yv7SH6xyHoQ8gpQcXRbH0XQfs0WSYNwXLZDHk2y68hrYbXKzbIupHBL5v5Aryv4tMtgfqME605yY5cLcajqY+bnFZg3/z8mqV1Y0vQ48QFcHBv+h1G+s6SVF/PSa/LZX3RjhgU1zmoQmwYAsXkAiOeWthE85nUqbduysiXTihfdbCA2YzIvJnYm5yPi4TzOCCGbpFQicdmbSX+/nuvQHY2yP62t0atETH92R4as7zLZ8LjlFpFfDFnCivhOaW7SWF0D9wZ/cRAqt3LhrmM8v2zwKYgX5IhWVoee23RFRC0YLC/FH9no9Ox/taZ5ZSTQ7e6EdEGDe8cEemAyKHI1+dipb4cnhOHpNmC5aYGKcceXF1Chu2c2mu0DRxN30BR83TlevabluB5jpLNeyNdhvtBxqfkC6ntDbsRPDJ6XpayMCzEhTbdQzfNgw8hpW+wPzaVdhV7tx3/fHEMOU0eb5f1oXXPnJiWlCTla/j2A3+QG1A==';const _IH='2eb648c791969a16ae17dd3a58ef8db77e63eab1e0bb2ba1e0f33a25b0691637';let _src;

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
