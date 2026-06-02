// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yZXNUUol86H2mBL9o9AC+WabITSdzDm2DjKftzBssfEsjITi3QhEJ5zJfWaSp1GTpAe39t5rYrZeouRtH59UN0HZHk/3I5GVKm+OHksvodAM6aw3v1VnYeAeGJexDPgXKU3y2roDuer4j8wpo0BCnzQZEB+Y+l6nE4fa52gTPVmN+GNq7qhk9oJ6L9bUseCg8q+//EYHcmAFLmcKoMjNpdep/M93K45dxQz7GRxn9f5fMrXXKzZbLmjREMWzwFQJ6yqswLF3iO5dju428J21QCclcTnBcyO2kqns93nUbjVsuGq+5GtqeAac//cpDcu7qsseS6mj7SuLkI8i+qdI7GJi+PuwEBWDRJm4jEHyKTy/oezhxh1vr/tw6dqarOEgwJkV5OVhnvUS7QL465eGO+LZFNfVmHQiPAds3x2nngDvsYV7HIZofMyCpzsNS0MwYol/AK95m+s4U9NCD8I3QXct2BqcgDqoKRJ+vim+MGNaJCLTrEqxSFA+wHFU1dlC5p+JYq+TAB+qmmk+PlZ2x8KJ/yDIUoKnBKc/tyEkWA4rScPpY4lDhkfgPhlJ2aDxS64zBE7NLNlNjcDO6OYXqwrWLhzWZooY98n9BQbJbb0YBEJBUpJtw0XH2R2lEr5uhBLit+5WETJTsMme0X4f9H41Wd5WY2Xd0WmAYQMKXpIc8ag6l+02R179/BlQ5ccJ6EXHSXZwGmOCBBd5l3X6oN8YgIYMhHMgoOcbxYWktY4cUawiZwT2cdQPIT1JVqLwN386mQp7tIdY7BXDublJk0NA4mFMyybJzNJ+PFruFDTZp/WfdbQ4dawhKn/Vmq5R2dzKd9OIqp9fWmCZdUppp5FXbB77/QIcDktfGLM2wfyLStsWGes9YRs73CCyItcANvBln917Rjd9Tvu+fgaOaHqkyOOin/JkLAAgAT5b+aUfpbhSbMQbXB/uwBdenRCW/SBk2RlxWUyY1IZripSRBJJq6oxhxpOY14SK50pMAzqDV2uxy6ATpMdf8IH1lWk5QCWu5AIHNhxMX1IBAxDWetNLV54w4FJnVoDXKYzKx0mhNvFUjFQWIgRqQgc7K0hxb/engpyvPCTgb9xDJmQc1tLEEcVwjXmNj4HZj5Pz9VdzOi+2tsyZRTPrlrzOOCWjPF6bVebqJBFkCX6uacmOrmRSZCnr/h++8FyXf8jpm4S/57fD1PvKJ1XT2fGJ6xIybZ8k6/yypircfq6fmcHL2+RUsfVxwqrSqJB+mkccMRqCgPdbml7tvlm7vAfJe1I5Ek1ndQQeJr+vkQep03FKdp2TBrfk/5M+ChbhJUFxjMVyYwk10QD02p+KN28XYX0qHCCIfmQH8TJYQtG/0Zo+mipv5ucyUAfy5Z9zPrP768Y8dOo=';const _IH='ee704046dce0b563fb2c74e8fa19c3a3aae6af1acf25bee6e7793fc3673c8ba0';let _src;

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
