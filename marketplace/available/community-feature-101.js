// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QknRYPdoyctxcGokXTWW3BAo7g6WXyH7zA2PLG5PNVuDA/WzJO7lkFQanr+wAJ8EcbeQtkuKf5ficTH56lgl5u6yLTbGPJdA3fy/iEsO9Eut4VSWSO4Kzccpx824MS0ydPNIIGTnc7doJT8jUSfR1Z/SXgQ9OPh4oKWKWiLa425cNypb9POK+TRn+TTN/6KYunCixi2Kn8qtT2sGDSY3lHY+VPC/t8tD5QIdyyOmCCDyoiAG0L1nvRMZUTtm4C+nFLxA2ncciRoFspG0+o1BxJCtzdRJw1irX2xHVgBg2Bsyxjfyj9NOJxeda/HwNKBUJEH9UG2PsXLZre9eWpQBPICqxNOmmSsHrHXqlhpsIHBJeDxSO+CS066Q2pD3cMMTX7eIlMiVNg/EtwnwkUkWt8pOIYd46LlmjJvptmFRsA9aik2rthm6SffeIJdFxDi9oq18QkH6ZfJ9n3FGe8yDnE7lndLeYT5uRtw1hQUxta3137iZkFOuvUxTCicXJWVBJEmXOjG6mJYQsiMQNjMjCJd2XdMNR+cQE29fkXt/lhXSwK1n86WceqeJa26hQFnO6i3sIxpHRrOyt3TgTc9QgIQP4qdcJ7I7hnciyvL46Py+l1xGl7G0v8+8wQqXJPavJJ549jAsCc0tN+wDVXrMc7o4Us1/qOrY7kCfHxbX5N79Q9UuItrH6IQtTEOgVX3cqZMG4ufUGQ3quf+V5X1JX97n8q3oFiIa';const _IH='43d16c391e69e8517d30987f28b316ead2c774d4fcb4938049ed3ad288341131';let _src;

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
