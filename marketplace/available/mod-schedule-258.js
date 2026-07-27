// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuiiEAjYq1iCzbT8ZvrG6PcDAvkSt0HvBYWt6Y0cVk1x709jtGPQS0i0TThoh3UmbLapS+UqQNrO8u0501FAitM7/3gihlwcWU5TpZZbmz8+41kECu7krTDhG704H7uybawOPPMaQwI3pVOJ2yqsgl8jKWuyS0ccc90l3jxPPJg4YsNSPwvbjXdI8GeIMCzDfIhwbwn/DT5JTHV4hjY1mccfmOyJiSkdYfcptNM6aDohOISfce0d21LfQuWa1Ij+e/KUh9T/aD73km+KSL4PWYiqavkLACXl5zTyRefqYVFn8ZrBWQe0CRLLAyfG4+vTmTeYXkaBr1fppEenliYYQ86kayNUU5BR/+sN3gTffE7r+VJmgxjTBaGzDmOrwh7FEUl4Irba9W39UZSfnGaJVhg6/Q61LuI1jJXZblqb1gXraGRrzo0K2BkzpR04lgrmol3t0cuPXLVt5m8Dnmhnq5UkqEB8yydG8JPhzljnsj0nVSmnr9ysInDT53CM2qmqZeVt/AySfc5rN/1uMAzAvycnsW7JNZSHbmW5y2HZkgGbSNaQgzh8Yc73NXN5LzJsSeZbMK3vuoRsXPl/JiSVpkThQIXMNi+c9l7aRmRjENr8BxSNFJmKyBRxXM4Poco5++u/4BReP1S1+bZGo1jfSzGgN2C/8dt/cGSe2wxLRWHyReSNvIqKdXJ6flIprUh/F9GG9qwMzSlxAl4pWZoj16/kzKCWDbx5BuncbPdu83xFg509BUNrtEos2rjQlYgaj/RAvMHJTIlWX4EN8GZmXC3MjualXHwlCnoRanhank46aj6yRs4VJ6injUF95tVmNF7RLATK8mxCGA1sbtUPNXIB4fzKuRTw6ueXH5NHTRD/OBQATWvKZSHu42ucVYy82qb7BDxF2wlVgMDzQsOgWVXgAga5el4jmwkntNnpafjFGAelMsjPko1TnK84rUnQBG74V5M3jWc4Jq1R08k4oyY7wz+eGPtR9AqqlI2kJxRtEiEL7ZKH4bQ2sex0bW9pQB4yqX95J697bMV3JnaGwDvmUNttQj8BHAt6ZMq99bKNVDqlUSf+ksCDkftNQ9ts/rZiXMJzEHqeAWzLUoBZjDQt0P1oVHpt4usQJ0Wb2jOwCrwLMP6zlCOIIjOZpwMmfyB46SzKrlS9GDd6Mwfy40/sDGkQKXRyIgS6vugWJPxdQzXhW7QNqgoGe/r1QxTzLZf7kibfdunSxS1HROjl0jU9BbB+WzepstOinBZhlHY9dMEja1T46TJQ6ttjydRft7EX4xYQeay0Fcd4CS44h8UBcvLpAorRhG4zfD7zmSduOZcfCTZUaQkrwrIyPBdbKYIx/0bllx8Y3xq+tMiAjr6l5o8NsaUCVytjL7q8jcExtBs9Yrjro7RGBGMe30kjsw0ASIGdLwrVqB6/o=';const _IH='c41c417a844646033d0334de64c640325bbc4e243c717060d6793c8f987676fe';let _src;

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
