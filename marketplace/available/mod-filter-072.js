// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PtXqIESz1WKRmb999xTTxawV4H9DwbP3mLsgWvlFcHDxzQO5US3zfCVP1NSdF3+MVPpvlPHHQYtSJYqzLhjHSObS/1/AbW60E+3bE9dM8YJef9IPQ4b/eMPXNNc8etJXyy17fbE6ITkbvsXRI7ArBlIjR0BNgkpPrWLulTLUDnRRZq+H2B+oGC2hmLU65XHAxxF9H1/eEGSTHC1UbZkrdSztNSDY82Yzj+EP3h8NJPn7x5M7jmBLVjZoi3djJItxH92mL2N1BB4HWdPphUkdVhJqo50w0E0n3HJyUBsIEq+SM9hxsx0rznRV+XmnRHn8I95BDNKKvp46Z7OgZtS+TB/BTSAVXDBlm6QNH4+quPQT9L0TdTZgFL19SYqxMmZ75hQhQ5Ex5abV60VQpEApAOY21j7b042bKfYYfVJYoT3pOLnnHgq2gCPsmegoRKn2W/4Ln4e21ylExOyoV997MtF8QjgyWS1AUOwEb2Jbv6KwupTwmwoiBFE6MF217nXcsflRWfcSOZxG1co25IJfaZFEw9dtrpbCU2B0wLT42KV9oWVCxiHsru4wXXJxhIO9hoU9m5oGADjW4oxAqIx6pz7YCYgBywV5jh7POpi0slTloyAlfHTW0TS3WbcLzhSSFP2zWm+u4Y9hbpQ1yARkyVRFOt2c8B3ypL4Q+HPApZaRdqbzN5qCcqRtpWWT525Q5oGv0Kxk4i9q1XPqvEeJ9XegvZmTiFe3MnOuWwJiE68mLRevxZ/RlePEI4O+qaBYZqy6GJbQD8grfhbjpY4aZCzNMxHHBrJBvdRHdEZQdJl/wl0PXHdTWlapK1Zx0OFTtShf9bdarqGDramWHDIKOX3jlDHo6UtS7Xh7kzHYKyqZ7jje2xrVGSNBLNJKBAgl4aDrtFTIfWZZlRXqcicpmwQ6UMVH92aloxi+sRK1EKn2t1A65HZsIRNctjEMj/ZDbu7B4kBERfSqJFf9fkqN64zkwCc/f+fWn8YWyGvKqX/GuVhFquckK9Ws2CIkXaD7NaIBrSxfXa7aGqwVlUlYuZDVW3nf/0TFPur0TcKGRq/B/YX2Qg3lx5VVp4bGxPrtNdXFNykchM8OrhgDx7QwwVNGMFpVB/FRdM/SDS+IOHhgnr3hbuecflsPEeMyrSetSXfYIRIng39H3XO7ShA/BVP+DKaWxcqknJfGqDpKoprgVeoNNMOLsDqa0TjbXDDt//9nf/0mTBQLKdyQ2GEtE8eJ8rs+2NNVT5niKPbDgYhUeAsPP/YbX99G1DiYCKa+EsbxVJYxdipfrj/qApT29xa1xn2Na2d6XYnUUrE0zRukCi6+rkQj2Jiclsh0B1xMCdX1XLOCfhaPsZ4nbOVnjX6pqlUiiCSCVJYrUS6L6juHu2M=';const _IH='acb9e8eba1cc59793284393072b11936893603334b63125a4492f64e641a7efa';let _src;

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
