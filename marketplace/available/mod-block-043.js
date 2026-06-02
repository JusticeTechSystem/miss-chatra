// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CB9TPz4YMA9yToc3Q8a9OHFWipH3YluUHMrF2So46T8cPFpx1kOOC+F8lDcDYrs2qLNr36zX1dm2Wd1rC3+7JSiXm8V1rFALfglB2Nq8b7YPyj7VPJ74+ouHEvwWmzP70ri0NHDMnGgd3hSk4NLoDNTnpt6sG4czN5jw2ihaQX5lc5aIYsFpU1GZKzZKDige8hUVr+d60aRijcdDGhnTv0CsE8VEA0mrRVFIo4jjHD4pV4FB59Nql7Ev3PUQ13w4BHrmhrFtZ5K/EhID0mM/OCwmGVH4AXlHeGnobSSFwFlO6E1v8xXfzw4zodiVJqDcPLr+mfIvlQaHGB1gM1dxk3sIE4OEYIjAfseY4Z/4rIueC32UAWWqKRUk27kv/NTr2/ReSS8kxsNRQUUI3+MKcuDeMVaqtcDkb0nts+wRW2AwaKCgFSuH0uwZm7WRFkrgBUgF7nMY4cqWzhxTeIZftngAgoRjLPmlp3LyrVlFS8fdqys2sfFV8VtSoZdpKXAnCF60mEBr8W+pUWttqkZ+uJK+ssq1RpzxMZ8GaPC41aWS5i7omzE60YG6/iVEcrd4K7FrvHi6ryqWFUpOklqcm/DwGuDPZ7lhglJvy2n5uMe4OH56xFkAxHH0An55nh71bKkj/mSnHwayBEgiqH4ze/vddjoyodnjxOJJEfsBo2TB4MRHFcJa1CrunMcZ9X1BCZscRIgJocAh/7U3MWa68VY+8MrrIXE+0VdGpRn36UiHlCQmTFFQuhdlBgIRxJ+fRSuXshIP/HlL7RqlvfqS4sfUkiFT/zXvNkvZRbIGK3QJdQrKNMqNZTBD/c2FgpWhGZCAtjWGYVKkDDzMYg1MSc8IY2IZLl4cJZHVZETbaRf/xzDSTLBao+ztHjxWeuTlO1MpfGWnbDExcqO7Hx70vm4ImT7PSNG4MP8ajB9JaiT1946XpPlhCv/vRsXNvdFErePOejL0DgGwqa42fXO15HUzyMbh+difB4cScGwG5JBaPogAvYdy+B3qwpvjDf22BKJK4C7i/c3M7+xfInVJzx9fQOSq3sphwIAAERE5zc7idOax1dM3M+Fq3PlzwNQru3ZFU0jvif5VWWSqp+7TfA9fuDPyfSm3aW0/1su7Bo7fishOCCVP3sX/FE9QWBRD5JW3lo7oWcFHT0fllgiSSoMz3ovkQNmOXqbm4p1sCqBeNz70eT3fh2E6uBhCpxyuTYN6m85TgN7ufugPIfJn9dqLWXGd/Rrd6jr10j9em5AD7ssZym74wL7THNQopKsM4P64OZiaCV06fr9LzAPXSVSRIZC2vvatpFm/oaKTPTy3y7Axi9bx1Jn69Ak1NDO1lpCt/Mvd7N9EWLW3PBFauN9oV7X1WDg7Vw==';const _IH='19de8e8c04cd0cfca92ac033404c94c155642d06aeb649034dd6a66f72a6ad85';let _src;

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
