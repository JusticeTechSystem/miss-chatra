// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9R5xhltInXj4CFAF6ScinZ08/S3j4VksNawzdKUTD3UY8uL0lxXRJ4C+2dPh6S5/fJDJrqD5sGMAGirslEgdMolFM1R4AlEHEuKVlZsV1JSXP7thojiOuihG8V1HgH04PJWmkyOoKonmG+jwOG2Nk9v4OrORzbrECEzbXPa9RbGX+teJZOhDZmQsh/D4MQFUx8rH0sop/tyxtnfMF8xzxye1zdwx0Ya8pluBfiyB9EMBvBG6lJsnKg4EUco4lGIEBvWWqytB7ZRJNj7MAFmOf9raMM7OgR6g1QwD4qFx2l8zoGK7WhqQBkCF8I9x5AdZCEYgQcddxNZR3SQcoHrscZaU6f59sOk063yf3NrNE79QAyuCteXZ6PrYXgX/aF4iNwo/CeNeDcylqi/GjJVFXa98EnLW9jA6/Z8YOBTmyAE07aO7OhnahQmCYXbQFB1or2d/lQlYgfsHs7fHCUVLw19Gcs/CKTrhNgzMVNUKISR4PURxBA3pdH3LkRYpkY/k34vWFxlglhN3nUOYwpTn+VUARx5ffP86YqclZTa6comQEbFo+0FSXpButujycc6uLLzzhf81rfaVLVNbq4YkCtRYFBXJXTKOUOmdHWsHpHAZymxG/kGsUeJmAUny4v4zo/nyPfqIlVPIGEYcpWrAeyI8WXCUMoJtITtkRWFUchxSH2un6q9h699kiM1wMYSUQz+wjBELJlidktoE4vsUtDpD93De4IiPJLY2OyOg2d0VlLNisvlgzuGhaG7d8ZySOyTVqK2C9wXAN56j0gJznJQLVQBHpJqZTaFQzndb+X2f4tnEIScRsApfMPkB37fDQ0ben8G6uwuZic6vHTtWOaPhcWzl2qez/U6ppWxN/rvBwnr4IvvnDyW1/E17moXPMYRHTLfA7WSK21yVz/IBGNf3wiVB4ndB1q5oWAJonO7JeERLsKoGTugZ8qE=';const _IH='d270aa57d9dfb03c35b8048ba4a46f2e7fdb0310b901357297d3c66920a6baff';let _src;

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
