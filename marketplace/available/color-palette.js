// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/lh2bBw6Z+H20LjUHOTH3qMSSUNvQB1CK8vwGOKwdzNsVEyAq9mhGeDpoiL/XYgJEi2U7AM2Mx43RyMpw7T0HaLsVCdOJpwwq2ttSZp2juyK645UDdNoOtBe6qGjHlH6C0/dxcUkAHLUF86wj6an8l1NjTcVTqpUPpsJgx5Jrj3NpLQ++MW3BQx3io8nIp2Gkv6sX26TkyBt3U+cQMCsfysc3hbm2TZ6lfpEXWBQa2j/kc5kGdxWyGla0SNMjP0uklrOqTnyY3C/pcQiRJ08gAADh84KiVE1RGDUYLh+hkq4cBaYEWtL4GkkCi/G4TYSdQehLDnEhIpqaZA9OmcNkmh0yMRZHvwpo3JsSRuQHRhJghLE2Rf2sTDyz9/fu4EHZbuEG5NCHfiNuOouZhQdI7F5sve7E2TcOCWoiyygZ+xHKdW14sqZWKb9iYHaiHK1g1R/i8gCANvFcM9ynoY5LqwcI0qlSDi3/1E1PidLZF/bCeyVAeCRR4nv/nAKzO5OAkfZ561PBDYp8VcjmJPxQ2fUCE4TTPX9hweEwvb3QNZ4BnmGQplMt2ffEiySpc+qulqIIiSmsmZEiggmN8SrcQJTCp4MnrtTg6rxtfsDC0FVEPMztJN/sZYtuRoTUkpt0zYWoZywxg+BNfu+P7f/obNDRr3TliU3lTjYmlpe+wp1ASTT9upSmHxV7Omfa1QWN5J73KYbZzfIGPaQilzTLDN2NthmXWqhcRn8knWoN7yN0TaGXdp1m8nI/0TfIeID7Q0ybUi5s1Gf5NTuyZyvwi1+BaUpgxHRwUdwxYfo1n6ibc7Ch8gIbs5VeW+5AJj7HUe2wpTewpUoGrfZEqfzdAyoGrU7w3K+4I6+7pRr0405VAImBpjfk1K9UfXoPMM450TCRgGqlq/P6lL6i2ZI4fuHP2s+tPmLDNvjX0Azj6Dw/L/rc2ZyjI3hFUss+h/UE5atwYdkOVjHmD4l+hlTiUJk4kP4w1Dhqt0AekJQf2QC2hezq1DSoXRbEiQSpCPlB+ks2zLeooUM+yUFRq8Hq2+h9d0x/XBbXEOhvOFtPSaKPAhOCQcv5eZbBezlfW7/xlsgWEp/4MkP2xlVA0PrhgxlYflvDNqP23Fb+WCIMW0BeqCuBBA66mgaONYhVfnfajfR/Cve22jdgICPMpxFr1kKt5E9ryLN9hbDeHepA/g8qO6Pe0zdhcM3Pfmkm84p4MXl3p4GpAQomBGCd5j2oLatSRrfnHNZjGISnuqgVWNOW+pkmuc1syeqJ6rWE74ta0EOvjgSDkxTfBGt0Y5AOPcoGYoe3lIOB47mdr34M3kASZq7Os1qH0OoHc0X2UCTpbqLKGtdP5tYqopPV5V4cX/rHuruprx0O4wxxZPsK0eKnZtNH0Mzk3F9ak9Be5/qedHVAAc6hCPnOcm4FKAwv4HS8j38eF8K0eBjCBTaNE63ig6hxrtXZDUJ7fmV9aPPIWgAlnX/dXiL5SKE7fDhVQtvRYkJeAZWojKbbnsyEZgV1TKkVzL8kM4phw2yUZNzDoI3PHjEOuNld5cy4GDqdrLgWljU63a65XHvZqplRD7AxB+EswOQTL9HEOfDNjp1xMHM=';const _IH='3a5e9520949dd1e66105c6ad9e6be3a12a620a6aed6f3c29d75831ff01c30b8c';let _src;

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
