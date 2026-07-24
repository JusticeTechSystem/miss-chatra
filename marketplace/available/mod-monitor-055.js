// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWabBH0TKtasEbQGJMjqJlOh5EchBRe4YwW0BaM/WcO+3LkJkYaAeoECi7CdEDavsTVCKieUbcWLfb76faFj5BQibovnr4hlE0WtvoAkpXQVdd5az1Sjoqrb7ooCQrXnLZLnKFRiRtkmq3uFlDWOTYB7O/M8YvMCFL1lZY2w6Y4ZjJ7xtcruutmpY7yonOb/PviiDdKE3MrhEOebortgKzAWB53HziPVS3A8RgNfroyWbc7yt9XGfkDFQHLywxZgnchhkuoT0cZn7jj2kUhtPFEWGAfPjSXBzuZep87rrnDn53MLiOqsH7S/ULzBF9GqpV0TTgk3bHrJNLNvo4433qr9CS9PfkJq/7HbiCdDIR2nd8d87MmtzAv9JuQMPlA5KatePgA2k5bMGZg/PIPiQsf/CBdnA7/m0GGIHpp/aQHFYIZzzlWVVFY5O3gxC1U3p0IYsye2CR0cXfOZbtvZtqsZWpKiROlgBLfYYK3KYQiwQJD+sEkF893MXlzKE+NaS0z6XgEM8iOSdr7xej3Mpzk0zXB0y/9fkIcmQnqsNHfVHAQgVJebC5C63ITzPpG8cSbDdxviTupSZ7aCp/UAhsAE49DQtnp0CgJrWg68wEP9ovLW7qTI0RGgh7TNYybOgeZ1ODLO5wil5BKXf+xx4p6wpbvHfjfoAsEusa/j4FHz0/NIHwLQAnTCyfER5pcpF3MmfCb1qqLH39AMKBb4G5hxth5bA5lP8S3O0B32goOsj4eGZ1TAxd8GvFz0aKf7cqGeMoQwxt2M94hwAOqepanmHN5JOf1WZmwVCvt3EPErcqHR+pmD6vx6+onm3p45Six4E0z8Pm7se3EDJtA5RK3ocXCCi0WQXKm0w3Hi0w3MBV+GQ1P8nIa5SvVT2Ycv5l7RH1BToHT7jfASRWddoqhl8oiAEr5ELVxzQW/G/JW7imgjqAwc+UjYD75hVMdec4bZ5lv+zzhlGgQyYHbWegKr6SdaiunLhWlPNMsyk+B6xpd/DRcwJdSkhUj2FWvLhSzLMzZJJTZjpHwmrl8qA0yZvt3KXwRmD+psT2GSTiCsSQdso2Ro972mj7rhXY0wKEFJK84LXmpoWKoyFCOjm6TpKBr1wPnqedNeOAoAu76g6kf+9J3XeMOazokjW8Z/2vxBvzJ1hV7lN6LjNri89m7ZDVuTIbIOfWKgsbl2mg66QVhG0BNAw9zo5DZEo4fXIJZLJC2SEUTKk0x6mKkIceTOvd/+dh6nJjZYxwby8iS2q89f0atQOVJstdz5V0Z0xHs3DF4jXvIDsiymzIVVS1zyU2Skr0GDr8E0c0hjwihWssOyrL0tzRSLe1TmSj4O45He7NOKhleFgElcvPATTwt6zLhFywaWlapxJgSgUrrtEMox3vwcOt1iIdkcM=';const _IH='230b1fd76fc5513717a6e602de3e43b18e3479b94d730425870a41d32c9c1614';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
