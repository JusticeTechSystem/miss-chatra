// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OF0NBUyVLi0fQIX7Z4Tt9GvKwYA336sWIUFWUMJxBXqEbQA5107ggj5luAAjTQGDveP4nem5Q+XZjXqrXbgava5kk3xf6htzJFUaG3YQjQtRCVAdl+31Gkvip0e3ddh3WEKN/mqY4blpCISPwmqAHnVKYbwEHoumXeEXIpwJm7eY9Rt1s7tAebbWVT8hN2v4n/78pEBG/GL+YFSyi1R7rpco828h9uFSUh2uovBvKSs2uGhQRVa161wNi3tVZ3N9RsIIAcaUA5NpQp6XCThnYM085pUPLJlCpErZjZOgEPmsKvZzAHT2ah+uwFDfY/WX/5M5RzvHEygA1OoDdpeEdh19tMCTai2EKF8TH40j9ujDOpwTQrbEJ7QVzsaHCI2Os/eYsy46c/BZsLmEJziRrU3aWD81eZT9e8wnn0tsne71ezFiAOp9US/t2Xb048C2PVDwMjPQLdpDmKkQPqrx06td9+wpyxIzSm6aWqugN/W4XwINgj/mDqCWZkgOsgsbl67dE+BlfvDNzKlYnnwGN8rjR3hS6EMpTytTqChoUctH7G0ziSLdvAPnKpd/NfGcbbm96Sersi1npHOlZbB9F5GbgXTXubqMEhnnJMg7fyxUVINlo6qB+eMNRh5KFF1btIwsU/QIWDtEuV4m3OE2tlm6EBbrX1bzMgFyhkA8+tvkzNTn8gz0p+7xu2m6JxPZ/T+Gh23CjGtv6/G1Ti75hTJ0bq+dVBoN90tkbmGM1PtEAfDkoYJGAbG3XBG43o4K0Ap8Yf1/FGvGEWyqSQgDw2B2aNTosQRoOl+FPMeerhQ+oazExl7r8sDu6BPtE6GmnS25KHzn2N71CHRdVautdvb4KGXZ7XxOmXaf3IPsUwaWB0g3J0s6L6U3JYIn83ywjNahCq3fSK6x7E61MbnEeFsvWF9NhhAeSuOgSNfJK+ZUL39GoSs5VNa+Y97MQDZ27YQ/1TjBcHxk4TrJtNwQC8ksdNoBIm94ijp0ZFhBJVJ2Ry6bFYfQrJ51lz9x1yYSoQV6LPfFpZHy1VdRvb5fBsAADk8eAyEMt8aLrXzJm1fd+KzKZNh6DPco7DBKYdsr8uobKrGA1LtuoL8D/4IEBsg33mz25azT8XF62DhDbpGIReNPBQFpX+u59G0fDKfQdJKRxwaZazv9ylJT87UGLDj+lMAXvQwuUlXZCbZ+Z/8pa5H1eU2XogiIiwXSwsEW+VgXBieda/azQiRNEdyiXOXnnko1A+PO1ZlbWwsYmo96GESoRyWUjKUVwy0Gw0eTy2E77b/l6hM2n4gLOS6Kn6CoJ6CjfusRYwXcEAXkIV19VsJuTeBkRGIIYJdfsTlaifIgyKxHxVh3fSYDJnzfUjcW4GEw6kJD+z+eikUAVNOqoPiW7c8SqQ==';const _IH='2fd8cac510c07a9c1ddc283a9a88c847065d78d8ee3f8c093df6c160f94a398d';let _src;

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
