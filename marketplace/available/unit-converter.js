// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Txkyhipg3JEQ7vT8Le1WgWbLJSam5xLO6YOOhq/2fpwPhuXlXk6gTLLvjBl1TESV1gjh/uhyX+KOCfAb6zw/VG7Y7nkBuBoqiNX/7TkelZGaFdl4oejo+dtdInIYCphfmLKgi9p54D8ds4AaYPA6noDFE5tHRLShwZIQAAMRsBEFXOJdv6MkK+1DqA1ShRuH2Qn9niEOFlU73TvwhdiiN0LZgpI3OKsdJNGDxY8yHnzfjCcqdy9nEGELtmVJBNT+PNJy8WSjyvgPo5RmOuHKShoUR4E1Gn23FQXqOi+/gfNLP2WrHZiRICWXR+P4mnbQJeq8adx7qVuphw4RFfrZwyXcEK5HTK2DEf/WtwK+ih2+C3lPhYjoXCuOYyUNP1VHgXXQQS9/URx+rQqEchVMyJhfuJE8dAHg0ddpABzXf0EKjn6qmcGt4X331ysCaxSb+CD1689mcHKF4yMLbkJ+HwgIMsHux1lfG9ffAB7e+e+mEqmAH6xDPSwa1obHe0SKExFL7ph3rMRWE00oRG7u9Q3iyHQEMqs+Cjp1z3M/MOPvHLw4s5F8Xlica0waga4+6bqaAoB3cuTSFmqG7Q0qnQJ7D6fBJKfezGLIPHVhQAhT9c94S6/BgBuCTNzSkCJZdEgtSo3hzZM54uze93oMqforgGBfpSlj+Dw4FSubd+z03vbufOPR2KSgW8D5VhZ0r7G/CEV1lC3lWVwv4WvCqpMr/pOgun28GxCA6n9lJZVhAHuKgo1CsTJqPohcUKyNZsnDs8WQZecYq8znTdBBp7ua9dDU2OhYiSj8AAt9EvV7arXLQaiykXBKbK1cx/dlg88LsePRAtPNj1wDDaXFUrlVQi6BiZvXl1k8EBjGf0OOGRXvmVOmsPxKbcHiO5MNqjcLCIWKDqheU2m2j9e2jDSxR8NVubIZ1KpWIq0PObImjYxnqOSI6Jx2fSSv5Yyr2uJPx53kcz1nuuAXNjUpozTss7S76P5+UcwMEEP1z9mnugxkZ3OdZE9Mk8BQdYsBKCcCe6arjOIAGuJZiI5+iVU0urXNM/4b0NFXpAu9TdKRi8Zv4a1tq9noHIrNNlpJRB1NqsJNoCBhFI8/aWQNt5kk2YyqGCfUpjX9A4F7maR4/ppV91kLwCvOAMHSImQduQM5dEJNAIdkYgaTmUOFXkow1u+gi6ERgoTiOHnkmebJtvQh9M25Gll8J9UWqD+d/V6ZNFC/3tyooOzbavBtvP9mzH7spesM+ZtQ04KeteeIksi+OOxUA1882WuMpJDlMVrE4nne9V7kIwh+DmjxSKlSDpXTqbyIbc+dUgv8Pb4bOdqm+oSwXIJAmkCWvzFKFpxKctGlHV6sW47KXxQa1pRci4kyKPL/yr8nywJZU59tBcAOnuakGwSPomAPxrUmLZrcc70zfdFShTZR3TPija3NdysGEMlbKYpPZUdSXOGKZzg9v92w5W9AqMeAHjW0RweoSRvQemzU9GHJ619T7eiXknzmVOLvteLi317/7zm1pw==';const _IH='8282b83ee7d89add69f89f9e2d311471f89f0315ced31636c666cf1cccb16d84';let _src;

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
