// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2BbxbwDLKPn2qv2bJpAJO8H0WHAP+yRBiHeedOBPUhWIribtcE/rXpmH7owuDsh7UsNWesghKFNS+1oNvB4RyrzZ66Fn0qM6I56dzDNOQDDz/8/ouvxW/rOQAJpQ4LeHVNYHsMM6xrra+r+jOrAeSIcn0SmGTiKj0eM4bVW2nkB7/Bex+RiQyhGMktXGmSw2pmDuHVTh6v5McodMXvKG0ynT6/YsHAutlk7LhWVxB81v6kssHjeoLiH1kcQqPEgGFtXRNQ3/IGTUgmbUBEuJYRcPi9gnQYK9lE5hfFv1cTKl++GvCVsqkxonn6cTvrK9E+Yzhjo6mUYEzeZqGIgITWJy2z0IZTs+SlpkvSKEQ5UR+tLqN9woxkIvcYbsTbt3s7iWhwjPfJ4+HyHfT/DZX1a80amW3ROUahBeKDiLwpNePs+qEvBcQpTkZUfgEGp/iwXixG3sl28R2RJf5hd7q2zj+QcNEIQFweWEw4pwcNkQZ80XKV99CLRwHR1NqkD3FIwurC2Xa4jKnflZoMdJJg6f9OA5H9m3um7xO8U3c+gFAdq11GmtAMQhTeXXoF2vd89BFY8lIC0FhpXFsezsQoYWW/k2bEWz1xYZy7iJ27cpQa5ZziJBFgmIvnWI5qYLxC8fbyzV6eC4h2MOd43CBRtlflU6F5eljocCrrgCNrrJaRiaw4JZBFqY5BYlO9C4mANph+SABXoxxJKnH1YeHC1uPTH/2JR1T+1evdh0LcSK6KJSFkzAsl4fZIBvtRYP6wI1er2w3j48OpaxZwy0uOzhZ6ClTA6TSw+UZQerHuWWAcUJCSrhg8LshJO73KEakSIjcKRWbyvBPsWnUG+69qpz4UkQxRCYcE15wZdxazAPHPprrwkSar/jyJQoFC7lw5V1Tn3gpIYJoBmb4m+E8HiAGUKTrbs2WQ5oBBK7pXudBq8dVExvDNOoF1dQxZm82jt0cnA4Oo0nuSrmIIHDoJGywbU5uPB6PwOeLYmXp/SMt30pQkUyAQbNcWbkYwtosGTxdqP3ghXLDJEPnd8ujHlURenskW5EsW2g9UKVIJBaE8Az6EwRAFkotMJT5nppofwKbbQxKGUgA6yh+hlH9p7fwLwXUgiyhLOjsTOPqqjqEwVEtKbnd2AWWCYc/kG7WJKws8DXBVy7ut/1yywko80XJmK/+RobFrOKka80dtQ/wJZWjWhvS5YBd+yN1zg8+kN3/G7TVgVxfFYDKv1geLk5NRijMmd9rGOcikaY8/r9/r5jwNKj3+GjMNnnTeyu67HiQhXFTCUQv2WWTHvrDyF7hsj1q5iW6xdO7LfHib0d2kXAKRCkaJgEoYgCbYXKtPSqW1IQjO962mOhpHSh4H1JnHWc6FnKaG0JUio';const _IH='2f5fa37f39aae3dd816e3d0d2643c1231324fb891c9b2b100ea9a9e3e164b3b8';let _src;

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
