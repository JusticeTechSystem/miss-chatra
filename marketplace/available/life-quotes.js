// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QknYm23+6N+aKxCR7ZCpfEW141T32dByPY60c0vkOGUtjuEq+al0Qd/p1b+TLWRxRxSEkwzvCZy9wmZtNahxtO1RTc8krXC3F95G7e4q84B+zXlh7yQ6NNkKjjt+ohZF742vpIt9fRsRGMROasmOFAvjGn6Bszse7rvvxbKrMWV/58V1ncgVy9YY1/h3EszGoQLEYb3lC6Zuv4Bf3Z43OJIQTMD11lOWgYTpTkoUVHiRwpAQ90VBM+5h5XoryE+0HLKaxBKqQzEaP1YSEgcEJGfuGyAtlqPir+dZiw+/bD2+UUJVRGh8UN8V02/D1fetanVWttBuI9RQkn5JVrnmgj8JyGqX//zWrFsP9t7w+u9+0AZipXJYpkVlViwV6DxgrWmZGnszV19ho9zorxeNIAJCOx6vP5s4JvWr2458DmiMvn27pzozPyfuTqHly/S51U3bnms/2FxrBOpGo51RCFnuTPSVArkw60URPBouGmLdB1VYrrD+LnVZ6XGjN+0yj/uLvpb2+mIzHDIiFiusIBtShNCeQ/jzkr6RC9s0r9rhbcqCHstZ7Z5hEtRL5RqNyGqL0lShwfUZLBAhg4V4o0FbJAOwJTCuisJ9dqXHUDA3meAkGp2tJwmc+eLArAawb6il8gfGan+oiGXg6W+mZWtH++ait2dTDW9UJtmGanu0N2cGsOmw2F0/cogU41H/w61WmiYCV6TlNzLvSN0h/gpaXS/esf4OxJwPZbmgLb7I6/v9eGJVDGzBIkOy6+Z4R58ehGl7wpUEjIqZRPfi8qrxCx05k4DDQFmjpjrss0z2zQLgG4m8UijxOGofS/GKMDPQ8vIERzzo3pTBBdKFJV4MPb++agqNxK4gb8pZsyKQ3HRvjgIzu/Ie7wM9Jk00p2OZNx9mejZPScrKvkv3uW/dna61bbYDVrPORAJPt30XfjMF1LTuacBE5oM6RFDZOginRIojNSX+NHfq1Mv6U8Tq3SngVjt6dXkZN8njtvt83kvsm0cm6QV4b5ruuozS1J6saw0dhJvc+xfM3KApyXf4LemLUG6H73r91C/U/Dl7KxB2qxb4e13/JqvUsm7jBUMYuv5/R9msNDJdJLlpdPmVKpmnNc22BV4Jix9J8yGaklbZ69hv3LOUtXvu0qJsX+dhu4h8cA/qVlVgHvTbxybjYtXlzzi4cVOAx0+GxhkIhBVT8Iyx6k37yXu6StoeNMrDGJGJOLr9W7EsNjdO4d0dXpKP/hJZQp5JdkiRK/S3NXI8kV8dxvJjqJjekw8yk3G+3/a9fbZ5mfCAEiaP5EcsySdrlRkRQkaR4NfasbyqL1upB+wLcENHaxzIv5DF163ZRk1MKv53aAbmLCWjNC1xPNRSP778tfyrsMCq9jvqvZsMWtMgZleIBhb1l5SLYmAraRjQchVSRh8+DXViLe7ogXMKyqnrZwtIdXOnOVDn5ltiGGW430FKp+7gZRTujeKtqdIdkWhhQcf5RdSgjLTYNfMOvpWmxKcT0rOC8R3vDSNRkVGyGPjZMRxGFrtImMy2XsR6YPnxwbmJKD9gGvcU7o7T/mY/bZHlHNm9adLSq4oNmiQJC1S3qryTGHcFPsoT0le/UNDS0M2SIpbUJwDOBbPphUUYhBlHg+D81nUC1y7ac5QkdASRXDz2n1sbl1uDg6SoyyrrlX7le/Ru3s2U3xjefBQtXjoFPrSzI0z5WVkZ4UX2z2JjL1WFYFuUPUW6ZHaDPwv3JcyEDNXQ5mjYQZq9lPIc2ifVMGrN7CZVrHec2lq3ylvzoLc3kf/bbE40yqYFU0KKPPOJf+cb//7hDRBYbE5TV7AGVQswfDZcVM+7Rgy8rdaPS+NeGw1Jv1gWFJFHnb4vslMCyyM6edE4Yzfv';const _IH='096e23b23384e0fcc9403f529c1d8af7469c040dce0b22ed757710dcc34ee65a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
