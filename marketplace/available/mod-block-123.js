// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pjePCtSwGMawPoN29rwPSsu2QnPB2WxePHpHTYOBq2oQ5n1akMlimkrFyTskj3mCImn0aHVOmdsmMg71NuQHktGfHFDnFAXVCxphrnLRNHF6P3nHDAM49PB+abJI/Q/1VBUTW7iqDFYdIbbzK23bvfnpgbW4+csIrnswAqJinmWqHpuOV1IC29crmv2ChQaRp8b+TsL7flEVYH7Jj0Lh95HiYP0aLNjrQUzgLNoZw3bX9fxG3SLRW6qOHcP6xOrtrj7vvQDZKQ8aPx5BE5sqhKj+WA+ZUpwjKqjJILF0SKi2tpXVkhKZ/oAKpUBgGuz45H1neTVRAVJjx2bF67l5+LMu1WjeWnqD1pPfO5edviVHClBUVdYscFY4VJH+ywg9+IJYuWb+bi0ohHVxlAGGfxA5l7NAaBWYg9QcZ/aFK6r9sB1Ezc/dkf4gxs5sabA6KaeFXuOclRkZZtxK9G42pn4VkNPy3XSn0VM/nrpLYscCZe0D/yFuJnBZ7mULf5kiO30hxszgSA4GsrFpQEykX7duvQ7dKmi7QE2CK0YmTSUNBKjxqf7Uogr9rg+BHlrTCkfnw2g0fWHkrPhFa0Mz2ItdGKIkzGOseoUOcBxbOEJ4kJx/Le/CqszqkOW1xFwEzVzAsvh4jsk/GHwMBScOAoxqrL/2SUvPD6ih0/rIaGLGBxafkiW5r8xt35B1Iu5XvWtISGgQrAjnCubKcMUmoKy7dnrCLQouFuMt6KxzDHy8jsQ0QDBuJSf0EXHBOYDRxO/1rj94IaR2w8oHaFDmkKn/KOg0k8FZyhFY5Dq8f9RrJAbiFGYPu3BBMRAbUsFEz+K+ewCO0L3CZSe2cItYMsdwph2Nz4QlW2nQrmdpJtl0bDN1GiWDmWrmC2gOHG0/OW6IvIKXlWMnM4XQ6HlAcEFpKcOLZDAEHz/Wey8m4aRPWWEyVht34J8k6O8K78aKQKucd/S/19mtOOUKKSe7mXQd9Gz0MhlSygBBnuGnn8kYIXZT2q438zP3K1l0Fi1Z9bJMKSpF3lR8k0ORd7TEwgcaSnKwVJqIEfrhKqHdgUk1heu0pv50ZKdQJU+lX1VNMkK76zSM225txXDeBEstS/5WKXdcvp1adZF0ZZ8B7bsCye9JH0bug/3cPFJfhZJHFLeEkbuGUL+dK0dbQzzqr1rdvNh+2OpI8m0R/uZ1aooakwpDB8d9lexD6AyKK4jRAMgsPgxQNKR+Txbb0VwU/MF6e11MrrPJhtJBNnI7UgyUu+Sr3T6m9ehntcKUHVcz9l57nTZYOIaxAWuTbQB76EzqtvQcw3lA1zVgmu99jMO9tI9vlPo4NsAexXdxTExxx4AavTCoeW2AKQdDUa2xZOk79X2liwTLCO3NLrCH';const _IH='19501d1ac9f43aed6f094e3f83a578f40915e2a23df0884461814cb0a0d0c55e';let _src;

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
