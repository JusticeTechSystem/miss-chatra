// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5T0uyk/7ErfHZF+TOjcOjE67yTli4axx9XHfKl3uqWjr9LHl7s07Db8G2M8df96EyQUFrAk8HKt3rWHX6VWeXhy42U8RoVx+X7Os5EqiWB7+x1GBiPTLHrEGtCWxJShZQACzzQ8x0AbXTYzVu8reC/308yHvrEZIdVEE9FEb4mQvOwxPtAQM+ZrrKzLmTx7+qls6OaSoYtj2TEGPFhYZytlNAbf4iajU0Q2me7L16jxjoUTtD+M5kcopVQRga/GDDyrKUDTOQP8XccExi18CREOaSdVQJ437n2kFo41ik6RnglDarjr8tKTMKSDK3GmuHqPCnnoOp7fpfEVpp3SPOwbriBKNNHCTZKsvS+rSRU8KE1zEStnqHdERrxYT/UcK8u/PLSe/imLyzxT9XrE4SXaGRqLtO795bMEOJWVc+G55p/8/ouDL+LdrosKcxN1muoGztZ8eWNSmjdpqE8tlm+72b+93V+zhAoDawQVCcDkk/gtUxbQCCgDZfyAINwNiq20JXgxBLiGejgTHsJrFsJLBvQpD62K+m4t4jKDhz0huuTRw5ZwEEUSkM1cu/KUX1w4wP/684VgEbvhYJo+OLuuM7Q6IW/UAD0pgDVDVwt1fBq8INtOIe7UzhlJ2sxk6eEjlOnQJG6o0SRdnwmaGyk1s6GMU+NgBZuLKOG1Jr8W56rxiodyFFUa5Ehis+o55A0FAYz9/4XaBzXIGR67R52HEmpzsbkFzeXR0IysVM9C1ukc/IEuHQ1jnGev8hHCNjAOuAlHAxRZ0HVBe0nboz9pWgEX0znZFuBUK33TGNWcHAI9qQs65oOD+3ryzdT1CaGNMg9KpNU5wBDK57GDEOF/9wGthP6/rYe93chrHpYPFsicsgdoMuBLvJiLUnTxJar++ubTcbOo2Jy8k6w0DYQD8odeXahvKX0Gmd28hAOujQKdp2tmnuDXxONBhSLIoCbHKp0HOdG6W7xYmrj2VF2dzVF63YzB24MOkTiWK1YGp2mLpsg==';const _IH='f82f771f7cb6250e05d0773ad0ec7aa90db8cdd23b37b2081fc7c73cdebdcd6e';let _src;

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
