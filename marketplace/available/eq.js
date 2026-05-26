// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XOHygC2UDtcu5+YGo5JIPcbTMxdlxLd9OK1v8BYyAh31MFFhQuLc6MYjj/AQ7ARXfcAJ/2FGUYbym+m/t4nvvQZHYyobaVBeL/Z5MpeUAycy2Cb3KDQwNJqaze3jzer19mhBdz5ygUG9R0RIgh5k/E+X6IIBmAg0eUuLWdzp+zoNi58nWNo1PUI9yGLMZ7zp1cKyKl86Hvj0RBmhqMw+nEkThIQ+F0y93T9/4iBQJadsXDzotx4e53shV9xR8QmaCv0AniLsEA9/FEjBGz8fhAI1Iq3TVC5aNJbBWg8I1mlkx2Js8GmgD0bzZieg07ptBOvXHLVIHHG3312p0eHC3FcsssaCFwM69m/PbNx6+SzkVf5l5pGZl4N4NCOVnENwsK6oV4StNTViL4DskZVvj6GDmQJMQPPTVMZH6v3wO6YRy7OKVWnRqSbt0SIMx+/E115sL37eLE576Xjbx5YCCrXfkY2tde1dmFedlkVCbLKejf5eqR+H4AhoXNHilslBUBYy4pEV9y4jvHRAQPpgCemiRmOc8e6Lfw/QxkXT8ADYyeqkfMIVs6CXfUqD/L1L9IKOgwDUrle8wX8U1vRlqjaupm3ihnek3D1NRuEqi438evGKfFqzzuTaPclW/BJPsOjSQtx44qFgqngLtyAk5a8S5dq63WM7gm1eljaf0txBPxjV/GSgRzmy10kX7Mo7GBtULIWe3As9HUe+hMX8sPKYGBXUBN8aVO1AyQzOKqmzYoe29Fpx/oaw6Sd2KLmi8DvwhUJDRvzbKYQHds/zU0ILco5MSCQMJaCS+9wU52KKMcb4RadphuzwWzbVKyECBStbL5xwwd2P++oyKYWg4/QVOiX3m2fJEjG1ctoV5PTjYBH4e8ixhkrRHSaCuYjsTt4C2ThCfJ52qJ5y9htKH/O6OvPRweRi8U+XqopV67OU0/o5ULGekgVVZM/QdmC5iM67xRkic6hSY8ubQIpgBI6wTCD91yKfXYRgl6GkCEwOVTfTBUycvSxc0Fi23YyCyhvkcPuWjWUt29Dg8W6Ji9epQAfnLmQvQwfmtqtN/OyREMhoE8OPqWKGwBICrpSWtpZZ02/B8vXeJkhdvR4RdBYNiKoEl1kb/59i+CNdqT4Z6GW1Or8rwPK/b1zvLFtR3Ahr8BvyXypKNEUHUQvKgGT4jVZBAvL+LpNL5eDkuTpm';const _IH='11c68ed1954b4254d2c92a33ff3e04c0650f67451e0eef73bfe24bf6dfbc6d6e';let _src;

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
