// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/v6Fyb0oAXm4f8v4bpJ0E1IzJ8fFa5BJmWoOy5aXBJGpEpYBuVwTYX7kLtIkNp5EkbniWoh2lFGW5tP0oQczQMFoU4Pb3Wt10saLOi1JOiOYCeCCVWMYbO9m9KVFdAnlU/94EwuEPi740eertPihbEr5dipHcorLhELqecJUD1a1ZcJM+6DFXg06x6HkburnUV2DuHQ4PNFNaa6b44GTu6O/yCjjBILI22PNmkxqTrbPILvE9oyrWqCvuWQpFnRBKLZ8gBImL7TnTUTDNPbsE3zKfBhWaxZ91OPZhb3pvGddG6wxZIWF13VsGVmwa+5rhnwC3LLGgNWxGXGhakm8jP6j0cyJAkANcR99kW/vwlJpjegVgd2d2sUrKGKkATY/0QzqdXxqHh430gKkPHcj8QHkkRVL/jU318VpoWr7xgWBgbR5p7o0aD24Y3OjSewnR5JkCkMG3fS/RnRb/qsR/m5wJXcT4Vx5YcaknzlzUn6rYt4ryJa4mX1TtlO1U++oHSnJW4Dks5sA/hhIoEJVpihY8MWf8H56vrkc+lWDONdu1cXZzTnG803Ei7LMlxE8yGUVMsgMmG/lV/s4n6lehfAPX8evX5OKxupN1BtU0RAoI/GCFj/ATKGUaF9Kf1A1EqJ7SnMm6+TMy3E0BM+ZZdDuiujzN6PFyzzvyIBQYAxG9boh0dVGkqHp31vUpqhKYr1klUBvpjWXgLtZ3Qg1vtfoWEMK2KhRAgpdVbnBZzdM2DyFuphiMXF0G7rSfzO1FncN8MRQ7HndfAww+QV8jc8qfholKglzxl37IlX/G1eZj9xwbW/6GAb1ZzXo3SbHIM7CyfcXTI+j7jhjDTXuvuouVP58NAMal6rq5vpysMX5L3I44+E1+BXpuR1x7/vVU/8UlDBhyVkzqE3pLThNkqxptsk/g1aVlOU8Pa8PTjpyc4UYl7/Y3D0yVOByv+sgYFD1gO0NupYVJBAEgByL6LGvx0Q/cFD0NgUZQsD1sLIcBULv/um6PHYzTl/XtPxbc+iWIzEI/Y+lrSDbkvKWw+uhZRkQ+Sa+rVFvlh+TKj73iaLVmGD9qoolSLUeNN881zjSM0D/4Pjhd7rd6JgAOvRfg3sh5ACUovIpj9THOSJVwVyX/REUh2uBrUE4ffcs+KoSA0igmYpvc/0R5UhC+EZyNLtVsIwCspmkj17+7yxUrrgg0XRNguemF3k5yXudNHK2Z2//YXvqPdFm6tSQ8HYwM+jvqQC1IPa0Zys66j3jQRZgdgrlTektKVOxaYEpb1MA9UISa873H/FFfeWZuDS4LMpKOqX02YpbOwP61XVWAbzGqpmkdOe3DbIZXaWec9ukmWhrs5E+D5sKpqUdrDpuRIKkR6x3og==';const _IH='d06bc0c75845870cbd446b217d5184ccc41292938e8d0eb35c111d9a123cb13d';let _src;

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
