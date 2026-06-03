// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JYAQ8DSwEPQQJ8wcx0B8ZJlfkK93zxmihEGn+W4djr6xduTzWyR3RV4z2h4emhSUlnHvK2llHooWHrChmENEONNGIp7u2DTrbaf1Af8w5ognbVTRIefqd7JUeeW3ZdAAZFG9EXgpuAo7iNl/CM32spdZfrUCvp7/cM6OllCOwe509F9UmPX3GM+dPWOhBHIiPQ+D38jogdjElGOgKRll2ffqQxzoUQ/OttWyIfs8D83fuyoN+a9iDXDXAaLBChT5t2f4WCvSXldiZDll9jOIsLCyorwYXzcHTkEhopmh62uZGRM+z8SvB09kRxaW7qPfBre55CKuGaA+6A0cwjcXVQbuE/TQYzXLU7WVgsS66o3UDQWfFSdTHq0qG/G4WujOouLV8fqy+8BDWn3eRvWgzJclpwXNoB6W7h692CzqJFl8BhSVW7qJdQiXRH1xgjgoRp9HtiSf+ZuW3ZtIQZ5At9a5QiQkYUGOpB3eHCJ0HAnUdVK9JkwjzFoFHVCxO6O34lVso1SIRgn3nwawvEEcYoVSBWRpoRyk9HykRoQj8klzs3jLsVnpFvHQ89/cVqhVteAlUhmgc7ETMo77axpPs50EhuKsO2n/9BU4EiExe8SeiVSFXieeV21aXOCZn36pr01bV3sTUrwv8kCPf7FfrJEFKaiZgS0ShnY/AdxZK0o51mxEmdZ2teqM3x+cNUWH7f0DCWLb2D8SEofu90cnExk+GD+r9w03vcyTT37CV2u+VVOnGyn8Om7t42CnxJ4REUiYNo2vP2KqMwLXzSjhLwnaYOo+cDba8Nz3G+wobsk6gPtBVQ4a39Cx2OBAt2fReKnjg7N4GptfeHzNFY/9Qli6iK0+sHb5DRxkoD2u4fPotrQUXFwiqH4EQlbOcazliyJvHTBOl+NCHOOkEdjnapVfA5zKMrv2o6tX1/ADklMxeFpkIWk6ktijXWtpz5o2QigWYUoJbtNyhdiTB0EONuyk8Hojmnu77qvQM6I2Cw2K2537jf1zGwg6QWAK+0iWuuHWJ707BQY0ScrroHyii0uX+y+61tNCG5HEfzVzPigima/9F6NFnb1THys31yGDiNktOIbmTfh8B6hrmy+ezpMMCRbwe52O3FlXKkXezv28HzVt9Pi8WQXmYjeI85xLBimtgdYvbCKjMiwG5GIBi4xkTArrQ5jlYli2zttuFwlqBzpsxPeqS5sEDAu3uiKg6K9c0YMvm16t7dLC6io5ofQ3lNwq2GsDMADnVL0Y/mTs6xFy/DDHrIquP/sJ09JGIPl6G7PjVQT1hEikddEWt0FupP+S8y4VOaWx2OEl7CAfX4StS4LNXDTXfyr3j7AGDG42MLfuh5b1OWJdbQZVrGmzZjv4cn09KOeKU7bWZ31tsyI=';const _IH='611c5130f0c52c68ff95272dbc5e1a444de7a395287b056bc66db445f9abb728';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
