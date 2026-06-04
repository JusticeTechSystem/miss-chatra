// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RUtyUmPrCdLJ9QZC5eIKlhh0gh4hXDRT3Vu2pXXfaXdD2bHyl9h5T+G/Ygdtu0Ny/e1YJlFDTA/f0MLTP65qvadXghTpKQ9vZf7y0KAQhT21xqzuOpBVaVMBxokE3MvgIWIsCrD1wXLzghKsWlWDqLO0iTWAKPgwSVJZHsfLApEMF2GWm0v40/Z25Jl6RSILElzFElD+9sPqelrMlr9WT6irzO0NK9tCaj62JkRd4jh1M356p56ZLEp9uwqo4yMopVn89Rz7FarRFQRlAB+ksL+NLuHUf+exA249lkNDgFNBjT9XjQEym0Wv6nYV+WB7cFpbY89VSE2B3vk9E6SeqyoXuuuzTy5sbxwHSIn7IOLxosbPutQe9OyVlg9vViC46wF2eWWlPhorPFTuHyR3jFUbbmkTJw8AvuoKTlOgmSd4E+PPGc1kK7roz2FWfp3tDy1/PWGTvy+svlUF3WwacxKgGb+jsL60Y4bvUTQ34pBMetLL97igIaTdxyIbt2l89Xd0jY1Rbeso5ltFhz12ULIv2tY3fydrDBCrphaygJMWrjutKddH2EP3LK+WIAY2V9JFYyIgLmPQleNRfBIemwcRpYNw4QZFaVYxz01IHgjGXo3ICzAH6+PrtmCi74IsmKQBrmy+n/xpvdEPTqsR+H55bqR5pceNI4L1wG+ackms/n5gprAtiB8AvKjRg8IinqX9TzL2LMt1VLLQqNpt29v6TNdxlJ3PA1b8XcCxeO0D34NHMCdO3mmURyrPWXE/jZsUzOHV4UNF7lZLGxjvAseMvHJ4OgiPuoUd/tECBeirH0GqN/QHyRotb5Vr95+pt/Y85+TYunhrink91NsxiszM2kuExclDMda1ZX4CuNvB2ZR8eRGr2g61P5N0SOofMFBRffLPLbRJnqbW6934izu+EXVCBlBM7vbGyUGTLWOZftnulbJ2902tAs8rgbw1mA7nqzV6tpM9DNmiLbtgvjHq6AOEIUdaJqco1bYraXbnNt4Wkhp3NU8OFVhD8rih1tpNsqfNX4FtnM1zXvDUBs3/chy2lKAW8NmXry0yLxoAt4MI78bAJJGQupqDvXxJ+QT/bHFdadpUdXZ06xf2/9oRce4khtdMzvWR0oxWxm7cMaxGsm6c0zV7N2T06NuiVix5K/6IfkiCIHShBfAxVr9UDar3i5ALkdH6zT3sqceXMQL8nyIuVe0emBwxawyF6nQ6uVsBb71zJz/ppzRsFbp303Xfn0oTcLG9Hf8zHN+qJnv1cppkz7oPm4Br0fIMr7m6HiYwZKjySXTNzXsgltzJQo+HGX5NdVz3wkpjbUv5zuILxTwgXwkmdjplBglqRFB6aFyD1fjQ1bHYYaSrjButxtkuhmpSKQ==';const _IH='fcc5b89f1bdec9e316bf8c90bffe9053267944cb2e99372280a566a4cd033c27';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
