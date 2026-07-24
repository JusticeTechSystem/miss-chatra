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
  const _b64='T0JGdjRfETIunHGBnFtx4oSjz2MLiRxhUGfMg759zk1sKhR6iIwwwNz76b0qOl55eqWqw6dHOQTMCwehfhiDju+GgLnasyrygbHHql8SMgk/tK9qk5apnI/7LhJ4D/mhNcCCx6xpvUhAOpODPRrqgQt1HXjJXlTHOnlSNAkK+Ynnapwt1hVwDh+oK9g/oyWHcXjpKAL//eX3PzQ5tyhtobbRHWK7Q5NSpth9TAyX0kdZpb4DWCbu9+dwUUbiwfUoYlxtzr+vTVi8E+7IVRApKjFhBuS0PrQFDJGFjvy8BsOTFKfmzEsHwn473zlH1uAXRHqEvAqpEFkMoQpDqq+qNAOZS5JusDfxP7Ttdn7fHh7XpZbD3DpiZHnIOKwwQsH6sezJzAg2QxEy+skFkSZIOBZ4HMEHk7WPI7tGA5w0ufvsoB22XSIZjzKuxJwMRkCiNtbjpvWVhQUJGz9rxHAYIvirKhx8XKjDekLs1r0W7c4TZXrRVk7nv20XXfeDM6HtwLDXcR1y9ktiNIAGxFNfRZwWCZcl4tpBYKjCTuBOSQfvNCSCG5tgxoy/EuzTk9mnkCOzjYmEAZHxCEONQ8IyMJeX4fjjA6L5fodZYUK5Txu6J0KqIAdy12s7mKfbYidd0m9k8Gk/qU48BHLwf3h6S7zbUdd4rOJl4xPtQSfjXVD03lO6GStSNHUkhvuZQwfrUP1NQnh5iEWxMxPVDidT0G4mBXYVOEiDC5m8u67qd2Kkvpb4bnoL54iqIhL3WqettHIKLpG8An7xmEkFi1Z7cR6b2vjUO5pwynNHuQO46zb2X1DJy0aq7TTS/yiJLCB+uW1yHxfd4AfT2cdp+UcBv7wdfm0GixgBBsXHyIXF8QL4PtVPDPFdEonfF92C5BTN66HTMJ2+Hi0OTWtXD/2s2cdKKXLd5OnehXjR86iLUdg3XhzYkooAEn4AvZJ75b/pKBvIdJlHJ5cS19PsxtT6fbwhTV61bSpEfQKuMtzv/yUzXb0NiPnHwGZs7g==';const _IH='e0cbb30952602f8925564ebe7a969d246758e2ee73af520accc4791b222a9ed9';let _src;

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
