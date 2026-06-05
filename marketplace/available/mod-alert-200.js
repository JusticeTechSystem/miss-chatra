// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e8X8RSaxrekfGOYA9bQjXXCSpFtIJHoX9buV8LCPZ/svN+dRMsPwgUwUy7COsH8W1O0yGZdv6BoyTuK8Qa6DydLN2Cb3g55Jj0PLLysvSGsHfF8UIx74cfeVuj6OkHPy+CDgIJsC296qanB93wNiEJ9EEBKHT8wPQH6WhtFBkXT5MVI0cJa22WeqYEG6H7wgjTWvo/x25mn2lrKIkS6+BOX+x0WWLIjNg6ke60je7MLU5g446d4k4KMkdyhR0zPa6CJ9YXMA9NqegvjWHRVP4j6smKKk+H49tFTP7fIzvBLGKUOiaZg21r+pZ0MTWt3QAG4zWaEJoAzSKV41oVTbxpwn0744Nbckvh59Ib+9y5UmHHoz0a4S0n+apFOpoIpr983ZfkqcIZYj7CtIJKiBqMTfI9qubcaVGyopBRRpBRpBqu9jGOmV9MDEG3FaAKkhCfZPlPUkcIGQYeLH5EdeNYbOuDzI/odWgZ7CvEhYXJU/TWfd4biP12TDs7t61jTBfYt4h7MXEjKTb8W72GGuuJy10nACFwot9slmze47aUY1RTBNchZCwyMGATvN7GjZwQSfOtyKxN3FPIfgTkrWR5ltc+K+v+xokdqOjWB7l5a1Rq9s+K8puPAQoH3uHPHhwVbYn4jwCIRYEA+T/wdMMTCkiaqEnu+XDEZtoA7C33Td5aE1VBPAZEfjN2KaRy+FKoKFCh3AF8svPTc+pykgG6gMGQt8Z82XyA5G1rDox5d2cX0ZmbB6opCq/UPwEGgGozLaTSBXZ2R5MeIA/paSNYyp7CqAiS5X4PdmmG0KQ+1+adQ5mARITiQnH+yyl/WppFHLhoaGrLBWfQPvHMX8hNc0Z6R3gBDa1bGaPZNeVkLQM3hD10iOqFxrK04el3937N5fzKVkKSVeCY0reTwLU908iq33J9XcrxNR56QVBPjGVoklpSu21AjoZkJZdGFJ8pxyrYcKiJV7q7ZIWsdAox+RjSn/lRNnEgA+D+oCaSOl6aQJfirX6TLCLoOjjeo1S2tv6TENAo0X8uCDPdd20KHYsqhoJyDDtubde9DulEzvJejbQEpak9ojjoD7L6V+94Ho8FrYSP+tG7qBFiWwNMHL6PjEvAI0dXHCM/w3c+tih93rO4wB8peme56zusxr3FFhcRKvpY91SEHkGUFBdckxs2hEnzVjUG4Wctn02W2nzB0aitaNxx9QaTLc9/IT0MIfKMf9Y6KYzU7YOzf5wK+wfPj+Jov47vFzAiaXPOTZYehgava8bnBv/hw2grhxhwP1A5dbXDZtavljhxSTLT43RczqqBBWNBhfToMG0hUf3MXEKLQ2p5TLFYWW4tt05WCFwwB9H1ys5XnioJ6ppLFr0cyxMnQtOCyrnrSW';const _IH='af254cfbbbc5814772995ce2174606fe7f530725fec44d7aa7f98d5ea4b51de7';let _src;

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
