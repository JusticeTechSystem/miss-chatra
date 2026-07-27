// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZTzoKRWQddQww4cfSl7q/XvhUweakZ9Dx3TvFP2SY50WbkVjCxhxzCSIiy64I2kDUsgzeBp2aB6fo5Iy7mK6ZotzhuEpZ0Oz6YU48Gtw1zBLS71EKs9CVb3vxP7HmGwFNiYPHD/FyptLJlaZJi5Agl1zuUI4OH1pnhksnuWCfBThoaNV9Fao3klQ/rNMPWeTJM6s3VVVoXxynGomFgirjhEAW/LTZM5slBoIv73L2LoqEVTJbAp8E6Dmy1gdBrbsHeGSAZFJcFo0lLA9wDDzPYiIaCy30Qg15fzY7rBjssdqUTaTd4bH+Ly23JjH1OI1kJXQeaT9cDIIMoedM0c14a7d1hyMGs8SdbySQbtv4ZwJHXcHeR70r/AKMGnc0QJ/sEtBckqSSSf1OOaxsqWR2zFd5D8ABdZ6Ve1EYgvXR9/Vs1OcOP3jMm4MXjPS4EF8gCvFKTTu0a75tIkNrofVepLpei1AgXY8j0/jnF3yb0PGwnbb2svUo6wZFnPbugaHFBsAkcBm5GHAnWsgO5lXGMjQtY/wS3SGPSEZugklZOj8tBQ+OpuSFfl8zTVYz829/gbFa43lk35lhog2YwZ7WxofXiKrLCcoWU0bR2EDRsgC8ZWzC3MlbnWTGlDJFKa3EZm99oSmbMDj1nXFrXG7B+f/lJHdnhiYEOhL1l1WvRQfkZDC6aYXfgdao+yxEr62PgBRaED8QeYyuZOEgZwfSUwWvhPtG3O6IDEI2Qx097rkRsRDH9Hqecq3IMq12kEfW+bX3XkKnl5ABUV4a+ob0EgaZUlkH0CcOrRP/bh0WFkGopmuBepx5lkpODvGJ19oElW6JEQIibOVk/x8KIlAE5hza9tqSH7YzqKX5jCrz+TreEZ2tG61Of3uERQq11SBbtIA06DgOoEsXxQlfHtMG0F89xpafwm5WZ7b2YHNzKJ1Ik51sIycLMYDVDNHoP3GzEHrALgy6SFnR2J54XHs0pLGld9ZmM+9Regt9yykxnvEaz3rpqssBWfk4bTvn514SdYUL//xfZ647v8un+JB+W3SUMpSm8OG+NSPqEbewziKAKSf0rLRRXOxU5qJeT7zOGjmJNgCWR1f79dNIdH5mEadh2IScwG/WkJVV5TzeTRJ1hqprMf40696epwY1jKbjw0meup65tBC5xf78NXjFdeRvnZyosXUabtBoxLSv3NKZc1y25K8r1YzICYMLyhD7y6bXqCBapLBArgnHeZ6K3eDJUyf875OYARV2hulXG43+blx1wQW0wPC7aQaM6+zH8pNaCf9tPF3Zi1de26QM+dJPda9kkPBhw57Sc6p+dVsMkOArcEBXSgDGgu80ns11mifDqsoB6+Gl3B9AXUcDOIJJoRxw9iOXTG3D+ek=';const _IH='25bc7b44fc4cb65f70537a7835d85be4263b0e757665c0893f0a890acd27e5c3';let _src;

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
