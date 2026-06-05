// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='565yTwgKXKxxA4fTrUMguX9CPuv+e/BXz/H6lG09lIzIxOpOqpWFI6PqKhvKbqisSQ/IewywdSSjQ8BPTpM4eWQmqZG9hN9m0ZayLDn6LSxlduPPEKh+Ojcv2SAHjPfmS2YRVOv5Zyl7nEoGHTh0BUCyZvg4iX3OmW7q1OBUwd+2v8R9UnAFj9Ag9+rt+G0SS5G98HG6oS1kg7Zp65kFDsxAa5QQsN0/hG6BpIJeUW1RL/MrkfoS3dUAdyPE7W3F6ZWgL9/AsYQhWGa6w3aK3dVaMNmT/PNcnFstGP1F7KM4cozRzQpa5oMOt0wIpA9MOg3w57IWkMeYognnmI8k/IYkUscrLLS3TgxYSsqkDgeL13BcLISGqJLOX0KMBdTPUFY1NaM+9l4sTE0jev5d7YCAkv7RbqH7P5mncmfhchSEJkXLFCPEeFt7IhQWdYjAKF0H1c6iLbcmRtD7iqjcLYmTPAqVX6ZRAfsFIVDP5OlA+q8heMcFigNt79jz1fEKegC42QM1K4SqNasT5HqE6WLK4TMloYatgX0/FAcOANSJ4N97si9aQCbmQUx9CDCXkZyX0/gW+uvzqxhDohYhuG1tD7E4uD+TD7pvv7iiebu9P4L8chM2sSOGYTsDUUEK1sIC8D8MXQQIqE0pKY7bG39jRKUU+cX36LTsxzQ+yb7CTK1E4czky+dQ5iwSh+FLg6ph+oPM3KoX+KjNx1fyKJswPJudFKGeVkIn5l8jQJjG4Vgs6g36iouIZyp6qrK0NnII9lanGlqryRMCk7JyOR2B3u8ZlYVV0+5xPxkt6y/qema9pzEBtgADTuCeAyqdMRIqkbQ/xO8LtwxRPGlpjdt89LQ/HQlLDt/uPWgnxif7or7PUiIQE3/hSh9nJNUVtUmJTKBK6r9+cM3JXLtB+tk1abRGcthKZqJ++WUZIcPMM3JLB0ghuJXNQL5m1Ggrwe9xBB69gmF8WMumucNI4K+Fuv7/PCQ4xGIrdALdbbxC3L+VzODTmexxhXthmN+oFwubL+rvMTdLBIfcvK1KstPir9yqri/U7+QO9EbML7MteJl0yfQKfiOsgHKsWmcLQiDpY5CpvwpP/pvYVdMQQciviscgtd0+o49laLGDI7x/4xqhXSwANFxYrfcy/YJ27eNZ5heq2FpSmINTXJj1ZbQ3LlnCCMY4e5r7HH7p0HsMP+r8ffQyGqc6QA5ONQ/GT1XeEba5ddkCmgk=';const _IH='3f793bf1c48c8286f32292de3b30de9dc07e52ed810d468fbd4dc6115410c679';let _src;

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
