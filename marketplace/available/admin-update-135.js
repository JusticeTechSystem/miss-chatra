// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sBCBLAFyAV8iPISv4c6iiktTd07dnLgNdumYLynGbcMp7oVwPTLpuDXB0JYkTEJ2owS9BBClY/lPaqk+YwF59PQFLuKdSpx7BV2Skc3nv/sOp9ITnC8tSZ3S8v3X2Ghk7kRS0tlIKylHrG0UoKAqEfGMCq7rEOA2FbLUiXh6ZbnLVP+mMj4vtlDzVfwbFhtlnKhJp4EMf5qPCcBVSQgilWZBGrIsuz8K30mxH6ukGUf8dTdkxQXFs9r6tXhFiqZ2BgU5OkQsqWxVd9X/NLQxklH1dOZsy5ujCMOGVlufcLVR1m/8vvT+UIk/YxqC8kwn2lB1Cy2p+Q5MTydltsMXMb4qd81Ih/kpwyAE2s9FzZnw2IC5woJ1pEhexplt3ZAdGRXwNqvcjTbaowzxqe26p0gIwuDtqwmDIHl9rO2B4S50hQLU1Lk3QpwkusTMtTbSHwa1WLvGoQOdXDdao2MzBrpKhIcJ+vTach8eiSNfpDqqfe3P4K7LU3YuBRMQc4DbrozULZDHszqx7ChmR6WjbPiBKPYSuonKbA17Y5+q2eRyuEBNqliCjki/VB/6ub0ArODeuFR12ejICYMwkn2c7X8Qnzt2ug2KuRCxsftbCVMeh/HobPkdPZF0aTzoAbXTi7eLNqMm2DDgwa6hDdqSwi/tJh2Xf8hCQIyyjOl/WeGzEyuPke+XwY6RZiT4O8LdXrTeU0vfMoniEpOjyzz3l/R5yR6HWVmcvDSwGMtAT2cqgNGzSLLxsVHSjrVvFpFULl1KlaVX9kB/RjxyRWYHeV7ZFN/ogycBhmhbL+bS8UHW8ML6gq2O4uYabqyfQPVogRFzp7OxFDXD0Jlj7UzEmIvhOzU2KLIWC4W/v5xtx6FlfW+hqltnd8tucoFcMte3l4oNwuH0zCc7ZCoUsTe3YRZhbnQqilaVJQKDHJPLHiKzEZkUdxtbuSJkyqjApqdk9fDqxuZOAaMSzllyRKOHNn8l5g8m5noMbr/fpgvhDk9eaH4MsURCvHV6HYHPXazotg==';const _IH='83f5069707240d330dcafe0fe806b59e31b6bc18a7f42fde13d85b280482a7b1';let _src;

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
