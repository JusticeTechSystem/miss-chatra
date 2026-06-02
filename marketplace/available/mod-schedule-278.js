// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MWSbBSq3ReddYCJtTsTogvIg7UExKlZ8fxkydL7cvJmLog03KaUmRg83inDtnI4kVnP4x2dDqPQAPfudSitjPuTYSyMt4y9BA1v9sXYf3J3UAk02SnfuI8YZxis7P4acQbtQDpF31CNnntbrvixUXFh/O4FveclvCAtWtbftfPMkMyltLk/3YZI7q+0XDrtlVPYl9t4cLP12Fzh8EjKpWBGZdfzwQJtq48u2JIP60GnTPY4CoC+3x/zbfevB0ljPICHfogMHJuPSytxSVAG3ssjiO27deX9paaxsplZ+ThLh0ZK9sfOHK6rwvM+CkELUTTQ72s5CcrCLWA/QPVJ8+uZepqYD7AE8mqOOZ3XX9mvuCn9UQhqt4UfFHaofXddvIVkj64MqxbOsG8MRfv6WF8Pt2j7meKv5uQKqMNLNKHhZJGPWYEAJES+1NhWdqEwTSQRUudcv0oCUWjSPYlg0LshBfUhFRfdZ2FCt5anSIvRMmd6QVIhxEpRnAjIM1dcUqeThC2ZhRuBWDdUZfUzVGHTM8bqw5asmrhB+Gi9g5G4B3h8l+yz3y5nFTPRlBidYCGR19FSn25v3wgNnZzR5NmW/BzTGCxBTsLt8FHdzycldaVpEIfcEa0ozdLEEoMEjjI7q2hKwCGPlzSh8jb8in985DlS2UmlHIRqtFoC77GOux29P+w/HNQuwvKLHcTsuMeOjWPLfOx0SOXo6zxJstT3ygH6GXDhetuwpNn4Vdhok2CqbZmFh4TuEy2X6iqiL8LmkCL681BdieKLvP/Kh7zeezmo2kk1ZI59wCA13bPZFTPeJMvfsHf29v8yr7VBFHrOu0Qr4dDGAu+61c2uVHO51Iw6lPtcUKV1ej/XTte3rwT18hkCwEionUMwHuBTJ1oQZZWl1ThRnBIUP/XPNhw52KtgI9qcLWK36SISh6YBZhQE0sLxrqyGbG4yoIKgnRJ4uPYQFZpJtkUvlO0j9ZXsCeVgXgp9g930zm3rrEDMI7Xmk3qG2M4iSBrheAmNmgTs2gvvqSPYOxdK4VbTW2gc9pWamNBMSKewLKSTbK595aLqOEzdxUk8uUoNCtisq5+KQcV9ttW8vCjOe66T4tCuo2Gxm5+G5kLzv1ZJGUMWwmlz7q4055cynY2yjnw48ouhJ3+Jmohym44Xe1xL7tPrGP/Fme1JRAdKfNi7iRYB+ERHa49ivQOxLMDed/YQdgYaxh4539EYOXPrwkPhv94/ZJ/rcGCSQdwwnkUK7eiP0/sr30JrP920URjOx/PoWlFW0/35YlRq0Tz7aDS112TQ8W4vR33AEh3p7r7/4DQdf5q+laGpeXZ4sUYcz+IYpPKvYcD3flcRLwvIdZBMj7hYxg1VRWYHgf35g95GX7YHNm7WDC339WeGUXLebQDQR96NW+o+NP6tc+BO2';const _IH='7c4fe2e84b6e1082cf1845d9049bb1a1bbefdadecba51c6a25385197d4614401';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
