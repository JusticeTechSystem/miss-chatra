// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSccptNE5CTAbr+umqxIL7UrXY3mrBEyVfpcKGiNjt8pdW2pslFlZHihE6IX6GsxNbJFg+rhygbwCwfNc11niDeskmGxOPQNnRs/S48jo4fij7xulsvhPKTkTzp/3gVbFKLuFO2hxtFnmzmRUE4Af6LHVXh5OLCjAb3Dcnfy8dEvyKC7U45sHyq/8tdBCSXMyCj9IpGMnKdLJ5fOBH5lRlfTSFZVysCbwCkydww6bJj9hBjwGn+Pptos56njkl4hNclX8Q6JIIjjolk6y013yOqHaMvXjk1usOGDrL5ik1LQo6hia8kBzge7W6SxHOt8l1O5e3ulCQ+xBwDWv4VIvzS1QKYH86o0muPgnXONpOYxdzysVYUXxMC7/GuFO1EsJcKiXGuax0rpmo3W8pkvA40/PkSSrNr5N0iDsPvrsg17xLkvxLXkdTUjJbIgX6WnFJ3ROt5F3dcJ7iFXMp2cDX0e4BqJ1bjlzbvLjx+JZm5Z20ZEoZfQYdaev/YP0GxsHApCX6xqPUaAZ/+eqX80CbJrJU9iskqf3US0iHfDT4By9jKUk0S7yR9AiPwyOjWdb1QywWi3rS2P+ue7YSBaibf1BC89PurE2KktTwGFQ5yP2MCBvbENpneI6YIpijkEHnK3pvjmcpNJkVruku8LjgQkh4vucyRehvXsCGg3+jXaRoI9+Y2HBSYAXnUIRGZIQRNpLPRRTj9zk7lz5W8A8Ry+hD3yT6UbRs0vhImtz4hTMZ+MjskuixxEMtMjzbM651LRL7eSQdpJK0gBEwbykyjTTGZTyzrQ7/fb6UGSZUMtTjZjtmSInvMID9DtFBSl3uAENVh0sO0zOaEbHH5cDqJbImPeApRTahhXL33vw4lmDDzTFng6cv9Lu+KNHn4b2OlnRI1cWv8ONpT504vasAS7NseqM6VmlXmZIJNYfnzNHswHIf7u5k8OOxA/todPICx6S5NXn0q8vjhQvcMIIjH+MYluF+pP0xIDpFDJueclaDZKepXFwO/lvEpoZOI3FbRR1dwfpxjGycbEJEmXXMfmBq2EayI7tGJ8IhMxRVG26I8EEE+I6T28yRmMmM5lqzGr3gBO3s8+FGtk5466u0ShcCmghybd6Ncv1vHwI2UJI7JRLrh2ml4PoLT4UXgZHx1It2w1IU2Q34+Z+A+pkBkpJAjRlU2klufQ5+Jk1wu+Q4O7BZch1lvThSLav4Hx1LJG7Y=';const _IH='a1872a07ef04dc5c9195dc6bcef720d56d56d651dce323e40f606cdac20971f0';let _src;

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
