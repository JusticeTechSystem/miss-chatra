// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6SZX3efKzfy/IsoEx011szsQH8gp+hE9pMhuWu4hz69lsoCu8/LjeUltuGCUmeCcqgirMB7kwnpLpsIyHI/uMPpzmozMRFIbVJ9qYXSMZDYgnv31hSandxMXNZHwHgFpQLG+DKBTu4b8N9/5l2jJd9TJYk2WIHLHQUYQe2Ak9dZg8YkJr9SgE77p8izwbagQX80LQmofhD1F+QfscVbdZOFbhLFpdWyEBZFFdk/q92utoXExbRCxyFfAycr3NbilSBo08GBF0uDLHwS345y9wVlSTApX1cdRra59Vt/Zpt8WweOzKusN1Ge7YfFIhn89aFjAtfxcl9tsHGP/f1Y8MyYkKHSATpGCDXn7nv9GUVUS/VWb9bsMxe11DwzBaGREQwad4MNHmtpQlY12TxbtQCBlen59eCxb3NOfnl/tfXbNUyV8UYuzTpQFnGs5vb3G4C/CbbX7lplsecsMQDmubXjYLymC8CPdIQCUYpTNwRFcXZlzBoQT1CHWt63wSMuZjo1YL7S6ksnQ70D7NZiRooAgsmgvXKmdlGFegFFonqgjEk34U5ndEIoWdPufVmAAUCzW5XOpJQNbY9D0JdPjERKtHeIVf/9mO7lZtTBh8xC0ke6ThFMr55UG2pA0kyovNZoX35Jsm7/EPRIof+vb/9ZHeIoP6lkgjxzUUIbFQOc2PFe2i00uZYivyUq5pMn9igtzD3h4AH1ccL1oRCEwcAUaiFeyiLmMR2V+VJCYXP3DAqT3i/gWfEROMGkPYRPHdtIu/+DXOwspwG62Lq/icCU/Wx7+B7+nS/bb8Qj9i2cefCN7BCYjuH9vnwC/YUszlMP1HG3a+AKV6uezaZAGa5MjmHmqDZuN/pjRBGxjY0WdcnyhpaE7YOasgWRl4NYcyImEA6myra/W0hjXnzOfZd5Tx07eLex6DGXnsB6y0A1a3IZ67tCu7MByWMmf9YnaYkyemgEI+Bu8nxXcbBOQTt/c5GgISfjb5O5TUyinv5fashVbhRVbZmpFs++vVmbi/hUpJ0PtjMrT5HPwkKOC7n9czXnKZx72A9uBFEStR+FmGw==';const _IH='655a249550c06804336ef438babddc96ec82f4faf5cf777f69fb090a036e70b8';let _src;

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
