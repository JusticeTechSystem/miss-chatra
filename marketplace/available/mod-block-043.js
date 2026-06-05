// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDR8NmMHFdYdIjh8oYdZ+YJ18p/I440pThRc/kMT3tD2eLgv6FVpn3zlrBFHdOqyC9DY6jlGzl5Sday4k+fqlDqJb+oe8F3kmWQccTCsjulRHC/vSB3jIDYx+RbdDT8j3M/TqzCrIACcLhkiGwunItdx6xmm/XK0kkwh63mb1NlzaPhsk7LrmPBtHo3UU99pSGNlIZ2Oti2EQGkXpm70X0MiBsdM1SxEF88VabTUJIXk2qzAtgIOGjgPGAbOZS4ws/a0aQwl4X4woCSHKEXakC0FlkskSObPaYl8CMbsNxJm0PQ3NcwEohx2JrX7TcgsFfmBzdbHZmkHbqkXurv4LRHdsaUiTwBqpSLzpyGAUBv0nsZZYDZnoRZFZBuHojGNhuIbYWci+4InkovamxpDXLLDjqb7ux0hsCsGrzXI7WefPG+fh1X4A1UxTxVe6F1R/Y8L1NfDMYvGRjIOTLuhuBlShgTBhHt1Oi+eBVPiwKPpbf6JrzsrRYyC5/rZW8BT/cUa2m0ui4F96epyGjnlt8vfDffow++WLE/Wk4r7qGhAyxmF/8U6HWSK5/8VvTQ7/qxJRyLaDyJK/zdGpYWwh6JHm2Qlo6vWq911xjfzcH+tlYeLDWGmTMGXiogWmIPrbQHUTFuvm/m+47XxQv5/Wld8ssDTIzBmN1lkFC4Tt73BC6+cSGFGBPn6FNzGe2eJ86C49H3z1KP98jMuAVvFprFbKk4N/2ko5x0QnXeQOjzPLzGccanLp97+OgvaLTYFZpdEFmcVWYwBKRbtmfaAc67xGENMx6YU5IlnlDUVDFNBtWMpM+ClKfSm1rDNPqPcVN1JdOjBbV83eaD5tsvQGhmwJdWyh98OxS03M42pAyxUHygV3EFX+cUUTBZPicYv1x0HS7Ua4mbmbw3CaqgLEfQ1xh4vxC4lAr6SvZHATWmrRiwbf77jBfcv8vPRwwx7m/+RZAYpn7MBqndWFmu12xiomJIWg46tYH5CYnVkdKHIpvTfDpZn0Xqs6z23DHDZwVzHPBhckQQbmtiOzgsa0sCfSYyrbPW9kAuh+hkhneUxr/wjA0IgalbMl7gMwmxEJ/fCW5SqWzmTsKgxMPqcnXtiWz0hzBSXXiH9lryxSn6RfmHuFW6laeyhp64oD0Ab3pQUF3PQwWWuUxI0INq+L2pzb1yncX8Cz9GibSKDibagC0D2w+qjWwYG24FBm/NV9ui7275Np9cox5I5ufOxDt4soTtkXYsWg91e71EySVrcQb8do5puWBXgCzreS5kx8+YVewwrc2kMPC87bIKNKG9hsh0pC90TWKZ3tHukclKYyigF59C6mkr8XvHJibeNVlAk9MexAce3VVwhbIHJ2XUFLAB54SW80A==';const _IH='4ced75b8ef44a0c1d02f0a929d133aa39e034bca8af1f2d4c53cd4c1c8239802';let _src;

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
