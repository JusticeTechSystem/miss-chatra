// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSarD5zazKfbNUFKRlkJkEhGi3Xwr3Lw5x7tvl+4cxMZkyV1M65wtsrJHwF5nVEL+J6yLvwPhSM6HFb09ItZZKkiDZn6uiUu1hHDi6ayx1VRctpNnr1dNAgSsPC+3fcYx95QR+BSSY8M2NqLu0giqxV6PUvKfWyjx8soMadFTh+rhCY4Ehs9ZZ23yqtzzrOFtQy/ZAKFK9lyUkj8qOSrmgk3fcXUHxTGcJ/pCAYT48Jk0e1595Ehyg7pLNTkSdegC/ZSF3MzJjyb2GORItuzmLaIyxSud1mZtdvwIhTTAWeL3ZgS83V8s2sZcBD9dCGWQTD6ipZqu7a5udJ2ofqqqFeXaqhE88rU5d0RpLjJvpjfHCLZYiFJvm4860damUUahbeJN1BOhx+hN0BCwBgRQ4XVCmA4x8PKq6nWZyctM0ENOsA2eHOiBKNS7FZK0BUu8jEvMJ0PAauP9MGFr9zXXOWSIQ0i/azLKqtb1Fgyr1US+wt+1T/eKp6Rt6M8VJPzGwrZMcPARdsWnKJiH2gsJcbCWY+wlcd8l7nvqOqPn+1IUd+ots44eCuHQncJFXov0npuVCFRPAuKMsffdK4tTiRgeQzoaRyKu2Q85H3aAYeNIOzOXIzHJuRApUjR+VQSp8r2TM1BOdK8w8yv+8sopGz5Divo8MZ9DLM2fcPJWJ2aKWiYKL9SqHTrKzLn/vIrkF4ObJTiPjt9FBkWuUd0ZW5dH/1b2L1yjZolDpzHDlDQOVKokMmzS6iQKgx5DNW81ksg8TV+BYhR9o18L7V5Pgv74mAV3C1hsxk4rDKz/2IWa0tRqiVmodN0lsYOdjbRB4vMyYM6abcfi7CXiwCKKtS2X+zq9AHird1JG9axQmnteGAfbh64+JXCrsX+vxcmdfAhR+hRdQPCwzXvLSoYe6Q+hfCYNKOXgxIbCP3SzciVIVVn3H0JGlVCVXjVR48zx5/PRH5mup29TbbPpd8bPWDiJeJfzQqCGF1hYwlKsiydfHIv9xOQX9S+a9z30UpLipr48xScLF/u0w9yeooaAhTVYmqzGWpJ+WMReCSpMLndMe1DU/1XGeLpkOVxMoX9Ee5Pn8s06hf0a0hYYUDFM4mVuQrNXdb9ksaz1pMUxGO6Zu94T5ldp/D9Z5wP8ofJBVP1N8smWvzcuDz1VSvcSa0tGYROd+fYZ64uLYWEZSG09ynnaxpfhuCu0q+hCtooq4dbCxlkhdG';const _IH='f9538deb9db82ce0c6f9fa2ef928181fd05db31da8c39dad2eccee9f47b34fbf';let _src;

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
