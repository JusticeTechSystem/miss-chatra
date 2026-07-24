// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpfXew13QMeGNAZHaw3l37jGbK4V1TwNOBL129dsdNq6LqwdsJNgUT4GkTBMcVSGQ2sfs0+QA9VtTltuC87QTAOphCmJ5i/K+phoJwhZFDsPjmugXPqiNwBz2WHKfDeLZtKxWDcgbySt0JXBXRq4OEoabBxsOteUbaVr2Khb/FVmSN2XrZc4I6aTWJymE4lTrpodc52tKBmxxMEuWL/pR8ryM8r32G4aEIrUsqeKHVI1dvZs7LIKoAcLCrrx3sfzU9BC0w0p8SR/iTbEJfdfmX4IEd85d2HoJWAPAXir/LYyOBhGZknLUH6JRdUtvhhp63XJmTXi/Kh3v4ONmhPPXec2MqYOd/XZHnqRESBPzh07Jq50eZ0Nb3sjwbaTjTDGHfBTJS/ea8/5Nrrs12Omn4hF30Sn/YW5DWFH1vu4TS8AlrKSR+QXlbhSMg3jj4jWKIzSlcQEQMFsavBSQkh7zjNMuZu/Sn56KqprEwTdAbeoqysBXVicLWwIKjupgeGjbNcey6TZZz5XOMMucyhBPLEzM97UbCRuc+HbTTyYVF4EmDkQ8rLsjDambBM+dkgUqfZ9C5noqJLVUPZLxxOu57ZPUCvpCGzt+cldYd6NLrCYKmL/c03qdg8NVRSWK3FKa4jjBO+LX87y9P346vruXWFsdBFSN6FP0xojtIesN0caWvl3WjuztaFlEE99G25ESTSODth5a8rqjgiZS5J2aDrLIMp+M+qB2w';const _IH='2fa292ed939700d2e61af61a6bce75a23e68d70aaf0b6736c983c81a74073772';let _src;

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
