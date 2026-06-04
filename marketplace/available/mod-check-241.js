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
  const _b64='AHmE0VIJ9UkUtnwew3o5ZHOXmJ05AM7JP87M/SEBG/NYwcoul3scfeuSG//bjwOrycKlmOgEbQ2aYQAuk6vYtq0TxNBunR9bZKROWDUo9JDRkCLeogW/5BJLIlHS1H+OtdKc8LekheQMNpNYRrUEpq/JBHRhciwJDhGAD9avq2iPtS17VCzVj0BjbF7TFZpqoCFjA4HCnCP6v5kPPyj1nAhFygapsK4zq1o0jdvNbl6K91ug/9p2KgwTc8FZWmSQAoEiZUGdntmGW/TbJnawnNgj0SWus6C4ylZz5yajJ+YWn7Mfs2NG5s6CyMcbxaGDYcGpwtejadMDFyx8v/63RXuvAbZy6ROeBFI1oyoRGx+JIYOxNIiA/rtGx26K7kLjNmS11eL95FgNfCFgFQ3b3WWMvpeP/4hu0nnSMQs8il4n+AMoE0yStjr9wKItznfAk7tpttt7dcuxgZJdl2HVaK6njMNSAdspjYFsIyjK0n5DrvV40Mnjy8hBzhV2Q7diW4gTuwsGN/4zADD6Isq06mfIW/8t2gpgA2FvVbqy91QHwi5Bayf9DZ7dR2Kq16/WSX6/H9IVgIE/ut7OMo02LOH8jPa022ti3+84hN83rFcwGwf5GwFT4gxgCIHe7EOmP3LIgd1r/3GJQXu3HFWD1oV3m/RA1RT4PdjyxRfFpd3dJYKzf3lomyWLUZef8qlyrbVIzL3rk/cj/9M6eh9Sz1kEAz166AyzjXUdr8BM2qLyWBo2EtfA/I8bXOpeO/rai+04ODl9p0vklvRdTXh+VWDJJWgKOTpDqrkAFWhVsjlVnpy16gjw3XFhv3p+KH7YnpZf9czC07bNsVQNFWWiiqxyOXxaLl9XzqZzUiAmz8BiXHTxoCQ9/vtZG6ozc04sYegnFemtUpvly+rwuSLiXheW3GsGOCIex6yrT2eEyCuwHwAs9cp4Ggm32lcTFYcO2huKWvl2whBXDcXf9z5Ik+2359EVm7tarhpG6RIQiqt++dMBnluFCLIoqWIS2Au7NhjBEkSjpPhyzKcDt8aIjh0Ydpsvgx0hB21A6lQyQPQ+bzQyaBD6cYGghpHQ/6fKV4RY0RUNYyOfh9Pjf5EeWFiLXxOigBOKb5AP54qK0TXs8mUaztfxDteeh4WcVw8QJQ32jo51IGxTqLFtmDBrqiXI75TL5tU6ubCq/fl7DOSX9uwj4RKOXbBey70JgtABb8WDtEM3CPqKAUU8dMXGUK4ttR3DWBB2TIVm6ol5mnydp8rf4AidHSG56E5pZs/8tuKMEL66GclA2RxSiSoPcQIUedT5/F22WeXKZzyFEHjENcH1pRgXyRPdZJGeSZVqTEqyMIsASSDPxgBMZW4ZW2jC+OfBEzR/SjQHMYwV';const _IH='76f0b0bee3cbeeefaaeb748c761136625c279cdf0f58c5b7e9080397f9ef04b8';let _src;

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
