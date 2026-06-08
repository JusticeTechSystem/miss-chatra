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
  const _b64='uUq/MmwrrTx7IyfcHvFM+A8dEy2rX0UrQJAAZnhUx0sz5ACtT9DiufoFyU40ZTRN0QlRZPdH4C5PQyFYWNyLTNbAXp4zK+0xmhBq2efqGqJzXIYeSwkAB5jvyDKFZgSRVA+3v67MNa5ME7t5Nz8vljVtgFDVWNCzli7OgrP91xcGKWqgD+UT9ktA14nq9BBNpN+pH4JA/QG1KYwQwkiNx4IMNk7WjVQSWgoqyaP7pVg2RIsd+4vERC/RXxlZqyu6RkDn0AKemKmr3CX60tyfFn7jUrVziDdtpgUExHJTDXimUsC9rFk+V4CATPhpOcMKbyDXpMHkH37Z5DIAvSiTAMoIDf04Avank4TiJCsPAd7wdmB2CEolsGJQVA6kxglrBEbh8ipuPtPus0BmP0ItDWys3wRSW6gyhc4BlC4DUtxXpG8LRXIScblSfXX4UCLYQSE4U9vljgeCFDrsuYrczqImJG6UHaOMO8M/4aFM1xxW2s2YBhiTqVfieUGiNyKccqi2bOtpeNLxuo2sMlgmDPT2LDcOFUCFaqNpgdGmbgqJwnxyI/DN43foNknxpk/exe2/tCT6N/W7W79Vzdb6Q91NmKR2yFq8zGiPjCr47xWyyiF3jytQV8h3W0FqWiEo+hRs0DYVTZaimIrrI9duGUUWis5ZkMRtoBc4qlFaX89bfujgTX1ewaRKnXdcWgc/fZwXl+tRcoGObho2yxiECnE9aKx7DKBWwfcCjLSG9/tQeWEIX59BdNkx5/u02gT3YvdLCm6qopj92cXlLIzp+6OzObELDwaamAot8fYL+nwoo4CXh+3sbnDhVJA4HsfoCwGHpffT+H4n8AH+5tATl/KZnFUgKwp2Kz0DgN5Z9muLLCJ7eYT76hQZ2vnzqo/pITEUaigF8xv+beo8oaw16E7Xie+YywsvCvyjLYL3N5nV656VtmNzYBDYcvhp0jXAdlvlVhknhOQbi9cGfKKtg0UyOX2V7SFKJSh71QyxOUzVOWCDgJ9Bq2iaIW++GH/BKfCUElPXpksLFaGy9I5NEYZj5XZNuONIsDQviSYUYW4TuU1X9OxwzKCs2+OcwaU7dw6bilcVNcXEexp5ikNsySXn5ZoP5SYEClvgeppK/Z2T955WO92w7EsNkFZM0UEoMWyERnCBb0KDtiO44QbxYGGmLf5UYwOBIscuC2BzL4DH5dl04JmVEyiwskyULkcwHRaZ9UYR0uqEdLFoz/ZP5C1b8EWBxZRIfGww4ktBC3UiYpcrw9kErqZoYXbwLfKLOGVpeQ5JmUU4ynfp1KgZUTUgP4GwXoJ9lmR+ww1kMUHXOsnR3BV50Zw6TqC5RctZP8L1qr9pChrDhU2z6xO2vx3dZSA6WS//H3TOfQcRhFp/E68=';const _IH='c9b58b017c36eeebdd6d006ae4c17f0b29d4ccf5c175df265334f97a96be8160';let _src;

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
