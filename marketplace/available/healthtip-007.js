// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStF1SYi/npNlg5/AYEYQk8k03aIs0h5O8mxGpI9gD1Laj3/EAgMwpgHtnRCyYVKweQSC4Kt8/aD+vM8Owf0BM9ASFbKGMQWtxto3ZjUb6YwNtDKFMbhWOiKVkb/ZBH7b46/lOnNjh+lmcw+XlIaiXg5o9iwO2WSGjNDc4FvWqQ4EwxbQPj3XNNFhhEdJBrwzMb31iY7I47oUNhmHYogUfcTh75XSwBdHjtNzt/hRcrXJaGiRST/GJOefF2jJldmSCAODhyXdwGM1lYh1wSd8AbuzJzsEXKdQyEiuDAYwyLjbt6WFHeglF2CWEPAmKuJXE8oMxrpTBohxFHkpVDN0MfFQi61d8aMtvfj86kt7Tji7XoSziTD7VuRXlC3SG1JSpbF++ikA5z6wZwJUKG3YOSwwbQvA4Yc4VngHxUPVCi/hefHsa+xAyf6BibU49GGJvzWx2Y1fRq/a/Yer+Pr3oVP3G3Q4DH9vsFavafS1zRJJP2YT9dD4AWoD3+WO8AaDmZ+uxhlV5eojDsja21YZ27Gn0fKXGq/yF0jopc9OGrTp1REQ150MR4YkUynsYU51NAPsj4jDywzKY2M0yRHjOxY+OiyREmZzy1cgqN/Rnu6BNi1hj6OU+KjD7+xqzrE16WK72cJoTtyVL/8H+Q0gHenNArKXUwj0RSix2JPTVjOTtIZCrbrI2Ra2D9wpKKq8nR8hRuPf1r3VG2FvXOo3Y692yUnp3mS3CSUNBZvPRdRtVElMKb1tKGlke90lMNMIiMuJ4NRphflhHBYOnojr3rmBOb/D7Qo6KSiwFuevlK0CYJZwLcLrWfi9qhIlqCPRB34I27nOX9mGMA+nk2KlAS2hMBPwAUKQONZUx4wvtxCzaOmRK0UFSqwdnEEmr6TrYrIfwwPG0Ya5aGfDv2ef3W9WlRTsYobCtmfjsx1HvMNyY8/9O1to1Y';const _IH='259aac95a08dd5135e55f5ee6de3306be7ec08820e9b150a7bcc8c0a0245fd33';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
