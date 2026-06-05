// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJ2m5b9Cg5kqueCfxAm+LWZDvsDSK9tTOWqZmcsdFMcbPpG6zg1neqHVqFXrM2NBoQEjvKGtqX03hervfckaItJsauGYyD5Q2AqM68fQ2mE4BKD5ztw828yCYsyTTggEzcjdd8xaJbpxt33+ubKkERUuSbhxCUQEYOjbJjE44xvoyjFyzqNLl65jtCOsMR5ZJazUxSQtmfkmoaHf4O8KZR9PCOh3WGO/n/0bibkH9HS+O4cWXGS8nqyDWpjmg6AvPlbz4QuSZaAg2pfkunx5ZMwmie9c4Yym610OgctsMDIPJ6tqctmRvbV+0syzgeXaCYgbmA6Fu3MJ/KmNtMrJK2xrwKdpQHNjupZIVH9+2nIz7YLvHziIgiqJof4GdtboDxNTxjWzeQkR4BHqDJxhmjxIhcvNctpnjfHMIaQB6UiRBJ32mQkJ/AMlMFpvjVVp7BCsum/FzqUzqHjUHp0IXv89jB6pcKMVUHx6BrXeRExxrhC9HCUJBuR0E+n48O8QwZ4LNO+YcUeluMQY9DKJrotu+zOd+CgkFkQcgbmCAK86wZPLNN5T3xPQST+eTVBN7lJgz/AKqRZM7EGWyx0g05y8CTfg/9uF1ZgkTHkAIbpMdoRzZDexTUIkIdiO0duYwQWj68Z+tJ7dq+lSEoDldb2RvTuvwerdm1MVfI4BI8CNxDmIYy0wAiNzx2bRXQsb3OskQuJaC05t/3xei2p0WTnbunBfu2pBXOXJsAzBPK0zfrIDJvE=';const _IH='7f9b46ea41cf5c6f3dd698f1a825693725b2f19db4df27a45f5393308347d06e';let _src;

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
