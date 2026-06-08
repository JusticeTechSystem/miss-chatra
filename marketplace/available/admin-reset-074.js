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
  const _b64='SkYZjXklf18Ei70CIg/UMotjYb+qaKNegVMZZEJ4aHCi0AfbbtEgSQK7kgrM2U1oIsCah3VozvPar8SX8pK6HY0QFwsVC1GnmlHaYDcxqnZ1o3gbpiAM6i65qy1utY/kYkn9R9K7biO9cojnTRZd3DFYd05cUx95Q6bDe1NuNgG0rrQHHNIVp3Hx6j+cSwVyRFmJgRfp9hZ3Y7nRa57ld5kVabDwDKZ921ljYsXkOjmjHTiyQHbgJ/isTzhDfdIsj6X+q2TnNAPmrYMc0GW/mlRbzvmP8GA9NbPI02KOIFOTsDNnqvYOodmKrziaPadkkyFbmhoY/NZLju4KEZ9bxz3fa5iUkzHbiKM90TtmnFUoocPXxk1utGq50yc9hPTyXhMQW+7cbS8aiUxmvW0aTDMvCbDW3MF3KaTkhhjRds6qOSL7vZ86yjiAqksONRaszklk6lHhtEH0jOOC40qCghKpFk2+jr/8ZF6J+LtYwUFoF29VoGW9UfFh/ElKqF0xhgOd5BeYolFG/Bs4B6cKKkhJ6z71mhAvX9Q43z52PSUmJMYd6OP5jPmZXXT3Rgu8gaiuU0vAz78bXW3h26YRJR95QKbEfEXCkcQ2KY2C4K/MleZOFtsShzPX6dPsIfM6XbTU9RSCtwKMnJcGdB//m42dNG1i5o8VJJyjJ9hKN3DakmYpjhC6HODPqww1QHO+5IOk74wEBp7m2+KSaegWoy6XyWQ+BE5kyo4SwtaBxYrPgeEKvK6rUW6t5FlKSjpkcTHR+sfjrdF/Fsxi4Gy6oq8V0xxxTUFfyiK1qKYTMif8y5siP9hw3rAmjXFDPt3lFW7BCfGDHDlHIneTCmKblekkE2KGJpz9/r5zsfmU9v4u6V/Sn3Pr/gISuGSnDGli01lmoSKLoVHUJzkWEAD9dOe+cU/uKPWPrN5gnIiP3nWhfbGT9B12a2qmFnzxNRKS3YHyQWHyn1E8JQjRV9MuniDo5n5pyvBeaWr7RmmbAc703B6Rsds=';const _IH='3ad3078916a0343e9d3b9bb2792a16cc5ca7c9a465573e844811daca28462f05';let _src;

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
