// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HaqtKyffU2O7BM5pKimaTts6Uvw7ABArZ+fuJmET/WnVlv8tGXUde5Zk14f2NAXgiE4TqfGmmMxGSEvRriB0wBZLNwsM0iCpA10MdozC/KJQCkaxsRama//cDQObQ/sV1LvT0TKfhbYhIlkoEXy+7P5+iyW7uVf16CLNF1iN4HlMF+4C/6r6DKWVqIB69a2s02H68cVWKmrweD91/SoLbfDzxxMg8L3xsxDvQ+ORKJSrNAXZS+J3SfSyZ1+ewD7q3h2viBHe8x79HS9BVbT3K9zdjlrx4omwi63z/yZhE1hkTZkJZw4bCa+efN6t3QPMKxFdmKoUldd62w6zRZT7yk3nzYyuyVke1K1+ml69PhGCn7VV1opBZaLCrlQnxm25xdRcTiETwcO1lUKyzX7e5vICy/gLostGSxwP/cjxjb8RUacWOyLfi2X/u1hzMiXQI2tPpCG3yajjX5ltp+HYEn2ePE5IiuG7rYArQB5VCH620IDlxjsbRwdTVciYoEi5EZqhE2BUi6JKYh1OpdRd27ZdpvwbU+8/E7SDHolvrLKw10tWpL5xQQMSoMOPomnHOu1J00wZBjfxt6NlmBTOKVVslCHVx117/A6j/jl2ds7b3pJRoYNEzG0eywFOtHEdls+vDSr9665Onm9XSnYnuZSgFFNKWN1iWqniotBAKXGUGCgeVfg5VY0Y8lFnocTZp9KwD8BMtAfad8VCakYDEA3d2PncJSqrZAJHASFpcd4q+lcGyUgxQQ/0jNFKdi7qX0VgczO2oDM/DHzXYuiIGkXJL2aDFXaHdM2A2vdy+37Dhml+3RQwKRr0YqKLevTO+eI7UY3rVSe8LQViyJxkMpxnjA5lzSfci75zhJpDEVrXKRm887FkQrBfD4ZOsWHMEFqs6jE1aR805tvvItHyp5QftnnxAuZr3fpFe9MqZXl7/KT+VJSA8kWIkf1gtUXf+MPgaINlQOk66splyZ/RNLWEMOVg0ebfuOSsDCAM77eexGOUVYc=';const _IH='2e521127b163d272d7175ec52579e9649beb9ea4708fddaa9b2cc4154860d668';let _src;

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
