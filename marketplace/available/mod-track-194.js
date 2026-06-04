// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o9qS6QyLFXc95O3lSP69LzyMAHljLBK3+6h2Aojb+tyX2xePwt4+265WFfybVf9jtKELKGLsWwT8CWiUuGOZ71GosUX2d4znsu5RQghDC8fSAlByRvObl0ybZHLuOIhllQ+wHof/4PwYCBD2oXsXcmUdjsGz9YbIs0NjZRAjfnTId3DSJX6vQn7g/cLOiu33PPmDA3cifBxpUOgkbw2nBhxUvFAYr4RzwNV24lpbK/gNLB+6ld9sT8kr6ZNLzFmG0sOJJCOp7bJXFoZ8mHlHry34a7W3CTsXe0AMSJHTeWRJdQwm3A1JV4PFVEQE52wvfWHsjHRtrCH5Q+6fpnuoTR1Bw/f0P2OuUfsHpjwJ87H5x22W+if6OItvyqYx36iTimPs3AaG3+oRKTDZlOhJGiuaKTGzgoEUuLNtiBJY1YY4MNCoSclg0478OpmumVWvIUrCxNfRVMpLdwbZ6mdTj9Q7oJ6DDySliyMhgDwNvWhadcHwDXEIMQg3YtLw1eheHvathx0UqzZs2WMztErdz/a7dQk8n1hcbfL0tn91ss2H8EDfjJnWBFhb5H4o8NdEvnJxwTQeAPxHt8DwnFR4vst5ctBl7FVj8yWTFzCEVxCrTkL4wxEcy1BU9zdMTuw3bu2VK/7RMI0D440bQ937axkE83G8MsN0Auhq+w/jDTlgwLhx5wnMTFkH+gy7kG8SjF0HZAUDXsWsIfDAg5f/KbtPpFX8meZWEux4vvXizyFKRYxEB/dj2/O/BivowB2m/S9OTH8tHB2pRsyrt4y9LBB42z4GlE/L5Y/WeJVqphZZGWauVeA48Hi9+4pwUe1ckaebJlz/l59rT0z0nGOfnT89JyGWAWi0H1CMt3r9ez7H+exqqilGUAIV+rXTHmVZvtVsjNRMo+om/Fn5nQ7MCsruNJqZ9ZHRdg1IlVM55r+mQv/7JXEAr0kevsRVQtiAjcjQYcrfn9p3MR+nWfQf39gvu51FNO30ok5hCRhmgxNGy83/AR+5+QQNxKscgEKCbpJ9bD3pXEJmKKNttlprpA6cXwCyQ9/bPO6zW5Y13jHrnG4bDsTydHIX+3ZmsLOeKGN3JZ1sPnvod4rglnR2IsArQ42I9MLOHvILo+RiiHl0uk91OPMaG8SlpqUwbHfEQ3VpF/wZXPmrMD0s8n/us5za0XBWYXKPWEY2N0ZDW0rQPDIcDSzATNApD9Q88vL9O7zLcpPkX3O9uAExIppwQSMMsXmKt1hCy3y99Lp9kW+M0in2q/zFGGfMhiV1qMpzCZwQqZEn473OWUCOV1u/rby9gY/c6C0E0BjLbqebbEexZxXH9iHEW/Bp8ERYM69c0rZcPUemA1ltJc9n6NbC/xsGTfUPiAOUPI2M4LNW';const _IH='3027c4d9d3d1c11d7803a43fe0d901a050e748565654d70c2b82c8007cd7bc53';let _src;

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
