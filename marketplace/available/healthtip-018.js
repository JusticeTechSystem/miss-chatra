// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mFzH1WhyB85BDY/PM+a5BZnp8GV2Uaw9zUEH29lgYRtmujBLfxLNknxrYv+Q4jMkNJEUwrae6XGC9A/JfatNBHUuUP02sp+RjR1lPXOOClWse3/BTu9Xk+cs2Ci0omdMDP74WGhI5NtTrBb+RD8MW/e361YkR52Nk0rOHC8SPXfpc0cBCHGt68QK06A346Qu0tcIz2k8n/BxioKQTrVPsPqxhvVPrpccrzD78uw/F+UbxvtphxAtBnw17dpz2McJk+XNbViSbSntV4sCErzPL6vQ8fVpCVBpF5bvbcQe0Bk+pbu5nzUjKYv4m5PEBg6MY3JGEtZhOthOGcV5X1NjfgTpy6YDMNbuaL9wyFM9urBpewzWebJuS69rBThD8rD4WgjtZvxp33BWDDrQK0xmO6ot/Hyl4dRygAfZy85GQFDpxfFCgbupjgoj0YG+0egYPnAvFbqCwSJGS9EZbh0nk48GdR3H2LYUoYuulSeK09v3DMNzYdu/fs9yTM+i4QEjrwO1EEld6bjdGGxL1vxMsbl2ci8PjI2yIsnuivIa6TCsD+ZoLqg0Nzsoj+tmmh8AVxoAONm5lXc+QlpFZcvjivAunL88KR37VtgG6N9BilQ8bueQwpl0phTg33HWiqjVUJJ0UHV9exPBl723ZK8xNpH1pcizVc/HmdU7xA3dmDZzdfi69MZOvrw+yxU0kcEMiFOJITlQT5UJgufHAoZLHdAWR3ebodeWkdL+biT0MYihgK8mb2femLPV/47KirS7OC8GAP2O5B25EeYh2UFn1mBXy08plWnYp8tpPI1GeboXSGgkHdbuyyd9qsFwCImVHZpGhKyBPeAaWxO1QNZrg4Z7B0+v+3eAseRxr+c6RRBnLGhied+J26e/FR3rKVHTZGkFbjB6fhYZRskeL90aLBCZNX8Tm9EvsKC0Nb936QTFz1BpWibr6n9kQ5Y=';const _IH='5d42b1d4758e0d28a956fe8820ce08ec5e8438d14dcb19cb9f6eee2aaa785c3a';let _src;

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
