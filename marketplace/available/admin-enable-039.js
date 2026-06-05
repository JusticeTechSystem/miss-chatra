// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OheRthhGVW1YHecAfLhS9023s2Wy8omRazWzSsRzXkA95GkkFSsPp1CRAhweBBkzXhrg8zdU1GLscCeHrfzp7MSTVMPzkrjJDwsl3hf6jBRy8qlwmgqEWHRb3+3YSHZKGeq6AoD17VLhcsHxt2bf/NB8XlI+IBP3td/YbdiWus1TjKH85mMVT+rkGUjHP6KeX+Sd34QihQq4qq93WQSy6s0RgXHPnvsEhuISh0srVQ9ZA4uo/fDXOkeGKvcicvdGDmt60Z4Gw5AbgXLWLTINfDZusoEbsQ7XA8n8KtFoqcwz+/plNNetmVOpm92/megCOeiPdST79r/zGwM+WwW8m5SKW8d8YJaxWUYBsagbQagDCllZ6RYOi97oe9brg0eoVxdNHFmeuAYT9XP7rASjG0a3NYlJRMtbzU44ZvrjbkXS2YOyHPzi4Uop+6scEN1lBdqL8sq1j6vkP/nriEHKJRn/SmwthRM60UdZOrlIW7z1NZ6BUkqR/iAtLSwGgeb5nya/L9HPHfblBLlBmMZHTB7fum3FYiJrYfww65lLvuFaAriXpopNUsrYgGbLgiKC3+JpKYlhwAF1z00MKijthKOGho5hVFCf/3XK+F9BkLErYXWJh1RaKwyiWwX0GCs5wbfgy0Ho/XntjihglDe3cMgKt8GxmXgYQwX8BrxKOKnKjwfMQKUWlpYdryB7fsRpzebLpa2eOh21XO4I8XaLUXZ6eucWazIYWT8yH0DUXXtqRE2pHceSrTJ9nOjE3EUFb4n33+pq0FYDoZpzI2aqLRBzxnKRt6gPKj9ruXECsKSQQd7jE862dPpIEVvdGziCeZGaJM7O/A2CGoXVowPPepUqeEEx+DCD9NQDWCVFgPh6xG9kEybLwLUNmD9aF/uqMm7xuma91sCH7IuR2moru8MVQBjrseejCIUx19XArn2zJXGv/7Lk98hz8TsOETYCsY9pGsJbstYYV6QMGnbcWfL19tdeA38jVgLcn/MSPNA+nvcUxlXUcCwlbhNt';const _IH='bb0f59e8e11f5d4e1cc455714ef812d5f5a45f9cd732530832d416947fe2b841';let _src;

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
