// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p3cQj1s5PaVAGli8aTO8q4wjRKNvtswfkCZnsM1dWhVp90b6inzHl9ilA2sEiJUx48Z4P502FAyp3J7aCY7x8FZtD7Vgkz4jtjRzQy0GXNNDk8+QdHAalaXEDiY+yc1z0IYH45MtM9adRjTfujY7GDo/HI53FxDTUfkN2nliWU2BrPkC7U5Tk17gZMv5na96xa38s3D+CrtlCH1xvOgEB1bPLOAeWCPAb+L9pDRNOm/styd81deSCpac6kwkkuFX9CTX+pabuAZBxgGuESDb6eEpxPiiXUOvnCX6KALTfQ8E23vJ7KjPyPfCTw7mQj6NLDV58NVAxZKiJpL17y3URIl/NYPo0Y/oa82ZSCrxNCKNYW4GPFBwSp38oBwoCyNFZ4KYrB5SXIIMr1AL1cYNkVLdCkoMN5E2I9sLfSvnwNmHCQ34zghWko4DTD9peAOtMLc2g532tlcEomUJJrHNQsfoJZpjdjRCQRlWM1SCNwVCvQujAgNUYa9+ynUrxqNiyIU3kYqDABBf4AQjlStKekbax0XE67xa/HSTDbihABINrtWEvYZEK8RPaj9MtVU4LXPirycUfiF9hCc6pBrQzo/j75X9eyAukIF/0olAjsmpRPmACuTeSa+5SO1CnwIuag4jHTMETje2pgVWD6mWzoXQlBa33kfxcpVvtdmmgSUQ6nBdxGQkOVEFS1QnRQ6w91ocfVr0JK0AzQjAKuwrFSfgCJG83ChEFCVqmAw=';const _IH='703821ccb7223058da9df7bb400c130846afa76baeb8ac180d8cebc96e81bb50';let _src;

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
