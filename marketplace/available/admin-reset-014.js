// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ql2zbjgX9yHileBmmXyNSz3zrcsTQfZERBa7U+SSO9mYy9LIQnTWcnPk0uZezO9MRrtiQyHiS3ZVsuXJBBavRLKcxVnF5jxvw491qV2g1UJHBgKGBuv7St2wVSdaz3Hpraqe/z+eL9u2BMwXqrJseApdVNG+LNSqLYOm7P6SeDIxgPfkwuwxii+hPx1zMReRBE7B8DQ3zw7VHvFMGXKZpxOVZ8PH5aYG1iXXca6wm3RmebCi7aizIyEyN5BTAf57AsS+IzOc84zzjsmE2eKjzcOvAr+Twm4J0/BOs+/9O5HhARlqaq0boB6Je5Tm/WZ4EkubmwRUqbj28edsiPU6eYGbNU9Y8ms1XUYr3ULwA/xMaG2dVC11F2X+hoeQzOAnXGQexSOHnyAYwrQ//4FFXAopZJhRTEqNh3n+mEHI5IegYKXLqk/ZYi5w2NPo9BYBHwb0dRC2rgJRJFmzX9gkWza/40OaK09sR+OqMi+gBn564AdfQw8UAVY8IOJTILk+0tgY9vhc4+tIHjkoTv5cDNQAg3A8GMwi1rGzK7R8QFaSfsYyozbegITYVg8iefyuZNV8WuhKfA8hYICv3XGPVCtwTTSHg/bwRb2J0LI2F8MY4uJyNhuk1x2Z7HviuApNeGlDLQfBt5RSIziQAN9EDGDxAlqLQATFDdHxbePDErb91QovlKPN3zIpDsikfyi236ff0ft94jeyD72Z7v4R+fb9LhofSvvl8yP5fSMPraP6TI6x6TCmn80UnphEwuFsaCmvOaKew6/VNlQvSsW1gy2cMH6T9he0oZSXD8f05rMyzZYqwnOaRABeLlPPUtU1CqPzc0Oa5A4ymDW7eoIqi50HJHjCVQ8rhtQ3BwokOMcw13+b1L4zcJSj1Uzm6oXAYmDVF7hQVigU8BpB+tWeRAKZLXUiUHYWc6z1K3REiIawCEqEnQyQpNcOXnhLZfc4DLRq2GS20udFE+nOyQQ9uNfqm9/7v0Y/MTikLo6C7ORHHUjvjW4=';const _IH='7369ca7d04fb6a55309c360a07bc8296f92a73c9c495ef32d8ad5ff2cbfb4583';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
