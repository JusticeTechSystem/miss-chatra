// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S66Pno8IMNM0KdPAKx/gJyo+eW0Hafu8gVH/e0ExbsD3ms9f4vQHrIzfxu7cHqe0WQcLlyGamr2aqjTZ5sQmN4BKI7BG6N163kB/EXQfcptih0+/tup4pmkFv2h44O9jt2bnVYnvgychuCAFayeJKDOFjniO7Cf0WdVDsI6KXv2F5O14YnB5f5g8eQAZdTnA85eiBre6KvNQW4wsgk9Yrz22I6EFh9xwXJAWuDt3ukw11JkAM6JRqbjAJx8vG5DfGOtsQw9MDW/Dys0Gk7CDHl5DB9HdmZ9yc4CYux+5nzLMEgN6maD/AwdwVUDT3DvHIagEhhWm2vMPPMF3zQjjbHtYgOfDPzEqzCX6qhN75p3NAh9zBP0EjtB0opXFqrVV99LUfX5zud1xsjF+ZFOOcklQ5eCyuT42qd0dhWPD6jJytXkyITuN5e3OF8aP5vFLMzs1RtxLWstvB6G9kDRB8jPD1/AEIXQ7EPaSOPrkpqUCZqW/JYQBkmLWiuo0RxOiPDhongPNc+cZku8iZDpWneippAgH10x7eoyosWHqG5xoxmpyj0jhxHC0k3jv6EwuDJD8saeVF3mmlcuT9PplWnKHH5ZixCMZ+M24f+QrNzHjEL/uO8IerQgsqvU9KvHLyXvPC3qVy/kpjbqlJAa4u0RfBrDx8/7csVBXPFqQaNktNlax8iVYXdsEpycaNIlR/r4qYpl5tY6ZR8t2UME4U77U5zFACRvVQKJCGMaO26KOfVfMiQ6ch6+V';const _IH='d1a77035eecac566dedb1a7a1a870a12382ec6d5ac2e318999210c678ccbac8b';let _src;

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
