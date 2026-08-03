// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwhcyWDusIGRJkF3rHrwd2u4hNxc4Ys2sJmef/PNT11/H6HjyAy1G2hvYQDahq1XI8WroaIZTexPVddNTAst1P5k98EXIgL51LbGy27KatC+RB5xvp/lG6qnKwIqxTg/h0/ir0exW4at/y9z5mnYSEVXncrOXHuM0HfJYdv0HpbEEp6aAtf0uslL7Hp3aEb9opTBwXT6zZ011FsflLi/17yuFdU2ooBw2rIxjilv+2QjVwGPbIte6dKwON8BPtU49aMPfq1+LYdCvVOgonqi3bP+rCXstdz+26JbpthecXQYWLtP9lViMcvKDQvr8G//daVaK6Vx7OgwCLj7pZ6PXTFjNituUL9+e/S32fvT6DAMJkBQ4WnCkMQCFpig1ezqZi9tqrV/wZexL6Bt8dQs7+82mKdNfV7pCyiA/npAxMg+nCLhJ2kQF80ILhGsxn0vLtmVHMq2NcgRSrfrfG9KsHnqZutH3WRQCC//wq/wMnP1TbDFhp3iNB0M0v/9xTbHNsOlqqIoZAMRs0Dt0igv9Bqoi+BmQXTgMAR+yYmLRDu3bXCbkwWVF5reJk3pzTxwoc8pAZrJXf2CDscKHjIclMts9xpq3FsAxdrlFGRevbk4IqIoQzuH9o9YHuqkGrnCVrfq9yNSCOi/WjSPLN2fdqqlvtg4GtmphB9mIQlDASi0VHUqyfwaZ8CwMxCpehiz0N3yHVLMdLG3T8TUSrW59ZQL1zRAeOxWHtKjFAL1TB0D9cBZs8jYz7J1LBUtVRdRMMwcBX6fi1fd+M6/9555dj38nJmGOPpzpEMJw2fbKjtjNOS+IqOEOSHCsNWagIDOLvd0DGZ7zPSYgxV6akVYgohFv7R1NzAN6TM56VpJAEbo+A+pS1+kwzonVvw711FkB/mOKppXIwtcX5WQd0ctaL9x7ZclXXDb0q/gvDhri4RNIaf9vwc9HTwxlB0FQXftC7Qf+mBd3idZEdBMrAh0omEZ0uA4scP51WYYaMCNyXje+qqZuS6cWnUj1JRqHwrItYxmeBBa0D+FVQtUv7bBHQDv2uW1ibRJop0Nln3Zh0o4tFjLRj77gobs3PkVIUOqQXwnbi56Y2T0Kh06cFrDwKKny+wV4FgnNqD5u10eUW57HqTfzOYZAxn58xekne+T6q4rchVtl2b6etovO1csQ6pNd1MV3+UUAyLw5iDNXnjschx52hsZk0PPxKrwP6WWB+i68Klkh4t8g=';const _IH='9f653374f9a7d271c2c94c3b65c63abbbe8b9e6e2eeea1b6227c676150a78829';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
