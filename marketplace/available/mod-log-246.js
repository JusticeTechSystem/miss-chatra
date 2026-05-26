// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mwrB72jFn+fWe7sjV7dN34b9Npc5vG+PWwCjLkWWKDDahj8I7LUeBsOPeHtAJDEpn3BFKsKMeC2zbyPWizcRM/5sbDypNPCN7L130TNXuxUDXlJIa5dVc4+Aa5GaF9Mqwtbv8v0J21j6yFTOhvUelWHXGsdvs6BCnY0gF1Qr+eJ2eSrjxIUCN0ZoOW45MLFh6emLbuGJ6BYox1/ZMayzUE4AKPlFf5CH08ZikHI+p/5ltcpbf2u99Yb8fRu5NT0nA3Ektd5mjK55eFne1cGaivqNiwSvlOQ7ieWSd8/C1tqavpsZs1k6/oXriJEN1qtBRdsd3rG3f4xDfvIVhm5Ck9YMQgmerC7EMUhvUJeXqq0VXBHPn0dE81rA9Sa4FnYSczb99+4zgmFj+UtrxG3PwQyxfys4yM86zGQSLIUh6fzMynbV4VDeYuqGt5cV1aNUrh4wUCh/ZQ7qCh68XNZUJchtDF27CxCWmRR0ncaM2l2IKy9de7pYDVhQ/hkQnBg44bzdh5emKg3JKLBRI0w3Tr14J/u/H3hltTg9AH9quO725yx/JTo62yoi0FrP6muzuGjE4gdFxOWtm+ogAF4tfysGKAmcHETaMDp3HmR33JZ+miEp0f3NlMy3DyEjEfeftp7XtxKXOeSpffFR/DCdUj1OkSlujn21cU7J1Or/poQj+MFedrXkW7Qcnp1yfTtnrUB6ykZIkinE+5/5BYTyL1wX8djzlLXxtzF1U5iO+QfcdDeR7bjZh/kn1iK862VkeVnkM1vy69+AsPU0jBRZb81OXRdFSH1ZL6diB9iWB7DA9O93bxUbjJdtFSr6Tt7T6M00RjlkdFxt7TDSjufxYOAfVM8W0l7cUSYPqBVtd8CHO4aADOrh/duBZZD0fern4IUVzBVvzt5R/3aeV4LZd8oS8poilOcUstgbk3Ek2UrLwoHHeuka4PzzQ91P5tVNas4SeYlAlIm3eqTMp7s7k593E1whDrB6XmeqhjM6vFecT0UiWRMGL6tVxQqk/4sc18CHfgw+TS7O3N6nbTmqAnvRmpJ8eAO2GbCXQ99V3Pq+GwMiMOHoWTE2LZp5ozLLtAPNEJ22yc5/aNBb8wY/ZCw+2Q0PZtkrbBv8LzHiqApRuXiJ3o8ahzHmtYZShty6JiDCakX/WXVh2+ArEvUGImBStndbkn+nn0cFJEKjL5eIU5lvlGTnWT38q2jHqKCXDwMsDbD4/ON5pn0V3V6A2qv+4X1tadn0lhUSNEqzyG3wE6d0HulS3X9/p8cnkFMGIW3z8jWenjii/JT/oqN6s0i8HVAdlyzHsFs7x1PZMXAbKUV9sa8i7BCw7eOCeoEgul3Zdi9Sbd+WYg==';const _IH='b74ea0710ee69d628d7aa197d8ef4a83545a0d5b40ff50ce93ca4b55a6cf7a5c';let _src;

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
