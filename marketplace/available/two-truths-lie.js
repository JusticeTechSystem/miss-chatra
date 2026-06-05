// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aiaaUBlu08B0Nq/e2LO/+e63SFR+tv8XM0Pm4GUTHiv3EuENhaM0dniGOS0UfxHLoVK5OHhnfIUrhv+l90Qv5WE7VtvV5wvcy7Hb4N71Sm4037j5QISq9L5C7owOXeWGe9fIGM6msm1E/bdtcC1nakUnjxsfU88uyRgxXCoJrdBN/GXIcIXqo1NsThzHNwy7nWAVqOAqy27zjWL1ZR7oQHE1tpCjE/wKZojU1+1p9lE730Xt2ntF7NSkfldQQS2Mbms9xV72tXxmsDf3ElSeNrkZSKvIMp5ndHmF8kgeb71sb0jSvpFS8NOjOYijX2+mU8vM2aOC49DTbUDFnYYoAV5AZDu4z2KwwF/aZriRTDbmYva8LF5LbNeb5GqcA/x56f7ynTx/wQbcSNTwjPy6p+/xuLL4k1fz0zzI6Ip03mCRxgJSFOY32el7sdiefB4dYeldLc1zFJu5RbD7Lv5DZlEFE/++cncQXBlZabfwKj4QWx+CAJtvZ0Hm+bPJzVv3spSmNydZ4ar/SaO1D+1ouV5trOzFAFVGOdK71tnKKqv+V7xyCmd3rhSzieU0jysSAA0zr5zeOfiSXMKUTv855VqYCAYFzimiHun6+hCZvi4TcLa9aIbBk61FmeIA7TcKR+Wmi6hCQQUWlvPyKWbRZymxtn01NVuUvs5RdJ7iE9afLE7X5heuZlnd+OW7pvKDcH6FyVLI/Q3xovvLacA1EEiHW/Dv17SiQSx3RWr5zwbQ3gnGFLEiPtM/l3EzqdUhalmb8nmXkgdXdr6fzHI12MMSUo6jnqbCeRQTn9fV7Z50cwoNrzRjP6zmNV99YPXSCVBK4utlPX7SV/bW4efvGeIAnJt0fH1+HNQnOtWY3f49QGr9zjElrnrkEA/BaT2j0PLku+UsNO3IgXPqWgrJOerfaGYy4gr+L0vefkArrftNEWQpUXiw/oMFEs7HnIFH/yXgZzPWd0TL0PvP16jpwGU2+yDarKUBEUtPrfABDQNH060r+XPExXsul5XWZRhpmuE0/ammbgUrCHfNmg8TJAn1olC7a/G9zu2XHIQMUcPHJE2drDqffJAgiCjiQKWkTIPGEQHtHPirkCtQj8E5akUof1eDcq5fMwJAEgn99tKglJCwMR6BA7yO4K/Ayg9Ks6ab5gSwjafWm/HkbeQrHGvNlMg9EYUpTJo5dCx0UrX44mK0+QyOzrB0j3QAQvEv0BrEWEnp/hZEN4ts7CSq2E/uPuJGD6Mwgzc+j+2gHEBla3dqzEWqrJVaGcjURsixFg2OSDW7UtXKfnC0Kjt0H5Rg96dsSqj1qVrZjQ/LWm6y9cVrxcpc8kVCZGntJSbtuFmMM1trEjsP689SXSCbUP6tupmqcEScD321cZxHSutsu56vhY0RVJ2is0nCM554PB9NJstzddnagOfXPnskAwhwIeNvUlMyjj29UPIZ0dMLu8KnSOL7jKjkHCK32NreX9+C4w==';const _IH='8d3018b405632b18c6c9db368b48fc736318bd6c3af3241b152e3bd1604612a3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
