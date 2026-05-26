// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OBm94amq/p8f0f/Qhn5fa7mkvJo3rdLgt5trfeNZoK6oakOsyULRle36yrTmgfWKBw2hhj3bOvMT5BZ118WnC3+rmq4MmNljccapA9oel8F30NaNPpDbCTsKif456m9jkP27NzSoD/0hKhhUnDday1GVjNicMVKtKDTDX037KpHQ8iXVlfm53Vl298lwyfdGtTCwDfnUxrIGbE4lIZHUDCa3iRHBFDVTrRcdsj63eGfmNqSZPyTgPgGBXk5IO0CoocxmMTUmaSn+yqueHyEJmzk9HO4WE1WtqxDzyVI3b82qaWyny7bXZE2TQnxFYVj4XHS49SD/WYTFRbPddL/ofl6XUNWA4ZLEvAvc2WFE4fLfzoo+3ItZ0tpGthr/7QG97XBq5rTmRIsmLtXkF16rTOPSzFMx33gFAbbqNEqGJoyqjVbqQcCPXgMGWhc8zJyQtddvvVO1CuuXYAKGgutPphy4XpAUFARRpOYzceTEYmw1cHGlI2+7j3pcKHl3JNgOVS+RRPgI8E2mdRAOD5fPxumaD0TdEK+4zX2nr4BIaJ6A4o+RJmKrngwISAN28wXvWNVJnDvd1MbiNvdkk4R/qCIATbWInzJPVlinf6AEGGf/lbaYcYNlmRWXPCluvQImftozMu6YievTl3QQVAzgI2UC+W15pOg9hWgVUF6ybspnyZDEAcgq5S25oAKVY/KcBebmMISFai5xiI1tRT5oMRPyNjPca9VTPB/ZeQhW9QHJ+6Yr3qimw8tPGt5ytsaEech6MeKyc65ypS+35ZZ1tngFaSi2U6UtXgqx3ypUwlxx5yl/OwsFyQBT33D0EA/4aGrn164t9iL81m5Kw+Gg0TAzsNR3bA3Uudcea/H7croEo2r29ixOO1rSyG1Kj0HRoow5g49EomwHgD+pUuREKnbvIIE0lyyOyu+nER9gWmZwWY4vwBzF6nMrRk+ZxDzKYGgVL/Fr7Gtt6xuHFYJ9el3OH9gN+lU6konw/nlE+lf44nxPBtEudrv2oS68RdewlRouCSuTfhtyLDPFhvfxP+9AZJJlj+sq9kJTRQ5ZatBgBeavjcMOEgq8lHM8ewDDidBGge33IG6Ouv6Nbc/busZX0ucvW/pZz1F+DfrvxJ4XsikQgFutT5hETtax67tDlwHJWWOyiw4J1KI/bbU3KfLE5MVPbLBiaVsILP3ApphszD3y/5VyDugy0XILhSWFFufSZ/I1qZTQAogNGN6Xi38D+Fkjb3P9/eCVHA0LZlQuQqKD73cx7Ti+3AHU7zfvDrEuma+tDMcC5E0+cbRrCL0JVnHjg5mxQt0kOFtWEHbIzHO4iKvLk7LvkBFozRTLGRQPGICk9hFiBdSdP4rTLuUZIn5tzOs=';const _IH='f93ea1deaad470a67d346a614a049fed809a1556911b7d8d1b1a7318328f290b';let _src;

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
