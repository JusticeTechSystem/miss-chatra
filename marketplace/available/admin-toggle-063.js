// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FbWta6M8yW3I16lQ8WtK5Tr/uV3zflwFWU61AsP5mumpJYYkrYrmkefla6MbC+PYGUjW+mqIbVeOEYI/rMvQHrWSR6NgKys9cttlaB7je4nO1FLNe8A9cjD4U3FHKdhtleb10ed5wEXYWs135CXHs4UfZ+ycamck53I9xwt6L1u4PjNp3Y4tNaoBARxRpHt7zZi7iaOjjphnZ6RTDB52q5NiknyyoJGtHRvA8dOySNw2x2XMV8zj7vxweB6Pf5CyTyp4mqVvA84PoDsR1PxhtKq1ZEmZ/2s6QTzSgoyf9mfbLLpeXs8Cuzqf3AqZJ3TEYaigtpsFit6crWxIXO+bLDqb5jfdF0VYnb6r++eO3DZJV2dSpu6gvu3Oil6jCW8N7MUKklgmX6bFScmlFtYD4ZIa0zT8swRc6xr2AjQMtFBXPsRg7MpK0Tp/fsTRA0WbY4gugC0iFMr6hQm71LRevppw5es21ArWLM8IY1V5fne+W3sarfJF2aaF7AMM3C/79/+xnXQ2gq+6Wf4LJSOPco7G/bb2ZyjJ/PCN4GA6KANfMONO4zCKXDlnjk8+hKpaQHEyHWLRt7Ct8tvgQZVU8eEvSi+kQ3QOwkPndXguMDTsl1UQdZOT97XtL2bf/BzhAUVat6cCm34MczhyJSiz+BAcQjxZRTSY5j9LSFpklERMMSyzvrVQSCHTVrAwofMGPmgJ6qxaMsghDuO/ms/kd3TSbS0JHkw9nvinGukgx19Jd/vbV0eBIoCI/+8Mefk4U0w1j7/PuTdgY1eJLo5z8DJBKZxHb8eTGC/rDt+2FDaQXW1ZXpAvBKszJ+3ngRKtlP5RqevYjp/WcBptR4c2DeRvxSnZqS6rEhSp5n53639fndzEgM8HP9W1V3BUv1aLGIIzk+RAFzPhFmlTm85XtOKY26wvQURNpQgnp+WOHtzBkjyuE2SD0GayDaSuUKmnnZrPJcYlHlwpjS2cp56TNx7gw4aLAcBFT47Sdz8MivE8N5DHEQNxp0jQpJfu';const _IH='a584839a06f82f68a5296311f83e6a984155338d86b28c98752b7586ea834563';let _src;

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
