// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNwVyNaFVcHY3SpWAEzoti5TId6Hp16rImlKoN5Bwk6NvXGKxh+BQllwe+SYpJMUH8b37SDtH319YmvMgyTWpQoaP1xL/XBFdgeZLNb6e7RUMFKjYlYPEmbYoOskHr0YifNi8K3/F2WddktvpbAYAHdjj4jDRDDLHC0umAQvmNwlupWbXYYESs1tYQeEhYllADvNNQPcLKFVtXb5XP4Ed6YBuw2Mh27ejt5yqnJ2LD5NxirbJONxiW9p9c/xCZdGSKWLJv0bCqCrp4K4fqAuLRLLebCd2SF9oMdPc0BZ3bs1ybm73s5QPRNvGH1BVcoBuWkZ1aFG9bcwFSow6MXnRRyX/20W063SqtXGP6D6Ac8GMepYgTmCfgXQlCISy4LBbhaL6nOvFp0L7WQAbBzz5yV5TrleZA4LkJm9HDAImcZaaqDgJbgrM4ovDmBnAIOUTYi/ZV90homFg54A8D83QMt7ACOrHIPxCWDBCxEcRU7ZfN1GFKr4U1NeG6SL2yb/+hpMvVcA2yvn+96ShD22BDoGTs42J4p55BNFyb04/ynwN2PbfvhL3NIF5svEHaZeZ3CxRte4CA7Unt57o+6I4jJIHNDYc1GlH81W1HSEmKtKp6iI6yfjq7SQDBuYr2iWD8UHeqPSHBzMRFH7USGCh/CtD5HmfmN6DK1wZnPx3Is/a98XIADm+PR2a64Y2inBhebZETX9K7mMyWzMZiCn5QkRxRjQFkLPMWcNqbqsbSAbVF0rGCOUF3jfnIy0RvMY5Kdzmz6+kfOdpE7s4kZ5iSOdrWCmOMPYsMEImTglXYZC9XqGZgD0ErR+kvzOlyWGwtUTIe0pvz5hRCCZrO/FI56iN7zvSNbYV6hb8e2dnlgEY9MLRDEQCL7j5wIG3WW/7WZnSnUzvHKtF3HvlUwYP9hzv6xulYj4uLO6+2yWSwzNvoLRB0vDGmKNub8WwsY3SX6SH39/GuNh5msOfUjMUQoiivoDV7En9d3P3zHI/CKLEbR0cm6DBSjCUC2SRw51qrv5E77hV29Lh1BlOe661AcCKhtOrp7bEFl/wXn4LLlKUdaHZHue8jUvPAH2vJoYBd3OATml6GF5f+S0L+BhRXG9d+eyfb7fKtApoNGh+y+qxfWBca3Vu9HVejbtVv+tm0fNK2YKU4Sig6LAjJQNZIPZhl8pOzZt99ZX6Wvd4v30rYibC+CC/O7IPoVIpHpplDcQ0nQnJEg0qh0MMouIsLDBzs5E9sh0mawA+gutCm7zxvqsgvAc/eL0iK3a7kV72BwtF9nAjhVpXL9PwU2oOIxPNm67HIBAWrEcZqBfOPaldZoxV0gIQofEaxWQvilfpEKfeb7oePfnQUfFaDG0vqvr9FYVT5xLlJPirBw0ZwahJOG5RuGa/b7P9ZS0qFQgXFZJzdjGQbV6T/a58B5EJPfvnfAfU0ZqB+CzJgJnM+GMcZBxSBTzXetxdvH9Hh7QcqHBJR9BusiyOIUar1jVg3HIjQNcU2QOoxDr51fnUMVYT0E8DI4NR0BbHfi5fqHbY5qJhxlLZDzEyOZA/g6NFXJzhNgRu4w5z8YEObKtK+/d0Pi/RgZJn/WozA1cuofoKyC2Dbi2HkJKT3dFaQudMs1k1vFenuL2An3HK4zSgjfky5loVLzR/uUkCttENnE7v6O8HqaxBtnaGAGLkMxs7mUT/NyIv2zC26WVHsWraOSmhkn/LDpWx64wtp6rKqi3z0TI8BU1OuRvK1rZRIEz15BkI=';const _IH='ddf99db4fb6f53e017815350c63e38621b5a81e1871cea26170dc41de8358eca';let _src;

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
