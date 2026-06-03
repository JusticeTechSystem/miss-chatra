// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NMJMvL+5jOsqFbJ3Tv8/61sYl56n7azuOOoZxtoe1pU3QiNUxPdpt298fM8j9uLkZN8FLdRGPQzQayGaCdNJO8PQYYUlF24Zy3wis9FwSHvJyU/Qz5qAa+7nkXt5FFPpRns4SSpBSgm/tYoO0Bxek73ORRBITmopm1SevlPcmDed/xmxY/tlMSjz/VZt8ySZnQfgXZZjjPkHLcgzC6uTBO1jitnzJA1WFlgs+8nh0LV667HygKw8TBY4faLhYk6puaO0KatziWoUaUP1KkNzDukhjZENb79LjOaYu0o45exPSMv8SfJFrfl/OKb7j4oVTt5PA+arjzZKrOjd31XL1QZy9dfdGAj3X4/CI9FxtlCwkRw/R2QdHbl6IwiWvS7Jj0mZtsgxs4fPsBe+46eVvnTo+FvYoDvUyHGPKZbCDXmWpXy6F+XpQPNkJA0j1eGrahfm9QSNveto4EeS4QUa/56SuVdxzWBlZujaKg82fS+wwkYJ2SAhYCBpq+P0dRaaokbEgWT9Rxts5PiwYnb2/hvDqmxetPPBrMbXFK8vuZMezi+DL25LGW4y/9tCkikFQrtpGNTXrFWv03mglK4VXDxMD8N6bKMKNa7nylHut6/NkMQW6eTpCnnyVVfQpfqx+Qb9xABVZUlmhoAWwj1j5kqiDbNY/gKuIb9kkidwA3AfokRpnP0Ohj9FxGdyOOoX5QS/Cx7gcPx7jST3bDkmgtBUwyDnF81CnyBSjfsKAYHcXg==';const _IH='86b1ea20bc9eaecad6e6d5e7464a651129d1c69355f859f58c55615b79e8d3b3';let _src;

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
