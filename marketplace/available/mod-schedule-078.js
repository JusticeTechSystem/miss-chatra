// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='djFkX/vgWtBkXI29SeZwvawIYYEyodqNiAOaUWCLi+k/WPZD4WPLJEXhZRi38PRoH9pM10POek0jgSS9hRlBHyX17RPocVZ2NpagUwByDua7y4Kx017UuuO09vlOwRIrWz1laHqZ08mXJvOrCN2xacC5Tw8zkU67w6LYxCEjf3I/kqY1numfSX7ISqGkhgAEx7fstv2no7bKry8tG95YPDR1KhGY7cO4xas3tXwpP5KJxdMY6c7EJaTkEKsxSeKj4yC+siGZsi+yJQTqhwEiMtU/v9LLLpeAdvsbBzziTPuwol9PaKpzqIN43FFgbpPIRIVDLzId7pGpoOekZT4h9T7mUP4W+wQPZ6VyXTKYJgZ9XYIIAGBgX6MyYSCTLFYB4nk/yyw/jY76te3kHkegbxD4PyQp2LufO5phttA6cVJC8Q3i6VyOeCB3lz9GI+JZwBCTpES3iqfGLklvMoZ+iqdr88Sl52o58ODbhr1PJa0esnJE83aXnT5fGH3wd26uvgbTP1Zmfm1pfce8p1sTKWv2g6LmXXefJW1IPb3QBt/73d/YIT2eFe306tnIsY4h2TjSFXNZr3MBdRtsYwODV7S7gGBBfXKpmwq6+wsrg8ydooiGXUAP9127IGAHhxz4NgA40WeT5cOCUgd8f1oBIAmaVG26Chf6QNqo0ct5thv5P6TJqcB79wnbEWRKsSQOkSC81/gKIL00p8mWdE9Pav1Jmix0NfXkJY7+obBm3xuBu7FFUd20a9SAbxp0Rk5+YvbYk9mNSyqRUnkuFbs9jIkyNKd4lbgl5f3kNb9AweP6cswGBIS3dLEFYnPudrZWIiKlFlT8oEcEMBB2QJInFb0xzU3EUxcwmNVy7WhYEXu2ZTEIVq06Fmp6kon83jEFzxToarAHHp5wSg2Q/o7rvxJXJFPh24bSAfaogYkWP4DWulGW7l4FQBKqntxiIDCwd85dOK+Ewt1ZD+IDO8qJUuX8fe3/T+A9YwJ56jE+o89eo1qwqnzwbsqZ0LB21ENZC4vYQlJyifvhkSrO0mrV4z3+x3Eoldq7yaRuYyp82ONzp80rvK0rZRKbHPIRhbQvVTCzymBSKmZCiBRGD+zH7WtE2vpULQ1dj7Wj/isRCsKw+DEnaDOsK42yG7Tk3JUZGS6AJG2T0RNSWcmzRM28goR85fAQ3n332jUXAZfBNp4SfldbxFD6rdXbiP5qcmfzorQtl4RTxboVyBOBBmabEcsfvbHv6x/X+M3sm9HNTyDGQtkZlB6fafKYtwbVAAfQ0Fv8VMQuGRIshx5UmjFtN9GoIIBB0312JfBPq+isUrj0Z1ZkVFUZPVokOhZWzr/WabZFnGmrwpNd8/bps5T0DNt81mCvkRWmiXSbPUGXYy3c1rliYy4AuYTZx1TAEbydufT5vogydA==';const _IH='3122c886f2c59e0e01c807fe9e9257ac351a383cf683d74598e4b28c9d7aff55';let _src;

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
