// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZZJZv7JJ/FZ3Vu7+8CfJHXhW/3s6CbBNOICOMT4G7CzvT7nAb+y1QZocq7sG/P2BMpUcu5QpRed6VSDxudzvCqDhUfG83bfmiusg/kpm/J/FcOyP4DiAl3+UtIbZQdJoxEorgAlgjkqvFxlWsr2mEcVbspcBR2GEOIt1UfLg09IDq7P8CZX9V8/+H0p4JyRCn2ZkYdKODi/17smeOoV+oCp8QJe/VCah3/IYGZAUfrarzOIPPTNV+GcU0AVlrtmVs4Gw15qXx9n/vJh2fRTFVIF/gHRu2IWmwgi4IqoW/GSU4kedR2sV4jR5MtpZ20ysb3TaWYzXxxgYYVNW/7dcDAbhClxSM+H0v7ONS5zbc/0ufVungesUXkI9FWdStanFf+BGO5a6grZnKEpJu5APNEV4e7QohFu+MSZu8sfIM/hTPxFOudHb6eU1HayAfNayE3aKnMYdGvGPo/d0KFvwWMZPFC+s7uMLji2wlGMJgxTW8jIQxcjD81v4/b69K3hes/fF5BzAUChEy5dVnTHkdk0jkybNbUCLmKM3jWFlnfbg5n1I2JFGJw99WO78DWhSJIzE7bMN30mWUVPRv07QuThUYKyNZPcFfTxl0jgqQh+qlcDDPwiC9R4JnkB2AoLHH0avV5ow8FB9+3fMzDuOTxQWFC44kUfvOCqaNBNLidSkMq74e7P7ufQPDHFXLsoxObNaz7W3VBJlYkDRSjic8AtxzDvvL9N5p/Ww0ycfH2q4LVr8deiaKlEflJVm2AbWdkKHzpeYMqwnc+tH6oc2yXyl0W2VhJjPetIQyzH5fDRNeuzG3fxgMw2qai0IA4o3+jlJhapOvyngPWz3V1l60F6epbnQydl6ZVEPILpuzaUDeoIIDvQS3n6PHeN9u3Igijg8lz0gGbGUljSKVTP3BbFbstKmMm5L+pLZVRkhADUdGbFhJCh9GXnZ7HU62gzbh8pAJ7QtB7uLPoCDz6YDiD4FlqGA8rBtXqAh9VFVsiLuZ8Jilu0jybjYEwGEGX09XkjR0NMwuHZqLGKV1PlngpBHgfKH6KHEBD4nwnIY4BLt2c9olLwBWU6DDRNQtTHQn4qnmDFCsy9mn2+fyIls6X3W/lx7hAszoAUz2ngvOJ0ndqV9WHPbbAwcJ6ituaT9fxJenkcX3b1TGqpou2vss3P8qrsQ61MlFq+CkM9fAOlOrB/OSJzoC5wFbnDU2wu7dsG1V4o2tL8nUk9yhbDLiOpR/HF5cQX4AHb7yILsbx8OP/Qug3YTzN1TVyXTy2vwnaZbyHJzrgBAtBmKAnKwVpliKba5zP9InjtptobpuSpVH0Uq2R0uc13Wdhcer3wft1EvvMUSyBC1ROn8ZjHIJgFnrGpFOSj+1+SDnzkGcpBv/gcPN+I39ijOLYN2mkJBL4oVWJSSAbVy+oZjG3H+QlB8GmPElc/Hqv7buqh3ceHKqTp9zQpBTMPRXNwR+Kk5q66+A==';const _IH='ec52673357251af42f0fcccba5adb5603f361a2dcfe628836f344a30ffd35f78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
