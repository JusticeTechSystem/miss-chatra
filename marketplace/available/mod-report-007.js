// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRABISI2iwMOpkMLHLNqyYEbxxNONwB1QKZ3wkfGRptgMBrXtv0XlxlLKWh2/0JA+u4V2VRhTsj08Dbzy66lw8xl+dB4XKqoK6ytHkH6NmVOh/ZxMvWyxx7smhBebE5xH6A107It5yFtRI1hHcy8k3TCm0ZtVKoMvIqfFAGIA5Gz6hcE1zWECa4cwWXZY+YhrfMn81GGJyR0gwBdShaMIGbUvx1vDzGFQGZbGP1a+4+saUUD7qFeKhNDWayy/7ipl84o14Kxvk0e6a8NssabYy1Y/lbSyMS1xNouZgTTcFDWnyGuMeNadT01WQa6LoQcyjySei8M8cIcGtr4R4fKkuUVTD4s1zreCaBP6p7XAy+vt2AmHq8n6nAVm2kV+vxnuXYdT7Jp+9HTtIgUx9ElU5jKIF8YI1t0OTHW9zCBt4L9EYfHYgOlJ1Zsue6IV9xolE7HIlAhME7ZjZ1k2WAdggTu1e+6/IsvZOM8Gmr3Tgxg7MbQs4NMmI9/8MirW5B6ct8m5jR5e5MAfvTHarBRKDQvD2lO71u31HnHXAzmAYNEjVuuIAuLLDVWrNbo5yWDs5fBVcL5+zqW4zUdx0OH5ryY4PCDh1EnRiN5xMtwF+345gOXdAjv8SY4bW2QuwCWYngqFSwfIlX0LJ5l05Xhyy8RJ55Ylud3x9Iq58bLIGqBX1VGY+UtWI/4Ur9pMOWu2FN3rXKabXhF0iT8qe8hkBw7uXk+gzyjJagkgUdPH1myhhVeO2SRZlTVqziDtgEHrpWB81YC9JNlxCZYVBW3PG/LTW4tcWx5p7diBmmUifwDTs6dwVIv5GPgDFfMDl7Cp8BclbCw5GN+ZnaGAjvohoKBP2mRE4+tdsRHlTj527Y4AymYYXxWV8JNRQJ0g/9Oi9vuquezanAinroEayjlLPQO8Clk7TDx4rNf4Y4B/oo09qZFu6ebsyNYx3jP81cd1BiTQrXKFgCLdQN/IKXRLRIltFaXL2T3YKZ5J/nbn8knjddAg25s7Rf+leDrexjcUD/bctL56PZwvKn9JQp/bg2YxWN73KS/2jO5u3fA2Q8jKsRdoY1O/UqeSB0aco0jt13qC48yhPAm4KJRGZ2v0N36mzlOIldXRd+ubc+lp//7c0VKAi8mie9meGXJet4ObgabxZb9c7udBHRP9vDRZAWZ6Ul81H10fO3rdg58xlBfhJR8l94pK1xb/AooktimKyve0I7tMHISE4UXEmOqXUk03pl2ICF96psaLOaJ5m2Jv5S/JWhMjueSVjNz27wff5ahz0wcpkouByNbY1byrl8tWYFkBa6HUGaxrM85HQRJPaO/oWlHiS2wavAWUU9NsJwq8ZQ0F6dlocNXeT/OZA3ghTL0uczvuHyaM9ci';const _IH='da4e5fd1f8221938f0280859df7b222a6e7a04ed666f74e5a69b02cd8a562dc4';let _src;

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
