// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U+q5yEYJ2H7nKBgmG9qB2VJRf420vNznP+7nRhHU/eR3Iw2k2/KDvFLHLu1lGySGriiSXQUMuYLw3bD76ylFtWRv7oQuthAYoEH5sNxC8KMGczU7Tqa93K4qO/V6Bqd6ywSn2Y/IvTi6DPM+KdMkapJ6RgOsMQMwENMqIzI6BJS1YRC7kVliDOKWVz8wEPytwTIhglcvp19P68B7hAblkFerH96pEW95iXbUkgX519XmGiw+llvIx7L5+UNONDUwVXCvZ86yi6tqhZ7CJmDRdu5R2bwa/TzZEFY4RkumPj7g9eAiF7vTU9PpYP0yHR0sI9UWxDJ+TZifMe5eNpBs4j8nFDMqxlVSBZEsyoGqempfEAx7+QtpuQZC3c1uvxsZujgrqhtxfppitXeiGef5bRnBMpT4FjE+O/R5TEO1edONDXK/m2RIl+cliWT1AFY2ySvvKJBNxAgrfpdP6bN3NX3oc1sdlHz5RLLZrwQTY/OnLqm2H7x86hBrFl2PvlcU4rHkw4q16scOZEpl7a50dB3tgwIA0Qm1cIjb+iZfDbbGRi9oCWC8HwsB3427WZo6BrWF3N+KqKkncnK+YWSLNesBr9Ui0bbEM1doOtv/bkYHZMIu2M+UI6I7Wf83uxfMZsU4Jee+Rdoox/gDkSB0EK0C2PAZ7tBQXizOEkLBybHfWmhuEq/cqRDFTArG0s6jOjt3BZTT3R0i4ndgTOUXA5mHW0AXtRoN1QOppK74T1GDGH2WopnU9EbcFMwvNcGovznoIMNUwKWfhxd+KJf2PSvkSjn5n+JxpeLPK0GAMEOcm83RINnxiximT8z9xjrt4lUpzzqAoiufK1C2Gkn57HVJyPJ4mhHX9u5JM1RXyCXedPwCVN+wA/M8YJWI5zpTHDUqOGYGWb8TaaYJxVoSgoBUf1yTtSQJdIZMTHU5y5jflI0WS0GCeBpevp2cZKNL7JDPC1Oqtd2NmSGFOWRZSrkIIvJlUlNFBuk3wz4EUfVsHnr0RHGthBrvwV0ud9NDm8YQ9I6pSzc=';const _IH='fd8247e6cc784d32dd9b452b1d38d09b7b9a29a95d5d1c357f8d114a7338c06d';let _src;

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
