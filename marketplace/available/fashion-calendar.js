// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/VFHaW4PooDax1uzPC/6oDy3m8tYdKDhisgPDoie9JVOLN/Z2MkymWqKtmrbEp8ESSQ/pvHROy1Kc3/5rcvbSxjSNY/vw75G1F0JlAfTbtbFQm5B7AP7knR5m5WqQ/dx1DYLG/9OfVQ1ged5tAqMd1AqcTI1T495vE8x7cKolNBLl6mP6DhEavMpx7/SiLR0RF/TUWW5Nrn9j0ZDdMpIbRygXnU/jm3OF2tdPH3pdStb9t/nMk+5YwH2mvCfBG6H7NJdcP03fuhPve5FUQGbwTXPulqgUlFOLivC5rb5dSPI8Z4/LIqk5IQBMJ6RjVBjbcwk7INc/D4vOZWwsyavPj0bE7vJv5DbUHVOe4cAIbShXwuYK4mrvc1cEKJTdySvWi0c7X3mAMEro9a/105Pak8wWlQn8cSaqMb9cuPrMppQB30YsHhxc3ZhFP9hbSWgD11qCDc+aGFHcGWNYsAvWOb/QhN2PG9nvT/sFtQI9dSw8XX0Bfurg5sL3DCojCDgler8Y47pdbLte2/hYfpLUruGDN/A1L39taLV0BOiLUDTk4yfJSbjToiiH8mUJSiEqD30rjbF+GNRqKGgzWHvU9uTKtt6NQPhtIyNq42YFwA057D7BrTnnNpa36DVBiZA2+QE6NL2jSibsirkh6XjigHhWnoj7/hQlrJ1c43IspNBURMSxR0IUBbTRe4zhy05H9S9bCy92j5xPV6zprhGUHgo1k+JWQnS5IgxV3GxkNAKR7lNhT06V9dsMuspn7au7/RRBz5/nP4lRiMUxNoa0YZjI76KYEqPw/kleP7KsdN2fLcn9Sc1aUr3MXYbi1ngN6ZtY0c+kMWB3VbOlGK8p28jqwUrxsUE/TPOsDTynmb9niJxmavoxmqKylOfebVkLUXpL4/8KWa6C9nOyDW1R4BQ7C1UqMZ+se1UKCpNSV0SFg8cqCjgqUclzjOgdAhAP6QDjVKWw/7f5E0lbbhrd3h0I2D0KSgbsTTeHuWTPHGPgs9hL/137Kz8nUgL4JYDuAa+LzWRs4XATE4FbPPdsdxuN5mE9z3UXX+DCFUPPfW1+xliW8Y7cdEcPcslbQDGqaLh5VZwgTxPJHueI5jaTPyX2iZNLvmDQBR79icCodHgJSooraELiNMrMP3CCDs/w+2CQqPGcHn5r3yZkybJJJBnYV52e4ZiYUmYNcLu23KvGYo5kIrctN8gTBvSrqQrjQ9PTdl9AidE1ryl0hWYz10XSpjg=';const _IH='5c3bd37e482243da4f65acf777acbed242f1e6931d1200f2aa874a04e7f40aaa';let _src;

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
