// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8e6bVvoscnQc4uCzcPCabIj6sitzHgbJPbriLG6jmJrqNFcBZ9mLZIl6JRwSVTtCewhpVAR7OHEMt0kQEMkfJkxC+JK7DGGQ23WRMf7tKdT6bbh3cRA/B4v2PSWyarG9bRK/+ZuYSnx26+rLTywAncsSsfZ/L3MHTbV2EOVk/xpNCsibt36tDBoWMbgbY1B/ash6lZLz3Oi4fgZz1K/IH58Qz5ZNAGhrBaJ9FqgSTy6JWmR6oh/tsbFfzaq73IhWtu5nhHTv8vTAzjXkD1reTeAoCygU9vGGyx0Fd5b+EM4Hv47F1DXrL3Zpz0g54DuvNzV8K0lsp+sdfjnzwjCtyOPPluW474S00OzmC80UXVTW9reig45grCp4+BeSsypi3Qv7+sNZsBr3SzZLQuQCApjjZPPYcSl2dab06Gx4t/mu2By/OEYAaAIFLGNerNzhJuU3f5oWt8hRzVjCgr2TMxcqX7UTw53eWnvfeniA8sIFeq/53eFeJ6jo8j0qCm0pER4g8OqK6pvKlbskCQt4hib3iiNhuj0pZdYBG1Re+OESFZDgsvKgZBCzbvxozsH8wicK/BdjlVsfEAfifAvBuYrHZnmleaaJLQEsv/X28MPBB1vS29tcubrU/l3fV9RD+U+YuhZeGbM2w1PmK5syP49Uwzrly7IZMMKWbWwi+rreUUR05g6fqTHl4vCHJkKwlrTLCBgLrU/ov7txPFOH551P5vQ5eIDAvuPGAmuZ7LG2jxHahnrEBt2MTtEn0gbBvxD4fkxNQrMs9WrmExFCLemOv7SXFOCeMNC6xB+ISwZ4mZY8aPeZ5ftyveTFG1zkit8m+YpMSe+vb4jGUV6TSeTwaZ6Mk2d9uMMUew3yV/k2knvQ4mZw6BjxYosS13tf937a7YK3TtFrCSp+n2d/B33YFlXABR5Dyr5mdw6qPlFklMCeLIeRBQwT9QPkp/UiCRUeFW4SwuXlfyLV6DR15QaOOALqhls1SWBh9uJgx/NG52lh4jXN35xcSddbLWcHn9qWDHY2CKYNr186Hw/bKd809hrdbIqa+61exgFntHKawx/kKKrb0ezpdTfhBBnJrBnzqhVpQrInxjHzc75F3RYGawS6fABXHuxUOYJDE0/kJSlUyQWX5Fv+bojNCWRrC+vkf4WPeIYtv5TVmzjfi5p4xHOysWYjFz44EpNU1gWMl2E6yRW2I1Pemws+jtnv77O+IroPMyrQS9lNFrz9tc8cLn5y8G+pRhSM1eqtucpOcZ0LkFKjgPpNnBruejdVYQ7jaVSZFD69+yBIDSaqdaa4RtZYfi2lKnPXh2eo1RR8Gc6lLDOy33HAm0BHzSz6p2h5UeQB2DAtsK8dMUCZBCb1KwNE4ExTTPqZ+YQO';const _IH='196c7da38872e00eb7d7f4c105f645b1cfae560b3556c6870938b59b44e1a568';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
