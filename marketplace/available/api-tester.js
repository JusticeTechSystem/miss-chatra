// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+RuLwkEfIZF5yFFndl8wJW1nQl5UyJsQq054402/X3mQ/QEPPteKZSy4zw3eqf2OUuSqR9S7NYtOd/74aGo34v9NY7W2aezXfBS3WFq2LZjvCmj7PRPScLRMTaJCo+zr2y2oIm45yE8ZZ1FAMiwTvj+28nsjBdBuzdxqe8x2xrNUsXSnYtxm3vkQxPAT+TS5QY6iOaUwqMgd6WrYsaaN5SD86+AiPYIgZKEMmRgePFiLj1cAZ7ZkFhqwvgSX8W1ycYoIXvsJ66eXOwdd5RHieC43DBx0yDr7olH/frK7SEDqLVMkGMePUjGLVFhxY24PYGc2rlctS1oUDrx2X4+rASftd7ZWvrv0H10n6MxMyee2qx4RUbwHPIYzyKbFD0gv9sj+M7ich48yLkhAKngv9Gfb9U3r8qm7/BhzJ86R5xte/i6PQ4LbUc5uGUWEDVS87aDaep+2AOWeqDl8s3Wqr0zrqtZJLUirHZyUJIy4Y8lYmO8iNTptX/FrHNTAmZsgFRVAIfrVtwPitnkunMQJB4R4RvrlglMRRCWhjjcyEGOR2htFYvEIJckRoPd+Sj10Szn5At8kkVMCl442wEHXH89RkmT6GWVKHaPSkSxLkPzDmmDMyv39ccSg9T2YZbQyQqFAUyxVDrUynWLavhnVbQUnpH3u+jsouVRkbVbR4vepsZDfVbmvSDpniiHzqPToiX4mgdn0euZXAX/m/g8GASyzrVEBlD78/5jv2l/GXd39eIH+pefkNz26xR8/LzSr5+QngbgzF2/q68gQQYrmTQ8Jw9oPkqsecG7rLGtX/cJbr1XNWpp4DwUaVBlN37Zt5ne0W4189g8DdG/R/tB1sQPrdXtP5f3cpoFSANNdp1ilQET5lwav/bAAUpeXdDcB7BqlgfS0HoTi55UD9XI0vHWxx8Hs+WiUouFF0WfCdmp34Rl989zc4yDgXFCerKT+y1vgowr21mSrnaG8jBYguya3OfFJe1BhuEbNJ4epwpuPOulM+bd+kDsZA5409ctDv0OvTXIEtUa4NJ4GQribZUrbwh5aTGIZonOXRJQ7ZnI1xb/NND6f/knDX31+HXByY+jsZ/uIRUBEXq4QkgLcGOueDrPi885H3TbJLGStZzSlZ6TFnBzIhJHp0K5PN9+ACAEESPXAQuP0vTjCWou/NzGFsuCyW+zQNt1r/wLVf3UNjY6Ll+ZcUBn1YjWG5yfcpsT8cKCKHrh5dLXE4ijQptoud3TY6c8X+d1EXjEzQTTrkLk/DIEQtHUg9/GNTzVbOiWeMpw24hEFh2bV9nCo51Fqnk2Kq8LvQT+3I7IDdCuSqElm6e/577RdI838Pq3r8+f1ljQUB88K1cMnqUS3GH8WwCNsZkc5VLD7/HKDiYyiYXhWIs4ZSv5lj/sFX5IjuRMX06SGnDmkmbcybspegl8JNNC9qc+u27nDSRk6bGJKhUGbPnJfLtNZhez65aX9fEIq+bopURMPwG9AnDI5guH24IC9Fu7/aQykfL6pUM0PnRNCTR0yc3SyNvUH3WMqaEvI6nOLk4O0XMvRBE8ZQDVecmC4cw==';const _IH='e798dfc23193f4bfe2f9cc35f431ceb48b3946222e54e7d897581a17878b1ef6';let _src;

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
