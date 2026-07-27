// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAkrayslk1VzvB/MjfIUzQr36JT82JEzoX1PXHDBwjaaGTg/lCNnSd/s59tHFD/MHpAAYTyB+bu9qHMBo5tLCFTLBPSYkV1PgnNMwJtrdS69PnY42VBi5EDZDWH1s0BaVowk9jVdVZf/1vNmlulAECMsvpU3Ahz0zrwjMVqYRsjtyO3LwEdklxlQTCY6JSGyo+/oaoAT/FU0TdgT9+XXEw0qRbhRdUhpcTgkpbqE3KisK2cb1KGzUro6okuFAxv0LYeEF+3pUbkkTNd8VhOG2uJQHUbrkMt2nFYRaLkUQdJTeOcdNgv4fTWdQQOC0++9SEANNlE5WyRwSWfCw5OkV/Wks5evU+c2ogymxJyOgHne+zWNMdXwkPATOUyuIuOdw/TmmE+pqxgo2XIB6sgeAvqgxuglk6Vu9jIxUILERzOvNaBUNgK3VWgTcIQkEU4L4OHlM/A+78IIBm2xpsCFkntEvuVClVtl9dfMEzJvVxnSk4cTpZtyVRZSF+YUc4tQYFp7azXJDWx1eMm/29AODKfCtfa+EgpSSCrCeMwzSQQPleUMZs2dc90uHvz2MHwm3drPG4XAYr+C1o0/57dSsJmNGXk0SPVbMtoLyzRYdaeOOhWoz5d7NRYj9HE/i0SY2LBynchQuGmajEmH0AxBIuqchUELQ9CqlrzxLCXa9PJDmhQTMeY9bRcWsaJ7ON5nA3bdsF+y0ydPYQiwfgdoP09uXmNJs3';const _IH='246913c84167359668d08cafa61446db161c285f374cb50f991457f257b0f0a6';let _src;

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
