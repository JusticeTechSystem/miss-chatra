// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M894ZjLodPTVkvTW66rQPT0VvCVq/YZaxzgMJgl/PKAzrDwolJgFKDLPdCFONXNFyjO526SgeRy7cI+fWVKRzIuTVSEouCfcZ/b9u46rOK28MKVd991us8F/PlTSmXncGvnWzM7Vldo/xf4N2wgnIOOgUicVGdC2dW1VXgrlxtiKWo05wEisA6gcTZl/YI4o3gsqb0cc5TG/5jK/wl6csrnwhbGQpKIvZ78R1IoNs1RQeK7ua/eEzlmgNtTKzEj5y7Wqp106g9xl2jgXD0ieRte2LDT1+BBw46d4rArqG+q9Ofj0I9WfxkNV7DQ9Jb8wUGJH5YFZA2pKfk24qSZuTNhKzHAgrTOB+eaC60QSNyukEah9dunuPtLN4Q0+S5vtNidKWkaFxbTXJj4q7taNin7hWKK2uENJyvJJu9QG1Hzsf7tXAA09Q/Y8vHMlX1Lq89oXIhMfqRXsNtSwCOJ5I0YdRML5f6XCdse5KjXlXmpM3iCIEn1eCvotRbx8x35muJ611oiXd//y8LZkDiCZiuO8Uvr7lFKjrSTwHjnz+wBhtA0uywJDfNj43plvgwiswjvPTCMeG+j3nglywPgTiPE5vg8aAvd+/elnbHdEFK6+4X76SFoAa475rmegIg3lEqpBdAEKZQvotPKXGG/LveWrzo/vuesCzCpONaoV7CpBxskvWGepU3UYx72FZgRDueu394MHCbydvHMGCEQjIr5uC/aeTUi0CKBf0a90WhC/Ib8ffUBxum39nv9Dbqqo5wkgvHlkHoEvAGO7s0fPo2sCCX5F38YS4XsRIAAfOFLn4RS+bc678rM47wXZky11F6cOZgXU3xvrcHUPg2jkn3ELyPEDUy9c3D2tYR13+yYXW5p61iUiMLZVLhspKjn3QrhmDuOY7end5keph2YWlcHGJoUBhh2PeTyRDOFpCIzlj1RDQGEByhb/Yc64m5I3u2kDoiryE7QCBAIFcP79C6Gd92mgF6hu8esISZCnguxJE6NXn3nf9dRQBrN6klGMhHsYbgU4HmJm4SWHCFoH1Ja0NGFZvVAiyQZiywwIstfRQjRw3CMSEAS1M5+nwtWILboUQwURrVpMlL19xaoHbPhG4l94fJpas7NtMIF/eIMtVvpgUKEFREwiqmMMDBYQsqamd6eT1wXSJpDa2k2YTGRkXbI7hlZdcr9frqMKwqlFh8fzQOPv/Cad28HYxPztTq+qxOCh3jrKch/3If7YA0zIw92skpyRhH+Amy/ZuLly7sAWRelTexy8JKqFbbnFt/tFXHGjk6T5QKyTDltKmYGeliDmpuocGSUtjRJnWdfiP75GkyzdG+OwL7aFAtZ6IPT5uFecEsKGXHNTKqUof+5f9KHYQAHrITmWcg3RfgyBVyKEblxIcRKxMRtJN5yu7JgAQ6kNNwjZc0po';const _IH='f3e16c80d20d1ea0c212796f5de799885316b0c9aeb107bfb8fa11c8bb55623d';let _src;

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
