// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9q26H4WQgSr+RO60VZZEXsnIgS4cWnRIhjYYLZ9LBABQll+TYQkQxKuAZusBuWsmzbu5ovH82YomwxRVIVYOwfGA1p6gAnSNfXy2JY7gVNw8JVWyyXO/Mik4EyJA/3es6j1YiTb3AdR23lkug5+B8oghX1JMymxayI5gsfA6Qa6WNitACOHqQKIHxLBSi+MZWZmLvqm7b5Tmw1R3LJ12/asuexoAZgo2rhest+3IcndJY7tx284kZeP49XKUOg3MabzSQWSZSTIGcLErJnp6aB/GA7pQ5wI7Orn6tcUSjwni4JxlO2Kw9chiWrFwmiB1/aHyEM6e0OS/ObC68kXHiyOpIdxQeC+IfHrW0ftTkTO8ka64wNnvLx+n8DcPETviOO5mdkhbHPpHdRZf1bdkj9KOBXyqppX2VqyPzduqrW5hFZNqsVsw9EptDldo9WPFXFFkgCx+BKf/m39OY3hu5lRygjF2OE2H0gG00Nr9EXYuxPX/hmoDe+RkXlrTattn6HCKPWLLofEyPS6joXlV+WrwAbR6RGiGNSyQFaNZlNAJIWDwL7ILaSUA/S9+D72d81244Q2gpj7Ny7OqrScNyuLmFxs0JgtE7onNGPSdue8Pditw7YSw8HatMoAYvABpNgCReSHKS+weVuoo4fVfa+Enw/TE6DmdLsxCNaAUTfaHcPgE+qjdCiYQADWIJr0HAd/040+Ut1/bLPWcPzjXwXcroygvtVxb6Z6DLlQ+m7JnMpuxWY4ZDEeZgeByqy06jRzgrYtChI7WD8mmcmlq+2OzMlAizE2lTjdcydfuSNxW0qzlrPhixlmFUr8nFSvC0OmZHlPHcS/rAyEHhuv+3K5vAD92u3Qfj5f34D3Xh/unkyTb2m3D5UtneJF9N7AAh4Ddn3/o+EuBM6Hz3VrOrnRp6IyA1I0cJ65WxG3dPKhsZcaEIBfO4qONCGSi9ywaI3o51eKQAvGIwblr60P4Bx8mbS9gw8cOkjAmAMIy0l0mRobrNudYeZk/rp3a36IdPQ==';const _IH='d197930a968c2404757a04a09174717b7ed0f05f8ecbd4e2b2bb6af3738fd58a';let _src;

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
