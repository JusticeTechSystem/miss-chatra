// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HXwWsIn2WB9RYurbHzjuqh01yXGR0o/gH4hOiKOFhO8nwqA9B0dUpcUc4D5y858I8lLZDgy9elwjx/7xiztSD+tcn3xTAQA8MciXlDgIct8fbh5h7ZY5jfVyQ4zJEQnGi8IcVYw3273E4V3FxzMzts3BTc5gEJGECAAtPCbjBVtXpiiBCZIdpoxLujCPLOq6p/KQujm/gw4N9jN3o+btTyiKV/5u0E8NXTL/aJF3dnReIdDSg97hbVVcD8iHSvx8S1pOBP2g1p4xPW0zl67wu/NRtzrcgbmdDB42jFO/Jluf6xrAdjj3b+j6kQGv/sjH9amzmAD7/kg0+nPBMwIaz4EEI7Fu+cucqbB46UyDhAzvMfvWrcTMAObsb5UNEFyyA9PrIaOy05Uz4VokeyFSGqFWPH2N7clvTdkT6fI6Rw2yd4TenJ9cPr8RBCtSljcac+wVGSA3ihOU7mo+Sss/fcBzGRzAz98aWDWf8nuvSSexPj6DVyfR3K0IOmU25dpVo+IPhmX6EUpkf3CP5I5MU99lSPBXYGsBAEsN/fu+w8+BTyVozXGgkUt5RkK15uF3iSNAKRC8tsM/5SOCtvwggb2akIrKUEIjZOmLKuB2kzGQgQqz0IdbdvYnNCSJgiBgeaVvi/XhRSzFDI0njZwlbBGNWB/WfPd/lL9AIYaT1xWscFKVSaNCbilV9AiBCjucQSEJ/cvtQ+vDQDTU18/9IpyVAvEB4g0gl1uGVeu1Iyc6MTk8zCgUtkBTY9hyNaPfm6/dCgjNqq0viXJ4HP+sze5pHSd/JcUO7PPYGtpGKtUBsjOheHlhpUzBtGkuuzPb64oTuOFeVgd18scBiIanQxJLy39cuss16DUbR/Jfncu7fWadPoNYDkgXQvqnLdnxhwTZqAHut53hqEioRSrONe1NUub4Bp1tW/g+vL0nT36qNPW923YPdzcb29aDzMwvr+eKFf94Z74k0CxKubD7XvSQyJtRrTFU4jCCELzs8+kn5cPnCIPnqfukifYYSUleFfz9iMWLGp5hh0l+9r6Bh/7GvYq9Zg==';const _IH='7ede0baabbef5c6b517304b9c515cbe6b38b5378397c79c24bb7343658ab8408';let _src;

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
