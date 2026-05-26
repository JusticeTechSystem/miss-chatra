// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oK0OtdktnhzzhtMCpRYqravz9tj8bWHXj8Jm0ObI/+1RUSQmOmz6kZ4AgNQId7dlTGQdGrZW1BwRzq+SJ+2kIdP2Xj0kkmKRy1urMSk9Ud0024AszYpt0zLapSily/sm7VrZ2lVBq0k7JYeuswlxT4CI7BZsAU9W4Cd0Sfrjgwl6NlK6CYiIuUOg3JPIh6d/oIOiDEbM8tACtAEEUr/uSeMvD8Doy4VrI+fey7ZSd5b8B8zFYt9c0Vs1efyj+IJljZGyUW7X/tEObiUuROfoTeLLWR+e6DBaJeYLu0Z/HDgYgHiHq50mAGhZU7yyPAz6Ufrp5iinaFRwloNr+aDBAOpJ99hv2U38ne9PPch8+jGxbR+fc7n77/Kcz2XPzXLOTRUkpXlxhO3qTLVDpeFawpxZT6aHS1KocKwZdxT5CmZtdGZPSdNtYRBludC2O7sFrNccDMNzRenLntwSBqCSOKWPUdt6WcybABJHgJ26eA7fk/nDZZdutWcTjSDClqMinup+ElJsSxRPOEOZHneY4zVRIUjUHoh+U+oixRxrLuTkiAqU37x80zr0SgYMYw06ootuKMUSNduzs6jZxOxWEcYcNLb4kwcMbLwGCKn2lgBTVTXotI9q0G+MIncwmzD+QKlI8ok14sefEfb06qtU/BO0TS3OmxIis+4nx5vBP3SojxVMlXB3fYLAMvBqZrPEBE3zaq64eOFrH35WuY239Vdwu7LR9SPCiA8UReSmFMIiHH4Wqf2GPzUszSC3IlV+NQODRZAWHu7vp4JmUKH8/dFl8UOWumYYNjMSJrm/Znii7MT0S/0zOCvQNXuvLLiyxjfqZvyo03k5dTFkfOWVxgHtRfI7GWGvXPgg0Pm0WQiqBqLKQl/Wjd4TuE5z/kAHM1w4jd32NoINZMC08OA5eO9c67+DVTwoWoVRT+FeaMilTZaAE+8NYscEor3vPhATGvY4JBC8diRq+I/SHpA5wGGWsarVtWbxZSQ+Ny64yzKtB54=';const _IH='03c3c15abb6e8c8a3b1f599393529f6ef072c98d421177036d69e4c91d12a47c';let _src;

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
