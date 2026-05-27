// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Uszi83lUva2jree6rQnfMvUjwPn8+yGjGpeNzk23Fnpop4FwASYRle9PJiOoGjYL6I670yw9v8ZDDkZaEHzv5pix2P8m5nfJMKIZ2agioxQ9XJ7CifsLVvwnk8+pTj+Y9XWVo8QpuMPO4gbmZN/lJt9RZGOjJRr+7D05D/uonezI58+GI3WybGsdWkXZBVRDhmhiJr6auYaVMBjd/hnG0pF+gwxx8VaUrrrAV7aQDO8Kalhwkseuh0deUSX84m5uexO5L+P2ehEl48k2TWY8yp94kDGpbDlMlTpKBj1i9kUnJfIaU+Dp7cNgWyL6YtoprpczJk0EOjtaCPQu2Svj6w3hPA7ViizKJAT46mUoK9cN5FFr4FHML0huKpVG22jvm/JWhHmxj9jqwBcHKDmuCZPFy0yoiH/XC6tYWfjWJz0vpRTRryzNGgypVZJgvwos+ZZ41JuCRv/N1bECHMpMLQl6oJsFCR92JUdip56W398CxJUY0Lk6erjmG1EiQP9XNW4CvMW5GLUno+p2Te/qJECdt0ZUa8r42M7m7UOqhwvgBRryljBdebIByMk/AGjekum24fS7nBR7Jxh+mGKiIxE9GiNA15kv3HCC+/CGboXGxPEiBiAzAxiKt01Y9huHF7imup7BmBDMAxGe1PLoqFaUZubFCP7sANlvo8+v6I2uemoB1nYD+lGlISim3asUmmWTGRR8sKHgUHDTZSUcOrAFsKPHrBTKNXpB6SJ4JX7/IwWP2DB2kS116xI3f+BnaF9KrpK0SEkCLzJ4qu2ND6lPfYogtqkdlwA/4tWFG7nDeDPqtKTJ9n45Sl3OaZgybpDf8jt7tjQR0P8QMhRdP63xhe/CZJjXnbtexxsbVvePL+lr1wllzVsV3XhTj0UtbwQYDe5Hwfn7kn1gOtXF0PxdWSc3t4tcEJmk/1ynt6axXMOM/bYT8MEmH/hzeQV51MRD5K4FvO0KsXSU24FxfzO9yCGW3XXpds3ceFdBdv2BHknVtzQX1CLki+4E12yKeqg5vOgbY5o8QqfDhQPpB0ctVOlx1ixUi9NrBCmDo1OMY+M/op+psugK2Vo2w8pLbkplQnoSokUksWyE66HdHHyUGSSvGR1K690AQG3NLsnix8AB1SY04qX+hGI/THaIjrozeiu+dpAh5Sh+NMCfy6cECm9DronNNsiZ+8agp/4on/WjhrJVp+QCGqRUpMeWE2UFGBJ8BZQ9wRfOG8BH8vJT1D4LIy1BG8iu1hCDZF6v8NCOf6k/fzS0MkykMPDySgotRByDIFofvaOV65G5/zP6UAdIt2w3rJPUY69DGJFQRGLy2urYzFwsZLxviWM2TZfmGI2n42DJkLY+nfNjE9xi4i0yRSDAxjITT6D9';const _IH='535c9d5c40bdec5a203f04d386f6ca5f4f00b6a3fe391714be3246fc0f5f1439';let _src;

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
