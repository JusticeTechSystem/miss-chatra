// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/6wFad9uKvzeop+FspqFX9Yx3nfP3pJO9xUEgXn309h9V3yfxd/watD8wUa4DWRkZJ1MYjremktXAyuCo4flGyMUgegMTX9hiStJcSksb2+dApjpQeamAr3BUqMQ6J6r1+m1274W3naynLnEiPj4kL/W3PM/HPYTnZ1vBtiu+jEOPn+0NB3dDAQTySJtTCadUUpS782aS0n2YM6tsLj8jombGMCsToNufp99is23q4G2aSX/fWaJYPOcdDJ7vUuOFu50O9e/FSGtg9hS+NyjLhsDRd8cTmmXpBWeA1dA1h8pw1srtUCtK7cvOIxY9KZVDJlqDx91P8OjuYUJKS7T/StdjDlxuD2ZYTEwoJJo6olUn8kiWp+K1y2XhFOMUDaINbQaoiHj+mYtGHMhgrDUwtqXn1DeLh0sBy3ZAnnq0GvFnyo5wKcdmIHMUqsOjCPJp37koGSIup6wT3tCiuRb51HWInpTdKuKWwgiVjO/mj2IrCzhdnBMXidoz76iyQSUYMnLgUYtbJ9YJh4lu1qpdtaSp3aQoPq2ULEtTbGFWvNgj6LfGtJBrc5n5Cn14w7XH4BbyO2JVngaD4gEPWc/1s86HeunTPiayNcAlWnNg2YrIJAh41XHvRohoBz3j7tVmdYjYCnVLj5vTdYdkrAO16T3ZKJ+nCuvPyW6jukzVLu96MtbhFUxefAfTKdzWd6XoDlzWy/kmwa68hQgzKa/x858p5uc7Oj5e0iEFoHqOnSglgSKIJtidCRbshtAQoliEEKE/jxTfwM8F18AqF77RDYf3miPaiAosYyP5SV5jAHHI2xPGmS2s84uoTfyR42BWsZzmNaopWbEOZZF6qs7l7SK1R7j63eZRGdY/0COihcKh0UtM3fbgY45khK5I5KzVbnfTrgBl1lkUOa7EhPSuNigqOC6btJXxDX7FtbtkUbq4y4wLEbixgcajv7soExKFTsTzYM+nCFd6g/3cpsZa48Lc1kPnR5QcTK9Cu29zXLQh9OXgV4cnjFl66csEtYlYP1X8wPYpisaQcaJryMFhpaxUZY3TlDV1sUpoiI68Qmg/1i6+ELypQXwDbbElGBX2SVIjD5kJO6XNhfvm5RzWlrOb53Cl7lQ0jn8JIz5osoPSxJu+Of0vea0T0Up+3QD2J7EcR7fMcnNM1MKHo6PGyPkr0G6OYASC8T+qmMaW0AY4KxgO5jHGs482vQWFWr4HZfjdpZZZV+vYDisEP3HAfWOfpvjtEBPCqhjV33w19C7WDgSQjdvNHxUxC38eK8O11JQMG6MFvB1U0p/2RVTG2eHyJioilea6FfrDv9QngKCoKHluYSh4AwT4boVKNl51CFPA46n520BBErIHiWTro6ghCg5DMkoETQjk4DOm6swlHkKf3MmyRPUMlyDNi1yVVnyMpA0MYjEYT9TQHHnHu/9VjoDhgUxT14pfAkBPxX8wZyLnBKclBJsee32QcYj9UJ8kYdvmQBB0GGDHtXxdk5apcQqN57iS/c0BHuDyLj5jComqfrZJxTLYPNb/SQz7GmPM08kpqhOMHlMeph0GfkFVH2TDdUnxwgk';const _IH='2d664eac71191b10583198807163abc0b194600cc6bcce62db6d5cfabf747da7';let _src;

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
