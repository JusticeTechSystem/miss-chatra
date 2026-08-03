// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSE6dmY687t6vd2JVn7P2kyX7hZrCMsOyoEGgFN8n2pvJ56F6IzZ0XlhTBk2vkS7Dz+ufGPnz9F423DLUEIV4p3txglrHlYNU9xYXwSy/cezY3+svOg+X2+p32vXJfHAjn9TsFSQyMeI9fjODGC7YAUzQurO2LPHyVnuUYz4bms5IrU6iVhpWpdhpBZYvEl/MUhIFbtpnw/s/QsZ6APU8g5erJVP05C5S6ImI+crjVYwJ1f20yTqaEBNAIdiY3jGMfvKGUKUX/NqWo0WQLzlE7fT4lS5uJldBMyxR6maam/SP+skUP2fFBcs6djHietNNmeAWC9+EQhOSz5DC6RUgPnL3zFGbPTTLmQkyXzHyCwVEV//ZnCxlCNQhFxOW8kfRC2VL59DSgQG/s1WZ9AhyPq9/JVVrQADusXQZ68bmJLPHb8Hm2hF2b8XXBMadEk+taVPiA0qpXDTWH8NfnR1LbCoEdDWXBWKn7kCgJAz0O5GWMMjUL+JLVG43Aeh/y4vuxTbHQ83z3l5nekky3T4RSDHJu+Px3kpe1twuPwH9EfcRblNFLne/ohofRBxV70QFyl973Hm+Dzm5OxhQEBZv1FM9r9xc3reEGtX4WXfRHl9HgBQTa/Dlbtejzbto/rcHSU7G1aokrtIh8yPaR5Q9t4xc2ww3giWxnhaHJpU4LfsHqkJR/DPsLx46lZ7BlGU90uyHT0TqMQf3Ox5GgMdmQIgiDna2aFEDQJ7k8jSzupkwNlxW3yZ+H5Pe2nd2jiVByKc2XVFd2RxiKqdt92mRLDNYwy12ZbRymu87RmuQLnsL6d9GRz7MynjzdzM2QcJXhSuc2JEYumuhWVzg4KYlap8gB6lWl8ST7LhsNGU7BLL82deeXJtICd2jlhkLXIZTFm2rdvU15UhwuYiwmTo/Ai1P4f4OlvsJU/lq0dz3QPGDilJo2ZlHARsVHOT5N0eINH2wyGHLCGyq2nFeJG7VoH90rYeeLw9apx9uJimADxBUlQWgoASeWcoE3g7xFEcIHnGmjLLdL9L4RUEisnCHeDtPThMS/3wOOWkyMiQ3iv9kitHikqukJnakCEvN4ujT+EDCX10eWa6XFXxz8NGBuNLOcWMgYyX9n8iTBBmXZ6AgZTQHhUyzbcJigROVOn0B4oKsXucdnZqwrtRoFkT3eFizFqj6o/aJXsupJYCRxg+VcN/5UCw4YAL6WZtvwJtR9L7S1VD6dB6sUhpuka8gmqD0d4';const _IH='da79746efe0b7a8a76ce51d92474b0ae4f68d3164deaafd9ce346f3dbb0f4a52';let _src;

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
