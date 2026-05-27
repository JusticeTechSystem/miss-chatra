// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oYvCQkztQxRmUqMXZS1J5aNfuSmbQEhNRIao16OH48nsd0vnMjU+5h3Ps6jzWPYv2rGDzqK5xONX9obhKhmtH3X7kCWle0wJlXaEAN58HUGfPtPMHCYRsrjWEWUNplKyfeKQv3jn7kvVy/7sObyRknOUGVsidCdV/9e/qMqksEp5xumhfVOktxIqTC66cPIOqPHSFcwX7CWOmda+bndZ6hullvX6V0xxeNRj2xSww5D/SHNMvln/g+3YZHYVyd663MJL3mxZvDpzwH0p6gXCvr0rI97AiEOCOfIDM8kQkxiz6jRf+O/FWZozO3cl0hq3teuAR7URblkDQOQAr9Butmu5vVo5zHKvIaCFJABYHBfEOBei3kUvitRNkvlL42bshrckMassJNmYiTYenHrxwqkkH9MnEdm5HlaOefrKb1grliAvFfuJ4ln0EkB5EzKA5V5Gh86wjq+D/qKtV4k7y1BOvEEun94ozmdJz6l/IT8FnUT00kLnmf7IPkIbDyLIeB6747uHMVYDY5a8axkfRLPQLIigX+OMUflgxmye95bkJPXqQQxUczQN+i2JzCuaIwlfiGPh/uWzQH/Bc9RPBq6g8HYDDgTO8ts7sazG47arwfwNLFKJxDcN9BXxoozoYywby+FWkmnuKAYTmameCyjK13JkJjLAVfx0Qoo8acZMT6VjO43PeuD0WSROeA5C9TdMLpNNIk5jsCQC6nNhH0sAZ6YFgEdh';const _IH='b3f52b3134f603cde2b4680e83758bc33f34ac1704664873c58ff17287d3c655';let _src;

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
