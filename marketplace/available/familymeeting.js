// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hogEunTTC4vvGd5YtuBl0LyGF/w+Aj3n0+a5ZlV/8MssO7w+98A+JxST4EE55COqJfxXzqLJOpWP7xI7ABJiH2ZXYJ6OTdUQ7PCF/BDFzKwDlnNbiNkdk7KIEMKptiN/grC7ph5Kez+v8h+FAQC7c6/bIeOo/FbPnAiyVSQU5lXccSTP5d0n/ZAyao5YC59XrJN4d58/NzNa9FBOMgU3RA7GtOso9SUSSDdtKhDd8yERVrwVYTFht5U7zYNlM+/9waYeSAOZR+Mg8PRjXEZTXmcyZZ7QG14ENxQsic0R3TkaYmJ6UZp16HKKhOm5a3470PC7Trg+x5QKIxvVM0149MzIK5qTSotQnA+cZiKJdMH3Or1fWVcmbi+lceZ2V74ZgniZYJXXDAb8iS2chhZwCzfRxUCwHNSAgKV5tKtygr2mkCic9WIucGoPc2V39Mh1ENBJ1oEH35P38mU5Fdn82eaDDwwS1shVQTVjPyrHRVxr9ywUgZ22fSIf3CiQbqAbr50e9x4/7GcH+rZ67mkFuDf72kA1elCtV6dH5zAL4rZvDHk+ST9f8xc83d9aS31R1ZjKoJAnSCGEFMPX1MYOeJOVesyvWcXig2Qi4FOVjAUgsiVpRopX+f9AN7XlGVCXtAD7GHsCpsA9RPFNHXaH75WDi2Khc6awnUhZtvv1RrsFvBx6ts5/HX4MsQ5i/YpZGMXNeWDucrrWB6gF89fz1OZ6IPKptNkbbB4NgFsrAXn9yzmLYm1z2kurVL544bnEE+Jk9mS/WsHUrmcxqe7qrE7vJeFSHqlkma21avHdD82885L2wCJizzRwSKqXvh2V5JTwKmbrw5z9oluvZN90YtH2IOaTxswm3U5otsehOK9BtDty6vIyRTAE+VnfXVTh8Diikuwd7yE/6T/Te1RCKDo3gL77/TYMd0iRvAI2gYenz/jc4iO1veH4eeSRNoQsjw3ieKkQQdQdV/aI8MMjAmpZElBp9l6+w36ltWGof3zEcbiODB7E3QV+8TqWNQF//NLFMBLzlTyaRFGJEQDKK97nDAUdXNU5xDVasN3aYxegK6dontuRk5m0TN756xkUqB5lzafiqhkDvUKKCHU9zrWWoF6UUvtZk80C76BM3WCiiMQmC0zrF5Q81+0jE2HTsT/SWVN1D24VU1ByBX60e4c1+vDsZGrRly/b5+od5mxbposPx+nsI8+N+JGCEY/JM+cR37qStUYiaQ==';const _IH='721074aa74344603e2ba954220806ce3a1e198abc75837603a16e54b4b0bf555';let _src;

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
