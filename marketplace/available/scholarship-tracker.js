// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RaFDD0GNUmLeJPCRaatJ7S+X4xVFDYi1FKQOy8drXlmglpjSuovmP0NP1g58rLQRNr3WjMVlUI2V78HudLhP9fKR9qINUVkAfGw4dmRMttxkbphNYX6aQO7AciVFmKrXXEGiDBOyNIa5tQ/KdQkLRfDTzLNmQCcUWZ8mOcg3TiULa3bymv+u/2/NEl4kRaDvlNM8AI0pfb/NRwNm+4S2fSBtM5chH8NQLVsB1kAcKS7Sr5o7v41ZVGLDGj5jE8aYN7U/1eJUgBI19e8esgwlz+/5zxAdP/dIUD8dDEbN7+AwsXLsaY3al4mfv5YlwOXoot81/TirXTAAaH94SID/McP7Nut5zde+MhMs6WWiYKIbSGtAB4ScT7Ue/WyzJqKlnGoK4axtDvXBli8BwsCYA+Tj73xbHDRnJQGaBKFEKxnw5vw7wkNUc7FFWwwduK74NjzeIJVZ/MZF9AVHYFFEJtiQE+2+Kr9bt+DmHU9Yk6Cy+1G3oztWrtlWJ+YNGYXu7YnQwgNLAGVHAV3kCr/IpFggWqYDpPd2989LftReVO7VWYA+EvqBfPlwC1lj90PijwQ1d3vVAQ/h3OoRQ9hM44nIpIMCCImJrXvrCkIGbZOBg7Q0m+5ZPf/Q8mtPsqgIgA5ZrZ9scDOyPR6pQa8sLKAQaLgTDpbB8pezhwya7wRDawG/R56ZydUsxfxaogslRJoXm2resMLvzlRuTWgSthf0hSdutcY3N8z7EQOdDRn8zRg7v07lD4yO0JmnhULmBRv7S8xmg3G97X4l0cm12Zk1IZo87dF+o9FGzb5qbPHKFXq079xTCFSEZSsgdmASod1BRMrTj7iHg5N78zfLw5308GcJGQQYm7LCG9z7SMhDTGmyXRzfp9h1DrKm+Gsfw2VY0+rSHIp/xnaRNVwo8P6MaFwWvY2Z6XoqnG6u6mVZ7VwBNzjn57/cbuaJ6DEW+fO/0W81osbds+piWlomU2hzTUF9B9LSft4utF4QAGqm9RAAT4ZLyZpEHkz8fTk7aPemgUo5Okt1VsepBbUFARTa+l1xlcKtVaCi0H85TG78K3WjPiOcbdjNdB0ELv4tHo79vPxPEDnqCgB8rvmlfG1v1sZFMcmzAVkMAY0cwM3Z9X80KXJAjIHgZqDdYwBz/opKPmlLoBulDykBxK1usPWBvlBsPIYbGWEc8t/ed2NV34BbUry0vAXdwzmBeAYA8PEUPhlYBPBZ8GJVyodxmQmT7BpKbABTaex6tbRyQOO9rx+kgn2Zeu4rAM1QhaCZkUXzj6ZOL7PEKLS9yEaOWx/KH3T4VM428uinsErqSM15hlnlS5oocpwA562yficIGhQuGlb455XWDP/Oj7mgjPZoJmcchJFauSiGuYXPwCeS4BuwOS4j44ZtvDUhqTcsJdhXMFVb7iBtx0GPzBR+4BuVCZCLGSmhN/sreqZobWOGBMPTTkmLH2AmAb2Ua0CqUPhbMJSCXaWHf7sBqhWd8MnKqNFL7jxX19rzx2lecA1039/hOH91knkIluId1KG6IW9xPCVqcku2BQmSvinplQ0L5XwOj0RLtDsRGaN7jjI3dEguYOQekwR03grcUZnf8FW+X9MD4hfJh8Nlt1Q2bRju886AmAP7zfmh9XQOsJ2uCFUAtVT8QWZNCkIjrpbFvkF4oOPFL68fSgid7Dv/8J2491CqGyIiHTi/KdoTtLbuDwymeAmnbLPfy8PDWOAd7xS0s10DU/vZTLg53P3YHQ37iXUgd8nK32Z0sTg3woQ5bbgKMq9epU/qtSdt1mJNtMe21NNwGtlln4BdSQMsdGRAnUkbuN1yRv0sG/RUkvam';const _IH='61bcc1ac7904e8f8f07e7eead20478617227c0c705a8fd1cf46f99472729f0cf';let _src;

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
