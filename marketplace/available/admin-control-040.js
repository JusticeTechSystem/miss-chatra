// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/F4F2AnIlfwbNuniHYuFptMC0xK3tFS37erbxKcTwioiGVzEdnQHR1WLj3m09NcYzNC9QfDikgqlHIMVV/aZNhZ7tbl1AZw/8diQMEj3lyRCuX2iF/eowR044BeIzj6NYSA9tww3cLb6PNIMck3PQQKptE8/cZV+MufRccJdvR1emXVuBrxfbIVjXsnTBWnvAPjlSMoLWUZ9LOqAlXwa6nkxdodpq6umyv2DtZfnQ4E26YplrlqiPZN80eT0Ot18dqPI99x4xbpOiWTBq896WL3uCUV8f19xC3KZ5JPjxiwfIAvYEA5oauNwk3gQZ8j6Svd2bGtMD00O5T7Qh+usNivsEgHensVml5Oexxf4AuH5j/etb3kdKU0oROFvfLyv1/B5BUlS5nsfAn3TAJ0I5NkRL1Kymtr9Im61d+eLk0pm3nM+Jp3GDgB1QJ6n4du4IgAF0baNAuf+0ZzUhJtAT9ecJlMmLhiD3ATSK73lWjVICcE1wauBo2dYQOnaz7BEbHe3VcMVnu1O/CMNlNYpDoFVzEBrGhn9EzR3H7764f0hO47suCcpwb2qO6ATH52rdrSRQwACo0FmYAuksK0MlVNCqQFSnzt2VJMWMwTBIA4I3fiAeEaPgphry6dHcTWwjD0hW8bhodqkXSNosVxxvO41YI8r482tn+L1kQdfTsA+MyZ3ZlQZkw5v15+YIDs+s5krhHDAB7yfvRVyEAQ6hkH7VRsktUs1FEXURaMoGzBACsNWkz+lIkvBQ7ug/TqhAHWvEc4dlfd4MdZKuhlp/iruEJQZytX+Q90AbzrGGZsubvxKnofflGCpiByhIbSG6dApVsfrSAG99FX4Cz4yUN6OzaIvm7Kz+mL2QmxTszqnWimsJsFDEsEb6d/JRwrNuFKhVKF9YnTgU9Er0ifo02RG/19jN9TkdDpMR/PkAjI6qn1G4Ih01VG/NyIoO5uNbvM9yr8817cIcozQOCFx+kXOBPwZjTxaML1vsw7xeAx27MtnPFIg+BGE/swmjOX8JQNYQ==';const _IH='0c7aa535e0e5c4dcb5f094f5c340ba34519b4ea43ab034c258be8d9d4d13a884';let _src;

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
