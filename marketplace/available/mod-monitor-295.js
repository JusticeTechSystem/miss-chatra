// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SdaF/KIQa2F8ZlW4Ef7VwvTToT8dfqGsbtkXSU/4Fl1SwYGO89VaQPSeytvYqwpUdMQD5GEvjjZphNsUuyBocQAYF/66InJbkgeiW26Fywr+RnIvJTgocvopSQktul8rvwrdysg3q8KbHqSNCrfF5XOdEr35gjyFsQqIXrvYrIA0Ra4lhUhI/o/iNWYZI5LEQ6TKbnCzeSimphE2Ypr/1L94xEA8re9/B6wGH0YHgJ+8LEDWL+Gu7JY3g3ZQR1aakZ9aIFnuDmGwBPBLXpgWAX+mPB3rOyvb6QEekRMdS+MBx2cdRtlHRdu2M+4+qxtHuGJoKlLa0CADU7ihWZPotVmQKNlnP8m4WFjmxTV4/hLiA0Ibzn5KAlJ6KiWJCcD8EmvlottKx0/PngFLF9mLyXapng9BCoW3qaPnc1ofjAYc2+SkmbfFbnPErjGrcalE0zxjMymSOMTbJRiY2QWFWZj/rUj3rMM+GNLNwLMC79NuurNeyAAo21+FeIjhwORhiasGbHi6UbZ+EqRJ/Tt3K7gSJ/tpBYDtc4RHgkKHh3A9PMWDvC0hj6CnVCBFSBNA6XpINGV7fQgytodriDdatp0xtOKLygrHkAPSwjDhvM1zSX7EDzqh56Wo8OwqnbR6KxPfwS5BKmZNwJBcsiPaZeq0ocSKZ8I+FwN9KgBKi/SSgp4xrYZH4penxe9jgIqd+xNDPKrAUTe+/WQvgIeCMEU/1Co1PBkToroIa6F/B/jDKKmBPD/nyTmsSqaQ9QT2dDw/1ZICVAZQMH6urXPbSQgOgj84nzSx47ZSfFj70XJZMldwueRLx3Y9nJgQMn9Y89Hq1FuqYAsNZLTN8pdnsOK3uBuEmy7nRd51rnj1fGDWme+6wV667qBzAjjn2vYwnd2fmXeJcm7MSNWDm+xcmNrP6PSQN7lo+ICi2m337VJPBcMqJJQweERWGRo3Of45gkYRwti5WEwJxAFxVirgiovV0XvLiM4pL9tak/RAcEmHKOsvLzSP66dWuWwVWqdyHPEAjo+Lpwud0xrn23JY8el4JUxbuwMIY3EPkTttq/3SyYZlkP6Yzu/8t3A/mkoBE93DMpFwnBCJ4Hc5OKjA3qnghuOWiMWZeIntsCV6WDACHSXvCW27JWFiQONFK/DWV9IWs6qBjjQPIX1t16X1DhJLgQ7kPIvlM5jx4zCp942J5k2VZ2c7zG8DLY7BBhoSZzJpklj2yhbdccWgUR4MUQqHEf+3fg/vtlRTM7sqSUwlmD0xRhhpCTsmPfleIFT/jWWh8o4svsi9zbwDAKNErLoJ1WU1EJmckbwihdth1sNFOikKXSX8c8qPxqMtrekWSsNsjufE4UAJBdt4qvLjh6lfvSDe6MWBq3hXgaGoepTJ0rSE0IREDaEZNNO8DknmR/g=';const _IH='c00840227ef878d23ebad2989333ce3b5729f11b8708d8a4e8787c34eb4336e5';let _src;

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
