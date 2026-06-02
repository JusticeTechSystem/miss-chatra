// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gGZvsd0p6imgViSUivo1uc5D9Zijh+VMsF/mYGilHAQ0FKK3dxh8MRNQ6dOEMSKkQcMsH13RgHb1xpr4HRLt02fz6ANEkSMWG7NBY2vJNdLzl99HdhBxCFRKcPM/vfgextCD6c3LkVUTIL0o+vlKjsRMPC9TQMUeAczAruOBtRdVZU0Z5ULKnLeU0867UAsHehFMVZcX4tN8h5PIPHLXa1QMFQjVQhKDvbfgB4nRmoRiu8ZSdig1xNNyz9kvztyg/AGczZaVoCjc7liojBHYdONpVWagPLe0U5Coq6mXawVhukPH0ME3eeKWxi5MXrM8WJLyrC/k0EoNn7cfNwQ8JgUjOd/8/gZcdH+591JjqG39K7JKxbUZBH3SZhOLJd/9VorbQkIQ80YdMl/wCWwQQM4x5hlAuISPZsvSpghni5XHf42JqS7Rt34HQhcTv0eH4i9IcURC6s45rI4ykhEd1qS+osSb2i7FHlV86BuXwOJuJhvWKarWhpaxCztNcuL9O0/yDkahVA67D1+Wr39EOOj2T5LEn4IwZegC9Mow2WdNk1atgguhX2/BSo9WglgVWEqF4YnRu5GU+Kzh+nmplulbc4e5YgGMGsL0ykTFCa0ojVrDQccpGBPWuZHh+HTPi1MAsY81jN0704c+ACDL1A03iNnLBrh8LrVzh7WtbNXzGuc7CfaEtkWttLZ1Ev9o7JZqpSWvWEVfcq90kDyOcJiBhaiQxtTscFHRaCQ1ssMeUIqdVu1ZjzW3tX+s0nyGWHvR0MnH23Q3p5of7RtjjJbnleET80Z4u5nOl4w15HE7rkfE0av62OluLbBixVoAKpopBxoKufWuIK/of0oma01GjqB0gSs+9sZ5KFw7VGQ4o7+XixgmmcaQEggXUQo/drtbzHKmfJIaA2I76aYWmHV0idVmS7cmVBbvedgJiwuWLqvCJHAIUkA2Ant5s74qf8N5gPq0B4ajE8RZsvDG2/1TqcIgA7IzotPB+JHWqAywYdxVnboHP2Tx/BDAJPQqSBX1z8fqV5ru+EBDm/vviX+Hk8TnS2/ijhllTZLsEaV+S6VAw1OphziaY7JgtVWADLcH84qMmLnP3frg9PF58ze9RX3UBPHsh8AyTQDiGW7LLRjMujk0rAMLpxVbnZRJLih0pY8ZVw0guKvMrNAgE/HMcBe22dXUJbKT5+gheiYYQVMV4J6pI8c=';const _IH='1a535813b9470c498381212a9aac659628921737556093bc0193678e8e83a9e1';let _src;

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
