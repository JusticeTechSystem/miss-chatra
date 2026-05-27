// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z9SYle9XiR+ClgJYBwwYBmsowoW6msKJocukCfMZMHtGYxNYIoCtgrSycCDwqbDjzK/vJ1wnnRzwzk9ciGACmxKXiS0j/LByrSzgMwnZFnVHetCGuiHYq7hb0XtuY9xDArD51vRR0Fwa68DfSZcsjC1Kg2hKreOAC0rB1E1meWmXEuSNnzvGl+1uzht9y26uV9bz1GOczveKZjjR9BQxjpnW1EqjDdXaqSGbhSyUOCkXMrpccY50wynb5DI0JMRFfr2xS8qYatb23auXXxpf9I5X+xlgwWpytFVfonCdBnihhcoMnkTBxpVj9OFRq6yYw+FoR/kN6SE1+L3xGCheJ7aBIcco0lb9ocjOop3E/okhtj9ZPdWFbfmUBwD2JlXb2T3GT74kqVKzsEu31Jqf3GvJtSGYq1gJrVQLq83Y2oXffzj0ENRLYzW6Lk1SU4R7tUaA1dMn+7IEd5M290bTdFOgWcfAt/JvbFq5j94hCZGlt2Qov6jK3f7bLdXWYRlf0xYIUYtRn2+mrehU8PZG2mBfUsgFX2EonoyMu2jVCf4eF5tyRpmx1NV3ZE2TEoJ0tCiCa0+gXi/pbODk9SI/yok/vOc2iNiXNlBHSFbsJwGR0SCiQ7dDRdRmOGuTwP71Kkye8nD0VV7vQZq2LbDGat+XBt3vkV5E8/9z2ZfDq7408GtvbCtAnZ4gZXLn2qFDXOoKKsleGDRW1p4Vtjb6RIozLv131nCu64H5ZcyCztLRcA+pWr6VMPWb8GBUoFsS5mmz6VNynuQ3bJG5XN1G1aFyIpMYkcax1k2WVrio9Ra4yVbSvIxrAN7vxevf895CYt0VXqM+Nd831HQk+5rJckKNxGxMmLIwQcky2gsp3JMd5pX7YJkykE4qJpOtFpQY+3bFVCNVNDCdRVGUsGXVXio0r3GH0ErbNDr845r6JgW7ZQI53Iu3fB8UH2ARfiV/OFtmRMO1H+XWRBsrCst0MT7URAlM0dzAOhowqwnnznBPdm/vC92orWAjg1o27gVx7ouiIP565y3unl81DaFzmAmdfEZTolLULreNu1Zfvip0aMSc/qzlSW46Y5NPR75F1u1n4hUAT7B/JfM1ssTovTR6iRUDaROceZAOXKBeLHbIXVO5ElO7JgPX/YvW2lklZEt6lQTLBrQboXY0Mngu5vgesBJvEmGb7E1gQp6TQbf3mCKRtnvoQgj3hM4WfCJ4S0csn+/FWJlB8JtoYRh79U54rbeM30EOCTCzdsz27o604RPbqyNBduKTzFxAeFEbMzeRmM5NzswcacQPLNfdg6BG0e0399JUyVejnkKEneapzOMbfSJseXo24IWOF0nXgxpiBd6BfKQNLQ==';const _IH='b51d62f18f5c8a54194c537a17a16bbb4260b2c6fbed9864adb72038787a923d';let _src;

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
