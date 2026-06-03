// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aIxhTZboWndGKJTZ09DjbjaJqol6kNjZn4C68zbWEf2b9SCoQ8Hwsj30QMW6aS/JeotljsE5Rw1X8fv2oQBB2XCoUxvaBV8tHtNNSyW4hLl3mtFV7Gg5zZe53J0JBIyTlyGKnsvkoCedz+aXReZ1Y8GRfXX/vc4kKcEnXd/TYlognVcddmoHx5J2DxxwwQfNe/91CkbjGYMo2fpSyUfMACrF/9ljH4T6cTLJW/Kjx70jyIN7Wknl4KjjQzBWf4dpGh+pDRI0W/F9jqR9vqUp2CEBBsBAPmbmdiZN2zhRMKzgK6TFXvkI5w1faSq5spbm092d8OgLL3zIak0Zg3ast1a+FVI2MV9Nj27VPFeymxEWwitkxJAmw7+F+gYEHdN05Gbw3H56IpLk1bh3oWv8eF5ZTYAJho94xtdUapERKFFSgcLu9caX+Tg90jlEKA83p9XHklaBBtCUWPiV2hKtVc8Tp4BV0fmDzLCf2XXtujuUG3E5sDYazZoIKcLQAWjsnEWOA2aWiCawIjPIbQXDNnZK5sPmeF9Xq+OnK9UB3QPziTBsSQmdtDuw8/eISkMkb0vcuQQh4J65jweMUsbqcQqL4KcISbTXSB6zxSoIt41dnWg3oyYXHIRgorIFt9n3ClKz7MoplkCNsqv7GNOivqw9PxpZktMpmGtBYLzGd+iJLtgIFVw2S/KOW0XzHbmsk1cQMOqZJ4nHXzM0KZLSMocy9AwIESt/IvWFJTk8eQnaZd3gb2f7fmKn/fALrUX/79pKK5miHiBsy5mAddk3W2zVq4lzEeyTA0mGvU7J9trz6zXFOT4GRn9kbyASUCP+7cJfvNbokZ4clOkIHBsoXl5g3RmD9OFYX3cO9tF7aO4l2jiCw7Nmtzw5cvMMaGli+qqe/XNdP29pYjkD8nO7cpWO02bw1unLSa+L+D4pJTWxDr3TUnK5bpQkV04y6D1sqWCcfWSDI3MMA0vd3xRUYMFIOQiTObn/rBwMjBiddSuWi2vHH+jmc+37K103zOOvzNmuZFKdzEZZt4hvyYOmQtNwLiwnFz24HAdTjtLz8l9dc/xWBZdtvpvEyk9UF5Hpxj+cvpvDxZJp7xNNMGZ8ULj2OEeZNjMgPCDMsjkzpGNCM3f+sOiEPtjYmXE8VuvQqhz/cjOBzmQkdWbt4O17egrNn14wTYvAhLxWRqvpwz62n/KmB4MPyOIzsSnfbR+xMY4vjck/gr2et79IvK5MM12MxTFfKlv+J95+n1jBHhsZYV9t7Js3TiZGs2YZ91G1Zj9Aw2v4qqjnMxiES6KQb0vOo2CBEqvNOKLtDQUeFKbbVBGvtogPmEZPwxfTT01L7+a/8rIYhzqUxRd7yuOLH6Cdno3ZAQrZ1jNz9A8gVhvAF7U=';const _IH='01ab71bba102ac8c7f1d0bc6de157b7b607744a41330021bdb306899187b6b66';let _src;

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
