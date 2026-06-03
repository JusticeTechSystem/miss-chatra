// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qGS6fmWhJ6j8FwY0n+VsktheCN8lNF9PNmyROwPHKnaYUXYoEppKUOFyFDHqxMXvrlC5/MCFFsGW73F2Mr5x21SpLlx8/htHJsd3v090Mm20p2XD1S371m1CdJv/4jYvfBG337CD4G4adQTR9T8StzcmFZ+eYkDIFxH6d38wmJedpsLv2P+8JQCUN1878lw+EslN1flBQOkLqki1fC9lNrpyRsR2+NksuFHkIV9FIdb/dxpP0DTosORPo4M81SvbTkPGd0e4EqACrW7b9tw5XZOm1AGa0uiGAkG68RYp5s3DXUbsNiKc9zJYd4hBDwyGDJRvSjMZn8UjsNZYuQg1iQpSGotQp4YAiZRVmeacAqnSFhRkeuyATDRLrANnsvbBpiksrnE5SOvyCHB7HvXtvBCTMDFFCbVPyUjlY9wJYeULRdJn3QUdAC9cim0ScQ6ZPUe3+I9DqUc7UCNZ8eTNXhSKFfRx+WivUT7Kh/aUIdglnmcpzhG4rbkWg2gtVCDHHo9fZzdLzQSe8H42CHdEAqOomsWoVylayezQmGtGANaF4mYIR71Z46v/KAU3UGvvcDLbWKpregxqIAURCKU0Fln+HlHEOBgw1r196PZ6RH3A13U9Glqxxj7a3ccxPC0l1BoyOF7LqXwSW7HaiMaFKz0738926iBCdxNNf5BMtsFdzOBNHejm28htjqmEHK4LnV2bAHoysiTZybL148clgID+Lzc=';const _IH='1b6889aaf1d0f16e24af0fd3fb9a277637c748ad6acedc392b9f26610b548240';let _src;

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
