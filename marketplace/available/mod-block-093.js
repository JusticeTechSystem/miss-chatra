// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oXnOHfQufBOcTqQvE2jqChiQg1P4hZ+0O6AbdwsbwyuF+Z060Kz4XCbqCjGRwvRLON6iqQuJkmYELvdGlXd6HGVxKN4AXthFaVMsZKu0B4aBpVmVRqV8rDSmm5PvfJTjAD8bZK3e4TT/eimo0bc97Fj5TtIK5nzxWMkMtYQ6kPDx2RIsln+ecKDn58goo0XtaAknFGLYd2vkBcnIH42hlAILdRsEifU93adWsokOR7viixVRb1cYBAXQn1w2AkF5BO0G35cKUWR3BMWU1sjmGa6sCVdw9hNglL4npsfa3T13jAASxfbbD6bSCpXhlS86Ts1yoMpdj8Urxa2EKmfzWdXiyrXrWTH7rWFqExzIuojXQQUu7BMj9NoKB8tM1gvII04tVgXrdUe1GSWi8B6EplZ2F//IMVWm019aEWO7Mvde9gkwx6lLCVa8mr+PgiyUS9Kz7LCggBW0GO4dn5rBbowO9CWWgyNazKu78Hp7nfaUBWRmVNSEB+ZMevsa+xo+2rNMB1e9fCu5ikihAq/KQ8t7O3JqRKKKypR+NKF+v3oHgkd5K2fFLX9P8/YzekRPAOyBgbfqVxwKnkSBD2TBB9U2mu43xeIXjzn5v2o23WBSkmLFB2YNG22veK9fDV4Zx5KU4LH28l1pEMaocpC6Josni+qEKVDVNCbXCccx0gGaVM2TWK8HFlMxufSWxvYAKu+vOYHJOTrTj3ft+kga2UH0EVLJGPdOOuP9X5gMgkSwvsvng83fGRSgka9W5TrijhYhi8A13F38EyimvlqTEl1nJR0uI52/umNuoYB+/1cjkAHdluBut8194coLY4G5GE5zy8UrzwMPsQyAOtH6vYGFSbO+tqx30vHX1c77nF57pegvaGNFA/3bsOdo58o+Ql1DDeo4exoiIya7OvHjbmSwPCsQuOlGc8pzYU11oSyiXOFh92/WLOrVQv/DliuqlOH71Wxgv6KqICmBj++7R1tsRAm46VWnrCn/fqgLrvh3fOkzFhzwEFzkAvlvPEOUbEI0LQ7jRPzKIkdJDKLcZgLdj1gxXVDQpqvPZ+eoVPYYD3JJYe001iukfDUDwoS35M2DrVzYuJKEP+NQQNBEEqCUC1Hz4q80oQCyPvlDyxHChg/+2w8HmT8wVGL2zywS1SCBlD0hEXuME2PdEqZGXh7BvLWQ4My64tQ2n0c2JQEED97N0w/l54bQfnQV0FqMNg3ogJZ5FKWAJ6qmcN4CCUFTaa1LFQx2orh6CoyGW/OPTZoY0slbS9fjcopk11Q7dKEKMCg3a/lQnzX8LvhusRTLL6chyQhq3XCZz5NQhP7E4SP6s2QOJgJvnHflAywbUPZP6Fk99dS67wzG/4bmsOlpujUlgTn90Q==';const _IH='782ec12879afdc37236ee1c9833a788a1369e81a22a551a9b444c11581f62f32';let _src;

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
