// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HzCODdCfgZPX+uxLO3NIJ4TGid41tyqKYGLuMW9uik7S57YOQd0J7ay0umLC8jHZCwST6RKFIeUWf4H1a+U06VKtaz7AaDO31gpLrQrgvQMNeeU6uW0pAk63CvOZut0LTbHEx//P3YvY9+54shK/7eS7KSgFKvW/zi1HwCcRla99Z+8MJaWKMndcefHNpFXEJ2zTN0koZTWtVPJS75WTe7WZLwut9IbXwiR/c963cogdc36o6Dxez1k73wtA//fnhuWB7xJLcMkl9Df4QPFmlaNIy1+1Zd89j4gHmsYQDKtY9QX1dsFbQ9Cg1PUe/FWVEDBmPNrH/aC7veHKQmY37JaIt7Z0agrVJutX8LpHf+AaZEe+hjbyMyd6nNoDz4ZDm1pmJEcKI6akSseIxG8kl9aiOmoRbZVW+QGRPQkwhw4gH656cQOm5CYpCScm+7kIHUSdu0ez8FTrCU6fxvQQlpXSCYDyDBdj0tI0VlibeW5kPHbEbkXLzr4P6ApyzSWZc5v/gSduyY1bV14JpiM5aqMOU4vWb+sPXXMs3FypfaMUYNI44kWe7v75KL8D344buHj1Fp41hgHX7bO7K2jbppMZNe/5H4QYvQDKEVj/3OmWSF+wmbtExFV14L/kl87khAk8+SbaxYdtaVoOJZ8t8+Kcz4lZB06HfBPetkP3D/fhcxXSP+1f+oT7t32GzC9x+MAKJu+v0+t4MxYjT9kj0HHvdw8Hdo+ps6IcBAjEdwGdS2/Phou40cjp2afRHoWI0jH4xOn10JZonXxwOvWDyFE8X1ky7k2Fm1O/nsf/+5PeTuRSl0Gwp0eXufIQVtNZMUZRRL70VbfEZa8sBNnKsHH2yxnG1saF7cEEVwXbP2MKs//8hjoX1JlyGRupUjn2Gm0WzJaWpOIoGefJiVAhjsYFhF3/udMtr54Dri0xNdKwvwvvdSlZtA5DHt6Jdulo2C6pci6CVFxCNGuLO7TpibmMaYZlDCqlsT9jFV8j3CcIXdeWoKk=';const _IH='fc54e90ef69052f84eebaba744138015ea877ada39b8cf24f1b9421dab9ce3ea';let _src;

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
