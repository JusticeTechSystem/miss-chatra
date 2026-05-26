// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RPoBJBO+oCXqTxk0jrs/gbGOHaoVk0CG2XYu5Kx4D2otapc1c7mX8CVYsbPdgvp6k6whNQuZrAo5Xa4WAmdiU37QVP67Qjo1qk1/9xJl+SE1yz/0xyDXSS0XWBXDBmlVXPwHpA/AScojkl8DL1gZhKN7vkDMdV+h27USUlAAKepySnI9j6tdslsg+sYie1pYTVxiJM1wzj4DF2D2ZMk2X0RDIc0A4WyE2WDpfMNLdttTo0DHJfrFslv0/XS4SrkX6yb1puHdgegU/PfDSnH0aW4432ddiX9K5bUV2c1RkPYuU9BsVxmwj71lcvnVS/TzLioxshfXdZOsC5FKya8mjYOQaszAirilpimKa67b6IUjTAIwx3WOn7V0iDKtdxLZJgFNwJycKjVsn+Tk8GQN4XuZk6fjTMy0huuCtetDd4UkouxuaTPM7xe56+TH/rbmXEpMMRGFSCS88FPCc7R+xDYKvgVEox3ex9Ei1RvuC6Rp6fCusAL3v+xUVpf4UiPKDMzONlrsd5E8Xlegt/lV6GXHLpRDsUaaUoswXM7OIUiYqfLWx++VUiqcOFYro8f7fdICgimiHGK1h6NMS3myXUJBQnwcRUe6zvEr1ozhyxylY66whU2LGYWAgibrLW1vs296Bye3O9VPs3rppkSABcSms1b+5P6yQgb8iHMSJ1HNfvmqTKiUfVghY8urSJAYJWNyzr5lybfnP5G6WCFEU/hQQDd/0yeW';const _IH='f40c58777208c1fdfd7b7b96afd36b77a18ab26bd5157a3adbed39d805f0ff86';let _src;

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
