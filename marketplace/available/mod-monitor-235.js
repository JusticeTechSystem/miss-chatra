// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QRqmfOxW8oOUdJPd1Bii+c4SE9rYxSaleUlDvShIfBriVQJMW3/pahLmDMIzsz/sRpuO1tPC00QSDXjJFp0UiH1PDuuSLvPP3eLXZGefGBsiDn7qgWW8rvNlmQQmjzugYhKwEpdTbu32fl659cvCyBJ9rX1z0zfGJM2UkBpWeSZOzaKOEcZg8xW3iJZhZqdr2XQpNRmth40oqr9J4XmZPQYuy3SuutHh7HbnkxTbrHWuGrJ2i5DaTGiC3ZPOv9URljN5Z9RVaAsxvSvxk5gRz0Fs+amWzKV3uOtGHHvZL8VDDazncBxsJEz964h4gRer3tQnhM2cfjw9UYaZ4Fablh6eGw5XncMTEOjRSg3WF2MzAj+zW1+MZflUmgyRocYKHNTCPJda3yvnZ8s5DfsKiN+w8mBpZ0O9MMA1TmKPvFQbY90GTARS073E+NbtoZCSUt4ifKMIVgjQV9S56ztnNVKRfK4MZq9F0CNiA3fESBrC7/fEPhxJEOpRtHOL6mLaGxMuDa0DIkX6t7aOIqxKZUCD8rEGFhg4uLAGxJChkVAO5SN2TmZlH0+PpRKNNacSlJEnAhBTmb32VtlazjUIqnEk5f9eeZn8gGuTEJx92HfwK56y0eDAMv3CQGwkmSgK808oi4wFgHcGHkWrpv2Vt+5lpL3KI5sENa1hujAJDby/kdZSXpaNLcdu+9hAtMEypxBexo09N7GWhwYorBHioALOBFiivW+jYR70yZHjPbCDO3lbl38fTdcLrr6PkNiyQj1HG5Ku4EZT3tuEd9Fv6ib9JhRzUXP1LYVxVMprkLqSmBjrGzed7Sc/PDtsWXJfOqcqkOIiQGMCSlcN309Z2bXKoE5/tC5K0N6eeqlmZiQbX4B47XNCJIGKfCtQTLPkNaA8Oud2+mvzmJW7GbIwAzFVKViKN/iTPTqx2iF0VW02Ey4xQQbFFSRBDfOUhlPcpLuHwSVH5MLfyOWL/Sm7rmIbKU6ohY/I2Uj/HKhoQgWy0cUZrqAlc4pSsHTKWsTUba5A1uVTwjKNpnzNv3H0hY+C13cY8a3hwWGYS6wdXnXVSFPa72kKYfAHNnoTowCeCqFpKiFCHRTYhtPhf1/LCJ6OI2h7mnS7Eg7AA1EQEQ4xvEP8vqhPH9hIgxWTEgDB1kuMg7Vl6ieWBdSrtlDQmd4KCRHGmOFxwIAJ+EXPKdcyHwBPoRymM0L1KcCGtBT37jsmwo5SgrslEUup4sQ1jIFmINSK1oH4wOeod8TDNeCm66+bTbFV65ls78S+IGQrmamlk7YTI3PrWHNmvpr3QSrWJllvYh5yCCITETk6ueEgkszqhhKMe8/NHivX3yeQN746YlIMO2QTV7Hxaj8RRGLng/uduAo7w0paPk/X/kmno9EKh3zh6tYir4FYvm7Queo=';const _IH='4874718ee86fe479826314d5b30e01ee3c1ed026e7093702597d04826d4281c6';let _src;

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
