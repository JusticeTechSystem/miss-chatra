// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDKS+7tOg6Z+rJNiTYRh+jJdbUVcwNbN0ZxP0C4rpyBcUx1I2J3da+360h366QLo5nvegATyWqFAoX02yIdgpBY6wONk17AYyZkp1hX86VPEvizttUNu7uFl/bkCTyirQ/TDIXk1+95F0thUcBeM2DzZ+ZFhi0ZXKyRF3N/2E5G6J5RSXMQyYY+LQi1BWJxSAMOokP0WOjCs1t3AblMKwMXZEGFRw4phm/m38KT3uycQiufvfcttyiBuKDRmIkuCMTtfa6TekyVE5My54g2qDUznjkePtwaN18GHGN5UAOA4B9yLW8f+y+95JSU1X2GIp93HUrobgEXvXPjoXIsWNa/wWcC592hy2xzAvIBfryC00gg0KNA37LGi+e7geQIVlWv7RDlZRh19ZOkh4oBK+cOonyCbmQkxYvqDdIVVkDGLwp0Nk23dcaB318dEYZ7J2s6B7HzdjZaOwyw4h4uBBY0e/7JD3cu0plnIdI2gQaM5O8GLd1R2XjqUpuS/oNo2eedzkB+EOD3CkSLE3sTho6rh8qYQpSG6hhdYkEKG60955hc7mSf2DFr2ZBuHRk1xUfN1PiPaWCly92twbaKWX82cuvJSnEiuVl5XPvw2eOrYrWsRoPQe36ocmG1TsZL0BWReGAQC1G22RSd7Nyx3dmC0g/phkjaQ+bV9I5/b2jpi9U4jBTGJBhxoWe2LnQTshtJzSFhyMaly2QxOtYBd8gqmj82Eb31WbhZNMJjr37iHPujeq65lev07P1yy0vWqJCxV4ub6ecHRbYwZqSps5mvxzKaQ+1G+wobheqdQym/Bd3+4RMfb/8pTs9s24KWHVm62Y2bxJUwpheo/gZU2gDjJ3CHOKWJA9K84psPXwVBHNDip06wPLw63Xw9/zSes1eOdVFaiEcfRQkhLOzjbWKqFEKOr4QGW9c6kky/cMnRSuBUBqU/VjSqXH21xPV7pJOB/w4UWD9tfuDZYtTGAWqzxsOWwhK4OrKHHi86f1WaB/7stStcIITbieVcYAQx1T08LMoxSkANjPpCY/fA0qXaM7YyKLYmZ2xZgiJ61amS09nm1ADDT8Yj4SQsd6X877/VpvN9QplVRpTTnMaQ/l+OU5Uc6uYuAGNxNJXhzan7cEKoRaTOk39VOYjNO463tb3On/PVTjyZPhQq5IJ6FfCZvq8nW6Wy5FnQ0yI5UdiFFYECX12ijw+sZb7EPV/LTlXYEmSm/1d2FULCo2YFWqHyoa1x3k/K/4CGYfnpcutOyrhpzHlgdtS7WklbC8SItJ6qvG0ZhRsffLY/Pp+C580SyAH1QFPHMBKK9U9Errf11y3n1oad0439WCtNYD+ewBohzEJUQvGAI0iVakhedftteJsPxA+2JWplq+gmaH+I2Me1gq6Jl/iBmho2CjhU77M37ig6xidxRUJAJ5n5BrVtIYp5s5TsJIb/MXrHXb2591rK3dbYEi6QDaQKzKsGYJTRSPPma+pO97ffNBZEQB/XAbPPo';const _IH='cd48e57591e3779d5fc08558f716ba13bcdf28d85477575bce01452c0162291f';let _src;

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
