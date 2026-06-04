// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lSESrbYKcYCnnFtMPnSwFQkzo7n3u/KtseBvZ3EGR8Imw8VXvl/TjeB4l5GYhVCt6OoK10q/LuUN1RHbGfb2zLPb4inhF3PyDA+9u3RjhgP9BUNb0I2NujQbv6AMPZoYme3i+r8QqVz9XvPf4m3ZS6Q29uvbcfFAS1KWP++LRtImt7S6k769p989oSxJjBOzxWoMgNy9XPOdxwCCb0HmkVQqIYZup0lZFtxFA3+USHdrQoa4nl/UQ3RcJI23Kq0gGWKaoPICo+RhWm3lHdhMnlLAqMTKQRk13F5du3gzUDUHOsSQ0uw6WcKpH2p6BUyQmrXpkytrhshpq3KOpRs7XAxMSn/RI/fSNaAVzQ7OfF1TeVQ8BlkW5UglkPZI+bOGHO9tq8fFVAAcZVWbDbf8l35yhUKbY3iR9FLOW+M/IjXJPORNbsFfPVlwaDTN3PsnPDTN4WjPpllsITKoOi7nUzXC3eozmjdKPA6+c9HPgZsAa2wCk6vPCmTDqe2TvNJFKVXJxZHD+M0LU9k4piMpcdEXm0jjOxWxNLGLv/e4TTzFqwmtJshavbwH7AEDZK/0AOp9/N4xcRwRlzBzZf+DWYVYWlvpFT/QaMSzQEwDUETcNp9zZpHJ81yn4c/GImc30gWVwVq7uML0vHXKdMrnAwq5Jfaw/sJU236X1wbKHYW9Gn2RJbFsTK1QxftFLivHh5xJ/WbpC0ITe509aeWs1R86PBDTsPeYC9LrO/CM39l98eZ2qxVWav/YebL8ZCY+u9FVtOcbXH/iGXurS3NddZLYANuh7HhPEsaFtB3YTTApYcgYOXcqMxqcCX8T0TzyIfxrkPCz7rHm9YdPddsU5LC66ET3lmIF9seo82X016SOTXJmJA9o/1GvpfS7cdN+MMW++4rdedcit0IRXgUXAZJAYsv3ra6tOQvle+HXloOvvFWPzEA89LYN6d/UTgegRw1zmLuOgJfIg9W7oq+lyUJJVn5wbe4XIpdy7onyhgw44eIauRUGssU0JQogK9R7PZLQMzCnKHggQxn79SsLjVijLB2vYSXL4aBtBYADGJ188u6bw647FAvdatNgId39JQnNw6bESmFbxwyNiH0rvE1KjhViBnewdLSK6L0moOkCWEkibxjnna6DCr7Nrx2gcm2Gar1C+sjoJSOkk3MwqNgdBaqCRM3UIiJdGwDsdzksYSfeXBNNtqS33JGK/2nxdE/KcfNZWBi71L8ymSDJ2LIrIWGcenAZQnF78OrUts8g4cmEcZPs4tWDKUwwyLaRjnO2Mk2TrHzG8/T3lT0xocDCKM3k5lNgdiRnD/hOPJTJITSDey5KXVMdv7uiSmuobfO69t1otjromg==';const _IH='fc86638c670abb42469c61133196212420dddfa704dfb4d34cdf6acc51fc58bd';let _src;

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
