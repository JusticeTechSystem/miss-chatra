// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QidESfcTdUYSfBHasw9rn1/g3ElN7mjmoCTA5DpMvyK4Hwykr9cZYfkpjtWhtCp/HWZgZqqAPtwLB0yeF3plji4/u6pIcWIhs9mYNGwW3Al1PwO5YBuhT6FxfX5Q1t7JTSM2c1lsKxjKcpW9zRjUQzc1fpiq05gPbtx5SADmvO2P5ABW3SWYUWX0Wpm9FSGU+ms2gnze9Ae4SZL0U5XHS4aF4jhGti8g2Mg/cmofhya14eZ3cee+6gWwqFDzEFQSGacUpP6vk72PEvoMQu/j3FvxileH/Qo7zoeBa5PdkE5uKtpzKpLWndKzZi6EONhHzMv7wHQZQcFxlXwXCXZ0SIVR3em0TJeyLwhzmr2lH+NbhN70h0UC2EKWEUTucPNIjeVvhkCadVyF2iULII87Vo87Rh/1BApACPc3yEEOBvgi7E1H48jz8IcPzMZlyZPs4IVkHRSmmqbE7VZ86NJ4EqgJ+XOUygmax4ITfYya+LP6AGTDrS53WUAGHJdJjNUbzcYRUrCQc4TpxE1T8dDU4uZ4mxx0OdTfL3gd5NIIWwiQjG3o4YXDraTdm4rUcGnCcIj67aPHm8CISr041DWXK+MrqVBqyV4knPfcp0eBJZQA7Q7Kjr7Xb/v9dMjxDvG8PTnrbN04p6nSSviIggVOlHOlnrNT3khgJq+91OdS6/D8f5GuxC96GohCQ6ss+x79asyIBMjtN7lrbJ31Pe4+2ykGOS9rActEB3v+Gt5dhaU6kLid7W16QvWgzbFyV+O7n/yClnfTKgFhf35xAktdUDpDkUcHAje3+vS+zIvbF7f70XzFpF49HpMFytnDsiOXBMxL/lrGYVu3rH9KznVACJIc/zsgZbxojttsCo28uaUlEJ2E6DQdMuDVEaPaleaIED1dH7EdAipdyUK/s+F9OuOxfKe/BkrsxtPVs4S6WD7tag0GnfsSGB5W9ScphIwl+jzOg3OCNASMwwy5S5JA701dRIvfx2u99HyMOma+FNEx/obXCoVoC0tLLuv4P1xrz4b8FHo5KU8vdRUg12DVDZyi94FTHPC2Y43X+y2Jcea4WFmAufn2MzPPmxmhBTnhWqssFuPFy2c+cMPWePwaAwMjZikrw2fJx4fy6RaZziWFLHJUFh7/O5AkI89uZRd5KYQhoSa435PSNxVywGBLf+5AMBlASWP3+daH+w5jb4MWkQXet90/fAfALZzMZUJwZpEgVlJDsYvACNFR5wQZvIgy/+16IM0/jLp8G2B22QID7ChOHDrSEld9WAPbNyI7GHhWmsTYFFhKbqdjofHVzhrJAMt8YNR+GB8tfhXa/vTewfMErwHJEeKF17ZYLTcbko/4Io8qBYQ6uzsKGNvXM6iNp50im1hD45U5b/bB';const _IH='4f4fcaf595e004cba49dc289583a2873f96987fb62807a1efc9b5a12bcbf3172';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
