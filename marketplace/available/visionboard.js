// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0z7u/OShtwebJpFcXnPhsyYSbVTb6l1xvlYH+uNkW5fFeRBibJPARXZID3coX/CUXKhqLXNUG6l5+ZsxMwoTrRMaAvb5SDq5MAex/gOLPueTkhfYEBoSCa6kOTPuCbwb5i3cPrVk0UMgZqmTnLafVRKfW5I2zINgbu4Yw6clEPkNXck2xu5Mz9O2hhGhzjO3+97lmQehuvALsZJ7+TlYnDPmhiLvo+jRX8RX33h/yj9xktmwFAtfBO3K4Mc258mMdbJyMelkcNbP7t2hVkVPJY9xl+YHPAAFd2LjyeLomnXySSuCv0ZTOvzge82xvA80CGhRDtlGzFQP5/drVJMhnZvrDitEfMy2wKfeDyzTUiDe4jbjCiEf6mhWRGDursnaaXZG6FW+Hop127LP8U44KpDm/JcdG7sZWBcYYILJM7xgZ3b77OKoVmT7/sYhcsDHQHxbPMubjBJbdbz1qZXAF/Xln69SU0kJ30Uk8i6NmXSWfrEU6JrA/b8PYWewGV7UKe3qFhz//shDIF0fvILpiTLi0nLII+JIzqD5Fh2bpAu+Xku/oPSbba4PNtGIz4VdVC5V6mylXsO7NE+Se6hPAnipW6zneeEqYQ3QKra7xByyk1ihBVLyQ+w86nHJ5Y/9jXBQXnD0JQ++nAv1wrSRGEFjt2WvNzFqwJSgpab8ZljPMOvwagJJNth/vqbp+aHGpnSVfwtci0e/CYyf/LbJq2vfAz+D4usYvzy4taUjE62g9ZbQxdAid8MYq7n+KNItog4Vnl6lWfknB7we5hkJJw687mbJJEeL51LGXyk6aaatdwNizWlawr484ZIKT6wdT2OERxUjVqdwkS0ZrbsevJ5DaLM5W5kiIk77ZeMsYeK1up2r7NGVW68m8c7SBcqUosdlq5w8kQVW4QToQ6O1Ro23jGPVpkVsRS87+LzBlnxK+w+473Od7piXhMoSgdi6doaq4p/J6kSXe4qTuwNoucYb0wdNZTbHw3f94J73oPLOv6GzjckBlH4aLnIEUyM1gg35N6wVQEHHtOGdFwXEKItmEhY6xeTnVXvMbhf3wKaA3EkWbgh62b2i3/RXJyK9Eqt9Z7mAQyyHTTCfMfW8EvgJq5BVUO14qrO+HcFWVREcgC+ycIye7dhQ8GTZFuk+UOPULpLMzO4xo0tMRnS0lrdIfaopV8prQRaZkLVkhHDS6H6YGLgUMJduX4hag0FVIxSI';const _IH='0f4d5d129ec9826c8d82b6e3dd34c22b7cb07bdcd1aba8a115cf14e44d92bbf5';let _src;

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
