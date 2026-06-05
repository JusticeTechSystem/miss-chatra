// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zs0L4FuZoGe1n0duvrfY2P31LYSFqt7b2N1hRTf8WBY7gHlGq5Vv3311X5CY5RTBCfPDiBFtiPRZ7oCE+YGJrY78dTwnF0J/F+83o7Siqfo4CwUR36ks0hr7snpyaqTXcrlLcjmdc00XcIMyl1aqwvNhT+OWfVCvXGRYUnb4wUdVSzdmQDVv0weQuTwyVdPDXV0uF2b34BfKSEZ2Db1cdLOPY7YwsrXPQYNvqQm4uGSbNndWCKGji0od8H5ZDQOd1/bKMxC7rXqdXpnNxXtn59UZLOUs91rotLtP5uu22iMzpkxXrfyUwfjej3Gadh4Z8mmdWI0HizkUUCUNY5omELTrIciiOyO6MTWnzaS93BaMQH/uGKGUMeeFxaMWmkXXjq7jS4TSnbaH4fnJy8TsoiwHZmO3gWMJN86IjzBhaIgqcyX/nAGd7XIGJTAUqlzKRazOO6b0cSLKGtBGCzyIbKgu1lE3Q0zefwDQNA6rYRaTmDs/wIozvyP/eK/yBcdYu1EZDKrMbo7Dc5G9oY8wruiC14p9zosBddfVqUdaT8S1zFWBZnb2twXP4crMaJTEI1590JoPSS9Jzkc/Qiz53hORaePcC1FsTSmo+PbXjikTMCpeS1mnV/fsUggAkNaHWhE+ElGdjisAbVeJlb+0TuH14I/2RHcXHAS8XVOSi+9sH72SAVSQavzSUhWXt8azRBCihrY09Jow/LPKhszrWKKy/V6Kfl6OsrWivChF7SRo4Y+Tghm3Ih6pHH3zpMCRZ2P8oFL5sjzeOkgMVfPm5W7q8VXoRvLwNzkFxLjpVO09UVxTXjqM5bACtwqk4K5OLMbbfdjj1LK90MBIdE2Fu/o2EnGDQxy7UPbRTVaRDs5zsIAzqOHe9PYST6+fVZRqexGp1lmkA/oIohlgmhIYtPpW+5vD3Txqa/J7n5k6FrSx06c8DuSTngU6D0S3igGsCO3e/LpyeHlefL577Br47DA0xfwr7l7w5b3+C7P9tJJNWSMupWXlzv14vc/LCAhJaCfnftoD11WG1pHeOW0YubkKH1uiRNWTx+f0RWebIIWpXHs3RK11BRzDyHEo99WADU7T25Nf7tPbN8MJRGopzw7zdoj7FvIMrVY6zJtyjUGWBMmHHbMa6Ylp8xn3hUnlKW/fjHcEdm+lTdTPGFe9s4ZU+o/BDpI4lG2DKBswuGnf5f/bpCHn4rdQyBO1R2WhyoklLJm9u0LWUeexUvIqHlHogtzaWL1A7Qd5z1X15gzuvu+sdbiFQF9b/Xmvkx3R2gY1bf6dbIcIC1pEKu1f05v48Wl6j5/1dDPBRgMkGRTwVcoJolDwiNVyz5RmZnnDt+M+KKWjhHBY+W4+9RDRGLIsOGi8TRlqe+kRgMOgL+/bVnQ=';const _IH='ccfdc47a107e1c97c076a9913985c89c9bb6f91d7675e079154595e993443d77';let _src;

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
