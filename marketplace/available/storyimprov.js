// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFmVOK1me+UpMQhv1Hz1sqwjAMKXHhAdjkU1vxf4eTD+CVD51XXzAKU0T942CHQLL0Wup4brPtREJfe9KSsbyOjylJ8+00EzBdDdSdX8mQ0xrIz8A7stauupSe8r9Jy0aoRdXRmmBlg/xFsARt//jnu76wJVJzhUuGM6fFcEsO133dPT6WYbIx64PtAU0/PSs7erXOdn7+L7MQClA1NXu/9Dyo0EkFlnNI8wyjXMH8IBFgr2bOYPhi+Ir+67O0w53ee8aZbjpgkIVE2o9KzH4QnmUsa5zq1jYxyyvmXGUZfSEIlFJ7xq3jAYGRA8rjp6zbn+UpHMTQPfZVIPkFwOT07OAC144IgAzQ1NNab20FmfyVEieaingJ8XsTH6S0dbTZ6XaHhpUKAg2XYKEiZhJ5Ka1nhavEATeaxQT380RSfzUJb6Cdb5klDSwoUa2YiPa2cu4lEPtzvgbCzA7KmxDaCEpw4mjfotRLV784CM+v4+fOY0VRaccHIZrwX5FSgzIvxut3YhL17hgn044yg/Gjm+aeq3qfI5qHIxfSC5W/Czmnjj/i8fLtbdGBJ032OfnR/VGeaRVuK9OciW72zVE+fPak5D28OYP+rZFDEwkV8nRh7yQywSWhEh8Oa+ttzgrcLcXTkb9crn59XIyufckKA2H7Ynfq0Z8pYxMeDCPoMUd+ck043fnqgc8OH6VDqQxWb38SPaGL9mKr4+mHeG9y6XGnd1fSBwY+moDW/iVKtmj028UIXzngmAaIS5iZ5U2p74QoLTLV3GdOI48VoyEqKHUirPNS21HVJcH59aWfHR5CUi0r0jgiJ3w0GUEDZcn3xSjNG5jzOUIJsmrkxIzVDm3XJ7n4xv4tnq0UgwhFciEZkeOO2FxvTQJkwup2ZXRoIWS3sn1C4oa8pdEDx/fO0h/SKw/z4u8oX6i3d6YGnaKF/ZpN+S8VyYeNHJSykKK4+BE2o0iZWO285w7rRCr5laIByYDfJp4cPQu7SvkuZ8We1Yq5wtw4+23A5vh5hqe875LPUkM4ekHsLRZ3WbmapXEnpDEXa0A1b3G/cbmvIAQ5HZ2Yeig1rIxjEHvZ0pro5TxV6q6xOr1LTrfPc0IQ4Zh+pCNnL7SQX+HvFa3z8TLvfVxpkqgqiqwo/VSFAJ8/zI+jBJjaNJLFjImP965PArx1c9HxamIlc5du1/ng0+IOGWnHZrU93JP2RNpaRXGKZZw=';const _IH='c6697c4bdca3b04de461eb6987a24225d168137b8ba11658ae05efbb9b6754ee';let _src;

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
