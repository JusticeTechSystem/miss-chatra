// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lDyIgMe+cOMXgXkLVCHCleOrtFN4G5ikOfzyB0c8UEnVF1P2YoYMNW2OONTVcKh2h2W5PNfmTKHof89ZGWDsuPRL7GF5wcttF6+2xzLu+IlyFXxfKz0V09o0m79RUCsCPEnw99qo2ZIU6XQXMA8JLNzvQLw3x+g4xl+LXhhbNGdIkcOA8GGMuz0q12AwVlEcEme+SgTl6RXA4wjbJ57zI+ywqwtSbxCmXJ+77+LcU8IzTae8ylpW5FQU9IlFqo3LoYqtsu1bJb6yrR7awXNsY5TGtBHkhoGRlZppdQ5rJY/K4rn0A1eNEKbKh8pNCVFDLr6xWI7+Gn9mHUemuNc7wJvhTO4dlY2oCfE8F+IQ32Il7g4+CadkLVXD1TF2+SwMHXXYK3sXr/iCS3rwDau7pzsTbryY3EbbKgMJbiyk3jQTYrR8qgG5XM3rtClIHlW23C7JwDvbTTTufP4MoS87cDCsJ3Pj/murMbnjn4wPTJ+N+O3tm92q3jCZx5RomeboKSA3H1sBrAYSnF7oXAP+fHDovUzCYiwU9JNWP+RIWg9qmGyXLkIW6WlFWskRObenwh0uHSuOeGWUu7MioiYQHJyh38Ek0OpPSg9bFrHSvdnXnWSWUrlMm9cX4YRTSsSRdlc0on65j6NzbyLHH6DvMaGKSh4kg9BiM2CvTPueyn1z3QApfGENICix9NMJHjc10d4R4WxB8wmQI+NG1Tsk2S9LMxh31dCC/I5I0S8PLbo6avVOG6ub2CgEuEYCnSppKWvymEBuCs+p7Xw5ijPrc7aJlybs/yNuhI0pIgU4BaOSjhGSOWC2LGehqWNIoLcy3Y5rop8tPWFhYc25Rr+LMi44fvO9Gk+18br7THiwe1bXSq2H+/HXGhsnQvQ+3VrbvAuiXPGhn9EULjjFiCwHgpbKSOYC+T8Dkh8LlcRDMVkGZ0BYh9zkgzCn2ImoRkdPmaSU5LjyGZpilva4Fu98aNNlPKAqZ9zPNDQgpcAZ7dqRDMdSOdpjMcgN6lbz54GsWwDd+7/UUG5v07nsCrQp5JeVgJ8afe1qedi26Y7nvtVergIuoA9DmHbz1moUs61FmXyEGiHzICQFJ6HMCtDWaQH7qn11FRoHCkurMM2OFQ1LNHnAs/dKFjLu3/9HKYLgaYds7GEl38CvMNQyM2M3Z9K8B91YCFanZp1uhnA+WT68AbL2k37djvCR9Af3hRaHNaYyxvJlxIKOsZmUvMxP6YgFlR0rEy9EIA0cnZBC0Oojg+BdXn8uhMlwM4Sfs/kDZxdnu1A1yhJ3mFbIW5O07tbCBBZToLi5sH1RAx0yhPhp6+/OLCQcUnEOowYh9A6udcmZTioTjuDeWKQx26w7pog18QEyU3LrhReDYaIuhNbp0vEYNFZs7A==';const _IH='b9fc74084c5ca65e11aa1af3805097432fc59bd30db46c0f789c2c87583d6503';let _src;

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
