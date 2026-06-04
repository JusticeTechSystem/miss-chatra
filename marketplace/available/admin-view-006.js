// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XyTJEtnctRl9PywfCgJ6crnv9sBXCcjfDwfQhVpQ5AGNiKfDOrNeblOY0+rrX+vAqTbA2inSmtGC6GHCFPDx7LSNmTZ57FodwiulNwN0SNGEwKHg1nfHdXgseOAX5yj7012qY0V7rtR5yb0m/oWlX9ww+Ab9TIWlipubL7JARl6RB3tihin0bcHIF21Wv1+yf0h4Wf4E3NG5STLRVK3/uRkXl5DifH9FpY4MUvdi2PB6XWzeU+ycXJKG38+AxU0AmlRP6IB57sh9QU5vGs2AMIyn4+AnUkMF/NWmd3FQS056SbPLBWaaeJxDeqwGHl16AUBnrt21/FLfQO/jo0U/kFCdLpNRoq6CLE4xL9oNLgTCjLY+Sqokre4W+gW2vET3c3fwjdyeqh0xqS3P0QCHQ3jht2xREo2IgW3m6aBoJaSrRSv3YxP3/QSD7i7lSM2ndKgNuKk2vUJ5Nqo0yQTbEPo81QFqoSGBUSW+cCOnVqXKwvv2z45azF+ewKg1c3FjC+TzTAvKLTjUQwzED2mUbVY/zo3lbSh6A7GG6CW2xQy+jYHWLQTI7yWU+eu3jrQV8W7jTet6BVNCfw56eYR7npfGB6utCNIcxw1XfT8lC214vMjTT5SkX4b/UX5CchIpXZLbUmpWO2Rzg7sxTlTwPD4nNcf0064SvO+z/Ygu3K/TGZQBA7dj/vUx8lTwEso1kbpnKXJTAt+uZ1JZsOQxIdqqx8QpI2Fqino+3ZbdS+1KYITZmfeZ7DWR4j4v7bv6cwU1nA9mjt3euE49R0cYJbvdop1EGZNxzK7AFQcSOY/RCH44qlxt49NHAVpAiAfRLM6X2vSap0GvxkMcCrK5vYQ3lw9CcVTxLIolI6D2Nu5x4iilsMY3JGusQn+m24Pd+ulw8BSrtaxUM+7W0jnip7n2ML8msj7eNbbSkKpkH2mLt85jfPvjZfHJ9CR2pySj+5cRClKb7sEliSXxFmqX1pQ3wbo3Fa4WkPwY';const _IH='52e99ad903d813a0158fd777daf09c0e630511b900b8d735c3f8d46b29145674';let _src;

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
