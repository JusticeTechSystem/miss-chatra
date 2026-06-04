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
  const _b64='NokkrgrHMhkw0stGe9rQap1bSB3ZvOiq58g0fmCIkN+FMFNzy/efSLzw7m9A1var7wUjcYec1+CLXqWRvPH55bYQmGtBsasuX/WL103XMvpVEEIO1wH5JrBEStiiHQ5yFd66Aj/P3jgHIXi34V1lo+N8LJNfmG/5I4HisMy53EfFgpvGZ78f0DkmpEU274kxRd8+RLhwzlH4ltl0juOBahItXRN/ZH2RFwYsAGEeW1Lywd2Qfy3sWaAqCJakqnVQE5fTYMLpHGUF+qBMiri7DEd9m77eb/TgIjcClcvmzzI10wN6mc+DRmur4vLNy5+WhDftKROnX+8dZuLemyRSh12uoRG7VxtAdBDG5TJxD/HtrNJaeQ3HpXkxx9RybDNbGySz14Ly1jkh6jCA36Vp4gBONggXbvNR1IUoo1NjOOOJY8VwVJkHAKtHv7daMI6kR9R80lQ2MhYkO2JuVlIpf601jrn9NyDcUEmYuGwQ8owimR1bZju8WLlVFuKkFwxK3iK052IyxbPeDA2fB263fkZeIBnsggMCdV6C4Jql1zk3rmouebnHMEZq55E/dqum8LVAKaK9R8I21e5T1PpwDr1FQiySEjDdEGrqcDKzPdH9qccBitJ/zYVcR0QcGnTDsSZmvl9O1AVlIrCkSeyUgscU9nGU/cH/bxmK1VC7ntYw57DWWjFJT7tW+WEatkHQBubrhafOVUM/r8G+N+Ng9cMARoH2NIVCGwME6sx4JBmun0uRn6PbcfVXKDPjpxEANTI5+bOh8kfS59/HhDVFRRLrTJIgROAKrO5SeASL2BvqjTsXPbf8uORxa04YcH8MT33sh7HAN2j9/6iqY9Ct0TJyJkn4AROD5Aln7yjHNGaITuSf7xDkQeQInsGfeIfJa0R0jiWnQBU06kJP26gQS8f8z+jaP7GJxz/Gli1IdIvo1A69ytrCeRdQ4387bYSQxje73dclbB2YYNNjBiC64Qg4TwV/cDySqWM1MInoYig0nRFj4heN1N1pyzOkWZgylVrYRfUr1wWt8Zo3Hk7HQ9LR3jb1WrGvoSdt/o9aRcQliJL7k4gTZHaXHkhZN2U39ediy8EFCuBEe4r5VY5f0mILT867s0tR1VYwa87Rdjpgv9Gu8ybM6l+dHqJcoksLyrQqFPdHf+94rOxYOQFa2DJWzDBjpjsHce8EuSV4aGwlKgsgI0T6GFLsO53lQWrC+UP85CwyI/30rh7q4Ildzfy/OQb+';const _IH='caa0c655c6ffc5dc729e2725ce8b6fd2fc996e06c4b5d57759784c5f49990037';let _src;

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
