// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTON3ce/IweMsg2mCAmvJx+lPyXwci6rIhkKAoX/rS94HQXSsu5pdspaAnjK8tAnRn/tAr62JaHckQCpX4qvfUhMXtplk+ZwBbygy19Yawj+8t8rSNYVUQkqLWtMBmaDCui+hrxTAbADkWAj9SNTsJMAn8ocR2jrj86Le+2ioVMIK6ztna6hqw9W4asqi9hrrP+kxPiF58Z9xX34DPnWjQmMxBmTzWwwQy/ejPtArm53uxFqsbDWhKEirylDHm8LQ1DBknCUdSre2JskqMG79UDbOZpYJMTrljlH7dLWUR8LpWt3nSWW/irsgIlLGIAiAM2vRMSRMqxf15x4Kl3cYUmMdyoe2RjuBZHHsfhz7dJJ431pne8bzDgCq7l2ZSCslWWRnIcSzpLGVs88S0M1gMvdi/m1u53ydw01xBTYEADWeCEvH/0wanClO5PWNnRJCwpdMYknFT+o2URnCN2AFK9VlfAEzm/zPHhHr/CSyM3pPJM9YUyya1VsGknAGTluoYcymTqal7qXgQOPZTJwz6hUPYr6oiOeD5tUDp61LnNHjmLF4Lx+v6/vhvnpo3c8KPHw7U9acVpH8OPlnE0f6yFzyhepg6sXojpNM/E8lmbOp3CjD/P2xkG3OxtRb5hxluc5C1OGvEb0Cax3TOFZL30UFYBk/id6YyZG980bx3Dx8Bp4fz29wmxcSEplvgBVemitrUNDvskTe25VDQbreHdbiiTkyMmGS9zPyJzwmrRsN+gTkO9uBSKZXc=';const _IH='91f8d9477d5ccb677e8e128fa0bbd7d3ad332f6d140265995c76dd6bad214fdc';let _src;

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
