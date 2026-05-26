// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MIzdNUaP7ZA74OU2ctBfmVvOm9jNWDtbxet8dyUb0Tudm0JlWxP2F9L4Zk/RTL6nABIW69xofnvhGIyK6+bdyVlV+2CJf2p425Xn1pVejY3KYs02zmrV9/OJCWGRmqK+7rKdJPGbCxao3VYsxHRf73zP6RwqTtYU/6wgALMSX0e1TfXuwIUu4QrROO+H8nj5JRFdEne2giKtosm97zZQteYlYTXbO352UqSNbBAgp3ZuuaqFIo3Iizu0UNU7b5eKspUHa13DBaobKCLcZPJPi+6SGuAIv20tKCS0jTsdXwxH7AlggexWQB2TOe6ejO+kcroFDmgxQ5xrC7fyN110Py2rUudb1rnn7rusNQiMJGFM6trLpOM3OwmAHRxWqbfs/dKoI1VxtgFg15a5IFJZXREaz/FQcd1EupWGAjO5LqiJhgNirosl4YcUhDXkNZPTcojzXmAZ3nrAj9KqG5T/2ORAsrHHhYzPf68LxozxrlRHoXefI/O6BkxWAlOVIQsheiXo/zVj8ePb+c6WA4f2BHDRTw+HQnVpcMOB0fJV4SzsmfU7M26IuTLUEFTGuXEQ2mOlzF7b6GWg1MvrCG+p9TV+DOH4C0Kn9xjhQYUKZx8548yAvyAfz2x3KzGdbDD9hqS1Oc5FfDp+o8ZKUOzqiVO2BmwJZzJ3Kah3GKmq302XuovrAxqc1RtEFPPw7wmma8vYwHQWas07xXzP8FPot7qr4esGiDNj8eaUykWHPz/XsqqniGjy9E0dbwSKq2iR7dACSIcWgxxL8r4+9Gg+PjAqJFIhxINeAQ0MTdhw67ZO+YZxWstfaYGGzTr/xgmfsQRviIcyazgk3xjtCe/FaqC3TPEI0hez6rwBpPTVbyZyrie8wECJ0pOjmoT+03N9M4SxIYrbcu+tehCg4moLg9nD4GDTx0BRGtGGC/lbFWZ103cZ8Zi25DzH8eUMZniRVqMQQTztCTzhD/5h0Wg1HMJwNeUzdMTfQ3ZnxdNZA50ADDR2ZWBgyf8L+z6ysJr9hdLdx21WqP/7NGS8oKE2N2Xt8Bi95AovvxRJymnOWpffUnXyScQcoejDz7UNcX1NSSDrLwoxnTgleIb/qD1/rfdw6XKw5jYnDTd3XXycsobN3S2pGKDgzErCc2KvDsBXEJNaCQ4BW8AG2fHmzW51HbLQpH7yQjzByXCDZJDsU67ZV9mxnWr8OT9pinXmwOPTlBz7gCyOzBmR4wtjITmx5iIJrmEt/jjdPj5NrG1couP5tiya5nC2yix03+i1Mnyby6/pR+bwsxcZBK5ivMmDQ+CyMmBS/HvFU/DREX3bFmS/C/Iz4ANo6S4JciJu+5pLCb2q5Rx07Ev3U7T24tch1ShE55i+ImJs1lJRRPawudn3wWtdC1OD7w==';const _IH='9fe9f9fdc3024a22e4d76e57eb8011fa24391ab0d3e1f88dbfa4508c4ac78727';let _src;

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
