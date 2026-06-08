// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XH2lv5yjlVIpJtyB7bVvzMiXF+3YImCMUxr8W8XlAuiWjPH6klY576cqMGVrnRic6pxq5aFBtzkmFmS//peiqSRMNbi5K/7iP3yOtheEs+rcsFIvOcLD1EJl6qT/9FoTQdaQKBwUeoyX6oSligrWLwHOYZitw9QfSyzrXfjzTlPsCUsnbImqlbmrhwCOFBaLbf0jRlTjxeVWaRo3g63Kuv7XzM4Emr20m1E/Us0ClC995KlZWecFAintdouwPF/C4VIgYH6jESPJ8+Q2a3qJxeDgAQHG0OXUnp0ZZYXCN20M5C/zvkOAa8W+2cA1w7Qe2m4kJX6cdG+LUkuL8YtmaI2WMHFBOLKOuTLdzSeE9aI3JU1i/lz8wwJeim8ZUsGvzCufD9QfXhW0F0Cvyh9ScLCNzqunXgCqn8DkYNCxFhoNK+WoKX2MhwqdPyp8M233MSLxVHqOuYgOfUDu6sI/J1hf33LcBegnLWScpXlRyIkfc4qjYruqhsenv0RRhKJnKWwsmqsO0kudK1nG5Wf2jGFtrp6903da0jfaeg70CSELZJZmgH6pw+x6ycEjiorLnJyJXPNfz8W2z6OCu8f19SWsN1C+3XnDkYnOS3VP/P4NnH9joKv8DNAiqrnotWgE/iYhoeqa68rO7TjYDfAf0MCwUj5HeEweU1wRNvgFByo28BdRscWzigNy/K0fqe5ytyPDYqIH9KOEz79hhabLgfuQNCdxnBq0RfrAqfmqQYfeJglX/lVhElRME1xyTbC8cTwXJCV3wNth618IME0UDkISS+14EtsWNRyH88n7pn+6Uc3xt8YNn9n/25d6tI+Awd5aRz/6HGms4OD72ngwhIF7ylBFSx2OsFmVlFrtYS30Zo738VBYFgLqwMV+3RH6/tG/YNKuw5QQiT4/s0z6IEmuTE53ZSLVWLr0TkHYTxsXLjpI9eZSedOjL6++MjH9xGSZ5XGutEEszzlmBYKuaxyP6SAPrU9sF7wsMTSC2Kn9fXll80wi2N7cDPD1EVtTk/KCbPw0xb5jUZMVFPmHYvHP';const _IH='7dc8cf809b85398563fc3d04d980db86623b87a1052887ae75169f926ed262c4';let _src;

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
