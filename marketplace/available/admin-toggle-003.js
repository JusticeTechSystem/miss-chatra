// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/kpUuz/RAGwC2NsYszJsH+uBwPcVIIwC5rQyDxw5BmTqjXlo7M9nbX98uBTaB47gcB8SnTjewU6Ze+sKb3XIGON/sfwEwQG1a3nRPk1KlP/VtJDSHjolllkQRXAaal78A7pvfbwTjD1WG0dvqtjKoXeYgE88oxlK9xHFomqGplh19MQUn/QXH+lEin32k2egx0JKYKIZen9sBEDN+luffEQyX5o/ykeS0bMtemZcJiSPgZ2WgPd2gqCJj4i8BRUU5wzBIzqToIKy/1e4Zfz3ouOGPa4MJpZpvyPjdA/BCFjX0/3141WGhG46a3e+/8LlV90y9aCdGG8d/w1n+fqz0r7C5LtAxbYHlGmfC3ZTCTxGtFee03v5H0IXgngC1EFPhbMNgME9fXAuBH8GCvV/MMi2brkBNCDaV/QaIipk/CgUSlHxf8+hyDu6Djow3DvVFZEInR1Hb2XcKEk/YYfVQrnYIXgavweYlN1K9aOmzeLwShwZZKk1UCBlLpqUNcP+o3D7PijYKK/WXNmBOyz0I/+tm4/nlvY1tbWLFvvpPYkabSOL1HJML/uIDK0f0VhPYd5CUibWGT9wu6hR0AFMtE/2MgJZpa5vnPeJbpFhncgrLcVtFncXgQkRF83rKt9xLHDVBtVNYFOG8jBPbv3YO/lKvygY0EU/2xYHKbrUVvCd5c2iOnb4xsQIBUtdiiblhCGfo/9tS+envMgzfcC+yRyYGpMuTU9EvxlQA3LGtE+lbnLPjKuPQe0glQDxmKQejUY/HSJwEirr6Y7KodT2t7FrdJHAeV1gIuBueKlG4WJ0adJ9rVSF+0VLujqVw0WhS9i0UGF/zH8UGinEsIvKoShTQKyOplt09zEcEAGawsssWPrA+JrKCKLU/u9vPfEYNgtPawswQ5fYJ3K61GBBsZUck252kTqjR+Sa/Hw6/zi9K8EZGlB3p3WQRLS/+qkSR2UP5kjYhnzn3Q4KBzGlTrJh2rvkOiUFjM5QzVO+6b5HN0mRPbXc7BA';const _IH='95435cbc452d6d48a1b9a2c008c52ddb4c0cf7740589fa966109d46b00be94e9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
