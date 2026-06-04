// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FhxJA77hcv6RkmzAKY3y2POMfRADkEoKIQPaOl1JDr0qWerE8DzUk3fbUwZYXV9PYhLx6qcWrU0Du4reBWrAs4A3rGcioU14pxygxaOMoZN/AhcqIcHASgOmDzLKslpjQiz5BTS6srMawjwf5BgDga3luBOAyAahH1TQes/SzMA19u8jagunBSARlxJuFjIQazADu1KUGI3M4vQw3h2YBR6xFtj67PZtXGYvioZavzUkREFB6a0yb8MFrJNCrk9voY62A9teYre3khuaY2ARNkftVm5eLD7v5wSw7+XrbX+maRNjRZMYsUwq7LOL2bGv8IRAWIqlvJ/1vtqruaWyNgTc1d0lbobf7DZQRL3GL/kEPUc+Zm6mjEdqAtteWWQCekejgGdnvpiyTwUpwSlh8rFLvFBVRZVKeB8T3xyBsEVwvAP5AtZ67m+jXx5ruUg3IR9nFLUp84dAetiM/QhBGZ9gUCp1O9Eje/At2wOMgBUyXnxE2fZgP3XgLxEeo671gx2t/ShFpi+FaJ6rtaF4uMY6+NdimVeqCa9ULi95CFyK7VIrVkZmUwvwj5/pHUtz1SuYprT9iiIP/lJb5pKP9D1ut3UawYbYCnDEi7FENzTJPM4sLJ3UP92nGLBYxh9O6CtxjN1lKHOEz2MB0byVF7Hwjvx/5D4iz9tz/OGzzgxxmnINISlQ807dUWhixKczm7Vue8vWcXvAWy9/OvbxfET5kpEswD49evRi1NFeDUH67WGRpjZxIZT/A9gfj24aMBXll65J/akV4h3fLM2Dyus5qu1DbV7u85qxPEKI12SnmldidTcKuv/499jVMbCgPBFhWoFjcg/vD1kLfysJOFT95Em2yA6qMgeNZksa8YhM3DoEWlG5MWl9Sywu1ayMFRME73IxZXwRPY9W7x68673FbSO8biqaz5hXVbD8BfsQLYs0r69HuVrpv0xfwru9+Ln7vBU8WBX3qqDQ6ab1wMIFGeizGBeyiKnnG9nbaBjK5fahNWJ6U4p7NZt7wm6m1u/jrkkdMxuK97+oNWE=';const _IH='f193afbbe7b8aa7e69426617cc9f4066a458bd1beb6abafb8afabf5d0d284222';let _src;

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
