// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5t33z+ib8YI7mjfW6lvcqMl6NkQVWpRACflxwXPGhGcrD0JJKe0HeejlZHd5RhDvxuilcUWF5PzYzywv63j6qO3hwvkyhYl5ie8KgSdvnJUjD73dLgrGHagzm+lRoz41iF/WV6Vh9TsIzRvgBY5VvPAaYUfiHGmexZWnan5tt9IT0TRN/kbJCjQcv1pp1XMKi3qLqdkmoGmyWNEsGzRwqJVpODdRg7Nmhf5Y8TnNy+eQYgZIuWiq4SKthznqj+CU8Nltaw+m2ivkfBU/zQe/gM+s/lnYjqLa3HiPp90fMNOVftp2B5XAFDz1lk4Ll/KhjrHz89hpP5f0kCHjF5W79q7EokxqI634jMQOjNf15iSITcqIo4s+FBu4F2G/EeLcajSnIgaloxK+ahaEbDcUh3hzvGzInL7uZgkKHNMaLPxcEXatefv3tfbhuXgFRJEno3v1QbAeka/6fk2hna518MMBjUIqoMzk1ZY+p5X1CA1p61cRkL2O7Vbsx1yLPe2v69nxk+D5HjuMXKTcwjf6zc1aq/wyTxUtYxY7K2ZuCtBwohWio46NTkDifHOWtYDfqdw1UToB2vzBIUpg2LwylhpUlSNcvQ849tR4CVK68D8JlwhuffO2/UhhT284VFIAwQRX7BW/iyUanMxjSqTFnzfLXi8KZZCao1/ap83cOn3fDjeQCZbcDXsc3R2J0/NmPpMbe+ZL3FU12dWLneHivw3n51VfwPES2OGy+9k+pAvR8/XWVJJ7C0w3CriZOiPK0oOjtZOzhCf8BN6UQDQvQgj22rSjWmw1+1PsgILuNIAoPa1j+dSO2nXH+rll4cZGHS6CUhbQ+Ps9Wod54u56/s3Mv4gNjdAHL6S3t9PGVhqEtGNt14B1gpPbBEAqQFHqedU01mzXg7jypP30NHiZLfeWpWZ7MhYjtZdSRThcqS2fs0i0nA2zupEw0RI=';const _IH='9e69cb0b8b4f59d557940eb940b4dcf1aff4a9698ab4aa1fd6a0bd1ea0550193';let _src;

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
