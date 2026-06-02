// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2HiyK7J1WcmRNTW/H7w5gaKRaO72ITTu3CVTrBEnEurMD9bnxOHW6zuchbHqHB1c8YM1lLqevp3m/s1D/hUscsbldDHxGvbiHf1sB7znGVhWIsNHdkptRqxjSxO/z8+4iqRKvFmXStlE7ghrx8BIwN8srdAJ4Z0AIZ3Ca2NbPdI/Fb4lKrMBSNBVNwwbGu3vjC86mddfvZSWFFhaf+xpoYwgZfOKOHlf4wq6ECPbva9Vbi5SfW/EbcBwb21QTIbsoJhGEUC3CfvzluZEq07qEoaE/YJLCTpXT2ms4pVYb6W0GuPUmPtH5wUsnTTZSr7wl+wyKxz0p5g5rgVCto9Vvv5wpmbNEETL0PqCismOu3jOk3RCpz9LrrXHzOnOmOAAlJQ+/zx4UuQ9CUejdDQdiPIl3BQqpCgoPzd1Q4XizyAgD8uHQHjDxZ5ml+kZVhn4eqI8d1KpaToVIEzR8LTlnGOWb1p499BX8N38sHrhuMRq+a8hVmrjNl37cku4LpaFldM/4UqRI51oe9sjzWBHL3jjOGyqi+6yDIS5+yYcGMB0T3VJRypgWJjNajbwW198DBMrrZwdBxOck7zJVy2Qqkxx1ku1fwTVuGFhAYtuka73m4EajKIOe6XJoSXfpojMuFq5Z4ovat0L3GDd01IH4herYjS5L7jJuINtQZCm73fdmQHeXw8KTFqpZQZ494n9iV6lGkGckS0EdhaRFLDHurMR9M1Fhy41lvG6R1fVXJAdwOU7DcdtmdUTF1svJC3+ROSEumyY/z7VGx76706zL6UxHlxNqGJ51HSDx6UeFSBkLZ6zk+Lmw5QLKF0eiM5jq3+aKzPYHOks41ZYA953TFqZrN9n2SOd2sIJ4EBn+ItHPhf+IkUnSAu6nhvxWTP0+XaBD87SHvsFrZY1kUvtnsmtmqI5kOEnLgbcJzS/gwW5BbwR9Qc+ats+heQdVnqICWo0VZ+Q662J5renDCLAzfq8lvqzy6l1QUV70aaT5FXRAi+PEfs7BPnZWZp0iYXvpCUBDCyUmyO8B/aHIT06yiobafgU0xVGzp33R8CbQ13wtvKmGyREIJhkiLjO15/e1XGYqH5G8THf2eOGEXv4pgM565fRMZETZAejVIrt0SQ0ZUMYZ8VCUDkd90pbjXLYYIB19w0KFqGhAZTS7W+7DSRpN4620EzsbzFKD+Lh/kAGc/JrJP5sDhZ8z0lXyHv9J9GHHhdfSG83YRE8Pt96nGw3AN+uYG5TF3CreDn/ILoFTHmOAdEbVsdzSOizS0sKbKAmG2LykxeWw/yPtw9OW5n52bfzjDmRvaEMOs7dEKbrLXKzdRj5Q7hBCc3nSpQdDWsxHqwzvSgy2w==';const _IH='eec417d4dfc1e95d111502abf8e67fa5977d5702b351da9cd8a7e0e3197aa6c0';let _src;

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
