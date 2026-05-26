// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ylJSGtbkQDDNiXk+0iO/MH4OOHszcsp/aZNCAkDupMmP98BVoTeUUdQwHY517MvIw5PP4CA3W9cwv7w/aEY5EwDxWBbCFSFltH9om29RJJf6M9ZunGDFlqJgfO+Kpdl+ssm1Yi3QlXKwV+albUO+y/YRZROVR6jGoc4hAueLWfnleEMUlTSA6DT+Tk0EyFSw74tuOvvQ9XDCws+xMwILOYyySt2HaoRTvBD18bC38cQZ2maubS2xa6r1xom75xKAKUvsRvGliKMimnuOrjMJvH3oHCDxqVcNqf27tzTRgWS3DQovoDeFHRHOn1WPUkLf6zsnxMF5ULqopn3LnGmyh7EHvoP+IBTMGlNTXPeQi0FGP0m08rqk2wiRYOMGv17VQPxlwROULIZJE5Gmhe8Ys8FyoV7ALJ95mLOwL9T8W0vDULZcufJYwIB2w6Q/tGK98un1IwafZcJSn4AfaRjthiZpM760STm+AoUVkGgwE5Wgzfj92qfoG4eJB8yJL2MQf4qq0Uh9YGJEj1vA4obgpbnmJyAS77Mwd4AQUCy/XMyHl7BzAaXDidz+C9xVAreyH6ACKHbHAeeU3p+qBXKoViDOhxD+7RmpjWFMcJvC8KV1+Qt+DoZ7mKD30MjI563KP9tzxPzx7FrOoha4HnzjOTf0rk0YO6pbfXBwInJmXqchbmrfqJO5Y4tHreZwVwaLXKAiAlPl8L1qA/WWoLwrbKw4qOaCuhoy2QYmE+mOLxqUNXIn0iuubgyX0fxdS7SIUgs0eFZHY1rXs6U96jN5o3eb21VogrMUAWv/UQJgpqXe945EtWbcGZVB8dB75REywgcPitxXkJuKHhgfW5sYHhTH7L1v9OZZHihOPVROMiBWIdbbftu8cpCCZ3fdzHHP4LDDNW1p/yAAWMjyO+WVkbgr7NhmLOmxSIEpBhiOy+bDaRLXGaTmdMiUJ7Emrvo57eHJUsWueUpiylqFhfj8V1IwW9kGf71G0GDmPCxN0U0xLkgQA9L3qUfgpNcJBr44g+EHVXg6Cax4kcmvLMh0tOnNJiykkmeREJ8jb6SoxZeUy0IyI/GBd1rTYR9gmZ05qDAQ50oIPxqnAhU5xutbiWcxCx71CWidBFphkfISO+FwmcZvp3RwKQrIQIDf2HDxm+9DoTXZjbikbu6cGLUYNctP7r/V1HuyBbZ+rRbwm23WtMY=';const _IH='5e116b7c408ef40fb3a38d5a42e99275d3f382317986c15a29dfb314174c549d';let _src;

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
