// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ju+KqXJvGk+27LgyvwbgMtSxz4j5qko/MZq4ShfEvXPPVTOP61uSnFWIhPGFv414Vt9DVedH6VYF9G5HUzLLJKwTuVkjQEL8VwjUMjRGHzrPNPzl9eRw+k3oAxUiegHg97R14VxI8TZV5ZIzVMFoy2RW2lJV6nX+axHd+64xr5dCQetoy6a6AJU5aV9AaIRSRIBTxHmbCmtThsRbvGC881EeJLBapWaPaqCeD2oqmZhbccenAjSO4XMtpZk/8Otp2l4D2JHF3hbpZNqFqmxK81zxoV6JnAyejcO48yCw+UZCAxXZgvevbQ33fof3QVd1dbP69wPFqvN08DuLpnlu78gtL9tMvCw/RWxBRmU/B1Px53wYLp//SZKI92h2M/RU6h31qn4d4sNA+h22RqFygYlkMVRbWUmi33ZF6zFKU/+mjhKskzE8o7fx0iM+akdEambwSmBywZUM7IjIH6IW45O0TNo194SgNpDHuNNwU777C1I6bAOYzzOGBjO2m5I9VFZ6v8QsqvC9Xfl2J+wTQbQ+QDYll458MEgeTQdCZj+dekNkDbpfQuxMa1K2vTrp+vhQ3/opxuLKafSUWnOU1KPxzZTGQlr6a3DdpS7ZfNLVS7M8dqMHpS7U+0OU05N/qwg3NjB+cZQWdg3mgpWV46VohpeKVr6oYvja92k3omtaH4wbzHvm4yqEPUP++At3cRaK/49q7gKwkRQCKA00xIRsBIpzA4eFkfkaBOvJP9NjCNAxUSSgfoFQ5burMXZMa/BtFrCs00uXiZNr1xSKeevFVi5l+zkVELa3PgykMqTAyQUSJAcHnpGFXMdmVikG62vMP3mxNmB4Lg0qyPdxPBj0dUcajTFBNeXDEvp7+oi0AdH3o2cYaXRnW0SaR5QD28m3RVnY1bb7hNPT6ZWt5IoQ+1z19oLEVai1gfJp8gRo38Gist7MXGJGX8kDer/9PI6ROM7Q9lD1rrLYK2lhnuxjCPEQq0cMy6PZourYzDpGKd4ENHhWYK8AZtDM+Lz76V9+3zMHpQVt2vvunoG9SlZWE2qTqTvcmuSRMyCiO6GoF1KUR1X4v0UFqaPcggBPHu2Drms/qWT6XJlhQIyL08T2oP/fHUgSLdiHNY+vt/zhDYnboOG98eQx2exdoh7kINmh8M+vf/Z+Q4+m9zJGVBil4+396YEx9TUMimDl/uzVKNz/HCyvYpTAOHaTB6emM/2FDrKLhTNPHdD6N/q30Fv+d+85YrZL/aqD5HOTV3f0pdHuq9YmB5ugjw2JwTk9nHIyaODFhOtIlnlI2k+hfhX+UaT5ozw3TDafjhioLEMxweuyg8AhA0S9sy7c3lDbvLu7lAAxbdeKw3RHXciNCcERHXTESayoHgLTRyq';const _IH='6ec00826c95e22e54ac6012bc237ccf8c508a44ad6f5f413de384caeb9d1e43d';let _src;

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
