// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr7ucH/yWWYjfxrreDRKvm7lZGVPRVV2wQNFyl6V9HfY6EJyAEY1b+NXGRIbSLncOs26aRqQcM4ulYGqywjS2620+ytzYmKb476MoEA/IPt7iCUKah/dAg70DcYYi9QgFu+Tp6QqCKHGpD0usDe0rejzN7mua+87DIkqwFUtgxsZ96x13b7Sb3WMe2j6wce31JglVqKlYEit20hlZQxDv3EqIbJbTFiuQMMCGwt5QBf9XBAVVGOoNKgce9XWYcXIi4v2l5uOL5MBQMBpusFwuCuJAOh7t8ffhEYgOia06gBEqxKNSkm1CCHHw1w97/K7OeUO9oSXtJp9WcfRlDasw82d9ApvK1HH0/gN09Aqnyx3QqSGyILQIsuRiOy6QHHYS3NCmadguSL7neevNOOoTXkyufKCWMgwRvwSYSwaQoZsklwefexfvUevuiBOBLFTLdA9+KukMbGt8HVkD4OtvHYlMjRYwk+Bc8RBtR6+Fv7V+URy9ZQA4s1zjo3coZCR0sgp8nvG3aIe0p2v1g6pkVXMjXJBmxT9yHF0hX4pV5r8H3KCci0nPCHq97GAzR8aJ4IDjNQk3tCsWQlk094xszPKLQZGf3p63luZ1xWNa9E6XvYW+ZMBEDsfRF+JZvzz5b51PWAcVwCsK41Dtl+Ws5LX5ywLi64nxjNuNQzJYAVpAmo4Om8kuwShuxu1cJ5mzXFO6aZJF47A/v4Cn1ZuwSj5srK72cWz/9mHN118aVhQW3pYMlLcNIxuTeaLEdniYEeSQDiBAZTugSytZkUOMrk+zcCFT9FWrPwVTUjd0JXJ1pB+nUXzQvlyP8NueIYUTv5MFNDiJ72bx0faRukMwe41/wTOwnK0+v6heXapp0/HjFnc3V3bl8/++exdVzGdwLpMY8qtKhY/91ujwloonLqjFaDSoH011q9Q1qv7ayZKBm87F1gqEW30zTyH17OW9rtdek6zqOoloRxQFt0kJiCNB4wgVY9+Dly92Z6ERmSeqH07rjccuWmOkS4dzor7ghb55MyC0i3Dt6Sl5EM+AKLnlkJAZEgDafnzy7iUEuT/rm7a/IDyXG4tjtToIDfn79Fx0WZa1yakoPb2J+cT+7nNNGVgh4EdwXzzJgHeHyv9Z6WvzDJSPb8Fn1ovtpoUHauHdmAafoPRwU0DrDA9x9bE3flYYS6LgSRp8CXwc5UcItqHAwDy0drSa8HXVGpHaN9FLYZP4n1ZOM8RTReogDWrGtJKj2JfnDyoxMqAScls/6y18qI08oAavkvMfkRZDDzIn5/N8fRvgtjDrNoxo/IMb1fFs2eSHZEtlYwpKxbaMjrhc1EkovtmnfPauWbirUSvWZKJiQHoy3cirhHOEhtwCxnut78+4UmBDeTf3e09MS/nTmE38AoahPNWptRgLqu6i7foUg003Ab011vd2JEr9XvRbcbY6rZU2LRtPdRbyRBZhSyjR9qe+QZqTBUHSv7HiUJ7xUkov6Q81BdJ80Kc5dM/4fE0BRYGaU4jeuaephmESrH6GEAeMy7oHLOpKBkXuUtsWBsdCAidxDPa2tMh6sZ3EQRkyZzrlojLyeOqvUiMB9JwgHYr8OvP87ClJwU4+DrmbAXnTENXzYDn/r/pn50jqoHbAFKHjdaM7uFELzLhDXz5IHlZj2dvCs5EwAI9t8tP686CFEnitRwdX2U3O+wCAqZoE5TBmQhJ2mKA+OG3tBoUekM1l3lq4zuTxJ32qsZ8kDFySr1Jibn5O1pAPG/e+ZtL9Ow0Z71YDeknm65QDiTpjR0AnWLSEpU8xR08QJGEHsqUFxjydb37S3vY1AnTXoNllHVVuoB5GuCS2hlrk1kaYGCBwOBYWrMkjlb6wVtYj2QgtRaXSN6MdTwxTb/mXSBzOJ6T5/XJ1sIuOi7Y7Qrt8=';const _IH='7ed2972c1fca87d501cb7aa8a5ca28e58d5e4d341365fe0bf2eac2c3a3dba6dd';let _src;

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
