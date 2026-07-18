// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7/sg8HDgcJU5uQog3U0i3VsesUq4owoZpeOZimY+msB5efj9nmPgD+jYai210b68jdQxDKnmjxhyvU2ocTizAi+YEnxhIlEem7eZt5GRraIUf/+BFqhoKDrSaThIdEk4ekvolqr4YKtV/kuiKEIT1LOiVlYaza96iKYxrTf8T/46mubaw7CcgPYdprSaSACXwxCyEG7GI2TbiCiZ4OlNjw95w/CmUJNMnMtxTxJF45H5n+t2grfj+WG7hJ/z6DiZal8XOrwb4FQdmzw/tr7I7mrAnkiTXIXzr+U5TbeHU74YGD/Dxo1/QN6GUPTP/Zm/4moYzyNDOxgx1rt34gVfBpOOvz4ZmeS6DThg1g4NJIVsq/iHFqqfpkjEJd+e+mDdQDhts56UShzNDqO+kS8SEymVaj3IUtlhhocDy26QRK9FHwC53QVPFb//EH/vYecJUtVRT/i7yoMF0yq5d6Oy8skJ2KPnjqa7vIabbeq1jxMIfx8soOEK+Dsjmr3ianvNkkHbvqKV1aRwpY6KM70t5mT+Po/yDebyL7JXjDgimH8AxBmvBuA0xCCsRX+ZvQG0id1Qae43wXD6t0dQgJRRme/HjkGVnBLE1Sj0v6LWrgAEafOKHGL5AN/hLAPIZNhsgHvrX/9wLBYlLBwVbdMJbxUdX1YGLNLPZGqTnOHlfB105CyKHFpnOk1W1Jd+qFEWNtziW5oHl2SXgl7Nz0bueHd6HAyboo7OBR4yn23IU7OIvh8uJRw==';const _IH='c66c9591daacdc4a022ff75c3858dfdea362f24a18460fd63494be10567a1bc3';let _src;

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
