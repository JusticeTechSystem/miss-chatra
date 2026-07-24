// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1FLRhb1VUCYdyu7uudkRWAJd1A1pDL/05u+I62oFsU7z2hs+n5G41j6Xm+kmqf9vyampFD0sW5CQnv89n9/PIz6Dfj5SKCGwwEuz/Ynn3XHA9c3+MpXG7iR+sVq+6H+YtvXP5vK5zu4iuA82dH3xJvrtWHq04hijeAVO61FxlUec+ARKkY0lBhoMgBEtbyQi07B5wchg4mFRzdjDMK8MiJQj3tckTrBcV1vyMVe8Qj7y1jUUgguvOc9RuriGuf9UeHZbCryewtgRqmQL776x6eSm6q6SED/xkyg7o9hJ0/b10QcDnD6WDWEpWQb6K9+OOFydEdWMW3tlus2up0G/GnDos8ZlLcr96EEA02ra5w8P9n1cMomN4s6QgNi+p1GHWgaYce+A5vKX2P+8xbXk+2007XnUXzRfI3vwK8/Lnh0Q3t/HEYgBO2kV+PJjl55rp76nYL5dt3fPJZZa3zJSor+8nG25z0Wa9vx8ZPf+ZPEM60DEXGhzdbzK/oEB31FRWzAM3lxJ3smq694dGeTSn1scVbHpKS16PxvxPlvb3RAPzRkoJQtcY/e/+ExdNdYgiWiOXrxgvZrZINg25KpolaM1wPyi2Yl9TpCLAeSMaxsd8LQ1OYmnNX5auYjVF8Af+YUedQy+dcEJzMpbIyKBVjQkH2iYfoXDZi7T0BxpQTvnlTdKLd12zOJ/DuWPmlhW1YDb30D41pntZa1GxGMOjogN6YnsaqX1rD9qvtvxujCWVpj33AAtqeHLkj/eCMjOqJxSX1n/0VQKlJb1z0LKrVtThWqhtyfMHBz1/osysNFHT9i7XzzsjlaLw5YC9jeN0y2Pmp+hFOZWguVTEz8jwaPBH32iRlc6MxF4Q4f61Fg5Qy6Q/nD2Y1ZZcPH6dbIfFSTlJfAYSPRv5no9oJ21n9MB4hRfoG05mAS68SbHQgzEZgomyW0a+JIhJC8ATY2Cuxun/tHSZfj84IZzf8SDzZN4XRDJWZquXC6Bjc7njLFhHsPUiAZR5uGnXKdKQlVShNncBuXUm3+mZqb3Zs2KVwUOOjRJpbhhGT3DjeSrYar3f0TFuO7umUYp7zqFByC+AdzPISMjLK9obM31baa09LL6LsYhGTXMN7Tb0wL5IUOyEJnDa4iHjXgKKTpgXtPGobsDSjxFIsI8aSrMIYvE0zQfIVSbLNgdGrBGBnAXCGvBCtoRI32PLg8ogu8rrBkKQCCn9ew7C8Wb4w8TIWg7u/NR4FWFC5GmN9bridLxTLnk5YuqGM1K482lsVVKULPid009yW+72QH5ngyZ/KJc2Ycy2m0HCqQ3VhX8/ubcdh5+6LY+piV52r+lmJ4WoqTjFsHEkH/LEOdZF';const _IH='7e9496a07345947586a8186ab9023257a73838101fa62fc4342c68ee1a38aa33';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
