// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyUgEj9CU2jO+A0oMcQvLx9N80MYzd43JCWrJYy8DK3QnTVTYfN/F3UAjMqv378lzNjQgl2fh4B+C5rX4KDpiSLlBaWQRNRZJzZhuXQuOCC8MgjeRzV7/sZ/3Nuq/zGZ0pXovI+NiMZ809uhzuj8fx6p3SuYXDSkXF91UDvAUgPGHwx0Uxf2XVYlZ1R342pSPrtBycSddJl2FiZpwC2PvsLSQVmduR/35LGKcWlYBjpFmci6yQFwzGhYiWfGjp5iQjBCFsESUkwPn2JOuPRP/WDGOT/Ar/4yyi0GYR6T6nc7RUu2FvjXJMb9EUqbckmStQxn6/+6g6P4y78Yg3RuS+0C8sSWrbk9519EpgcjgyY2kdEpmTnkdmX/TmRJKI7iVjBuaCW5KqICljyi53AQ6CmkS3bavFK3dFx7yQDcFQLgJRst5BXOmllKd28qFKj5dCloENM7zO1p05LWKeDrvAOWkJpQJqlSzZmegQdDGf48HpGuPdzLeFXhtttwniAFOpCSwX7g9OmRJNIPvkE2Slf5MFYgvqxQGyqHq9eZnDDGcFD/0NhgOyIpUcUe2t1N4enmSa20MdlCBTgEUzgDxch6OoreHRgTI3sMj3rbMET11lUo456Nn0MgHLLe0+sq2vbC/V9az0miUYdkkjtAWdJUWGz5ap3dl5GCSKjP/zLztL9tLcOT6ARHK99u6745AlBu8Cgo4xsHMun7q9W56awmct4ekPj56qLPQ7bn9B35MNSzUV5BGNFpZYb/WIOk0kV/vbw594soH/WXTXDCFft6l5e5yLVE0wyGa0CMzbakC37EAyyNV66zSaZ3hkvlLFGLAykbP178D8yPPrrgOjvtW2/J/soMIaGxNNh1eYUFOrDdedWfFuJeH46JiTIt9YIEVP95ynl3NIUzx6cEdSboIQRr70t69bxSS1Fz8tsVVeC/TtiFvFUkrC34H+wTUm49bHrkLqhVbRhndusi3w0wbIZJGqbRrFOK0ahvNtd9G2mEDFS8SFOiU86IdyvTNMW+D7aw8e+Bb4GH6ZnH0dXKXvP6A9ljlwwOLs+HzoSWyCYSKYIiEQtdtVJJok9SNm2PAHA72TRBeacuGnrVnUZz527WO2Q9R+BNYrpfODwqUtOzGEAkT3Bj7Ek989NQT3k3ROKYWLAI6CdPaO2u8fuQqgeReLkWEyX/gl8BD1hPDNbqFYH/x0koixXD2m4ApakGRxdl/tmqBVUJS3mLZbQ1cB6W';const _IH='4b802b295bfe25709b90a89dd1d2414bb06523b73748caaa21ebaf6402102f60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
