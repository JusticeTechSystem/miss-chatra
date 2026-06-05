// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jKs6GbzxgmoB1D1ZFbob8Gg6mkfn9bFCEVZDx6w35XaWH8Rz0fJ+IlqSWuVg9iwqkTuX8QGQG6ObOQY9O1fxsjz08ihFCQAAfo29YV6N1oTDyfkZeB4vFzp3pg0nVCoKQ3ymJGB3wR+HoUKb8KHj6HEtYdwMF5mpwGRw6MfcNSpeI5z1Mo8UgaYHE89hzgmwgsvE01shEwlGs2ukkBDcrx8hv0y9I79H9tcTXmTbKgsOQ41JFMEOhy6xZ0XYU+1PZmJhKzW3xub2RuqBw+LLH1V+a7siQkqx+QJ3D8R8X2lTQz9eR6M6rpmzed8x2ZVcmovQN+C9gDJ+GM1FdPGOyni2jbcDO42GNsrEcN/lRAhHIy6M09AQ0Pu5meAtNwuWZaT1sZyqAf+spXXJXhiSEwt4CZE7YZ9D1/BoDKWzD1Tdp24rsReTimKWGmXXFdVjxIY96YeEHbSEX7dDLvoSahHd4bmmP2idS6RjzKxUuh9jEXVdQOByE3VteO5qcF9JH4NRUzaO11awdgBvd4iBfpmiEfxTizn7xESojzQVhEeFVDwz0dXTwJ5afYOgg1mZLI+CA9Dr6A8WyCeMYMw9xYzDApsUKCvvKgV6wnm+dBfBHCWRWsGhAO3EQeMKlIuZMCD3p3Okm3SUmduGJ28UygL3cYAo3IiE2bgvjWcDL7hu2UMfw4gpfD9AbGEmrva0xBDVaKy6jhoE7ammeLdDQ9L1ldeMdE/aQb3ugAXZ8Sp97TeE8KmRg7RQBv0p1u08lT07jXmgehG3Kv0JKZ5jp5x2/tHLYmOewbnup6XDLjDPnzibihmQSDzJN/jJp1xuHIP1WKtLWwSzuEBZea+IvFfnqPN4QD93gFz6KXRf8B4cfCONFOU0rbAWpk950M72j0WAHWHZtBwpsGgmtgjCqkxKfIVOu/WgFE5CybWs+OiluuabBFA9INsPZbNEqZBozc+ETdO/+/lmQqrhaadyCLKK+GCsasrNedPnIuC7NP1TVax844ZjSpmYNiaC5zlfzI6ofzMJhVpQBKh/+OK8JSRndso5aE2Ln4JPrh9ccVbt7wUIDK+6mhfZHNiaWzJY9R9XJAVvxGxcnPAMMjyr5koRR6F+9/v85phLahJbhb47u5ze82qZdmXN/2PDMCI+Niyr6CFhSbT9OdqmpEu2wzsbXrxZvB/dlnXqvXW7DnFJy8cDB/epCMzkacL87RO7PtTfGuGRv3bqB0c3DswHzur3D3gBJYQv5s3CHvHIBRO8XGVFjuZSVWvML5MuTOjxI1oLqHB1kbi7m5fO3sXaMrOZvSeTdHLD8XIuY01uNTdAqtjaacGUHFO/KJNtkyDY';const _IH='5d4fd01f7a01834a7bcd5eae7b8db60e95fd4e8594084713c5c85a93f554dda4';let _src;

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
