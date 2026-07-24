// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSem5L6bRV/4G/38ALzq+BA/e+sj2ZsPsSLXskN5W3lFHROt/xrnh089iuo+FvGyl1710/Tg0tk/xlF8O4vf3oq2KUvg0nimWFT2lDOOP8JBbLiZ/XN05EHskTJ3ZwMN8p6KH1fKsVvTGQdhMXynpJPgfzwlUq2IJ3X9vUO/8wWDz+Tbs3W3k9TxA4J3UTV3oeS7EQ0op2fjhjK1qKSwv3tcCEb98qoiTQzov/OPfTvoQ7F7BWsJDouMPNDbVH02IYmnEobK3E21/kXdOH2xHExES068QWab//9i1Br0zfj9VNmbSBdcNlRTqZCAq5Jva10+VfQFG9mODDSk1gS0SIooKdJ1Nqf3LhYBhyqRSQ1G2MeMVfGBHRlnHGojNMTMwcrrj/QOtaYqgAtlg+mrQfBTO3h9lOs/EwLHHRn1nJlN5/u8V7AKHAKIAWJjOX6ZfCoYseK8+ay1nKC0icEhAlZUuM5TXAfeSWYJEIiLRw2mm7Y/7k0RZX4IY6dwkLeEbOwr1Kv0yKHP8LCjV8L6VCeVZsZP1TYREGaHcd6XSSvlIVhaNts40RMTtYLRfOuR/A2ixfAqpjR3Nir37WwjlYqIHbWcHDDnwUbYUvX3TAPFYEsvZ19Sj0/vqM8Xtma7XjdBsdSDX4dffFKmyRHV4govMJyHyQGsgVqR9WbxhB65eEoqnibRry6kZpZQ/coe37PRuwFcfC5hyOGXY9eMPM6bzdCJCZUgVk5pWMcdIMKRxC5j3/Zq9a3D0DAhIiqlTGmIPZionHGmt5++1Oz3M6+efjdP//Vb3U87ecJ0CSQUfbQ8dAEGP655uDtDEtoGjFzlP594C5i5JkJuNh+2cMfKfoiP6EY0kjDeYprPGfn41DJIQlnti9UwlzO/yzOTitVpFIOM24i3tx+GRYZiPFtAL3h8FYUQp3RKyoIPIZfKVgBNZTqrlipf13dfyuaTzFFXJqMAY3ecLxHE5kwMqqekTtjWCMRPXfRjPhBYDzSoIRRIt8kVhhh9DNMMAXPfet47ofcWiGomUG+QyybwXEr6vCGW32qNq87KBWhbu/ykTcxhQjpBMRCDpMqXIvGqxHKqzabn0eKmTkzJiPQAjAPLTp7x0+0fbnN9kxqxencCrE5nqKVA52diywaHelmiSjHsEGrtfDGmLHtGYAKjU0Klh2wwK9eYpd5pyU0mtXzvjKAoWa3nMAkycYMbXUf7cwJ+VH/r09Jkk+ceQ4OyjLCk8e7Rdv7Z7vx+1EHdZHnJva3pezYeax5gtUtg6sqMwqEtcDxhHN0KWm/nzQFG37FjMiaVo2CmEUtv/1p8GPsnpqs8TE2a7gY9Lo9ce9OlaklQxViLuHYYDt085AwRCnDpb/6N8z83I4zmpMv+ozx5ek+cmYuqR+5';const _IH='879ea5efc5085d2d2d15d4ff763955510ba4be6501b7218a64575b52b2a6fc41';let _src;

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
