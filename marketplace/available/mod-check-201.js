// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mmBPucqkachG044VihflsUwlhFYTxArQ96XlFmFiqorQVpOfz5yEBC4yoRMsDuqvDZnbiMDM0yza0O/CheYPy9chTZ/nGyWb/QKbV9SIUIKKnhs76rf+nTcgN8grAmvLaAKrLsTNKEmSaERASui/BdOPX3NnnSJpkZD/dOY+RSKp7R3VLcmCcwfqc5Y3gSztkRSqeLb6cIvZ8qC08w00QX1XQ/bWqtvU+0wxJgCTX8s8dGQMSFZIYrq6Vm8P0phsi2hw/ojepZiH2WI2cF5PrxyoOISV+GzSGFde53YBZzoOycpRpuc3+oawez55grtR8AyzjwJQkVChET71hzxemLze3kIqZOV2QlyvcVXv0qjLjfQKV9G36qIzlbb6EaJrpqnb8V59wzHkHBfZNU6LPJkEa3eUNURj5uhCFxNRFHgDTLcEGTm9VY0Nxr9XzujcXQBJbbaspzpR2Stp5iUS24h+CBa5z8z/HjkVmu5a6xwy8fjf5MiSoECn6kHUqlJ8MVyagat+5XxSQx9IJx8kseD66cMexSGNOXj1FQ/Y4TU5yRCnPGYgiRq50jzHOmhV/5+6UAd/WukylGL1YdC3IBOtAZadqZuHCOljObM8L1Q+kOUT4uebMxC0kj8uG7HR8BL5GmHufyuaMNcEVzWrRQkfESe1AD7g1mzss98J66tfrTihG7vAE18lpd+vhZcspcqByV1rx1HwWu5eVC18NGcqZwr4PzZCgJnAJmrj81NwePC1lyLPBqVTGG9JfXaxoio3z7OdAPg06nt5W1K0d+vd0Wj/fZ06cHBC6oFhhuANcysUJmG+9whNKLz0JwweUUac9rjjPxg1Cixl2pSblISi2uPvJbxIcUCcGskMrNY4DrclYHZa7fNc87w6jmINVOqGw29+TIfU+YdVdPD52QDIg/pmWEXiNbbVsg6Z9U1pFImm/TKuKBKVnH7wX+dp8UV6ZDu7A8SRCJ3RrbIDPG22x38Jp/MvGKfZPW1dEcyDB3UTVA4blLlKuhL0kgvNwzYqwtZ7TrZF3NTRmgD+rjp6ENk1nLSJP0kPvzWNJV6i2cfqUBvElynkWcKXTBEPIgzo4LJgh0+u6Z6Dx82zwLGoZZZRwh5/uXFGwNlmfgA97Utje4M6bEIPiKfuvPraMPZeWn7ZNdMQ6jcUulaAFfXjAfz1K81FKMZG/IXJx+bUP5a7H6PQwlu8gj8eHzBbJq2VyU5HldXlYQmZombgyvmJm/CPel48QI3G0/03H9pmEDDkuzdCMevQT9L8YSh1aijvCL5YVF7p4mqWNHRQ/M5yi1bRM0joY5iFRAfVedEmVRbPRRcCh/stQBwJ9n1Y2wUaocuelSYEp4nBaDfzsEP0tI04ERP1mLp702aY';const _IH='50f6e06e9eefa3fb0604f3151b907f203bd5ae8c8ec7bee01f7f3057b9dad7ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
