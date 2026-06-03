// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0kdfV0p4Rrv057yzjxa43RTpskKq9/PjMCw/qM+w0+VlAwKyiIqsM4kdCK3S5nRQE8WlxB/sw5Mr7eiY/Ah04ULMdleeaqQ7D1r+Ia1MCNqZPEL5Cf0lX5fxyNbfLLr1oo5ATXat+dVDzf4KAy9grCPiqiIcp+p3oKhhXqBkEKTs2VH8N7nTxvFhWZO5JZuEm2gruDCHhXuE/gck4d+sC3XSnkVyLQAYZE+i4M7/V80BXKh31N3KcqFEnUOw1RFc+BkNSmomiAaWvIJQt5p1NouZkXFh8pPksqmhLroG4z0VGiw1rG4AwT8wBHvHWR2KmldmSTqz71RpgRDVKGpez7N6r3mEkMwX9VA4utAUAqxY9GdQlFAyszGySqXMivMJ7+x40eMcGlSarv2G9litlEGNzYcx54uY0PA0OGzhB9h0fACDlFs6MyVi8orUDfoDB5pvp03VDC0lP6RtmfsTBKkRNk9KvZWisrXGtShPapBdNgGT37tBz4gXlYR8HpUXKYEZnVqFDGwbJJ6FaesicO86EzLnxvXqTIKC9Y+aMOjJnm01gumxlh30L23JNJuEXGt3hz5ddCSX6vVRFTxY3tSHZOb/J44q/XRuTP4buxao7NNCWcjGvN4GHfBcbQPDNXKBxgbAepU6kYUIOgH038K80ucrP/lqU9yR0SRurm3SYPQtGx1epI0kVYT5NSupzf9UGITs8tzutpahe3Z5cFOEiK+usgDJW7pYYE704EmX4Y1gbeAgDD27';const _IH='77938c59122df90cdb877b60a0e1531043b1b4bf639c494ca8bdaaeb8fff9326';let _src;

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
