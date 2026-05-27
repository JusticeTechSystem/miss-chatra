// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cpk7Oqe5MO9x7xcYoUzo9MzTq+AZM/1XpW6GwHbUD/L4QNGXlJCI0pzkRsHz0l7+xQHDeo6qymv6f3lm5MdkuLtMk6FgOTdw8/SqADyrydzYcPatfG+H9l/KjGbxXstT0npfWTz8XxDuaYd4RNjeM0YpB15UHWaQ6tXj8M/HUiDNwqyVKoi9sgK9Nldvcu7k/loYUdLt1WE5oFNYYGHirJtOByG1l29EWBf5DjqV/8s7/7EVTdizBV6JkOQvVtm/mHeOI5Im2VxQ67yxkY8AGjgceA+4UEUJEJGYeANXanUKdVCTiVkteU440ZlXATE8QBEI5zdYfTPaX6mkK1YbvkfEmqAQBM7HRVp/yKAF+C02JuIbj5rLtxLAsGNi2lJF0xjUtikIt1l2YobxRp6IBy151Phse2TfCvd23MFfF1Fq344hOTIPsdcITQV0OyZk1threZ8iCg/hXS3T7YcD67hbfzrsVf5ZP4Qn7/G4wsHaHDCEVwCdfV4gzV0LTje0Yhg5VCc5O8MeWRk9Rsj87JNSxtkPn7bwkMmxLEQAt6XaPFGPs+BIxIN0wqU8Muw4/to35pq0B4XDN0qvCwrkI1fH4ZEa/CZqy6zg0S6n/H1sUJ2ypEtfIGTmDitv/so3Tskympc29XpM55OEaBwQOTlYWCHguljj/sRWvtXQ4S3XSQbnZysiZ7Bo5zgIx0tuFfqmGBGxB6bkAoDfuWuLB2GbHLh7Ua8448VCLAobxpIeP1pNtsaLCp2fU7HkQbujb2FHEI4VCW4lyrBYnHLSxzvuYt063TwqVFE2cUDN7T6jMxaTh2SRQJ+PFPjnml6x9B2Ww9C2NVz+f3DnNAeJ8T5m2nHxSl0UmJOc6NYcFMuj/jrmYilSk1Q0MQSzaZo+zqyWtDD258vnn4SHHIpJDh1+YuLSH3CE2nFe6rqRsGTwtFxFEwprDPcBJ8h0GBmZKyfZZ4ABerw5ob3N2mz4qjlo+m2EV4jaYBVI5GJjIvvVNbg/300W4bzcJOPTL9cSZmepWDoxDnHvVipacHo=';const _IH='0bc2f90c5958049b918e6483e0bacbecd2f1b85134a459b921b1c3cebb7d7f23';let _src;

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
