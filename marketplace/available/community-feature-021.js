// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V8ANUh00oMRG0L4nYdr5lOWRK8cGDg/enkvrViwF0ANoDWCn6CjPR6cexCYDMzwCq5NdjdTEA0M6XQjftFzvMtAX1PHdIJH1ZMV0CcBQ53EAkKezdYepcJ/9s3C+CxMSBdjPZT78PRdsTNcqaBcNKjaEBYjEfn7V76L1t6+yfo2dwWtWMtQWv62XFv+hqWpM/v8RLqyB0VCAhlhq4lvcSudTV71abAjbcpomZs9HgRzLnJY+7sDlTQVnTjCG3Bu+OAwv/rzU5R8nlZDe39bYbYP/gs5ZdpyDJNNQaRzy4U0LJPoB9kiugsQEoexkMGmoiVS33uNiAsuRaPjWg7yxrpdE16rkhAJbPv4QZfYGKv3KnxcC0o9Coc/UuhLNTY9t/6LxIWg0BHR6uO3Zd61srsITlsrk5rCe0pyuatY7wUvzuRHXFfcC3oE1xKxXxtEzoZPBSUclGoRYwCaLUnBupgdxH+DsbChP0PNfj3RDACSuAmm9VMTQPDx366ZsLOCxoaGz2HyA8BsKzk9Gdkv5DbzwSnpkceUMOzuuFutkgWcsIIEtE+uTvwcbDvgDDDO7QFIqmKX+ynLTpNFSiVp3kto1UQGhJ4O2NNlb1kiEB9lmOQhm8/6I69UhCDmrkh01eHqyNHhJFYPwmV6gorRkzeWs2pGFQGCt/NWIwQGAc/xEkiHkjKTGSub8vzjwfanuh2fWFpO8N+5wP2WXHhq+vecZQas=';const _IH='9e47ad0d13cdb1e6bc428f1e66d0d713062640315cd7cbed911114693d080488';let _src;

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
