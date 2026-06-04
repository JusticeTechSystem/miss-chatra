// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lym34xSwKuF+Pr6J46XoaRDpoVel0x0giwgsUWzkO/U7Tm7m1HbIPdlbAm9OLBi+eqIp8At9JEut3fGpHIA14Jt8ij7WPOAApjA71OGj3apQBPPFQ9vpuNCYDH6wIlBA9+CjnTWb6uoFUvQYv36zrYsKBvJg60VxKzUvuuGzTmQwzynu4Qa8SFK5fRslECOCn5jbV++kalMFe6cdAZFeCbrXcerfBIf2IYIBwHoNI4IFOr6QvqOR8qoyI6TFymk+hVDPwN9K7tCzrW9pTLiOvXG/bddA85+73KQdD07gPWXXFv/GWTCRJ2NhukzN62KVXFann4947naT0y5eIqom41mASzPG1WDbwHMiUHC+21qbsM7e76Ag1QltYmo/Pw1y1laaCS7Ynkk8f4d5dW93vYQMWnW16uiLIDDcKm12GUXgO806gvfBkQLcdxZyqqcwB+bIgHSR6GvxC6r90qN9mbcZBYcK34NjB87aL/k/G58J93eROsT8O8PcGqW5kj51treBmtPA2ezM/APfSoP6hSPADMBVPhDUqZrLM6HVSnvIx4Me4extf7g4mpk7MM84nM2dCJZk3g7R+eGr+2uQm+kR7gez4MsTn9MBEEzJ8z6f+Jh1wIXvR2jK/g5G1DZXMunXmgM2j8Pj1E/CSR49mNo+Iwkb8e9duTwMdTVQ9btqqo91hwzxm78YJr19Wu4hphL3/y8/VT5TfVqSb/EjXQDcDT5o5uVuYdQR3aYLBa0g1goMLjLO5XnwJ23mFmp4gWzfSgDtEgFXLfoViATGOu9m+KIcfT8N1FHzbng/PC4PWAsZEnD3ZaCBmQH8xKPp++2tGS/iVcpBtbTOShB3JP5RCQNBsJpNl4zsYXaoxDF8kxlGaEJsGg19qhhc+BBDhN7zXveT3GWZgFBCi37WPcfj8ZVyuvWfVekMZr8Z2fJollg/NefnGRvBGrS0Sa3kjDB3Bq+3RMl1ghC36FDCbyvTDMJspJYdhSMMcFGdg1ePQKhwYLEtKiPwURnO6aEnsWQwn547UNqGU7pkX64OVt/rdCmzWrb2VS822ZkIbYs5kujmKCU+kG+2oDTSxRGl+Daqu4CSvROmyB5SVVxBMqfWNQKlxXruE6p9xJFaHTtV33l0k7TO6LcjNUgme8n7Sbkgz2d/KBpWboKMaNTmwGP2yrQmKw8TZMDlcfxM4MUR8eXSHKu3+wAELpeyT1VCC0I8VRM+z+i1vAjUHnR/fFFnE2qJRgqpEBCGHehv5Mm2jLkNHDV0zYjiK4um2ypJKovI2wKHyGkL+Y8OIWtpo571wEiY1mfc75MMWZUTWZYOLNAgRdXVZfQXk7j3Rqm6renoqi5z7n7r/jjYAowAAqaRHIaDfEaerDsxjMok';const _IH='6a24972f0f2d1de0f423b69d3664cc5fa6272f4b04efc382954ddc7c6050c06b';let _src;

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
