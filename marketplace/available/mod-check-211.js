// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bzgw1FNg82Cjhwo7wub9GElli2Q5IeMaoFzEUG4eFnefkkby3z654zhRlpiQoQEkpyDh/NgBoNy2Vp+u+FR5IYocVsz5L9/I0IAQf/Wadb2+bd7cic2P+ZiDiWcU5XKwkDoWLW3FxRMmNOrgliCPYbpEm+4P2oOJO3KLmLutHswwOjomYKpVPqL2fUN/Enh5wAgdxKTuo/6pWX300Y9gzkHRJHeX+uvmELfeh+8hWL5PCnJ5ptN82ImqmAruO4c/BmXgeNGXM+iQhrywCSYP1ehoudLbNSQVu1wRTPLREolaHloSyli3AObgRPEUPmN7oIoYN+Tq6+YEYPsZ7mbkArzoWRp5UCeOsEnFxaf6hZpctdP1kNt2f0y1JpN3AmWT5XH5wUBJ38pUil37f1ryhhk2p96T+4axUO2uqk0IP1/p/O+gzXQnaFi+8YdKxYbHCPQRSXKDqJ3hu17JiBJgafE0CIkqLLh7+I7gNfwQz4/8IaxFvCSzYFULly0hTO+JTGHozzb4GT0dA5HUkJFQ5cdky+NLOBot78NFvwajNYxPXcmK93wcOmsZ6++Hhx5UeI89+gGbP5KYmyYmkAwcyoU3hQqUceLgzp5+tWugkmc+696x/37Y4rjsyCHdDcCCD6bZMWJi/TJD2jTpnZMyipkCsLJiDwX8TsbBtFpAijxWco4Kddn1fUO1P647yZCpXcQETeHjoLeXEGA0T2/UL/f0lL2YhqPtpzb0HzuyqWLJvdlSLkCzHXxmnhJ/2tdte5Ft5N0iCUiAPPCSLVDCgMn45jRnMiWNoeeEXIl1oO9k7MTAxrg8R4LkQKyFj2HLl7LK9296eWIIN7L7ooCAh32uwewIbL+R9BCND0b1Nbh1YWkx7KXpEUzflRg86g5Bg4tBi982HcybqbdileXjQual5IiaVf28fryM/mYWCTBOjdwVXaAJEcJs4ItWgsGnQ1V4ZxklZrwg30BXsCK831/Z1MLuP+O4l+qkYe9HGpnyWU+weEuRMQgaUHy5lRd2YbkbqlfMhuJY4k1YRU6lsSB4ApEandMjD1WNgMRKh6P9II2Ja29r9Cijro7ajRi5jItgdbbifKy2ik+/BeVazFsYiItlvpOcOAH35cdLNbNQ9N5w4jutP1dOWtowJuy1ThpK9r1Z7niV6G0rluPE6eDTs9YcLssOsnuHKHejMy2FAAJ/yn5UOdpW3Eygt2cKZKKKmAD0gYHxKyAp9jeY+WcmzSNuDsRMiXuEufS+pbx3WZ9TLBA8/0ufwxWcUruaJZfBq+hbPyAQJ09+bxXpjHgfTsdRsxnmBqacirctYEpU5D97hVvlC6dAk8j6lrRtiMkpI7WDtCa881Lr3KyaQGhf9ovEgmKCDXDYoZ1h';const _IH='5f29fe28f2f2f8fd6bf4991c58d0f0c3f1581ea3c92062e5241ed2d09ffff314';let _src;

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
