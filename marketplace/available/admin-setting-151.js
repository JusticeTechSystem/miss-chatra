// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9OnZsEC83NSFoOptXcOFy0yt0DbSiaK7k7rPuU3e3/Og1/ud2ObQTBfhGS2tGSt0ysrHH1mlfGWptXvHxIaOnUUxu5N3zJtpdSZl7aPn8QgpCYDjuPnaW4AHTtJCeg+7ZBPy927v4Chwl/5DF+bkJUpON6XhtoEhJmn1153ncnfK0ptPlAkfF3DeUXlB97PyYjWKDTIJbgj4m9xpcdsRTkIonRtuv+M3dUzPW8BAbOC4L8l8oymwhQGjB7XuhX30jBrGM5GunSZyKivWLAgtYcPRhSPSM7uwp59aZuU/3s7C4wUimdEc1piLG5e6E3cEXYhWZvVTyGLSvbSz18qWVRR8vKV2XWgqlL0nvBDTGMX5SubBmQhMKyAtsFt928IcizS916j6daFMvHzTHyrKRVVMTtIGKI7WPeqrkgp/A5R3Hwz1XuwFyY2WCIOc516M5xLuo2PleaRRNVDE0BtUZctugkK6Iv0cja4mpLNLBXqNAa7JKM3v8Ev8uZoID+7IFrLVt51YR5FMN2UmBnxreOUSbYdPpN+Tbr4kCaqKQ30rJo3UqJ9HFG5G4KCR+nilTdxB1WtUACHIXkUBOIs9jtwUk5OSyKkUj5y2V+05FHWKIw4X+hUUsAJ8rz+Q0rgo0JVhCOr34o2ibM1e9DZv5qURQacVT+rqHEBkh6IZZY/QuXE2kAOHBcackmKP1B3MQIpWoWJ4nptFw1DZBcqTvktaiub0koz9N9SaEAATd/A7TG5Eb6h0Ct+SMTjKyq3gm+Wbgc3fELX2ix4QxCbptGrYrxdK9yYPvpUB/QkrFAAvZBWjP2RO2RwCDqTueGRX71mANbWkIBnBydHH/L8IN+UdKbNAPpmGgEX4N98g6CEznxM8JJFeWpZ0klZ+KDkkdK/pDDronnmdTjREfLnmXZWv/Lw1sEwFc+SGdHfo1oPpJWHCzBIT9jPdNlP5jt+/lGaTnKFjjuBq3QTahP15eRIeCVhNGL7a5iNTxkxa46256O2NBDpKHOY8kqzWRrPd+13YjaCl6bA=';const _IH='3af184d93bc0df55af4030620526c08e74c1b855504abd124a1ea99d0753926d';let _src;

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
