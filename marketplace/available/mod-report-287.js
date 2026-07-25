// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2TgPNCfgQvQilq/Cq0/WXXnlJHCm65OVmcNpLlmwZvkwkel7MIqAzmgflxP7ppmtk4SZAu6kAIhYZKhro2jz8APETa/b9/qgV7AJbQ8Px0ZKHNhQ/oOSqGyQteCcuAlldJ3CqF20t7lOexeiXcSmuFeqhJRPYpOFcKQkaQI+ah7V+8vTujn/tefj8ZY64ohww7Vrj6L0EHtMwJOUbTxWiDbxPDijAhKeAfA/zQLH+wOWDqiIb0/jUFzYWEjDq+440h69YYS3yqwjoY880pp/+m7fonXucf/drqnMvm+gxub6d/D3ez6O+fcAI5Bi5i+HHCqJFkaC1N7XevqYhC9qOdRK//8U/1MbMD3eStIoqozoS/hsR5Z0uj0rObUdAXkYNKFVEKtEAHUXe9cwSZarlBjQJCEfSuXHbYKF49gzON4kflA3eHLPRi9Df2T03s/ntNU4mjDUA0VM3A3qxxUW3t7/z0/tmvg/2XFYPisJ2UK0ze+CXe6K4YKKgWL/m0Q+hr+gNhOMj3/UaFjuEuQW7E7hCbzmZiedp5k3rbHLz+atq0lO4ccQVzbr1y8iQZ/zzGBgKqXz1oth1UtNcFu55JEVOvbV2+D2iXBQh3JXUklc4Kgf7Qbr1WuJJJEzGXJw2Z320JnaeM/ST+9BNUAWHopoFJjORM8d29FYny7++ryV7pxTIFrrm2AJldWOGvHFw/oNjZqqMQeWU6IEHpgXHbF6VpWFpeTg80A4cdz9ztBRD7SfP1EP+wqSUDbD7kvUstoRGGRr9wdcP7a/k7RLc7j4lkG4+k0lfW+9UEgOtrNK8IjC12vCQfjbnccdV+4RSuxrcCL47jNWnhiWayBTJwxxI4TswAi0FCupsfDcxWAw2xYZRWbwX1F1OCu+hsU1cmF9IYhqX0fzwcEe2fjfaeGx46azijDAocRwfvKRkvgGieloQrmDUm/M1nbgeHFnJCWYPnqlIGym10hoycuYRLixs5ho34dT2mbHuhnrukQvdUVPmsggYQuWc15RRntGR5WiK5ffDj1p56rx08hCDO6Emhb1Frm+X/NTKGyeFOv6pDMUa0i1KS6V0eDZWMEChEyTVOjRf74wwl0ayQj5qfOKcIuOsPqwT5/SdVHQfzcWeUcdWsntzo951+GM0LH92WH9lBc2PqgAcco5yXXwgcWolUlYcJTSjGN8lJKfn847ZaicbpCWjJTxcCGLMTq0pl6fZCrvQ4I6DxZfptEHLy7Iz38SIXvrC/lKhAYVE72sA2GGAb4mqQFN62On3YashH8kCpgH0xUggu3q4lURdVnczGDU5fYc4Ekh9bkwCytUpA94oar+ECYIJWpPblfAkagFLuCpXiATptcbebZysb2FgpeankrRUp6m/bKu5SPpgPv200umm';const _IH='0a59ef4f74f87e3c81e24f6b8385e5e4feb3fc903bf1a268c8d8b363ab55e0a5';let _src;

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
