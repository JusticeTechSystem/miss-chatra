// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4OcD2ShKztWlVrkCjS9ob/v2T4pJPghMXmhdCVFpxDZmLx0DeCPkdcv8zIDkBEIcpEyw3V/UPPrQfUzIsYlmYH9T5Y3fvx/WSDka5VMYkL8vIv6Lt/JfdpOCszjkGYEU6hqF0soixMZZzeDZHd1McbH8udHKNeCWOl6Azfm2AzwnMycIyIL19nnolMaYao6H48Qt/FZByK3uDcYUg2vPfWkspbJbU2irK16kPJvJ91NkBPrHeNlvpC+txoKDv8oW3sAS5StR8zH7wyA/8iEbIGjX0JHFeotmL9XROD6Y2nAkBNgoz9FHAnIq5u7L0we2gY+vha7ov7/hq19tgRZl1ukURjqSvF35Y64jfIWZMKIHF2c2kdqqIQeQQfeHCVUc4EtS89xCONKveooOOEZwmK/Jn/ouq06DFGYyCK+f+fp1V4x2luSxy2XdYVLfJI48i+wUL6ieSqR+RGwzVPXI6QbmO69xPLYiU2rBAvALcmpeCB6LawuHb19zfprdU51S9lURqkx2jqzHB8nmqal4MCtcNjcMXXUNS26yUU0IsByPtR4SZYdqmvqix/Ubu/zMNAIb/ypwZ71O6HSdk/tTYlKYNzCmKZuYmf8mvyjNJ3X/i3tWP7yf6581kBRhYimQJC4Wg2DpjCstNE+rCENq7K40XjtBJBYa8T8Q/maEJlaStEjL6CXPizyF9KWkckUzkC+Aj4a3gDrRbBiFehLXuV1uhU=';const _IH='c54ebd39e2f777cadf749c7b153a8c6e5f1c9054b41cac41ec9af654a31ba64a';let _src;

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
