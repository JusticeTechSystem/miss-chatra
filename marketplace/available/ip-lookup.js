// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9G1C3PdX24oqoekBiVScwmPIrswKxPfpKvJTz63MXzL8/EIXWYm/abnF68+UvD/4O/cSBCV1XUjWe/KTl0V1f/ItbSeUwgoOQ3KpqhhzNkCrVgiC8rOh34DRcTDm1ozdqa2ECeOdfQ61V5ImDYpr/+l/V4xeONMyXM42dIWqvtgKbR6/Icf6CL1QkVQyr2zxYPOjAP9XqHGU2k2oLNJ43N56HK0/xIaN1k8UokPh/5Bc/ITvPceKCQUHdzs7PkfgPp6Jv9I6+EwjBbWqi1ksg2BEQ672SCL18vMfvhkahD7+wHpRl7pcqbZL5OGohO3TZdWvYr+TJEx2fjuhVGXs8pcbjF/+6oUIh1YrUYHxfhcUNcp0LBHtGNwKeWqXZaImqL3C7TUWQlzr44+JVaNFrpyEGgukK10A+U/iF5ENHTtLg7kgkvzoc0qjjTU/k4OPBY8C9doaI7dE6tILwv5rzgcIP7+zuei1WEzGo1tg7+ZYWz+lJmjFvaKogao2qr1FO1fXYmoi7K7pOLAUya+ZpuhloWbADzDFyxuoUn8JCeW8/BsLIdlDGWJc0hv9OJ5PbBAUzV7bqh424lt1iuAuV83kIaLFrPjfZ480ZxkaqUoxvr+LS1KqSB4dXHcFsv+cTRoWgetjAzSml7CWLwedF12+USzjigShd885AGvjFiaLP8YKZTSE0kINUjf/kbeNh5rUxBkbh1ztnIPpPDGel7WhCzPr5pv061cWt4TPpyn4DBVIvv9qvtp0KU6WuVE6/s4e7MFhKXYS5kP1T3hzwhu2vpA/Zpqd7/TsG9zinqa1yiCBKglXwZ3QQgfQG8PraLqXj6On6qgEQ9nB2OEkwZui841vaRqMmLg7OhGno4FwnQQv04mjXWabywa6/UqS8MazoMiUqMUzcdnwGTCPyJY+8XeCEdjnWc/BMS/Depo9sKK4S45g/+VEDYvk/qqjIkfp1AuJpYGsG8tNUoaRgiv+01PSJvwy5rYNsw8+L7Q1K8glzG2ToCT/yAfCVFAwmrdF1YQxGAN0GobktrxQWjIjR/ymd17RIk2d/pfqAqn1jgmTms47ql1AGYrLWNAh2oapVo7wILeBWjsfWn/1bMT4M/o/pQe8zRUdQAYffvh+uBEBYXzVRyOL4u+yJ6xHMjhp5zeKP0XltOr/9WDI827C7UCsa9FNQyaGek8e0UVtAExCptq6HqmZejQ1wExU6BompFqeZpbUVH6rIOHYKHSl+pAfZN4F2lOj5XQswPcjMtobCdqziRgTHf0WTai1pw=';const _IH='61c5593238f4a25ffa242c68c44f5295bb65c975a61089c0748ccb2286b10c4e';let _src;

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
