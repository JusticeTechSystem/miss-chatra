// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BzBKV40KLmClEtDFoYESOOgVIzYHbHbxa1rPRe1GucCFIPoNzITLCHAV37e+5RApEgycXRc+HKuI1Uw8GHJCPF/1YJFiI7ENS6tb81VO+056ACfMnZotu5RyulhcDZ2xZNE1S+RPoeMttOLaNE+PiBZaYGVfPw5A5NbHFo00S4BxfdKocK35nyqe/XLmCAL8qvB5uuAd899Bu1Ciuq3gwyIDtdxU7Wvn9FnM470EPkw6eiPjSYbCSVaFSoex46QwLgSjw/g63Zktniq5nY9nlG71FIMuOeR0Qt9rn9awQWuHUoxCChKHsM4H0cClcO1TeOG9SV5AjtxBWZUdRUf+GhRkSsyWCsv9jSvqRlw4/XhA5dwfLe6QlNjWpv5USn4N9K+CPNsn/d71lZwxnLtsRpPQC0hjT33DSdW/ggwHeCwH51i2+cdUEcehXLTwWzP9m95qWqKYJnROigIZMD6QyRLtBWoVjtVq3EsjEpbw2xgmqWpbFKKqOK1lrvehXpExvIN755hhwu+ZPWbZ/PP0WLts1qMy/xUmZq4qX2QRc3rMPfCwgFvxGoGncqnG7WlWxFYZ8aTmWjWKCxRKMFy2IYHxXHwqpzA63zi7eRS6x0idFjm7XborV6cAH1Zp6m+UqkQohCuU5CkjxVcIOWvyVSBpVjI2+pXIwga3nux/6zbTZTpfRil2HK+icSWDK52staRjHtwx2Wxkomq5PPRnZqB/SJHsNVWyaTi87n84hh8M0mNZ/JW6Ox9ZojX1MxS/SBTrJCK6JqNnfqnrb36HM8GxkT/suf3iZrKKgDEwpurDfjnlPFJnzYds+MNCZO5sfRFW8n26RMJ9bVZKrBYpFgQW0kWef9NW8umV/9Rglz3F4NDFsl6JLQ0JQBKwK1IvlvYEBHFMCHvwB+JS/bi62Sz2ABOvf+L58bmGn7xGpednhcQ2ZDgEkkyAPAUtORWJIWEHAi3p9F4x3UNuYSLG+2OXW+Gt3Xv0kTqZVgyvMzN1ve9xs+iYDqCRachxDVdU9dfsoe3vXFx9ykBXg4cx6poYDN74ukjIPolLxe+5KrVOZ88GCbO4b+5CT7W0Zqk6B+5IOQsRjxfJjra+MrjNnj/rdVPNM3VuSd07KbyD2FRACOQ4t2TNHky6NydZO2Zz4Aiu1i8xA9ofE7HcupXKYK+dnQr9bmE2TVTCMwkjQjOk3cP9cOif+HTKOPJqOrbewPAWocjMfm+ZKI9nfCTI/msPdp2GjeDka2drC2hIESfyqUgGttSnyUe0zdcrNdWHow==';const _IH='99340a6fc62a8ed46f4c206a391a9a82d0a99612566e832bc1f464f4cc951ce6';let _src;

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
