// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9AKMl33sNvj0OdynLh8fnfGyk7noPNyUo5TzSmmWHkRwUBjE/UVoZ5wuJYwga5IiYbAiPdOym/QiDj0Tz9TzTfzipvAqq96NZs0ViYCewsIoa9ydoyD8LUcXPxaqfUG0msCrgQEO5MnfR3epOder67YYtia7KfsAiYojLcNRIgfCjff5HeHT0ptRVv+SBbaqcxp3oK+HP+qf6BOsEf4rMDmtGnYZV7phmFrWo4aFmSrg+/g6V1o9xPynPH8t6I2u7dSDetsmqTK2CtXZViznv0ItNEnNiVd3DL/vUahR9ghiwPjAdz6Esgx3bDh+Q3fRbrmOgTp9z7eEeyzWJVi6eVDvEHrI6lN90VazqjEPUrv6A7nKMRlE9wH4ZfDD7LvrG8v+tLQe0mYGRPXVyD93NY00wCAnW4iFtcHIkqfUZXFvcNztAuaYpDfIlFvPlC/f1OtTbc3fEskhpFbW7LM2PslucLTKjlRa0e/07r0MqlMHE3ciNcNfH8WcYYcqFfyr/jME48GT988Zthibv10q/wezloErECAeiPclkTQH+q1zWigcgRn43N/HpIf/pGXma9EsQ2gOQKwhMEJNzwfI7NWQ9H9+tH9N5MnlXEvOb6TUizfD7fl7nMseA7YELdEOuIcRL+mz4ouzijvanw3RlsroHmNIP5NmQTZV0PXcuuk8u3UK5i502A9cQ2GhCGxeKWu1xzAeoZpuVreF+0+1zjPAP/U2eG7z';const _IH='adc2cbfc4a26a777d8d787b4c716641e29a2e6e4354816b0053840f210b96df3';let _src;

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
