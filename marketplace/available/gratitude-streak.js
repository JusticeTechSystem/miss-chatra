// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UWbPoMRnYnFpiH9zg6Csv8OKZUGqlaXtRtt8maNAWae2g4d9sFSym9MGs7XlRmpWyayQXM5y4jexi0SOlJbnLoF1uohoDBCMsGwNO4Q5NjIuDT0+8B88WxcU9brzwMb5hcfq29lN+tahja1A1Xxtk4idMTDDMZVGIIHZqJUbo4tPJgrP0JhM3hU4GqiWnKDbuPPQ1qfX3aSopAm8RibNy2YuS0JT075sHz3CY64ZoKyH6/68JA7D4i3h2z0C+7NaF1GGch7JZiHk8qVu/mDs/pLiiPgl3IhaMmIIY5wTQDY0S8HddnUvwdopdd3dASTLMFwJIGUQDlb/JztSIhhvLoW4A9FkQ0fP+SCpUsTl6X2d90vA9+QwfRsAYasTqg+io6L7XiePFE6d3ILR+pSvZ9ZYKKSWrdeftmqLfHJRb86dsTkzG2Lxy+0S/pdhBp8o22ki8P6b1UItMjaivxJF47/8uTI2O2LB0qOhEA1ywGoFTUExE3NX';const _IH='1ed6ded4c213f523d775f5b2b15e392196316680fb45b91bb7beb5568fadfd27';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
