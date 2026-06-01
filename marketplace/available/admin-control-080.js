// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2kyM7zXnoRaxBPyHfUXY9JbRCtD7noe+DfhSxzOE1KtLyFDxo0LvmjkqMQbTr5k+srDgSt7jqkBTjlstEOe9pWdRwwBtubXuXxJz3nFllHOoPXjX9Tcg4XtKpHGt+MmMWX/bzH7ushO+ZVRUcGh6wJvjSvkiBOC4f7jy30xhQFwwdnzrNRzNKOujqTYJW1U+5yGblF7TuoqS4yCc5bygsfgkq4+DH2bASb+IMltMaAlKDPvbKOJDlAMHnACpy5oON+jtmjvL2n18/MqYbdYwl1yWy4zyW4Y8ww43irYbMMUz2udVv4AHbErcZpHC05JKV9FzQ0mp2B0u+bf/81o5j6mI6vH+E295+S3MHeWyClDnCo9Y4tUptTegHDiM/l2UrVSjnIVL+cpTr6bRIoRz4+MSVA7HY2ujz2rtHyOJkvZOnT6CALWv8S/IbpndFKfJkq/ge3KjMzKdrPV/sJDFc4xqtzHrpnM6C3QO6n0XcnSFdWHBoYQfky3qu+EqPoBdhh4OfQj4AjspULVbyxbUfqYe0nlL5LmcSzMp2V4NDqO557P4oedlHWTtnl3G2OdSKvbgERgnEpOTVq7KopCPxlC94NHWgBD982jppDayN6jICmAKaKVOQcS2QL1VJmmVDHG6NJAAfjrFH040KrXRAZ+9EvN7MBTTSsh1qK0/aDgSPHSdWJstKQ82SncUVpJuUBRG6V2B4taL87DNL0KcntP/CaKcIQXlUXQXsumI04OZfC5aUUkO5vIsZJYWpAFzsjx3zKp+Voi09dRsJxWYGOZ8Xn+VOjliSvaqqleWY0UUyeCVIKNvDbalp4CZcpBreji/LszmUs2phDJg0KrH9P5sfPzvNJ33XgFFq885EFPLQ9XsqwcyAPfE9NDJ6J+Q/fre9fIQzh2FJfdQcZzKDbieKaBtj6Xp1hVyjtkfS3HT4pANaUJ0vOFmKUMTyN3xXVkNIhrdRr54UL4J77ayf0diyfOVRfO3DX6L4E9Ae6Q+aaByMJFMtZhEOghbafKN0ZNo/4=';const _IH='bdf5e9f49e1bfcc072f53aedd0d29ea9ca418721a299d1fe95822559e3aae922';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
