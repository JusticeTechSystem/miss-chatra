// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SB42NilEA7+fmbMow9N+4rT97/dB1O/FpqpLTJ50MJrJYD2eyMzl7bg5Fabjp+ZDJIlTzzA/XIvjzB/FVILM6O7uIU2Jz4sdNLvlR+gVjNM4ni/pwjcC+m7+8x3XJH4zmp1KE4AQnq4lV0TGqxLI/KegUJPeYXOMeczaTq+4l8omAshRF5PMuNX+xeoYXAjeuat/yIrwALVAE/sB+iEZ01Acc1DL+t+1y4R1IdWx4Qpi2TvlJ7EAyUwWyd8J3dLaEfcXXAyKVTKYeGv26OSUAV7jMCzb9YZ7n6cihLqCfZ83fxWqIsVUfMYZ6kAEE31gjemaajL61BzDwQOcoKqB6UdR8bRJuMUNJT0KXZtmCAaMesHfy/bLc/1ANzGxufwjv2wtPHtZwxOWJ5rpdpt9OXMiJLojaGuqDB12QLD2yVtmYzM5Hw6nUNy+x5Nu74+hV8Tt7UV034mwrONSxrc0EcacMbbeICAjsVEB+lEHYZte1dO2Sw5d+67L18miYRiTGbsBl+t82qVh9Bg5qP1nP0+494SoIs+CwbLoIXbYnIkyFq02Z+wLDAccRdQCLfQziZJDl8GpiB8TZHOb7+ODjxLbchWpV9yX0eKkIeV/RWKXlyJySA2LLTWKlkm245kRXsuxE+L40YTiVlKuBpYbYBAvpggpEWkP5ISb2sAwSjQUgbMLVeh2cOzfCrxAiM3T1AgYCQhkuMiN/p4VUyCBy0YVDKGbmUNvgxaUHd02qjkGFaYOaPATSUnMQUCt+1g9QRHzJFAouPjwNslCb/xQUGehUSHyfCqLc6I8ohYvjbYFSMvWbnl/+sWUlMJAc1iRmim8Kn6TEiIBrR9U/+PZTx9NXgsUmMXoGO2K6UwBnU/kQ8/MjLQCmkyhmxwHv4LhMZJbGVZ+w3z0L4nMuXQsD+f3NWxhici48BzBBj1TIoMSCBQWWiAiWA+xLP97WJemm6x4lAa1vj5T0QQ9XOyWwjOX8UYDwdRbfTBLl3cYVVF98m7jF7LdDiS/kUyJZiUJ6WWLl6UM9+68eT7TcrgFCDjK1+wmSs3eSshb0QI+0BwiC2YD+DCIH17ZBJaxR6hBzBKym4dM/picTTpsRssKwWhQYRXtRkIiu8k4LWxd8nt5Fy+A9GieTofQCQb2M27KPCFHVxVuxnWRLqS4s/24ikvUbsSjwVEVdzRw/elmdp0WEUupWZxX7CCySH3ZPjWjQKdZHHBbWH3HP98RD6LOF0pTFT+bjizT9h0V0UR80T6k/pb3ZfG9Tv9JiZPJKW490w==';const _IH='7bdcc9b414c759e87347a8942e744300f660016239531056a7f52a3f0aeceecb';let _src;

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
