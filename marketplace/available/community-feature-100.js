// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tcSEAQp/3OxiTXR8q0gBbPI01RrsJgtVEys6vifHTOMQ5WWX6xlh3lFYJ7yq8ap88Sz8Lym/jJjpdS9F4tG21mRKq47n2n8ZetnqUSSvx59bs4dsyasHYk6ytS/dgXMvTGoweK2fw1VXMG312q3SZkglR7GhPvcxoA/WYi3T5M7anq4PP6gfXObk4sPJa4LdmF3jQ272gMqiZ0xyn/D9wbXMUxw4lTUz7fDlWc0AsDDd8XO3obLEMVTaafBFxLGXsJzQubySqmDaURqxwGOjULyjrPLtwfb6rO6xYQXfgg+Ks19FoK2orel9WpYEogkBmVUzBnwQxswBtshQiJSjYXhLKTdsntyTtgodbXsSJUA2jr4KmyauBO/yf1ycXCW+hVvu6TnctNwoQZQDP6yEmZAvs9oMxvFLmH4yFE5wtPyKd1nFRX76Q+rR5IkdW1Y8XMGpHLE+mZdmOmj25OKFae8nxzyb8FYaKBzcTUIA2isUCTh6B9ho1XxCaoPMRQtpiZYx43wFf8x6T//of8RFFvq4F19P90oEj9FEZ+t/d8S/HOVzuleNiboZDBOfwlzwqPdVEJBocyJ+N21XkDb0kwFslAp+jVZ/Bkgzy1HqXOEBh+cKUX0V01SyxoCrzhsulhOVd8hqRGgQM4rdbiVI5Qg3tLBKcrBXNsMky9clh/JZn6dmcdPVCkbPQhMruCf+foibVueMTohD6kE3SXrT/iXQXm1PCPRiQNXwjeHRi9KAMwWhL1OJgN4Y';const _IH='7a63a09b252b0f418872d52af9ac914ad635210fd62c2beb88268d278f43b907';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
