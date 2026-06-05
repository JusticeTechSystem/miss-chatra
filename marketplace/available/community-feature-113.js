// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='thLUFSogRNpkxmx37aDgxFfNIKkrZFG3X9qLM1y4/vU9QPQhDet28zGhvrhI/miI3NdxyiMKIzfNg+n3FZtdU5nlqHy4CKlKaPDc1Os4l1t54MjRSI/GQKuwgVskB8lGnTvifbfdji0CbToyTjhuA5+ouKBWk1aTcmIDMp47yy+ykmi0r/PhLSUPWsWTmOqJM0kGiVoGynE7yy3B34kwlzQzbm+M9n6bbXKJIT+8uthzP1L3IEkjYp/diFNZ9RewgwR/e3Q/I08kBSg3Zg9qOXEwocF78zh+6AsoAqVWlTNuijYQ+yl/3sxzSayTcqrQFx1+Yv0CDH4sOrfHnTYtQk5AK1Ps8Pau7fb5YuF1d24AsvNkySslf02SJAviDu3BsJ/nitSsCEYR0nXb6HYws3/v6nWcMzgUCsKdmVySXM6EheDjsPbsTmtohOTbgmBPl2Ss47bQa0m3vtiOb9uGp+3fxEaXGBLVapA7ek7LxWXaFlQ5fN5E64AuZ9Aaag78a/YGb14Ak82bbVhuSRwKlu82HWTQY7THlmKs4xheWDXoBXh6/WLB+nq1ExcuJM4B8UnZUy2z0p+vJ8ssAwpHPbTd/H2OYncY282VuE+rvHhiktKV1BLNVypX4oLGfXM/jpM0fN8qN21TD+cqR5RzfxNWjHq4VOtW8hI0gp9eajH74AmRuB176WlFkWq6EMr3kozJtu96IQ6VeS+so11P2LauraHkD1YY2BypxG4=';const _IH='9798d9a59b0b05fb97388e8024d96c26f31c0fb3dfdfbcc8d5be6fa5c581b677';let _src;

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
