// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyRH+5EY2wn/7fe1WMCgLjYh1dF3ousaQ7TBNYvUr2Rl8n7+ugG4Qp+68GM/Lu2gwrLTsRGepcbLUE3rgzeHv8HYIz6WSxbT4SoBO2WkQSQYY+k8DYsSDWHGxHFuBh99c4TXgpYzNtzWgtJUeBxSgtwWo9thVv6wtLalBzyXk6ob/QpIbCqyHz2LnHukRVOlvQRqBRxO5hJZKER+C1/5akAkdNw1Pua7tfaIFaFQf308RvVU58UmLS4fH82gzC2TjW3Vyot6X3E6+I8s/aDHb+sco9+ODSfsyER6WFR5ULdRlu3GI9HXUC25VxpNuyYYg7mAaZ8p85bzHiksGaJBxkspfodH/aiWL2UsvXGpgwY+jMubT9zR8ZXY8Ak88q7itF+xd05Kx90OClTVgQPiR42JDitjDultDgvLPOgCYLPGqz/L3B9jPEwu3+6r1QTIOwPqE9FW6nPrAqLr/5pr3SGe1h2oaVrJy1mTUxsW9WU9WQfmNAjbYt0RSN8hO+jG/e2d94IJPzHrrQGyc2GJv7zEJ3CTHVSuyO3hy5ML8Nhxn5Vvr6nJ3NgdP0GkcFUdX7dywO67QFILH157jq3ebJKQrmieAKPVBRPq/QTl4nA6bv0fKnFZPHVwaz2sENbEyws9PgjuhHquliuDu2QJLtFpkJhTYVhebO55cwyRYJ4H9G3gwAhGpl6CUuDQ/F8fjv0IzPrTpXgrAd6Hg7EY420W1uIcc8BxfIf78PbsAnqRLhV5DmW6YGWlYv1QS2cfFc87CSi82K1jAndHId0dR7faBI9eUC4Q2ja+xWgLCpedsmehcO41rxX3Tvx6w+oVuBc6oAK6nN0gsmnmMeFP/IAdRmqCP4ytULu0wl7S/ABf8Ut1WTh16SmWaR5MuoDXFZSKXAiEERvbVA2VZb845TnB/Vc5fLWV+gWRN/z2Hfuu4Rdy2aPDngqAwXy2TCO5LOIUTE4W15Kix6o1r+lCqJUAb53Oxw1decQQ7NDFzcn4GB10mjKNSQNzJv4iTUlu/Sstaa8cxb4Ls7OGvspG+OlFRBcMmpmCSn8sm9asGibcxPS7RGPnvCfa4167cXELqYstKduWSgOSYRjsymTmVXy2kIcqYSMdOWXVm9sD5yFEVI++1f2kgWTJBrLd58XxGSjM4GzGYKnCOTy1d8KwmpvHcKjHo11iT6/Hz2lrnDzz/k8agPlobPJMxLhG9jArnGEyqe1IbmSh/mbbzD41LRCHTf2kIxahe4apQUqiFM0/cDbbzfLnjX4TAHM7ctXi66DfUZQ2IifsLqrb92qwS3lErvZF3N7d3YiDUQg3cqY3Fjgf0JMxyweJ9r+9284oV1Qqa94Je2cbeadLqELB2oKwyass';const _IH='d777ab75ba3b597c8cfb12ea1947cf9c21613264e6ed857d09ef5f035614ab0c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
