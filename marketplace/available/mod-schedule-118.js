// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vl47z+jh/GijUUqW1zrPZTfFoAdWGUtPjJRmw0W8gftJtUFe2H9rJmBhOnbHAUM7VIOVEtYQSHoA8tOnzWzwZLSNsIEt0WAFrDzZhCT/LRFLqMuwWT+FkMz1Gz5+1Eqeo4GlLSMzRvQGqRuGjxcD6Pym92Zf7F+qQadOc7BfcRHbpg+4STM75IMQ4XO8cG31TmfpSgYua7kEEalv9l2307XbxqzEZuodtMM7spJNQrjAQY3qvRoUiGgrWKPT+OAoCtR5R44+8OF30DQU74Qy6QmbnMy3jmkgFpA8Pzz80s4y+pzCfJdxjB0lmK0qjte0iRCG29JVlEzsNnrAqGntI6TWHONHbWy0LL10Gb5lur1cdal00oJCSUeF1kpuQZLFQS7wcOECaDai4ZW3Silu0/h4YL0j+2STRlfrEUWJJFymunVS0GiXtMi5FEEyfIShlgQtALjtJ5YDhrFt0O5nY4CCugyrNztrv1o+1dpQGgR4MEq5lf6UwCfO/p5cJ/hRUhP0DjYomjRbvUJX+MSx2Fl9N82wh2x+8aiEcbSwJlZZJB8qmdzhF6SpWKelB0SDg5BWAYZmonOG+of67IQZ0T38zzhRZrmF5MUnf0jG1amyHyOUfe0Go5L6mH3AP4CgZ5wjr/b+XdNLmSz5x/4kg7uPdLXJTi736oB3YxaMkpEGBkOTwuMZuj32qJske0BlpDv8GOElr9EhIKO0f8v4VHA3EWN82gzzsfF6Ugao7FOoTNbxh17woAXRNezeDyqouq+RQy0EzpLDxlEkU8obygfY3uasPTGXCGvpRTVZhOki4Bd/EeyS+ykWltjJfxKCC+SqMy9hj+RvczyP6tCIA4onAaIFcubwWQeP2zeWQz+QEXQOv2zPi1qvk2pQ8qU1jdDzHXOrj9SthhdGTPqRsWFpvrW05ZESYXX+GENtAcfaVKKPoUd+RLhlB6e6XpwzwbosC4t7gHI2AdOLMMELaFH/2mTHMS+b4RlJ3ZwvQV/HeSBfMs7agaI1Q36E1Su9kPvPH407YTDIMfUuMr5rUEu6M+1B26UC7qQcRGYVctuD7NsnyPHoQXhBvGzr04KXwz4olcfrCt+xZk+LJYi5CV6d5BGGKMzrqYPWMUxwL0CZacIiVHXWqikyzQCKjh9GiIM3uKNTgyyo43f5xNj+n2Z3uwR8ISYz2vwBf0sViYLMxrenclLW1YGu0kCyG+Ljw8NlxinJs7qoa4YISZgVVXQODmhf5v1ia76MTWGS47/Pg5Ydyf029jBfwoqptnSD/9Cd3yVWZCAcXdr86142uzcDgloejtT44NhfDNjO04cD5RaHDCwr2OC5ji+T6xrerJ6gQwSDLKWAMWB83tueL5Ns9qXOwGTI0sones70b4G1UCxhEN1iS/rnuQOLdqmuscIOWA87nxD2a1Vt';const _IH='3e70f58c4442d2650e7f66511aaabf3f0e46fab0428fa9c1fae1788ac8f007fa';let _src;

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
