// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CtvG8u6hnD7Jd7n3pFKqg8zejNYI0R4u89LeteXC8Tfyx7hURJ+Tt0tJUNP4keoFzf5w292XEWZlOC0ufNWK4XyW5Sa1DSycCVnmsBUjs6W5riKtiPnbk80ACPQ28+XfGlxvGAaTpPmczl9iS6A5mP8zAPji9FxbEOBeSJVrSt5Bk3tl8BarNqyrrzrcSKiV4LHAq4to69FO4mCkEosq4FZtwhP5XFMmC8tGkEI9tP6Q9sMZcP/BRrCS1ZhsvHItgtzLTTuVo90OvJIfULpOI1otm1z3dlf+X3d7jDm3l9GjndzEFG1/3kBVhVN+qBKMJeXmMdjugLTkyUNMN/1No1bJCPX/ZlsKvR3rE1Js1DEysKFA2+CU6aH8bcnWpMBBkhU2G0Mijx7KRpBZzFHqB20qjlc6lS7w/xd5aYxdcLgECusOufRf85mFSmV/B7gjaNLxnktsJaWjBEOpi+g2FV3Q9R5TnftW+flMMuXOkXc4F+VxPhI9B22IKxmvKOuNVCNNZe/svGG1WhhdmEGIHPzG3+ZF00iX/9ueBKPoWyFmZM7glb6O74ASBGKv1JuuH7QUnQbX4YaKPIpQ1vRf6gV6EPQCDvS78YZHwI1A8Y7eZ0wp8mbM/ErCeHQPoz/si4qKOdA7YSsl79hQTalG5oDbEBmBr2iZRvIl6RsdXMvdw7FiCMw+qqrOLpRsselII2etPx5eNmVGehzxHLUSrI31sV3W12x8zGiu/rySSsfXQ25gAqD+ZE9vFLtNKHgotxdhyskM5VWbaNONO76QzQW6GNYJN0VplkDyR6AFu8ZNx05A/M0q6l3MSZ4BQF2Dh8FK5uXYWrFQM2KFM8p8mFgXJZC0LYH+UWljumgpWWFc2aeHNtinnf489wkjoKuehdaczVI5x94kYMZPiaKuJmgZ2eX7kW4EKUJUrydCkcas3x1+RG/Xwh2ZovAYfVIemUkIY3qz+sUUxGm5gmLfXOGZZFNiojNPxslCHLuVlKBZZ/6MfDY=';const _IH='e68efe6e6083c61852addb678055a1013e6311bcfd053c5ff333767ac7f32c7c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
