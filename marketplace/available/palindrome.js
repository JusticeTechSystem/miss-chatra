// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZCWvcR0+e0K3zssUtlERT1FwCbXYGMn942aOk6bEEgs54ubwtNsrPsLpp2iTTBCRQgnlTo1v7rS2rmzRy5XRNZRMr/7X/LMrV1LnWX4Z5tWdem55nOF70VEYP2MqSGKMW8AibrqGpVJmQVsyA0zR14G94YaReDF4WQSx5KLe6/nmG1xLKmZQ3OEmBTB1fTAeYCMSBh265bvono+vHGFMGl9WEepdM6xqQh54m36LqXEd9dA1CnJ0KbAsN+VSOVrHuC4Eqho8TsuCnu47cUxt7oe16b1DemXLYv3y3WjRBBJ4Zkwa6hcCo7yw2mHv4iXyrGEB5Tf+DLLu0GMknjnxTvuN0BQXo3eN9PIPvbpvmNl4wn83L1A1Fn1Aa4fmx80WB+E2C77SZ7bGrdRxwgR6bCKs0wC0Z37K0sxM3FtmIMBPBfNlvgWdGSPs7rWSm+B1IdSOJ2uRqC1T443Igis2DWFZyOhE4Hx7Z5mLe5Xh9GAiWjxqXwyke5OVF202O8qSV/azwSpKz2S69CQu68ldttJF7yPv62Ekpl5eM6Yur+YU/d8mAP/vHhfsIhGVJEbgRwFoQX0badA6NYSrZrCJZnE5cHPaY8udHoWL7VMILBQP16DloWEE4ODMWqeTq1QSl+ARG0NlZeb/MKI/JIPQkQjglD/lnS4RUevXULqt+xIqr78od9NxOuuieKShVkLl1HiICGYWhUmOfloDOR+OcEifn2flssyfaGuiCyeaEIUft6KW4WZepp+lmbP8Z8x5TbyRjl9d/aVByUdccYrWvSWYdDOEQB/wNf/QiCyZtofnQjSkZqtpv/NWJjLMu/nVZr8Tb/kEOYHaTHdgQ660YId++qj1l2GcePMYfvpW5zgCIqPH3KP3Xn/qnm1gSemeWMlKYuSCm7A1zMZzDZaYGeAODhwA6iPd8orzvhwPBwX5k9LJb2Sn+PTG7RTTqF0Sw==';const _IH='ff283f8448537652abfe95b05bdb1714d28d437862337c88efe179b53331be37';let _src;

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
