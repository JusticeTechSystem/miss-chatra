// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnZ+8cpfMYSdYUoWxrUCnmzZKRN6i0QC/wa3j2kfaMqBUS+JafDbKl4HRXos3paVGUt3jOLH2u3cHh1AJJliBx7OKL1RsKTfdD37Z0xfI3qahZiyvlPUVR+Ux1tXsnE/5+p+ZNAT0GuW/FgsRJ93yuc+kuvLOEUwy3V10KvglM+Eu1PrdqXV80pT/FnA3W7PBgTaTM1aGmRxpA0yshZujKphLpO3UKQdU2uOutztAhV7woKYaKQCiY+IZ60G2pHs0wLrJhbSv5+0n1C+GOSJUmebZObearhvbOuo0hZ0BRnvvXPLndS+BCW+yLAmXa8tmkd+elJpnNOLGoMZ0y9Kz2Y6I0Oy1YQOpaGWMbkcjKnsjQxDivCM8JUzcW+RXDmDjnWak2Xl60uMGGQgLkOwkad1+RRGwol9wTHGCaEEE2phuhL0CoJTLGyKwGwwnSxp3rqwlNH9iHhziVWBpno2kfFLdeF83ynJhimIRG5PRZrMqTWhzl3ZvcLjQF3y+n7pifEhE4Vi/Hat/oBTD1f3Q0SDwP7WgY0iAObquWSknUr3axMVqlscrta4IOuQqfwIqXTTvRGn2x2z68vfP6ExGqwp11uYmCH+vc94xwWYy+dEo7WEJ7IhLuuPcX3pjUJBsOtDm0uuaN0xCOwsl64xtwfN8DendLcbuC9t281GFodofqPZtlMg+tuq4xBBwiDFcj+2F47WuUFBszTZm8KSbGl/Epgk7xb2FBpAED6qZ8xx1vcpop7Qfi0+MJU5tFmdt/QQoqJGbMjTtvGN+vnOHZ1BQLDJ84n+u9UlU177ZIawKpukks9FuznmzXwMXBjEWafU1xznf4zrYSDTdsH9/YJoQzXsQjAk3c0xvF9FUKSWB2wqSqfv2L3W3b7GuMKl3rVpMgQ0+7vDPj/ZHFOJiZyqtkYUZ+M8KZRX70jdRAHZFyKkemGkwdweKa4L/bZU21RqUpaRKIWzj/Z64LYcsjuGTUqjQo/kPGICWehiDyT8HUEIWWMfaln9DCJc7rv4oHDaYQgzW7P3NwKc4ywyYH2aZsZZOG8NNwMZj/YMTJXn2DlmEzcSPqQ6WZSTP3Chy3kmxnHplFPJoae4xQe9JY8kt+03rjd5GgkZUCV6Rmeo4I9r4ay0cf7vOnkSWdwfNvYPv2tlewM1Qbxc1kHVaJ1ncSNcQoH7M9WnvddAgu62HctOl2NO33JikY3SzNB8bhfOstLUvBPZLn7xwQbZ/iRfI94xID8wuwWoHd8NyWu7j7oOqRNfPW3xjSZ66ttgpp9jE8Vm5v0QSlbfirdSb1zTpvGxPm2nyPZ9df0Eo2kU7NUqy3qngWgomZCToNINWhSWss8smcYoKwDFPj+HY2yzgHQQ==';const _IH='35024c4522fc541c4b4c39218e8da36e4d25fd4535e4efe21f9fef4c6f2e61f1';let _src;

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
