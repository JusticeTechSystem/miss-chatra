// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aK6M5b9cyYY2rHAHgn1ljy0yKLRrdN9pMNaqzRfJmXKY+Bze9Ulr8J8eIx58dZ+M0q79zSGyQdt816g1APYxAB21enApzbA/TVHvQ5k1HPOD4ggXZaAx4RPzhVAjLnQqlXXQQKAvuFVRIVisFC4Tw4C5POtlrXl2AjuO7JQunQRA9EdhtgbfslvbSzL4sOcLf+FXvUuEeqe5Ycs9QgJXPUwmPEvtLBqveQjPRsosWnx8dZCWh1Gxc3AkN+NU6cHrRat+hUNL0i/tihky+AEQspMHvuaqyLv6qp5XaupoAymHOPQQp+X/F5yC/RAUrTrl8cMPD6Ma0WPnEKhCpMWejbImOMORnSOHu9PGtrgk2X+qAsAHEDl9mbbKPFfkqHKRzAxE1qYES9KcBLlRgSxW+MNDECfZN4jKO6s1U6+XXtlHBda5fTTkBVuCKVL5XtSOjJxPMoXYzoXFobx9KQiyM4Afc7LiD8DgFuvMxlfoj8ArD5KJnek20/KTBvvf+PSEhKtXDvBIOjv3WPMrrkI9GtSpiJ10KA67jJgB3oc17sQ523+8P9ly+b68NxouZU6jbws8KlPf1Egthpav4Wkc81SsLp2/gIXwHkAXa+U3CjJ+oY8W8baPkhmL+sG9GhmvoUVCu9R7p4cPuX/gzbdFnPyo11v2GGBDsE1o+S2b3c4v1Bej2oWsJGv7ImSbOncgFAh23OS6NaQizH75CMMvyjvjjBqYyypm7z++qMC2vPVA0jz38U+t0qUDHXVHjRk9xCRP5r2M0siEpJtxnmJeSeHWOTkNoWOuR14NmOb/duP7opqh92aaIKWljx7pdE2PSGTa9T451qz5/NB6iLU9K/NYhG9bOCO7+KAMS53S23lUN+iZiy5auHZQF3jYH46rHJily5UtBLx5s3p4SUTk3lTgTpj4zIduwQ72IgpSqoOjmNJpr+VFKJ9vSON6gWrP6zDjU4mwRuDMw3vomL8cX7SEKDICJ+hpr6xL+EPHRKHm669h5Ymltu8+SMi38Fc5JffbMsKrfdqbcHfakLTnn7zIwiQ8TyzPc6Dug9RT53jUUpzUX/tRE8wRNJ35J6AgmrLrnc9Yu3OE/So6juarMVpE5Msw42FG6ypEeDnrMJSsDkcHC7kCBY5MwCyXhtcefsjUiGPhnE1nte8ejZsQL3arpF2XMIrx9vcfA1Z7lgQLYt6yhN+ds9oG2Fi17lJS+g==';const _IH='14e08f4ccee0b8dda754a3c622260405ddc5c56ea37a4b0b3d7e616c6393e45f';let _src;

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
