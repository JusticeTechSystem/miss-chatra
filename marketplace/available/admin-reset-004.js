// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZBcODlmAZXI45yHGeffhToBlbq6fcpRNX9dtIMVGUUoYXAe+QEgQ4yg4ogSlp30HXyNyX0PKtggkjhlBq3JSomHnvPeM+W/CZ/7ffAU5jt3OsI2jvsi2SQaoR3uZj/fxCN6hQ2NQEr0jig3miZw6bh3YTD116TGLm5TZzkY+S/X3weeAG7Y6B/gX0uPO0XAuLTaK000tmlU0ILE+4zuBNkbhSGJISl8uUL2A0BeZb6Ni4i/Y9Rw37FrS53z0DvqoZXCrVsc42UBcRl5Cza5GfIXvppFMA6ph6bfZJjeRqKgyQHMEpPqSfB/t+HoQNW0YI/vekRsWjo+8xEPChn+swLH8tmygVTSLQyjOEwJRw0Vd7mO3Z+K4mwbiz+0ynt1ZbQkH8ouGEshXPgp6o8pyvY5Q3efBc3ybgoooRXOPITSL9icEbUzhRacMC4NEBMg8wsZwGxuM4rVfMShVw8C4ZffHOEqbwzMoH5dSgeevGWlM2v72kohX4ki6koMKAq76p9GFK2VO8WAhwI1AuTbO4BrgPO6KddcA3Y0Uts3xvihim++gKY4byNAyQeFFIlJKZCLjQI+YZmszG+YwjaCfhhi0IAsvS7dbSgOx9jkraJAtQJpjewqhdUt77dTluZac9YzXohxfyjbYy2IpFheVAUrhPst1v3Zc9Uj/T7ZHGUwWe6e//f6T6QpwzD1d9rUqRpSKZ/q/TiOxnbcz5u8zXBVqeVI5FQH46NGdFGf5B5GjCSk6RJzdn7yl3LHvDxzra0YYf9LZSzX0BZUOxiFqe6jVbRYujo3eoTDwWOgc9fSnV4daxtwLvWOE7Vj1RSl7GwRAUZol+AR4JLpOnhrM7VfPp+ZIuNkmnSVdJ+Oe29awqfKBJh5h3jdXnwWfC1KsW9xE6q6DrYua1w4TKJoR+h6seulLXd3ct5va9WPpinwXdn0ZUrR1zUCVZegiguqejz2YSqzf3TO+SpPD2cgConcB4wmvk8JjFPFRYBF7LoL8IA==';const _IH='ecf8b428100b64e609e23a701a0d440192ccb9cda75294194fcb4eba9b1fdc56';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
