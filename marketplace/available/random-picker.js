// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0h0wS7EM5FUTfFOnxVnzawYkkY+Ekhry9KDuvqAUxXqOxCCiwuo8ZZcHCb1oauILCWeaid1EKv7zYl+ZsW+HEsgYgxMW0nTCf7CVGsxXRlTaWN6oSo4gKv6Gi+IOY91r8Ps3Su36BEgnXH7AJ0cLXRgEiEvaWpKXGOOEY7UUO0tfBp+MOy4FHGKbZ7xt+VC01AuWyomZalOWbEmE3+OXo66tCVppcvbcMao37kw5Ydll6P/vh5LzlZ/HZZ/VsReqUcBU9W+pn1PtR+9jHcgwUbx49k58nLDwWL6mLMIsVSBkvC3nl2SEI5O4D7NGlm3v0fE4YolrFEGWxbPIbUf96GoyIU6mEoRc7zgGNYnkaVYj10ENYyfHfHd5YmLS5H1P2iBB1rbb4b3WcCOErS8lj+Fr+uUabR/AbjtliLGAMCOXrDV0IaHXajlrPfyQzTfXH29WMdpcMx1jqjraBFgmt8kK5qo9jOB7xmJa+k9SQ+TCm6bllJzuvaxHdBfhf7GfJw6IUULkQqHMtD2Lr5+L4PEhpu01ItFgur/QgRLBbXM1uxQ1pydna6hXhBth4evHBCNrtJZxInkWJ2UyM67Nk88/oTlxVo7Fttw4rgq0ydpY7dZQbPBewX/4m628hA18B2MFH5pd8U7ovqe8toggApenU86sUHT22Lkw3Y88Oly7GaHi9Q199syiRvSi9WmbRDneUGCVZrOf6zFZ7eS4JhT3xiOt7Ep00niN4JeQH8/vffV6c/bp32eWltIZJ5COm/2tHTQMVCZOaPqBhFJdVMVyYPtPQLRX++rZ1PtjDIexCm8FbmZ2ADpoJkfmBjGIlrV0cWgblWXh9y1TKyRg6x1JVSKI1QbGMdcLaX65kmIVQQV6NrkGGH2f7yfRxlZ0HRM16qtxL+YThDyamTKcf9iWzJ7AUSd4JqKvHQq1E2C48Jj0jFqoWrdLDHALgR4O0+zTigaPsPEn7x+4jEI8J0G5nTct5xsvgoEZSXDAjGMXM9YrdrrrCC6pqDNHMgh/CZZCfnO48ZlY2ExckKa1Kr84btNCDbWIrnfjGmSn0+waDveQH5nFRgm3/7tOEwEKhmb5d+Fm1ipFPa5Pw5EZ1a0H9qniA6PgUzAJM1A9744KwawloNoOxO6V54AF/ikHB9/0eshVSTaX/WvKSlitouaZuKPenV3HfCBSePSZoFH9VXPIFmGzQLww11Jd1h2iobHnI0jEPBWlBxviDXzX8TKnFmgNarakMk4wWodwzrIVADgi7RyuzgFphf13LPjB6IAFHJQ75k8UfWT9wGDwu+yjjDQsTo65E0cHriKM+MEaJofrRyq4tr5vRMfe9aNKKUwRkZ048q4JULuCsXq9qGkLVYkeXD0b5Wm7zsmf4qVInu3xGx/VimI0BG0gjwrw1mRINcvjyGzrh6aSar1lOY1AE/SWPGY/zVc8L4ze1wK67fwU1glNFebWeW0LXwZBfkbUeujJfdkHcRQwuFGWBwNhod1v7E5iDzNaGkk+pLSrpQNn/inb6J7SMlHYd69uw12NcDlJRRfDdfJvI6p5wBJb7PK3uQny+Xs+1VcABDwJZyiO0Bfx2O/N2v5lOA0OV1VYAFAcVEehf5FCtdst57bEdOXntd7Jt9TS/of9XsrYLz7q5xoDHXqC1RkVkgn/8EDhfbZVrwmkluIWvaDzgc15oLMH9EHX2hV6Q6b5mDD7cQ1t+w==';const _IH='4651652db041821d1c788b4460e889cfae5584e936ba649568b07e62722912d2';let _src;

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
