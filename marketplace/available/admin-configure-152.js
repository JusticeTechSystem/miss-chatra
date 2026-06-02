// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0nu+hWo8qnrMyemVnuQhfKDjkZkl1i4c/RLWRKszrqJ4cKPM8pt8mB4ny5vgtbUhzZVw0oaoo/RHv28RexKdAbLO2mGz8J/Wk976H7TeZscxqHt1/OiDhqis9m6a0vOAxf+8T3Y+0CfP/AhYXjCuvgVV7+3NJI4pxhPgmxHexUKesjgH3g9YcLPC2FkbgF/Vwo1gC0gxO5/8cbW4QCDORtleyEoPSH6aysCn+eKjsC5OGo+DaNvsTkQ31GYsg2vCg+R3lNUsJilyI+1k/WcShUXddq10DJzVD5QtRy0OfRNQ/+RRZ2ToET/o+NqUZetAJWDCTBdcz8/7aWgLpR2l3v4IcQS0T+ViZSYaT3vSpkqR449J9xAkkB2fDO94J7wQ7mzrVZST/0CQnAcRLZIzVQ9AUrR+CPjQt8fimwpdklXziI3YxVT27ZlQEKCYGUD4XbV6EXJ7XwFzHkNfuIxoIsMHsErDjwBa7tJXjIeILQfs22TO4BUTxy9rBiJWchj0M/ULl7UwX5zIELN8AVTIXkbwjgbN2I70YPdhIQLD9i+PtZPj2kjg/q8V1xs2FxFgGWjSEL+UlNFLjT04nyzE8jjQtIDTTnji8Ski92hRCaePpx2VYz7O7mBx9QYIjnvQdBhA8as0RFyw8n6fEjFEPevLh6eoXRF7KT6ckjwtth6Ep4VKCFXIqyVGrQcpmGdaBkPd3F/ukm3vqRbkV640Fd1ReY5p7EDbzlY8+mWEEYzv78pTUOFjqFzzYNFdcVMmuxBCQ56vRnBIRtTgJ3A51RGkursx/TpijvkkCjq99eOz5qgsE/iXOUu/wIW175tHwUioC4DrtQvRX28LJ9kjV9Mzh931yGLRWUc+xD6bn3w85cZrhHltM8OVcTgxUwe2mngX2OWLTM0gF/nGPIHX5dfGGaW5D6k7XwgG/H0gi94nsmO9dEsgFJ2uXjhIHhfOvUga4/ieUABUzaqinOmt9AocMYPWLoBt5Q6qr/VRE1IkV4vOdEHXppiOBVKVVG/40zz/li+a5yN+nxll8C9vtFcnLSX7ZA==';const _IH='f9e188f465f8f308522b6629e5f362a410bfbf2f8f3cd3d483866a74a607ca7e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
