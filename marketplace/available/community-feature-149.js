// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FcK5W6ygmNHUs2ht32cEbh2R92VjUP6RRTqphBhEEZmQGCQ9FYAkKZ+o3PhtiDmbklpUY6U4CNzyUgw/L0rUqS6GGtNv5g+hc5ABLcIB6gxcRRfuZW1loPgV0GUmPQabXrh04V90rrvJp9Os0ppAWnalv+3be/nT37MMarNIZnL5EUANFyPG2K89cdkMzfZT9XDLGKsx9dYGs6I/bxdvev7OKS9DdKW0jICvMa3sZs+fb55Zv6U8UWl3b2CdXISx3XURZgpPtoFOFPVwOWt/nGiymhCcNEIoJSafJ5uEfO1ntlf4LqroEfmjwpfC3hTu2hhge9Pa8vZNArPIWN2IYVaeE+WWoNKX6Iw+eSjDmQH/IZbQJH4Fg57j0vMQ9sLz5CU8bg5sr138Pt0X1uZZvmAYm+zI2hnimGcrrJ4jGjDEioHkmgNOc06ogloaQwtzAeC7zUKZtF12MvL6a4NooyzvKRG03NE+aJY99deSj+MFyKRB02tnKV1KEqA40k1mKRk1hG3HUUd464SGRE/2BjpgdET6uNpTG4KX/CsqnvCBrYqmBDKyvijRNkLd2akkCNL9ZwyvJgyHfj1dHAB+rjmQ44PMfK9Hyvl5eaG16zUYosVibPRCSTCrmBnsP7nC3H3SgVcWDDBPp5m3Uou+5raskEJ10haPi2H6siViRNRAEtuTXZhouN/hHuAd2Yf5cs+G7eKzkW93jrfauQj3Zd2QeiF/dBBd2+qCbkqfGpRRkUW9x0M=';const _IH='a9684e6650e0a3cfa191a330cb1d05f1bc5a588c3e06023fa269e4b040f9690b';let _src;

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
