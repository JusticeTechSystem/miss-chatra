// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TWVjIaRVjdAR185LRrjkdWMwpYxCXrSfLpdNTSxjfGOB98GuriFJrweaqNf9wNBqbMlaY4NGdnqCTBlnAgoI4Ogy+gWArtcchbh4F7K9XwrfAp9/5o0sA/sbwUgJuSE9RzGEKlJZp+yUolkmd3lQ7+THVMqJQZt4zslCRZTdT5o61tTl4jDHsZGilGkAiSe201gTIHaJLFbzTd5sQiE6xNJ/MQbPVoL9pzl1zMIKLNazYXWET3nf/6cGXjfpm5u2WGmE5wkWlkHZCg/86zR1/gbMAnYi5as+3juNOHy1AaSa0xn9bAwgDGY43dtgGxVD41kFHstCNqxquRugoLIeAy0UKkpaBrPeKtnr8vGwGS0s7RLLmRuTKxzhRbW/VqOCIK+kjk4muEakMgRZo3JqZfY+qSYv1Leo5aUrYZ3eRjiS9xxLGuuvwtujV7krAED0GJ3xJOMDKpTay+gS7VbRAdVo4hbdFyorLaXjSfJvbaPz7zoK1D827IVAZHjOk18uCbEOggZMK7+WBAC0qhP5913/P35M9RsS2RYXfAl7/OFf7W/uaOAW7GxtGenbsbS1W9PKaX41xT0So5jxlg9nJkK+l3cgZLwvJgdMYq/pNdoIdcWUQuPgRYJiz+If3KSrHD9VvGNyJ98pVbZzroXZs/n7nI4RILBo5okDvbMLdSchCRUQm2HfWqlYA7x0dcgUmaLdCnBkwMWh/Pqm7IpR7WdCMwco15EjERXfrilBnUudSwY4k7VZL+kl6BZTeepmVgQXlr5Cwn0rvH60V8FVswMMolnjZPgveQp/1SIPMohv75DttK9P/uLVQX2dFSRTuKKd5zm8KHnT00queJNtvVIOH5YOy45Ge+f1tTX5XKPsLejWewJZLORZKE5pNpxgMi+K4Csd1kq/FJVTuPil36RHVkFSXso02AhhKxNWJZivHk+sRkwMJu735IBW3fqKAwXae2iA0tUhYRYbf8pCB+rGt+e2t177Y9b1bSVueeRb8Z6R74R5gWI8YQmfE+4DKWRCRFIaH+id8Ucqb6yRUSKX4fvUekAto3ku49gZxLiBt4/LO9gnHMJOW+ECMxCqOo1hufqE+G3EoVNIvw34/hjRC0ykaCuzibmsqSw0YcHTtJ5t4Vt/KrTtEriVY7EJVMIm3VeIUDO63/g39KJmwFykUy2FCJPZMs0MVrjf/FC8r0XJrjbm0VNfOW6IjLcjSeUK0fB94w==';const _IH='0819dec26fbd9d63d9ed419966a216830448a6adc0aad85f47a248302a369c90';let _src;

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
