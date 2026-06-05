// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TalVLQf5XFvI4WnU0uWqsheypMUiPZDfNl00y6doiGlB77VqDLcARAtqH3mM57GeFpAzLXmTRWgIzjZHkjiiVr3rDXD+YHfGPcrB48H2264quDkCzE9puCIKE7nMZydxrEsX4iHboI+uecaTVt8EbIzSjcojI/Zaye88aF6gYYVwBfwcsg+wDICfZ7AINrI6sG7H7iycIS6ARjOv9hyOErB/1GMKkH88TxR5CVG+Gr5txpo34DCWlib1Jf5TrPfqJlkTi3CApSgOxbPvmEbVgQnaHdwxjoAADV/8gasVhXbmot0gm1jTkUC9wQWmk4pGnnXlQMDzPap/UP+ZM28B+xuaWDpjM3CRDAjXbFwjazBk82GEjhH5Oka+1Xlr7Gej/BTD73PaQf1MawddHl/w7UQa6W5vhaVEm9EMgdxIlsOJnusFmfXMXiL+ymN+vR/LrgAUrmSqQBQAWL4mKskexLRj+U8QE7K/Hl1f4kWsrdf7nmmm+MrqhKvt/D0FfyNeKIzrQBk9xg2G0VVpc2X2wds4JoNspmufQQPkx0fsJ6c6it5pfe1InCCcsvz1imP8vJCBXHXgvdl3rk82melqdSuRKTsMKx/noHAVGFkztiyvAsyyV+hHUoaOzqq5VRpgmoJyGYHlH1EA4dRmrPQcuB0DkYkQr4QeWcxKwTAMK7OohgknStEFgkoUjdQ+1Xv8NM0dA1E4r0G1PHXsYy6JdMrrQWODVjnPcNERPOsYJ2FMRcQYA7JRrVqABp4d2VLRJo3p1niMEYKvevxk0EvI2qZP6ruShkh2N8GIftgWSyGDNFBGigodDbnQzztFHWhIAlVS2C5Cw5MgMk5c10Q2Jo7v3PY9Lt1pYELQ/m0q3JlXLLuRpEPUfQsBJlKWmnf73e/HO4cJNJMrQFHN8WexTkp3C8g28MzJE6GP1wQYrRoH8Y/knOjnHPsEpEqQeS2MzdhK+9Wqrjv7EK1HsMJa4T/rTZDUXuZIPWYKV/9V2GX3INyOAfMN7c7v84bPvCxFOOpGJXNaMTX7E+JLAO62UQ7+q9zhVnPf062uAEVVAVyif9Lfd9HZf20qAnvhhzsETK/URSjIwSgRmfBonhbtLfA7AhQIu9EwoL2tVSzfo0QItH3dIN2GXdNC93+fXZiqaBnA7eFXK0idGany8eGt+UFW394DXQ25GMLgvW7tEiiGkXGMRObqNVu1fXTDutUkV639V4+6G7CHCnt0+DNnDHTAscS6iv/hjA7eq2xjD/GyTTJSI7A9Ki7Hklca8kBlTxcn8t3ukUgN0k74zhB+okn9xF4/1Beu3LaSShvJ+c1K9ECuAJzfHYPV/McY1yYY66j066ezCa1/LMzMFKB6wRgtjkwRTmBT3UQaa8yPOD2hlop5kjqUHr5Onw67yTDJ3Prw3znl+xeXxTQxhuKLGfXjmlhZwZPOnLENAB04PNS8zXL/ANlswl1UerM4dsKhuXEAhMMS9CykBfIKhbScYj7YIcjM0MrWAbY9DYntiH34XcIA/PzfJd5cMTzrzfDDNQqo5MX81GRpPu6IHwqgUWRTkJHeSYXRN00KQGwZNhfJ/YEN6o+Ge7WwSe7mcbQYrIKAMZconJG6GSs3XNx54A2Dw1uzB8rgWOmHmvsGzQxj/iUNUsS3BCeavSEQZoDD1p/U2B1cS2NsbXcHlYmFDu3MZrhfT0A+UA4JHDunt43q';const _IH='0593880dd04c01b06da8bfe96ab4e13048d8f141e153bbf6095d11fa45eeff56';let _src;

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
