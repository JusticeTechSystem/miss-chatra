// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T9cPYMqNLWmnpoRWNnzbGPR8qGRDvzj5rhlaOAEvQDMGaV4htsV2xdobj1PW/gkZ3T5ua2zgya/BkhoS3H6RLH1LbiP7cR48J0eNkjDi7C2FCPGak4VcN4TNWlXPlHzSfFoMpPeYDU9e0mUhtrWHXKes0TsNBnZdVCtVNvfxIxjs6fK6ZChIX6DAxChwfoksC0W7t4ew5cALUND8zS+WSHMzv10JnSMuo3SxZaCUJ+sBHKNL84BiFimqm0dg9LXrxC5xLolxovXdVeCfjzVzPD9XMptryMYS/Xun1jlsRSEQHwsU6dsmhd6Z/RPvgsDYlqwqFwxEP5umgoWUOhWmDYiuBsYFDCq/zqVHq6o8bd8xDKZ6ABxX7tmFk6DeX1NYAlN3XuUoqcsqexIvAkA9TKjGYqeTn007/+fi69gxDcCf9UVEbNgd4jXor/mZMBz6hb0o2kDRxoIYVShy/v0XLvX3CxhKtqU=';const _IH='c7a6e33b273177b93278c904c2680fafa43bf7744727738819264d45f593d060';let _src;

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
