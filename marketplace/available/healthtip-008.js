// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4+Et7ozfLwdmWb83J/btFnIpeKgbht6W4X+G1CqAg9l8YtRvpYx1/7kFP45KIw9Tgs22XYTBJJDCPqEi84CjHaC3AoqJddgUSvkchJJu5qn9GGIH4xWxzrU6XXFv9b7E3dxQ9AvMwIM87BMY19mhgMDJjO0RJ3D4i+FDT04g05OUiEuE6I7lv9llUhc/7Py3MBxobz2tk3RILL4359llqseh55x/Bu0u1etmFBKM91R481/fcW+88HP9lJyxXvqhfulYrJTFEMKtsh8Addw2kOhyEDLRvh+6Unl7xTwHCSbhc/r/Z7QYG3vZstoGxCDlNDdVui5gGSMzGHjRAeK9gUV8xm/6yMru5Yy5ZAGrEl8ia4iMC/bOsFsERAvNUv7Tk0aB489TsiPJcIAlZ1zMqa2dC17eXeCbfVFP86u3YitbKs7+CPETLyF9fsgwhWHjJSpJtWbPlgwOan0527/dgj6T41yP2G5GIQ1HbI+6htvEB18LeKXIiKkHT5UpeCIVumIUqQbcD5kYVvbDZ+eFh1kEgTDQBINVuifdr8wPsgKb+CPRJvrIFL2gEl9kOQxJ0BGDWR5TGfInQqftZDCEerLX1vnnog/Tx5gKDgn0kKKL2ji5LxBITqcs1BCkApSiXPqBXezEfokvY/HbygHKQS6m/vho7NZhAgNF1MT/tEiSYhABgHYSpzmLf/N6UNYhMxutWJQJcsNtizxttNfh2+4vRqHJOTK6AqR7+ysjrxQtasL8ZyvTOggnEA30fN45kOY5yxcrZYCfUjWea0g2naYpYZdzFD2ayNCoQmGJPH1yHZRFPH3VGovWbjVP2LRzRew+inzNqPSSoDj5UJPfGcUeCUma6obrA5rs7SYtA6cf+xNuCdUXAh9BWWAjyA5L3HpIY2JQ42blESqplkW6CwBxK9826BFd0wCXTl9XsEvquCCZk5xlzE=';const _IH='9750caad337d75aa134cebe1b05f964d53dbf660bb9a5fb82c27a0204f4e296b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
