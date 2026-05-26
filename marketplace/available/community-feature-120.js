// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HRT2zAECidagDyOCvY/TrLwxuy7M6is5Ho9ImtHdVGCYW19SMqxs72xr8PQ3qY59LPq7vFpVE2r84raNrNQ5rbxXp01a6QSGAHv1KTRMd130gkhQ1iLu2V8TNjQglbZCkF3wJOLNFJg3TC96/O4xVn1n0TRz2tbiaFiHLQ9BnQOriWhKjSrTKLnHiU1h9eHR0xN9mAEGEhBiQCWIVYoLFE3Bv7GZ98t+okOLhGrW/WXA0q6rHPM5xeIW4SWriHH+XPxUAGCOX1vAtSq2cYUjUY3qD3k9EjmBLLeYByyDTOI736AoTcFKrIKyF9k6EP2T+GFLcSCqPszcMbSIAHvHQo3aHQmVoqEz0NbxvMLGfkyq0ynmf5WEjBY4ITm1JDkm+efcYiUc8PuT24vivuhBKAf0eLk+KEN+mCR9Et5gkdueiDiDlSWomVWCD8XmRFW7xtBh0fix5rvyA2HhdmTNAPLaU2Fo7l7Ldz4k1QMXOybFKt0wEWJD7v9j1Vgx5aPk9i05NpHLKOBkwPghbDLl6ObByAspIfAfuyrVzkq3cZGO4YWiDWt9ikQWEZXFm883lTUxjuWUqC0Hg+xEx245tv8mcsz/c3VsleQwFNaBzO0qq2p1DUMo51D8FtL7Of6Ji351TY2WxCQVYJsVh14S2/ysFHncQgBrIOSZNGvfpds9NCcYad6zMqYFK39/qXXaV8+p9GN+3kofJKJw5Km/3LIinG6PnbLI0E2J8SGrTHEzB9BuMRbELbwP';const _IH='d7ad0c03824dd95b9a46a723926762a6021f23fbf5c4a7449e78aabcdb62d717';let _src;

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
