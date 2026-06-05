// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n/EZASX1wjds9A0oWtFYmCAtftfWGsCPTRA1Pdah/hWur0DP47H+UJzjO47nMWiHMHlj/W2vhtLTbNZ7ijWkbCc8nKFp7/auFtf9XwOcTbf08iKhI8LwCZxMLNiwdB0b5j+orspucqgaJAdeyuRXamUaZfo/c88yTgcFLA9pElHmd+VQ8o+mpXnEXB9t1YBJAfc+8o2MWFmDvl2j/tUCHWgD9R6iQo6LC6Sm+FAWo88FvWIACR/p/2fpO1gyM4/CFfuN2dXybLN6I+M2zhzwql5L/L1twdUTQ0kYxVM7agBjQx8qHZEw/feuVpt6rRoR5kpBK+5rmpOe7SVG9OLUmpWys6SZcNzAs0IJKY7yEYW+BLIivEjt5Sm4nkxmRCujq2UzzIwCA3mG22dpTyPNhXWHxtbhSnY6jd26zi1L3/NHQbJN1LP5z0Rn+nQ4ST9To9AQ3+V1kS3FtOA0iW6btcVJVNs1Crddo8qfrkxscJZSmcuam+tnfqJv8dx02Ya0bwaP+gINyA8OMiri+5zp8qRY7xSRbOkRJW4lX8cKTeDmMjQJptGPKzMGgjF0YfEHB8tSuwuGpoukRDzGsFpoccB2fRiDJY3dPqG8BBWJNBHW6NM9BJozgTOvlD9ANyHNaHd9S5Qo1Dj8GWYtAsnSAd8d4AeL4pgqc4Pa8l9Ug6YXUBCqNZDZlbBqRcDA14SCcqw8JSrdPYkrgRGA+biWCyysBIoLeuAytTXG/cyz4/Frbb6VFeX+w09xcAFyOX/ECR0OL7RopgqtPLkAq0435Aw0THqcO0wmkYKXhUQue+EE8oaKMz/Z/CP+mgdx2bUf85YrdFfY1fj9Hs3FoBlC9BchvCwJJu0PUabQMvIAKE+ABA918+R/LfjIiEOwSjJ8sqW7nf8h2jkubn1Qtg1FbbegCF9rrzIXX+2RoapO23GHniNgN3i7yz9V2ZfxXclrPoATLDG17H86UltRphDHk9o9BbKGsDot/NVQw0qJaqEmQXtMnrc/w+nuqkLbCsv8MKCf8cXCtRnpqS91j5eHE5o4CIk6JMz/z4ksZMDxRQPhZ/XkXaye0eS46fSNvet2hEeBXarX6jyUgHizYK84+uhOFtOwjGjiCWnShK5pAxscY+J90wP93wC2qycCOglHLUabLhNdwtbkF0p9JmB/Pvif8GHzdbkET9cGqQYqffUo2zhhM+uJQr26hVsCF2GwBWqx04nLO5VKh623giSSXo3KiGwUL95UfANXYTv3FLh87YRvZaO/CHmpd9rgMFr7dmg3TdVHNU2R1hDCPwgfY5QPbUxm0A/o3rIvYwHBBfuPtNIiW5NdqDQqnBOAZDID9u8h2r64xG5xNm2czWEHqNyq4vXoybAuIpSfo6yKBfDLvSA=';const _IH='f6ee5daf2bd8c1064b78991475ef59970ed2bef941c1d1f6646c75d4dda233a9';let _src;

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
