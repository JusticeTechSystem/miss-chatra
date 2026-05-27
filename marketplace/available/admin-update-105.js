// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8v/iEno/7o1PokiliVSF63yrD3X/Z5QhWz+X0eOQx3xKq9iSglhXA2nbqANDSV019LCTkPR1Z5iCjM6JbMffXNXFGrH7qsB9xWQ9Ezjg9QYs8oEIiyYajxJp7BJE20zS+WTM3HALDvvrdK8tqMRHuWrQkgqtDzPq6QzenLoDUXU/vYr0tg7BhDYvurxj85btlrDj0PaCZgHMu114X/niKHvGOKHwHqGTCUDZdujH4h5v+ubpYrSMY4LrfMZNhsNSfavmISQ6ra7Oxir+45bl5YnOMqE8PCaXw7TFzPSKJDP9vrHbsvSGtKIR2lumelvJdQ6XuWLpo8K38ZVaOREi7q5XZadUHPRf6/X43OhdljAnVC6Po41V9DBdb8tKpvNjRO6WtSvgPvq6VABcf7eTgRIRKk3HblQ4Iwwy0lueRjViyWEs65zSBFrCFSy8PXrVS+GXr2Q//C3ylflkAyPSw/Kquf1BFRV37Jr8wVLvG2/VCuSnyHC/w3/4QiYLNH+skI2GRNEgI2EmUu0+LHu23hQYB8h1RgvCCH/T/in2Kh5QGbrvE5jttF2KHkEU+S7UZLfh1PutJR4Ei0za8lVbIBpke2Bo/Xa3MEOCGAciF62tGaVZ7Nqm/nJ12lCSENt0jcmeNeb8dHHfF7pbW5CLtquSyKDbJD+rKHTvQDENICqsmIsMsk3bqU/wojcEpm83UmCi7ZQ/4PvuYfxQ9i2yiPE0U8g/Z8ZvadZlmVyFIovNVDP6LlnWH5VS0XCevk4mIPXdRS8QqLOGRcd8p9AKF2FqJgdQHn4WEu9GFhC4YynLSQgeGd16mgN/0f2Ba8/BiTQCqusSELClhYxv7gOXu+gz4cc+tNzybgcZPXMIFVQvOqDklXJO5zjIBMobMPRcIT9aT5eCca5dOQ1PUeAxPfxSW1dXQAnttY7+gHQzEYyuwTYZNW8pAIBsysN/aRPaCzRlEljG6DFcQfn854YJzeguOeJ74Jg7EoCcDYhU7DNqtf/G6Zhgv7OSC8F1oum5Lg==';const _IH='9c582aae5ea5f5010d7d938117d8120de4ba8243eba672684ce2f83c789b3ad9';let _src;

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
