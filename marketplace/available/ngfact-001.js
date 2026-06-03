// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ajb5aMmo5h4ALrlThJvXmpKg6058JzgHx+f9778Wj9BNE8PQx7vA6uBZjL1o1QFZbOwEjEoyKSxt/Q59FWcw4UDays2Z5pX0PVUzaztDmoCF1bEMVEwQNefz6XBS7o9JUCpOC/HGmoiFaK55K9woEfYaQy2rp7pBDQwy8BbovsQrsllNSved1OoOBqyLwPyX7eJihYTBsQIc6UEFR2XQnj7/8mah78TjwEAvBGzthl7K4zZ+igTaFZkn2Ti8/GWB+iybVjijnyxFq9KZyo5ba60B2T12Z1NMWRBUn56hS/j/iPhznxWYCbvXn3E4iXqSqUnNKkxpFHvzgBBCG+iXNpjT48tBEd+bfTIb9yXbqGchCOPkefOfUqAUIZgesGveWjtk0Gf/63gBUbX191d5EemDxgQ+r1SCD1ON1mRs6mPwkKHHNiRMZz2Pc2cLOgdAgp/Xvmuci5autSow4thh/M0Zuk6rvqoH+xx0kpPTXCAtbPnl1RiI7tQnChbEVHNbXVsF7NjqBHFKk5xzMUwzlP/FFBKhCB3wp4tKvFtEnLBoCGKBojcv/Z57XasXDM2iMFJTtPaeslAOTDHMU7gyEXF3xOTqwuZa3j5MEf+m0EGjIDxVuvtCdp/qOAmGcZuINmROf5Mhjpj7irHHH8HOxYDMHjOsOuXGTDyley/1vf8Y33jVJh6SK0sbTWtzf+mDaIk/79FNv+0yuE0=';const _IH='86648ae0a60e95fefe8d88e1f3a89789da0ac09558cf21bc43ed204989689eff';let _src;

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
