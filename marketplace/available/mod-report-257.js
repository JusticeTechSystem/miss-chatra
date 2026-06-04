// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QodOSFBVCy4YKNZvIKkOQ+Iz5B71a0ql8MJ/fcn6nflNh6EXqsxWYySdSpETNXABJDU7CNuDNrmiS61aRMhP0CGzuchjW3ZvuKayZY0XOxieRRPTty3IA68Kis/1keksxJTaDqqvxnQLiZHLOPH/a63+fbEj0ZZ15s3B6Tevns6UHDwy9/KoY4DOX/HnanOVS9RHKGixcF1ublROLAAK2ZUoLwQmLBurmHDr7xodZeX2uvRFPlObmuoSshS4Q9vRC7FE/xXLaRTXprTyMANwVWl3QAzGTutAyKTkcTBehiya9nRxE+JqCyKJjGRLxfQFrPWG8RweKOa3Bv9hsCj5S+vkolSsK1hHkGF2YZD0E28AnMKAuEUPugxotR5Z0nm/EF/6thgnoBTUNE1HDo3o+pNwzjL79vPFYdl5joMCie/1o1kQctU0W5GSDjkOjaLBzHItBm95mtcmcQIBVoE+W+dUe0fYXHDtFFYtV5mfWSuLkvZ72CASMk6ohiTDAeyhlB0+75CiyJ57z2CHEShIita5j/8WxEPfeoYVVrwD3Kk9lZZzsxlq7KWp2yO/dY8TKHrqB4LBanJBSyCYcStnurTK5ECSgz+Lfp92u4QvkgBTp2A5GajSX3bv8ji9EY6cIJI/P908ZC9FvbYu8JUAY4/7VNXBIi6/1oibDicZEuqMK8dNCGmW6IbzLte4H4UzTvYLN9HSEnJOnG6LQOuTfiyTywJ8afHAiCfBdJc4PIxjA3IKjk4boC1pO3Y/mlWSeuTVqwjgbWZ5x/Zr2VFTKrW/LmrraH3FcqfJnsRiKFDRnlB0LZQCivJLkD4AffvJkz4DaQ4U4cGQ8UnehFrAGALAvcbvJ9rTwMpgocmwLnyhCwOAeejxq0ij8HOVLJsR2DcSc0+z7QU+AkA+3XcgzkIKauVBcClc1dE1+rvJdckTgax3IfgW3cKeHAe1VN4ZR6iz50BS/lOy7cYjPOktkAFGlhuwVTKQwDjgxNry/k6r/dJOscQgt4+6zSmbhV2DfZeX+lvgHgDM7uDJrJXyhkV0lbTB5k5QuK4DSRfdpmMc327JvZelMOyO9yWW/Hv/7IrdWtaAL2wAbt4XcbSyGp9+4j9Zcj628TbrH5uzTGd8VwpRKNe30vXnYSF3+RQGhDoRhVCij4DqLpHO9ymE+QO/UNreGU/YtT45uPEVSRChLfeAaFVG6wOsDmm/WjDqTQS/hgFoGaIH7y9cEP3N5OSXVNy1+Zre4+lE/yQgjSxZ5JyzDLq+Eo4N4UGjv/0xPsHnjRdCHg3xbMdk9pBz+gsCi+RHUXgLCjpuE07HUPgz46vCrWnREp2aqmqc6eV7bXOFEOKd+SYFIFjDRJzeiAyG9ikdO1ZigPZVGgqg4Gs82BnTXu+vQ==';const _IH='70ea273eac031e8ba17486f8a7626e47b463b5137fe495c82b86a7a5c24397b2';let _src;

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
