// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHcwFfIglY7YbL9xi1vL8A1Fs+gQNKf33DzR+Ml1QuAmErprEvvdtp1U7e7QMGsO8jUuXSTKboUIh/rJmFoRwPq2gcDILqL3Qw3IpKHlavZus47U7zEHYFabWvttbRR6czT59c8uOjNVhsgmK49Dhg6t9vwq3mPrTNyiTkJRHr7NutTQ0XtS47Rb9CxFmIDJTxDoqGcZyRsB7VbHfBxV3zz5QUsLGfz/NsCi0s1z6f8U7kspv0WqNZaoJ5Pa16GjcJNe/Zef5YS0hG1W+JvtaV12Pr0lr/cOPTPLhokZk1b9sdGrwbxVnOjTPcLllVjcXFbYsyG/fE3gUuEAIdrg7T0ve0XqTgyAXWh/M/snuc4eFed3mtq0+5Dkz0r1dfY29E1hWscR3Yt1pKLDbP/Btc9mZwnHwfG3zBxGzdOWp2jmSKveyPvY9oqn13f4sPbDh+co2/Q7sRr0AbOzHUOEZRxluQOIZBDAXyUeL1vQ1vQ/iNvudr64rs/aIEEyABkYPFn5L7XmVYX46DMUx0GrmHtDGiNpyk4HfacL78Sux+ZDzgETsG2jqPRAl/hk7JQPTjotpq5v5B/YfptrnXrIaCp7C7eJOBLC9ooNujdDUZeM6EWA3SUnTMCIZCP0HtBf8gnkUZeEFARSuetTk23X7pEEIZUs/jrpVg//3SDc+lpuls6J/WBQQQmr8hZn5BhyMqsVS6BYuw2mOLmmyVPGIQUOqxxO7Ksq87A+KM4jh6Zr8wqrDamS4yCg9DM9QsHE9iSOTnsr1Z8Ru/zlBBRw5uWDaYdYK+GwrNGHP00fVq9EN5Q+OZqEFNy4WHHPABd4bCBikXvGx9WwL8z6+kfujpZVCqFMQWSTPaBfuFuU5hFaE21K5pCg0SV0z+f3zOXxrtC15pTgbZTd9HO5lbcpVYlx7yVofhUOdnqcEImtmOnXrXmPXSC4/DAlJf39hqop9+c7WYq3gBUrdfbjGRllRb3vJYpIOujBJMP6sAoZWtAAxJZChMvRo2xkDPCQtEN5KJzt9NM+X1x5MJ+mcfOFx3DwQDBjzDtq4HFgum3z496aJ7b9Ri89a3XQKKfNH+xbXUVZcQ8xpPeycG20ZXW/F84GCyNyUzDxjIV6yEhWCFgdmiNm9kFDGSQO8/yLzYL6iW+zsCjZElxulYGQ7tuAR/MxR0+zR+m+ZW5x4wokz2RPhQ2EEOHE4kFIHSkPUL5AQsJY6g2IW0knog2WXim/gvfwXBCSVVJMiAMT0SBrLVF8n6RTZApCGfyOZRg8lf4hlqDbxuscD/CS6Gd9cUYsQeQ1r4tde48JeGPDph7eyNQOpEebnIOB6Sp6WeJOAtlzdEVpPzV1hIuIwg+11JODTCLZYrUwNC7WwarpWsIwS6tU644yAeCRVvKyNCOtzVqgOFgDp2wpOPNTNQ8g8=';const _IH='54fa1ada8e556f6879e32e43ba6f9ba33ad7978262419a02fcffb2e992e17079';let _src;

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
