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
  const _b64='T0JGdjSunjPfnRK6N++LoM5nNPSw0tX9PB4qZcyigtdje5IHJO9/Lbl44HKRkJwGh471cHplpXZAIV8k4SvNrUjACiGiNfFwc2WqTvQ2DaRFDKs+19lTVRS2Iqxyorodskp1iUe0MRoBlWEDYmJdsmBysw7UIj7E+jw3KrEQa3yhy234qFrGgMHFYJs7/4Jmopd8sLOHYy37NUfTfCMC+8JTX/lJJaGVo44ZBpo2R2f1Uojx/fISiwRr+mnnH24EFP7kB4vhOikF0kXDm6SBKdUsisO1a7cji7D4ctc+8ZauJc2R+pdHyZz4MCcgX8aFSBKnoV0PSaACFNGzzA4k9Fs2Vfc8SIbDMExmjFudvdwStG47c7I2oqiavPdseDgH1IP4b570cYQqgnaUD2rs5eTCkXiArjvyV0EBSS1E//lbJ9YUsrqsM1cUi/LOjMYK6RFKpryVSszfLaRQOP9qKMy3bMVFwSZbEv3XXqzkJ5KAQOGQxJvSLvXAeoNq0S7gunPyEeRL0tBgfar7qVtWln6s7PPYl9omU2/UDLumeCfofvL2u89TYGKPiQz5wCxD7KbJojRRt324G4f/ZGNirc0L8VOe2SiLkLZ0wghax+yHyej1nTdKu4nqsSDMnWxzxK1YPEz6A8ZS+Gn1buZNaaGhjQ6p0KBj/q5cPyj2bwVh13Jh6cDnDwgz5PV/1w3BwF499mQDOex8d96zkSOAEyiQw3dkmaWLIvPeV3RMQ3XFSfpu0bUfYRUpJW86U3oXWKZbrqVKbWg/zFMOfkm0mfGfeqdPVRwZMRFo6M1NyMSwtzt5ASowEQPmDVu2DqaO/dQnkHPD71PxfmwqL6iTwZS5dMa4abWkzSevPwoOy5aOPsy3muow+jpAWdcywN7v0j6HhnVzo24LCPeymb/5T7sG2xDbrU/MyUtyaZnN+JmETTBc/5VLlVlKY7P1l76ROgw7ihB8kN8/K5OJ7BjgfFf8A1W2dEjSqwr1cJ9jnJogoMoFjCnEonqBlhiiIsOc3J56DA8RftQU/TQdcA==';const _IH='efe3b67714c04bab24233f6c115ad499a830a4c06801ec56d0f30109bc028b5d';let _src;

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
