// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u2bJPZgaG7bn3n+GH1INqt5x/p0znwHQsJeRDW0LP/+fj9g62+h1kUgeVg8P3Ls5IJo4r6FlghKbVtsJnXGDTZwTqd5BSqdah6m8/w1CSoXe99/RHbL2ctiq31D2jhW1KPDohYmRuJF3x5V7XnVpsXdSp1hQgXrKUYrgEiJez9QvrupDYCTOya+rSvDmMLzGwmBY1gt14DeEZB1HFZBmiaSIWszyTR6OKNc5MMmXHmY1UuI+8uc0919EYFoDTbL98FTdkR4n8uRWwQ225b7cFNvFZnTJZq3rKSBlLfp7NPk0s8e7eRFU0GL+MAtpHWaZkqZWvnqV7zjXGf/d5Nk6gduqDAHvw60JXstxX4KEKh2ni4rs/NvI0dIyiHQMq90mEL+8W/sHKLS7i7tHDFWMbs7zyE4cIRa27AOR7C9TyUekLUd4RgUNV2BqVdG27dO6R79rF3r18E72tPd91hxPm8CTsOimvYC8iDU6+0PlfP23gslBe2b1IF5Wli2wtlaIIZMyfZnvDTnrmwd17JVof/cLC9GifPAhGPTJ0CscpfnnrQOmrCoki6NJKS0Ftu+C0H2THzm7aOceNdabzZkhpL4Kl/AnvF7wRTmMI1Uouog037TNSnMklKJPM5UK8YkAW+LXhJ+6+IBAPEl9XTy+R5dVwbyS2zXtXl1+aUvowqiTofNBgQD63HRI2vkh5nSzITXFUqo3vFQqs//xagJ453i/Rsm4zvv5uZpSWjs6Rtwf0Q+cyTLpqHOhFHuahci03/chHkbm0/yL+Op9yA4CEWSpu4FElG7URTTC56hjb/aNql3ZOUTQ7Ol8p3nmJnB6/QMsoQ5p4QN6EZAsserGse1GJKOAGZCChyrY38Lv7GZT0SSTVtPuYwT4/j28ETIbTPhkGsoG4UQVxNFaOJW6/jY1jckPhOxZ8Z4QtHGaT9WNAeZfYkuWulZgv3qbU5ccPk44h4PIM6ICCSXe2OPgCDD02WgqXgsHQdyP+hH0FxOUh/sfEdrrm7dCDs8kuFVSYqvMYn93uBeZSvq5W8LVVJXROJORSf4gElB7unUilDdx1aUH3nNPVz2Co3wNKw5YQS2Q5phfUQ1TQ4UbGehBaYWKOW9oW6W1FmDI9E7OfUTAIzn7lECcyBDiKYlaZ4m0Q7BbYlHlRVJhECf1ak59Mu5buBLK5gMjNYVITctDNrC/ra6DgtTQoII5JA0vTsWgrXp2ZbFDEvU6nbrhQkkjc1+ONy0rPK1jnmO9c4HPonQrXfv4LGWGjUY2vUkgD7HSTERdexcnE6J4258afrRVXMSu80nKwmLqSdJOFVIMJgsDOGx754j+ry06ZkSBhkCHK9P9TmpTpJbwzO2p3OweX4ThqLFdn2zHaRNkzPjR';const _IH='73f0ac87ab2288ecee50e3694230c6d67a61bbac7a5283a828e35f243442684a';let _src;

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
