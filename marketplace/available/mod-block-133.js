// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vis+4HW1QoPHfK16feseyzpxlHcNpMf+AUyL6ToiRbrj4n2g90KBjqxo1AqXsGBcIxtbaKNlCbidNdgtKLoJC782b7c3QKR/VAwBopsQAnf9XZGm7jxd6RuCfpdeU+MMwA1/VWrAAwUF5tniAF921lr0WpzFbxYHrqKELR/APyHsQquWs70xJO8M7Rt3SgoJjGfnWLBUU/lmFIMS/X9XYM4pwkSHF2nEFR/pwWw2Tzxv3PRjWX+OkvzdYitt6ieIgekRihKNXOnfxzUQjo43RBMnCHiY8xts+Kt0YVtxXEEsgIRW0ym9M6PwL+663NoG0BZByHV6VCNKQ1rSL1OhM2V7melekwi36cfuEhx89PiHUW8xXiMV2AGKWoJ76UjgMh1fVVYrMB1iee8IBn9tU9n1aEl+aKa9ON5xs8VxVeroBhHRULEmgVSeK7xYmZ7ZURIihd9IjAPgGWwmtUq1y7BQdq/IdT7uBs/P1hDLNJdti8kQdkq+Pcp177tD/eSuk/P8iEHgpfLgL4U4XbgNh9AxS/Y6lZyCeiPTzDNnx2Ke4YyeMpYruzL/HFi9wj0NRcklf1fERAF7H1fUSSUw6eW+GM1pzqQLaXTNABC0F2SkPRMRR8X3lzTZU9MpKXgFC9NIdHQn13pdzFYjAlRwEwuKMsK2dAMsSwyRhAvL/DEGtbR5ReHqIANzXsiORwGx+ezZkkyVpYPNqYacZ6NeRUpT+Eb59beqA8NdIGWCYlZoJ/RO25DXtCcOb3zIDrCrHzKUm6OgFhUnCp6AyRGMnYkGmYE2TYCO604GaIl3cTYUNCRm9EFFckEdXx3Nd0IXIwgmV6KmkWyoFPpdzGbIKi7E1R7aFDp/K3LgetLDI3aOu8eWXuX07jPuTmRbzLFCAr2Hv7SI/Qx6Mvl0ei1HTZKdtiEj+zpFN2qoxkkdzSVqZOQFrUy/5ISHaEdhK/ebN8iHKE7DchRUyEevqwoGh74SVvnY17Itrqm5fr/C3Xso536pFns7kBcNRgT0lEiU0V5qSRj/rQUWEYiJoM3Z6HWjHeYGoEg9FAvOo50ljY4Ov9XuGgVu0y7oVUTYson8xif2ApjRgyy2iwXEHWWqDBVUxv9dhbfTYDl4UOCmmuoxPtxUGgX0kelMtPs4XwXSzVpQ8628jV33SIKPydZAM3R7I4klA02fMbhzpqXoKFeEzKT21S3ZysmSbGyVTMGrSA5QA5sqGznyBa9bWD1Iw7RyJhmoIw1BSNWaw5DtWlXgrM9YhY5zDLsubWxZKcEFIqehGhRKX1jdUkvil9IRZ76qCof2trWYgJHfx46oFcf0ThZbrY9nr2oeNNS61fni7snPwuOZ4h7ZnPKtlxW77bSXBK64u9xAtsrY2S9';const _IH='accf8e9817ec11d296fc9a14f8de386ce59d64d8eca43aa64d3a6352f6cbebbc';let _src;

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
