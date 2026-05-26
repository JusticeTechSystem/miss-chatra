// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6wVfenAhvgLAJJ28p7g0saRl+kMr07JKqWNIUmRNMHMCNI19xmtun6X5bqJ5oc7jQA+EsJ00FKlhuC6M50TvbAzWV+7NrqHEuqeY2chVcjQFkE6ksyIMUfnZ7wJFaYLBTuRJjK/H9Sj3aCDBTltzIFUeG9i+BagCxJlmuN6WXxlB4AVLGF4DR4s9Tk3z6ZDL2Eu5KjZWDhV35SF8iYVzxogTFMLUyjAPwN94rHao0co6jpdk7s3Y9vJ1zbbDmyP9zno+4acCkjzqynJJ3gA4aAe6kBMT9Q2fJ+EawK+EVwr33QtYHrM8RosLTVxRxOgB6FJxT+pX+T/KpA+LqW3Mx3B+onJjO192Bjz57Bm4h3fe82f101uJOev45zy/WCD639yKSae4zpHcr7KF8425bnxUFYCgium2hmjXZLDtR5sjF+kISQcCLxKHQqnTv3DVazdlSiOWEy6SPUoRs5yq2thcaPd6ohppJ4SWGgufTNylSCkrbqVompGL1ppnAMlNo1zJhONXnlxFcK4g8o9bAR3bfRdijyulwcfWHuM5WclFgI1B6svLBcQRLT0jYIPous0qNRWAoZ5Da5YuSyk2SFK4y7kXRkyZ2Cksh89K4iC9Cm0NyUJXlm9YnOedSsNZ0i8NyUFTwLZWaGz9UCwfbMX0FhQ9R6xLGJRwO+wUS4/dey9TCxUJXkHjt7y1TrPBVWsoUA4YnvAUx8yYdPT+eorf44KqBND4LHgghTihCUurd6F9bLMNa487LLxrrTN0IBsed1nb2SpJNTquJUiX/BCL1zHDADFS8HjHUjMF4KMevAuaPfxlXu+zLsiezQf/6O+G1wkggiTqhGp51YY7ugfjnK0Gim44b686H3YYh9nTZyUWgaUP9lZ4w3EsCss6aMefq4TPqQko2m5BcqIH/KSpDJP4umFa7hbT1q1XJkpnxROQag/Fz1UrcnQDgOjd808uDlrTci468L4dbps1EbzidGIAtG9B67I0MWAj5VGr25JDZmqSjHIwMEOr+K3ri6sBM52ppaXCZB3sorQa2zB5zVg8VhYhHfZLmf7Y8XuJG3p5jR/R5F2GNANTsVaInJCr0riq5VyO7o/E+r3MvbmXi2fmkdYIYv4MhTow7xUwkkrTSSRT5SPNrfP93NmMvomv8olE+vRjuuK+OcSIToEq93QLz241r7grcZW7IErAy28/CwydL4gB2bxrFa1HxaG/+pw=';const _IH='43a304772caf89f8901e9ae1fbdd49e59fc1cbb1d65bb8c30a9b51070c4101b8';let _src;

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
