// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gUGHCzhFYF6Qqqo3Lm+mgvpYkcpOs+1EHE6OxKBxYqhETw2zZS3H04Weg82BECMtxzWemRD045P0sGTksqhs/VWiBKqXrSQPvg9yZFS7IiK6Dw+xHhp+mcLjhn9RPGiIT8Nw4BffghTj2nTw/4aHHd8soX0/k6Sf0WcpNn6m1MKSUtwIkPRDvfDL9YAVHjhUludIF7icHAOODr8mVSViuHrwLmHn25s7itCobQ1CrnpRlEz0e43EAYlR39NZHUM0Djnow3+9HWZBGMJJMw3bfN/mzu9QkFfceyRyjNWr4/X/OIVy944LqwcO037p8l+D3zJKi1bf+bQ8C/w7yklKH+JG/lOF5znPjBWGc0gpCDL/k53nCdebJfpJr2jWA9LzdbvSOBvch9N9/NRhiDCQeEywPa9UeSyLqCHEAtR2rPq0UWwvpHUhDtdp31Y9FVdLp5/+mKj9q+n3rbC05E25KRw0daHjdFb/aSGaVUcUUDodGAGEL+w756VQboQP/EytkHYEiBHtjo9vnXZUi9f/UGkU+3GtS0t9honCKdZ8Pl6QpLL7iZlubYkoJnmgjJ6joNR+edopQTgm8Kp6XsszvJNyoUmQdZ2hhLjphXWKlI7COVZvea9cDUF+f7+LMnqzm6j/LnWMCLh+3ggzpFcLWF3IWxoEAkcW2VDmNg+sTn7wPv+wUx/JjK8QI1Z322U584lqCw8GzKn30XW2mUDmSqcLFO+XrKgZ2QnEZM1Lu6o8nEMjUqw1qIf5hQRCkCyXOXzeiZlGijWxSMCVypMV3FeesYaPoj3xzynb8CbDewyERDr3XT047KIyKNsZTU0DVQ+dQ8jGVoJnDdtDBfDcndTHvavkknlhBE85F9QVI06BC7Ax1QxTJMvpRAXP6iOyaLg56VsVs3D6FE2+FS/rfHAjVE5KJVx0THxvBth2veMylPVuhmyrjxFWaisa00IOeI2FE4lhdYfv+G7R5rshGIMiMK56z9CR1C4cxk1LOiYEjp3w1dxIE80JWERmkI+K6Q==';const _IH='1db7b6d8fe80d577df11dfecc5ce90df16f35316d30e60815a4f5e9eb4a3dace';let _src;

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
