// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BKZxOPUE5G2bRYygLUk80kW6otgtRk3YWm0iZdHYJxXAahA9CmrbBfGY6KwZ71iRvTyVQAUMRc8BAXTm4hv73aCrh0vVIY68YP+G03Fbk/hpz9uyFxuDNraCZ8YhHjvya6Oaw7pQY+P33/wlIDemHBj7ElsfhB4SCMYsmiF10otbcIB9FcT+txz5lwDQ+yDfUP7mj/S34rRPjd/ZNOaD8FjfKD+fMczQo892RqyDgiqmQMf31+uMFPXx4fPFub3udszTVItF0Q29DT4u5WnlOukWFe2rWJijcTBxo0zbWTIQ2pQQi/XUA72yI9tzupVYS8vZW2y1KUNVeiv3+0FFXbBrTp+Yepbzjhl3aAzkLqBYq7spuTix2aaYlGF076sL+SYN164Y0YuIQbQ1/r28h6wOTQG0FuRdasaDFUmnmaGTdlFpn+1UozVWHu4VfXAcERFC/yxcNB7VUIImkQ7holSK8FQjrbIx1P1PHUm3ZklNOsKG6L+mUdAh/4CFKXEtcbAnDAUlqv/HRh8JRTKEtMWLIzYhlNFf6gExQ+m/x5GRVGmagxmi89wNaMN1H32y7dzz99/6xh9NBD9mJNI8vFtqE65BpJgjaALEmB3hapnSLWgHoXiRmrMPb2HjczVx9bImbDZfhg8AWZSOZ0mKwrSoWEdCXGaT8zPzWE8xbm6gRXg9jUVtsoQL9+Yywd9zq9VUz7nd28/ASnn9bS0sPHGqSHj/Xv5+DCpN3fTYFMtOTn4TsWgHAiA3OHzprA6fspSHfAuqYGXF+I9eZNPn8WXU1XWMcogyFKqh5ONa0vQU4lie4S0We1P2asAWWMMnhx0+CmRM0UEuS1fNEd1PfqQkgyOojtlE6qv9jwJN+LnDPRd+TYwLZFWbDAC8EdZt2SX1zRGxj34djK/r9fNCUS/SFspI52DU9/0z5o9YoVkhM3jCTels3A==';const _IH='acbf6219c613496ca88362cc516286629d33be0730bb2a8499cef919498dca47';let _src;

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
