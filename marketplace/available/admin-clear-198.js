// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxLpQEcSu1sAqNei2U6dBOze3p2B8XlcxZXd2/1eMuU0FqYLkb2PPLxQu+vzGh4YrzdBeXNoCtKSctzaKml6nKXKBr/0BeY5qC+y+4iP81SUND85ng5IJbc3KDpLxsUCzQiPx2fIH9pKVBQPGeoRtGPFaLQP4lsMsPFGQHIvPo81UepQ5XNhkioWC0h1QukErWMOvzMfpk53OGJm91SVetJeK3Gsoyg3YBIbFchon9MmXZbZYmFY8XNmVAw/VGyebFCgU+ORH6zw6TddYMZz3wWYP5Sbt4TxWKcu4OJLlIfeSAPE/Z6nyXLCG+IBZtTEt6WByAXF7cilvCO+O2po571XgRSe7gLd/ITowzSn6GAhExT/Q19zU35HQdZk0nbaNHlx6F1srEdAeW7Hg1lL0BmmRnDyW5tkXXLPn5HFlJqDk7xeGkw25HbwLo52nN4T1IigWlnOHE80N3QiDAe9sAZkLcKfA3m0mPhr7VQGaKUnEXM58gFRqEM2/XlbQHvTCWHznX5QsXeyENUdjeoU1G+UJD/Jx8OeELWMDWmva/RZmmGNd3QFJAilKQ0/6MjcJ0OVNM3pi9i9oh/h9sURzlsqGdpR6gxtuLLPbK3VaHcmuKNwcufvSRU1TN0eFBP4tYnCEfZeMSUiLAG+HgTd0Gy1+PalzJAi5oWO8kljPSngrqW41fGxIYS2xBJTNgClQKk2RoxQy4S9yxp0BAA4aHKOkxwFizJAAYemzsoz0l/Fclh2ep9Y3nQgP6/Seick6MCa2G3GEaNJ0Bia1tt68qrf4WkTf9aKuQmGjT/EALtqtiuXx2bsblZiSoU/gybyznuYKs3/OPIa8EJxJ6iGuFJP/ToOlv2N0AS+d+C/ntFXvSK9bmWGoWvhiaSavVl5c10wguz95Kug9Qg17hq9HiB7L/bQRKn8T6+pXTa5dwXJf4C50bYnKs+HKOEhl70WKtF3WAWtcINlho4Pf1HPdKFZ8qaS0WTSubb6M1PeEp6Qt9GFKk+wFcJvNg==';const _IH='747384b9daa5eb50f138980a254c54bb5202ac5c8bc977b02a34d3f69cf29207';let _src;

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
