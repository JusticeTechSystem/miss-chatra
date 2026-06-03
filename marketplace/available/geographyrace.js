// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GPZ9Z3/mGnUpibmARash/7J/2I/J4SWJkFg6vXgqu8TzpjXN8fEur4NHX/f1w3nUqrOf9okJBzsTSqUSWRhsjYaK2JLno7Klg1G/8nZFzbOTvmZCZDeZmy+S4GMK1SZcHm8YPbS14E28eFl8vJd+yjSZwyw8YSXceHD3bJ755LHAG2DZRVRisYhLeeWl3MTHeM2G8WmykzUNqW3vFrQqaoQy/Z7ywbtNvea9TmO1GkRHkeUFAp2CRNYNKOoyeJJVGbRs7xYCCsX/CNVmbBScaP1GJFVqY1piSMm06Ofi03s3r4+J3fsn7mvWGG48v/vnQEyz4gBzlXsRaW3hL+azFbQNeiSiKLVsTaBVX4UIZ5mCus49vrD//mxrlN8NJI8YG2mTWh9CRiqwzE3sEbi9I3Fk5nv0bkkksiRMF42t9c3w/2j6YKEs6P83n1ac3NHo91hk7Hvr2nfZdIPcjQY97I+vFaci1Ipe3uCXWTG+jD+P4VIHTUPZYfFtlih1mNENKTtYoiuzX2oz72kPH0QBvP/L0qrXGX0g59fwsrZ+0Ow+XuK23RSGawr14avfVU0X4LFEJXQ0K9PcHKAetqYREPrPUtGWzL+Zoy+cHZUR08fWbwkfhao5z8GJ16LitGfjLTyfGy4E5U2DRITnoqyNCt3BLmKP9ia2rzwHtNh6fte7Gl6DW+CFGyN8VAoYnoOejI7EH8j+1gVgEOg8PotGi7wmrKo+jANuIYCvcRZSLWJI8a6OGe3IGHTYgxPT4sqU0cW3b54DGRmhuwN62kyLtF4ZXGU+yBlBA+l9LucW7TCPjJR2W0g8pjhSO/5CHn/XbBUwHKjXLRsIynwlZkkjQXTRWzGw9s59V44HNyISB48MpHAQr0cssS8J5M5yL0DND+l2jICZ9ydZYzimOx8DjyetTk95oDJ9JhxoO9QQdEALJKCCkyFxEL14weuPJxqTrNv4Jd/yt1vfYjGZIfblmq/YUhgr0uAI21ApUHkf++sqHI0oP8OTA1LZkBGf9brU47uGXvV/28TxG5mNYsTSC14ST+sR2daxuTmks/jWSvYHb/arqgMd9Vcc+Tbmklcud6rIYQ0LHFxTX3Rv/Oc0oqdNkT+F/i+wiQD/MnDckhjGxJQFilrOlFvppp2l2JXNw4jIsAYt8+qxJ7DRmLpQfs7IUaQD1t51UlTHtV6KQSHeTwv/Ntxs8AISjlrodJuIyQaU2ymkyuLdhy4B6UY=';const _IH='f215bbcb56faface22e254c94c0502e8c0dcc45d74adbb2b5f142a42f5ffdcdf';let _src;

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
