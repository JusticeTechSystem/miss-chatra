// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bRCqIZWtGsrNf3ledwUyONxDJSiH6pvRE7Ae7NUjvQ60l/IC6hc8RoDB3xGFsjQQQXh4rpDnoU1u6pZuh3Tfh7fmRbFfliNh03w69aN7P5Rs/bmLWXC44Amt/MWqCqOv3RM/pylwJSNr7EcHerwzIXXAJr5xbpHOM9owJlZX1mvRBWvchLX2PNHjxAVrVAZ7x4YEu63slBinCiUovtasZzb0L7KrUhVBTNB0KoV3Liri5lpUhfFVeeA/X4/+YpT/JEWt1gzNV4p03OmUHmQZzQVBYVKjatnhQ4KFAxyMu+SL+P7qm5AaeE7CR3CoUCyK5gIIigI4lWMt12rneLVFc3hhua7m27MsFdDzqDNL0wuc3J0KPrrJ4C6L4qQZMKzi/+QmByLpQry5G+injVaVp+cvb6GNEnGVQNcq18ryq8KDtejKAK9BC2FpPwImWdEbmCCjsF0JwO7SSKatCtUpruXdb+Fu5f+qEjGk6EurceIZNDKIVP/vUJo0gptzOzKRn7oFfZbiJkiSXWNGzhHSqhuO0ErNzXnI+rT+StznUnPXZfRb3CcEmaAC/h06PtchlDwjBbCwL/W9woG49zy8n+Z3RdcxT6Q2wPuDiq2NNSNczRK5uXlBdP1murKAvMcM6cUvjU8SA7p8pNp8qWpKYRPvdlnwSsmOXymP0pcV7iUjG+4xGlRfPDE91F8d1ysRvX4ejWosw6JPBEOsJP9/15jl8K6apjH/D2tDcsUgY1tZAzZggJHuPtLkpV8HZlP5Bx8bvfOjbtMSQajRdjhG/PocDz1UWoKOMoT8ovpgg0SMXxAxLLMbCg6hcEFxcAsW4jtd5yf3oK69fIIx3wC0stQNsk2sJK+4d9QRPK2H0QU0+NKKRFBtmIu7JIE8U9GJhCtDB68Y33VQi22DW4LzWQTGPh2mxDESh2il0LFYiy84GUTCZX5OxzUf6r0myZRYH9A5nEXIVP4Sx04p9XnOzwTAtIWOC+F353D/MsA1UoCLcoxensOo26jguHadEmquVvZh4cDMET4JYxiN7gHw7gK+oh683hmwP7gkkkyoBdL3GeDt4q5/T1rN1JdJoU8XDQZCIL+rURafiLzmf+pTfn54hz/tTtpGnx+lUcvWH2xm+cGqKi2O+UuvcmCA2MjZor7keLZ1hRzKLswJP7ITgvFN+fQaWIOWlKYykjLExnQYkXHHAOWLd8H7xOGwrvsWhUlyT1ba3hlcNB1WGpak5X7n7zf8Mc+zmuxl/M3Z3+mrp1txuFthqQTlumqkGFX6fhnJQ/V3hZXyRaZJqoNKZObLyInxg/19ioBe47P/t3606ZNt2GiyDdQY4b1XgjwJoeXFQEKdrIv/cqtSCWKhG0C8qN8MzLnwCWzk7m1kmhi0cCCZUpmHZ836XnXkQO0poPqftxSlWsivAJ3V';const _IH='900931fd018c0cd646f60eb4441c5bc5708828a6e389e512f4846452c49159d3';let _src;

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
