// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ahjR16NA1hBtVi8YDpL0OLej855poed/IxY/5kKA0fZT/rLyKfEWAPzsKbaQbFjSQwnSfJTQdns8fkhF7gSHWwyuzq0X8Jre8lHs+xgCbRfxzPUd7GQm4Y+6pvo9j4QpE4W0jcPxfcEwvtkuc1Ko5ejUCWhmWJ0mi+mcvUKLVUBkrrc4MV3SzHj2b/mrA9JfJP+4w1Cqfz5HqrbnXOJ9P1Ym0FSmr5IwJDcxbj7MSPEifQ1JRd9zBI2sBp0yRVl4PLfUaCgAMDbPx4WqutELKUGoQ4T+ttGZiO1Kf35QBESii/GpScBS54iVScs6/peKKmCQM5d7j+akQHSTR69PjHDxYPIzZzyyZOULkfyYNIpm0KiwEX3SMnTJV9KOxOVViWoPh+SX8Be5k1ZlPN0+HGzVsPsM5QDa4CaAuqMyezDy5qaXYAnYPfMYUu4TEOAE/kLQWvJh61Cyn+tUAdUALvXz/MqxLRci53ZuxvhAZr5Vm10/PHiNPnEbL7jA4+todKYxKsvSyb1YXgmAMrFpXikDJYeMOIAy/JwhEMc/O31I4YK2SOkuQuE3ADLVThy548gI++iTKfZlYNTQjp/3Sa5Ow91qRNynKzRtMPyzYGpvTLXJxKIhIBWURer/2UbJetBKDdkPAl/Uzf/xjW56ZZ1X8J5xTIZ5IhA6oKkSFQmgINr/Q9G4/OZZ1aR7mV5tPV2XBaynmrTBLp0+T1zA6uVLkzEm6tAe1Jumbt0zTO0YDZdR1sDJ+f81gUTsKRFFr6eR8i9CiT/yU7Nn+r7OgtMMcKlpcg6rmhWPY8wvJI7ucScwLW8fIJ2Jbf87MpfGDaV6CIN4gjmSq6KdLFTGc8I/nbPgjbdy0f5Y5GwVDIFZuqtRrg+qFCq/xjYueHP68BN+WHLIT4AGB/wgvAupmznKvCbDIup9ad1gZBQm4faFxyWV+AhbrXf+miSQWMSTmKYoxLaRDZkIzC3lxAGTIvjaTxLpYhgvjKggi1QGQNMFIaSAcTzHFK+dDN40VzAb5HlPbxnWNsPqVR6/kBbpjHT9/m5PNfqD3OzPMCYO0fFVIKiQNh5xtLDw//aPgn7dxjdGui44/9D2G+22+53Qrb4lOYYPH6Ku1JSHKh+m0GrJuMFxvtauJUNMViO6Y3fhlkcC84o66bBKMQi6Oj4OZVzZQ2N887OsDfREF5XpquS5ePsG7MJbi8Zew8c=';const _IH='acdea7a473c7af9756db54653a769f4364656ceeadb1ee8320ed3be46e08a750';let _src;

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
