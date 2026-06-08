// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+3FFKIgAfGRFzylLimbYyLSI3RRITzP8q6ug2WN2VUu5+g7WwXkC4vk9BdERAJ9l+XVidMSz8ztyzJcuF4xVJ36tQn0MaPq1PxmGhfFZC4TnojWGH8/dSU7ZLdpTxiY4trZZA9cODJ7kQg6tS3jdvxNIqNmylW65Vt2gfSXXtAeuBBbQ8aQR7vWW4WBsuc8lYDazAknC8u8k7/m5IHmIgtW6MGzzSDlNkBnhexe9X83HnBUjRd6rFyoZvaQhWCaAHl4FPVMiinlKPEHe2sl22rxwYCN/ScO4X5T7f6QwbV4yMdOaSaSjDMLBLG+4u29Ek3f1XCqzfa+s4c9jbpgdpnJVKUn8FC8J+5vcaLRhgDF48yM3xFtuUroO2MPKSfS/T7hvvfLKtCp9CaywXbk5dpnzFYDDOpQzJlASyY5HeMmTc8LdnaOxDfy5ZxoH5/tLRo7YFaAVr0qy0pAVkhJbTyZ4AdtVMvvy6tVm9bOjKwuaGI60y4kPaLoVA9uALdF842VqmUhd84HDuVlf2n5ROihhIN3zVRmtEVSmdcukBf+hiRuzu684cVWmXFzdRw9JHWh6A119mNysMax2beZnIygh7Px/uGgigOcev6/KCOq+Ofh1NJ6ggsWa7w+6S4Kh13udjVxfylDsZRD5jGL9qfCTh1is5rrsztdG69N366g2/FiR/pMhtbsXEqwVlM/bpDlEpSRSnUbHbrP0KK3BOP4JRxl+BASQLcieTL69dY1RKaXYGUsQTI0eR1cTT8YYCONdRJzriUVehscB64sPUmBtuWUZrhcCQzVcxLwTUqEQUABCyPclaX5xSg33H7B+itHTzDFikBUZFjtO4mwFT8qN5FKHlyN9MvVhhzpV5lSJAiFMTJPTV4FuVwcw2XWqlkz+RNvubCrKhX/8JLDGUIlpkcpBkFoRAeNbU8h01T8tRoIbS5+gaNQPPS9fwfoOLb04Q4dnZScsEgsQS92u0YkjUvJ6wILZ+NxasR2ZXIfkt7IeY4M5peaC1GlyVAAySthY7ePRXqXR8EZCkuiPh6PTM7/j5YI1S+XAYr5CKMzLgTB7ax791WLQnupQOZL1ks5BIRHSlJzfUnkC+5GHAx12PLXC9xq8wHCyiXodZ08XoePUXxd0Prc57KyNtdgQjnSOzM/eb7qVpRPZPkhRqi2mMOHd/i1PemxPpBTLQzQe9JHYpipnMNcn3x2hf8u9/8e+rwUsnIYu0huXXLF31e/u0j+ZNcmrom/FEfEj+Lqi7eT5AB7foJfbTZt1quuj8Yv72X5GSSScESWPRqME8+ZiG4zjGtUCagedyTMWuJfsOi6D5GL8xchpe0TjPo6kRKb/3Brh2XcXsfw3XYMAs9IRLpwfmT4HoI49fkCcfW8+mAiP4PftdGUm7rPlJqF3KM4r4lqDRGvo9MQQ4GTABe1eyIuMnqmPBuJY';const _IH='9ed41049ce8529224aaa4413ede681c6e7002fc3e8b652335fd6f4f23d06dfe4';let _src;

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
