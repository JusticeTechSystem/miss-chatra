// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IVgO/mTE16vs8cs+OO8YQMZTq8jghX5nv9wdua2DrqyvkX7cuWdxd8rTkbvu067Kb+fbjZZM+iDmZbLVO7o8CFtNXGqrnBftVtH/9j8x9uz1NCsqhmoq3F4p9At6KOuXoPJNEwm/XJ/S8nAo/W4wJ6P5BdWbicFPokI86GIb5W/DFi2lF6orJcs8KZ4obtAisCWcZ2ibYNkX4X7L2Osx1yMQyl5Hb6EcHbn4t34rNZ7eVe/i5nkTkWqxoiBKaFbGvAqCceXRlXFnfJRLN5r52/3JtE0Wr0RbWUJiIGPjT8/T3Q8wEyzhrsFAuKqssXgjGjUwQ28lM180VcIlo9eKSn/msCzWJ4tNqdZre4grV4DFT3wVl3gO6A/QCMF0ZTFdkAfOzbvp32K1gTaCsHm601kciR+YFbHPbxc6fKZZvzQyp/8ak0/Xvhawa+6ujl1PGLkFoCP6txpRtwhBcp7RFcUnMq0MR1PPzSP7lIWhWJOZCUY2tQARGvmdkbV6LiJxcIoJXPvf/a85CH0+B1XwQ2o3D378qx5zPQ08Z1Jum0rT17d8NjpJB71OFOKQWOIHar5Vj8YWuyNZrzB7xdcWodV80lZd0EKSpQu07vbHjeFxWJTWtT/afz4xqYr96EymR2pSZGhJVQ5EQXXWb3rpAgdejOEEMkgHuFmKHsJtwqBTysJ6PfW0AoSW+e5YpH8B8CzkK68Wchy33Mfr2/Vgv5O5mUe6FavKX6oV7zM=';const _IH='2e8cd6626c2414045decc208aec2039d094c436adc9cbb446cceefb48943a549';let _src;

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
