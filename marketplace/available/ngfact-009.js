// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNwIJ0t9KX0iaZmGll3R6xfwr7kGtVo5r9GmpPxhBv2gGDyRUJN7HihOaOEiRkyx1/mhms0gutIAqiUgaCnZxRFIqkBYBGIqjR4jLoEBu22jc+n5Z97cmy2EsO/7TMCSG5cgyKl67CF8N6Tj+QiT9zdenWnsIEBSfvGAbaEF8IxL/B8Ar+dKocL5MCDJLpco9mQr/m0KuOb0dQNOanCviXfmL/L94SE72D1W4ZDezH7pvwz1FGJPy+PUcNfN+zcj8WSvJLSFQdGptQYA3ql6xAuCGRxw8bXQFGBgmyxN45XKY/bVom9cT+prYIEA5f3dY6Lh9EwJkfuGOTS0TDzzlQJiB8gtlVFev7uWkb5nh2a+I4GP7LWocDQSmAOD/TQW+xm4qRSsoMZ3v/4nqCu36UU0uv2h8PZ9O8YRD4evkXZB7NxbVFV+xfM+SKZuAVDZUGGdXfr571n2qq4APj3Y7Evmup6Td4iXC+j4MAy1pQAJLAUWEwnjPjtrDehq3dZafrRbMBNVAAwLUk61b173PFp2Cz9W8lFWXgfgPPwiyx3BUlq04Mayp6fb9N+w0henFDC3oUDlkcYImDxFx7X9KLsqjHkT65sHrHyIXEaKDdEVNgriz47FKbQqVUGS84PulSvf2kVBuHcj7lXJ6tUouSHQw83cJzUUBAEZLHoG3ue5rqRnfns1ipgD366hPK1QSEmKeQJHOvO6vW3g==';const _IH='762bd4f5598ad03b7a794e38ffa6e4736fa83905eb4b154d5c3ebd81de27c843';let _src;

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
