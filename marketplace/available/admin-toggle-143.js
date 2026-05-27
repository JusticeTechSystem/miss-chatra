// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nh8KsPY/uRb7MCfdwHSMssq30eqrybdAzm/pI72+gA0bdFUuc9C5nF1SfITRtdWAAZ4wICxe4v3F5ZaBwDtg6pCR17PyC5VV7AXglezZ6GbR97tssYVuB80n4xLViqgX+k6+nMCkYlwbn4/DT4WfLykXl98IoyctPWWOPIuWepVub6D7/zzJZymH3yai7gwN2HsxYHnilSOXEH7UnffPdYxzwPgE9zLiQgSSPoYqRIISaY/ORCpEPm0z5z5MOfsoXy2cm2gyktJOvlk2t6oPrOj9cMpGMZkpZHdaxxQVAs9uAQ0htNHnC2BGsmp4T7zXR7l06Rgr5RnSgnxbc1fDb2HDYeHXhSH5iDQk18r5X9l9wGp9C8Bm197lcmXXuVRwbL0OzLZvSmZENmL5mcwzGhPyia0CNifk+iPnDUS5TnpsjPaAf26fMXDJ5POzoLw+4HiDP8FCzjIiIdyRRXsMqJwjBX/DHhGHmn30owFnC+kx3TejYKlhDX9a/5wxm7La9xAz10tPXRU2APxMtPTWHmstKLc8IZk1Cqu4Rd3HTZJHm03nNrkHPVU0wL4Rj0DPxOfrLiQp6ar4Jph/Qqp+2xaYuNQQRWz4u7DZq40gAx61PnR1fbHsugRMc7mbtXwBQ6/bZZG7McfvZJUfCjSKvPylzZHCQkXYZNfKOdBSV83UTLWqxiNGRssHVPualRkPomgsZvh2LoPM4W1JIISsnSqDqfQZEJ3BkX9GSDAG1o+NDUVJPB+r8OAN+8t8d8EK3xLSJlDqvQmSh4VF+eJUMW8rNmmQWbvLJGqtRMSQnrdEo2M5qnitTZzFpTqPA4IFyJzpKzpYnpTSa9cL9Cfwa6EVDsR5b4OdEuGg3s7z35zehJDrk3n7j1TgJHDSePcfOxk1VeBbfjQZtLjf0hjus80S5S6XFDCLJMRXM7PnRqGZtATRxkEME0zwDNUMK0faAGBF0SzAD0LCyzsWzCQEf2ggxenVibFdrskMmJtWEw23Qo0ekj+BNCdUl9OLZL9FuQ==';const _IH='f5a28469e28029ae95d5a0d58dabbbc97f6efeaa7a818b5aae9c4ac8e8871015';let _src;

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
