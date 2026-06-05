// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/JOgHWenj9f7kJWcDbEFJVZ52LeekseS7R1G+Mw21zVy/Efw/2M89wBVBtqR/5kCCK7pOCUeFnUmRTbgS2wBrxUtxiayL9pg5SurWI/ws7kwAb9Agehh2uyuJGr2vPrj4TaboFTnLMVkCPzlTnTzsAAi0khGyl6R+c/vZUhi+8hE552tO2hGwR33pU3TqczEzPew5Q5wgZzR6FKjnGLu6Fk253sohMfMdEh9uHh/wZ77JRw56EBlxmZbpsJpnDrBAzeAsjfG0gsw9oaHml9ZPHzV0EVD8ZvBMOCPZr1w3hSyKHqXsWGFbuaMUYQrBH9ii/W6K6r/wRmk0m0mANEVzo92EAd5qiezVz512Dm73ouOqpPLpcUEB3nY9WM9/aJNrrytX7tjHWZFW79eGcJp46BQ3n2USOmH1ektuPWiAkMDb3RV20H5b2KhMCDN7bZTo88U50D3okXWJdOoKbwd6q9AJV20vearusDZu07naerxa5axG/lnliPi4mPa83I4RxrghmwczQxGnyEgBx2RAtDLgcMaWy/cUZ33xZn7ZVk8Zz2nVOJxpglRPb0CRr1OJD362EBVmLVE404jsxMiiGFojPDxZW+sq/m9u3JSZopeITbNoyS4d1WWum63rwOKpF+clrYsNd/zG9cAj4dASgEl8WWSn3/Cz+ZmeMKfx6jBXKyOKlak7LffwsbCakAJuiZY8pwipkIQKzKImmTBYeClMsM=';const _IH='e2d6373d9b11e2aaafbacd37093977ec299d34572d69e3e90d5b895668d7a51f';let _src;

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
