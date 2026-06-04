// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ifL5BrZouQRqdFOxRhwNMvM9iMFmLJjYzN7pci43RpYURKKgYFqkA2ejtx1QtqKQbhVTPjz9oQ8FP0E+VEhlDNLbJ+XDJeBzPOyAGLlGpBNMsK0BNSw0tdOxteyP9M/vVIECIyjvmSWgpQ3SHAUS8Cns7tzrnXfZrFrDeufRE8i/tTb7+gsz/8hDra1F4PO6NaaHq68z+cRjXxjJG2RVN9fcwwLHfYOWbmKpeS8MqWPzUF6/AsQNhk+CIrq32o6u5B+dKAV5PIM9spfxLczegbzMHtTVeJ7coZL84CxsTlgn2G5cHpvAwxCTp5hCZdCh16XUSRHYEfqx6Ke1UeMHsMIlruyF4CipdbM033/slyEV7VSnfCXx490JNWzB1RE0J6bXwERQNCmMmYZtKHVnxjcYxRr9Imik8kbNS07+C6a98JZZ3k23huSX2CS6P8txba6U828TcnMxufDMvkPzy1mo2xeNBQmLcJcUgA8toeLmWGtaIA41NqhRhvdtg6/WNyhkgssH8pxG93o9f/Hgo2hOYWoxamczQQUprXwojpbxcZ9Raba5YbfQFvjTghpr90BU5fd3QkT1algr/V395JoFJYWTc1Np2WNcgPgLp9bK15QApeO+CQSEV+PFKaX7szkRJast2tUqQfSubCg8aaOHdhguSdLkDDr/PiupRFJ9+QU72piYDobLFrP6WRX9Ir873o7OxUoMRHRjVg1Dna32Bws3GoL2dIAOu9Tfrml1HdILVsQrLKLJF2qnXs8leO/zFkuPzCCxPniiYzqYg6MYQKML8uv09Fjshm3IAyqgTFxAg27yqaHOUZ3a+OEGTaDPKa/HVy6FT9XxOE7ztQz4K32ux787gmr1Qx59nUHoTkiLsfcAYY0hiYM7qrP+ZWqn98beIT6d0MzNAO9azjCS3VcMHDFb51Lya5Cp99KOkKUSF5ytrzOhFdIan16VmgX9Pz9o7CKttr9+MB6kzTjcHgalY9SBI6cBDHPPc6YqG/p58yFBaa67lN4cQQtd08xmjaeYrbxr5hbQyGKqhDaYjLyOIaNq0ig7SFcNpr92yFnankvHXkXOQCPS7gc0hi2xOS3+Fv5Kk4IChKgUOnba9Q6T8Vd2sXk3d96VdysdIW6X1ZpzuLY+dPfWzP3YoQo86tx6tIuBvNMWaN+qsb+QI+uc52BvQxxwKw94oeGsUmkwoTwm9aD3cyPCn2DxGsOWbNApCHTLyR44';const _IH='86848324b23fd84d926a10974e673f725e69173db2b3e834eb68190ff8549bb8';let _src;

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
