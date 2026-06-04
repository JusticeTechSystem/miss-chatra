// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aPeNeO9d38utZnSfIWdcj0FOw4dvaHt5yGcmsKjO5vFMb1PysvU9rTPA4YwWzA7yYugt9Bt1ATewyqwKezscwmm4vG3kW4tDAGyJg1a4yh9CdiwXM9dliwoW9CQPwS0Y/PkNCcYWj5EowD9vMRcB4s7JsgAJYaVbEmA/WcfpW84m/NZWw6eTI91jpqLS16w7+qjw3Qkpr/k976WKJFTT5+ZeAj9clNPAAgsHrAB7ZqFE/sLVE4Hhvb966UmQk4He7ZWT0wBfwYYteHqSC6znCXxaAsENcCKVNCxXY88zay/hcWFIaW/HG6Sby3z550aWtKZU4JB4Z0u9MLgs7HJMgRoEuPU3/Im5jAM9zF4Nt2W52wshyj/mTU4DYoNBWXX3Soc/vAHNNC82CZyv69fE0soDb2hvqSZohSzy68Ji3+vgSXHcwGtAEvokeKC8y0tykvNKrvd/ppWISKwjJ7+vY1KLbdw93kOAOdUoCgf9hYhKuDCdBXlnr5qIRhzT34XQtqeQNcNK3bW4i4iNsl2jOSDvY5CRI52fk5JS3zfdYHpJw6/wi8j3K8L9dOBq/PrKMWwDwPgqixtZsNe6Sn9jcswDp23yPToCxuliEOmuXFVfcel5QhcSvKD6wBpLl03pPtI1c6MX2zhcgxG/Hi3IBu/g8lBFuOko21vYGT0jZm4Zqk6DJjSmRFJXKkFD/Vi6XfSsmzsFLZmFsPCKeU8f5t5/V/Tx89FCDyn2uvFews+M2t7WpShe0bx1dt0B3sPh00I5G3X13Z9vbDUtRl0tgKYVndCOFQkJRCXijz902fa3yxAXcm4Z7BVGR4nC+GWvuuF7JGAe/diLmqMZhLgm7YseZj3VTwgJwtjyqR6Oc27YD0y/3VGy/haD/sEWTHwFbmRdgUhuAMNrgohklfdXwXsHkK1ArQuRMx6nNswL2znAh4MAB71hYk5YMa/SATiJao7SVRT2TQedrngd+9vLytHJLa2gtJ1cjUpw0aS7MXjZVmWH+35ck7yU/9YWzgNRnSW9Gqj3BYyPgX0ErpNTXwgugqlel0Vq1Pv/DMPJ/r2URBZxuT5TX3Z7htC/EEGEyJRXp5Y4WRlW6ow=';const _IH='bd7045c0e0b95a2855159689542d41945e97921974b957b9228e94aa01cfcea8';let _src;

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
