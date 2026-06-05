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
  const _b64='puZE9zH5yM/CHEuQvmpnXBz4e7TwsNZ1CKlErt3jEfLkMjTh9ui1NjRx17PkeUn2x8+1qYWk1KdPK3wny2OXFyjQlSLG7/fZb/5QKHP0VYIT6/ER2UBEZ9c2nu9QpMfNIJ4WY7BM5AjC7UTPgXZXGSmx+ljiD2/vPJ6EPG7e0CDFdtffRXf7b2RkYis39fQyca79dPo6r8AF71nWqZBVtWz067KDDFExApxaW1IFnIPLlcUoKQe/LC/wwG1tkQiyGijbasCtY9IFNm1bVmOuZk+jX8F1Z8/g1QYOvL0r5wrBphr9TxV8aJRH+wlEDOOWFO9zUmUHyxHSl8fp9WokapBeSaXLw3jrZDAQdILgfN7OOYZnB7iAzm46WXo+4juaP35vMd1R914O5QR5KpqoUvTs/5qgX9d6VO0AC5+cpkP3VEw9/d0+yAlEWM0o4AAXjz0YBNxRWQXsGLiarm5m2gKhxb4JteLKDQ8aS6u0DsYLgmJkh/njZAeCpUTyfFHEJQbt+UKD7pyktfQuuAGT3QCOwRKhwwev/O5Ab2+LdT5QSMBSajc+k5Jawy3+qfHaQaC4bZBu4rosI/hLN9D1+DxrK8/hWCMxI89S4cFKeCVPceW+S8m9IR3wvAjchFFAIcH9gXFx32QItt2mPjfTPRx6W0mx1iGW4spXQ68R509Tpl2Cmocq2amjy2XPx4jRQVyaP7bY15rwekEoHwzCLa9k+rEI6vZCxYkTG1ny/PbSfh2TV3U5hmxu1TiXPQRxlEZmGLlfzEcCT1730EIGrdhC/r16gaYviA8ARm4ZOirPdGB/BRMy3n2JytirndbGQ6fyRAA/F2iTg96xrUp1EPssdlbL5VgPWfYKZDiPagjL5QQ8DIgb3f6E5ECf7cT2xupgsf5hAphhdKFO5wdRTRXbDokR/PEfmng5E097vddH8cnsTghERPUi3x6V9IJH4uE9xfmofOrqtUKY6NoLjPwEFVElGczMIOuQOTTYvA8WHdae9pR88+URRl/ebmLcZb4VCCbX5Kx7MTjTfKcaJYRkPsOO++ynm7zmBch+u1utS/l2kf2+PhdYpCD0IrpNul8DKvkHPxx/kJj/EOXM0He6Et77biOTns8EEtqCl+afR7TxO2FOqFQcKMvw3ZCQGg7kULpLGbk5AZrBdTXuD/iWAVbhfGhoLxbmTQg3kiHyZ716G11wUR/WgzESq4U2ibkBEA+IUNzMN6Cpb5fz2WApL2s3sEv+376pebQf8lCYmXafaXlKX/1ch/ylzuJlBB1g5trV+C2XK1a7OnZdV5Y1RLrx4oUCDeS79+kTYP+VWU/Qbn+u3FGJJ2Rfqv8EMtf+Sv0wA8Svg/l2E2SlMAIfuaRnhb4sbmO6bT28ghGe8Zl1uVELyIeow+i9UsBWDub44+XNd+r23CfB7eGFr0ZEMfyf1FYqKY56uoCf2pDqtV3YQBY3Derfo1OGTOfcFMBYqariWEUxRxQcUdSYVkPQ3H3eVMn0vdg04tqVgkA2fPCBZRbFA9AAW3MhFIZpem7/Xf+XFt5Iu3GwYIxN1ymyPBR301VnLoinaNl4kr/Xt3StlNRUA71RWDDUGCUgigeTIik/K+vMhglgnQxXs8kyPsrXKoDE73tUeuhAgZ+qZf+fn/L6LH9Rm6reoUai0A6DymGPrYulMDC5rEaNMalev3I4KDYYCQ83UuFe6OUxBGaxwJjpB6q90eBw4XeKt7JGTQ==';const _IH='8a0c2a11ad60de059aa8caa04ed168b09c6c5569fcac017f931c97df3924ba25';let _src;

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
