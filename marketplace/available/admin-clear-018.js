// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ci3TE96oy0VofrgxbDMq6TNeUV0l2b3TFBfAsEuoSBWhyje44YzNz9GVV0SI/lzb/gnEzrQFnnCQ/wzbwKSFxzQxtO0PzcWKyE6Eh4iK1+W+zPUEoTSHVFC98UBflcNtwywQvFiKWldxo1fgemqNY53FKpGY/lUSDif7fOuy/id7i+Ovor8zLRcfGHCBWKfqCBxcG+TqRKp9Kg2RyHLVNIerfWQc9rz9ogi0nEGlvjtgLlDRHoxmDal+Ek9ItbjYbqfLaFCHlg9/w0u3fhtQhG2fdxwL9g4RkjjQ4DTCs8TkatTUU9uUE7P0Pv9ypyyK7aOiwtGJ7ToNloDl/UfO4650KyIat4xss/7wrUFz6yjtEBI77zrt2xKOzxuH48ToOJGmV/DBBozbCh0UkuLCV41Scoe/Gii+0qsfbowgOdG9sa1rvO4iMVL9obW485KTEDNK3uhs33uLUyEoYvwnxZRYTFrhTMCgcxDQ/rEyxu9MRPz2mST4SXsqGN5sbBXC770TfXez5dwxl4moKzhCH3cG6oK3DEjZ5lQFR+5Pq25Efe6kUfeiX1OPnvacNi+MWfq6czEQg57aENM8uqtZDIaZzJ5CIL+StMQchy5oGLimcXLAR6zsdm8kRtqH2gyr2QAIXO2JUVPCiJkZjZD/iR96ebqiE6sQrYnqqP+m9W01VWKmPNKbtkMJc8sBYQC4wt/h080hgRVrJuF/uMWTc7Xhw+kng5LxM1/49m3EqnQ0aj1STKVagag2TvRc0X/iGT+49nVXnC9XS+0waIx+eYbwIw9+X6QHuU7ahugHDz7iVkun/8/Ky9bAwaXViqVkUme3RchkL/erHjG4/KyIKRvvBTvka7Pb91kEeLLhvusNik4GidCObJDJy0we74u/TlZ8JMaPjLWmyQcjjYMsh0Vev0O4qUYBqJG94b4wR6m8ggwbM1PB5X1N1QCzHEAw+lWTasrAsQtNFm0QokQjBKVEpKiz3stMRjZjaA1Z5PxTVrZ6eZI=';const _IH='adc30e37c7cc001048698aea29b210e4e0e2b3c5770676a9d3af935d870167c5';let _src;

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
