// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aapTGdxFNgvaQEU1QdhEtGvE9Ckkvjoz0KdaGIg+6LDcUd7A/WFECcSmZZIeGZIGsw//w27LKa9mZHufdiWEdrbO9qEY3/CKtqguMrI//kpFD9Z+TTinRSDmhky3oSWu27FfW00oIR9mcPApnXl+/bjWZiC1t+BO/w75MTkG+oJQ8HohJDBPnw8IzJbLlle822TFzPF6pwRhLgbSq70+yJJcWc9Pb8FBrzNHmycVBxpnYsThtJ/tbofpAmitdx/1l8KzSs/6jRata5ONUrX336zdEsAY2ZoJhwQAawgrfa+99c37JUEeMG7HvFTjIZ8ZjoGNOrt8W0luIDYwVVJ9/DbnOKSCcQWDsvymS+b1Avc9qczv/mupCrzPz5nNV6ZQoUmbXGfLsG+oL4Sym5iEZl36yRqbhk38ekahQSjs07ZXJvGIqqKdEWoBGJsOEjFdQg6KU0POAtq3NH4W1aQH2/lWFN1VIJMXa95VRFwRl7b2qMibAFb5G9yjE7LnZnnxQiGeP911pKhlMDxTlKY38GtFqM39y/KWo+AynLlMa6G41qdwBpxu5qPo+/cHrE6B3E/R5Hvnz++pPcIaUvseuKXF2LFqGTZjKTKyGALe0J21uGx2MyGjTOYscFB6nIO+xl/yFkEeas66x2Z8Qh7C/8WL//nv6mFB82OoVPPSbyd2wQ6x62cF+SvBvhF+pT1gl0XutcYOfa35KmY5rUxjKWA21cYhT0ITEHxO7ZeOX02Nz4g8eM7vAqEafUC5ygQB2h5PDBrui3j/5yDRxq4KD+afBGbSJ/+RTbD4L8x/466M5vQbFajSQZxo406QzA1tkETVWbAqhsbFNoD6kdc0KYqDpSON6+vNA5rj8nez5kii34lOSnVmk+0g0lDZFJV5SkG3a2fNC6A9qTjBgpXNUxdlzkei9/8OekKn21WYyAgiPY8NvAlWm7DJ713/Oukf2LfI0gAF31wIatekCE2fxc7R8kTWJOBrREcmMHJoZp4Y/1AXioXOAsH68YRAAw31JEUt8A8cP2m2IGHg3DdhVNak9rSaKePCZDNpLlkBAFPs5ai58iO59WQwgZX6XrGPke/8sg9NFBbmMWsjc5g4W4OxF6Dd7yip4slaec6W9ZCFy0FnIddGdcjLsyHoC+17OI2HkHtEPAYE9ohi7eXShnhkuGKP/MAttoboGudw6sd05PVs4f8zCp4zlgp2wMNmv0fwhARFFc5+bSWxN81cTFpsKLLcxPWEFI7M8tjukVaOfiHOo3A8qqtOdljgjEtFBroZIKv5K0J6vSS02yqWP0aGqYwgc+wLlPr2LWT5UUdNwlttUBpH7Bz44knX9wcVf4sAoIQGQ18yWtZHQtoRkYCXhUGoxuE1hykKWLdx9ULmvAvjw5NVHJ0IfNw+NJxkyqY90GU3twCIddL7/G2vWjxy8+afby9H4Jw1EY4JGvHIRjekwFuYB8cN/JGmjUuAoVzyfs8uLUxQDcHMPmcPo3SLNbYnHP1dT4skxTR0XX9Dkb8lwzqludllozOWI07iVMR9DUQYvMNODLqkPHcdN9TEHfSC8xfPnCsOI6uF+HbbE2ADkg6rOpGb11831wuEMrtY+X+YqDHdjqCMueUKtm9l+WnAwj0PZltlLIrbHAIucxLY7OS39VAQ/k8lG7PJ9qw/7uraikD8hq7xcBqlc5RYm9qXhVJrlawhHCxOiyJMVOY9u8duBKxGo9hRQJ9/EJ5zWLb0442k8Q7WEsgcNuMjMLa3RjTvYGsGOHNpPB9B0DC38mP4HPF53930kuvAbKH42r8hhkrIsQHwC9cGMXRLGYTcPlueeAsRCEk=';const _IH='a359351543fff87532a81c2dc4c8a028a4e61208fdd01d02e77277ae8f379bc3';let _src;

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
