// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jgcif0b6hPy2lT/iNYBGU9bxnRuTx5XXrv4pIOSS5Nr8G7Vxf3rGF+i+zfNeNKMvpqkw1nHO/1dTS3UaDk0EDfX5l6N4qBwVPa5Rs9RhqwVGesre2+WlFn+PEaLH03JFz7skGdlB8W13vh+/N2cPF/vFuOlCd/z07f3MfO/tbd+FdR1AoDY4yQ8KZXkf+MNyXuizf+GVYyL+pneCl4Py4T8KiVfFcat7awyV+RLQcgDrnoDTsrJwx1WUOZfSPmmFFTSIhvym0OXG3SDJbInCqQOFwsr1Xg53KumokNlwWifJDgBFQ00TcOhutU8ehYBugaNMY81hwJIrg+23ekNWIJYBVTOQT5DM8USZQiEIGkbpbbtMogVwTm/0LKCg+Q7AHK7I2UI141zKxuZe/ga9Qqb4lqTkDGyIdmhOhCvVbDKiKL+ccrR4MJpxqFKR1UGtx9ZAfPg7viXuX/Wc0UNBPKIZxCg10TSFPYhxvUS2HtAKUbupSsrGjzWXfv8/BfviyxOD1wr8knlAm0Np2esOcMFYLPmkJW+WANDgIvStDHeST5wRLMbKewb8v02gal83yjLRhILlEYKDCE7qjGwoVicU1i3Flakohutmn3iIwZrTG8aVUIzULKKNE6/zYq9WcEcbOfFPlcXQjTJvja4TxRk5esSTN2b1Jxy+mPSmgEHfK3UKhUrhH7y0wewhcJk+iSeez/ve4K/6mWB+nd7WP9VTMTlHo1UBJGmfKG3bI6DzRaLJTt7QGiD8etGxPyxMfNiA5nEEN8P5l4u+imrJNN0sbQeo+IrG3DiwcjHYoZf/67GQIzviajN9kptwdwP+Nwk7bhAwZR4k8NEcCTQN03FY3RQxsvp1mw9g+CeJj3XrxJ3vjXi5rH6dY87XJl5kRMt/HKb2DX19p2oQhgq+ERqiKLgzcCRC7UMzJpmKLshu+/X7LqmGM3nAm80GV0Ifj0hXQktyEi3fCy1r+ZM/33wY8+tN7nR6kbh+Agcva8GhuTUADI880ezOLV0OK/iZ7WePMDzdB9odmi01GsnsQyOtk0/Eia1jwyC2giH4kf6/YMQhMzDCJhoRSUp5vNOOhsibHojso0tW+sJdrCp/AAu4QRfDu/dXF2jI9UnZajPyD1xdhB8VClL4+Yp+GuIH8LzBEuveEKTcRYoPIhbtdaWcHBguI585P7iNTkv0fCsV8qQMH+LqnQr8ZwXm0y1MGrLo9dc3z8d+aRb0JLc5U/i6tQB4q+3IamMte2SQkKHxDG0I3zFXZ5l2Egr20ClxUiDZpAtYmp/Qk2Bxfn6wUmP+QgbWmv9Fm2GviRzxCZIlVPqdEApMPXLkrmf3J3EeqtY4Qc8MctYckVt+rageaP39vtBOXwh1yxWC0d/GQh7Rpm+r31pE795zJRcLbGRsvpMotk/FV7Td4I3e';const _IH='7b83f86959a0f501782cf65c484faf57b8ef0b70d89c10ae0520a973bad6176c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
