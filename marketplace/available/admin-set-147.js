// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NITibz6H4JbXnV5ZYn3h1UBb1k+6SJxIKXu9/0yRDH2DsQ89yFGQ3MK1yNUxBsU1n3CyDEdAZmm2YnhcM77Hm/zMLefm2JtrzB7Soj0aOUgpHgHXGKP8QLCEBd2AnC17psB7S2F5YW95bIiuPuokLxf6v5vK2jzCIucM+7beRG9lxegXRkk8EIMPJ/ofAkvwi9c2SiItEIFilzHE13sCBvkqnt3XJu4u7QpX1PGnvn1Z36b8ZLEbjfLF6hkUtq/FwMfdLUkIfrlLbRPXgj+Yam/fQiuT2oIQ8xHhBRu+4ahg4mUZoaYfC3wjw+uWOiAu+f8eaDE/dbcVMTmeR/bEY57k75iSB6bIY3VcecKlnj87EqQq7l1KkU24URRpZe7VcdQFb9mnIZ5PEaShEGUzDDchMKq+B88XPxhMJslQQD5uSL46LSh8oo3aUH5nKKEoAHXrJ+Pvu/Wex4Q03AMnePH77in5jplsl4BsYDJk4YnT3iSmYv9GJCoLZe9NXdqkGPQl0IXH0pDYNTtWpNu122jVs5yh5F7M3JSj3K71WzBWMzvhssxHllNf8hM+nECUIl+Xc+7B+w98YuNddf5ArKDV5JIVi4EmCH0juAmrwyV5DPUEMS9PBnUy/i3rKzo0VeY8O22BknlDx/7Cpx9EueF72aGFll1geFg/5pX3wvKAOZqIJfxTM/aFFDq/KR/fZZW6Gj6weH8drG6bAxmltqmkyTArY877E5X1DGFXT/98CcMarh4Z2fZX1faevEk+JiLZD1YSSaIe3sYcPCrdGAUVf38+M61QN3mAIwDWPRC0sPRf1ZfcnF3XV1uD2q4NCPz7fLdREhhz0VI2ZwzXDkO39HHp+JmyBsntze5lk24k2Ku2nmcw3TB6+8IhRIVrM4uuRsWZ5FnoQj+uEEPgn2x+GXhiPDlYY2ZlBhbWdvUhTDNW7tYh9cWG9kPg4kLssZR/jjII4CvHBgr1vL4l2vh+sM6EuOeOO1pPtw==';const _IH='c123046dd1325e0435cabc7557821751e5ba815e0ba73fde50adf7b337f755ad';let _src;

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
