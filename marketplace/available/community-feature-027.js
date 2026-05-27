// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MRuepvjFUybpktMSVj/tmwdjS8QJa1pdgserHvdZD6htTl2zOISPoFygc49L+tdQq70tFtbEhBYdY6xU7ctjiyA7OqN0RoJQXUAB/bJdK0D4/ZaFGV6gVrHXzGt63PG2LTFbRsAlwGYk1P+vqANwDC9nfZlmgZ7i2Khq681EUv2+qPECb3WR9lg78F7A1WjPcZr5VHHiMFyD0WlMFDTqGhf0mRhFdNSiZXAUVulD+5sD5jml+SDEToFshHEUNVDO039NkWrLcSFqCAK8qMtTnaBqMddtGdYwcyGXVMlo3mtlEXGvPaT1VWfk1x8IXqFJGUvXWPkRxeVlQsSmlVq9HdOypXFnOQdS3LlLI2yATAKXk9+u6PL2xr/Bm15GfBXvLod/EujzByl+BOz9NiGoYPQUQJxMYGIzvZJmqgNVMAKgCzNOl2xB7/Xz2J9K/WebKFJy0QaWPtD/g6hFVoSsBxHz17ncd5Iv6zT6QF1k23tRUaknzDjiesCJ2CHRkdSC9hO9I3dyjcmE+/NGfzMd8jKst08eSyjOLzrghcZUANZsk2Nqx/88BxodwUAoKib4HX/LciHxD68hWOidUX5FrnHAYafJjFqK+mrYWEXvcOEYLpth6pdZpHAncfBy/9P2Wo1FPKF4nAARa8FbE8DwVBGnccGpidj4/OD+4qoPWHE6BRN9i/BGjfFt4rsDPE8tTRqPaE4g1c4jNh8kOJZ9is8zJwu+tfcykchTq0wadg==';const _IH='26daabad85237d4523cfb3daf0a61832a9c53b77232394008f73128ae58ae54f';let _src;

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
