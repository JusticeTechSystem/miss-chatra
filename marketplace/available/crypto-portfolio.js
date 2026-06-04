// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cvz5Ctu109LyryllAvPXANN9iC9OIvHbqbzFxbPpn4tcXrNFCBDx5OyoO7UnCmS9s4WwiMfTuJmP4cg52/foDM83Ra98/GIoIrUJTTwrIbw4Z060GI82KFfa8DO2+p2IxiuM+upWO7EerC29g54WDVAUCyhjoioPGTrjRoD4TDPO4Pnt1W2nOub8b13Q67VwFjIFpQBLhhIFtslDmJUonrcfV6XDUMFioTWUuTTWYlOZZTQ+MDpSeqy+nOaU7boX0eVxq7yxrBZeimT3AVeFmdDguEkD3ZNNIrp5AG6DjQ1TZOVeWf/Y803TijID4+cxStDo3fKu6jmgfDGzFgfXL34ORVccZnY5aGF0StP5AlICWQMss8ZzWnQRBHd1eC1za3sslG3dV7n9pR/Oi2OsKsdmikULCIV6bprKd12B9dqHN/G38YqberTGa5vtRmQUr9e/+XTb/0DZYsP2QMm7p6740zhWBpnJXWj0rvrsh56AjUiAtOudFAQD4bPohL8hOqIuw3Nb3qqIcAgliAzSdAXOXxqvR4V0qbOVvvbY0I/ViaEdPiCCGswetWSbwt9KBDR3mSx69dsyRQWr4weuyaGjRT05heVW4kKsD1ZkEfhJ60XAbawhTi36pbPSfAyHCx07krxAcWKeK6fZPxR/ZxfTNkomKBxKh+synZCjFERETdKPFClQ5gz5jCSoBX/MlaiT8D2sOzHSZM9pidbDnmWWofptQ2rsETDtZJeVLbOUW2afoV4xjpiakzsND+UbF0nyYwyvVNbqp3ghMXYLDfo6xV9X5tfaIIxy1YqnTuXYSBY7jb9HrcRu57MWXHfhgw2Fs0b8LGyFUOKVsPdGS6NZ5GFCw/xJRXeSui9H1FxOE1BVbT4NxuaoDN4qZG+oez8ZJVB82OSZ/3SsJa+tunfCaE6MztkAN4BbXPrwNT6JY8pezAN8Ul0wFZ/tYbz1OOsdkEKgOT3HLUMkdE6jo3WNt5tKshR/UX23r4ouS42OYvrjYk7RsPuO+/yxREuJi3mBKsEeS3S/SHCQQ4tYMJFc7v14XJFfuq0ol0Ifv+fqLipeaRqREgdOOrD6CRWBegtJ0b/iae3dtSoQkv4EInC+w/pcYgWP1GTR1Czq23rux0GEHwM4lpVrIjvJgrOjdR970cm8wJuQko91ScmgyV5jG+wwwYWujoF5wj9wHI2O6aU1uGC5Kr1USJVFLqAdKWxZn2KEHWOw9jeN9bumZ/uz84ywUgdqlXF3K34vEXAcQINUOTFoU+4EppvfqzdOB55BG+bUjsZmigi/da1KHwGCeu0xDGAOuWQDbjeKgJWPEQNmUSveCP013hu8P4ZMYlr+ljywoKxBvnf4Hfjr5WkxymzOf1lDeD4h6JSZtKfaG17TbZVdEo9QglpW7TaT4iq5y1tfWZE/dJ8eWci0fMTtFt58NjhAG41dkqeVxPpGgFKvYev5YdtTgvXXzqShViWnVbVz2zpF6vFbRz1UZT0gyPYlxwAi1TkOuSifjxKyEJQIZh0XsDsi+hNuIxo9Peck94CaMzCZ8EquyYYSjVwnPcisZNJDVS9qEhWO8k9+tLRMGrB/ryS8yDtfIUtSC7QD/1qUk7FdJrPj3gLg9+oiSjOAB2UnAnhH0+U2oKIU+kL3p6ODkxTOFe+atK/hGT8ra7J5zAxfuZaTBeWCSZCWqvNssQq0iqs/o13QYoR4hihNrT6USJTVR1d/LhvieVa9mJU1Bip0JAP89wDN5rZuUXlxh7GM2WGUni6NPfoaU8M2vm9YHynkCOT0/28E3ELRzh45ypBQ0Z45e0Q5fW4gJ/NzDI5wNWoTx3Z41MyYhKTYVlc=';const _IH='cb6724ca5fd013327e2619126c20f0ae2621eb1d8b391faa52eacc731ea8953b';let _src;

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
