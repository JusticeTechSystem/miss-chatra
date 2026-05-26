// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCo4nEYVa5FUcw83+qtrj3B0cmp3g/Z5EyLuAAaJN0UbFeaoGVqe0qvaWczf1tSo/AEq5HUW2BkxQgmEtH+taUk9EMsZiJ/f9cK1BZyxR/qgWZsr9BD3y+IL+RfKHazQ7RZLTHdmNaGyXuycNrKr+JVd5MLEWyEa16eLNghXi37fvH+L16hVim6f+gyt0iJFquYm4MQ4pHpI8AV/IckljvmACIo4RNMdtATm2JEGGT/7JwEcptZrLMRV/eBbkhhQUJynNA6D3bj2m0nIoMQQhukkQqqnBFKB0luHtjrLEHzOGpVC34mDbrFg2WElxoMdncBHwAQTpaMNxlEXxlmoOnS94Hro7jMHKZp5fQt9Am5ifPXN5JU0i6TlSkw7o04ycvi52kp+vwEGQXVDR6HBnVyajVD4fKBU1kHsSJmJT8g0+BxoMTCUp+rek/O4OyakE5M1sPm0LTPAeWUvSj/WmA5eiipXRxyOCpJRgqDgYxTTdUlZFpCzXVhTOyAqR/ZSWsoIpFFPBNFVz7QUyq8TQKchrDDpt3cMMmxdpflct9Uti0Fu3MIS0eNocosN7qzN1A8I+OFhoLP9IeRVSmtRWrGKoOgnvGo/KU0xo3tcaaEJQ0NA+g0zQRjOm2OUm/8Hi/rcUX9yhieqkr/eE+ChAAMgqh+5SAn/gG0vRexA9l3wkK9tdcJ4TJYyfQH6trs/AenTEYCbLPBSrItMA1eGvx696mLH06D6thuZIQnOLmorjVpWePwlEm41eLv1DcOMbI+Ln6RnqEGCKj5Bj97eOqZzzQel91vgAECvww1zqxJbFvYTGX4xUGavWG+XWEB4cIn8DLUNEDkSS9Nbx7yv3wKjQN7COxDEO92VsQ2aDmaPQQim58+aZJ1EeAmfVQQ+xxgd5ugNTdzdCz0Uvp2cWcGVrruBe9Qdx2iRQWvXC0C7LjozPZmg4txbxhGL12LbSM/VukG29pLIA1xiknAEeyIb5IDeWmH12q2uueQcB5L+6XbSu3F1EH0+JKzFFe5i5PaTM+HiQcE=';const _IH='272324ce9f9894552371b40179210552ae703fa3afc3db528350074576b3df7d';let _src;

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
