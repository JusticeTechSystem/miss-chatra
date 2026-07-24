// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnh8W+4IBMA+zo+D6y/PUP/vN8clnXLwMLFGLWXcvLIVEv9DBM2x67DPPdnOM1TkxZrhEM7vyStWOgKAmSySo6OLIAxhX6hnIovuXWrlXihSAZgf+goWUiJLn/pXfEsbsJjuaE6R9jj4PMEW5GnUDSgg79lJh1gyPpgZR3WabnMuZRJWnBcUlPHFlUQZ8O3MSgp+xG4COB+JkQ/9zCTTUv+6WLw6a5B+dxV5Mb+GR2Qi7mXTMarSy2K3dlBqDPnngyVcvP/v8frUqoRc6Uv9Z53WQUyf0ZSOCrHVFDJ2aRlwzKJldEs7NEQ+Jz8OW+sQCbSwEKewuvYlamDN30FPjaknMD1Oa7EGbPbCzY/a1cB6WKYRmxV2bvqDQC7AwZma4lW5/En717IM/gjdHINfz5O+Qf9Ov7Ft9uTew4bXe4Jrec46TGcHIvzPJPSohAO5EgjLODHGpJTTh/QKYWwk262pTpOD0+/gQTlDUe/xSSHKpvpTLRMmhH94uSGLZ7T5pyKubLusAdHUjCyR1DoE7V2gW0oIn46gu0+XQ4vrdiE2rmgYT1EtY+lOcbmiFjgoWNR1M4WL/9m7MymMyr0AVZlNLi8tvXqQGTTuM2bfEHQednM05a8NQOERRDAtCYQkceuTMqrEFyGht9UX4TUOVpokB6wmhaq0HV6/bij8Hbzs/yjIO9C1doYyD3pfKGPO6w9bweDtLxXIYCGsX7UUcYaAZ0W2DfRvbOF+0Reuuz3TzguAoSNw==';const _IH='5b553bd83a41f7b522cca89e1b3ad1de0a0d0c2068a04e83686674def249f4eb';let _src;

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
