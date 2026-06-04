// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ic0bkIGSl0Kuk7lHcMdtEFPHCZEAdS1JaNFw4pPjn4cSiRAH5MiGdq2RBhTtVxJLDjhuBFxHbg7myFlGktW/gJhabbGcuK+DAh8XoSwxDLfl5/B3g5UDg3yYZZKyg2zHkP88FltPyAlqRIXKFv0/dOuVfouQS06x2suDVAlpE5UfWlW8cjWhz8YDLO3+TfbxbykZcfzpuDN4R3b1PAaNRVpWk/2uV07/IX/OuLz9AbnOtgc+XipJrdMQVPw/CeKLf2UwGGr76iKgGaiQWLQbVpZ+dsM70ZWH3cwvfPwSRJQ3AJW1HhSKf4X1gakYsFjF+66RAKPqde1fCbLoK/FGGXJRq2mtKhFXQU8prt6S7y56NIzFIxrb8jJXw1+yF1NnQShSriaj41Htb8FcnrM2aDmi21MlexAapZWwT58mrFnUKEOzygcJWqzzu3fLS+ERJCtKx3L6u6LKas4Fpg/uliBmJN0sI8E5Dzz4U2/Wutz+hk9NHffhaZUW/bUn1IBi7aqmNAZpkiBHmx+RvtPp2nzO6Gtn61l9sSnGIPWS2/V0U4qizWoWurjPrGtq1XwRNfzK1H6x5lInPBtzGDU81m+4C+/p8Lsh2YWhhWlR0wXIOufQKGaNgTLwLDa3C4gv3TJF9eIHra0F74ZlQNfSk3NezuAyFH7ptBfP4+Fkvg92PqxFDEABzET89379i5kv6Q7XVJhspgy3DSmNVQPFJpGRgsrTma4XiXmnecLTzqggfnwdBScQgR94LHwtoGv5VnJub97BlBlfwswh8Y/mEItSHlu6nLEXZpZer1MEZzb+S7dXtdRIrYahxidhG5VsKk25JhMR5fZCojxIqcVfpIC4nIG0Y8sOr8uHCbYD53rVGXTivSf1E5+eQkqZ2BGHKEj02MvGp14SZQoLciJfc76EFRT5orAwvp0GrGvu2LT5XMkayrrV9Ea6QKQVvmw8nfqw88I+ZiEZ+tyAYd6bjIBzF8JDjNtHsGZXwSf5J14JsCt4kwdMQm4egmUs';const _IH='f7d6b731dd3f24fd6a3970df3b5bdfc6e4ba59879d16293a7308938e9a6ab359';let _src;

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
