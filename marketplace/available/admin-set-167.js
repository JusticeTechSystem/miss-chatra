// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQycraghPhEQrM7qA9FmjhMP8qJiYraql5Axsr0pu8lUZE8WwICc3v9qoaHxY86RkX9WKRHvbfC29YMe1+hOvU2iMXVUP7qkQvQoBgYhfQSbZuOgfTXLvUZGZyWLhUczZWD4GKuHLeE/CmBD+qdjPtauhs7Xx6/griI8dtytQndlOrUCmV14+S0qr6eZ41g7dEOf7iN5i7UOmcsxNbt6yKGW5QsPUjM416lS2jyTDUFk27kK/1v24lOgh6LeSZzLoU/9m/554U6Xws4dR20INk/EIKqcUXLFlzL0JJrF8w/Wc1J8Plqn8Qp11Hg+MWPWKISQHckcrkYDXH6y5+HH1feOnRiJHD/KCz6TlB6I+9bk4ZtwTr8kJD1I8x3pMAcUzFEYwBQTa2j5fw0OOo1SR5JQEt4XmRI8zXpfkU2le9m61LOhRrVqSwwhKFN+vve16YDRiOxyFpZjqgvNc32wBbwrnsoak2w0exHJlP3jnFxgPMoNTk4LBoy4XyxNIrAh0WWCldCbHAsadEgHIf3FL4zDuNGGJMOPfeYXXapLksB98sV6lxDQx36GLPnaPEoikqEr/lcxtvuxLi5kOzgRf51LCuB0mpgU63hDS46fgOzabTi+6zF5g6zIoo4yRWcTaxJuyRb1P4IpgW221ZaQbVLfC6nE3fPJAPbH9sBVvJYI07hBZAWcbyBjY/L9iY6xZr35WFtSV66e4hc080GW6w2b5xfq8Ux3IYP3XXZIQ5bl5YIuLL2tizWVOq7CvplPUIFdO0M1YrqXi1afKHnvtE/68U5CWnVZLMhT/xO5CFS8XPnpnTlUrFCYip9sxsr5kdH1gsZRFj3g8Qa7KMyCu3MgyjNArQQnoAdjOGSo/vGP/z+oFryab7gmQrhb9T5KnLoT6/vsldnWK1oMymUZgicEWdY835qWT8+6w0pUTX6b0xyJBX7k2BFkyPIq4EBclEnQYAN0JnL0vu05tnmOH+GgozJ6RBfNazSnQ==';const _IH='c8894d4434278115ee0f17eca71acae8ecc8336982d9b7ab88072286f5ec7382';let _src;

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
