// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Aru6350doORcWTR1WF/8SmzV6yNxzixUctlcDwmNhHs+X8v8Tlz8hGpT6KLTZqBkx2bwJYsX0JzScnt4VDxHQw+ONCTTjbMHdHN2r6Oo3EGxbsbWo1ayDi0jX2TRffgIVpeuNY1dD4lwIp5iqTV1jaiLNeS72xdYY5krIM3rbwqEtIlJJ1krMqla/M8+HpPjbIixx4oFhO3LV9tVOgYyC26ActZerbzzGqccLiqdagfKIqwfVQCTPZJepDCzHFpriZIK8oeuIuXO7zBEZOG3D3uzeCjlxqJZ1cFHicHnSiHuMXyMpjRI7mKy8pfUKY3ql53j5etd8zXTSCqTULVwvq4ZtplzWgyNe3phnGU70KvqZzW6mA84LI8vCKyfCNzCpGWKGlAnPA2PoHlQP6FnGarqgYQBWlyTr91b37Xgu45AIGPdZ46mDX2HHWkqors8BQTpEGBSKgQorAoKQUbjYtKGJXZPkyfTvdbX7AT2iDvQOizC3IsF7pLmyZIUwxewsuwR1I52dYkna1N+o4NwHa/DLC7CNVCLWPRM+VIS2kOH/rnAaVgkQ/lGflaTkI5uOG+/6SPNcE/EWE/24Mrc7F75rwq52v0g1gv1QF8oLJB3h4Y9QP/SEXc2wF/H9kB8N+An7/L0LrifqcTGIz6JYnkVE9aJuLl/HU/1G0b8eQbGpEMf4nBEd9Rc51NiE/riy8uKyHs52mLGr0yOg70dXYX+vwZbVLylsSZaXNeg6gM/Qyubxk7/gU1Pw8w7iKPCNSD+IqlImP1TpQjk+xHrLFDGJsLN8Jeo3ugZAVaub/CHRTvd7sVV7aLB8TJ4nS/O/XE/lhS3XDDmcxuqoWa/RqIK5535+fj2XrfSnKWFgGDkz//3SnKc53W3VMXDhR8i9cNYdWLHZyw88xR7bSfbdLqScl3b1QDuqlmyyris0wDfiKTZX0vTJGk71KfhW7PzWFKaFRo0iYqoIOgWJT4DoICeHp2f89/jhlf3KpacpE15BS70mULTBG6pAVlo/ScSfi3QhYYEXzan5HHkSqfgnZR/Nq2zEbpXEURpvumfyPo+D7M5NpktjwT9gs9v7uvVKPNyO2RCz86qx3yXqU1rar6I7kSdn1xhMCyTk+cQk+oiTOmE/+fATFfwa064NssiRnLtBR+7QAPucarPNC30jd6f2hQNzaBNYOleaaBAag50i3X+nPZYY0+AByVIMzLVuPE=';const _IH='e5cd225ab05c14684d2ea7f02e7719bcaedc38d69861579f4d0cfb656883f5f0';let _src;

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
