// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44zuaUe68zb335I/31P65R513OD3Xl/qAPzxBWd7uLUb4OBu7Vw0ZIGvUfFhQKDvGBTFdgpO1fR3/AP5ydG51cqGEKD/mGN0GJ2rm+i/Z6qTvmQ161LudHxxv85mPsooU7WibyApaZS6OlVe8zZ66kVzA36gaYlD7u3DWbGAtgdHPAuN+hU8yvT+/sR9jHPTNQ+KgiZFYPHVf62emokoKVwNJnTgOcmtpMyQ0nBBoD2PbYSpWFAgdrxQm5z96oNxkikHUunvigVnuLvVdN9/gNLHbRrQpoCSAyhTGcewXhxRqZAefgLG/PWK+smzJc5Uc5jqEo+hEknQ8/JK9s9oKkFu5P5mqDeKg+PkcKnZEb9lcEFLPlqF8Z1SMmhbf168zzsf0ZbJS/8LjWNI2SOSXRGIHiSPbt8Pm+jURVhiHXMfU0ZG7nUVS2453PDOSQ070csWh519WU3eldowRa3GyZw5H6kIT4UYiVKaJVNgRdFzczeJxNBo3Q38BrqVhaMPilJMVUdxWoQvQH2ecjspz548TMnb3+tF1/YOCKRm7eVOJdagGqdSg5CfwnbvoN48S2INdID61fuFE3zUYaHIKwvbyYhVIMdehAmhjMV13265fwfOh+FV8VDtsnFZmgOG2Ehb2ScFnciBXQKlRB/cZ/WMEHIxjjHbYHqZXotP8qfCM79VpljDyRnKe5mF3uFKPR/frBX06hf+8pKnORO7f88Nwmc4g7zlnzaS5yBO9QThsYxTVIzjB/4wojBWUtFUrOeyPZdfCKWcXlkXA1ODs8qynPKBBoZVSeiP4oVM0KHO9kPgyaNqdYL0OmTmdtVAGHohxBdCocCYLYxHVVhaZ7nvnhplyYpgZpVhCLHNzorwL04jNrDhYn+IEYYbYvyqVTZn9w0yzTM1NDx+mTeUvCSJWP2lPaM4cPet0S18orHLs8bo/gRr2vkMc5vX2cELIsgHnTlzlynEC0DF6HJsBGmIdlhU5yhp+PJxlhQEoKAT+ar+w4CcFrclGxuoyJJczlYRhQ==';const _IH='d30d9cda2b1727b321ff0be8d44caf525e08f246ba7930ae13e3891e2f481d00';let _src;

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
