// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N1lShrlGdUZ0UQMVhO2ldmFWOc+JcxYvZemOdvRGrn3cc1vHp/JnKNYnSyKKsIA8BP8tZWTGfIhBF8BJp0Ie5RTl8mC8tiNo04dgnp3nQkpCfAbH8J1vAvHCx2h5wFQfumqnKGCQV62NXGOzCyMVkpXVP/pMDFRPAFzzuZDTKJ9JxJ5spXGmOoea8pv8CIhzeQAQ92eQ+pWAphoxYxW2r57KT0HhBm6S9lp4pQ/bgy5Afnh1yX3I1JRUZ9bEKmmwZuT60TK5wPvgpwuPJwiBHLHgG0MI3UlNpjYmoWffID5raTYh4cqCjx+uLJQ7dQYBHUMv8JpdDhn4KwTIxuyawOAR11R53xfEByWWh88DLfuWKjzXbRI7InfHWOWehZoKx/gwfBKxrHnWJdoFPM5CWoc7Uw2iL8aA+J3TOZDSN6wT9ecSbvW3GxpqipVZR9VZFgs6GiI5+TqnjYw44ZQj8eAwBQdNG0Nb1RZ8nfKrdQRegYDdXUlvsygeRKGvdmNcDWPFqscNPxDF77s44OmuDZPIHUDuTRNcafUyz349bmlbDrQKnrGuJzlPa2443AvVo0I7tXBIYSseH4locyQOYyzTNt9tBC5ILdcqTg8S+SsJYKFwMtW4Mz9ycpCmqXoYDse8Y1utn27rGPs7EvZnUCQMfIFjUcQTbJFeGVO6oP3jKA5o33RUXsSdXOe39HWBDvvpRUdpxyVw02B7fGljQNTOzU//6zOCi1AWX7+BYmbhxOJJJpDvqbMWMYqDqgtDelNC6XmYUzcqcyCnzxljwxxPDonnh41/J9SiQTNyIGN8ml8pkuA8xc5wYZjgFDQ98WE2MNwzfilWSeQceht1eGgks64t7HBB0b5SOkK9bzBhsBI6/7QuY0x/3Bhy3xhvXp6eg0ZfDHa7VeWXiHDEyD9rp2bh7Pj07yXD+pcia6MqW/gWIoQTrYCf71J52YreW1pfbxeLXcK1Fk1jK1u/mHrW30qxQTcksMH5QelCKul2egnTj/bDzFV7kHDorJsaNdJ+xAkPTwKmASparzE8UmsK';const _IH='a923dc05f0f9f200909c9f04fed9796bd38b3630766adb6d6f6ea23e56e80047';let _src;

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
