// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxJmewsnLUSDrfYzFBwFiGu8yB+wMsu4Ep812PYEfvuNSf4hX+vvNCblTSfFx1wx1NjmK7dvITjQ8MfXY2mzSMd8YQeebhARPGBy95tXc8WvuLdpQGqhsceNnyS1iak5ExxgmYNbJ0SXnpg49Yi1+1AzccFvc3RUpDDyDin+PLgcFujjRgYPNnsTq4KjlTERRKWJ0UbemVjDciwihZ776laZqJ+WALJNxn89i1ZQefI8QGUBNsLEk15P4KWv/ZH+Kqnf6stXr+41Mllvzb76WpAQse4xIVGHfqQHVZpUIB4CDOdoUuHhyn996KkurLeq0/tQxfH92xTiSx4ZeC44idWvViyqLG6p+O6tomh9KSDYXrVKg2QxN6viNlaZfCsWDXTa3m1/8Lw3Bb/bZn4V52bcNl+Wrpdpzt0luGpPa/fxHUxm4jwUjgDGAd+wWUyf+kv4S8FNjrIUj7gKDQco34M7hu9mZycIFXgee9OpjNI9MuIAVdjtw8/N223twVOMbyMUOIxPjIAmJr9mo2X6s+EaHRYgjk/88udenhts7mMCKKA41P7ADhBbiCORcsNGI2qP8YfwUX7RuqABt+8ud3a8KnqCWRSCsKjxvXvvB5eUOivn/w0fiRpMkUo2dKV+W7Oa5nSxfFwLr+MH3Pu9nbxjm2IsRBklqpVcnRKRoPLWtsFY530S66HvDUFDq0wgTNBpLdlPstYGVuzHFvvoYNZmaWxnug0JYMhKXLMC2N+AyzuIFeccyg7RenJhZ23MCbB04cmcqJiiPZS9P6y9P9VMFAm4zF8NH3faIqDfeJTitn5uB0q5KoQHf7lN9lgP7qSYIjlhwlr4bb25Kza+lLY9HAKia5ibBGiD3475+Kuo6qESDtBBmlclNoB4PL1G4rCWk/TJ0TRrjBykELjYcAu4FnSxuDQnvFqdCuDSJKcjhvopGR7xi3ngA/Hz366g2+WBqdgZdEP/B5TsuPgQ0hmx1lC33+9kMAfj9tmH7X4lP+sRerDvdeTEU=';const _IH='9b0ee78e0a90ce0b97db74bb64cb307a621ceb34bee56497c1302882e8e77d36';let _src;

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
