// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFfMqofQhCpjfz3FgMqRsKeXcIl9XJ+6uOIF5lLkpA5Gm/pF2QeDiBC78tPDvNqSgE+62+lJFZBki/ECI0CgaCHsiMjMcWKqEwfbUGNedjmGxOcyV0fvYH9GwDBS2rUvgLqUOIEOHji3ZypQdzBLdCsx7TQTC+6TI5iAJsCBl7ub8v58sBR/8YAhQ2MXO367Z3vT8tqmoM/EV7Cmkh5wvYggPKTkXf3cQiSDmGe0egkARjCZebzPWugzTAsjbzxetBV16b0biATuyiMt4MZmKMEYS2eVvojivG8LIFsRKIjx4Goo/OmpS/4xAgo1IKKwtGZ0xouCxITA91cTXF3uHu6d74Y1r+aOcNFKaZynMCqX8o9gJY0ApBTxX/DkiVvDZL7ERcHUHiiVvaOKuSEAJIsxM/l8WWpR4urGN5H3SkRsr3PLnNnpv8Ji1a896Qvb8SYx33v6wBI2Ui5E6WPfcx8WyInE6UL/nXvbjPJIV7eXmiAm0ZzWRhOoHlWWoMoLDeHPA7ZAIRqgTDcMbTvi6BiaZfgof2WzBFfsaU1qd+t0jd5vbZrN7+mtRB5l/IEzJOW3aUbQ5hMFKXQ2MN22jKkgnBhwFtGPDyCHxL3oGsjfZFs7seMUT8G0VUA8CN/Ald6yOi7pYFTkJrJX7rtdm2S5avaV5PaFSZky0qBwI8o2oYpvDvksnYxoD2zXBzMlj+g6hwm/n8hQy4fLpYoBw0VxBOUimIC3gCpYP9wU82hLU2WEUwAWZw10FxedPa9nEN+wfo8GNdE9Kg9VlUnwLXTW1BPkb1fvU4oBImXw+o63BlqvCh/LxvNRDrE9ZBg0ugnLODgMx9gU/11TFb1cCvugGU6wMQ/E9GSbcHrc0yT6Hp5pLj7L+1OzZQO3uMMWkZi7rjP7xaWQkLxe69rOdFbQbyfBfpsdc6gdJnxIxQ+qFh4JoahZHaTV1SMk5/4+qtmpx2LNWJoTTLIDEhM8aZ7xQ/hvGN39ygqQeV34Aah/9i8hzzzxWRCzATqGCF4pWX6EPebFCn6zClpOfIKHXkZNiaQyrOwFuBzx378IlbZIcz3JOCY9YEE9nYSBoZFUqPzDMo9ZtaeETMzZmDk7/tlryYfEKLZzk5hXAdUUeudG3CpU9kZ/V/y2tGsuQa0nVxHtvdgv/BcO2p/L/9J+neQ5N2srAxHq+4zxIjslltRATfT3U+k5KdVyIhdgR1q4f+dLbmFEM2pw==';const _IH='770a412e0e9341105ff4ade31193267c64bb1d0a5288730f0338824eb6d90e06';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
