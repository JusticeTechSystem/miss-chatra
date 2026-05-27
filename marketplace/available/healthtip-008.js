// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AGFSPIlOvBZFSKkFH9CbqPK+vaRy/dmesImgLeFRU+S6ZyNb6X0WwJU9sfN/yARQWHcrOd6efDDnnD8FJoqmW2aVRTlqmmHu1MXwbbEEWoyaiBeLlGp1+fD0z9hM6EH2zhUzvfIpY90W69AbSBZlqIF1+3ILYvKIyDYKijOQUB4qdLZXDzNXs6JVNt32f0RQv5c3ILnsCJSWXtnKB6O3anDUUwdHJMl3iUTYK/R+Oh7COVzDaDWlrOQy0+dVGp2EdaDTho6C8Bw17iWIG/sUAv6ML9YVgIewvify9pAfRnZWe8Db0DWbd8ryRhOolUohXuD/xp/XYWpRgIGaSuMaWyjvdEEpqMms/qoS0+CNw/dD4tYBvtdcpAgmH1XBUu6VSJQUVIxxXFtd1YtKAsnLaoETbvBXxHWJ3JqpocHKm/v8K6KoZHynq9hMugSL4IGQevC9F/kipEsSRRL91VIYjMPWd5tQ+wRufw73PXE99O82gnZigq3Na5JXC6JLZ3nUaLqdNQd2dmmN/ALqvzcHfwbIqLeqhJR8cjJ3RgWyFqy71+2AEVbd2HKIyiNhrq1v2QN/jAi+cN4ItubFelxpDJsHjt78xKVSGsfqEdah3O9O5xDq4gBUKQVgGdzTc7s7R3GAJuwPXbJu3WRgCSRcXxi8Pl/jsPtaLQnd53Ic26xCtmzqfwAdEVhOzSjWRiZokDbKk1Fi0U+mjNmL5vA/spJfbKRps42Wdjd11SbAUtzMmFXJSQJIfVnDfzc43XsRnU0W/CqVkrXm079DcvWbvKoU2bwtP8OQchKvvxLFLRGkFU5wlrWs1DnJH8cVQSChR/LBpLkaTQEEfGeBvvJyfV3kesanMkEbRp/yhhmm0xCBHUPNYhDgbuLA8CwfSFvjcQxvLN6zVkIgcQb5t5YYYXSQNKGc5XP4TLN5gRfvpFXvIiqTtoZDag==';const _IH='89607e98082171a8d17f5eeb6c5f4302b70a236943ee5cf06a0dd336f81958a1';let _src;

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
