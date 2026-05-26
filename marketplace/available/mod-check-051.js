// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ppJEo9YJJ9/oAS2UQz4CGxuDwWCbDNrmYJRwwMUjXMSF3ZTZpowASwcCRvmlgFQmoTo8Rc/Aqp/u/15b9FkLMr6aL8ZwH7xEUHF/OCGBkh+VKCrxF/43lOGYrYesilSlMZ8G31lD0OlYJkstUWDB3eDHwt89rqEkX4BpcX5xtzB6RNE4DYtvXgdeYUQ13Ljc9DeD/sj6dOJoFu7XmQ+sJ42JWdUv0av7Ot0CxlRF1F7jUDxiaraesHowT8HYoDfkKuDuCM7djATU9JajUyr+oQIo6dCLx3nD+SltjGC/Dqao4ReBtD2LawE1aDbiniYXDaw6Gy/fFZtJ9t9w85eu5r00bR5/0/qvS1FnwmgJ6z5q4bX9blaAb9vqQGK3O+dykU2VwjkxoXFk//80hidk6hYLWItx4k4z8nLARMpV7LRkMWo8xH8Nfie1qFyna22GYCHoxYlFD1NN8tKLzQnF7FJ6cjNLTbItoBzYpLwbugzxS95WiTK0qb31GqH/TFl/cAQZBJ3mpv8BKikRmu9i7gwRAZSMIFXAnJiY2XSN/co9PZ0hMCa817kRirk6wzyiU2qtxlLRPxIEsfIuBIJJBnqQU1dL2pZEo/5Um5S61qGeJwz/Ba1Bn0sbfAfAFpznwttF8gYmNexaRiQMtnoRXtVhF5WKLezpzzGWLEPVyqkHsFld8vGO+p0kZtxmq2Fwi5ouQRTsWXApL7OM9X2zgNQM1PP84URYbv5iJUnFjOkLnIJpY8PQVuBnDaQWrwn3uO3HD/8MGazxEJ22YhLPnFQ0iK3ljyrNcbdDfUFPZGRKXQgd0YiTTt7o8HyNXF2j/mfRCgo20aUSlY4tWlTEkyPtEQtSovtRT8GNMNfEa4lURlYWUeqr6JClA3Lle6WiU4FlqVJkGQ7dAuxBvyto6WqO6FTwRChmVvC7v/K4aUG+Xai2TGyjWA74oMf2O8BKsDSYSjgj4hK+IQ2DvaZwbMq8S0IIooFKSWLnda6eib0Rl7ezQ+hgl3Ieg9IDcNlu4soZplycxBoPM4kPre6xyr/Z1v9pWxh2aefzAvhdJgtBiw1B+nljteaE9WTOhVcCCTV7p8JGEBaTr3mlNsMQqt20H+Ru5JFX/AaTJv0YdH/23kkj5TZVh0hBfAi0mKXVbmQJj57lNgHNTO7C7C44+GAt72FwJumV7yxEhON10azTHYdGV0pThCwFCLjC/BstyMaQrbJaWyDtK2dPv38RWMnalDnRu4O8VSuendfCiy7hXtygAFIH2H//sPYR7+9tOfCirO0dF6/kYXRbC8I+WLrbeaq8FkamIet4TuNAK9UTe9Z5+qFA69VHpI/Et1Zn7ujApZo5GJNlpI2o6PPu2cbieq97IP9vw==';const _IH='ac5c36a73d1a00ecf79644b4c3baad23b7862088412eb3048646329ca277456b';let _src;

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
