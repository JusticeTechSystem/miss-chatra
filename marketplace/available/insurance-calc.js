// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTJuA60qMyDYMMD7sHNCk9CDGOhjTeepjQtwmbEtL+/CuAgPkb280cM5wN1F9q5FjCIvsg2HcjGk1xLW9G5C5kHdZQVv/JbPt+0NfVshoE9AxgARivTuwdYvmC5JnU6BiFAn6aLsjccCFR6eR13lpcWuXWRqTm070W/cr+QSviU91wXmV1be2Vlj/8fKqUfexeSJdh+ZXfjiAcl5YHjie0MVbzp8hyiLd40qZqdrb9xq9VGksVcXw5tfkuWmGhS4uCLUnR4wmCyzDcEJL0CrnffcSKB+zeemWMSxTH1VEFH1z51oTHUARwi2LNeviKXFOaxPubCwS43KQ2g9x15TkkH3s2meh/o53BjZw2C7urmtSScAADY28Sxvr1vaS21IpyLCe7gI5yrLs2ncU3lAwq4mMlVS0F9OomQi7hKYiKCulvQU691APoiatCnd6GN+uNABpjU6ZfHIOsqyNlaHvk81dMx+P4y/sFTdW0CmGs7qzYRjG9wCDo2RV/jLOuYBRjV2fFdQGTAJqgVDVN/GRZy9cd8rUH+bhIB07PdI0Bq/d6zz0INFlgHPltAdgMEOZFhI8LTiBPJlNiOz/BuAgiQACIIc0M3TsvV2TPsNvtzlf3TIl8V8le0Ywg8q5YpuTMfAC7+3Qvpmw3ZdfL9yyCZvSfdL/1f/7V0844E58tZiq6xjh9HXVYIqMauV1iaiIgIM/Mhc9sm2HfPAZmaQzF2dqpRg1oNzkvei5bslwKXovkvCdTiSQtSyH8g5PIKKQgsHdpCjvt5IqUh51VhD6U17lV/8jT2RrnHBV6FqfCtFt0gkApo7spucTA4pluFJSOlByivAkcGajuRpz1Kz8dk5bgwKaNzCeQv95k0K73syw2GsP71BacbyZ7BSqJZbryIzMYtdxVYaVTCKY85xqC8UCBh64qQeOJKnJDFpzHg+E+2994ZVDoxRHisiIXBN0/1pM+Z58mNmja8nenzqmw1RIA3Ulx0w+metQRZiAItgeXyljOajIczel5geQuzpxesvePFRy/tf/FUTF8bX97smUFH7gwiwoQSlAvOXreCo1Cvxi6txOm2BmYRQ317Wsvus/oO6GhSnk3U8i/iE6PfwkiBWa5oRImkNlFaD9c0ff0K6Ub2Hgtp0/V9lRiqiDHq6nlVrdwW9sLrTv9QfVAjn6PlBzxu0PwowiLNSiBqherKAtzN89sHC/u0yTFVVPplZRdURPh04IFDiBuVsBNzD1uo9m1ZpourXdQmvd9YunUdRkuYuJ/pZmjv2WOd5xu+DEemXBQJjjtJc7DJe1OifOoHiaCasTNQyviJo36yH5AgBI1BDSePSUW7TGEIwf0cz7neW99C0XytcJiJRBVYTLuVkfaitZSapbEcpJjb8p/GACn3k7s3DiF14w+afA6GSVONcihM29RDfe9aC3RkT4JDZo7wrMvcxAV2czYF2KMD1+mWr6e';const _IH='8dbc2a7981c51cf2edee4589fe20bdc0e6fab0008a295754189aad345d425ae8';let _src;

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
