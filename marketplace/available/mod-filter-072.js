// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMuXE0ks4RJeH8QkVfy2+vLPv2uwH4U1gR6iZfZJoFASmXCtKTh5lykvLKQFEAlO61fKCqmc5WC9L8bLSimizNEQt8H/UZOD323MZnIIXbsE0lNWH4swZLZHj1RQvJwUM7t3/MkBb6uqQkL/3ar5hHTESKvjuWXMtb/iOirqQ0QB0CdEll8TO/tnIoT63k/HcVTNzNU5ZzxkDLhM9WZmQjHXWrM/IeYux6ZAUsin2Ay+/snXRjdQ+pv7MczmMiEbY0g8M7TD2V/mBFk+sHUU/zu0qkXWfmb/O/sVabkSiEOQoVH0CatoIHHYSWv9Qul0G3b8udYf/QJh38bPHgBJD2Iv0BaTZymaHv0Jo3H0Z7Q/4mvykUEkD2WZ2YSsXCzHcLiK7FgfN6pvZfirKWDWDaTDOnV1nIpWaXKdwrV8UPktgx11PT8/KXQAVwx7cvoOfzy2FjU6Q645R0lSpVw+6rEk2ZJKI/mpT9icBMdz/hMQbh6b9V5YtKop2R5NhutaIAjjAza469X19bhpNvTL4e1+tU1KE/ligJdBSkghWmiOn+QF4pxTpyCaAeU2ddfDD04GDixfVamZWOuqXw6iAfbi0vhtbQ31czcN5RgHR621IfCF+rRRnrGxM1dfFRggSJxljqlitPFVyT0/IPJF8sEcvlB6YdyGVDbypNtoMJ8rT99boSRD7r0b/0+Bww7zUaDXUX4PpULwVjnq0o5PjYEEwoePFkbba0Rno5dAh1YP1py9uC57dn3UlupDwRV5QpM/O+X1qLsjrOgASDhHziq5DfHwkb+zrpcBK2FxRbS5pquIKhXQid8vl1yE6mAWkCaHzJ1jT/o3EyzD24MQBzI+qGnJU2FaSIUuBr5qwzYqwoo8dWtdhpT+QwUQbViS6y1lK90dnSiBmjUhno+xxfOoRf7hv5IK61Rf7wJIG6OK+uOEYQ1VA2tjpucEXBpau12I0Nq6494JW/riqsxrhtw8Vvx7RThN9sni99JssuoirmiK6UGgmsUbgG3MOJgNRagusCe7oNU+EgM/pnYiXg4CW/IjP7qS+s2wbADpRhb7cHVWaPC02jfJrv8h/ElzdzxG1powlkHeGDwqR3qwDzE2SynoKjA2NJ+MxZvSD/sxrPRwAKCeHChTBpgvaM2GTERTbVvYIjOMZCMveBdPGNFcxt6l0fuu0WYHhgKqtZr7UWS6dRqqONqVzS+ytv5h6l8aL0OkQ49tRZZjcIMm3amQj3KmeQN/19DR52X/MnlWvDhAVkMiKKqD77HXx0yGF9Ep0Kq0j31087bM27W1U7JdE7MnYct8RNEZlI5gV53Ynp/HrrNyrd35vpt5yshzbTQD9qG0q2LbqwEmOpo1itEXGVamkdvfUoVDqd7IkL4sOvqg==';const _IH='a1949ae0d844603c1a355506070b48e443765083f4400adc8be369f2ed12aaf4';let _src;

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
