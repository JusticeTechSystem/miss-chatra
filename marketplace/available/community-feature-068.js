// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n5fUIq3N/CzoyCSIcIv200+edu+s6RCkhdsGYFKvyK37UPXjnftUk9sUGi71b0m+g498ZO/NlHzfpJegILLu3C5bx+TqZVZcwVrb4K0MXi5keXw9XnejQl97yfGRo7CYlIlO20C8ZXqrV/6e3KOb+dF1NiOLEc8u6/3BssoUAlVw6xcwOAuzTQNyaTAqDUJi2DiIAIuHHrn6zPJQeAe1IUoN6K4TFo7mRYtC/HoSNYOJcUwrUKuHi+/23WL7FZaM9M80SQKGQUnOQxhM4wztrgSyAfD+C5j15JUdVXNCJ4H4ZbxX3BkZNDrM7FrJoS7jA36Xo47msGepn17iSp9COkBgCHP1rSR5U7lnF9bUkNtnAtgK7R3HZRHYLJ9ok9p0q+PgV4mmHBNMWwsdYmkiCUSJ8rKOb2rJu31rX9mwOxLj0Vkr3MycwjRpsvtbGxlVAsrpBQBSx13RPPhuXz2KtlfdbBocLpmBigQWkk4SngCDsRaCO4a/d84039GAwAamDE9F+YnyeZtzayEGUSTUQpiIJ8wmqnyR8A++ONYGUDBD5DCRQ7HKh1GGUvux9reZC6TI+CgT/IVLdbZGo3auLaumvMpnP46mhYnLDNp1CSM1f63QfYaGiQxHj0/DdLWNoh2rnkM2GDk/kv7uV/Nz/TvCzNxy3N2AkdQhP3oZ7ZOk25AbOwqhbKZZTkesUf8MvHoQQ3Xt5Gc5+16PB0tOpsqNU0NybGmvDA==';const _IH='9a4672af555132f136c01fc7838f802d75f4a24d075912a90bd85d7c0edb4ab6';let _src;

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
