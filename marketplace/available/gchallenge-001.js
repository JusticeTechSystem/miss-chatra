// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/cGwdtTN3E1mafRFgzP0+WbwWd643KqdnvjWY9ydUxDWn/pNjr4TM207Mkdv5KkVID4xEFJzoJ+lxdmT+u4lfuxlJGkTLDYAZ5/WOGM6+KtQPHskJk2jSDzxtPNSpdwICQ/0ZPRzlyYvGCdtCC7GZT9xZDSCuXSinLYOGVafsl7tMcNAWK7hKlnjQQ8KIiKXdCaI31wEdYullx1ryvMbyUy4a2ygCdxu1UfxOmYrLnpBvDtk+Y4KIqkmlaWZus/imqIBqQwXwQT1HHr9+WowH1s73UIOKO6OcCoAq8rYVwUiPvznwxCw5IqEfrasegd0ftueVjY+xfuH2ICKpP6yhGFBgeJNcdwk7a6lDcW+7zhoVHXtZGpxqxBWACqxgyPVy3STVKKk0yH0vAqQKmd52WOjrWfYGtZIoFGp3VJmg6b3iypdV2/40N3qlxdM5d0vCBvywQYy0s2NS9/T9LiigFS9n/WhWCdzqEDOlQLhtm7eC2oNXc/IiylqVrx6y07K4dM9BawWV4HSRT6ZZpsKUzPNfy601VptLKuTNcEpuLwJNsbuDhUNYF/TQfdrTmp+bf7l+vkrhGXtk0xeEmpWYa1Ok3N5BsXv/3c3seScGAzQp2pBsh1WYH2zMaa494EX/CEU4DpThEvnTo=';const _IH='a26c915b93c996ff78d94cd34b1926e72f7af34916dbf1f4866a9e0ccce77fe4';let _src;

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
