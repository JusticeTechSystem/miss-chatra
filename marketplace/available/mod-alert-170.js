// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZ2g6puf/a4WPBENXa8ewmnW9sKWWxWHPA/xcSstXqC2+1v40q1XNg6mT2L5ghKZdDZhigAgaP3O73+dR8eiEIjtL2ZcmhXgZmMqKsNIBW4eWE79p05oOcvdIdvi8dK6oaWum8kUANSg3D5zCWeGLEFA4S6uO45dRf2331mUavbsu62RhxnvjXYhfmKaJc8ynbK1ooeYqkfLZpm5JXBla+wzLGhbVaV1GJ2xOrkJ+HN8PLxys5KPHOSBjJCoX0zRdDf5fii48Nsfo40J839d3BID3eDdqWHNaVlneJr+2XUr4xLGVHGqNbkT2+O7eMNEN9XlapPCeECf89Ni+bPOzSLYburLDQlUAUXdfRt0FMlNRuUDMU44DT2blxVPm+ooiOKLbeeu3skqHDu/xCgeErLd9cOeQI3+ISNSuvg4vEOG+wgtJO+TB5atZ6xH99VqxdAlYrilm0X7d8hEVT+XnNXoWSXmFN8xvCcjCc7hh0p33kG6Jauw7VNcBK0gwhqwE3KOT/fFvNsh2L3f0TzwQwzWJGufdODEUbryHhL49fp8KK1Zmi2PlcJpTDwy4dInlhzmMpF70Iaa0EEe68rx5Gu4rlypCpqUxmmjwaYoMt0W7aMzew/TT/9OKMKcA3BuvN5eCSQi+B0zPHjSleW7+1//YP2+tdI4obX/ZX2Q+ortVbrZeO3bS6gBqdsS4Wim4a9fyGpVQ0UUWlFXEPmXQUsZza85H3RdTjnl88RXsHuktk98OYQeyoZBw82VCH5BU1vLpa0gONwaLUowT1eGgnCVQ0T3vHlcXQGVMB80eCLtYWVyKF2rDDA6BzZlmev+cnDp+92RkKPtj10KrlAF5SSu3oZGUNkjBxTkvGwd1ZSkG10CutwsmtRoPGbmeMnvYySBpvblVqm0n+T1yiZ/tWWxNAIPu9PJAeaxCb4ZYBfJBN2FaEk7J0f5UFQ8a6Cvq6kF7oL78Gdqsu6Gxr4+5Eh3oQxTV6EoM/9XhbAElrKjvCFXY/fwjvsIMQM5HQH73kYW/Xvs4EsnsSgjfu5g4D5YaxWWCDooyHvfGYrx2Jfp8qo1P80FhyUPywfl0IbEe+yoOeYH5JdOtz6hDlYmgnkFSNHjN4Y2awwdXYrDSZTimhA1aLkea2uz+uj3DBsPt+sPPvci/9tqnwLBD6RtF8L/Mb3yJgD213CXZyuUFsATaX+MVYPF+8AwS88w9hGPSGhFXVVMjnGk7uC8OTTDtALVkN69jrOKjDMKcZjxHC1bUfwnP4TFZzN4lpE31kIkF8j89RV4buAKTl/5I7S+c7y8a5i4SNDV0R4NTtFd0w/j1eAG7YAUREaN9ewiO+t2I3Wqy3ZPeXqj4j/B7CuaAQos6IZMLxd3nhASBfu6k=';const _IH='6451e32a98b6ef0ff8fc979214dff5699484fcc96b27cd3f9cba968da356a05f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
