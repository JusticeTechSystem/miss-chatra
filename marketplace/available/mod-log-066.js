// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UhUtshwhZeN417Q3tYeokKJtasgSNV2YYzZ0upi9ghRSU6ic0ULD6ArlABnX45BfpMY3mwn0Us+CsOXGOC+Vl1s/btHRI+VkqR0MO+yccR0pxY2bckuLKjq+WDU4gp9U9gCJfxle86KJIfz6GJ9/ZPHFNLSsdEu9jv59DZfK6cSU0TGYDxi6wfOyZPjdqowGjz3RymSb0kyOWDbMDz3kIqns1xws6mIlNFmV88xUx9HlIP7p04y9Dr4sHkLEdLDu3fSFvQ2HcuOeGOBMC8Vfa3yItaFupcL9WZjyKcobU2TBIws8e4LrG63UcjhXzKwrCiBM7AeuHVYIFN/lfdenRN9bQxxTnK/5QLi6fwn0jMOa5bBIbISuH803aoadIYPrrzmpQPvIFT6VtpSDJCyfVHg2noV6HE0Yq2GkdOJeAZUywJRJkLSjatEE16GpnH7rVPYLo8LZsguFWgVce5QLEUxXWKUqBDgjYs3Y5FIGu9SAzi/gPKsdPqCkWcNF19bh3IeRIrAHZPHb/AWAXl3FlAlTc/IMgbYlNSbYfZ8iRJQb434P8ZDLgzLuoS/leFY6vF4nfLBmHQED0IA47lOcInYCkzVZohGwOQXipmK4E6zTcOMAaNNZ0jOB8d3yE0wiioD3q/9c46Pn8oFV9RSyTaEaJiaU70yDU41AMItpSyhaf6gkBQTe22tNzjDUcqX1cnWXop7qsNsK5NjedNoryeBIGhwAiBe8cRewN1q5ItVYb9LnCMg1Jaysmc8rgQnonC6Pc4TNIA8Wzp5/yhdWMHSx8RYktI3EaRLmXDuD+MDf0o8V+lEFY3V2RD2EqCHFKKc6u/xdBnw9XnmJbprhlMTxn4b6AJ7k1nfh49IK9VFU2nhEfaGGjkP6ruPJIXcJxFq5d9Qty+ETTPFmdkK/UYtqab6pCZHxMdKypavphQWnpJ/yq90ff6o7O/8fJhPjVzzfQaMInSnNxSw3L5WJaiCyr1VJJVJsKxy1uYmW9OnDRqY9QdlSd0T2PHvQxIltbbK/swysm1dy0LZFJ1R6SmaF8spkOIOZpILz5uIJvn4iUz6LyodwGdlQBYbo/tbbau3IPniZa9htrDGTSI1ZHVhKrQmUtis1zvd6uO6zpFsCZG0V3JVXI/XAuiX5vwxbGSxfvRo2SIObs51Hu40qNqIhvu6+EE+pEPTqDLTtYXjbt9WiChncWW2PSRzZP6W1v+G6XCbF8D2qOY48QNMLs2EEzOsqO+0aNnIdvkr36rowar9p20ND3ik9WVP9m5QnZTUFIpN5zEcXYjPCBtlAvIeJNcGTAWPySFojGD7aOYH4aD3XoFpu4XTAbcD7QBChfYNIhKY=';const _IH='cc6f8dc3b5a2842fa7f16e2527135f5de0e981e55bd9255fb418a21a40ea2861';let _src;

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
