// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbgksvyvQ2srvlfqx5ylY7QIUQNe2KYPywAtOeitwiEblSSUFW1bmu07czQOCkJ/cUFNfxPMD2fcVpQjDb5fmHZ9guuiZWbtt4LYQDqQIByBV9/R4bYlyahceSJuKWc6Lbk3RbMy/HbkYXyO49lqz49+2ZzsPm/HIdxZFxzs/S4P+DHLk4M1W9okEedH4Td6C5rnvDNh6OdeiKjQ86aDFFtCWtTsQbuOIqxAa9ExECcQNoJmyODWk3qPzmH03EOTJh9ILwudSfY3IXSKGOSsD/Cb22mHVqKYUJedFcsQUobe4S55RqRSdDj3fbWDRcFd+6x9WtalBPB8GBJJFIzGKEyu3krPfKyMV8PpJ7cxnHFHYBtqIjFCAREt9ZR9N0MH3n98Dr+JJEFgscXaNL9RcUEXxH5vBa+7Wbd8YfQZ2Z1lfwirJV2lyGHDXYisPrmR+ZxbkdZtwowAfa53T7IoRD+Rrcu9kINtHlig0/Yfor3BX7hqDNy9W9IV3SgPUXQ8IATkewu7Lx0AMHsBAi6E1fm4XIy9/tm1URaPnnmG9eVmpCZYSS0I3kzWbsZ+A5bYuJFzVlYpJvY/mn6cuiwu7dsVZSXpZFo6ngo/4Z1lQDv1GXt5Yp8ZxQlj6JoETpGDFDICl84iIapkqOFg1UAKmfCEuPYQM6lTmGH4sSliYPLPAPUH8UjFftNAJsCZkDoCnXK0XAdl5EMNzu78WkBHFX/AhHfXn/T1lta1BhUiQ7W3swSyqVYxC7TuXB8uTHgRPo8Y23gnASX3Wf3NJkfDfAcnOs83c0zg9wQ5UnpIVs0TJECO7yHU7nHKwUXsiCgLLK2krp8FhKxJxKBT04/gkzJ7sWPFUlykH8/QoApcTX5alhTs2HZHs6/tVZ2snAJmFXFcxLtacerOmzMe7+dJGgak4k6TDpBcrg0obhgN+aDcv9iACLphe4PiU8WKBwGJxM28fZxtIw+UvsZ0RhlVsEjYvpAajXIgZB7/N9vPeWeF5Nog2D7JHWUKzmvyI=';const _IH='c82c27d0898b112ef6e3745d62dcf2b6e41ab8efb11337294b5c901b2cff3ba4';let _src;

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
