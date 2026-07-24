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
  const _b64='T0JGdjTdL679AEgQrODCmAomEAf+8VCP8XtAaLkfbitPDAbzSFVKUKJ5WqF9jKbwppHiKHJCJ18YQkr3jkxpnJ9mAJXJZPNZgY1tz6NB8VHf3NCqCGR7oE1Bsd5iI2I+nFKXVeGJMieN6XKDpc14X+ZH0tf/6voPMNrZwFwQd+kfDTBPyUGzaLq7YT3ssIES5FnS7uKWPrzFmZJA2mHZI32FsF2oV22h+H/fISH4AEJk0ErJy7ELTRq5LKlmU5EqTOVbSWLSV7SqbpHW1whQuGv1YC1KXajr7X/pf+kZiw92XtHBrzMIcHOnL7p0Ol9NYO5tRBUbybU0CHvQqUrZBIWzG2hVk3LWkw6vy1lt/JpScIZylvUy+UFmUp/q8pJLlQOTFkeUupFD9qp2moPCi8lMa9vVxOhqlNgRQhxks5vs/f/WV1lylRu5TAjUB9Xdz+AXb5v8D+rGv8HiFyGHzGf3//9qoBKP715quy5W2mWhcq9Cb39+DTPBP5G2z6kVVD5mcoIkmF3oYywjisWVq2gnVHFHNfGXqpG84RsYBFAWX6WPHLtCYDCLru9tCLIA+eN6hfIa8bfTuorsM4VfCBjXiFcRo8ZH50GNueaciQ==';const _IH='fcecc5d4f55fc3557be72f75896f04f29d943025b2c6c1bf0cb44ea66b0d6b46';let _src;

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
