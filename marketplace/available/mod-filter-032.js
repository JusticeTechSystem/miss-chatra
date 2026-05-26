// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ayDkIdQtuaqHzc4017TaZHlpmmYKSMjhTFrDmdFiza8gQYrLUVPIGnbsVL/SEVwwwVGtIqTFIF0PTzn/WaeWAj6bbd+7NiDyd6YQwAksFDCGojAFLHwhe2IwMQqwMHXpyR/9E7ognwaEoKjCK1DgmERtcMnRw1ilkyatB27AYCm1TpM8XUFIRVO5PAYqsoK9KjXlwMF75zCiTyS+s311pTdO7cd2MhA5+XxulRBzTzXzfcNJ61X4PRRURvx+3FiR0PDlkS5vgEvX/HL38naU1St6C9SeOYuDSNmphxN+9kDRqHH1zkvpdMWthqL4a729XuQcQYDEPfvQtddOMlmwAuoKbZQp2I16gi/u3Tslcq7lF4IS1rMBbyxRaZJsG/UKzErnSoZFGjvVDK24JYKFfHOzqPkA88JW7SadqF/Fgedm3mbqTdvFtPoZJ2+zwUJOFOMBeWseLbV3374/WRKT15HkiA4Q9K3DW+4ElZaXrmjL3DZ1A3PB1vkF7/Hevu7OUlceAf0ehJL8nPIZLRyWLKi7XwqKFVb4otypZeR/kfjmB+q/tpe7GA5wvhug/QA7x/rsWJhj0VKWDs9qvU7Wq07HkJ4MDVutpj/kPgJxDHYezcrzucv7zVaGiqsHJyj+oO4M+IV58ZKjzQ5pXuZsfd+cwEGKcc/HqCfpcrst2HurnVE8PqDYHcVTffYoHwp0908TiDi9meYATGqKJ4gb8ZHyMKesFsUzs26aFsvf4XJUKvTkDPQe3toTxr20LuGC/4ZMuXDQbJ9X4nVFvxNE51z2OM5dP8+XQbdvJTRjUFVTXJGtIx9DE2kGKDIXgpwCLlj5RpkaJHQndt/JMPd9jlXa7EN4Pf37v21Smqp93slZOppToY6laimCEMLDDcU8bo2/wj0KFP/6UKHJjIZwKCbSNeFPVWh1kTvbrIHQEKCJGZM/H8zSqTD6ezVjGRj5BEcjlUMhHlCoPjzwEWpbvaa1rhyNN5eIE9TNESNo83FPdUGfvcBItRsxSuclktfFmCgFEwm+SZFdaDTb+aJ335uzOs8xwpRAfEzCk+LszWh8V4t39fuuuSG+NjyPNEGZq9+5G/V3AsbmD8mS1W9Cad6ubxlsEeojWXXuEOyJodC6+2wvi6FM4pPb+JewTPe9qMcExV6t2ZiZzG/YdEa1CZ2OxomdUdDFnoup+XZtP3YOpzB/56Mw2FBliIEUanObw+4PMX0UXtNmtp+cvFw2mzMXZZ0SZGo/3EgZTxLUPzMLeSVX90GnkBIrVIqjhvGWIs6EY8rYvoZLXWQCTY/k7RrnE0Rhy68Sjy7I/wcVfXBixYw3R813bXcBLOabP4CJ9o6tJ+cvkYe+73v/zNd0nE9xORsH5rkUHAsZ4PQDWlTRnfE=';const _IH='2b1a7099c19996ac52580bf7e79577099791cc1eb007aefaaee05d5c2aada016';let _src;

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
