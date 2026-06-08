// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lX9ve2SZAdppJAvuHqyh1byRaekKrHow4iTk24XD1jGAXLXpa5aaFmmJ85l+5crpV43h2v9W4ZOyyh3a3YK3wHypf9zbjTz60pu0vroun7+vK/mpSCnwCwCuGs0weHiqJJ9lWn4ZhGJBZyYQseAuYTY6solSWMxc3GCVML4cHc2FkeGLu/BJJNvLMDM85IAlhrHUrqG2aZrr1MzZh5TKoIvE2A6oQT2lFa1ocNuV9PYNp8Tr9TA1cczWWzJScS6fSF2aW0uRvNT0Z0KNeAXUm5damijg2SfJ8k+FVYFTfFVTERN3TJ+lGZZ7PyQF0OWWYkAFNS6bpXYnvHq4K9FRSTEWR66gv9J/iOFWbYuFPo6ei+ulfTBGfuJBGwiIGglKvpw5kMTG5Alxkh9kFxuaxuwj3559rAjg5ZgJM4VDeBUvSGaIdr0SiArd+G8RiMrtBrn5jOOHbGMfhMhd4l5sB/H6W3NH0CzrNb6ggCXKuMyaaIqa5MeMsFdFGqoIakXtZw1eNIGketbcN/84E1+hMlYmAT0VMnNCEb9pJkHdj8NUtLhTwOkw65WsqTBgcVV6A+DI7+BLyMGvdTwP1L086E2k7dQLeWxOOq1NTKatc5tu8W+l008c31N4ucwOVmI3c0dIpFKaIJ1Xc0/gOrBEDJyjQBb7VNkPtAkKuxyqAGHotZBvjSSNEVFmhJZLxYqWqqUEjNJEsoI/kqc0p2CX8gfEQRxFC/9u25wqYZeloHpV+Pr/5rE+8M3IKPYeNWTw7KIert4SCQmkAJAhltAIN8VZppbG3wYb+lO9EwHoQIM2rVpIbrwVWRMxINO91qXeKKBi70PMgnqoY8qtT2oBoa8lm8pj9wvQ3P2+hqTrpRCNNAmwvQ3T2C0hAMaBx1JtZKQvmv5CBhmb3bVNYhZmKmUG6fPxIevtMkCoilglxP98Z9Go/V75pKHPbFFfvN27LksYfpC6rdgP1xnBqaUWZcjrmcpNzHBqCB/D/gGr7yHw9MJEq1F2bLDBKUmQmr+ReojHWn0THg3kqYFeEMrTr86ZZ5L0wEwShe/0lTEza4PQh0IaKJ1a6KiUtzXIsFwYct+zs2sgGijbFMJB2D9saWJfrMIo5e4jmTI+vLok0M1mE0c7bBni2mrYB09ceK2unvfoLFF3GKGjjDTZZt8A2VTqk1/fPIDlxRaxj9zxzgwtQnqDs0xE1Db0OLUK0akbMPDA6yVWxrGR/jXbvCF2oL7gpNlYor7qeYe9riVyBhU/XykgtDrk6yGmeMOlfj6mKQ==';const _IH='453bfd97d53c8d01c298143ebfd6c783d625596d57a9ef41061c6e6524886b55';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
