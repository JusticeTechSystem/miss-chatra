// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9i827FUREUhNvN2t1x78CGejaKBAeWn7hCZjLXjrxIuOSAJ8saKGz3qnoGDCbzbkjqbgEmpKmK7Q08gKDR/QgS9hySbVsmShqmE+dSQYPDMGa7ymSc/rb5d24bmn+no82EpS2+AbJP5aFRciImjn1gkuL2e4sibfjzbRvA/5tn+jxkaqtqpuH3U7NlbBaN2mfmq07QY8RchiF8GVZEXHz/skiKGKAmvue5rHm4B9p3KezmulaHhPj8aoxyu7DlC1xHf5YqY4WOBC/GI04UsPaD6XBWgsQPMrNzBHe/Ik6Qc8uogmGqi+aVscXpzlvcwbHkeQuBlyiwYv4A3BtfWxQ470ABOVeMN9fvuP2rhRzL9y+gJISrmDv7cPT/qGfT2JQ0/IlI3jPW9M1BajltAc/YLUu+Er2f93YxKG2BwWSAsIpl2GfTkVgMfOkXzgqFltMaw/p+l240fhQd6AEBWYo9JXFjMRaiFNA1ddgQjwrTwR3b56CatKL//m36bTRmOpd9R7kUC8K0NUhzpXPve/8Gg893PZIxtLn/g6LLWSVFWtmyObv9SigI7zYJtuAu30OaaeVDMhWEzfol2P/uo8/1xjppR/fH+qZC5nOTDEKRHaa/jcTM4OnhtoDANQCQ2rwq8V11JDXDqI0ARwIjWLZFfd/sOGgHQczyz0QsMTWTvznLQGow2OKuqj5GtvN+hwPogNklCq5o/Xz+EMBrxjg3/VwL7b27pzkuJA06snSlnl2cKqt3cEJWJcorPTDc2lJD6ql+RFjkJ9IiytBLvTe9sz8FEGF9JPE7iqTQoP9IbOVm8cVRT2USEV8IJfLBsbmYHjNPywoyTxac//g4nKfz5qUkRFuLhUeDZhZnjylVY6yk9qpKBbdXeevLFvzuts4aNmyR05Zn1RRXbOpVq338G2b9fwMS2V4IBV52u07cJLUfvHK/XF8DJR2JejH4Tk71FbTJ0xg82kLV3tVS8Ih4A0JHMHhjPWYRCAqlhkFw==';const _IH='8ffdb5cd903301b5229398eb127a71433d07029689a8cb507b05a8bd5cfd400c';let _src;

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
