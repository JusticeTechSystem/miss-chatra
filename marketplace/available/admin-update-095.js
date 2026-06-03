// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y/MsFIJH9VJSOyjebHjcz2ZbTgeiEhgCP/2X9gD7JJF8fFG4s1/mg5m43MWozK5bQbdTUt7ZMwiovBuepAieKjTOtewtd+Sq2RHywsah5LtKtkLK7Vd5konWmbkyx3OVTOnrGQTZlShclsN6EFN/Yop51wThH6o8kkOe4buXF7BMVOAp6rGx+6E7PSkJOEECMzSC10J9BCKqcVHhHRtzCYMBbsL9IGXnMmyDrnbWBLTjWwN874F2EJw2L2yidji4bLVPZYRKXc+crTFiNixcbnewSeCX6JTHlITSJpmwXNUSwHoyEDt/qvi8S/iQBnFjGXAU1BC3aTX19UGVzHQLuFKxYmY17996C6OPlBEdU8kTwiEuKpZMqm0Kft+fKqpwgVcVNa0viIPHYEhO/7uENYqbUPTkGdUaucdhbZ98qij4GVqyr+61Cpjr6FrTHcxdQhdTxQFx+mGaxBoG0q96TpD/oIGufGXHddGCF1Uti29xLszL/oket7ap/7uUA52w3vngbKgYHFfgvnF0/CT9XxvdUcfoYVK/GsQfBpPLG11uzTk0UAIeAZS9d/C+jIjP0yOo6bP8lrHzVGcCvFDhN6ovHe7p9/HrMFD9FSf7UqGfqXsinDwIaUZtrLEdkkg5upyNckV3RHPdK7q9XlVFCy97VqRa0i8Op1bM+MCrNjd5EiY2epcdNukOcLUTx00vqUNEf4Xelcid9D2gFgyLw1lslgc54c5W1EsyD87q4IS8oPVCVOjsMiiztLgzGLrk4vuo5huae0It6uU8pFf3N1pI0ZdJ+DQ184vv9UWPconJ8whpEvB4dniEDt2DE7XKjFz9fqoA4DZjSb5h62DL82UzeVpuGdxamd34Zk3ji5P7che9KvCAtULFDYpZj61S9wGMbgfDFF2e+/aa7PZIPx29dZbY/ZsiBKSylfIConijPmID0tSxN918bJfQLWIVLjXJ8LHdgIKwpJEjIw5HXJGVTTn/mw/atE2QGyJmX1oMXkf8oK+mrTN05rB+';const _IH='beabb767d93d32b09951412616a58f0c9ad9a8c9af9eec6e0037f2adbc427b3c';let _src;

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
