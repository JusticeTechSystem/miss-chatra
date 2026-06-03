// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iMYrh0+Q2uePyX6DN82ztcRB5auRcK6yhAm9i+ZfNf55GK69DVbQpG63e5rFIfmhjVxC1Eq0nCv80y6OYzjnBEOA7AxAkgOWnYyReZkSgt07oMo4UA9IhVCrhQXKmHl8s0to3Ec2GkzF5g1kAxHs6HCxpUNbaorVa8D322RNMg+QcjxnKo/Wp63mkyZIjfPTIn1121NNLcZhdFBxXp+0+LsE4yojKkgn70gNsSE07fZygqvKrTGkT3j0pfMMBCQ8DAA3YusThz/B2VPBaf/msQUrpmAoQQaUErqZ/zxUFx9hw1i/xJsnpjck6o/bMCJLeZmAz1paDue4Qx6Xw2AhN6aOkvh9bUOJ5ovQz/E+mlIx5QUVTB7WGbf0s57NSQ5lI60ahMJQx6mOyV9XBEhxHVCulNlYv5r67FFHo1dCsOZfa+XMwcqm5YfSaM6DVLAQ8rGNDN79vs0FH81BHYlYYQ7vfmNAlr3+li83+hUAo0J3AYAQaN+QDtqaTbkgSR2R7qGUgGF1NkkRZlZRQr2JIP9Dhln8YZxIYqI2jVxksAjxseQy0fPyBv4NFxwgKpJ9LAgVNptZCiZbD5n2PKeMbV2DHbJpzWwXSZQL1IKuVIa/LecTclOtM6Lx2kF6h0hUxeZPf6jnafiR+DHiZQ6n31w7TRDQEZsLky2L8jaGDICOVvdlkv3ZJbmRkwxJ74UddHKQ5s+XHN57DlrJEqntr7E89sSB5gND';const _IH='bb9b9835aef83cbfcf2d5a98a4dc7225cc19dc8112df43ef8af4311f5207c1ed';let _src;

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
