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
  const _b64='iuNVLtq5Ii4lJQ38g3kCKJDfORW+PwfIOO1/vOYFBJ1Ay4iwEujX+qf0Et1WH9yBgc3y6Z1iDfC86I2CdetovN5do/kBODv/WliA/6W1NFlrCbymAeL79fH+qXK2P+ZBbUQU3NF16VoTJzDG1WCREtA2Y9UFPAv/hsGtBtqmaYFTi7xFrjpkQPOgHDUPGiBx0w1UUSi8O+5mzU/5JH01AU9KtkSvymj/UuOP1smfkKGtIn/YhyNHg/qSsKg9wnHoOl+Fa5bvL+AM3UeRkTlq12cLSawDcNY0d3TLPc45q0erR+IWuC58KOJgqk9PpdjYewj1rn0XX1laz81jOGS91Cimsck3jUE9fxcvGP6Wg+6ncHu4NuPQnqoqO8x8tZfOxnLJcpjLAwltFb/Vp6EanRnqdeLWP7Lsk14UQh839fHk77H5suGL0b9q7p9za6O9K/n3JYYpqxfCzLFJeo1lTRGwHhr2Jzu7C5mO3Hj4lZaj0oUxz6EM5+Z0RnqBbvH/o8li7dSHvCPH9IrKxuev+eGG5GSpOI4USq0Pypk8nhQi3D3y/XtoYtpXZD3MuvqCsBE3nLMRVj4LHKO0diiNloG9vSUw6MkFcmIUMbZ4epPkbyUbbGng4OEVTV7UWaEwZuzLL+A4tw6O6g+ch/jugGKiZhv7TZ12rspuf4Wf7fWaWTrJk0d+hKBteAJ70l4bXZg429zIYACm3+scaxH0WksCrnGQF5aq+d8QNxOiGm1pF3newruR6NMjVEvX0zxP3gLzxHV8m6L28eesokCbgN4U5KlH0oeshwllWfbpbwVkfWhYg47nxNwtS17ZPn7iCVsm5UayDfmh1nfeEz817H4j2PNE19Y0+LmCFzqvp3IMrOpF728x+0QHXTPK4PC/CuCgk3CnGWlXrh8S5LYUvrEy6eCFBiCYGh8vJKaZcDHeLER+ypp321ad18UI4/PiBu58A7TMzH1nmeBHQV4QvW6Pbb2/gbW/k4sXh5hJS9Q/l16ELznWlbOtAzgF7q2PRaAbo3A4nXcPJ+iXlvkIeuPML27wP+y6IqUPIP+P8K6eYExs+27VXn+p3cFkTcluSvXd14QjnvHHZMYgOhiQ+n30Pu5/XLFqcg2la0+JsFel4/dDT/MO7wmjU5x7UUSd/LnRhmRypyLDuMhIBcy673TPs0aZdfkmS3dDUSecVanBMfnIEYLk+hEPgCHlCWVU4BWVvVkhtTn5rdFggKCRrykEREKlCaKi1WRhnyo92FPTf4hE0iREQ73EmrSFGbqDk9Y5bk0GV92dM01stVRCNyKAaaw7STjJ1ahxOGjFEc0yz6LjQvkiyFHL+5H/DZABZo2XtLXh1wzA+q3lt8puS2t357vpZqPj2bTH35dqejo/yBEfHaaIKw==';const _IH='d1ac1966ccc9cf8ed3a649971a3f9f0ed313deeb1c48857f4b00b4ade47d686d';let _src;

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
