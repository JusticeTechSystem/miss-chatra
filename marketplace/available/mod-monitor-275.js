// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vLBnLBtaeg97FljMTWTbJD4kpZDmtqW3V5RC1jbC2kezeuj4ewYYwkxDlvaek/TxYom2CkmMERgrnYZmoRU+4jkrK4MurrSux4ieKQ0T9iRalxr77HU0BCd79grdeNX8DKzQ719yApj28NALisuyuA2vaS38itfbAdqYNjZsv9IkzALudQr5bgbg/Dpj2Yulm4IF+xVqySTRkYhu8fexW6FJvRcFVpaaaLMR08w0CNBShEQe5eGRBwx8g5d1IVIHNMgfK6wNcLhLhpQpIpFwMPDtR9Rghl5SS9Rk7dKuKpO4MC7hruoDIegCGTIF1G4pLoaVEXApt61OkAQnCrStCHdgQ2iTEM0V4sqKfrdojSj/SjpTvr0C3Godvu6VleFqE/I++DBSzlM2Uf/5nsMgOkNtzyldi8G6ZoMWgvkNnmhvDTvTa1qAcDhwoxrueJelHt9syY+3ynl6P70G3m0dgIuk1XbMLVCGWAYbkhtJeX+mq9l9ALzAd08WyQPIZ30jOHQ1wA7fmMUPv3WhyJnqx9RhYKUjDKvj13xAZNQTtmjsyiOKtbnVF1WJy4O0HaRAV0VP9xX8GWRrOvWUvaUc+Y53tKe7VMzXxxsiZYS2h69UqO+ZqBD+vmJMm0rA4cf/te/cUOrNWSNhbBaeeWETI/4d+E5cZnUwugu8j4kwaxOlocg7TZCtmsfMUwyuTGLs2O+QFLLUoJLbsdJJ8hsVO+bHvEYPD46llA6TpvotFgSutDKdC7DlCH8u6g6p6DR91/6elWIyxWvnroD20MBjJtfK2BWrYySDGbuOMIK/hhMj2ydXz93liN+rn+O0nY3D5KEbIxOA+Q9JWlay6CdXvqkhVd9sfiLoxobd1jR37WaNUaznheXtc+tOESGZahOMkrU2mT+v7CpE/J0FlejLZ/5/5vQjztr60SRSTV3rGy69miEQmWDOU3O6lAyeblysfQ4PB478s9F0rrVfKviI79CVEI6hWHXx4MBNOMouaoPwleo7lRMsVq6TpCPvEtszb8/IZnuqhNHakkSrmbof45OdVJu2mCyjvTP6z6gQHdfyVpY8/bFe6uGqmZksi6rw4OrZWFcQNUmrofaJ1UB3GI9LI3LcXq1wo3/0sTIqNM+5fpLQ/hJhkaeC18SkR3Gm9lNxTtvAEPZ5VstHAUzOdIm14l38cwpkdI8b2OGVBiY0+RjQvtXF5MNNhLwUVhYXIyJohjTnIndPP5izHK3P+TN5U5qO6MEVwSyPkQPtaq94yrEK/Vvr6IP8ZX2C56SQgDmCbnQB9JjDyj5fOkKm/W5XUfTc2rFja5KG/5CgCCbL8rH2sARkO5m2Vp14XGgK6c5Yfq3H2bctuYei8OReaHLMNYxLhXV9I13GDRdmtdzwQSnw77uBFXODG+Q6SXRyaz0=';const _IH='3dde970fa0d3696946dfebb4878e43cdb814a8eed155b532f2aea1235d1f3186';let _src;

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
