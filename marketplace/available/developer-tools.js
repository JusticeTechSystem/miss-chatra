// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SheUJr8MgWNEUbH8q+OvcrZVIhbA4DsURAELniUAgz0NNv3yqYO3kOB3Zko8Sbg5GoR1mj64kLHTvC6pKLN/BD8eHSm0pMRCPKLi5d+PYqjUWIKgtXweAERn+RqMOzZ8uT/umB+LbLRJABV5Aty/tdWb49EjvkcKB6Ad4PfT4HnL5keyCnABzETQ3cJ9asR/eLrzsy8+IIn9dSXu/yLwzBN2u0y0ihQBlECRNbEoLK4mvOgI7e1nJyy468yolNy0jpqRfslUMcpXuLumWffQL4eRtgwerJBHaiU2HuO5i6GGnfTETuU6U4oryzldHH/rrTiAfzDinosVud4iGmWo0+Y6AF/2IZl5yx4RSLnOttrQ79equDrPirruhoUx5d0yIEc13eHx7SdKyH93SlMvkphuJSvGVazWS/aIpeKniGKoAVIj7wbup1WpCHSIOqZcx7DWEsSh9R8RIxS9eTF/hABWO8/zq6LgIIkz33s92VEVebxI3RU9vRM0nN5meooL6hC8vr23FbX0cmnrmr/lVy3saxqWbiE3AT6o1pCX6ukWwjwUc4WcArcDNiEdV+hDMxh+/9MY7iVfdoLrj63KuW8vYrAeT1t+wM8YzYg2PD3XOODmb3f2NTJOCMEGj/iZfYU8XQr+cEskKEZKnEdl+mGtIbUFYAW1yDDF5eg8AE5AK3ETBA/egH0H5y0fxcKKQQkTAEqUJk1nX74Z1cmF47+cPyp4eO/OU36jIn6vHJGB0YU8dI+l99J2Br3ctlnpfduS7bGg6etVqZ2xdhgbyiUQvlLH9xD/RxvIrYrIgmKGoKwd5RTsZfpXCrpKxNxqJQDxbLop4g03hTwJhOQQ7lAtjGky2HGzb0j54lxJANcmRLfCG2eYRjGnCJO18qgnB5bibAc16RXHg27GgIdc65/6YnrgEVO8p+o4PjnRFir1gc/6h/865EwZWXDx0INIBLzy3si3QE02IpkMMc4XUIowI/IlvCRzCsisdWmyOMvLofUsnODUx12F7s1MYmizkARMI410q+zTCpULxzO4n+3kq12BmPylOISTwgEJMyuIADaII4aDdMvKygG9Rk2Pqa3bfXShpbhCGIlNAi/Lxm9aaUUrSRgIk95X1R2YTZhLgie0IXILHEVZNG83ABVYKWzQlJFeok22vk50rUeJivJ/gRbJVFf4AgTzkoaj62sBfbu1yrpnS9HH587xPe61dtp7eo7WwTuGEt/K8U90Y6mEsp+W6wjF4qrug7kdboM+hNuEnjhYUfXQ31Y8Iz7+0+5wjZ5tSd9UqqmRMXvocQ2weVP3YKRTNtasdvkFVrUunp+xRYZ6n46JJ4IyzxjHhE/Ray1LhafIGW7+H/IUJ8OSi0ck49c/09GksgCro5+6r1/vMte2QfBujAcKL4MA154U9xgqRHgTsxfKDyQCX+CwuhnQWwSfpKSjbZeeNdltBJ9f/iD/w3vi+iPPH6kvaVxutMU6zgIM21ESEIieFgj5aBCNQW/6oV25sd4i/PU32sfN2jkfOjzHwecPPrhOOtkslkzCJkKoMbnFeToP1aphiLPrkxtD9YCmJWpjKjYWulmRQ4DRnn/Qp3lJDXC2NwdfT5HMmy576Xl20fyrGLP5INmtgMLNeLddibxIUsjV8aoYGsFp+CoWKcwXXPBfyiForyNJWtL/Sw==';const _IH='ae0840d0fed6cc829edbfa9ecfb557c259739dc747b64716d4bc4088732811c3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
