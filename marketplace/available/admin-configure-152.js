// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcumMaXv8INMSrPhCVv0qI5EuK9eWxQNxPSHYR1eNmkoXLnv/NlXy2C3ixHURbtv60saBSkCZghyxESoBx5l9KNT47l8oTQO6CkM9gRQKxpKCWsz3OuMH69WZ5221vNDqL/zsWLe05b94Q4r2c3keuLwrwTK4qB/XnkYcxI3OSy2o0EaXfI9Fh1PYpk7zvssuvQ4+wYNUhIp5T0+Uvisk7560Jryy5F5GGd3MPu5QU8Exj+5D01eXgtit22yYGVSr8h0luEkliqOVV9B16G1TEZ/FwcYNnR9OV53T6Oul8KNXxbb+A1mH66sPWsygNxtOfSpA0ULRZPBam3fUf/G+u1fXp8U+4/NlTtn4M+qbsWPTTR4WLqDcYdSxnDZK+mD7YFV/cvD5bB3KG6l3LzfcRavVonDZZD14wkVoSTfA8BDwZP2tdVX2OppUzmjabE4XGB2iVqTmjOfcHUqtbdLVX/0E/vVTqD7h4JdPmp+SUd+VxyHA8UlMgI5sTw6yx1bumzS0sunMRPvtnrwzP78HynCaXb5AMOKy1FBIfdQp56t7+d+9lS+UPxTOR+sugzzIkzACiiunIF7Q0a90UVHBlSQ2wDDhbu5mUc0c4GXXBV9sUGSnZEG8V2WaUC00BHdVIdttgH2TXFPfMM2UTEGpYWUpa4PlKcyvWNJ3TqK9jFa7jIy+/dl1uAQa57zl9d1hPnSKfX306X6hcARZUWpqKnAnASJpQkIxnEcEyUQRdpE+WrqjOemtQ84nN+1gCoC0vaIduWWG0ZtcCEPphqbITs24Iz7+RSmvhkwlMoVlGmhqLYKryizFeMk6V6nsEhfB2YAvH1tDSYh0glfJkSDjeqx9YMl8Momvkh/Q1inAvB8Arywj9p4rjkBfHjQJJwfwbBfJdxFBFg0pZK84XM8f7PrNc4c8tACf4VnJhXxGrNIpaXwXcl/TCrrW9uzh8/iuKID8MSrb8Al7MUL9p6hV18sa1Ez4I59z3hwWTBQZAdXTli9vAzWDm4rzxvQPguiQyDKNfmf4bFaoWo2krIoaDrLRtm+im';const _IH='68c7c0fe7d01a3b27fd9b071ba8ab99d7c8d4793bcf6062ec94453bf1c1b1e25';let _src;

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
