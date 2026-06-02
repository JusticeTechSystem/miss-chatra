// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PWZeaF89SFMmeRuxOxaV9f1VlRj6S2An25Ghgi0qD4aDiuZp3SFppAvaW2uiWlitOOmsSl6DnzqkboeUG6u+vcVjczY93n8mwkwVVWDHE3BjQGLjQqAuWd3t6BPHUHL+cqZQhQ0fZWk/lml5jdvuVO72Wa1MvBJ+Cd71z/PGhXgZH5+szwf8hnowRkuWVtBICi5MsriEyLXZ0cnYkeoLLIA659aXiw77R0gGfBz1ho3NT+5bPzrlvdzhOIo4dJmtlDIEk6d+586An/iqSqlA8Dk2m0SHH3/vuybteu2a3/sEgCLU6obPenld4E7dYGYubwCsX6+kR+KHkTBZftU4E4/BEJPG5mehcyOsrq0TlgUzNDqm3orHu4S0XuFRs2IikhllTviBkEvDRSblr+y2sOjM+9z61HmQZx4F3ps0M9Hnm6HFx1oodGyO+8SA0Hosi02eaS3P0mPL2wBz2zwJrVRMTRB2J2JXDpCbHBi68wLiF6Ai7+ya0R2DXPLrToV4RDvCu65NfbchkvqEQe+y1LmrL8G8pxlTQrIpJIYmRmCp+5b4ZpconoXITJwHzFQhb8PYP8ykrJzVs75BbSWTkOqG8Ya8tozcxjNTCiUsM0/9igbVwzb4eOr7GKIPb3S5ROV6pjuK8/2XPDk3wIT/PrGjmr3UBjjf+fHNpGislRaT2HiAlIouk9b7GBgE36WvfQHcBX9W9ym8Lh80QboKKwHPqlPWu3cxjg2jwYR1ua0DXQ==';const _IH='0c5e90c788acd93ad66883f73b5cd89e75a8a1d6b724e88f9a7717eee7aaae9f';let _src;

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
