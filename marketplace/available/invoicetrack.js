// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0j9XbZZfKiM7JWDAQR8WUI1p5OyuAVATPPs3T6Qa81K0sAaVUtxjG4vP4QWmnHhfiqB8N5KyUl9ziTpC+UCTad5YQJYJbvseNAjd2hN3k5YWqgzn9GNLFQEdcqIZTgyhEf+ICDVZprYJ7hvJAhwLLufCsidSfhh1GLs+n9kNfYYwJwCpjNfyb+mTlNFSeYMDmodWCmSVneCxC5gPyNlUi3F0SffG/0wocvbnxrbock8PDAEM0rPcouomn74zVWZmyRBxY7ii6vVMtvfF47JtU3R1bsuB8KIjC9MZAXOFc1SwAOjlPhG2enHC2w82qvnvjM5pTEuJd2eWFWC5vUPyfxHrpWNGdN/bS8PoUdd2dlHcXbEvqFkPADpVqNYKZAOG20/j14cxJbGvqX0Z1TAppZ+SsDF8gux/t45AcRgIWMMQu4/1BRkShLiDVh3mTW7c3A0VjmjLt3w5ylb4j7/x6c1Gx+6qHqYmDNTvWZZpXwcLgbqZo971yfiy3gZDijhKJcMi946Fyho4o41kViTadEfQclcQwMexJ5aZk0Iy25whE/Eab/mOLGrCWdesqNt16dzXG17v/Vey7C8C3KsdmmYHFeENZ1VpceyloVOP1dqetH6Wcz+1wKUz+M3yNO28Wgu7KiSujFtZn8f+3Nz6z//UeX2Ar4grO0k2Xz0Gf4FYIM/1WdRH5Q+BI3LpFFOWQVPfFl2mko5xDPZ5ri5dYsB2CIX69aCafuBcRczYmMgyzClzyjavPBomrSITBPpttbvj3WxoBKCz0OVKJzIMWZuyN008tRIsJgbnpqE+KtGiwOnCfgXlv4wFEIXyRXqZWA3t419WVOJAxdkaUomAmyM+juYOZQy3CxTOGpSaq9nFMwBI9ZqAUz9Nk4oPJ1BWkZTtux5IF5LXLWccY/kdc/XjxpYsWyCqL8AN25g8ah7s60IQmVXoWAA84+fJMZRzq0mzLEpC0hke1S7buPrB5LOvVKNwesutxYLr1AcUVnas9Yq+dnbLR8sB1D9HDtAvp4Zq5/c1EPTX5XHh8Kq4cay0kZMVbXMrF83PEJlUCG5vXSFMp8KQaihIehjpkunUHWjNItpj3eJrtewAQPZZ82hLqpacsiQ4iaFH1pijqpRx+uXZe9O0g8kVWDVf2uDf/e6fZOHxpWMnOUpX0PleyNRWE31v75o1l4dp2CYq0YgXR8ovHYLmewskeZ1S9J8gcDRDSEgMh1xSygx5rQ==';const _IH='1a6da761191fb9774829866d81cc837ef5b6f178b006598ada07899d076cb2af';let _src;

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
