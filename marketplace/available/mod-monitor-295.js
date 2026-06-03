// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxxcsU0ftD+kBmcJVvyQbn4A13hEZaWKqRJ1LCIOZYOnXrbhiQwUiYQTblwtwJZJAwNoomhw5O1Epmcl17xyIqs7olrbp4+bfey2d78SwthcQQWJcCNsX8hO+9fQTUzEdVFcbUXS5BAH9ifynp5G+gHn/5dmml3m8eJ92kGdXfUXomHsuBJUfGMshrSkxEef926bSdf8JrxeVgfKPo5EeM6ELi09W9zqHg6dPvw4R/4svomOjhpwJeFuoO1FP0Qz8IqnBZcLQ0E3840MbgoLlbAvKLyV4DdS65UlrtlP4+SamJsNFQ1SqG0LKv1fgz/oBgj8xPOUD/muLwtJkbNQblqtgZ1Lw5LgDphzCezsrkJKy7wceeTT0LHbRSTa4PUcFuGYTVB1jssw7LCT3ZEkedZKDY1iyBmyoTUahUsHmNdaNlcGF+hi4Oa5HsaWWUllLioNhvF/LXMvd5Xc4H+EN0yYpSubbYmzNIl+i3RyOd3bHSNBpS4imZECdlVjsuEE5uDvAXJLVWltOfwpqWQqSqS43uZxsb/WmZOtt2oTfj4mM687dfdB02VIHApkyMJQglNeYy5EBWO/KQQnwP6w2PiDfy87y477M7vxnOQGhVKqnU4RQfxiB9OHIusxDDMU6MQEwFCCIpm4uk/oO/8jZ2Y2lldBE/5XloNGx9nplNnSyx5BdX/N5RIbI1dLaGLqL2Yidt45AJ279SLncuoIVcX78K9gtCALKZL2uKYSSvioznv+A9EBqhIBTqRNMmv7bC4AOR28PG0+8yONF5cuneip4tR5DUv2NcKQcmgc7Tyeq0uwfE/CSr8pYFt+1/8GixYaZZLz9xss3NxESvqOGz7qNhCtmpjrcsszocjud/adfLLwuEWjllE6L1bXG1CPLlanFq0DDPk33tpTRzsavyfg+FIEM4vH6hEftqfejbVxjuTA9eQaTvYitvtuwF5M3U6QAdIRwaOkv+VtFNN6jeCvHOfCnwD5u/aySXUOB2/H4rOf1u79kZlBIsV4qYRqhh5HGb7w/Vx/CNHByPd71Pwe0ju6LSjQA81/u8xdJ4gijK3Yy8lpFRb3lSEO1xQsrdqVMDyyowMyMwdd/U8RcJ041RFRrR9nuJNSOd/WrehapluooPTuBYqkv7t5IRWN0pvWK3qKZhsNXHg4gLi/8P3jFIS+U3/e3vBTS4jDkMfiqTxkGa9bz7YLvks2DWRp5I2elZcougUKL7Eojpx5IFVZjRfG8oNXs2Gu2iY3ST3H+q6s/VBGf2ydLZs9p6w8LBkDIsL+g7T8lpJoIUifZSsNEtg1yio184BQnfJ9mLIqHAm1dpUKykwcvyr6RxSDAx/a6x6beiHXPxM90u7E1iitKExgvTQS+6QlcBJ9xV3fgMQ7BqER3ih+909Ejyer67A=';const _IH='329c5a07c547046b58b9a7c023189a565b607da35d9a61a2fe33675e94e9a484';let _src;

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
