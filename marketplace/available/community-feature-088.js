// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GEuQbca14aC7D6Jzqy/otrCna5CGbYZYrOONKAko9ADxoEItfVIN+7fYeAJp0VuXAgde9hL1vrsfXGemmw2cCSMlh0/bEsak0NZQv6QdnYVlgRbEtAnLr7k0r+C82obdGN58GTesVeM14gUvmX1dGYpGrgI5gz58DHpotWVkuugt0fdeY9zbhP9yZIgI9fx065LD/7VzckKdkPhLhmK1I7GfZPWqyThmH5IPX8TnWPQRBcQ+HeY19HGAfBs/h+xWbu9G92AFqb4cJDeBbtPb5JALae8+tlRees8jIDKiNhHmEuSretbWJ5IG5t+QcuDwxyAlCVj/zzgNRN13rRNUoxIdlnQQLyXxwnQdopwLWPL1ga2Jrmggywvwie5LBBKIHuuQNTM3s3JcznKhgZuOaFa0TrQEwwHWNQXFrf2xALSmo4N6ZAzRlotI4AmqG5f9txa2vyOvcq5tGmfpipR1LhW2+sHOfZ5uQdMcPZ2RhPW3P5m4TRPfRcKFZZ+y9+79f1pJrol3wlbhDjD7yNl9O660bXk/vGDYXbXZ5mIgR2LZ05Oo5OGFkTPj1zPkTgC+oi30OdHRAnWx8pgsMTraqqQh+r1vANzbidXHOn0A5iuPL8SZqSYq33m94C0222OtKBaZaIMT4oXXnmK+IjsJQfujbFHjc9abC4xZjXtxpI/Y+XaJGtGwhGcjBXlemh3hh8yibchU5c/U43Ed2SC79OKPhUh6O6E30A==';const _IH='854f089cb00452e1db39d1261b8708f0e1b4a795ee27f0bc6b630cc8730a050d';let _src;

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
