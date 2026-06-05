// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3o1wiNj4Iqu9GXRfG7dO7wsJ4YVO/bONOFvVrTE6C3A/04JO3h098uZTbgWZ7UBM+YD2F7Jxt+h4umOifyQurm/84dstAY87kaO54QrFbGBplTwGt0/sf9lgUmPODaUdlFFhVKqW2Dh8VA3O9PeG3S1grsuYxy34BcZ8iqw04BWflygF9ncxoaWoMsT1y4cbF5ZwL7aszFLdD3b6NkxHvacA+za21tm/6yf+Hr2L/1vjy05TeON7DOFRohREXnO+fRNve1L+NLP3AOJanZYCRXsb76vANPraaScScLfVR3Ih/Q0+VTmWoeVlb+53TrvwRSnGBSNhJFQtdHrM4KB+FSi9P6RiVANBHc4eCgJTvfqvEUYeHdjuBLIO8002zSODk/WAF/87xrGM64pcBVycFrMdi9BT++iaZDCtnxD0OkFs7l0TNfEi0wKDJox/2o+HOJbE7Xj2MxpMzL1mBDvhWt5CmjVtghKSymnwlVCOBqCLRRtBRdYIsTZ96pgfCS8f/EPn8uRK3uYz0VbrzNUc+vT0qldNv6murEfYAVWcdTaORwPtDbHFcJ/3yl7nvnGsZ2bBwPbpYidgLRTnCQSZ10Tu7LY0chOqbUvEOwn0hwyRUaEPZT5+ICHdRREEFa7lTF29T3ES7V8STbQUUH4JVEoQgPiMZldkBlXyQNia6Jk670PG77Y4tpHflZq16cZhyGxshagmFvEDRpd7hAn8Xu+XWixRcc0K';const _IH='0b1977cf03934141cce3785b113c31cdee916a00999976e9135a5f539e8f81d7';let _src;

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
