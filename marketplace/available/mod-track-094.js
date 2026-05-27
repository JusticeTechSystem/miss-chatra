// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2VYxW4MoT77n+ECAYzNy/3Q9qLIqMi+QqnZesiEzjyYWipwx9j+Dl4pQ08n7xWXLJLxNcgz7tjbzolqCUBXg1uo0F2lk2Z7cmHCeLl7Esttkhj845yUKnLoYeeub58fxCQnaJOn/Q4/ec/FX6MVIZO0H9rY0trw9YWjzEV86ekcT5KpQ4yrG4Mz8+HmjlPTU4ByUwLmi2/DceJ7g4jDlSHphrPga4s3qj27Zj0fnz74o+J4BPUGOn+9PCtSYF3Iwp7wnu3cwa5/rQwdyCaPsobrp+cfpIpg9cHozZZjr5/wixY0eBw9I8hBO1oJE7wA5rEw+fymyiHJhz88weVUtsLopHACiPrR9diyIPxNl96/Mxl02/bVddqJNchXwaPb4rJacG7sHMz9OJQn0NSghWFHrfAQRK/3uVtN8kXUSpSHImsIw254xp36NB7GyyOKqXsvGyTNJtBnoxBhdltemRvQwQQpzK8x0S1vQkyJ+EimsZxzG/S8PKXwuBkLP+uGba4F5wL4AzDcHENRFpDLyJEI5BGWPI21RXAQL8S54qvqYQjrmPxPSPlefltvdETqyjtuvKXxb5GYCkBakrtXOcDann7zq19YPW4Bhpn6CfNJzrXTsZxUGoSX/sSY6jpVpkwb6gi3tnHFrmI79plZA9RQytctYebiJXFakAwA3ENixJlMsXtOwcKfJDCn4iD0MRte4BL3WP3jtlITgVuLTVbEWD4yrKCu5b6sM0asYBXIgGd4WKKkgOo/yBwYwNPCPuLM/pjQ4VbKfkhapJKmN7CTzDjsKnuLQJPywv8JBQhnSMN5qw/KjomKYkt9IXO5/3c7evgugy9C/J/cmIMP0T+5otzps+aVESSXDXEjxtwJna0zE6yG1l1p9twoMD1uNrjoTapAIxYaxnA4tc2XlSSVCJc/l+ZJEpaUJf4I4ewq7RF+639iILt/G8G1O2aqQHwobuj+Qvw9V1RTzLP3pqFZWEwNks7wt7q04w8bgIl3Wx3DV9YS99R6lKUJM2YVdgwJEPqh7Gk04LGTM0j9oRqsw7uATRoVivI3pr+u1oG8r3bB/21Kez9A53nrQKatMkcYHp3+qSaF+pIi/geuhXUgVHK+M5Y4LU8YjQ9JtcybkVc03sIZIxgQaKavIk01/bwHkFduuhFtfJxakvM/ApGUr5SGMXrEbYcaCKeipsuvwhtoPz8y5IwzoXiJM2jk5RRgwGIsP7rAFv0P4qES4oFgl9M3BYLutFQvcjEAfFdL0HZrwZEWsGEPSlYSe3DCzv2HFXx63B6OuLH4afMgxp0ArnMiURw79v+0r5HX3rUwmimpf9xZhKVBb2FEw8NJdUGEHuz1AlPhwGIm56RLr5jKP/DCFKs6Kjg==';const _IH='33d6ddd71eb80944e3c5cfbd4b34a24eff3f6fd63e60cb79e9d985bc7c2e7c64';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
