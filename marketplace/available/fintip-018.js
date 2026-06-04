// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4KxRRjLlj+WLOzfThEckkfF7hPdktl7BmaFQOLLfyaq+MdPg/x1nVcCLa2esn9KElgq3QiTW9rPn/A9Ccysjg9DRbxFKOxcrT7dSEsNQBQDRlw5weE9YkUvzr9TQuq9S0BiXfLbC5O7cLvubaoD7ykrjAckM/ScgItRz01QKVjQdB9Lv9oAVgv12vdVdFz+BxrORP9qxPVFFT7SC5WP/pfhxIh5i7Vpu18UexriuUUwRzaeoP2XzGECYrae48PuwHsg+fmZ6pwSKEeBgl9fmxndGOx5Csjbj+IWtqzQSRUdHAF2Aa1+lq7fDhW0dRuCTHijDDAcPr6zPgbDef6+1hbErLH+G0MwdeX59S4SWniBcTFtB33iA4AU1Zy8yLXsb7SkJqDgMyr00yhqGz5dYEq5kry4ACig2LGULYPimdgOXWGdyd5nrff4+IPJkLXY+BVVZYyF+ZdGRQgC9qrAdKONUVbGKPq3W8CGD3WrTeMHy+cBeY0l5brrrDOPYvQmbOsFPPjRNv3Hq3GZWaKHHSlY0Gmb3CA8C9lRNhFMrL35tGiIdthw9sg742RlO/47EXCrFEkloyzmmFn3hadFdaZY0KxH2pdPgggFgrKnz9dtmgb+fwlIL0jI6xoT7kecbwhxO9Pq96scuE64UM5jhqEz8gofskRwqZ7AGi09jvL9O68e/IIqaqolH5BdDTx2nq0223LCGGTCA+TadvxSF1sJWSXgZVbl2bY3ZO0tKcdE50KcrY6iYUi5CevEtTawglgdseNCEBICXVG0bLpXiwwo1I0bA+TtqTrmbdoV8FunNjNnlhDwQCx5BhPow0RJFZQmhfevmWaYEOpf+o2qCN0whjbHxw/GQcE7tMrwSq+k+KG3u3S6K8gWuSRMPHX8+WXGsxQARiHcSEapUMwNe6onf2uiDnIWPnahD6R0Ra/GuCi75daN2UYOyNWVuc/HQm3Z94gVFnrMhz0HDxU+Pdxqw/hvIWqkvKNWxfzKWxCi48ZjHmb1NGHPvDhNJfZ9JSpUSo8iq3wzxKugc07IcXJdik6m27RZTdMmJCGALmxWvQ==';const _IH='d056202a4ce92269e94d56b2178885b13f24234d010fe83cfc06881c58234dc3';let _src;

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
