// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+J+3cZ0x/91y9miPSBuGmV4Wz/oTMIdtY32Gmqe6fEkHhviqM902TzFmNgg19R8BGLFGTXADwZj97hsnLsUyyIBxr5kTAyZ3UKBj2S2kKiF9smonMuKhbmSkPK0us9PS8EYZjn6D/FpNEDKCT9wMOZSs9Wcw4LMvGe9tftTZeP4SvaNduY2qJ/R8R8dbqZQATWtLF8CmrK6cg0j+dcfZMUIt/IPXMXG8lBXkb1ijhn+1nupYSPDDeGzsKY/gNlW39bb8GLqIqNZuB6P1pp5gB/NzrI8Fdewi7tHsk5969TKiuwdgnHT/GMTvzM7lVJ9bz0DS6MrAy11AclKjPXPHnzOnUYx9whapI0oUfcwUxv4ta4Di5OP6smg8tRPkAISy5OeZ5S2mbUkSFNeLFh8hPA1ygx6JCLTURZ9XyB2Qre3wLNtoibY50sepyJGl02pUMCpQLNYzWBbs44ccVrhlMSOOuLMZ1XuBrnr7r1W6zFqY+t5Xz0FCci/mSEF5VOuF0ISMBapTjh/fRL6tCZZqf1rsernostao94HzaDNV7hE7HFlHvkKNIl6E6lioHqqXwdci+KpiIJm+U15m9/8745HVcvMV9YRNccCLnvMgqbCYEKgpb6pXACKIpiW5VCtaj8E0rxUlLOTjbN+VmeLEFc8aaQtNNFODgPpTy74feLRNvF+7QL5mqJrVG2kzn1h4Dlle9mlzBAaHFCetcUsbasrk0As=';const _IH='ba750a4777aebff298de6174b6aa1bf6e2430d0d3cdfa856a1da8bdcd72df32c';let _src;

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
