// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5kDNetVfJfnuTcoPwDE8AhVE+ofC8NFvn3FjtQbJWZOeYtmN7GNJd2cdn4NbmsspJsC4Qu7N1KT460R60m5la/iDwv23dxjooMtz9fJCaIPqsdHqQcvlfMkDeLIb+Kny6nZI88Y8LlOSgJQjlfRH0eXE3kAikE8m9Buv7wCENYiBhw8MPDxIHf965izRaJUH8HhPcrSvTwPUCWhSk0F1nX4mLit3XV0bUjaHC/K9uQNhqrwaLAiOelfEsK7poYg4Im+IbaOEAIWcfC437/LBM23j2WspgqEAGVMijPYOTezADx7HQKmMWEqJo4JS4o4QQ/PE7MxNTkPLiGG7meduPHi7OmjzyR0NhkZ3ULcPST72/Tcyzm4EZ7sMU/p4D2A+choGGPnuWm9xf446pdKPsFgtBBR7bwsTVixUYBkola/XMmTC64YI/BQgu6XVAO3BuaRicuCHSJIlNnt+M3MoFH3XW8DpizcopYAHBcnOFnrdmaSM3HEx77Exf3MkLzof8ApgDmZJpooFAC1eoKLNNJzJGCLsdEiyzQj+VF0t+8w0SVAVf3XsEn3YWZ/KhI+eghHgbvoztMjcI0W2JMwb0DVlZmYY8VqO6O4+5cp5K9u8wX42x/gy2Of8R3arYDD+eosHoCRqnM1CNqgYppJTvwJVvK8LbSW+1Uyb58J7IvkPESdvCqLTxVx5I3R2oKpMW3+Koibh0hsYEONOsUlLN6IbX5QMyMdt3yV9blwat5oC8N5k2cMDhrv2vLajhKZWWnDvE7NYuVf/t9YEF/wVLZ2F3X1tMWK4dmFK8cRRiHl4CbNuhb0W7xjZGtKMLacNFFqWuY8xCiSgir9GJpVmfU4AC4sJ/jjwaxkAL3C/ka+Nm1oPnAxodXAW5BNwD7d26WuZpXRj6jSDPSRZi3uQtB1cK7Go1dEz20Q6yShJt3ok5uzlgPeJPE5ifPl66heuzRnKlu/f6dnVEfTHCR9nT4gcLBsfIP86euDf2C2fOk8xY6ROZJr9cT7t3OHK01I2jTtHYyhKnwTfXQqs1YDyTe1KfYZxQRzHxhIbVKK9gcUAo23QyFObNgnA6GQ5aVHyr74htmRGr7M1yb5SlguI6jmh5OEIXr3B/HdU7812l5/Xm4bwgQrPS0hY/RaMuuiIizje9ocXEiNSFCYgHPR6qk7hDXlm/S++ocdKLACIeBvUl+fKm6SBdkxDgOFW8j18/FtfFOslAozXPd0WQluy5aKproH3k9QA58Bjq/Z9hKYSb9ZdgJX1UKHYDtOt7/25po7g3dsvVgTdq/skuaA71Ca0NIOhq9oxB4K5NNyPEEpW4U90Jc7CPIUCtDIxkxwGvksptgDRmCMYZkjpky9cCxkBolSL9m5GJt4qbjehm/BERuxhpTGOzEZ0b6/r+luFh8KMTsvg7l+QBD7';const _IH='a13eae6d0334f3aad86b5907bcaaa329b0b63fd767c424845dd040077dc4caa1';let _src;

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
