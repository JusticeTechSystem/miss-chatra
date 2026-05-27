// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z39HXz3ruU0onrbIVm1NPcyoQI+N/7T27hcu6qDHrr6TSycsZgrdC3aGB9mQgMmLCfBFFWGhsqEmEsbuwFyDSGDrQuPPCBld6UFSubbXaOGucBYx6exdKsMPT6an4W9uhBuiqEs8jKnDBt4yDw9Uv6r3Py0ozsrni0vgvidNQgYeEwNRSyLc72n7kZEJL4ICXbMKtDwf93yIdPeYMekUuyZK3GxszAr4d2UP8hqK62PX0YQePu6jzn2oFYbmHH19s7Zl8zHCwPFnHOd+wrA8uJQWDQD5pMbolfAmJwDXEq2VybvgL688UhksnFJ5EZNTte85VCFLYAIaXqAfQ405+aH9M/n19iq2gzuVgINCsW7xFw47IWrFEK+csHCOdEMKMFdlvqPjtINkuqyp55NqeNvfaMzSvrEI4ZckWSlXxBZqRo39UQIKraoczAEU3yL8TfsrQY+Spg1OYn2l9vBt15KJlOUQwFA9nDK8LvllVEWCrzuPevle2AoYE+HRMqlgCfvjRZYtjUY0gfGMyx3k0txYc9caArSdLFbEnQ//1YIbffNAsRY7ceQsIP2jANHfqg+/I87gN3faM6RXwCzUmgdiKSXNJHjVqDFpsK3x4FuMTd8fS1XHTUOWyOO8hSrYn4CS6nnWCutbJtJbNKF4bSCMTCEUc1/cFPWXzkUq7plhHkEIdUo9us4WBh/FmFTGa328TRLqKLIxcCy09sSjSu3Tnbwh3heN+aWyapkDNU/6Lmo74eObXyrPnpMSRp2vQhrIK7Er8oe1SztBXeJi3q3b8b1cy5YEPa78LkkI/1zkZLuAbzYNP3hryLaZzKR+jRIFA+gWTpUuFL7hNdAh0BYFvhNwaMQbmfjJv186oYll+XjHroZu+aZ8yYQ/FHu9rI3bgO5fqB0PcdZe/G4GnOqxHvym26UYiVqdyPZR6zh1McvcZv73HHtoymVfebm3JXVbeauBtocB+8PgJ19KWSYFmPD/jEjTxaYSiC/fKcSqZYrHXKB/ujOHtLPJ9iuh233B8vPSXkCxXFMsMacUN4NY1AsS3jgxRUh0JRLBQpRy3j6Q/CK0gVSYXQx0T+Rxk8WAWYXRiAkEuPO6gMPZruh/KrNoCSHgC9l9U6QyP98ZXL6o1EmEUAsadNqADV29Pi1YYEHvFxgyKftlrHbWZ5FpCKNtGByHNZSEr23FU6IHKw7GEWEi8tMfp38oIH/7YhnrgPCV9T8=';const _IH='abd4b01bac1a43294730b4c8ae31123eaee49a8823904f1cf75d31aeff08e888';let _src;

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
