// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ztia0+vet+ztKBXFGiCbMFQRVgaFW2olDoqaT9t/4ja2hUanJ9nxM3JPRVuEJZr4yQxmki8P6aj37GPmKQYj8BXhh9/bNNujctDAjrmCcXL3TzPGicYYbgHUHHLtzjcdGnuf5LIm+D3sHcm5xzmu7ZUI0w3r8Y3tRe2XOy3roQH+4XbmELTdyzqWdVCBg7+n8DM5SfPngB037W2OjkN/pJ7NivXk9F1MItXd2IRSRqaeHd9oSLhi9kxtilCn3+eFDPCDfR4jX+IS9+7prWMBomhoyJPSc0+7WQprwe2lxip7bCWMCFTsSNUWMCdwnv4j0SVzCdAUNK5svoFoSNXiCETiJPubdKZvYd0diab/eEsupsOYeUbjC65j8BQaiVaoy+baPYEM2JOIzn9RbNF0pMd6PEO91K78BhO6llPSgHvTd3WdN0ZcqRe27G1lDH4QByPvePs0h0wmteleLxvyJauPw2IobjmePCjxqBRZJP4VWsfNPYU+d9w5NCipOef4Zs0hNsFIvT2LZSihvBy0Rk+fz+xQslLqK+avSs6pcHCeO0jCDV720KFoaOSy2Qu8t21SxN4JRiPQACZWk4av2eoc75DnGwoB47tmxuDU8czPuNIWHi/NWDvf2UmvO+y14ucWYX2d/kio3ewJ5GOM2vy2lbeiH3kTPj3LnN1kJhlOqhowoEzJLo/Hj9gBdlUTwi82QcVG2YWLulthQdMPFYs/YiWkZ8xvr1j8a8voHyDnGCq19OXVO4t5tQ7Y6r3B6QdzQ6/G8/QO0eMWXDKVTN+EHAvQy4OxNwhWdDeUnADpRX9vD0wHW9HLmfcxfHa/FUuJ8ZQTcLCOuWVdn4QFkutXUtxDNMeCep7d/q4U3Ax0DMyToejo4FXMXc8KUOjlRjwr5a3qPgWG9FDIrCAMxGy/gWBwTFmXArPbX+6Lj3oxEE7pOUFPHRUlWAxK205aFeKkinw+snvUTpQf8FvF1w+XOF/oOQr4Xy5o8RErMIDmMKG/AOnglQeDlToJHW6Q/zvZGA==';const _IH='855e3e0d7e2d0e529e10c1e7857f123a1359d2947d764c1d3d90ffdfe6f1a15e';let _src;

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
