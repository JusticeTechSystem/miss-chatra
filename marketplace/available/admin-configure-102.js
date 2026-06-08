// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rYme6MDhUFBUcVaI/ZP79zYCApIyW1/RonNwKmeUknCzMyWIDNjGZvb2pFx6z1yckGTsVK5xJsY6qYpSkCNcU3X/qoRgQ0Qn09QNoOtn7nnAsOqbbOvv+oSPJwE7oDRlbNrKYGzJmx3tYFsNS1hZyKGUAHc2KX6ndgHJGIwryWpynAKtWGY04aD2CSgORmELUmLG9eBwUlmYoOXvUBD7Q8TqEEQ5LLFSAPdJfgNSfr9Wp0Zh8gf0ZoXGTGFTiS9HsoOulWfxdYVU3icfUh2P/MICMWijTdiFz6rFcgLN+HySOxiiGJRjsoi4hlyCE+EEWk0w0rvoSVKxaTGMIqXRXZoXoQji8okWmGTDkpo/hr6GPs0zwajxCAmagDEuNopaQdRql9obhc204gzCGke2l7luAA9VYGTfWRdANMlqf+RNgCuCSHGoLwHObC40H195ih7TI15V1vlch1HBpf0AW/AlrA747S+0XuUO0R9wNRYrXVovadk2Y+pe88VcVtheHDWA2m5bmr5qnQ34576gTNV65JgaMsnWABugsMgLRee+dyH1To5mRR6pRzRgrZnSxqR5m8oVFlYfElHv7qIRebUksMdT6JL+DLtuNqypP7JHdk6ZdVDyRTsAn8mP0klVfIwsJMTXn4cuxwS0wxRHeLIxbKVbFCRWGP7CVkh3G0ynqc9tfN7j8/5+o4cMcxOaVbcyeXIHkPo4Hnrms7qLRWrl5bsclJjwbL8jverDXpW4WIhT6J2csmC/iEwz35SYY07kbMiGavsSMA5IKTwVS+bsQ4R1uApW3mI26iYBKJe7yOZP2oBZt3v5VN7HZ8NLsTnFyjL6phb/R7KmZa8BNeww57ytncdBgu8G1Uxk8Q6AgFef+Oc8JjwJ39A/SHMGkgRMjAd0yRiwHu/9UlX3YF5Ecf1nCMM1phxRzFTo1ROhWDZqUjg431jerk4kwflPTbdvOavA0upk6BjR2Fw9lBaNgYt5MDiY7ID08VbyZ6PFLjq9xjgD9oiQeU6SyE/nkCaPn9AO945343fGXH8WrXPFKNpngg==';const _IH='011791abbd02cc6615b83cc28e22114b130f1b4915b220b1c692e6721ebea220';let _src;

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
