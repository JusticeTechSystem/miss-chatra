// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxpFfDUhaCK3tSSljWMDKPn9PZf5hWjKwKEO3X7uQ4Gh7HIV3cGMt5fZ6g9YhGawlTNidARN6aTAT9ELNzVw53BDa6DY11tonvYGsR01Ol/4gMMb3MbP+91KKIWnN4mrh+W27jgvZMkb2DpKet5rkIGxT+2ckaVSNnpHhjOO27MVJih45szt2Meh567VhrKmzvbB0U0bO6aGHcTyTI5NXCvewa+1NSG0CiYMR58KIwSAssoj5rK5jbw08XAtgZ2SKRxD8y4hk3hVrCPhVYqxbt/4QS3rthitcypJQ9lTbvdFniKvYOQXquFhts3yjinsaNpeWZKY0fk/02DjkWXYWr3e1iabT26DG4iHC88wWLdYGah/Itg6Qdvn8GQAv9Ka/pvn0iA8T2vOPg5AD2DLiKO5/vbwMaPSVwdy5a00wgkkVDJqoTQJL0LOm0vv3DyoNl8HE+6VPbjKEnYNayRlphqcHX/kN4Cnm+BHFsm6n6wnfKfz4FV4WgMggEZ07k5liOvOfZ4Z8KAajlzuLAolCBv1H4FfervR7c/Jfz+pqqMdXGpDinRf50QzDjiS/GrmpP0sNce/g9tS6NYik01N5ZHyj7cIyT3cvV6v4zKSrtTQ0uhKat+MaWFSgHQ2C944p1U7lCfR96ToCW6MoK6cERsINZdeRz29kcPJ3lYwxmqxTPRbW65rOAL6AVkXnguSYexSl9Yh/iNMpISG+G6rmRWfpuN+mP9zlxFGGPTa9US0WrNyUuSlOWnUOU2BJJ8wcB6aAqbPVJj9V3Kfq9TNaXnTzb21jWHPWXaHFuuwQMyJD+CUDROQghWFaXJn8JmVVF9qhInIuCcPV+bDqMyXOLKzYPbAVrNiv9dWhRn/4HuwMMLRb9fBjKeAu+sBjXBSUXp79VyIHXO7yuKD412XvnedfQiVWMLPnMJcP8dwhPb+mrecI3JG7Xff7bbV+12gFVKeDYq8xviYTGXyd380+GNupZPQ+8xVpKOMdvQ6rgd80i4z1io4DECVEyvmiNjgCN/LPsjUnXVjdN64EtVCrEyoa++ko0nz5mhS34q9wNZBxg6jQ5icTNcs979KugWyXcHsXFK8ynOsyL/SuVq0+rGxC+33/b+/EY9CZNwMirdYXiqkE/LXxf9QRbrBiiqKBHSe6UWfbUv4O023ofwOrer6Wpxwv+z7rJzhdJBiZy0Foplpsa4=';const _IH='72966f43d258469f29382a99c625dc5e49207e5589bd1d486080a96721e848df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
