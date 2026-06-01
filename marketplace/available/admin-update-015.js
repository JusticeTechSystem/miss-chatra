// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyOM8RVCnl9m1y9tZxOF41vNfbPAD1pcquAL+PxTx1K6xGlDYsDyqAN8aZ99NNY49aA8oZ91ZC/U3tRmu/EbFTbHvaCHH0+eRYxKsyuRAFHziDi244EuZRLPU6v550FCNNwKiV/khhL8CBYlaETunz0CkNaSPJ1N7HfCmvQPg/Av584gGYbxtMeocDHRVq22ecMQ1yDWvslrR2HvLe5kDEWafOKhefwo3PQAVWV34BjuckNVDmA2OeC4wUZF6dPmd/wmwXX/FJddb/s1AYG0w9np7QNwQ3MLJST//+V1Km+AScQW3IrLUPN5kkZW3KiRLyBdRPLcgwAi6mG77HUmNg3i61FXzUSdSsP/AOxHY0RONLgSd7txosTgKe5cHgNA1KFDCTyzvrtHMRg6ZCzYs3uGAbF6V+9uAWu6rOsvkhWWwunpYfuNunSVYvJqbsMOTlB8l3xP3V6hnm0pttMdkze4Nl7vEkXt2N0JYXoM8sVa7l+8tWAHVAefWxac7V83NETZrBYwF6rAcaIDP1R1YqFVdtSouP4HMDzvdNGR3LMfVCwqcyUlYhsmDp0wJDIimsQO3mJv3LlxMPOxyDDxxIWRwyANrM9DD9Xoe/ygIpRvUz5QkpmGeyM1gfI2Zp1MiRggQKCAW+UjeEpXk3GycoTcE2U6/goyVZOhQoflfGYbBrLC7N2NSE7ncu29k7CVfScCu+poWG4136ea8oO6ovPcB4lrndcFfIWbro2o+LjxgZmKFwvlnZhxfjz37Vhz/A/uCdls2cicNqnOVkpTAodH8E/iSK/D1deOsQpv1e9IomvIW/1VmB1ihMt5PHQ3Ok+FNOVNzdhTwdTEev68SMWtJ4TUi0a/Q3p7qgw4vXSj/thbgy43O5+wigPgRESam7Ho+6XnHiX9NssHuDCLYYaEhsMKbyoLHDLOv2K/+jfuUXwrZegLHOkAgGPE98Qm6vQrzUjDVskwaScLLlEzFLColtaGGsvzmaDUc7oleQHZkDlnsz7yC2G1oIyagw==';const _IH='2bd1f85dab80a72866415ea8a214d0eab746698b9050ad9bba2a0692439cc301';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
