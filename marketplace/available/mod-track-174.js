// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7zQdrJgYIyPuwjhiCED5bKqAty44PdupSDdzm3YMD1ErDfdGMAhvNq/0jg4lGUZ4jgapgPMQRRPSXeqysN0JghGuJ7WMAOCr827hplpHCtoZ0bptzovh6Qaml2nKl7kTQ8fNEP5x1Oir61JOGmGyEbdbCsB9ntoBAlCw+mjmfqzL57WUCdlrqL+jHASk55OgwDuSJ2W6/Wwc1PqEfga6jIzckLzhAG4/h1cW2Kotr6j5VzyyrFhs2O4TaiEApE0xdUH7kBrZAlbL+oMwhBVU7OPOiPPhpm+SuDt02lzzoBuaAvTFUPDfzZsX5ifQVHVFNRq6R5sY1mQuTw1vPRpieJb4TjirmVv+yYvpR1joE/z5aWVqfCje2ZUGDTRCBt6Bz9jcRkpI3rHuC4nEtwQVKLTomDqbUmg4LtbGUHXisyhsAC2pNjKoQjCko1uCvBG8i8vDD1lO8pnKuzXj2GXqgA+PRtHbcvPJjWhEECIQ607Q3QsNZ1wi9t3xHDa+PKcLq61Dh+WNaPPPpXIno4SNdkQOecp3UtvKf6xswe3Le9icvk5G805LUx6v0CX9Fo2+PjTO9PKDfBs2Umo/wpHnYMRrQ/N5DqH9zeAih2P2oMgi9LrngW0G9QNNWTFHlvqxIzhFC9EEQgDhpGOzxHQ45VS/N3XmHpQrh6vgii0SHmO4lIuReTfDPoljsX9S5xSSoW3vttcP3SxdqqtbIb3O4yAwAw5kU65MKmpoNcJRmmWdbX1jfQ5PCNR3eLTm/MeLuLljARw8mI1ZSsr0/8B8/hFSW8ZgGrVIr7/S0Ld6WaOno+Eodaahod3CQYkIX0Z9mKLnmPENY68ZcWW4Cvd2626NRa/Wx8nHxXE1in14JSD1rkoRacEfia60mskdfilla3+3r54zXE3vHd19+65rhudomrpMYRGQOHZqRqzOmehE4ktny3zi4XkMZOy4ebzmjRhlj98aLNmpZlte49mFsPDvXVj0LVkltkwUbrAGqqUoAQZMAlxjsVE4uF6IHlZanXrHtr/DPOUn9UVa2tcbYz2ha8YsSlt1jJnwIyeP9A6HkV03x47+hgfHGaFmDoc5huQ04VgNYG7MruyaVgU/v2tMPwTZu7c2tpr3q+MNZtsOxIoHLxG6gW45bXb2gbZQLSaJ1dIPYj2eiMJVWseV+izhBtwAknhdE/4iUNXvMmv9YF3grG/Yr5BH3RvFg8KFc0l978+ke4Q64g/OJ2ep0tO62Ns3LQjAzAFrTznxUDiAKn+WIG+7TATS9ZBhCy+CQPYf2fVl5dxRWl/xesFU0z1bBF1sKTtjKaOLBxlmTP4/y5IPWep2V0+v2wiEZ1bLIc3Ygl5u7OUGnbmZPeOEVTez6XPdTEMrem8yrQPU=';const _IH='20487be0f6dd6f7cb0f72729bb2a352923803f6ca50a417e7a5385183948986d';let _src;

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
