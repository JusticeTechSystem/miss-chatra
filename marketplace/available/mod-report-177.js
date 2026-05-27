// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1JjyGVPKKJvfY8tcjGoUPI4DSwigtraM0QJWR1kmzvBsW7UOMGGV0+pWoosUOZ/ZX36WZDxqh5XFtMRLT1eIUUOoFG2qWpFlLsSVlXGqHKp5IZZzbjUSuoXByHkcLLrxxIqWAVVPKpDoTC64ZnA3Iq44b6kx0drVMhlf+hi/OhAoku/lLypGJ/TwmvrgvQqFHpEpV1ujIYTplyPbbeHDoRnKivhEPR+2WylC9WKh88Ks0yLOp/Aob6BEwtDCoQgLq2qA9au133jdqHR+NZrjGafGQlu4OlOYC9a0YqWue9BrbcM9EhzSTKmnvOXAo11/I1pQy+yDUFpEMzJOCy44rnvQDOeOWpu3RjYdBZqeOVfnHdLZhF+Bq2nZVob/iSafUzRyQIg1WY2hdt7NV+FfF0RrUInWPD7eR5FhqLCZAh3N8Y4Q+LBcM488aXR2iORurdqE3IyTLeRotHsRfP5xeIbqFUbmwgsDJhfjutrttZrD5mbI12tS4XXAg/E4hkgeW/Ebv+RNdmJ96XQzE419p7juH8HKHhhyxneUSG0zCzedST9ZvakYApB+0ZJpUjHniBWfxiwqufIDH6ltkFZSDqYIYG4pAiyGpbVfwFQdtfqOyj5MIpfEd3CDipvJI2zn2u9f057L9JvUPhiXd8nWf9KYnMdapvz8JxHA2L5NWtYC5VK+QYCv5y6ZFOtsT3jdMeVIw0sgLapNBHBtaXIb/xbetEauA7sr0j42ZV99XZ4zsBcocWKzKr/K3/ubK/hQOBtu40ftUVglcGxsb7cd9AkITUVS6roc3wdBgA5f1FAXyoF3HGlpdNZFj2NC6kVayPreSOaQEBWjaPztFcuUaTf/dVneD8fWcveVEmM+gumT732KmMxoNi4AcU6czT9MLNuMZYrkHppulajuQqm6BPijBYAGsGo0PbXHr1XE1WMNrlX1KYI0n0v+QDIXHgqt0jH2AWkGaFT8Bp5cdFZnjoXioSulkuFXqfbe+35M2NFMRf4CE/VKvWdGxoVc2pPdljwWy2iSQzZfaaNEgfh7njNrfYLbKumItcf/XWEPL5Dij3Sof2T3eDQGG9sBDOLYb55hQwESBqS/m7ndCIWUACZLqxWSU+apzHnYoWkij7s7Qcn46axBclr28t0EATa22STqyYqZc2gw2zm9L0O3J2Hy6yTL8h+1u9cNxOrotDc0mSRQGkcyKOqhwGLM95uNo7rlR+ATrezEqGskEtokoGYFa1ABFaKNPp5OKCQ7NL8jugs+ZJxIdymQbCIDs3EE7Mvx/Q+Y6pY8xbkmMLOEHV5uG9DPKsYc4x976XWWOi458x5447BGWWQZ97UoTG7mVfvbAZq8YL1eHvxMgN6B+eML3nxjIuixeZdAmHORMf+QHjsdR2Y/3g==';const _IH='c4e849fd6e3ef68b6050bbfb8047e204d5e3d8f3c48d182388739632b0a0cacc';let _src;

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
