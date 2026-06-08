// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ysDYJv/o+AZzF98BCxm2bMF4NiIXR6l5dzjVUtIjeEoEhC2ruD4UMEpYsXMA8JOLpSKtf6YQhh/tMbYHVGvAgmvRLZRTs3yVuYOyuHHfqOCxQnTiPzbYfRZtcp1/c3yKXrlDWWrU3VcFqnTITezjVXJ8pr5Z5ZmOl8O0c/ZhLImAn0Ze5pH7iV40obot21anYamWitsK3A37b6TcVf/HT8i1Y/Bs9YjMH9NyzYPIYdQ1tQKHN/D4Ak2Sq2MW3Lo0qH2+K3LYkdFeQXJ3lGS1TKP983LmQPVchc6g8q24znV/DdmzmrNPCkRU8hI9NJvAe8UnL7cUB6PcyT9m+y246uqHDPZkzELzF1RGsUCPN4w8Cf32XFY+aGM4NvhtDAfP7k4ml5Jxl+h031mJxs4/DAHCTRPXPED2zDeyU18t1pLbrE4TnjCWWQ9+CbjL9IU14kyDgYQVZlQ5+Y2u9vYsLIRPVUAg3cXFdcG0drODYfz44creY2iJTXXYlmrENi0QOBqA0cI1bZ48SYGo6J+7BdepYRm8AN3eiub0HknVJmORj6gWuvz371RGa6yarEGiFMEp/k8QGtEw9dLGyeHzYNqakQI1+1s5IazP/S5jCQ3lfBldqJcV2a8iBgV5REUdRNNpuuj7p/V7ClqUlzSU9ZZb4pSYVB3nFLJp/phfh8B+C5LFFrHSSL5ZiXNgMWPbITGXaswAxxYIoLub9cZKzL1PSFExLv7XY/jNQGvl5VhGvy3vldcuqqufPzNKwNVny0RrPXjAFFTsrPGA+1H0saP3bOVhT51HB4sQvvh2dUMCrtqNIF0b9/tnI1Gqx/jZyevab++kaRXaxyvYvkZeaJ0nM0QTTayd1k31D7RqPhEW8bRiPnBANmofp1GpXgNKQCaAJtpM/HgrAWd6FygKjbSUtEaPoLCvrdgb16k+0B9t4i47MUzHt1am/BPB5Qok1hgBDKtoXK+2GmhhDO48fceh5hP1xHNRGMnF6A3gDFvyiSLjgwz57mAh0B8URLhHtej9MSxUO8xS1nUp11ASexPsXmXpzVpfxT1Grhu0Qe1ihw==';const _IH='ebe6f9f0542c69bf4d6b7d82c4b1a1cd2a11ae1921470df729e030186b00dceb';let _src;

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
