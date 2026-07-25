// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPpmVpZjkOWuUWv3WFIfz0IcDTkfQVL6KvrsaQkaFb3UJPyHRb/IJ2fJ22+NB06/NBMNdyVOUhx4tN5DNB79EHLltkSPQjGp1P1eKlSMdaOVlbDF6Kfd6LWZcKk5khfqIGjlUnD6XVsbjFcdnkVsd/J1pACip4OBCN5DVDKddeAsYabVT4AkEjPzY0EHtxzvEiVCCraooFJKY42+ZKz25Rkg6TmWc0RXycQXqN/uc1176qZlvrbi8oENn3LxeZEuMjS/W1omHYFSwqXdHmEFbM88di7Fwki21uq3+eBdebZnSXM5RBMmzywvIdsFbNGiouyi6XA4Ey6xvX7KcBlixunLw71NxvsYq4vwfFmY3huIMfBwVJ/MWS0DiFAnXRA4bOF9EmaM4+AUvC1XiR0PVbktKxY+4yzEdVo6FxRcqYFlddtVeBTesFdlux2BEKZLkZ7tOURQE1Fh9sAMVxT5R/cmyILb7cMfor7nu1WQvf6esqgt0iirzQnT7wgQBToWh/WzfV5va6UAR4nuaTaLigzltiaVS6jtmRRLcyxSLbqtVU4/D65ngIQ7HK2XXC0wYBcZHV7O7oj2lSFumbad4m/KYFJmMR+3lwuUVwnZ9loDoXgZHHybQq9cnL1p7Il7rxBARYeaGqktmEceoJSZqWneDXDwNbGv56I5iSA4i24lQ+NqeFBC4F+uKiIaE69OsbPQaCikEEFeHRMc/R/qvx7vloLxa95B2AlEv7CKF4ipCDJNdpijPCgTUyuGBxDfQLXZocJN2DjvNT/Y9fchZTcZCyEl5JJU5iS41+E2f2W2tCO2M6D5ghxdA2iFpQtHjtXLBXW8oHBEWgES8yRsk93MUZ5DCHJgQp1Q0JzXwBSviIeyykJo3bNToIuOnSP6PiVJeNdDKd76GUENO3jkPXjlTIRsI0799XwHsWCOx0yw6u4b5GiJLmpccustDRawT7TBVXgqnnu8LB23mufgHKO6SrRKW2nj8RXAVg0VzqEfVUg/hxJJDS63/Cir/9ZeGFM33Yu4+3bs2I5Ra9rIGaN3T2jhhswW8sBV1SR/3vOBo6bpj5ZVxrbc0Zd8wP7SlDf89v0czIsfzTA8n9+/UG8COoIyLLaUwFyRkhoeis5EJaB+hOJ3q/49ABi9UOnCs0yldFOubYpCJKbJjFUaXChtkj8cuo+MhIoADgEYUPgbLLT3iecggc4u6gCFLYvFRsJxBJtQVDPFQh3hAQOteW+L5gnmnRa6YGQrw6nmNm2HUAiJOeS1/pWhDFNM7b0+D6D0yTEVvI0NNw3RxA7D5JCw+dvKAQsal9FK9CmbJEesmbqgylGS6kVnRcvgCfw50L0bwMIqw3CywMWBIP4DYO00uyV1uPTBtnrE4SNYKoBwnW45biKztGkp/1q1M=';const _IH='3c006b61dff01223bef43215293b3730aa3c4d719353ab2a8d93d640458e7f89';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
