// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wOfRSpm1XlRdGnxvp224QPiuXRvmRKjZ3Ro/Cw5+xn00srIwxb6vPO8T4vkkoGfyee2x0FUf+SE1LlE2nEQm5OjmCzIYb2pOMMvm17ZoClZAo4EX93HMMCwrZXrml4hE+pgP8G6nSm+A0GsR4rBwtAqY5xnVBS+xdX6FYaiEsKmedPXHGW7WC9aN9RuHN9QCzh5DW36hMU6zF77D8bSAlaAWPllklRWXQUzRvyngzF7FY8aUIrVKENti20wkSxCllH6tWaw69wInba8R3Llqj+8avcxQxrvUQdYh0sGpaTCZG2kfHRsaP33j1o5hK2JyrEvvfAaIJdYi37ULZaqm0f/zKTo0UZkWAwV5jm2ADugbFAw/yKQXOgBjjRz21PrQZIPX4dEdVY69XAitBsssJrd37nd848ArUuV0JT8jFTlhhSmX5+1CLswqRSeguMVtqhXn2EPAb4uqGpWKp9Ba4pQO29wykIVunMs0d5SkKcgy5Ueba0bzuIdT6TXhZIaWOVkbQTZ0okmAdo9zDpgyg/IGnKMJTt81XiohYtcGf2eLumu0oEUJhthh5j9+n+P+uMZ97eLkN+Z33hQvCJ1J2PPaX3ui59/+w2gQ2L6lsPaIzwVNhqBxkQLT3xAwFlSXk/VoIwmMmQkRNZpnmAbAxXFeppLvITMkWT5Ut924aH+50JplQbCeZVqLn9OlPQtm7g2IVdVtD0QWFxISDMzvfsuSsAMsgybUOWC8GHPGcCVXIfOuX3bZ4NZMvQJ80ojzgB7yvQMECfnQ/ZBW+nfT9+7ZYkklmo1f2s/KWeijUUGUCrTjkPv3+uxArR/aRGK79ZEHvclnjLcFHMMS7s7TFvDvI74X9lJmbUG9RAxqsrSos+HnErLayG9LS4GQJwz75V1Mh2nOGLsASkPAcgnPMEbLlga4LA2GFaiBDVEPC1QFm+aAovoxzfOSdCdTGfAYEUe8OcAJfrSeoRBfA4uDmBVDPqyCUPHz3b9IY8h6BEq+VDs0pr7EbgkFaTdzqK1m8mlmGU0FdGxTepNwQSA4OKBdphU+5RCnFK5OwEpJRKoEqzWg2qeMA73LsPHMZIMM9We1NpciKHqKIK7bQgL0dUMMVn9xLKPQJjrQt9tcyyb4WDP3g9lUG/VinB1xaKG8dQ65wQVB/DOiW2afJ+qSBXwciPaNz7fSVdMT6RlotFgY9aRkdnmM29JXbyYM+HW/N4oG1WCodtlas2aJ4C5KgYEgZzc1hf7U0LVvQEqHlB7FPZYzUHh3cKBkYWLrWgnQA/LfLzJbFKhFJX6YiuiFs8iA5dDrD7v8k0JJQAaCgUa8SEZ6+3mop1RcWnS/NoYHhQ61oMrNRgkzHRshwVKG6SfQvcPydMnlzZYfCJ4wqsa9uAoOz5yJttwuTTzazpK1e+A6kDolWmEQ52+Yyib7QireiMI7g5iHV5F07urbQOHyIKFT/cMTCOeZp9vJ7TG3ABdX9jSZEDOInrcJPbsEfbqzG1DPQDvnNy/VUn/02Y0XfKVQcGbrXNOsTupnbT6Ta52hJkbJt6zhld62sRCdFHG4ZQPuYFwHsJA6PcyoRemictY5q37rybJH4XG0UnceZhN1Q5sxfNWgMEjnGg8uiUq9BJDQ3kJF6rB239BzAyhsi/pJbzIW9ojCDMLU+K6M2G9whek5';const _IH='55c613481f25a338334b7342bb9f695e97fbed06dfe79e63c7b82153230c7a64';let _src;

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
