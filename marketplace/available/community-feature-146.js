// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WfUIW7rQ0ZwpN/NylLJ30AESBgOeuTf3k8xaLblkO46lxfcPElI9HM/MElbWoLetpSeL1cx5V/4lh8786KdYhWYwsHNKzf97YhGwu/UbuwFmItLkDqAM+j8j3vmnSwOmUGouT39md6/S3ZjQprCIj2auDP1RMIyjEHdRtraLwvq7D312kh1eoaqzVCQ6jtQCe2j1xd67Hch60O+PrkeiHCy5c0bYP7cSXQsRoUPOrHq1GC5jvZTLhDt+KLZHgLfJHu1s9/tYMtL6GtZG6pL7NgCWsLbai6WvpaRuONyXVHdFnD0icbDWnRk11S1K1oDN2XHp0ghTmemA604epKGDTidCa1E7SG8sOaoYXDJF/cOvFY6TtRh2nm2zDKKootGjGOlJyyVG9fDpe/HPvZonPShvk+a5TMLdimHqfQ1z/UUIgLVmm1snAPEqK2SvA9kjHROrcEYUPaJjJmagaRS76FAhpgE8FqHbEu7KIrC0+/6Tc58eS3KvJczY1C4K4WTcan2XvDjq+inFkSc/j6S6Cbv0nkflsANo5KGmg3ND28Sh0q4LtNTvgWqI/flN8pv7O8XotmxsjGm65e53FWo+U7lmZaVMuOlrbkkWI6ZgYv9EZ0Q2HCfQrTEbcS/xFVLY32gs1wRjwZBQ5CG5JiO2AHnepZN3K+ZOosyfzvrUCBBp5czZIQQyEIU/3iwiHtrp7dZcxQjMJze2uAR5Fn9uBN+ucpO+N7J8';const _IH='b27f645bf64ea77d7281079000855a8d70eddee2e8fb69db66abe9aa06c93d64';let _src;

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
