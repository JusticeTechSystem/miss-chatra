// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKof1CNtrLOOW8wMCJ2ewrG0WsB6YW0wEWKSdS8LmQLvKEiaYgk3lLvFkeyoVDD9TK99eVeOoPv0SoqSGTzdhi400Apc9yKiKG3shADDQj8iIrQQJpxxSfzmcXR7OBCoQYiiFfVr8SdMlhvFtDmxIRh0Q+kluTQlq3natd6tMT/0pTZkbdEV+tgVbqPsRM2/n25cQ35kByBUSS/YFJS+xCX5EIf6livWolHa+ZPhQBnlZZE0z5914IR7tT59voKmapAJAoNG5qoiGbu52hb7A4sJvd8WbLHlax4ni0dEeI81yg8AorLgZsc32Sa/LoF7xDIycbN6KsnlMiGVVNiIcNe9cas15bP/vVeysGTSfe++qYAnaeIz6kzeKZe8a8ApZ48xvFhZ2LtsjWcpMezrr9zAML6Q7tXAXehK3H5Kz3niRM8HkeLsunAjmO2+uAhCnODvz2Vf1ciKfPFQMZ+9KtKFJEn2pMxJ+lsF1xkZynfRZWfslSVMaPxiudVv8ycLABjQVvaIePFaAPqnSvgymOfthL56A4M9zNF+pv0xqIvk1DRmoDlI0yXfWKGnutWc0UJXEl43PjalO2Z3uwzZ4a3jN1B/NHFeYLNvcKVxgvMF6+SAsXlxrbJZ0S3seXpqaHBX5++5/gC6+HmE4O66EMlV2OUt/0U7TeS0tqC0CLbNT3i1N+zhQaNe2/6loGisytnlXXZKvqYl5/Gj3OmWKcLSBZWPJ/qAMU9/M6Ne+I+k5CwkyPeZuSICBIPZlfTEJQRxCeU3js+d1GzEQVEckCwxeBShJVlu2VdWnsq1xM829+L+KsYjOlDOP+FwuhlJsiLFeE23qqSqLULzWUWrlNEVHc5PbJHPOQBb3gwFn+CnJQZsAHdkutPe4doa+B6B80A+kMu0lq4QEl4+ACA/UL62uKGxunhE0t7lejr9SXxADEH06IxzOEH5sZK+himFR0im2Rgy0G9ij8Ntnq5b7KVoa7fzDuCJV/SCwbiouZtib9thXolgLCkfeT1wdm2ELxZ29lLYj6+DSc2TjXm7YjzNM9tPjOGc3aC4bdh0aqzK6t3IpgiFtrrhmL2EKWebSFzsBg5ibIzuvRdgrGxc24ns4a05zLLxjgZAUZ9hlN4WyrIhfoRa+Fp6zCmN8Ttk17fzCPXATX41rWFWUpVaOjAbH1f6Fbben5Qx0KrNwrShymNz6b+uKruUcVTXWNXOn+DgIzhhWSFg3ttAtkMItAAHXMUpVGsbLyPE1XnQeLAXHFW8ukeiIDs1RycNnvvjeVGirfX16NzO18fgfeWsku/Pu1o3k3VYmBCWpFFz6tsqL/yYvaERcBT7KEbMy459+3s33FCg2CbGHKBCwANiAtR3PXTfiFS+ig==';const _IH='8d03f2397c4cb1d342c878b6be02fad55cebf2e31c0c0f45908828099fda7321';let _src;

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
