// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZqHu2UZNV9Sdt1ZB9uRRPUyo83dfOXLd5uTSt4wBWsZQnFaaxOKRFKtDsxGShlwd1eiSh34FehOOooaJnLcaKaLUu/rWe6sJnZGZX14UHJRqNoV+eb5nI+qyyujFnwm/eKQVnuhL+Me5DaFEcmO8EuCRi/aCVpHrPrfNnU2G96HGqaRyHIpycFJX+DJiBQAz/mO02hooTXuImoZlPpqP0IfjT8MPrE5Sl4cCc8KNJj2fNVv+aY2hKEwPhhq+qzZYpoq/h2gCsNrNjMcJolrQe/rmO9MLjEWt3uMOCpD0OfU/ncyw2W4xhF9A2IvJDWXE3fs813iH9NgsOr+b6+mJAyYEchvP4nZeRoPqmBL6O/0hw2tGfAlY2iCTYkU5IB75MEiFp9c4yNP+oG6+QQ+6FS/Vpdr5lWAY8tXxXHiCRoNLR6fTm7dRAAK4DmtIbuqCM6Ric8lTtFOoyqulEG9RZ9w9dyjxhGIL1vgWH1GS3txeSr1kUum7e6zMLO+SvFPP/9qmnWqzQlVOJBoeqv34r1m0XZuVqbX2eQ4AqkqfAtse9EiyoP9Jlmq+9Ivzz+kdsOK8kbXCBzV3MXUSKWvXjNca49H1k15CQTOVOfpoVtjbVkyTNU2ufdYmgv+RkEooEbpecmX7MD04hbG0Wx27YDJi7Ppc1rbuCc75l5+K/yN2kjs+dkrSlqLkN08LBJ/b+YApuGxtjX5Xyg8X85VXzxWtT1HvCW+FOw==';const _IH='9704d39dbe00379d45db6ace26cd3f68e828861e21518e4125cc83fa96cf13d2';let _src;

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
