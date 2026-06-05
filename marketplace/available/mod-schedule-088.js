// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jhRMK3ZMfmFI8vfDn2V1lSgU+kdZeddk1KtOduaaNte1uTgs2vVVHMRx7nkdt/1QyW9wHhz/+FfX+xKdSNasgdgyZd6Q2IJMZBF4zhCo7cSlhHfxysAqLzft8H4mHaVO4UxemwnTll1X97aQs/ifBINxcEIAbuQZfOrnMg7wap1YOKTg1MmEc1IVlxHhwF6I55l6JTk9KpM71tq17udf9Gh3bSKfsER7hcpK0mDW23g812EwG8+cgH22sMqBNDL4+Kkjq1eFRftHOC7gO0y01NQb2exG+QTFQSMdRgRcc9DWBggOnW/64Mm6s9BqeOi3SPXh7Yy0HLHFFWPPhdayLxeRe8wKnK5Wjvql+16zYqN/ic3Ef9uoWXw34/gW5x2DJUpJRsvUXrhQVGvBaW+6YuRPFETxvZwrpG/kFVDvAr2wPeARwCsRcGQiJxcMWztkWiWjzsSCu/jJTlKWQXHhvSNAUQ5d7tl1ID+/E5vpwonYbTnidm8/UwtnN02bijhQCqk+nvtrdU4G6+xR0s7a6V6yu+DL9qxmlskkEtMp3uaGkg8Da5+5m8aEjUsRwo6JnNIqMz0vE79v9TMzeY9FWWtFH2k+T4GsFfcVi7gDGvesoXsVCcJMjq3v1K6DSil3HIn6prUOQT5Bda+gkgJh8tlZygu0m2Z98tJgv0/xS7KsPcV5c7nKAvt8/gXSJBIMEMeR8dYqOuyyaec+J+C4SUpj2Gmt5wVNybVAaSkMPR+m6BtPvxVZNbcdm5yb1xVGy/hOgT2eKRgjxCDASVP8QpnLNYBGKhLJmZxHI22G+pXHWTxgFTC/F6RYRwcBnhDVVB5A5qE+GtwSHRWpzAdxXdlrRcsmDY6g4vjwi9usTaZaiovA3mdu8ZDrXFim23+MFLOwN7I+d8x2XPi1ptlKC3LphE2j5RveZdH6/+6wxo8kOOpzT+LLULzUi54wY4giOb8/kDWocghCEiZzsxCVEFqZ1yhFPPyrWvcIuwcq+h4IaukdLjc26q4tJkxs8LdEa4VgZu5bkO5eEhyZssUL6RWYEupkqLCsEQnQzJKACIgP/oTbSZ32Emd38NQ+fUYeyAhGPSXSZNNQlDFOjY3jhOvquXWw0Fc2Ez4M9Wnkgmaiv3Cre9sVz/QmuZPZF44lIcOrDE/ucRqOms8e1Z/gX5HM6DwuVEPT7iacuDyppu3cvQzgcGlo37dLBw8lwe2Xc+yAe2fPcfA1rkXtcu41CaBq4aH4PDu0IXBCCp28qdrG7cVhUI9yDL2YpzSAVvehmyZv/GVLV264guDYpvVZdWVZC5L2oJEF/WztFE+DElROVEBUYngqg3Xq8QRD9CLbl6c01T8RGyskDRuVMVRpQ7bc2YpGnJQnrkreLR6Z9CadAZk19O2KmGSFrhgTc8DYnTfO9CGxuQ==';const _IH='fdebc235d2b6d074acfd389a8baf5540d30d1f52764c794ef6670ce5730cec28';let _src;

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
