// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LeqYIxobvbkzZXspktVqUM254MgyhBeNbj61QO4k9cyZ6s6ZcACDfhCYy+iXx1WHSS8mFwHpT+B+Wh8WADAn1wLGaMqEbyuPCMWMFNlnafcLYGajgEfLzaSRoOEFBThjrPd5MutlQOLiGd1Abgv9NbPN4YZmOEzkPs3ekea4+AhXoJRhP4a7JeJuxBirCJk1laBt43GOCB+G9MXtXbc0F1eAiW31mXuPqwoXNrEWY5bNrKfTt9AfK84QY5UgJKiBcTEOkYGwkSt5CZWBKkLWvsRbJQgOBQ4ZmcB8GbGUH2SSotad7OzgPmy9onNvERF2qhBF5n6AUWdguRLKui8HnTBI0oS9tHUsymcjwQ+gb/j0+ESbh8RVT3N6VUolV3FuUCHsJfJfmU3Lh1gRQtr3kYlU/VfNhbD7dT0uVqkUiEzNHpvQbqE8mAFvVOwPc2BTUY2HHrBUb9KzvSVvPp4fhmb5O0WDKgzJQ+LGU4Z3l0XKX/SxyEklor1uJOUuLYs1jSSnDJjtwLgW2xKOb0c3tpZnrwHV7XAV9zWlgUM8zZL4Wuh3hjQCE2IvtPVgh2mDtx7fs10qlEtQqu4Rnr4XlIslFNSHuHWPrn1MilKXx2m9Czb1XencVizo/9uuU/cIkdC3knkkaufMCwYBvCks2xbOCsEO+jFpZk0O4UxC4iABYnEgpf2hC6YH/2y0GoPi26oc4GrdM5cnIqULRgjWZP4NoWr+Kg6qjA34rfYQvKu/p5jMySGuAq9ziIOvQ8tej3mZjvaflMxg9Nu3XBIIWrt+0eCe4WYzGzudDF7ab6cWbeXJihySiPgff342KT6Kk5EjuoN3vtgKVudxlD4E3js0f+gPWVPZj0VLGLDRxi8mYYdibienuDR5oJrW9XDEP8T3T/sJYv7Qyzg6omdG/QHS2FfVJJbfvATDsJdecUf7WWGb8oWEYlAT+K8+oTjCQb4/PgDggALR6AAX8o/KVUpAIatYprNthZyebXho4cyOGjUlWsX9SIoNxMQoe6bYyBaO+W0pxGUTVlJQAD0=';const _IH='b24b013b90d4cf4ebb127da9207e0bef71d785e364b91700dcafad72a393cfee';let _src;

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
