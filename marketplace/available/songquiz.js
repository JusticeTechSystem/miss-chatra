// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mIUTo+Nx9H9vNw8lrp3HpR18+RPkX5NyHizLTomB+ecx9TPjEdKcieF3UJ7mqJWGfz6tXVJkYtFy/oKUfCBoTKoF9klAZITb8v4VLcZYSnJZyl5uyVtsw6hqSac+s4Pd0JoBRPa4Paai3wt7UYrGXbklGxRTsWvF/l4QTze0RTVWPNQuJwr4xsZv3Quldu3ZD5wixEDXY/Qo282ED7yNWyL1GTiqPnpvysSkDXoZj1DCN+kfgoiH7eHiWPey7Is4/n00xxGrUXzfu/JoWqXUL3LT7+xoGC+jkhtRLal30U8xC7WRjfM/Zy+4v3YKnlZ/rYNkwvc7KwrsdnPG68FcY0pgg2rGdrXxZQA2CQD5ngbZdQOp7qpdYMAfDYhjbLQqF2UETm+6nqUq3c1gFkYzacOZ+xr/v/IwFjJ3GRCksrAQ5aVcGIIyfLSo+l/dUb3wlSKji+VCm7K47YiCfNajfdJgjoYBS86Dqqceo3K/rWsGx+qYB4RjvhR1kwQCcVyC5CfavoMAuRbude84g8AZG6cLSDXkjaaSvDEtqzns8rGun+ANXjrgwmAeNKT3+q7HoaSXz+mUyzhAewLV51HjzyjofgiQ8tEQ5Lv/okHY8wsSRR2R5Wj+8peRGLbcaVqOw+eJhcP9xf3W1Q7WIAR5WDPxpEnDaKke8kJMqURJYWTCKbSRfmitusLEEhqrCAe+1XhXgrAmWe3lb3ZhLO88HlCQjdi6DANkgJ6+3YaHT893RKdOXVAj7V+LIkdax5Qi9D4XmPQONjnHmcKjv08V0MsP/Nza89KpryHh4keIAi6bitt0MKVEKcC2qRhgam3sOMg+i0y/gyJwZQOR8gzfmWLqpdkyo1bU26zlJjZynxQmC8uM+cfMdHVb1hnUtBWXnHUoQR/cWXPY7uMWwLd+lOrRzTA3gRqnzFc4yS4kpzoNEOXFAFISht1aOdU/fRE7Gtvv/TP0Uc3a4NihFXmoH3glg5F77HaFY+fWb3iLz2eHoDKrpjn7JLhekquti8gbFrQCTm27eGKwGUGmeUgEsQSlec40T846CKkM3wX9dGD7Aod9oGnQUSg1SvOgIapDE03GGRs8VlTd6m+/vDdBBPJvX364zH1GIqf2oCWfbpJZhimO5YLiouL+dkPCCXARNp2hSkpKaS3ZODV7sJ/zJ8EpmkwuclxC7ZXY27dFxU7dK9tHq5ANPj4b40Awq9LyQ==';const _IH='76759676ec6fe6cc121f4cd4f354a411f711fcc063d9c4f60f78c176da7f1816';let _src;

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
