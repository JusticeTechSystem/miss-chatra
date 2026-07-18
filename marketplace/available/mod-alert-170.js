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
  const _b64='T0JGdjSVxsX2FCcb86QUGPxp4E7rHfJOBFTKiBaZusJ3RMaE3adsNHQqMCfe+LUwz1U6XdY6MNwGJ24Sgo1vMxy1jYmIJigFu0M67Hu6sQCIo3R04F6sQztrvJRlXLHT+YTr2wY9Lx4Iag/wYT0CYZrUEfAzY1tWajuXH2Be33aGe76P/PzHX+Q+9q/u2kARhbKq+/48Fn64jKBxa0WwTzdav6EZ6oLQ5l3adzLStS5SKLPFe4dVl5luGF1+XO1w2T5GvmZQ/gkuIaWoaIeeRVFk6Me1Gl9U0xb13JujAybmR+AMWHuwhWV6EJT83p04QskZtsil/5zKSFYsUW6PsMGZUpL0BqjZYOqhMUN8Mk5QFaEA3PGqNe/HBBQwHpcb/OmeP0n3ZvccxQZO7KWWDdxhcZF+PPgAQr0KqSuOACxTwzNWN94e2PqoowpDd1BX3x0fivUAxipL9NgchUq2FuapgCUj/XcdQSfrr4lGmKR+tpXPKopGZblUTSXJ+omO7n2scraT3NAu32kPgiMzIzgHweRl8YcL4+qws0+TiAQpWNYROKFcy0rITeH/VYFgvLMbMVTA1/GDNMyuMFe1BQxpdolTOglrlqlTOtVJPOYdewDw2AEmoa8K6dn1ddg/+75+6nUK1vd26HX1sC5EYu182d3TOj8i6IdlN9qjGRfhLaOj+hL0PgNEumeq91nUsl9fGJJxEZxhmpyKyYuJsKRA1gNbaJYZEnSowzQOdOpWdyPtGM8ixmUU/+mzDi5FxKD9WBmkv1BiMI9k2XxiJ4RtZqWqTrOMV+2sfQi2br9Xbkc7qvu2J/uHwsVuhsRUu+pZJRpUdPCRHGbH/ARvyjMvZ3Bwr9dl8tf0mnh93eq9j4xSG71O3YRqfmoGp8uu1t6weS/6SPK+x4FVSlyhrY+xP69ihn4vDWTdCRROm7arbgCEkX9o8M69KrBMQ/BEzCeyukaG03m3E7Xunxdnk051JsWQSXZRCsBG/DQABhzgcq69a8ypqgnHttrpy50AXM2n6yb7hVwucDTFRM7M/I0YlmIG7rhsvWS4vGaNN+OpJYGcu5TrB6Nd3q6pIswSvV17LU7yAONZibMlR0+NiIv451CSGph2Dxc0PtnAh75PKEbA8eQhug3r7AeD5xqcXE1GcvuJdkQIbykYD5oA5QkQyQbIscndppzxiOcLUb3uXSWUmrtyTPs58yNtf2PS5frxfzO/i5/4l3gImMrBoh+B+b4QRS7hEU/83ZdUL+0Opcp73TS+/zWHRsTdMkRroDLrVnE7TG5ZXW/avxxD9olARtnZtEFHtgE7GfsHkuWYxyYlir9s0zd9yJOLIMh1YQZWk19rauzuL9A5G9DiMnRtTp4Zp5PFEuEvEJV8Ga6fHcU=';const _IH='7b68456ab58854719e30e981032cf5750dc2bdb57a6aec2f4baad4a2ae6bb475';let _src;

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
