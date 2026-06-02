// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+XJTclOM+C1S1UqsPVEbrpJpK+1zKfXLpwFlNopiv2qrOvOLGuTcPe5ARUIKzVaT3vGoBVWUz5Xofvuu+hC/i0X7Ezr2xy+P7n6KD+VuvPzomnS602ovnfIuaViiMdSC7r1rPkwGE4ErGvvSrqGvuJjXBtpw9V99sDjJSIPuKNiadnGUs8mBoqBla/ywH/Ph+iNkYSNTv914hghSTbfOLmzySP++Y42+GIpk5grDPxVcRhiuCT1i++qc+FvD758Icge3lEk4t7m9/qSTSjFTEkOztaSqfvDPOXwHcQvDP+DqmmCyfq3kOvaL3faf9eulug6CMNSwsyccvfMZTxcgHblX9yiW9WD8IW8QSOEj5+b8ezsHh5U4BgdsOJluwCAnjj8eWv/ht47F84iF3OGN3Fie2NpO9H1K4lXR3ZZgIGbudZCnUNH409H9NyAtVd0PKio0/fOTxqUkqkJ0Z8RruEiGM6lHvgjfAYrrHbipnF73XQjTSut/V6xSOflKi3uzcAzifoAJOl3+n0AIjoAw93hG59VteVlpwT8lntBVVEZT0R1oIptHlGC2bFWOCJcLNeZO2fbD90M9j60OuPG9sYsM8aa2xJrqH5OFMre3Omtmop3mvRZm33/V5bYBrkfSGWLZ83YOD2dPJG2Sjz9o3udsrNP2VAFC3RniVtlJZ1YyGySDWonP4GX4R1C9+MiWwaSWp64JTaVDIbtsfxL8D7kLvxYfa8RoWoVT6JpuoIbu2ZJ8Q78gdnZu';const _IH='ae08ee2f03e19ef693216ed1e1d5739a8f6a9336a3f5043b23b65c6da2cb270c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
