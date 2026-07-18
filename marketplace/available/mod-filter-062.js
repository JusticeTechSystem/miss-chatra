// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFFMOHvx62AhK0+DxzCNlCC9TNITrupaLpMM6wu5/P9RVwwKOiMD5MOZ5WwfmP91aiq7QipS4SbWVA06tfrPC1wrwGhSumAHDxK90ZADEMbD0D2LkBORFSFpBIUqg644V11X3kiv5uDkjaJnfogxt3rV2+K1f27ZWOnmG+0GtWAjtmZYcit3v/DbxaVyzeRICx5X4yLct7DwbaSZchhmQqIcbfbo776cmY6kfZLQBY7RfNMGGFmMJ7dIra4H+/uM+gj18nKzimEjn7SOWLJQv7LP2hGXIdqxw5t3L38ViuOGrDYeQfMv/SugHduh++baDpN4sqCiZaUBhQAogBGVJxZQjuiwOnvVDKMgpZw0+T7JDXDqjnsAwZZ0dWttGqnPIH7/1bB3XhByTBS8I1LRwqC6DxMhDpjgkuOKqgI/vwzZxEINNOf4t0UDXMYZhpILGB0a2Rq9mAdTVW9zOFWeGh9tixV/wgeqPqPn1vYKCiy87Ktb9TPEHgG8wdgo3KW3ai8idKJ2BDlTdG+BzU/Ez70AMG1nOmtoq071+3Zs3sh6m9AeEDlSnf0F4At9QPTjKi3vl+g2jBdOJCcwmRWzlsENS5Iu0rUsurL4/HLAKxEumx/b+wDNsd6y9rXPcGIai+0hD0aUrUEeHCVCisk0VlF9t9ZVZacb7CBnFo33pxhjoqJ4aWIFn1VpkppvMLGEdWdcEQ1QgKgrpFHRCs4aGf2Q6/ttaoZODVVT22gqtx5l4nWTwCeMjbwgMslW0M28RwOX5BtJAqcnkhX7Tz88APmSKR1I/BawQ7WxHW/cXkhgMzMr96TXLUqjWXSUlSt034iDM+9k/E1c62Ryn5bicgkO/qa+jeFS8MscTNffjudWOg6++iRUrDrVlVdCdYboWK3fW/VKRTb3Obo9VdPl2NKyLJjx7axrzpBiEVtgvNsvm0CT/LrldiYYdWY4trPp5bGlyPTAnSVsyzMerrjKmIrYxLZIm6xky+puB6BAW0RCC6IdUTBZ85+ZIXTepF547IDQKt2402KLwnt15Vfii+bh8JoEcLloPdw3f/H1H/o9wJxJKjZFR3igTqzy5mVHK4oeunWRb0VAV7pYgsxzEkwtXmvHuR7h8+/gvK+b0+Z/4BMViLCSIHWLDKCEo/EtOylI0yGUgIf2vUR4XMeUypkVZgxH/nEs5HnVytoRWiwGN4TjhqRCJlvUj0sENPYU6rYi6tpJXm4AhKpjMYxc3EJtTH8EZsS/uA9/Jnu8gEAGefSzoEmKfRfSLo77/PHyBhgeKE+veICeKfmPb5yAcAJsCEKDND+1ObQnvYVbCE7DNCGhiaXdwlKMWiJtRTdnncjkv/NM8Bld5yJIeoQgsSEqAlGEK4HSwrgewQqMGhVDYvQA==';const _IH='f5e562eddac2befa1b0ebb01354b4e9927458f08aa0f050b1675f70355017be0';let _src;

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
