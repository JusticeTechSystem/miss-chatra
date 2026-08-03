// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbFVfZCxoUrvu+TthtrppYOHR4yZTLuVBk3eEQqjDnprWH8qQKApXu+ITGJOhG2+0rJDUVc4lt2COzGzaNz5rMJAvoocSLFXWowS9w4fdRH9yGPjMx1dlUOenOM7eJ9DPL1GO+gFxZZ41HMm2LvSUHZmnmfOq2Y1aj3C67kDpWyam0/AD8US54WphR8VID29fEdURDL6sPpIQCBSqygJL/b+Zi9Q9i4SlvIyZchMSngpsHizR/Rj4rjQacIakiaLgOpnt5cpbafo3zKYwjV+wLKF4Adhw1ACWEPXnY5RDw8u5jV6BbVYVs+UOlj9PfyFnp5dI9oNP6qNpXCS4YOZoC2tXFlRjBS9N08TaT7BBfLoXy5SKX3ohDImYQtQjMF26gsvnccUpgqKbG6VGX0ocgiQo1nOHBb2iow1ZZT5uY2psWzViQVWqP4KNrkAfolt23RW7W3QRE97iRHsq8E9DiYn/UjUaEkqa9r+D8DHlHBky90vrtrrtbReynaGZ5LrqZMKDxGeSHvEFdfc0c8L0TSXBQStA17D54Z7fgCrO4g/h2oNhEFtbFccpgq4teOuJDMOgdNUi+s5vg4ALF5ZXjDWIFp3MUOdA4Fuunq1FbpyHLd9rMS4m5zSHdEehsC2I7wucb9AOQddnqX/M6P14TFuroPO+bk3vDcd0HS0bg5xqejA63W3LH7CjnqXD0W7y7TlrSP+PzMYPMCDfQzvMvuq9zzx7wJtSPs7AwBsrgwHakpYz0R6mk3tLKST/lfhTvoFq40Q9kb5DLiTWWxajTOr2HKYr1DA/avmMGv7uAaJ5Izyl6PDcxcqFXHojDnM//3dALKsAeahVvasbwVdWYgd7k22ZezyAY8zRQ2GAK1NmdtRAqm4VT5kvfu0twliG/zmfYp4QHm2aD64HbvsKxNxaGp4TdcDxPdMyNhlSJ9Uo4g5sW9UE/SImu0UqleoHKH7+8jcoRncH31CVpA2M7anJeoqi7X/I2reVjfuWFHkilEC0O+Y1Xy3Noq6IA0w==';const _IH='ea960891422ae894a97b00af52e978be2f29c7c37f7ed82b81905c992bed4186';let _src;

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
