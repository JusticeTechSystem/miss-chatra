// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Rafphs168cjlRpw2zfmRzNqBv4O0N/sp26ZeU94i4IrwCxPFTbDVVTEsmNgUj2j2MEBap0q+sU8aTibS4ZTsMkg6z98Kqea7RVlYlatn3WnVnLpck42Tbv4Mmqqy6n2H3Lgmb6HEXLo1sCSNeNKLLRPQ260qlh6vp59uEOWosZ4plsnnKdnG8+yT/EWdn9bzD5eE4TZhpnLXfz+9UEZzf2+f9ayJzvkhRglqYjX/PDkGOWw6FQA+y4aXMkG2zn155kVQVFGDnn10bPg7cFB6mrm0YOZEp9LaqLlJmLgYzHPMoNCdRllh3sm301JMHFpB7p7tlwyHEM9WKdfezSv6p+lzXUxO8UUWXjfO8MzD5/6AeRkevlj7mLsxl000Z6falH5w+JBSFtzPkTrF6/nARMTp4R1w3faJL6lFQw8Z+WQzIfMCGmJH+JEQiW9pwoAG/Nqxe7EB5kWUq2mwQfK6pJxi+6HqXGgclzQoi1jeDLWsfWAmErGRicvYMEGUpSXlHFqtTAm9W0OE90c0OWxZ50rT1SpaxS2ogyU5Wd6VURZuMCG+sktYmh5v6y0/TGkKRkSdLUgUXjoqJifnfM5JPPdUg+C9z+x3dGG+tMMRX/xXP5/+GBerXBJXv/ZILVm8kVpYfMTLmiuywOXBltH8OS2HX6zDeE7tVKxj+HSpBQ+kXszwL5eh5WYyHJWl9KFz28HDTwmH6/m6Yruwrg66EdTmji4SBdEvxo5tuSc4Fz38bUDMN6iqEcunvHS29L3HJd9T5ilCoJJzvpb/GdJ9xhBZ3kk4oPQmBsnBOgfeU4Qz2nRNSRoraqvWlwGbHMmC3znP9o64rtyOU4YHIv9A1RT5VVghcJQQlVn5SH6QaAIWW4I/w3cENlU+DV6PMbhp50/NzJ7wjpmxltSFiwqD1Kp+iGp7SA6NKV5vD48jNb0JuYMIS8MNUhnM4HzFO0yruGfb/kCin7rdouVaQr/djuBOaxdnkeL8BYwbENGWQ=';const _IH='8a80b2c5feee41609fdb737ff64895df2984c23c099f634c2cc612c8a7c1cbc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
