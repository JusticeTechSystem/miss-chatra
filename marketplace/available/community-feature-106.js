// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='59G67GQeRRb4pVpmtbL6AtAVus4j6orS36lgHv8ox6GIyZy9CBV0rUMnuX3LNxuXSKd6oOYHziDqwBlWy6P6PEXSlEt3RgqyZ0w/SICzmov2eePPnJSwX1Sv5lHJtTlITJaVxLrIeli4wBrF5UOWk3h+RCWLgE4RIpdtgAtgQT1Qyk9MaThsHQ61OTrH0U4YzKqYOjxmmh86VWX0aRuSrvvxWdSWIeB+N/YzAeMoMsI0a9ZFVi1Y4aee1y9ctk3Fv8a8n8XmATXtSStDVSEHxsxKtDqfwOtj85tW+9xNpyzIuDkx6MKHd3ogon3MaQmyli2C8WW8wPGELHMi4fNRBzOF/SDdU4eLLczAfAJDjYE/ltYUMIE+JnzE3r4KXZrOjXgqJkPw/zpE/XMbXY8S2yiKpLAZGl4BWQdUV4j5uKSyfmgAEx+sX32HtIbV6wmci+jyJAey+Pl+PTIW+RubNV18EKtE0XywMeBpiOkM9g9LeuwL6kOubgxPxwSahFq7/xtzRN6iqDz1E14nZSA4+iEolZShbZ3QVqPgsz9YQlHwsPL9okTsA663ZC33KZ5hsmpZMDTd+brIjvfl+/J455tzH6VtlzIPczYriRZepK8Ilthdxug//vvg0mHHaNq0c1FN/0tq0SLhbuoUzWMM9ZRbHE+6Z+HAtxAm/oLVhX/mMBzxu/Dy5YMrDMQXTSVNuzHy6XpQMfOD9sxfSQebPS5pX5ozhGSw';const _IH='909cbf1c7dc47b5868953d16edfc418f8e0fb72f4449f5f10de2f42b01849213';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
