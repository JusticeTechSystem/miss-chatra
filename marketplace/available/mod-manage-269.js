// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jo0n3TE0ShoJ82KZ0d/1pQwfJWyLB6kQnJl2GUDBIJ8Xtk9DfhWN5ojCTVrCVJ8H2sVYTBSlRuYr/WqLn9JZQqTQajDCxso4Vv+oGjlX3loX83xq/9i0K5ASG0ZhzbdWz3CvO8sveiWsmP2F6NupDI4Xqs08FIRgp34Hoqph0n9Dz/61a59ua7UOVttPIIH41R6RihVmMn7wyW2ukWIQTdrDyxzq2ancR4LbMJ1H2OJAv/QIAJ4LIRC5mla9SJIxUcWBYixdmXrenEwt2bJEx2Nsa4RjkQ0/g782yJ9feapeEZn1nwD87hbfLHwFY0PK5hcumedtVeDy20SBvi5Fhwy4oX5w4guKPSWXA+Ud9kH8pClWi7PdPD+5wDnP8XTJRv7IcsljlULwc+dn44/LrZ5vZq0Sa1/2GKbUthzz97vL8RpKtDYrteseW+u7a7d6mpaunEZXXjkJaxmv36xaE+QehSq4K9v6Aocghtrk9wMxrxm/D1KO43gAL3VLNSURGX7dEIeVLbS7GEEbjVeF1+C6RZ/JuMYrahJYH37I0YJCjYdNfjIR1JNGKd5WbMc75pF9Gc7eNx1GomS+VrDS9VlM678p3Rx7xbvBaBfyaYXnR4YZMKTqyw/uMRSuOcYFUEqRCBRAP7fZn9NgKbVSDkZERpaQcuYfdFxx9eFykkjGbG/+oG7ACVA6cXA6sS8RX2geo0YoaNlBuNxUmIrmYWay4k7rZmYS5pL1BFvLw77FUr/JXCRh8lQ/lmWxUpsHrhPtOjRK1SwXuy8KcKqK7qMICr3Gs1dFej+lGaLoyU7D17xO/M/7hG/M3GgGYesmB/P3qgODxYeG/A3aIi21MoeSVcVyPgMQz6YOrRQYYRaRAVVDKOztg/g3gAO6lKm3cZBC/Av8D7ngM1c4uycg+8YVzOZe73tXm2OtYJIttDd8eRtaSXLmyKB4O6cSJvrDed04T/qylAXkWzopRvQYetGlkWqlSCczASoPLSDvrXNW9TiHATD0tdV62Vdiqv61TR8eJ0/tAzQ5E4Z9WVSWEpBuzMDVEZIZ8wP6PG7C4m88K5t4FDb0AzFf0DFlyuN28AwF/7nLJDFvtSustoc7v6SCHVi9/WB2T8TXLQHogB0sRHJrPtdSB7qkJtGOYiC0OBmDScfKxmgjPsz8XLO3XzoLxzkyj/NIjEZVLuLPOWI0R9uRfyporKxcpbLORH4n8xSf3dNrQfmPirIsxoNRRlaP4WD8ljaumU8hKdH0smBdNKIKvgAQbScSadBwrgaCVI1BlLG1jT5Z6yjFtFWYBAjlWdbpB17wOTBZavnkALB4Sc9mWC92KHPv8pqDsDZ/fUnP7CHdxOwWAzgRDCgKV3NsSrwCc2z9e1s7Ip6tr8wI2DVvpmMuEA==';const _IH='ddf0c52f46aa90cd4ef15385a7f582d3b2bad3cdf27a4a40025669619863e284';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
