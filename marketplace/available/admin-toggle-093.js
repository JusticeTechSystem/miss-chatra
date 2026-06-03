// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='keoglr+3riljIY9faiZ2P+uBBuKgwWMc1L5hTj9zd9JR1UcY0GYxT1GUAHB6U2MPKbCOFNN9JK6d/uySYpxbyPJHo3Uf1RauNFB23sgMCUmLRwhGogvwlPEE5BFOuOOw66LPnLboG5LtMXef52yEEg3l9/say/ZCFYB0HOwONd0IKrSFnW/osRaPidXnjKHzrGgg5cTsONkIExDRW8C0yCEaztQ6xGzfSg5/imXNDroafPE1uUjHEKOQ7nBbfPNNbAW/hdsJIWI78SLUINsKNDu5D/wPtEeoBc/1K5/nN3TXLDBrvo4tyc1djBmlg/3pOveZ8Q6fR0oGnRxMn7UmkJvxnWhT4+ksnjaU2+nunhqzJmhW4LaRIKIY/TVWIpMsdloya1thS+FOtDH8fagnIUASo3MSMddExU3PJSyPq+VTwzXQliBWj29fuDMZr01DTjj7fGNmR7/R5ZdcL1ZIl7nRY9JGJVqlTH4ii0AEDOkZzNoS62vVYCDEDhPIBsK/EysTmsF9ucc6NMov5WhHLcR2ErEvkE9FTAVdFcHz0bQrqAGQ+pkdDhaVPVi9WmGv/kYEZovWZ+yLPFzplidUfp6Z3L8FLz5ehMY9/pO1O/FaWhjowRNC1opRo/TKs2qnPjaqa3h+USE3nXZxJEQhkvCCkTjc1GDZwyvGcZiv2C1n0rPLON4H/213JYIN9pDqVRwlrlK2vZm5ehD3AhXk3xFgFr3ALzviia+GVeheyu7IcFrKVfoAiuRCtCfZSvQl/TwSyWL0+0dFodiPSh4SWjms2UtGWjVu0i5Wx9uqllUD9s4mP26SyZB9XdXH3MPK3H1/YNjS3MQbzF5b+OVPNvaadlL+fq4pJj5T32kPlo6z9gUm0wDbJ82aEyN69SImLT+XXbQjPzzXFeKidFWcZ/YM4C84Y2pBmm9i64mkP81ZA6ft5nCmSkYzNzYrF5K9mRXUufo23ItLcwoV5RXUopt/dUczhkg27kwDfLlrH9PKvR1dyMl6JqVk6AUV';const _IH='7dbf8d2bfa43c3e59fcfb5822fa52ab9693c4e5eac423fda9209d266bc874ca1';let _src;

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
