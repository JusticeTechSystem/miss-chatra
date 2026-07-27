// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNgpqkX8aTX6rsE1Hlu1tjVoS1BoPApy1TxvLAJBrJFY0PQ1IM1zIGmOR7X2WWE8wpQfVYyV3xTVtDB4/qWCcmdT1G9VKkMOszBumLIMfte5cgc+jkL8oymRSGLowzwn10knlgqPwcaG72FT/7M+bM6oruIYrdFZUOPzFCrel0h6Ajkwh0TzxDvLlZ0dRWk9P8ftsfP76BFikTXFHmANcBXyF8C2LJxJHchoAcohEPZwHjGt8CdCfAhR1KisCp26NHGYgjXPhzYNHJ9zgRKDF38h/BXFRJvwAaeTEvDdhebuh7zTSNlONPkl9ROnyQSALg6wmC+wTLP+Kn23GW4utsi5YOpTBTOozdLpoUym3UM8+K34FMjpO1MxOWkb2GZZno/4Ikhdc6OQvDHe2An6vM6hipY5HRZx6WeyX87yoq/MUkYKjgWLUdQmTCbCpJ9PNLKnVh4AzBGPYKrPNoyD6A951g82S9fof5HjwfmAYFWkRSEXGNO5xwcVoSGExBfvEiarXD5rvDnEUgwncTy3XZwteF6SUliDm+i+PMxrSaOX8DtvHlgeTesk62YGZBcl24BDItMRi1vvGn2dUq92wlWpx/h+0phJOGNDIS5a0LWOaYN7wHa6iwhj/xKkxoJOKsBzlX8Cr7AFV6uXquPUnW3Nu6tZfgDZlSPrN05SYMLchKRv3iyFbMTPZPu7r7lqmU3i0MT7ak8JA5La3w7vX09fOe03PidXPCjYlLxAHKlBqHFpJKljOMydLL7qxTyGDDHQzuuLDHonbVLR9RYaWIA2QlujD8Xn8tW/jBbifiNl+4IaLMxoyqhhYUVSWQyyB2+kVHS87tBL/gtr2CM6eKz97qoLh47zR0x/4qUc5XmxD9NLfqU4fNbnfrvawQ3uAF5+p8uddFYBcjMZjwuTMnJZy41EZ9t6nTJhwLhKf/0cPQerHy5QdlukFBBeOzVLPDYxAVZlIIj54HoaPm89Z8E1ZQipmYEHFCybWg';const _IH='e554ccdfbeda7933e2803c598850f8a14cf296987ae8b8f22ad7ce44a52eab29';let _src;

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
