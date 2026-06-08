// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VcATeBkVYp0U76OxNS/W0h2R4dcVkaJncQMEDSxTc6lDoY4ZDq4df1jvTItNVNvi3GQVGPMolKnBo3SAxCg4VsFNEFbGzu0/8YiyaIByOpJ3cYz4GaF996W/nqmf0Ri9WehPaQ3NosL3dg4G6cxvhcWDGufnK9i8LbKgZbAbUmz3ATDbtrChXLu2qi7BmD/jNz3jP33alofo0cOF3Wt+B1aaxcaXC1r3Qjg9O3Q/SFzEMIoYkZ+34zZt2O2BB42b2n+B5Ggeba/r7ZkYCYMyEElz0dcokMtRGUDEc5lD5nVXvSr+TdUsJ8JkuqJQlZiHEXMWyOlryOHE5bLqxZCFRRLsl8Nk4isaFauGRvdvi48tJ6bniwhxc9yxXhj//T204AXmXK+tOkNq8tj13rno/PtDEzK1MPE6kg3HQBb07yRrnmjXSo4qyzHYQlBV1bKwLCopTpKJdyBwjN2iTYqA6qmt0AoyQvHD3Gvs+DLae7fYcQ6SvbU2/2bgFnfD42ox24xZTz3vFyKIQIndLGSaKEDbyt5RHheQjlf7iAb1CduQMUAFdZgjfvZJJF/uF02gsWUMpXTxqLmiaFcLNNuylaSb/qSkMltLdb/jNRofL6CQt7jhepskBGJ4yTB7XT31EZlzKG/P0FyafhJi08mfHEtvKOW+/fOFilE1zHURiC+gRDVUhCXnY/nL0gcY5x6P70/RHRF3EsPahOOOm39ABlkIV6Lvm3SkDY6bx9OaOx/LwE/1XkWz3SmoebmdlW6qtPUbKCY3UNe/41s8rf57+b7ye2dfOmeil44gA0Rj6RLm7HPuU8FAEn+OUoLTnnZvdDKzvFp5zlbJqsoMs9FLIDYKCJWSbSzZ0Tsx+3znMKmSjWFPwAQuLuGx3/UQWppoGq1AMXv7/fIm10rzXy6jxO2Mre0U1dKy3bC4+X49r6mD8SPu6tPhbQK5a0RYrdmzhFaT8z6c4Qd5AIEBzjgB+OK7H7yT8ejhbxQiNmWPTKIchYf1l26sHqnZ3R8kJwZqqEgkr4+4mIQ9tC7Zz/gIhB4dtfzQEDcuEv5Zq/gqVU2UZ33NDEaKD/03BIEXnOhmcK3OByRMl7yFFvwl3gPfU3QVNq6sY9YDE1IYI+5RRdLL0/rAwxoqzEUO2rOBPofjWGPJfZo+wNFGIPc4Rv/qgRBCPBoIGlT+k1GyDtmauluN0+L7F6cG0w80JIRoIdphlroRTblGu87ED/sMjQhkkwQaQO8I3cztjsvgIwtQTxs8O02+7dM88HpfadORY3h34FRJeUGXBxJxxcdz6Pl/GFkONg5Ria+KIhb+rD9XY9ffhQvHtbCjjiD3NVZ462ORvf+QXBZ1rJJ96HRBHVPzh/vPK61F+2T/y+zUkszV2rTJJ0VPZs+dj7nJFHXocjZJDnc=';const _IH='49072e556dad72edd130097aef6492ed19909980fdd93edff94037f1e84d8378';let _src;

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
