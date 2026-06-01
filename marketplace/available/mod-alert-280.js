// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx99bqKAJK43kEEhvCqg7H9wTVfkse1mxKKJFjELglxQJiqKfOkI/hiLzhxMPgOj2gh4jbJmy7JYUTxLCiFboU2rWvnPQA6OtecE58gB/I6W7HMjJR4s3XRVPC4IsmNAgoy8cuC3ARAj+BV2ce2A30osUwYCrY2yI/ZVsmQFQ8fxN6XVBol+/MP5nXWPZwKupmUdeclNjYzYVOQJZTRtMWEuilqi5MiZv7thRT4ZT3l0TAGLFH1lNGRZ41+GM+YoE7Ks3HZvoXT2VgOgk9CXzx6aEn3PL8U9J35DsfPmcaniRJTTA/1n8hAsIOV+Vq9Ojrjhvqz9xtwUYOx1whp218JhofhWsbtgSGpl9sdvKdcj87qZSDLoTLxj7SF4J5ef8jDn1Z381UehSE1///GYJg6t7xLAx3dG7WzI1EEI7JXstDEFePglkF4tPn85s7uGA46xB02IXyMEY6YJQutKrDtPVEd+d/DYjHviTXyy3kv0roHf2h/rpRH4uFMO3V5xjbS2BwLhzgLxCm2CD4JZzXO1a833GFCbHzgYuGFav3DY9ztwFWnE+fYedejU5FWeKR9cSI+YYIne/zivoCiomVFAHxSK431G0fyZKqXboVg8vs9e5Z2VfIrbC2Lq10YZHPN1h1ryri+RD8M0gJVigbboGmKpQCcybswqO8jIAU1VepElct1hGjUzn1kui6b7B5ejRZetHp4sToJOVjQzUrnYjKWcUUoUzr64PgT5w5kaVe933gzyJHxmB6o6fR/sud7d+taeG5kcBizxXW2ZiIYqmtlgzlanNG2X/eAKUGU347o1SJAmVbsRkSxub7CKakE9DgDTB+BXuBr2NuFAkcGCOYz9hKP9MytZgsflmbB6drgpBhIycBDpsq1e8e9OP8Lo5WFVr8vedQQfdx/44dtdFZq5xHND+n+0ARdPQEqNyQVETw/glP3gIBRWEl1DE98v1OXxlUn8eP9BKdbq/q45xCvmaUX/IXEldIoYACQtCClRgaCAnXiB86E0XiL3hztbN/yh27MZaba13oEaxVk+AU0TOKFZ6P9E1auo11uy9TL1mccjoHeIKB8dlmUEwmVowYfuexowWYWgJPzasfSlW1k0ntomks3s95Hl1ai9gGgp4idFqDmeNgnag2nzfcJe0zOIN0c4RtEtQ3OxkU3W/b/G7ga2wWxiUeZQQSROZLLxPf0pDXc8ns0BBP7mflEdVA2BvmTBbLp4rwoyT4EpGDY6MmhwmUU3cN+UXW4HSbxMiaZ1TpVR+9+QR4Zr84PZUz7Qr2q3iFrt8Mcc9oLHW/NSNolT63feS8csfxt4rZTfEWERyHbp03v49JjMCwBQdeUn3P8ESPuE8IboF+/A2/Akd76Zchp2o0yFqw==';const _IH='1cbbc3aa9993c5a37fd66b8053f1b2f5a190f5d671c956c99fa71dcbc61fd4ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
