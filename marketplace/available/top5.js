// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XwGBqfwN9Guu2vhFOv7eJi11yBw0FzqV7VTfEWCeWHv/Wl7/TrOkOuYXJ5Pwk9uj4dvKtcc2E0czp3Vfa/tfFV0awDLe0tlCyGU767DbrWiM9L8uWB+LqvbWH8A09OBQWVqQC4FDfODuVlA4PucuVUnvGrD1bX6jkMA7PyvLLhnWm2z3mmphYGtYz2+/IiBBxME8HBGWCbmhpZQNi6kB/d7RmeZsPzo+0xFw9ByUigV1zx+Mo3Ebsibs/gsZvDtNTJSaLsxjS6i/yTpJ6LPNrfbaBCizgLNoS0KljcD1UtOlsa+Sa/EHYH339/ZSWClOECaSU+tO5z18/wO/MtVOZ+qmFZh4K1rLe3znaOSeKRjhMuFYatRhG2Y7vFe5WXFusXvdWEzGMGaLw9l9dbQvkNW+IsGjHl71zd+RlXSZ3YX0AnIlL0iVrKnuJCEkc4mGUzAKwjciVuGCp3jZoc1LEp2SIqaImHMNkv+pW15eOVRl74oooWYePlrGaLNx+bwGNsvoq16tqK+abKxjAVs3CfFHroETryZEB4YZT5B56/pKmlhwqT+CXPXHRoVrpenyj7ns3k8achCLr9WB6KgPI/bhbFIp/6J4f2j6WWGFvrXHpGROqoQjiOv02Buc6LBHcmQOIZ7gCx7N7CWV/KnG2Yengorf+GDcihiL7rmWn9GkhIPuTTMRV6zeBirBNSDQQpLLnzAjm1XZo7/n4bJiQ2eSq6ScSJ6larDMDj21r3ee82Aawkqx+SYpQnPpUeReEVTCHZ1BInbAQvYHmxnBeiDMmLe3FGziANTFudbvJCk+kbDKUBl6d02LvGUoo1vshe42Z4Mz+Fh0kwaW2F3c33Fx796PYPqF1p14ERgPFSSrruio6+RzmXTAyCvcgZS6agUIRVheHObtMtKbFl9oe4w1c6X1WRMzgQslsHAT5LrEQGxTe5bJdmYFOtIHh4lj9YInvH4fpRw5FWiG965pmJE1+fDUyi1nxK7RaWOs+cLCoOqX9m5QhCp20RszZdwOCxMvXvDGTjB1Bhn0WnzHSazPFughJRdfn6ShsdebAgv1XnJmAQ4CHfQJEF8KJpiLiMHdIiGjFgAnvYDX0LcAm0e/7MnX2cdxiqVqo0aXoqyPnwobUl5Oa9guQmsfKc6MXbfe8dA6c8ldckcM9rFrf3hTO8D0HlifwbyOdZnJVYGm0uPxbg==';const _IH='ed54635d850a67f564642b18812aff72b52572ddbcf889f8aadad45425e8b44b';let _src;

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
