// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZMFq1vydZmj9vwb7W5raVDEBjAZPYdiTRlPpc2zAQjgkyHKTXQBiL/6kE6Xl+EUsV8k22lTDqx5uxZPtkp+Bwp3zFjbziVAVODGpuTYhJOxMtbznZqcLAYrFa5N0xnhYfm6U9H/xXH6HLRdq2u/CJTijYMoXJlzGdaqFtGuMmpSu8+utUSPuQW+c5dyl8KKvJCsYRk4TDwtB5Z4Nl9P6mzcZ6tD09qeoOccQKjQywqi0J617PPRSqRwtmlXtymEZXqq/k45pif6UqSPBHUA1AElOlxJ0Cte1/fDvXCnRBs2MTGyAUUy8CfxIImLUqLl3IqNRzoSXmJ58N0krL61pJGchdbDx+PQiocajY8jFUnNISqyoXNeQGi1tjkb1UEHNBIS8B3XPJeZu1+fw76ffTwEpQIC8xK54MaJpUWGtmFXLw7B5rXtprtptr5cIbahkWtAWp3w0Mo4IqsY5GMzMGEyXciI20KmPR2j88rxFC7va93Rf22VsXi2eWuba6pkn3B2CWia9riryC0xjzDtwUydTxaVvV2vdLE/KQcrp9XzIDlwBXwus+NAge9zlfx/Kr/gxBWlWy9ZjfFkZRQe6VsTlPxUY4Sic1zecmyIzclbWwcVZ6+ov2PwxX0eikY5pKd+3v9Fx8zaTjHUS/ZXDc/SJToUmFL1OA8EtvXQ9b5T62aELyuMyzcfoToAUhMjr8AQei4sEK2/Rf9aLyINXiVhKgp/TlUAln938WNSr3iwMVZlv14ZyZiHJftr6ncUWR32RSTUi8ib166QZP8X3KNC6xR/eJ+5BB1NwjkaEs1843z98GATTDCZPtjGCjZnFDf7o6KxwS7L+0KErbh9YWi/0NPSYBHBqTDT0ms0XgKmj0RDPjnK8LMYcuQf1KV3YTkglktF4XIyCTZl8AUQcUW7DCDfr+cG3MW+0WHMqyxty3IqKQy4GiGYQ86U7yefhqLPaTdZf+kZicp8jLJMTFj4eeKxHHUiKme1Ow==';const _IH='53ca2410160bc6de91d6f8c718d29dc8870ff0f88fd166e470bcc0899cdd7ed9';let _src;

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
