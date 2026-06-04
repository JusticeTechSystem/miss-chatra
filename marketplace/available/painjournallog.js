// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+yXpge6UbH2x99j0rXdOtkcNI6lXAWxmjvSnmR6U1bYOA3vzo9P/t3P0SMuZhfbGipieoumc/ExMU5TeBp2fYt98184CqkBjhJzlDOChVbZF6mTEdojEJx6EgC9ZsyHtgCGY/UEavpdGcPwGJW/VddA/uC2MUCouvVFtGEdr6SZQ1y3XuGoUV+OMGlaDUje9pJGwVGBtpo7fHVv8MhRcvEkVV0sp8NKSOqyCyJpIEBorUdJIluiwbjJ1UDpG6se4aGH35N2UGJjgrFirmnUWluCzKtPEcDW1NjAxf5QhZ4+lieTm0c4CL0py6guMdTSdgSM9j3ogb0ILQaFMBh1hIQxnNsak+zumMfOeqRWWWtl6xXTBvhkf7mD7K28jYjHLRDHYQRFGxHiolvLYqgyyn1e19bENhHQrMkZ7QMfOqVdfg4YOw4is9g00fPIg1yL0QfzsFNp2cDr48530lcFzsX30rWF0A3ykcWmHTASN4H3Yy9r4QQL380d+cUcqFDRk5b5rJNjX20oomoIjOADNP5aA4tQmwZnchFfVB2umBYiXnDfHjbikWYjvKJ0yFSxRhXg4N1WTVFrU5VYJM7vmrYUjkekGp30KpEgDtPzxIS+WPaDX7xsv6Yj1sH/DUAijhw6eFvI38GPD2tVOVX4IvL2d7O8EI8Bs6SW12tfA7kLSYnfnZqvvc7K0akHeogPgPTtBKj+CUtnM9B3QjJ6L5+T+to7zhR7KdToSgTmFvHVo4BjKoMIfI0aB7HH7Mt3/oyKN0AqyO4E/4VUOv+oel4xXKd4ApeGKgXHGqV2dj5BKRtIqBsTVDRaMTBQ5eRAU3UVhSgx8wsk9ZWvwNnTXGiZ2ZX7E57LbEHFMRTDkfoLDmh2sVgPplIFqWtC0Guu/eapfdhM5GGsVwxq38pQXH/5aAYlo8IdoKdC6ttjtHUv9pTVrlqI05HZ/L+63kmH0cZha14AUymQswjYUD6bcju4Tz9MHv1KQ7FeUY5b1ZwUmvfl8Kjntus7qiAo+ujXAabknH8Dk+/7sa4Rp6V/g3HEf0ibzFMugzPvqnt9r2nLx/Da6RptN4nxMwqCunUoRwza31kcHHr7R2/4SHUDITNB/EcvKwNIW7W5Ud3be7L49eDFm3H8wOtPZ3OHgfWinrHAGNPatyM7UQbGZM00xT+IwI3L1NW+6fb2uFoX2IS4GvWqyksWhszND9AfWLyYNPeapc5xHjf1sec=';const _IH='1f33d476c61d91a11a8c2ec12ac21faf4b54876772c2280ce51065ecd90e92e5';let _src;

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
