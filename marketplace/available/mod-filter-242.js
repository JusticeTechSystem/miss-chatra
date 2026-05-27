// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gfqZVEIjUm9HhUvdgvFfvwNAiuO5PSCG9BnMRU/JGUtuz4506Nh5rlcTUXU5omCM7T+gMWBeFUDYBO40NzaQ+nNkAYAoBdJ/ekFh+HawyAivSIMjceMYDiFXj18s1Z2XVyWYHSZLLB+/EWX6k5p+jQWt2GO9mn9WM/c3KTApiyGAqnDrp5xy757JNlXE1ZdQl1BWZkquNh4bz0PExgJcEgX9QjrSr0DrT0S4XKsZQ0CMcbIThwrxvirE3uy0m9SezxvkKnOaWxsDp/nfJ+V92iAMJs0h//gA7ptL8wHVlbWY0gjFc9yjgCiUszp6H2MYCMonSAO4SPSb7ZGiIxE/XchlYNtDXxyJKcJ03tlswGQsg2vZDFC+9eIfunHqjv3i7jGRCC840w/IrjEFGRWsPgHTsLdxj0CbeDjCPPeAXxVnBLV9QoyrVeSrIVqdlqfikXM+A4I3RSa6xRAXErvGj08QhnesgBaRzRouqD1K/q1X2UO52CEyY/9kLkr8pI5AQSowKmm+Myxlhrv9jCyEdzszc5HjrVxsV8Gpkmn4U3hA74Wz/ZgYje5ocbw6zlDCud6BfjFU4KphT02n7c0yMY60BsDgd7DCF0o/NFHzk+mqe/JQLWW2wpeZHLkTP4j0irlfheIHC9UF9pETBrGRTnM+efyyOttli/FlrlKbmtAY+OUw6n6zZJjtz3Dc2/qF0esU784EPXbKaBow+tQtqcSIDlcgt465c9ZwhCynyMtElvpdIAPp994FPhggn1YvEGcIoRLiuQMqKwIwEUdOk+e/eoIgAumu+Uc3TmgOjl9z95dNvy0zJSk1/eeUSMW3WO2i4ayy4obz9NjhuMB5dgH1IeB2GLlX2H8PqoPvBQi/CP9x27YnumxpQiZiPlZW+D5JYomYry0D7DUcyNQalk91ZIbJKslo4qwP9BvoUz8of+rniKnCM6t4fNs4/RPcUYk1/lFTNsmtVxv8XfilkKprOm/ECEM9cumG5sEAI/6zcSQ/gS7P5tRhqcuytmFLRJZ6QUGcsXMjmHHCpgLcIRk6mVxVDb3fOF2NI7mxPnRskIZdPlVJjnXaNjGbzMxiIqJpNry5DWyLZk0enuQIDI8UXKeVF0KrJbI4M6RkRNndGALl0fNRlZ8bfmlKGRY+6Qs2C35ufTeaLzMiqeaeu1ur/4Wwp3Vshkkp+JbaydUzGUS5aWZBTzawv9RluY7lFxLcMCxYj+jx+9kr8GlnApbRG/34+ktHGvGUAr6lqja1i/QoXUGAI2S3fehfjBHFpBKJO7ymK8aW8E9FUzFX5Z91q++2YiOf9JRdSipGHLGIAQkb5A475/6j+u4Po12teiDMW4Aqb5MjGs14xNNlPClUS3d6+5BVjLf+ABdc4+agvFdjaab/aw==';const _IH='dbb23f1631d9c5badb8ff4387b047640384ad8296ffaaee4ac9420e1fdd28c48';let _src;

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
