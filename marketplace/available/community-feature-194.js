// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJBph18V+uzYd1tXeHSsuzPLqSB9fWsaPbSxSVvN4lVZq6uaXhZZtmXHCgrXL4XtLabTWeSW3ee6rq+zqh6bEOCfRDkQx0CllVe83qbxfDnhpyKMrj2dPBAoOWlFFgqdb0MtCLw1OSJnF1h2MmksFERL3vMTk7qQ3kuktiw/5Ze12A564e2pQ2ODybRLg/lulo3wj4ITPmi4s3/Q/UpHNn/FLQ5bnxqjteK8pPi/+xNyLct9uFmU7cXQJAQ1bdWiD/oeqbtvIC/K6d4lj9+SuhgtS7Q7CzgyvmXJQ/T1AVm5U6xWsi/n5DZ3LkgNVItAE+ey+9kEL9yofJ2EG+r7/RTgl7JeTdEkEmdVWelvPMKN91H1KEH7XikMCLv6BQMF8o4brqIp2yXCqJ7O6hMR/ZzDtJnA5GBe8ABK6lzRa+RPkZUls3JrVoL2EAsRpS2REmf30lRkVRow+aMNB8W1UVrtqAzKeBA95x7/IhEo9L50UdIkLWvwbUgivlhqV/i7KC71ZTGTkMeMSFhJrmLNDamb3iHeRBAWRPnSRZe5VL9QNv+c2XN2e6sBZ7r0TOMBMvNZUYoSwy5p7FcfreRS0CLbbcdSYpgBoydvuidW2WwG98pjuazWNpQ8beMYE7QlCLDpfo0u0y70ERQp2O2QATHV8N+3DxMuu7t8214qw/d3+zLgHB2MYys6WpLKkU0dxB/rSzC9NWDeHx8BhrboY9XQZA45zcKzJVmWmAe0CE5uOqCSrAk=';const _IH='48dd04adbeeb775559cc89333934d8d4f2d683e5fd36904f4f8f0a5154aedab7';let _src;

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
