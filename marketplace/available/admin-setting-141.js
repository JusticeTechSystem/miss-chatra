// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZB+CxM4jIDN0TZk7OUaWFg90lT9KBu73dG+jJaoZNGozjmB1F72LeUeqnxvn3qKV4TmWReXjESU4IAJHsMgCAEMQ7MLVym0FmOFiIIdzzMd2gzhDdu9ocWbLHLyNzkiTGdiXuw5fmshWkV/rZyjZwb/LUUw9WCa0ocGZUVQtR60GfpeGA1tTsVNDvv8jpfPBTHM9xNbSRm/bKCsCOFlRmRw4jxEvLG2Mu1KdyQJIcj4uPcl4CltEnA7UvhaLPRGKUI0lMrUSIC3eLoPtbNtycrUbferUu2AsPhc6TUhBs9+lHUWyJvzIXkWUhYdHFZjT76xI0anyCkkVFHhma9irA2Tzikj7WMivMEhfGNQ/sq5caXpEAIridaDsDQJrXcyNSRGrl6YNw7wmmH4cR8lehA1zzdc2RzTG3JZcxYGUPBzpsha/4tHhtiIJkF1ErEmpuRyR18iq6o7clkqpIPQ8YE2YNhwjNFY8CgvnBiidQetcG9o9h/kqdAc82PYpuqeVWpmoJS9Bk7zJdIQ2QivlKF3yM/sRhhR/fUwKegDHHucbITzHO60L7d/heOO8tudUkG1MiakTaFG89zS35B5f2rNmP2C1KRGgjrm145MDGtPGhnaI9Hex7V7cskwaitgYW66LOnqDh7gfosgJGWeZuFKh3KoAmaCj77zAeOWiYVTR47rbkgFCKRlGJr7lqKjIjJM2QEgHsrRl9Mle9rZcjkiq2OeOR4xvMgKwcVB6CNcSASpcrfcATgVoWk5yzQi83wIQFPqjXOPvDNvwQBjuXtRrnYQ8FyjFs8EeQzgjYt9/EemTImA9ZYeGCObJD5Qw5ktqt/vARauVKI7BW1bLm+1DJBcFJ5kkepptMoQnUPEijTWWNmxD7Bw8l5XFzUkTLtQH9L/pYVZ6IUMmn0vEXtOXHWoOBDzZxzfGTVYCrfY7oZFSk+1zmC1Kpz/49UoyYlRlt25npSlw5YKZ7s5LZVGBV6bXl+YhIjsdJQWZT04T7GMyvhWnAQlhCpvLn3MEaCpm3EwnX7A=';const _IH='a6c39983c1b98ae5a0eb1d2a5b4b46afe4ba70d1ce80d5e0a6102d8b75866017';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
