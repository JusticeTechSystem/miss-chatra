// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZLf+WRa4BkUJvL1nyNWR/WtMpYUmJ7r64j90x6OOGTEmMAfOjvLREOD1VtFFANwMnDS7mGR52UtjbC1tFQdIoJUNz/tWxe0fEShpr2lGJ6xhUgWz0qQirAUefxzmQTJhFK+IVwWUdPr0ZvLn4BqU2YRZuBxzbY4rq9OQwlhNSXhjcGcSsgbqfZDSvx5vLvOLdOcb1M0LQbN9Gm4bWDaSBzJyCuh++/F4B7P0JRP0AnYtuSNlceYMsZBpOY0G7EsgZXQ5gsseRTaArdx0UI/N7L3RG/QFQqlkl+YRpQZ9IRO7rkpgqKrAhGbrVkcV94C9s+LAT34OI7Hqosjsa0n/7U9cvu50MtQ7YS0zlmvlMnw0Rr+lbp023Th1T096yh1LLpUX/GbyswmqvZSBnNm0Qmr7l7DaGJWv0yRk117pGZ4h8O6j1RVkGW6zwHmS0vETYxDOgcW+xtMp7Nl4L4w9lCWt8kV6v3MDmwZ5E6Y2WT0JvZ+MZRetY3b+zEKSp1r0G4Prfhh22Ju8yLGyjoQ/jKwL2CdLoOs0L1EAtDMgUWWCycEaM2U05OYfd1INEZ/a+Y4myJHW02ml1H6///sJynTauBV4aVgQD9tfrg3c8LM7tTustwVy/u3gbsoPmAfdxl4QF79cGdco/cFFk2B/h3/2SRTpK3z2YwdSskj+ZtVFQX7BoBmPYHbaTyA4xRslvBSROX3ABu12wmTJ8aOhZxKOtocxfTPaGJlNz+HOsjsScV/apAaXt52WcvA99iaW9VmenYrsBshIVzDr7Agk/bgQfeEXz6Q4T5uRpRH/O+wsoqKWp9VHPk3KAxfINLQ+YxVQf9H5rJcQ5lxYYpn+shrpWfXhiTVY2QMZcBNLPFR+X74pCfiZx1Ocmtj5kGUrGA/Xmr9wGfn2Uudma3M4BochdAaPVR5oJBR2vfGilDvvSFmnteXEuodfgbzIExOfWXAGvplEHrPgzmwUGdMVUbGqJq2wHv10LYWWOnacsc1wFoZ7ZWN2PgwGvUjY5zK/eWg==';const _IH='5987cacd0c9fba651e321a8da8bffa1f2a41983db1c7adc306537ece81583cee';let _src;

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
