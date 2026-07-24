// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVMUswjnCnQSj3fOq6dX/ElecbX5zw/g1Rfm+ra4BWaOe0HfgluxNcBYYiaMtVEaraPbmIUtfxHTu2zDLP7xkI8fneVu1/b6kWyuHka8nbOgbUU4fC19XiT1WPVYdyJ12KFF1T/yyFH4d77+MRTGy9qzBx3Kr+XSNLMKZ5gKZaFtMxnDvAWrZyiIaAEOneKn+fY5gSIzWkkfk9qCmWrQHSsaL7ezJ/mNM4zOedeNuA6wGN9UMtN+ydcS64GlDYIgEsNw6HcTMYLAYaZqdKnK+vWsK5gUc6GO25RXI8t8auw2A4xTFWtGxVmyEw/IWy5EIPPUxJ0qdHXn6PaXCC/dbSI6T60qdsoYC/mQPNOSq+lCdNxkxCTXI9KqGcBa3fNCo+7ihg+I2LWlMxGzR8EaOJs676/RntrBC2ox/XKcSsUBInexjC5Q9+EnqhvnOGnrzCqKZ0eM58RgmTvvGxX/2DBGOeC0qNqyrcYtYpSlmUotyyrR+rMAQSd7MtxPKkLvWlqCzpHtmG9N8UC39JeHGVv2chaScZacPbBvQhogl11GNmoWnXlY6SVeGUBAO69dq88mnT9bkYdaYiLXvm3N8f/NgHZ76uaUmpouSjHG32F3nOt+y4dc9jyiI116FQHpI1Oo5lXcph+wujTKfRh2iFal9ftad9raBtedPB+rYs6C2s/WRExTqlmLssXLUMn8Dox2qStq1kDnfkIoj9QtKsSTP+98dtWSlPTCSCmbY2kzqbqxePpAU6vxyWWCExwYGdFZlSexAx3WibDruFIUIQ/Lj/BiNAnJSPuexU9JbratmKQ7UPiVpFOM0LOh2MUOEuEH2E90zAhJSMSMcc+Uv4mSe3rjM4mdoxXVU/vYfPFXQlqkgiMQIVSrUk0qvIDu/CYdBkijzgiRHCXJQ4WEWKpjmdEn2nXrNg7NNgzb1jLjjMZmAZ2pkVW/hEwuut/v8gd9SZTErfZj8IQGJybG3TJoCUaA1WVvNwiAnypVRw8ErVznGSw0T28p9BNwQGBpNPmZi20S00HNIKaJ8a9aPtyj5N1rTO9ccpEPsV3lDUP0pDVyN4Wmro6EBH3YP6iflmkTHd14VvmwycYA74Es4ptehi42bU21PhjEI12gs4rxUZJ2X+unuacyTnr5FENBYI3uKfwhuzStY/TWCp+emv5ruMNDY0TBx7IgaZPxA3ZJnpTCdHk+70f4ogjUTYTuUac5RMwVE4O3jT4jESnrn2XHS1O5SBTfHc0QU906c+IGGDL3M4uUvWnoQmLIRpce6WLa2FuoSarJlxZtzX/ZBuKm4I5y+2PumRxJIzVPmdz9dFgiMcmaI4Ss8vQP5veTGkfI2WcvACibvBtFXMVZZfp524mirKvZyCpovw9n8y8PssWyV2T0Ir';const _IH='043274fac63940a909f2f9d9644b97175ade5f30a969da5a19a642522a805a16';let _src;

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
