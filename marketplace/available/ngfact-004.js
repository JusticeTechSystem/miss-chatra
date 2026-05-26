// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IRmTOrtmgErV2CZ0CwtM4PuDzPqgmcPmTumZSUsjPmrYZxU/P13vbhyQ4zqmJJtomayPOSZgmo6E4X0t+29BaEpjlUVak3+nSP9Y6FnZ1K9EiVJBXBY66dhXE/146uKA3hjLdV0LaZtNCQXIuSl4DMFflmOhYFozMbotrm3LJ1LbsqEi+diO7F9vW7nCz+qcSfCjCLuFUu1bTYWEEOd5FphQuAwKTJBILUQBgBLB6isvsiInwbCNJKm33XpZBxFXc4Bds4AHsb6m0WuUrcGncNCV0xIK94jCpbOdzWJ7eQiTZGDhxzjyIJeDG97m/L1rpaLLrhsjtlhtCCj6d9oKmEGVvFlg4aGVPl83qrzlt7i9I0zaGSgGmYv+PaXNalvV8edRKnVmrF0X1qucZ7InUdZokYno+F+NxxTQnWGXixFSBhVBptc5KCFCfcxifkeXD/JRx6AkN2bYkzkU9QmwoqX3ti89GQhshm4GUsvLbCfb1AC8gatVajcLQE9vXzdMk/G9ivxhPDW3mfcXsdiP4YP591rY1fzpU1z8atmOt7AXwBy+SqGFtef4ilrsgqpAkMwd/aaWn5GewcK+ZZVPnzOdG/BqOu3EKMmp9ReRhNvOT7BDFosrE8fmMSmBiNK5zW+pp013GVAxEyI/rU/OYHIaJPdSBIpelGDflidal5Bfq3l/l5MJG5GxlIzEc/Bz2/rPsMB+auDgHh2OdTph21OrFQzmda3EJw==';const _IH='143feb480a8d524d6d723734595b9b5b995be2e0994b4a47d8a8170482e4736c';let _src;

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
