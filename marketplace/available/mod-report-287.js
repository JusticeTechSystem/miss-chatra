// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzJ7GjZqjJZLCiIvcIifrGoJV1tKJgflrPxzbHvlXceQCQVAxTq+gZY2zBBmzTi5c4CY3eJAcDzIp+PLxmNFuQ6fEMPAoG3TqiIuQUgjbEXqUoimFZdiclKsrwNIRFSgQHu2orYIgTAGvog6OZXVAQ+7YaDQGPjLto1yIjZENhoiEbYZDKRbeqDLn36E3nYAqeNTbSuRVsl4MJI2Sm7za+/T1bg7aesjFJKUmxLzXVbI3xxGpnjBzvT21eb+2Vl5E0RETV3XF1D/xCKhGRLUP0xQn0w8S18eOd5l/Aa26gL2sesFTPyWYv0Gb/UUZ3hr6kSenI88AxY3L8ZzShM6oC9suPLNxOY3g0bin8a/JZgWiVopxUAVCVkNJu8KLCsZb/q7T+ngbiHtKFf5fwWPFbP8nq47GHcZMRBnVG6iX7+FIQu7MUdO26bQJ5/JSFXk8GMhXJ1v53FoB1Wy16Yw8dOiQ5KJXPV2NZNmI1M1W0tiEE4KrAPSFlk/1ZR+k89rtk1YtqIcYRp5ZIKdEwsdZCib9IHAhq5Z4EAvwFunLjmeNBtrnwgEUaVY9CmqSO08BH7pMta38q+CJiDJ/jeVy1Uz4iWPOPLhrB1A3drbjIoSj0T6YBFbrGPrDpFV+1sHfPX9kouKO12Jn3DJIZ6I+TyFQYt7nAX6PtgpDw2Os91rjLIJnZ74lL6HiG6EV8dp3zC/XIqyRUQX0AQ0U/ENx7FDM/ZdW4n2Yaz04veFB9oGWi+s63oy7xxWyQ//gKbzQsDmdDcNTDSl9gDe8/ut4pRsFNAA124hE/LMbhMsHysZqdQQMQ83T+N9BHEVPaSLeKjvffanblmg2PjGMj+cVTWJk5Dsh30q/XgBNgq+GblXdz3k8rgcAiyH2V4COERpEKT1Tk+rO1wV3CRtNMpbddfeTXvQFOEVD6t29p1/p6+0mEsz2t32QmYSokPSTZLnDNhGAdhank6R9zWXTS6raZAaA7fj+bPCMJrHyALmbKCfIX7Ojhtml3UCsIoS2/8WmGJVCge2OFWNpz/PWQoyUAOwG0q3NncuGJFCHK8ysaG41Lurgw5PV43BZtWiebNjWJXTyY/U2P1LZ/o/N9EwDyKxPTGhKDh6+4kFZw+gbFGzCzqR5Kms2eisUZQlTIbLsrAlHJIEgmk0sP3ntoHwuSmV7imuu1tKlVTqfpWiuaV2i5xFQAlWHELs9WW+WY6LZwVr5O08z+BaiSZj0LRBNwqDxsp8fMfC2DXEnNpcJaWwop0ZoNiv5Ps3oSpRYriL+y697M5RC83Ih/BEMmFVAovvDS+yDxYLfCEvCS8DzQ1dKylaJhsod0uXtXlJAOXVYCJm6QGgFaa52w/icpMt0Q9HA7kYyeRhzrelCvgriAbYelz2bulYRQE=';const _IH='8668d51199cce60d066f51c60cfb4e4db57cdab2f6a5a7f5155ef3ab043a0ec9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
