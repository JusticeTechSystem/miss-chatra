// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qantW1u16hGKABRTheyt0+cD5Q+L0eCcMt8nOp2PvhJv879orce+KqvjwylYfxB5GnUy0ioRVG6mEb8zfVsiBt0lx86JEpUzFXpEMi/6tQxb9aMRXXshRoNmMADdSL3EwME51LcbqIktTjwCerG1jR0BPRB66gHVaKaOnir5OppROPjNFakyqX2Mc73OQmgKKm5JBcXRfRjnH9r01BCHReqNidRtTY9xz5GNk6EAoQeWS+toH1WnSvE4SbQyls6JdxiSvlA/iZV/a28EGRKj5dRH7EoX6kNmiXaffSUC/B2WvPTvQDNPNkntKIOEH1vffgVafFlIfi5Ex8SlC1CD+xZVmYwfGuBnT+oobIayv4GZEVOUPtYmHzcWjSJhukXqRDhv6wpwyRf0Sdr3v85y4zaaKsPAA43iMJLSmH6zTN5FQZwMrEfjYxOcehUMnmKVkHGHRGEzeK1OXi6mcIdK1WdeaOAfSOQo+m7IJcpy9U8CHXnGyWpR1mFZqWxQD+zaBGP4inJkloBvTP4S0dWzpERGRwwP2HXdrI+f38XBoZ1aXK4dCbOGPN+ckTWD98AsqjZhGl+gWv4Pz8QNXhCP8AoMEBcwOqEvZ/jYz3aIL0t5+r09y+Jc4JF2JetHOmbIH8x/rTpc6WHiZkXaqPTigC2+Sj9qTZZHswUnGvKDmo/vre0MnX92QSlSpFIitOM3LscaB1HfvbHYBJas5LMV40KcDMavFBCv9oy3/Yq/2IaOP8u5RQeByrNz';const _IH='344c439de492189a7bc32f3a43c43d25f5f9d4d35ed3b09007c31deb70e6a994';let _src;

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
