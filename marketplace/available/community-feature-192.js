// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yB2eiR16CB6nxuzchoOvi2cP6cmKNKmxJyM8zsS4+0pz3AXv0N+gy40mT1kmlH+6F0oKEbKhvbt1z319DdEScdZipkFtYWS0ToKiBFI5RYZvedwJKTNcPBNygta0GkUwQ2pkavPZZVx7mTF4NHSEpyz1Nd/4tFF9ODpwY9WcLIZRePF0iM3XXNkgNRlnQ9IuLvaw2eXacF0H19t8BTlKAhabTW0jfI5yHSHhk4LTEg9AFOpopjprnzapKKTmW8y6wIihbWPpiEzrDlT77XhuFq6Fyv6MXmk7knImo5zTOnX58rIzk25b1I5ZtJGv6vW9buLGn1qGoN/2Hu9B7alZBGvgaJiYP5QoMHSTzaYzKXdR+eIgNXz2YcB9V5d5mZchZUNK5AYc9lcmEgpLd0Celc8ATHnskETgDwdwJlwARYWPqc6CDLtybEB2HEGVuTStiHBkeDdirxYLioNNLba9oGOjZivjUFge5hmba4Mj2IYCPKgg7ANHlLYMkVkJqxxsKI5s24DCo/rrPDku3bCw/dX1HY28/XPuzw7v4HXZ5KwK/wuFGqVX/HDviHBHECSRrW593Sj5YdLWdePoBD2rwC7gYgL9IxlvP7TnohHE21lY1AmISsyxQBKlg0bMrgd1gKgjJqEaoCQ2gZW0GcukF/UDGxWksnqLu1xUvFmu3kZBM3tRu4M1N3+2PbVQNishs67/4QUWdr7duOKBz2AXprMi4XLc989OEB5Xe3LvQwA0UHc=';const _IH='d405fb405213da3330f530b1716728aecd9bd35396f27bac52d0f298dc0a40d3';let _src;

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
