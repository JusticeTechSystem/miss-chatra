// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L9V6JGfWybM5mEjaF4Aps2fuKbF4ZqKB92n7pE4gXjOyvEVU0XZouMm94Qwo+woYbNsf/FG8so+Fvb0J66wfsYcgjwKIkl5cFCf3S9l9byeyzZKHlv5Fot+y9E8PTuXgKl+N3nRZ5P+0bd2RGadczi37axr+2xW72/gVzsPHngVObsd55eU0hXaujh/8GLdJ7oeIWHqvPNpojHj5e67EezRJf5r87HLfJUBZ0o5hcnqJv/e548dYbvaMIVffzC/EZxoUzGurKe1wdkZQ48OSaXjTV9zzsLGE7DbPGnl6xBxBYGHtTF4MyxUOQRRv4Dbza0TL2kCmgFrfcngyUuCPJHs+fqxQsF6hD1b5fhRMD43saDadIXOCX347TT0MewpElMY1LXan/tnp/YETkcLLuK4XmcEef7oX7Z1/nRvtVQd7L12+mYktW3MvPfDDCxYeWTbV2LupWakKCN2U5LqxTxYLxISDze433pBiwSeIiJ4VXHHg3yTg864tBhsF0oD6GRlcI0FdNURhkSl+dkoEPEZFVVEl6H/O2Nxf6icDmk7tLZu9yoMeLaPbBvCcHt2HAfLxA7w4esTxLZ+9SKeSv2kmwMviodp1hnUc4FAQanLXd4bomn8mD7HRROPB54StWYajdk3Xamj+QS9bNosl+50NTcW5d+LyhqQ9Kulul+x7PtPJlohxkfn6oDWVrOJyVwzmIi+f3tClzZHqczoaST/BPw82dMOMYTLDnPlDppMwIn588I2E/xA1n3XM+BRPxsOpq8diBiMNsKB/+GweEOMwMEWL1iJbWHidE4t1AXrQdIWxSL94ZP7435hoO6dbb5+IHgcDfKej9HrkXKupaWz5z2ymxxPsnzSkASU90R2EL275eglWem1/H4XqBH1Y9SEDNtj67p5XzGKZoHgWhIgoS27AI0BklEo4J80yVTWcjIAsJSihXQ==';const _IH='0e29cf282aebbe44f9dabef528f373803aee2402c85cb7b20d4bda838fd6ba7d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
