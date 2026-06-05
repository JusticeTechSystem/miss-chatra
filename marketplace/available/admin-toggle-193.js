// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJ6bHIOeGCNmmFhae4SBkOFB8MbR1vpxE0YrsI9DZe0aizkUgBEfc9jL8iGbed2a7+ZrRYg5Gg95+wsxj0JQ4hO/HYmlPEc2aD0lCyaXf2wEDDVd7r72G2TkM1xReq2E2zxqZLF6iT3ALnnT49I7pNrEsSCHjoUIXya17zb2fu3BkqVQ5a5rJX6c4Jdq/H+Y+7RPXCObtDo5AIAF44svGLIBnB+WFTnrcu2YUjH1RJ7x0Jco8A4DU9vmLmNfQkUWvu7IXPxyXwdKATnqya+75PG+wFfJzICy6XZ9Yj4etVmygWYdkmDzj+jroLiG6uiR8Ph8ttl2NKY6KQDfkbuk5pJvgEBOUzu1OEdIs4paCuLlcpYEenYyL4pTWx2pj0/CtVyFBeNbnQ3i7G6VG9ooaK+zRv3Nv9vlC/BrhUUWrVz7L1y0PB7SzcjDzSTwKHvxU1HU8nUOOkZAnjx4WFtVJdy3xMdWu4lpu2r6jyUAmvzU+AODwlAgIOJSMlaWOOao3lm4rrrb7Umzo40WGoB9wVoDV4aZHOwebQE5Bh+vhEGVCSpbMutKCfMChOLXyVjMgYICpnAG4katnJ2A3/JsTRLUvWHFT70HDFOL8Yzxyot3v9T1prPiwJpIohwuuG9TlM5xD7Kna/J2U256TNmpR3DNBv6NvgH/ZA+KdGL2Lz1ReOqBSnKieR9F6eDTdKTB2v900CuoJjUyj2NAXOOcxcGiddPLYKlHzL9wjRSWxFyCr2iSdpfh5MhqdJFeQiglTk36nK3O+3sANNTnWN6+RYiSH+zaJT3Wl096mPwqKuNJhGkia+UDIIezB5KgD5SZ5mA+yn55MtAOLzNLv1KF4HOiLXbuTDQ1ZG0UP1h65eD3doAwQcCjA25G51WS+9COMvC7/B8+fHBoP132964qM6lXVlqfXCIErOJlK9ZuFL/pGI30J67TNcJB8ao9OT1bmzTFPixmZlhhHfuq6ItVImEHUuTGYgE6SahezV/EgWyJeLAt6TKz7mh6aHMHQPSgRA==';const _IH='55596b0c3393aaa0da0c5daa221f9876d97561ad35d05dee9b8cd945e8f141a9';let _src;

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
