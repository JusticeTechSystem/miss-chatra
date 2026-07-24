// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQt1m3TOASfeXt0wIqtPWhKYf8hyVW/bfCjI0EgcaTFaGfEQZa+ER6+BzE94Vp1ftbTKeKENyTtlRsMBd+8/q6G/FuDYRRfwOnVThCt4eM5/cHOPv6I0m7EZwi0a0smGFrNCPhzOZOP5Wu8WsZlEFzTf69XdCAu0lmHI+pfbcdYkRmaFcBpsHUES6uPmEai9aw5E/nx8X0sqMmoOAkpLcFddiTHXkWBJWkSwthDk0OktD8pJpFlA73z7txa77kArzNTerRb3lYKacXCrSTr2NwMyxpgN1FnPYv7Um+4qQ8j4iJfMhciTsGEZWBRJLr00N2mBL8vPNYHVWFj8oK/M3KhtJ8BS5xBzHVldXML9gSujySUxhR8pwi/+DXjXhpCfopHri9//gV0m49Bf3mkDLSr8HutczRVJuUmPsNJ+b7XMvKyCIwKA/+naWW6bN69S07y7aYwJ/spIaHTmzBXvCWlzvnM7VPl9i17dFiDTne84Lnsg6st+LHIjT4jVeco+Fe1YZAkYi08KMA9hbYlTWrnfPZqknlrACZFhIeypDqSOelUW69VDjSUTIjaBdv/M6xziEasRnLZH5oBAyWGkLGM9GkOgWJFLEyKFDPGWdGkeRraezq8+mvf3DUnKIhoHN2g1kVJ1qa82dLiKDVYppnSp4lSUwwghF2+w/WgtCmO/X0JKBq+xGM7ypk+urj9HMg2yBUKPbSNdcX/85POnFXXl7tsUqQVFGiQhLLu4byFxsAD9X05TpJW04eY5m7P8CL0OUKVzX/LVsbu9lBbgFyUlq2f/D3h1LDcvEdMHG4rdGq9GZSqifk09ualeaNsSZ8vO1oCkb3XaEK5YtQd0yu6kSholK3nxtRA2ScIRrzVh5KUgcE2CvVbphvip/f4RAoFk76U6bXf9v6fDcIE8KgDlP5DlArva9oa54nDeB8UaOGrO0iYFsPx4ZXjX5BZYmm+wYA21oA75th1vyHgTyoKvVT4oOUvOxU5QrCnFiXVN2U8/XyD1U1Gk0FitFDU3noiX5kLpqkkysjsX3NLkuIVEpiZd1mDCMZfRoXfUZHzA+LuF5TzlHbEdN2hrKT5FVO0jDrd+2/uwgh3kVjovm+8ou8azt0w1LdtZdFWwsfOux02Uq/O8o5M4D32j45CtxS12T+TprjBL3Q9LC2/1AWlnbznMULbQFThw4SIFYOMNMP6tRVf8gPOJu7J17vkF10oeWOylRaHKd0UNWuQijf/QeUmJZE4/M9xGleLrE1Gc1akqkGzdwWoZvhcvrQ3TTfRW8jMjv5TlX+vrO9DSE2wY7WAHwfb71G8T3Z86wINV8KJm4qZyylRBDmbwZobrM3fC3rbnqwASOACtco5vJs5hjU7Lu6AMPZC8QP+1mYwNP47Nw==';const _IH='7caf1b5dc24e196867c80de6096d36f261373be8c21d979f0456da7f2a69c973';let _src;

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
