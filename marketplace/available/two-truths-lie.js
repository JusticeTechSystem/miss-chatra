// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKiiVZCukhuNpkLHO6NYu2RGyiYkLe71JIFEX+QhekeFG0004xPcWy0J/Yugpw9Wk9ge6zqaqInMuHNHWlVnIeAF7zVD6BeCUpwJMzW/2aSCp6EwOLZ2IJxCsZiehAeFsZ5Fkk/yEy7X4VtQ90U3uw+WQrYgZVZOe6vp2jqf8SAYw+pgp0Hbo0Do58up2rv6vytK+VdG41jeio/2qyNSj4qdHsfgD5FVQ/lRacxyhZ94boXWSIfFIydkih9dztjtSzL7OW+Xrsv1VhekN1BDOLo4Z7BR94mzrn1w4XQw1ASqS8gboEAW8yydLzQNEO8izWMUhHuIa2t4KUNHkkvBBfFvbqWl5E0z15gauF6LcxrCufT0XEH2SjTHiaGpIrOpyWooggYwLx8eeuRFLVVbxdNwX8PCqriFbQZdBJJpaOo6fG6QXqmzJXCmaaQ8tpLFvdQVYR1RVab428AtSZJO2Yyt6jVnyZY4eH89SGGAXTGmQghrQPG88X38Lgbdplx88nLHvf1RzIU2DXVbrn4SNrw+3/3MwrAahpH9/koekWkYlsbietpgRT8zQyve9F1+tTBTQoOHZTAEE+83prhGDsmHc3+gcdIu9BNYpAEJOiUMknIrnzzyj0qnELLPi/73n6BnaC0yWmh1MNAv+0dRMFYmoEHjid3gDN/tkSOZFj8VGABpUjBbqgzRuULq7+7cg3LtRi/rp0T+eAv+dmpauaJTAptM+k88p2eEGdBLboLEkI8tF0PCT+R0U24ek2xLNSaMrDy1WJ3Mi6tB1/41vLeaNZ6Yg6xs3XkJruw9H03k2LGuofnvy/rTLDL+z+X9iTnaZB/TFFU7FM5E5vRv38Fbn+0/WPVJrSUCOR2/HjUHe1ZS86Z88LFJWoLhA+EmWpPtwxes2PhAzrm/zUoL3aMsJJTwZzcAaRceMc6BTTlYZY9NpKFmJ6oqTBFkmlheGrm9myUoBiUg74c8rqDF+MnrtrJXZm26mD9uAOPBn+WTz2itQdD0Aye8Rp+ClOFwfsCLVSNa8xIDWUYnT730aHSXnrmdBe6TEbK+/2BCIkJKQON1rjdmTY4oorOMtHjUalq9Ii96CnnDgBPINrHOSIkQ8VYxEwOAVfvLl907Os0rYhLhL9XjGCjyY9pxqJ3MOVC6snMQKCw1MWEC2UjrOKd6dw1DSFqPTX6g/kNacAH70rv+rQ9IPHHoJgNSncCAnW72bFTYtVUQZwpKcpGxdor2ip0bQ1M7OUasYSCT/XY3GPLMB2kIAbL/mCjDV26a9h5N3/Tovm7MBwZTnS4gKonS570veg4Veblmwgp4QKccNSMuIMmA85+Pjo5Oie8euX2IMlNeOl2WAasgee8uasIhw9iPdET+sO5iAMsSnKBwrQgTtwhjdd6UG8vuNe6YjdCS4v7wOqfKnAHTuqkH1/nNdKunsAtQ5+i7fKFqRUut9raIeyyu7uF3wtADkg4uYg9WiL';const _IH='b488873eafc06d578801ed927eaa1139e7f5d4a895438c9f4666d77b5bc866a9';let _src;

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
