// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DiHyy0YNvXZS3csXGjcozVi1OzA/D63qPHCBTRkPe9yhn03lFh0S2F/cBjYeMti6GnARNZd5BPVHTJKkX6XsF3EK1vqW3lGDjgVSYcwTWTkUSb0ALLz/fHaWF/0HyyGIL+E/Yr23F0Yfg6XHk0ZonKPOQYihd6nGD5s8fYnBS57VUY15+iE14SQiViXfcrX7DzmDZi9v52DOomjJxqW+nh5Ojz1t1f5U5wh0GMZXptOcgPQMSl5yb7Q7+LAP56BLWSfeXtlbC7YgN5qwZf1jOhLvd9Vv0deLHRza5ynzS0ntoaL228SINZGxkGpZptKYKFl7U3Vq+AEhp9J6608/oAKaWxmnE5LuH9seQqke2nPgV4yD4t8IJv8+a3xlh07ZU4A5w+xTc+jHpqI3w/EvTu3RaaecFH+tycj86iYu3ammdm2y5euXsU1ETnbs8eTLwHkX72Zmclnv2kjlu8kmsVL1cuhMPj5wVrCbfeCHc3wbeaIRQeJ6Dg8jxYV7cfO+gl0XMJpe0N1klsOYpfUakHNsjpi3vUFZ4NxmnI16G9d+ncyjcfDpRfGqzQ/1Y1ywClECQ5oth6v2QBmQOBhkai/ImwYophWEDHI8cCcmYD8vVV5zio/9Ync5R9j9ZHmqjV57eRL6qC5bAR/C3bVCtP+yZkqpviRpd8CE9iBwkvVZsEA7YZUTXqJfGzf4UEkBTwrByzkQc50qR7VJ3QoixLG6Tv4Dryk0X42OZghJ+x1aaujjuqQ/W8rYegolP09MIh2n7u+j/aypr+a/AQ9QqV4WWdcmRTrTsGFBh5c5BMM7/bY7H5mguWJlK805r45ytrdNlx8g+V0H9PcGuGQZ8L0IHwSGrwc7So9v1aTxCCLZcKZn5O2XiLWgJ3X3o4U0KgbQAywjuMIQvRYwWiaHo/ndikKzNaEEAhctTf2mWbyCuLSPyby0bEZMnnvUXzWv+prNMSQVAuuzBhngYZlelw7PW2zJOKul7mk6i5T51Kt1P9XsZnl4r1/Veelrnw82mha8nr33idCeaWat5zRR8BpM6xuH3Bkv9GxL3Agrkg4IH+UC0OZBzfSH12rKaMIbZlfvZKNADDShEAu4s6s59aosXLPq+ZShvNMlRrGlIVeVsewTUv0gK2C52JLYJV0xXLrJmKduENsiFlIMoNpNjl82GIeagIDicIGR+mDnTN48UeZ6JrQW4R4R9cbEZ/C3I42VsgqFpfLmNHN7ozoI81kKEEmz0gp2O+ouykR099c04q6KyyrcR0nVPSwMJwMgdSnNCyRVqchap/tJc72pBISKk3Uy169rYtv5lmyJ8Ig1TaAvcym18ld7on1I/a1o1KX82eIt8DDL0bbW4OKnkXHgfsEuFTwZv4jcXNzZ';const _IH='865ff1100e46d322f2d31c654426cdfbd2aa2d7c1edd5bff294eb6c82863a341';let _src;

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
