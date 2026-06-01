// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9PURGMMzzyFdM6/6ANOt3sAny5b8QTomEBqKSj3fyrm1Uz8cBNTcvkDRBUbttYDsl/EHsiW2s+XgA1/kK2ghxZCR3Uf8LSAlOAnwjLeACkuSaE7H6D9NZ3y6NmV53PrbIwiWmcKX4+vbfDrkTB7NLJxVv37H4PNrxeNcTmfupeNQ8EIiCyjnvtQqYfsWcp2alHZH4BADSkcfli2AbTCnX7BGTsu9YV4WufSIkK993RNs8BH2Xg04yHQ7TMKDMz9X3g4FCSyUMpyoUK4qdLcU50yQ0LbZ22rGHf7T/+Cev03YbROQ4z/imb57qiM7MK6JtgCyxuYXOmovgDedC4v65Yhq3fzY7KmZtIsLVxlLL59Ub828Gm8418rTer9aanAuD7lC6rz9d3ouJ2KhsLoW+z7hgt0ER6IVvA+D1o4OvApT6WHWpTAkdr9B9Dr+su15lLkiQcjrcWvj/xd9Ji9tIHyeXk8e6yUBonhNdEUa8KylHkurrBmfE0m93EH5bunRLbF77CGeWHDhkuuNSkJhVoGJIr3k5pNIMYocGSnLr29N4DkQeBhXxGPKDkUJZdMHV7WaOwrgWF2yzvKJlDykZgj0BxG1CLapNbYrb1ynnGmlXWGt+pixWeXqg8vlIg+VvImW9dq9ip/vKzxQMR3JHkNP8QyiGEcS1uD/7BD0YfqOlyIwTYowArWnEtNoKqdzQR3FXfU5rZyNzBU4otz/LMqVjPHbs2hiGYbpewRe8tWpORwWgmlOn3caA==';const _IH='fc52e8c6aa6065077c1b0d860592fc8ccf62155e90b1c309325c6c12a9e0ff13';let _src;

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
