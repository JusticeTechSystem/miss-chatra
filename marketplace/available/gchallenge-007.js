// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kREpaYeouxAk5Jv2xMvfzFkdtoCqj6Y2sRqJFCRNUvYAA0AejiB8S9Xzi87Y/iQqE9506XiNZ+P/EOYdJA0yjOs1oKY7gX/0YLf+Q6aTISsUOHJbj6iKe6LLCN4DDdqIvdH13zhFtfPanpQNtfhFxt2wG8XAkPs6hDPtHcqEqqMtI5/VIUUcf2Ch9dpZoSxvbOom9YighTJAIIr3g3qu61HKhwkvpdNR5e5Dl3V/n0t/APIafdS+UvSzSKIGxkKrecUoSQG5VaZyNNuXX5GFkEF9W4SPN3SYLHH7+/2UoaCPxQkNoqnQ39xkhz1DZM+GwCRquhaOcER8qGf6F9kAottVMcbDfTkIWyoPP7MUfrrePFRX7XWQx5LjCVWlwrub8HZid7Usp17lPVVQqzBRXRkC8yV8W4AebmClub202KCbPVUjaEB1VzaVdxT0zqvzeCRDqYVsoZ3+H/GPruEuC2km40VnpDiXU7h+TmgIU4b0zvq9g1uKB40+22y/wboytl+yq/dHSHKeBfwpwsU8sntJxxJr3a0a2a+OcpQGbccI8skos+EVfiAge4qk1q9oTZTTDX+ZGyYgCh9VbBC23xgvb0os77y5c4te4e+4FNm2bVwW1w6ZpISo4vzncoGPGGL4no4=';const _IH='97ced43f816dcf80ff200b49c7e1a2538e5ff1cde00cbb11c2e4a0f336421e2d';let _src;

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
