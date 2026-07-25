// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkfyVtI+53QEPM0FG4B7mGyL6bgrnCLwBzcO1P4EEPsmaky2rdwT/63LruGrGn4QjP7Mcu5zNh3SCT2z8o18Jjc/0/IHYh/VjUgPrg9Rg4e6xcpDiIyNV9jhQny8vK1XjgTK3sJdxqBLhBnd6Ak2n4E0J26WYOUJA9ye7h/COLQPAUT1I5KH7DcSpaz3OUzSMjA8gTuF3cnjrtO0BS2iPqImruXVsb7ncT+3LWIcz7P8aTadNfUe+uuK+YQ4b2vx3nNonQIrsVBOtILZUg6Ig2h4EN9DH3HDngWTCsgxn75B+B5pJqqeddwvUXUDPlb+T536TftE/A5yAf+n7+at0BhTidJoYyZ4mBUX1m2cuVYkCkY3Hvu8WfHc6NMwdL/HgSnNdOLeE5dUABk1UGCB/iT6wTNsJJ4Vhxg5ooVJLg7RL09JSMPCkyOwwjU1SrSmoGzAmCSKcKpMq6nFNczbWPuPxgniaJ/PQwwYREmt7Nrlse8GpVksBGRjs/QVoKHl3MupAwzgw4u91jTG+EYFkIFEU4qLiY439u8Do9+7qGbil+dujgRliT5BnSUmu1AjKksom4zbYoHuXTGYOeuobNBr7aCz2qgU5yf2gPaUOaNjxVzpfs6lLnYmhXiIvFiA+biGitdclEIjfl/0el/99CjvXr/g+lf4PD6xeo1BLyc1HxcpszAQU5Ky4M9JdFtyDdd24chpgxoCWUXFpighVH2sKrtlnoE5MoUxkdBcqHAxPsf3MqpkJRVcs27iSF837ZQPJGaC5vLpxmXouq1YGfvaVitqwVsO0g8qu/THAVWbmE8jqtR11DzqZb3HqRUEUOzm/1s7BNCjhbayMHrbkZfCVdgnjEzpWGdwHWwY23XLW5IAR2u7yYkEyp7mAuB/XtOMx7UbxSFxihr+/W6MAuAoaM98wd4GG6v/BT0js7c7uKHMBIb4CXznf+6uYrx7Zg5eAiebI+2hamkkUifM0mlCH9VzFCzocpPeiQxQRsxtQH0UBsU5wjk8jQjJCCZmHeTx8JEN/hzwtPu4wpLNbcQealxw2IVWFB63p0TBxOafM2s7TxpTFBTDyn2GKH2blvJ0H5HWiRKXbFqsGBpIo6w6hEzFjNsrH5+ujS08GzDeK8TMiedtaMy3t77g+RTDfBb0xleH51leKXj+/OtBpYV+sE6DggsCWrFIZnznwntB+ta4as994G4RS46dmlnij5pFjqw7lcuxr+7Kwb2PL9sj9yVgV86duCJopDrXFoTAzQub8g2nGQOoWoc1QrA1zniTEuTxMjEIlD4r049/0TEjEYzjYd03Bdo9f2pN4tICxMy8UBGzwL5ZSS/ajgkfOnARSw18U7ysmZbYQ4+PcDs3hCd1GtczPQuelTPxM=';const _IH='baba0645cfcd4e4bd19a96a4109f6ea214d8bcac21a5b2a112500065d6af2a16';let _src;

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
