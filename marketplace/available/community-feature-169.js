// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ka/eJniAPOYDyV7FrzvX1oEpXUQXnHgHZW/wfMDfSdYt1FrlAr5xJtXp0IT7nCgqwuejswGgE9tL42XH9OPu6Ezh/2dOcAbNEHFpJj2XmmQ1MAtwOTV1OO3gLEhgufcas2gMSSQdDopIoLiYs0czayJ6I1WDxzCszooyK/wxGvpokDjljvzd26xbaiVFsV9Q9mPtFkKUM/B3MIMx4xUvXBKrytJyWWBwC+a6TrXPYwLayi42ZOiSMnWzNBBToa1NfRcucrAkA5z9RUQ3vdW5Qrgj2mQFFZ7MaMeGRmNR6VgEUWWJjl/WkkT18qZCXU9PQq6BSvLFrK7X6ThiS96CgsRB6BCeB2ledMS2RT5sSELowowtggp1YhS6+YZSITaxnrbLx2hN8xumFJUk6E60Hrjc2mN3EnQLsUrkx6aaixcQfjIN+wr+DG2WnBNrIuh3lUrvKFnEMbGwqMtlkbj2VbOgIqzxsUPBpG9/7nsRfe6QaoicKyQZhDuZB0q9KT3iz5HNDQQZPy49BSMcOhBTfjHikUr/oe9xhTUtq0itBK9HRHkPYTds92RghmbBP6uf+cVTbZA0fphPMTDlqRgbWUCWhC+0B5Vw8DiOtJKl9qQacV+bo2Yjf5OeWIkS8hjnGzpoQcSxLYeq/IQgxoaB/L/6g3goY6Pzr3izfveWtgbE7Aajjr8/5EahmsEGEA1Rky8WS5cKZAPz/Yr3iqJA3jnMwZIdDJO0tXAGWxS1KxV7/HGh56c=';const _IH='4a4b552085c8e54570417fb1ddcbf807984d680644d948989ff18da1159d2866';let _src;

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
