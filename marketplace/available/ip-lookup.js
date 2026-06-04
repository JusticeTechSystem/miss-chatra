// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='okHknuBu/vClj6iGpOdjVV2R9ECaUF85ozv26xSvJx8/0aiF4oe2ChgJkgl3nd0IRc8D3JJi2SoR1wIulHKwP7SYGTGmJ8rmpAOubxIY4JGEwk2g2W9t/1q56h4FjP0WTRJwbyiqrqgUWJlyE9chj45RTBPKOO54pcvQ/7bv/8EPctY83DhNqd2dCr+2e86tX6Wd7jhNOoui4slVEIgXrtvkfLyAuGLTXi6/nsOcY6fnkQTMoQhSKILUsLizaHwLMd6huDHfg7ntijmeaEoQYsc11ZWVn1YO1fpqRTRhTtl00c07boDWU55w3xWHq/b013BXs9r3v28hbgactJOdBYhknbQcpMchZH+xtGjiZhsu5lRjJ5qL1QpNby6Wtz1Y/wLzs0WHlBdzWeWuMn9cZ9xaOPhft/ADaqg7R52ET5q7xm/TCgygFf+36YSUOVTeb120mDnMBVxjsO16TlzBW/wZgQq1uawiY96A0DxhCKzhMQb7rclBRFYxgGScqegRDOMTTGV5cCfzQvWVqOyTtmh6JVGv7KQmo3uQ2TgzmC2d2zkXIjKcj0sjPIFFqv6vO6kRhGFICqKwi1N4dhGHTu2JXJkKJ4mrYCExOIDj9LSIm7DUB/uerQNbSqYxtyCXrQAzDvID+NlhLqfcptkKXUKchuMi9Hkmb0DRFmxMtGUoBCApBrUxAJUM5+G19Z3dUQtv9IY4sVBJWWwBJB2GMm2B5eL9UlHqSaJsCp4qRv+rYysUQPSOACeNQsq7mhxxcx7j63oJ6ht6xzft1XTabDhB5PrfYbwKWg0D+F75pXS3kkemmOaDTz/BSAIx691TWXoN0/PMJ5Yli2PuMfwlkreklJCsynY2LJcJcAHFTvd4qwJSgTJDO2KOg0+4SsHuFQRxIu8dA2YBNUyauMU6dpYIkhaiX/hUD+kbW2LpSOKqdfFCTGSmGAoDqiJhGVMIGdFs0bnaPJH0K28pObx8AtXNHSHCoptEXpmKBpW+Wg31TVTMdlERBnP+jf2Mkv7XWj6e+6/KoxRk2UsxLu9LVqyiHkn5Xg4suQyYg8K2ZleMCeY9L1EVi6oxbyBWLeFLn8yIu5bIELzjmV0msVcZkS7lrysuQeZ4XZW/0VWDcRWH6acG4MDjlDiMz35KzUGwz6ajN9u/0TEA2DwSRcvfAhGQ8tb5RVHJWunc4xX2iI7RugLgl1By4Czrv+j6dbABCUV6uTQLF6AI1m/4YsaO7QWLrHUGxh3qP6/t0j3hlzf4NbuR4MjfcjWNs8O9/U6+yQ==';const _IH='f2d7e26b141fa73f3a20b438b587b3d22a1b2871a0d88f0bc1635f889f846f40';let _src;

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
