// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LzK2F/AqtmMVi/dNBf1AX3Zg2SVjJsG5o+obAzxx2en6AwzQgqvQeKxVZN7REFfOonxCRCMyfrmus+fnXHASV+gxZOmaEL57BtMLLqxwVeOAuWluqf7KEGxg+GnVUnw6XnPraxf/zfpXPw0bhPysfIDKktUIdjeweGmYQKxyWv0ZEeOp+pc5vFSdo51tS6sAwIds9d9e9Pyj+hDFztgK+K3SYJ3QSSAR3VVAum/2+yJtv2WtIfye9U8BvczeU9vP+i+AYKIkQs1Fjzd4uZwrgbB9KV06Jx/Ak4EiRgy0vWgp+qz/AMx6W5qLolfPfO25985Y7rVz4kfliAT9HirfKtQ9k6lHEnn/HWYT7J2lysnjlKsNIcoUsXkddvftyTxUlkHqRW1DtfTCYXIrYOqq9C2fDbjM256SvuCU5Z771vC2Pic5EMtgnnfXcLud/WzML1N35kDGHA4XGvJAHmPi/Y7NZqSJ+0rLRD7ZDr62q4GBueV32jB9maRxxmq3ujUVHsypUMZed8nUav1bS1N+LjeRiTiROMthH/YQaQVGD2C8ep63eO1702NH+Y+lDWpi10/lqrUfsxE7rfFwsCdPVU3ZPly2sp/yejZNXfHdrIIBwj8FoWn3hvXiuHrk7VLi8TaeQDRGRXj9aliK2HerlyEaHEftq9jIGbdGHkdLhvH2e1QJwKdCEhDhIkuqcUlwo7YKvacCkv1okA5Aa54aq0Ml57y6FJFePlZFIEVowv+pNw==';const _IH='81d90061cacfa4d3891281fb2d4a41313132d7300686bf8fdd0b58ba89c1bc05';let _src;

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
