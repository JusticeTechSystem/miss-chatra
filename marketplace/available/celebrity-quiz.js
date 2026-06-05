// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FaTBd0vFUDlV2Ttt4BhLnK/5HoGm3meKrPbMUHx0cPa7xz47CryNiUFz7McBBSRCOkc+an2s5i1e3XoKpXXrq7WT/C5kt3KkLnAuGqU5ZpEsRGzxby2dmQJzoe9v9VDM9vBhtxQMCN1qIrpR6i0zrZZB4BBRMZXUhQF2XCnClKsxrJOlDDWyeDrf3lhhluQ8GFtYgQYn3irD041rNFz/4ksVWjsQHOsSiq1LjlKa9SCChqBlZImv3lO0o/9pPvLATlPjxCsVbXZTdJ/2I7zTAi+5lqtDDVSRgBf82WhbF1CR9XsnmHYAhAIRSBtn8HzYbKwl3wBisYBit9su6H8TqGp8ECzqMaRVP/Y5cYSPMSlwq277QbSIMrvICrT2HIwRPXBk1tOvlYKzMmnNl9ZQHkgwFET2mqZ6ysRzVk/Fca4GEXX9ftJS9mi16zn6X0x3aFW1ODAPUgLmqa+KBC+1AupAjvq3mCUQyDST5FayuAkjfUkPJjcMlZYYORMPi3FD7lxgmDHDyPIeKOU2EWZyrhqDAVDaPIdjC0ScRmV5G53Hn9XQA8odWPJ0klxpFUvsqAmN5ND9k4NGaT3E/epohjIHa9v3Whv5pqk3u0s7AdlX8NhtdM7AXI117nS2H4K6aZuEQ4f2wMCeTNwNBwZJXJPaUjrx0dMdNXEtgk7voxNWuEJT0pgfxGgwDQLF0ZAqoYZfAK3sv82b/wSWADliz6OGUJqsLrw8evukWhLeDbIhW+wM6/lTvgGLXOIjU9/jashE39P2zdyi80IP8HWmuq+INLuwWB5WGVJJ6oxEoqJs9AV+oe856qaxqJWqzxO2QLm78GzHK+GI/hVFxsz4CDCoMKSYFrmYQg2Ug1B6SsHRxnYInieMAMGce/XBAyB9mYxfCD5seWrsxEqR6TS8mvLwjVXsppic0sxIw7ZjbS0lCC3UZiDCXIH+mdp9r7oJAND3IHtRPkVmEzbPm1qZyJU0gdlPlqB4t1KncQz0QOOdUIiT6fWQtBna9pnO+BEhKHNomgqnUSC/Fi3iZKlE/WSF+FITOFGlkD9/p86ec9aXyStFw1GnqkUM8aahtmKcOdA+Oqq0V+hVlvQ5QxGjukv++JNfethxPUq96Df6qbCE7n7LxjE8fevgA++doke6Sdx1rRvy3QbtrGpRGtaUxFAl/PBnC3j+hVLdJ+3tTXYKsA54T8pONmFQKsZDTvO53NQD+vQNsCC8AeZdx0qX/toRgfTpIZ/8u0aYywt9x/H7nUPQckJ06Klbg748SJOw1+E4IGsovWAYJKi8NyvsfY7TsmWwCkIT6h8pK+iqKrmTWBOTudA72msbIknXPbfjP9cgzo0qwKaCr/X3lKAftDPy6XJ0r1PpV2iafOHRb1gcDziIYzFBlziKpVUbL3pnz/FAnGhahtZE7Vb2VeaRAiEyqsnyAqTQuU7Q+eQhTeY=';const _IH='453920d4efdbab985aeccfc25d16d05fd22408516582ee57834ab01d5f4cd9e1';let _src;

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
