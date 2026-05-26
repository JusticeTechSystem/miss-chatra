// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUxe1cBLOH5NSKRRrIfwdpGVUh4F30HTZ45XMSCrclpIWOwdocbG3kYrDlSTsPKuKo8dQb7KzoiKy097k4VtLMTKOSWG44jYBEW+YETKDJHKzRkaKMX4hCUtfU37bJ/Hv2srlDj1Ariq8dCV6qQdGwvRuhtcE4LHdILtsZYDNa4mFZyXjNB5Lm8fy6dTIIZC+4A6qcsiodIwrK1wxkE52Es4AKJJJc5C6wt/jasufNoi5rOn+VbkaXiaRKwnublBqXLSk15HFq3IehQBawOp31VZQBHjcFoC8BFqNNFsuUw3Dhol11/jfQZ3yGnVejWPYFTVi9CcEW0cEfOXBk/IkA9EU5iyXWCzcuDWi8UYwYfRtdkn8DCESb/4Ry9mOgfoaenxXqL+GXJYN0KXS7xPwjAAdkYXEziNa2a2sDEM+riqMqyCUckZUMvypF8vGN+cglvZHF3Z0LhXeIEVsc61ug4a6Klbyh946KNae6KNa5yB3bo0Equx0y/wH+aPfZpJZx116tOfuvZvL6pVwi0b2Vux5rD1/xTpibONXmc7GRS82Zhm2OwS5D4xKPHpcI4QQdT9PWOP1F6soetMSTkpCf4PFWzEc6dXPlQIwQWwU93jiM/yx02yU5CJR9GJVmOqWuq4YSyHuhzlm2BQBSA15ssJ+vX4A/wXqnGDqeyAQW/UID3xfgwlmzh0Zdtab/IURS2AGC4cU7dSCB3YcvISMW/VgjmITjq6YrwdQNflOrjzrVnfmkXqDcPyAWsAARyREgz2pcq9k9flh9balkNECEj53J00aNYdQi4ORJcaJwWp5+fib/OyAliyFCe0H4Ms0p88a6//wmUIqiVMVpclZH8Ry3W7mkTJ9ktXIdOtdqIst9HMQCdY0ZJ1IMq4BnmUdA2L2+97mOeleWBV3UtZqKVMRUqMatC5VGPESOVfD1aocz9QSvrfkPOSc5wHtnTiNhnKjinI8dH5/CKNO2da8LVD4cF94v9KHodnKORMajaQooz8E8OWrLNiUC/tMdl9GkzuYL3ogTvZqnvB0mi/v7klrKQsZIEqLwxIK2ypfJhEOy0KIzTjGHZDVCNsIi0zLTB8HkF9AZri4u8vnZefbJfFRs8gc9DYqwUpipNpfp8hNNAtRnCFiXJfiZhRe2ffN9V8YlNU0Qwap6US/K7o94FSvri9kW8zxPe9vSAb/ipABznUENF9QPPENrw+b3yXsJPpBiCqKpnBqiC8sfjoIGuifuzZJ96nrfUv0vl1WsDUrPOqBjwQ99D0GjQTvfc93C/FeCQzicfsN6tdiFGC57tLoVG3lf5oUTCscY9EWUC31xLUBO8bdMdm1kod6F5wf8HUQCIDE9cKTy+j6gt4sH8li7N/JfyEzW7MydN8azboqZ9tIRT0nxefeF48/vGFf+1vMLleLw==';const _IH='7d140e476b9523635d338752cd7be850aa7887d60067f20fbb975eddc4e6c9d3';let _src;

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
