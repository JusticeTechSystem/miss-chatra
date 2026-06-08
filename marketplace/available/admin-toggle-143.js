// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OgUzP01R1NW6XZLitZER2c/g9tozecSOVY57BX4U4ZdyQ8ibu9feUsSh5zZO2/A9wgkIqjIlj3N/vQniXR1PLuiqIwye4rDpLxFjyd5o8ZD8khcSiHTzCwq62O+biFUJXIrhe4O4Q9Oo1LED/CCzmn/I0YvfyOxYOgACazUT/+/UX0ftyXdiE3S0l4Nso1tv8g8wCJlhnhfPVYJTxpalZLyyVj57nYG0Q0IZ4+1/JvEiV+f6wWr0RUNEFZlMZOrUHiXmGtKnUkurXEdwmJ1pS15+QHSnoiaOG3+aDuekTCgu9OBG1UhPB9gvdR8KGc4Jf6wV3VXfeUWJi9mfC9MggtlJSp56X3UxXl5RBvFLGavcH3yBFtBMNpCWbonXIDREPpf1ZqoLI+gFxef4NDYdd9zQzg6GMHJXY+G/VUWpxK27qPdFGxQeqOjNCRXYkxUOufR2aR4ukQtBQ9wPA3wC9mybMmCSH0hRNDTT5R+ZDDKiAtCYBFLM22FSanCgcFIbPAOr/kmCrGQl3FTR2N5qlWlPL+DtAuja9iVOlTwXyQqTyJgf5N9CBohreQohdDud1kX8L0qpQpz2d8PNUvZGpel+IAfjp6o0DgPsSBqI4mKTLIcgH9Mr2lNwTNTesDvBLP8iDeFEdIWsz6I1u6vXCCuCJkKx6BUToP+iZd7KrMlaxq9M9ns0Vwj0iD8lbh0vDGr+JGLhQ+CSRigOdGQw801evGt6d1QMi92zCMeBMSAijTZwmVz+i7yfN4dYMtuw9OumGtAKlj5z4wfTS0ElfpfxH1O5pexUR4cviwwZlm0hesV4UpHjyjHrRg8bfa5zExfYH2b25Z6V3mJLutaYk4VWLUKetjfyZc0f9qPFvbHz56UC7l1gRUKgZRQrGbJ8I60NixN+HepgQLNpruEE1A33R5J96XeD4KX6cauZSg4Y3iQAm45wwhnuH3r5ApdgrNX1NauhlNRB9SxE7uZkEAla4pCC6O6VjgaJzBIa5q1srTz6Er7hF3ntAhj3GIEzaw==';const _IH='074f274c7c937c236d3e713eb26edbbd0c390d8e578e81f6b84e210493d31ad7';let _src;

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
