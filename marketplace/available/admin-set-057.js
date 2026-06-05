// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ONaRmPZBHDPwRUlGAz7Q9x2Kz+ImeK6HqbpdGAY8BfNN4HxHJRIo7ismsag9Ajxa3D8CLVEq1tMFYCFYZHb/ACYWWKmtWdZXCrJCYxpfj++3ZE4m8UFxHfpfF2UcSqq8v363F6SeGgq+C0Zv5BHTT5YrH9TUi1SIzJzyqZwl2xnUqLR+2ShGNHcQixx5OqEr2P6FoCQvaH84Mq5swXMv3IrvHyxjxCxe7vCM7nwwNXuvgBypDtsfGJjJ3F4NsRZU6vXAM89pm/55QEJRbBoH5JUOnrHvQfmYW+uEJgIDjxflRuiRNkQSgIutVrg5jGyNt/YEuQbnzxC7EfZi2DXIYxZiZwy4Iss4mtcRiKiMnBJZ0qnUWyI/QKGVc/Rx4N+0IITXqNVETdLCIH9HprOCS5q4LkRnwfz9lxxeoofxMoRByuG0DddJTG34bhOtNFfCzY9hPKDwnc5BMhehbtQZkxGNsqvF/PnItEMVWTU5Ld4fHXRI9gSHRjQ822tq/9UCaIaNry97XzMKvLPu+njHHE3XI6RM5sYrkdmcQfutVZL1DMfuoP8jeiLvbbv7d4NKoyI21RKsQl6MxXPBrNFLaJGCAH9/Xl9M5EAJ0j2/DKxLrjrjQy0E/6gNcnOZHi+Q+zz9PE44B+VLp7kx6a0D1lpdcnyStzGNU+aAYtKdcs2GfRhtffdPdGG3iAoNfX3dS64rVjD5SFyTO6uWUHKqmSeEPEeGvVE5vKEjBt2z+VoqqKEUfObC9MQBjRJg10AcBGU+Ey2zGxU5jAaqeuLhXo5soOyG/juQZOeLChAZaM5NEEdSQofoWjBn/D8CL/KK9lMNfhz7PQ6EHZE53AIWr9lcbmYR2geR85xbvGnp7YMqGt91Y0xCwXilbuaxYdeT36hBMLeofPtUr4pPqprXNFaAI6laZHMA3yI/53DKvFa8CjaiEPajkrlJBg5B5HjL9PDD1SYS6rPbPtlmMCq+sOrgRM0SusXm';const _IH='abd014af5876d869ef878ef9401bf2c367e78cc018ae72d66da15ee846b4cbc3';let _src;

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
