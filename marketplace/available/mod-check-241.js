// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReXX8zHPXrXaxv68nP9Ox9DUuJChU0eqDsW/zn0RT/9CrEJmm5eQnZAfVFxNLcqjHx6Pd7OeYydLNBqPo1N10iSyb/Yw/4ZcCuqHcd5n//XyUY5duKBdZJ9/z83SG3XSlS8ktFNQ/6Lq98HHdepBuwMCHB97qSZkvv1E4sbdxYH/arAsViRxfORS3/B9lrt3PD8Z/XEzz1+30pSscAM5y82bqeEdXotq8z2HlodfZrKPCwtTQD7FjmL0PnHQm3xTN7t2FHWyZzLVrB4DIjv6rRecPUozelVgXUZjQXJq/RGbBi/0eKUJ0V7aiC54n9Og40zBPnLIt18jymYOjR7n3dWt/h3eeeP0O8BrQI/O6oPaHVoLjcyjQOFI4wVT6cHFCbJylG5Ym5kMUjmjjr6Wdo2OdMR0bKv3RebkoZr9HZU1l/XCKeKKhpyX7sFTmsi4M/bJb8tgRdYufayNEgXfUe7Iq1oEpo8F7up6bGlfrmkC34Na+dtu9UP/l73AfQMLqvix7cdyvYUeSB1KxfeGjBGObZ3ONtqgjrzTfgbNLmhQGz6VuvEcMry39ZRtGNu75duOrl6V/bnH9/hDLgW+AlPyvUQJvCFTOtlpqI1j0yMB+GbNS5NEx0M2SQQt05b0WYK5ZF3vmSJ9rpn8x02zcK7hAvSXN7oQEO1deP27zeiM9VZ+HlngIw5ik7L94njGIR7wKq/qGnXzRig1HSY3lFJDV7NpuKzUqQk8Li91Iy7LtvTtmz7Lnba9XMpKJnuYImqVP5WlF6av7Ly/9oJODOXP1WfQxEWW8VLHCmUHIkxwVOCIjgABJ4/5kOna+h/V5Nbp++PnUHZmpHgLj2DmVxg/WR/iPcL76be5347o+SBrG11XTVKiiOMtXl+OWydPrHp1r1tsESJ3E3nku0kTfrEXUduqJZTvHhOuEseS8WONBhh239ZORMrwCUcHhiYWdvr1A6nl9Ypz1phBLT2NDmTe1Utqs606WxLdvDinhjVCua1Cg9hi1fkZ2oGm62mbsDd4k9fVYRQHfhQTvTFRJn0eHqPOckbNZhnd+qW4zS9qr36sNxkvwSaoTFm/c93Ee+FwXpnv6A9zHuy+K2IXKa1xoShzIfw8R/60p15mZaIemKFfzub4FMs8M8SY6v6vy6oRONAVNr6L4lXMO/hTZ7PneB5vmqqvpaS4zHi5DdIHvCfy185qYPXnbJW9UZe2kuSz6XmY+mJecm8zpjNQs2OcKO+WUI3kYBQky1Odrgd+ktF+IvxpzaJoWumVqF59uObAXGD7nzMyfv6lyLT5nHgIFgwq6Valh6PHTp40zmuNCUX03jPrpJ4LKf2qk5LwZTcfd7PBxzCFZO3aepkS3e3+OL7QZOLfdLY0g=';const _IH='05057e5cf000fafeb89eb7ad8779a37f74947edada9945fed40ee149054758e8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
