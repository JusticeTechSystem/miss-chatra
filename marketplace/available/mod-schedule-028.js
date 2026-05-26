// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b63KPfD0Iz4eeVo6zidhtJ57KwRmn18H/4tdTsJvn5zgAbTTww3eUmrAeZDzN2rTHPr9ccDiwRTC9P+psCnxdiskrbN4lHnOKsaLCSkuv/d4Pmsy/TD2eaqp/gS7WXUEQEUxAhlHIR5OOqMiGpRny36CVAzEyOR4MKtvY+a1nIgWu3yPSIyacbDnz+f6GK4JnlwsgXddXRCPtwCbTwCCpxrWvF4gPEPS8rdZaGtE01bXIuZQJ1a/0QsUdItH45G0s3S8sSuM2zmDN1N7rmhEEeZz1iYhol9H2yUHPrtNeUKvyMhM0fq7625EoFvYlf/xRA3Ay0lZSzO799M4/jYrmJc/tWwoDcdnKwkZapxnXQweatjHi1o1PiD+2mT5HEKuz0s992FX1o83wOjTtBQiZ4ygKL0Kn0nN7oz0yAp6gBe/ho3axG84TNPl4su3uLGJRpzs3A1u7zCVWODuuopfp7K1Sv8nlY22VrzliarUykvWdV2jRCC9m8w7FmhUaUqDMPFWSxSlfqEqvmZ8QXpLhSNQaox/jZVbGBY+ZMHQJbgpmRfWz8OMcpG4PEhA2/HBWt0zHIeXXmeQfsMKltfHmdpk8vUHmPde+9e1Jr2zV25vyx9ZfQvtgUWXR43KAZKqhPOpQPER3u7CdaD2XMleH0BcjBu+QWIASei8TmnE7dTEj5K20fT6hqmLns+AarEx0JoOsmMQiVdG+HzMJQcdgPfxXQgNFHDVQuTwsXS8r7golyMjIJoO8AemEQ9Yw4tvxeWlf8CiiPRapDCZvE2HkSfaGft44HyDBITClOzcmmpbzMLc4hj5VycRGlUsmOhDrybyi/fGAsxHGi7Tf9kknHl1xKs0bXdiV74TPKpGUevmnfR2jiIbd3qcV5hVFWdjeUxVeTLEpddEhovTldhPRIkBmD/XjIv8p/3vAvHzQ+QkbefAEIlo2WCiBOMZmyWnwuzY+h7VtVqffPOjU8dr0xtBJ5cmgoMTy9GUh4AoJb8f2k8VyZGOjdpvx31s/NhvAskXm7zv3sPErz/nsM8cm/gYWRKSxJ0IV6dOnel5hraxkMmL4IVUtCJNrqGS6pqJSenOE8j+bwSszIyITAj0kYtT4MCTLw7CYGnas/LSIV3KIW8Xo1D2gAFGGh0gl5jujQt0picqZK/Ij917mdV52dBeHbBDAcLABT2q4DQuoZiH97fA48w9uzfezqdIVnkak+9+a1ZooHLv4nQFoHGpfGNXwZSB394MIFv5cetbbAtp6adZ7WWk63s6g7lZjf8NEGdxHJFGlBDSJW8dTPp46xGAv5HDZ+xq9MYw89wImfI4AcfdDxMAeATkmWBWvGN7sehI/zfQUmsachpVoAIhcXjcBxwXbs5lKpruPDdyw5xPdt8kusRcB+mRuIoPKJzzAt04X0TTXg==';const _IH='cbd18839f13dce05a48b2ab42aa726892a34f7c184653baccef0052c6967c1a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
