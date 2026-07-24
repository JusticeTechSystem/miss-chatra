// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTduFzNgpcnZSQl6Z/kQu+nR60Jo7hbuPXwWiPnJbP3gqbsIMV+A9xCCaY9P2hi8BGMwfRPiuaA4jYou0XlXJQOTxzBv7TiCpmzC5Z5bhM39Xqrr5orTpn/XQbUSfsoHvHmufA/D3WCxJDxv9b5ZQFrR9c6rKHQROEzWz+rB4rXYGenpQNdPrVmAcyJlGYwdGEAn0kdD/K+jm7Y1fAQ+gKG40QBhkhjCYFDsUKiwfNDOP3ZUg+5XlMXgnegh7DOM0GZxfAN5wvgDOWS4zrymifYJ6i6TRUVBMfOMCBMCzjy9PsO9tq91DECEAS+CKJmk0zXTXWzC1LFXB5Lntl9CA8jSoicPOe4WkoBVxLwqrFAWWIVwFMOt+NNlqNIr/gNKpvnAGChIshVvp2Cr8xUcAQ5KOBvW9V7YwwQNtavAJm2c3crK9LELtb2u+mbPJUNCqjVEgSE85WVeZHTbZSawVAfoSb6RsTqFxFtFhC6Am65HAqR0Evl3649z7Yk5cX2cx5WAfp5IJ3nK1rTWBFNRKhw2fV0AkN0TG3EMCXJQvkB0laKJQyiGONl1+EvH90DWRyeVYq4MuaFlVMlCAFv65vOZFslDg+ULeEAAO9vRLpBAAtiEL4mqfie/Sex652upkdAxlZpmtNcgDnCkkCZKCsN1EHEXg+6reZtnNdevCXYm+tax1Fj+F4JPaZtNMp2ZbKYmH6SAh6S1u731Ci1T1+JvJBL+Fp7hBXLdnZdEOuEvM1p';const _IH='ba434f3963a0e0b0fa5ddf569f7c301a76457098c58ec0ff5efe5b74de5c68f5';let _src;

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
