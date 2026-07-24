// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSa6aC8m533uNVQJSlvLNeloOK5MN1wd7WbsCpITMg79NhC7VWW4WtujoYtC7p3kk+zhjs/TxrCBbMUfQPEc9VROuH4OZMv3nPONddYqtw67BP5IFBTxuXyQNUxxgAaFchrFXkumCSmelMkYgzkHRHzuqoZm9/+zGGSXd+6FqFs9IzZVUkaY9PyROfStanWPnOxSB3Q5NmH1tjV8/Wersm1+ozYsYME6zaVhAc2s1EEphObktd+PZhKEDyPA/wjJhO+rkPvowNY7BNE2SU6gyxQHvVPNSS1m9Wb2NwX2AMr8QrelZKNtHLZxFTUbFq68axVsRpIkcPfFkavHMYLnO9kP7kwJ6rHM9oVebp9j9iVmhAS+G/kenUc3yIpjRjw7IutOKHAD3BV84qJy5w5F14A+8PoJTrZcjF0HLMXaLhT2eQJ4UwrQ6L9+fOhqee7xIu+T9HKXf3H1Ms0DASSg7tFXM7Ckr+Nq+og5CHGlnDhhMZwUhDT0oiB320J+sREPgD9yNsWlW18yzGyVA59zCFrzs9qm9fEU0qvu5IgvzzAqAa9kcbO1z/5BV4ihs3hIDFQ1AiU09SbAN/Ok32BrIKWh9wTPJMHsHmzU+lSlPHnnUi0/tj7enX/kAenMjmPKEuCuhf4eWVK0lKPpEmDqSyZEV2tqu0WLNgZ4LSBA1LbDkWdL5EkrPQtROcE73fvj1ELn5EVXUOsMgPha4aapTVudJL98sWvHm1PAaheuYtxWeBPUqB7lOudRoTSvQWRAlpJz6amgaTFcvOQE65vPsR0mhT3+Hp8zTSIsLwA0vz6ThhxkDiGia9uSbl9W6OyqBGG4I+SP5wgfx+R7olb4LnfDWPdYwz2R471YKR0dFnJVuLBL2FepTO8OuRegtDDY3t59L5XWwrGsDwaIiAkjNmBEZeBuolADtiKaBVy/HlIpCFCjWI5SQoivgA5w==';const _IH='b42bcd32d357f19df3a7031daa5e03eb954edba9298039f731c6eb58aea8f688';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
