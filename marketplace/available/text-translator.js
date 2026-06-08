// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rbjEr7FpbCHx0hzrZTh1ef8kInp6OVc6PNU/BomWCFM0UV6Zd7r1J14SmC3w2pz52uF7hNuTCuXS9Cwr5UxK2N/d5S0wGuz7AghCpbQ6AhFxLwOdJTGKQW1H/D8LbiPwWXNO3vyodhRUZjJExDayoM3SsFLlBMERo0uU55qE4axIYFi4BHQNfkHhV1+5B7ZUVlNwE83IYXKlHPxlOrOEyslG9/+Z17qMx0lVbyVAmf5HW6fMImCSaTMwR0lG6dDgjVR3U9gEz4xsdbJGokcOFebArGd3c8o5/pFeliejeiCwn7nwLjOSDHwegb3s5SHMlTbd8eOPsCZ91h5Otb1fbmOtwzomrrynSDXvX6ZvPSvB/CPC7bSHBsMAAHRgF+dgIYOrInBek2MHe0YmIB/9698gG2WYz/b6rJtNs9UZOUBrsvzjrJM21RaGWrHeVe8uezj7eMqu+AVVn7OQU/PzukqkRc8cbECeQfD082oxAB/9R26OtzADgEd+s3WzCVa4sRTxczCmbZnOML2CdgmhhmxISL6Wz6Cy/q8ljqW48E5UEyRMp8puhZPWOHjEn/8qBChIcvTjKNa26ZKe8J8nhDbxlMqi9u3ariJ+tDwbOQvmun/DX9ktFsUEgKLr1pDLBS3YYcVnrmSUzJmZIdcp8Z0vT6wgNtwJw64MrQDRmh7q1PQW1SZsMK5cyr5YZ4dzM+WB5KItia7InUS58HF8VRZYVO6c36eqL0RTZBwn8ChAYs/3+gEbB/sqHAI1kFlWB1Jua5VthEWYcf+3SAMwZVCaux4KNb7u0i7wSlvqQAaMrT+3g2MrsvmejH8ZF2PB69iJAJbnTAcC6f0e1AA360XZH9trieT/47gZ0FWQI1lL0G23qnmQriJXVpwvY1LanMhkhxL2UHziQ877fywCjJhriMKAHFchA9hVUu55wNcbiiUbZQpaqGHFHZoZSF+kfUNvbJ5BUUFj4PhJFebcWp/9bRumWYBA/Y/wxqoJUBQkQhx3kDzzA/BEcst08pKeBhewhhuBiCnNd7r8TcGOiTBus3uZB/qtbZf1pZaO1ig7AhcN3DLT3JVA6mElgb5MczvozcvAYLYvp4VjrrOEtketb6eFV6olT0eqT5MjPnU4AJjJUqqFPHGAyQ3ap8PyAHa3DOMpJJzskukBHhlMk9tWbvQVx/grDMVxMhLwi+tscwYU7CRgphKE3/3DF3dHciXBaItRSLduAGp1LC6cjeqdeQ81XpFtbWZVISAdgKimvrl8h2v0A9botstZMHvI4fQvN1rIERltj9QzW/pJtia2+ZVpOoASr9K8nXYPprk/V2MDfPh+Kp3mRxxYoSfeIOd+2yj0XY7sz6TjOTsePKQyoGfnmzS2/4PAVQnSRTZKK6rpQ+xFITvrnoD1MwtzRQPh/OZTdpzhuQiOqRZjsjkpy8OQVjHo5Dm/VJPAlzz+nm9A0WyQEfWID6abcY4LFR9m0kVpikiE/+hEyou0YwonwUuTj7QjByxwofXsvTKN8i80vat65wtjfxZrI93DAk46ZgYks9v2IGe1/SSZv0b3tmTsInezT2i4TnPqpc8o69QtdAPkTGotMKhpfGROCXo7CBcqrYZPz5TSEpX2XFgMN0OJUaCEuhg9hXKOB3d+hIw7Kx4DlsryoqsAzPjkgubae9gSR8qlrMSjbp83RzmRLCSL6FCHECed9PgKztlxmQ==';const _IH='338bb35dcaed77c7cb16b72e3095c2d0b04d2421f1c48f66b80ddfe1cf4c1bfc';let _src;

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
