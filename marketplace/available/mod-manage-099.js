// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1RsOZAa61hRwmEqk73td0w5/WwFkANDjkGKAS8p8fqHlzN+SIUN5v151pf7R34qKmcFSFo7W1TkEpPuhRmulSQ+QNutUSS5jFmwwX5osQsQp4zvwAyiY8Q2jq9WUmjP90o6gR7g/FK4n+/bX7B3RCilkoEHf6Y7zDGZ+FTPP7iom5awBBAVZIU7dLVFoy+g+pshz34L75Q5nvsielqP1Vsq+2Xoa/683L3t0f+Gfc9AZ4IFMcWlZSHgbXbK2l19Y5K8TY+lBwxkx1OVN10NzZGGaizRroFRAavtSOALrZT0KzV/D7yvltxWKHo0BgcMe90ZFQ+g/WChIgXPlXsO3h9RjfN/zAiAzQOgWnl+MsBrPWmt4MK3cKeG11EpDmnsIUU2cNP3MFmZ1x+dGtYHs83Vn0fH4KBMzaYuI25R2z9gK32ZMZyc3/aN/aqm2T/L/UpG7C+8cp0NbDUgCMVh7keB2N4FapF2YWgiI5H+8n31tBJU+X/4xf963Hsc3vr1XSIXV8d5e5aA9z4MTuEP9ZYEB68vy52FlTeLJUnueyKOBQHalXncIPZ+zzFCanf/BGCd0s/yEcijcaae8Gw6MRd6raQIgdFcaLWyimVklh6H00II9FuqxGwe9Ij+/7szGwyWp3e+zoyaVdLq+kyuWpC/IrXORVwcOTE6AOEJedC07z4RwNdNDVoWlSZzZgbItM4I9lv7EBqaEoILrrDAzAssWAASGIzssh30OlqL0EbAW94dn6elrBN+Kk0UuYEaCcpG0yVLxbCA5YHt4vQ6Q4OYpEvbdCYhrjqhimeGOsy/g5PyxsKZZ3lj326UnGWZXUx+eBFGzzKxQNc1L3n+oM7sflMxPI5BSVE1qm/NtFeuI277vMH6xmyNznA/vZR7uiWnhbb8lEWqxFYi/qbrfh56OmXvu6mTtitKgAEh4t5bESB5B3KVgU6msnt0SFFx/2fLNxa+p6+9lYbe3WioJJ8Qh11A4Hne4zEhXC3DtPe2M19Kyz+BScZJb6bcYH8pBe6NM/lofS9EWNbDuPDqxnXpipuxkA6/9sjxSmxVZM1n4dltfUnRthJSxNr1XX97uUQoXsrzR3a63KtUxPVlL/6zl5L7hB4iVs1P0eHJXocl8X0IeAan1W4F9b2uM4A9Y2xwxTnASj5dduBScYFpp4sczWfoTqtduG18+x5oDkeqbDNFfozm78rM67xKybxsmuM2lX0/J+MRCMLASDebMqkP5GYRF148QJFqb4+PzKv339gu4gExa/CpbuRN1cAjXaIrT+NZGBqe3kFnWKKz7ZMLrDO+N4r/XJRzlanGnXU9QmmSSnjNP5zQN18O4xQosREAgxNBk6kN+rT5Td2W2qtxKtSJwgUubo4a0ZRCzdLzYBKQ=';const _IH='9c9bfadf56648bdefac8e2af2560041094723742a9b3773d3004628609e3e252';let _src;

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
