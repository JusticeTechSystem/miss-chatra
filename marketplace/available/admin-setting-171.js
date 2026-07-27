// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROgh51VtNoXL/qVIabbc4heqlp368tCVrtr5b1miNqm7HKB+43ewmFnmSI+7WX141TW7ZfcdeVLvGNqPNeudLqAUTraZDzM0zJ4pWV6m8JCxwkh/SBLsOJPiYejyDpAAwhP4bRz9upJ8oEAxxJeG1qOslfixKHW2SYCj5elugwHMjElQzS2pTlC6fgr0RNExhxsaj2QlFDril1GxIf9mCcVKuyOQj8/1pYbmSjEn/jt38/l2hiFFYwUtOPrqdpVwFLsQrg5k4qkQ78WLkpDFExt+8v5nIUFc48c2p3wEoiAyuxOsjpGw+omut4cR4N1BYjeMsFu/1sR3u4QUZcIihIM4wGq7s7DR5PBj8KxIgRK1wLvKPgabeFY6YqAg+6L14e8kWD3jVlTMlck2DJtbw//nZPBTDnSPlhayL9dXEUKh4L747BOLfya1IyAd33xcPBE73SthDwx5f9etcX7D3dQCCoiBuL0FXSuxdUS+4VGpdIhSl3sIC2NqNuh0MiH+C76t8qnY4I3mqML5Yg98/pvhkKM/6zj9N0C+7EdNer1TSVDKtrB0HFxEXbZ/P22LR0ncbSyzLBA9v+Z2iZG5ojQb1B15gsXIiZgeYetoj6JikKqmdo45qR37QDXnXy6y3w48Cyda93FXZz5jGU4YNL5aO3y/vnd2YLa8f8E9KZpcg7l4CAcQXTkPy3HOj7Twnh/QclQ9YthOJVDmTBIW9XFBJ5AH0Co/Kt9rHeEgZDfMU7PN2EXdBl3OYP+Ck7sCTj2bPndjUY855pjnf0edMnTKsYpijVtlKbVETx4S9ReDwxmDzsJ6U3rBGwsyRVyuL+M/wVDjjqC8jvVaPgsGG2k4sOm9hAte8FqF3VnabjPlYemWYaxOaQK1gUz1CGxsWK2XoV3UKfldHnl4ZFVUAMxPJJbQbxojo4fiGvbpYZ0kqcaicEMnlh/swYrct1SKkhpnD0/qhvsnt3BavWiQSkzrozOC8x/StjpJijbj6+/LsVG06a5231thRj6ASfIWixZ1k1XDtrmQ==';const _IH='0a38166bce474dff0e5eba8ea73caf0e0c003b63ea744c774cfe3bed42c05807';let _src;

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
