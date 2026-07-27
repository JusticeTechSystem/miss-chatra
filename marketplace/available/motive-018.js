// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHd6XT7CZJR93TfRhsKBUmvH+nB9RCuQle5/0InHpLjmnvF3enzc7GkLSBAaa1/tfBYwAvr3HevmBVj7k5EFeOg4EjAnTx8t3wW3GIrfQ2A2xBNdZzRO2cOBs+cZaB5emp0BKkMngHmnC3NtLIn2C3iZgiuN/Ul00dI2cyzag1K9WdOeoQHEdUq7DS7bPf/nUwQcVwb73TQGeL0IMdhMtgsaTzspA1J6dUsHU0V5HcCYy2q1PR40Y5O4dCxaTo16aKdcO5nLRilk14dVuRt67b88P1UV7FGAAB8tpRzLRCkHcfiBiR1saBz/1TSJiLRRuJWktNNQWp/k26uU00b2qMzYhPugWOJDQFPoYxulkDkCuOua5bPyT8Una4Ff74P10fBmrvAvet21kQpErFeJ2KXQLNRIcc4VpSFy2345Pld/LR2fsqOWLvCVGEZ2BnN1KTu3t9nlaPvsC4DkVtK+vvunsKdbsNW9K5X+s+xYlWQ34nOwvLMK1SWfy6uWGdKVx6DNxGIDrt4w/FSCHjqgIURUpznkui2toLEGHVnpHwZSdRGe8PbwsuPt/qp9Kq83Aj4vBvXcD6V+Mmgs0zlr3uLdUM6Q0D13UJjqZ/aOhePuaSkGvZLKlMi1LJTVtWe2Tf9UdMFWMr6AuDv+luJV65eCT29EDiGrJ96NXI4O+hObqga62OoVJLLO2qoP5X50b8pUJKU9O2K/URpErkZPnkqTJlqjWewy4abKfBhGuuZ2SnuW/Bf9QN602fks2qhjgnGVM9QAYM/D4NMfx+qefOcfXCodmTrurQnFEIVcSAB3EqSErajqOOmWcitSHfB4bmjCtKHhDoXHTQ+Gefz1SvhWDjUJZjMIq5HU4aFYdL9ZRwH9MJvnfqzhdyoxLuf9HS1ActDI7Ha9SokGzTgGi6DKybPkXa61tKaz7CBVHV5Ydr3mYberV3YLFlnm4MMcEfJ6+t+4gtUdqxtw98O5afE7gXIUz7GGxR5Pv/frSzuyRWYFd3E9ysTmhEFRos1IIrwslSjafsWv0wC100HPf8FuM=';const _IH='43a36e39dff49556a7d0e550db69468ac4e9efa58f052ad6505cb16c56d2517e';let _src;

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
