// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Apkie/scOTDKat85PLZoPBk29FdSX80iWaMHz1B3bhZ8sCG9mPXQCQJu7t/Ant+iJZMybsVpGZyWfNl2th0NcxMA8uvI6t2kZ6fJiKa5pXeCa3xvlmQXUF93id/dN+gyzbtIHGSE0PCSI446lQxSIFHAEDmALUCJ8QC1aYr2nLiCyScBjCPXovkNn5/QirJKz29mquNopOyvApEI2tw/Vk1Tw71Ucwn6ImIzxuixdthIqBtF8SwbQy8K177YvfXe6gCuUBVLpvCv+YdiZ/g8e8NId/jElNiDua2HyMo4+u+Odw31jWXjCnf/9vsiliHsVQfcgoyWttyhBJTP51TDRHNTO62rf2ko7UzSHmVP0xAsCzbW5y6CsMGn5fMUuwFQy6fyqHbjR710iHxpVfIeeREu8+V0pwBaERmwd0iVlOGNvveNt4ciiVXnhZH7js8rHQ/kn3C/rgYxPCMZ5mlszPaR4HoEr+55A88SCrGebxT/Fp/rbOcvSijVuAGPYSKUEuUy/LxkdMTx9g/UVCJEvTFwAjpMR+rflF1CVHx5tmtwfQsPMm7dNlSal9Dw5oYpaU+7Bfeu+9nVYXEptkYt4iu2z2a63RyMmmnhnHtF1pJe+sixEDSI6qd9NCVi72UBW/59itEa3IJzn5h931IriluU+oW79hrWDPYV9OMwwGe3as/WsSRYpmkfbl5SjHXVXu/1+OLqvo2S6626w8PguuD06EQtdkg3OQyTIdDbiDL3PtijmZY=';const _IH='816a38c80055246bff8becac9baacb8a0d7241a5254387e9b4272435120722a8';let _src;

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
