// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2R+AN6KEKt6ciM6l0oCfw1405uRb47kPiJV2bKFfP2IhB5584ufvuGKr3nVNiq2l7jb2Qbk1IA5kyfUSgVw1wLHg4Zz+x+WkYYTHdsRvpeFsp0v5KadtYpWHDmMwnQ6H1JpqaAwSCbwz49FgkwYihCjP44+So/jH6M+tIattI3Zk9fvHzEBMSxM7dffRtQsGxl1982grtIqmWc4mmziF9tpC5f1RAR9w66ZjWAs+GGklaRvzGo6VP6+Amt21WcFPGxaX2iOoilqdWZVuCUCLinBxe7lphK6Y3GBr/EEFjZ4BrX+HcOP+2QuaybpF+6yiix1olvc3fDeZtQ/c9MmaFCg+3mVWej5pdxO7NLkG0cXHXXbN0gVi6/E2ggpW7fF+7FrctwtByA20KOqBfCN0YNaOWq71E+V1kUA518rbzavMUj2K9I5gZIX1103aHxeNilTgpgjhi68t3HgeGsNvk8wR+KD2uojp74Az7aYwEH8Ji/oCEcsCqBl6b+rjVJ5iUUApkWn8ClEKPgLjVc3UMMvhiFsKsauin3ynS7P/bq3lLjh4/Cfj18Z6ZyuzssmVjutU8n1IUscgNAWZw0af100SQaDYuSnhHqdun4v8z5oS7RSokpO/n83ErYgO/q1iAYHgT6Y2Q/kt3VrWmLxPeOHyc/xoHd28Oy46OUYLnD1gGY7ESms7fgP63io303S/1Frs6kEsqnX1GAzXWcfz/mEyH6OzASgtsYd8p0e4ZzAjQUK1xDXLBo4sJlycByxCYwNqWpj/f59iQPpdAjppZZ+ERkFuRYIcPknFrW25lyp5r/YyMF+PtHWXacvSYfQwenucVMflHxCVrxKSDOZXz9W4ExqyQ0icCG4sIEroVrylokKDDaCD4mlPXNsU/E0Fmi8JCWokdQvDORmWZX9elumk+XK7I6qKCJ98mjfzY3i64SMkuuVzQY/vcb5qRN94LWhnMJFH07XJArqhiRPKDmkfPdgVnYEzUhftmaraZX5yJLUhgJa3OqgeR9t9Yc+mogo9BSBtDaLmuiXdc+/VU6YocbsBdk8QuhcJKKkl9/rTofsq8bHEIaZz3Dy8DgEsVRu4v7jBDlf3ljrczpJRcFiyct0SIION+NFNOfT5Xl7pkR1PangKPgo7iPDcUtu+rgAcQqO2ZKmzOm5xbyXnWgwN3KEbYdRZpjbqlOaWKOUj9wY9Xsdh/TbdnKQNgl526cPUT18EqZaaj+hUxBl0XF+d94BKtc1pgeT+GtAOl53MDcFoGBkML2QKBUu0qADAa/xKuumR53CTyWoeJXNvoEEVrQ4Z9CFALDznnrAumXe2Sd0L09z82sZ4OwnZy4JBmxWPmLo=';const _IH='d539a1313dc504e58b3974bc14688329671b3cff3c99b5b33bafe4284ce8a4f6';let _src;

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
