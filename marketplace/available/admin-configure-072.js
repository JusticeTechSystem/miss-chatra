// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aiIQirEnpHWOo4e5KqzgrY6OAY03r5yMUyl2QCBwvfSbzY+VEgJkRXenrpydGPGjsWSDvmlZzhXlbTsoEs9ffdqGOgaS7sDyxDnYCJ4FC/866uD5UJM5u4Yh9/eh7P0dOX2HmgyovYBt2UdxsAH4fdW1HwIoX8tKeeabkoTklqKpPVvtPwS0pfQRuCtvybryPyycb2fV44sdVCz5rlq72smtc6MzcJ0TOJo7tta0xRi4qENKThcdncymoNpnRwt4J4t9FSDU5dfpqj+UKVBwFs/nSlzDNaBBrQyCyNkQrLnHwO+KiPH8v96Rm1zApSCwygA51JkccqipHI3GYPNwFTvYz8GTq6SW+Y9R6uTh1m3dyoMgltzzV3frrw5+IND0foSYpvfYsxsTdF8LZGpTq1qzRO4wswrWglbnJXGBDuzr4DIdhC486Xix/zlvHEy5AEk+/hd0g2jmeGUaJVP7PFvBSuJ1gAPUHJOfTpkurEkpdVgu12wulQWJjicIn0OTvoLJa/Ocr/bh0QBlVOtfwbcqyUPskRGGtiQ09AIl3wfDpQ1Bmt4B4+CBNG/EGvCTHksx8bOjI1W/7QIMeGI27fIJ/v5eYnJwDP7+k/F74FIdqEgI5FgovllEkUxaX/eDS7wkiNE3BE3jqwtC3sxmp+1or8pH8mkHWR2BoERaySoHaYSojAfHw3Q4Bu9Gcc5VVJrw9gzpdf3heAmG/pdC/el1i6nrgaZyb9UnyK4mviOglo0oc6eE60ZF4htkAg+b7d2AaMhiJ5QOFureLBehCmT2uqquRn5/5XPGw+guQOCGA4jR6F0vwndyQcVhZIt/3KQNk19k6k36ccZZ9qNErD6AnaMzULy/asQR10XJLSd2N2ylAjNMJCGqRLCeeASU9OvTUqTevI1V0e8fm8KryGin8ecgQ4sDTLNkM9qDN2/UwbYp2bD7Gm/B2B0UF9ugEmv5P3jnJ40HdZIvSzjSjs63+jtR8Sxd4gSwEkLUXTYzPzqVjEh6NMMYrm/dhJ38qdNhS2RsoAnjyNsFBH5u4r5v';const _IH='1b46bd40ef8da6df130f846bdc1a97654d8c91b4d6d6c110dce97a19f01a0ea0';let _src;

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
