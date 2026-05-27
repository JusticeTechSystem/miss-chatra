// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TVqHHpus5Qoo+zHYHiA+fi7Lvcix8eBkR/lvRRRWBPTgt4yJKJBQcd4W2kBLksjbkN4lTZ73iklcVt+6wArGyBpYVpjruNWH9GDdoX/scuz22vCfNujisaaUZB81XMih6NSvRZyvIvrdi2TG/XKs4HXvKAaSGIHpUJxJHEaU3CbqUS+ogDuygT9JFuWsOlyWQHPf7lXatK4h7RE2LAc5YsViezCiKcG/Oi8uQuS0iUICxI+mIM7/o+4OHD8/lt4+WI09qbOvE9lSu2CPxatCnPM2UaPZ2NxdyAC4lhfWIfAs/FKHiKXO0a/cDPItFsH+YTs5CARX1Pgbl+KAPvXqCqJw88HRn1gSUM9TjEgDmsLSQAi9ZUXCDD3TFF5HxslZkBmg+coIq0W0lpY16yjkdzLdotxcUxJ00EvicpJxZa3rM1UoYWgUjb1dIJKZPCKoE2xf81LRnfM3FXHj34zvbbaazN174MzTKKFeDZFGDL0bgeV1EWJV3/cZz5svloUPJSSUEZ2Jy5iHyUqmFYr2d70N0+1QTBnM0IbyAxmevyHVyPfInz7lLNC+Ghfa4GeYk4kulKkXdlndcYqd1Fkn98jMsSyhp2bimt4JuWJurn3qGzluJwkub4AjhYDKSrC3RclspK+pB+ObVLTBYc1BO/Mz/xpjw+7iKMgcZIzdbpwKZTDUy89h7UfZmuDeDEwnr2c9nAuTIQr4eYmHmhZkA1InNkwtJy2jLukrZ6+QVBtUMlIR8K2TKKQ3teiYZYnD1e5QnuwiWGNyjUYdXRzeBBe7l40teq/W1ioKf1kNtaTuRJXhE1fV8tFihiUk/Ib9hqn91d3avBbZm7JOfTPA0SHxyjukcd9Zjg6Cb3SaLRxnr+XHjn9ZMkpmo4Np1NCMREXXXF1bsVB6na3cctjl9UgDwQJvv/Co+uNyDulXlQjbyDWHc/ziGA7FBdbIY9EaB/xDc9oSxO0LWF1vCJ6vHjKKtokM2pEOEnpOjb1kpo2fQ579Iq6w9U/rlM1CaqitP7qAPmAd7l8ab5NPH8UmvN33tJrzcYCi+OrPxDvsYRnoJ7NGXCfrG0wAO5bE5fJels9kQi0tOui4wI0vLxNw1245X9s+clHpVn+ZEbRZmqCYw6fBTnXhZy+8stjW6aioX+Og9frZ2jP4ERFZIwtPVCb3mQNybiG/eujktrF5bMistxx9D+EvZirdkfDApopYEKRlzoOGDKvNtkTmD8+e';const _IH='e25639764adddc2b664259972086babe4a7c523af6b79570cabe5f3dcbe4dbc4';let _src;

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
