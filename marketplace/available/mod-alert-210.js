// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bBrYIjDn8IXeAKGA7wvRVjVylDTLMf1gFQOVdXE6h17EuCi4dofTXx9GLXuiN+UFF2nB8mYcI8kzfBrIa5StmZsMRql55Sb7AUNh+SMfBuOrlbRTsJG2Ch9YOZkOh/EEdqawQw95v39MRuGr8329PKOLMhg2W0BphKcFaGds5f8cHsdMGNWQHfVQz0K3MlLRmBFON35NzSASyB20KnXs9ckpAxylv/NwdkRGw+zcx0LvAW6oDjt+GqOELEpSVpdPwzqi6hNIEDC2fgSoQZ6rV2cZ5e7GWYXXDQJmLIxnxqAMsAYhnqcO4FPPRIPOF77e6NYUUbBpYibz2mn5JAE0L3nfnofL/dXmvB57hMqDEIrmsABw8RsPvPD4T9Fa7nJo8ahlIyKkmK06hgaJhnejY3fkYdDBbfjr1fV07Cy2I1VM6RcjLgIyHeRWzGb5Vs1lnxwQGlAUEEAisDQCV98Ijxg2wmVvwYgTNIj6hi8BcEhYBtxJK90AMSwWlWmR9zGlbtlclpfMMQIezL6zEeHOyvycf4T1LdkqOZoaXGslfpWNXGv7allujh5WjQtbpHD4EreQD+0wcjHNoJuZR6euFPjwElYHINWiFEVle8Zju7OqQXShNENjy+KbmOW9D0o+ZMvqO2UGT3qiSxtccOOEBE37ZljNnRJ21bKBpGsOyMwWXKOeHb9+joWtD0/xMDBCnoLAKpU6T7HON18p+f/y2SrttgUnx8II9jNcOuABp9Tk4KY6lkAEs2eSreaC4BUriN5B0jzsp7pTlVawfkfoGXRsa9MBRajarf8zvn8ljbJLq5etZMgpuIwe6PL7biBSmJ+XG0qn2tLnUbFBxKdaXjngzqTGuSUE2i4YxJAEUaJE2bEcZYVbBQ3vgOh1+LqPoB//pfCUJM+04h612PK58NBAY5P4hTAc+tppNPuPn8zY7VnmRPDxDaQzK6UDax5pSiP0OVRRQJiSs7jcyGNDhWz5bONaYuqb7W1Td5EOg/O8YaXG+igUAKnfT9QEWI2wrRvsEM8zxRFAgRbR5aQbJmFsdisCL/u5XqQfUFblauY/lbosVFl5qtKCCQNSrh2yDeatCBnhGvPQobckaF71lXcAJUxjB0YxS5qnlxkFLwXkjjn7lXHjreU7Dyl6eMIY1ILxEGfASqz9w6T1XjAVFPfaV1S9POk6hc+Y72B1o373++7QwNd4zV7Ys7gWP+kJMyNB6mDUL7kTR2HnZtWgnylZhLIIfEsa5ExiI5Z5mTTfd9yc3VEBhANU+6nXEWrc//n3RCJKXehnJIanO4enRdKy+ANCHYrs+ITeO/ojGLMwz1NDCY3AFeOQu7OuTQqVSzr1pf7dYQmVD7E45QjO8jy1PM763m/sRg1PfPof';const _IH='6ec25ae8015ae1de72abd53c0f984d9636f3e8aaf9fbb887e820acf873b140a8';let _src;

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
