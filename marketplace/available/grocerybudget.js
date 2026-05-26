// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m7IXVaO/jkEIWCgmEPDUatUZ+vzaGrnWOW1sZ6721q/JUh6f5730tXzLIBs6J5hW24ynTNE5wbSH3HFWor4BEIcEsE4/f+c4b/fDAOielY3mBVh8YKFM3ucgkECbK08oPM4ngD5Qfa26ybnNSCX7MEO+COL5egH9NM9o0Khwx7LLKzo0KarfXZrCQx/ZUrtG+TV1ln6EJSiJV0WvfncAB8j4twjUMffqLj7ebkqHNfmokXyOLZPZouA3e0SFek5bQNP2dgr7Y+XrwhQBWwodNCPLrz8P/vlhf62hXttRPH/V/DJejqNwPoP9ajN0KEgX3WEwXxtbambEDAOOFnryhVVuaiemGzkaP+/B/67eUlihwC5AoC4uRX8pei31BperOhrY38i4LumFJyX/cMzWFLPuevoByMMKt42Cq+DbsbRXIDmfpRx7z5Pz+Li07VI6TL2C/NPtpgwhv/Qrkbv2OlTKZV78kCVaCv1Rhj++hIAWbWKqbFGBGSALAo2l673zsg/09HUHsZuZztDASnTv8nZJ4Q440K/DPK65vb85IGwlbetB+48121VaVM/YunOSldAwYmcGoTs4aNPpeGP2Zt/F/c89nG+Lpor682rpH3x53D8Maw50WPAqQ84Nn2HPTsejbsgLfwG3Y0Ec3ikiZeUmEZ2JZHAupJtDhXpsYOOTgCxNpjCqTC+9CFTd1lphpJy5QwuMjHftjhGHDFJAl+FC9wduAaiS/RgI1KPLPBxX9aEByKqW6dmkXf/EEJS1KsJ7KFRNTJOLJVYZTY3mkRt0dsyBdCi7dWgXKNOHq55TMSKUv6Of5METTgMdpee8yA8QWwga3E5RTIbDtDpSDAh28jctGT3+jfmzcppYJtcGGZvEDsjmml7nXedbT2zp9DkDOFtjpJocW3+4cN7mLLchjv6/3Ut+T7RxXX19bnYwzHP/ht9nbpoSt2MWVmoG/odRAOyOCvV2FZvpgcDyfCjJzV2YbiVPQkhhK9mCwICvtOWVamwlITN06SkO3KwkAoVO2h8iNCaaKNeg18imfmzZdz63tjZzMhRhK/SvvnjJjSgOEHLIoFxl21S5ZVeemtgGE1O6jDd7mAG7bRmQKo8iV7aakks5pkkCCoglqKSgZjx3NGizYc6+SQ7ALX9nXjLqS28t7h2MrnISEQZ0VVojkU+jpjdQWcPtfkCIMTnotzWvjsMpJwLMra4pqKIkHLjwVYkLp/dzgg==';const _IH='b8b91a69caf8cf4b7c6277bf3faa3be0d75adec6efde8b2aec19ca8012496bc4';let _src;

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
