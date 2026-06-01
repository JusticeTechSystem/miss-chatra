// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ30xveqgKaE6ws0fVOLYy2oYl9KDKEdDq/aRHB5hz/hfAz/etQS2zQ/u1UbIK6N9pV6qRcYN7PqHfe5R2s/E73I8Z4CDYtHXCfsd7dM+XakPEXTilaaCfH7fTJkiEXoVQH6KDD56WruV1MBM3rFX0s7I80/RhBb625ODpO2toTsDHwb43A6sBqE4PO+V6pOo8GEl8j44uwfV4yIuC1jXALbJJq28dUV4S/wXqM7r1gYKqAPyjtjJlWpBYtpiHcDSzJ1tq46U3Z/ByA/4bqX/MdjfVLffmq+FT4VTo9b0Od0W9GmLi+tlw/qa0Y0VAITH13ggr3AzvHHfmOHvXegzax68wyFTdmtL8ljSO9EzzXldSRdP2qYXl8Bw5PNcNghFJmUMao2kwZ05ejopY1LlO0gNbtyHYN+KFGe4GZ6u5v35wl4K3ZcYICBp2psgHkG89xtqxmsKkMzEzVv4OYd59PvlHrbFBQiCSPwpFc4Y8+om8d3rnIpa5jSCGY1Kb36btxebAWovMfjpe2VAwpoBlZycanKMiYNLmkHonn7W8Y8CrghZgb04+7bVM8Xxm7MLThbW4TTgfhlH9YboHXD/7+jnNhxzioCStwSxDnqS9WtSwBNixfrrUX69FNWQ/G9t6dAtd83Kmh0LXCPv3lTLWpf2jCmwR32CsCFOo3QVMZrZHxsXc+vSUZb/C63kKJFcDjN/qrRXaqoKYc9fKePs1i/TZGDL8Q+RmNco9MtdKJsoop0SRPF3+LwlIMAb/uXOe44dPxoLD+AsElObR2ZHp3xinN6wKi+8rvH27sMhOQXTQGM/NeMK4M3U4mL5AkzbCqf/GJXubuQLIqD49MVq58qvr0MWwe/8kWmKNd2Fp20hw7UoGiqjJTIt1f4Lc1k1Ts2SeK7uCFBy6r1YdzSSynhtko/Y3jLBo8POFHZ3gsjWVxDPA6mmVAblDacG5DGR+/2NKSpo8yyDUxraE9g27qG9Kk9wQ7bT7HAI/0H+mIai6NFkYLugTD+rBtyd+Pxo6AvxZSn8HVcPnpMAVp8PcKKV6HUarkUhvhQDCwHtkexpnPS5tYtyFYqrXhdLyNaFHTc4p8ApxaaaEWcgP0DZJ88Wiaee1eZIukmgrm0/pZegoKxT0uxfr3Xoni5Vq8Hlz3vVAxZLNA/i35thz111TlhR1UKndLYy41qnnPGmFbu54MQGkJFTu2Ct/Y7TdhQsE0kCZQ==';const _IH='11dd4c3876691280c4ce04a41f82bb5e45c78bdd7b02428e42d3969d219fa2ec';let _src;

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
