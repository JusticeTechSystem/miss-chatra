// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83PWGBocLuejR1e+o5KU5S6+plpy550EjDa75a51u5W5GUxsFrqcGtZ47DSNhUC1koh+x9bG+OerU5QIr0oABowNoHYCf109/S47HLjh7l3+Dl3RoV2XimunfYXf1E3IhNeSld3DsYUaxgkvRVr2GYR0hUKL9ZidNpwnP93yfHu+Cwc1bXetWCizjWcAu9S2Z4ErTWabMbE56kuqugEgww1//lXZT2x9vLNng/uZOQ+wPTNzZQcPaCwEWzGfItgs69Yxyt/3u43GtjhMNEWIMhMWAyMqgxjV55a6qRkyU5RpZDgpE4GUw9h6MkvdJ5vNK9t74RQydIMdK/rtVV5Au6DAo6kL8K1m370yvPlmejwhsAAvac7uPSKzNpg6BmYYwKnWSfF9/To4T37E9k5ikmuksEj9OTaSKTwp8IhUU5xB2cc2MfMQwuvJkxDDsLW3cotZLPus6hqNDRm68ATHRKfpYQTMFB4uIyrcGNcIztPuUfJddW/6s7fK0Zbnt4hi5rWKvUm/X0+mOiNQDhwDlZza7BEtid1w1jFPuB/KhkjVAt+susWytCbNYBvYeLbCO+3nH3Q21A6gAuT+HWH8I0XsXbtOMFIpj5dlBUtoIZYlmOco+AABIggmctHt8TPBjPh2YyX7s787j3/4qIEk2FllMP5YKKdx9gI+skzhJ1bsjxWo/6bHtRxqHqFYyjKBevB8qswt8/0fIL7B0nzzPsSksVeZzDLQLb9QQzuos1UlHC4=';const _IH='e8f4a2d15d9e59d2abaa4d3f41920b10af5e7d61cb0782de627967ef8166a488';let _src;

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
