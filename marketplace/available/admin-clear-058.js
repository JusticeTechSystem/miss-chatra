// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cVnjYKBsjeCYGmYejYLGWX+z9+BOH9BRyVG3VhV9cm+6UoHc+QYl6EEL+WEtP+qw353883WYqcTR44PKd5xG7R6R2YL06vSlBkNM1gEB2pcUsgUhNl3ECdehGT3VIki88QKlVdnoNe8ll23uzxCcH1uLNbT0ZNejgUAvfCRPg3495SsS6XEky85rH1WIs8+s+i5FR1+29ri9GYyTclOASezEH1zu4nDCmRG6yQfEkA2hVZoELNiclPJ7eU+3LVx7LufGupbJRDk94XlFaPatVgjqYhQibnPFh+tU6fKaNcKVJXvzFbGmcEGREtTJQsYgc13xjNlcBfv3Fe9HJeEykqA+PmBFOxBdvJk+Wb0gduc/PLGCDRmWzAALUcCWTaR+WJyrT0gygNdBrR05JOznUJCtQdedMjMtBGPgzBp6wFYs0Lua9ZVZ2tpxv4NqH4ffyOyqGFJjKbFNbc95e5QMug7zBITVvAEXEV1nIgthPvBlfA2NySVhswGRfRyDOXlGo3fJWXbe/FoOffN+3SGHroON8bGgIk9HII584mpBE+ZDKz/+hfblpHEPsJe3huQeIycGMRNwqRPEqWgMmZjYo1ZM4GQR4OREtoDovwwmsXEDj2QhRJln4BShNiy+hfdDUpd6dLoAZhQJs8DLYbOLByYowpATLIoDMV7S8cGjeOsXounNAk4ZgBXBEt58Sff8jOWXXF6FgNMkZ6kg6P6QbdPNw1uRlIVo8pPIYD5sq4zdjlUksaFl58RVR0bMvg797iLNzpVAFrDVyI5kwDMHB0XWLmKhuIAkFhyAPdRaN5rmp/ylxAOt1alHd4FZ02iAEftTTIJ0rPWb7iSznUOE1vtu3dPOcfjtfDf/IPvmnCcfk4DmEFsjj+wjvwm9ri+bb9/ksplnWshNYIwnj4FmPgnXkXAr2s+uqVQSjngGz0Nw+Ru2z/rV10AAw1gQDbcFXcTey2wZjUvIyGuclCJdsyS5lLWkImZN6dTTKZ1x7h+A7xiv15s=';const _IH='eb26ffc1ea0381441d9b341f241c9f41a77f0048abeede07d867344f87f19697';let _src;

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
