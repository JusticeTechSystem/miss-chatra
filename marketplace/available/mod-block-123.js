// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='luyPer6rcWHsHwK12cxCp/4Ei6qY55t/okZHFRckbJdGT9goJ9Duu9PmJCcYbi0UEVDtJ9U5wPK3gRM87z2dFoKTfiFvCKk1E5Zx87M02+5Rlvxm+IUuikcssPfTDtGT2DHr/R5qVemmfESWUpHtN1jtDpihJwrx0UJPoY/BA/4lXyHqAeGZJLNFmXLpCCwQd00vZOuR4QDLPXYvxmDM1HOmE5yhtk6UlM3N84TY75Y6GM8KGU9T/MbNEyzU3C16KpcH9w3vhVGwnofIayJGmMBtO4P6diyBs6LvT+TXWf0BxIppd+/yZrxSbaGa9aDD1CJ1IfbD+sSqry/0JYb142GascSRp/u5r9lYdK5ZwJt4rdUqCPsv6wzxovOnJBn/obsCpGCpOeDnl808o05tdEDtm/JliyJQjDJoL+4M2QVyhTbpoK+kEWDa4nvqF8/MragM90b56LjTL/FR4hnV2hhLuhdDDpah6Ca8AwZIc6G6ycDLXvHHBvJS085eBM8jnm8LwTgSvsEQtyRX4YjFpzYxBYh3Np2zJqsy6m/fcx28PEzbXBw5JhekgEb1QpePN8tuaT523EpF8MyZ1bTu0P+hiGOLhKJsxTqVAzAC7YaOwE9pKs+vbpUJYWwI/7rV6ECEP70YpYvlWw3XELdpkCbSBcymUGv5NKA7nQbGP5EvdWBQijf5QQdEkfdMxm+wxJ8NKhhf7nuwqnlVHbOf/dECNAG9TLP6hdsI645OJGKd0qP1/ZLyCMzn6fIG5qpYFS5IE3oIFOXsIfXIY4cOKgVJiClrHS3YqU11GsVdhQxSa4MlvW+W/dzNEMIFDt9F7fmnkBZbIujzoPhdPsFyBFQxBbGuQfjA/7FEg9CoCZLLke+rBH2WUkEQezWWDt7QRsh+AAAoQoFmVabrOfdjzLWUsDiwijbSXOzL9c04BVWL2Xqiny+cgM0iPbiybJL5qzTYUs8rqmHWYi48lQ13f8Bmv35wyDYkrei6Ic3Bc9512u3rJevLznkspZWkTrk7Koy4B7d70swlOmHOKPKB/P1FeNKWEZDVfc2W5IAwMharBy26b4MwHLIHtH3I4TcKqHCe9/Kyx4Uzp/OAVHIhbF1GlAYiZ+XTo/RjnNKFD1ic/VKcFApu22BgEsvGbwNLheoy3WaFqionV8sV1E9tdM+CvLdG3280Sma8fZK02BzlKLbvu+pLhPTzo0ERbaXiit7LNgnU9GSae8/+PEQ9K9msiXa9m792qJz5mmB7Yc7z5t+b93A1tKbtDptBRxr6a+EbrVYR9BjZAd5DsYDqIZMCcOWkpBxQPxINQAGNdX9OUNOwCcCjLIxQttZnpqhqXtBs83lYY4cDqFFobjORRUnGFej2170T8zlPxivg';const _IH='7ab5d35c927d48ca132e2b44740fa837d1b154184a90c8612077be70aded9e7b';let _src;

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
