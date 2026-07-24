// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmraVFB1TvaO0QK0Ny2XPY9bFDj0fu/pHxHx4AlMcIOnjNi5QwxeWiVeNTw+1UrkUVskJJ7vVNvbTCWbxn6yldcjD3J6ALQkufg7J4g7tfpfk9q/pobiLhJjta/sx5xEmWlbAHz9RpXcYfQ60SdL88CSSdxT2EmmnIivmpnDdeTpY/FwlDKUaDoyzcPKs98vdRotxDrUJ/zl7mcJklVTtxPCLLfEdmzMXO9WnAJgUA/wIXviWfJfulEEErf2cOjk6+JycyHtVZled5LtOPyzFI5gyk3TRXwxzq+bunJID1vWuA+0JTwQkXjRPGQjec0N3cbqUu6fvJvdFDifUPj16lyKP3tTcsG0WDfHip+Nyh8fdmYeHemf7Vgmx/5ATOEvawrOav5XmJ/HGyQRvmXguxiFGAvPuKdIza8P+ouHUswJefIBaNwoqhtD8l220ZNAcblG9rn+UGfrDKYq5gXpCmBAs+f+9eXOireVRbZU/LFWxcB/Ba1qa4k6FRGCzbt7NEQWjerxFOhHF3R6H0B/9zQCxseq2SL7qx1tSmQCfrW2eK8cWgLtK+JI696uhTZPwFwqSSRKsfzAnGxd22Cl8xLpQEvVi7Mexx2aUcErOfZebSdzwESLN47Np6OvyrzFDVXmaQ6VI24YHiEIe0ISx2qSSNjqAMxWYWtPSH2qdUk0YkUB9NAzfxoCmLAlLo3szCSEOPz05xFX+c7qrouqIkEpDR7p3VljjW7dM7c5qKAHTKgPjrvUbZfMCuyq7ZQeKC74j1d1zDQmok3HQCdO45Igt4taVcgVu7aUtSG9ZM10+Y1tNhKetfTF2muPvzy4rdTx+WoO1p0O7Y8Wd00JTXJ+EaVqeZhbYtlO9+I/nqi4xTs4dFUup6OOLC2uehQcNik6Gjs3L2S7ZwhPZn/gxyYm2iBRqcxg7SkeAuWaxhkKGL8UkkJQYr7+PxRxbtxPT5oSW4YsihKlChE7dxSSbfLxfoJqQiCDPjW0a+OdYZrjkvvinaHsZ1ZwDrzku895lsTDhbasaY/p3PZFcQrtYI5n4=';const _IH='5428bfffc3a5c06d48dd759d1ed52c5ceed51e4cf781420805d83fb43bf40736';let _src;

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
