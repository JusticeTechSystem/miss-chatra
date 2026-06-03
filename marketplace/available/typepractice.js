// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXRPBkx5f7ggUegKza/ov40jAhhFxR+ouYISPADa1cixBszY1IaA1wPSFIbhhfvznLzXmxXhX5fyO8jdeh03xV91AkYRB/NEgnn8TZOLRl/XVgk0Gym7zskASDdb7qA3Vm1YWFsQNpUptG29FPYnvLNJll0Yo+qSfSorgVtIC6Nh/cv+xeiq56chdzk16YoV5jgH7irkI3+CEP+idj1iBQhKIPphoBjx0O6sCq6I7W+cosuysdQEBNiaseeORnyWZMu9ektbpIBPg/Ko5/wS3mx4c7saNGy7YxGE16WT5RrMPqMtBFtWYokEZcDZDhIjbg0unJQxQlt1UxCVRRmowcrsAmJauuhZh4RSFhlxzwpk548GMn81TT3WfFuI5tMqqTOogJCFsdOZf8LuUrLqwDm/LSte0Ip30ioJmVAH4+UUTInSlllasuSwlKib3kshwbox69dJN64YZSvCg031VnNOBkWRewSFHt64i7HZkJoSX6PNYIXzDio/dz1t6GIJssD289IUzm/x0yTVmQf2s3OOFLUXa6jZcfEz9aOk1WIvmrywaYr1YsJvQ6k0dZEBmaARaoGm8jy60ODDhzLaWPVAwsQCevdRm9AQrvSgKDXp/xOO9F1E/mZDPMKoBSPxWcgyn3NTNdto2GqmKRWCR7rzdpO3rppH23WQp7F0aMG02Zncm6gmGNm3E7Mk+hIYv7RfCWhMVxJjpkfQx5E1CmzKAy0Y4kqPg+eY9nJSmMC4QK5kZIaUMPGvnKsUK0McnOZXoA+yCa/SlF4ON5ThUfs6CvRUc8ZljJS4di0Siahlx72FSk3I7OyrTJAOHvlnbOlNWZjjdEtRemgIm5rv6p/MroA/IzhLKTFS531dmBKzTkimSfCVvHfkWyk9nEflRzezLpK/Lr43ngpYf3TkEg17M7FyQJ11V1i63tjzypHruwSaCWQxYSNXtxQ32PfWkiYCE8m7Ph5kif+MHHHSqxHJT2IY6PDn1yxL+pQABx8dpl5I2soKaZuSa7IhaS4j6IhelciyICGiL0VKXGjQ8uyFvpIlJpbghPwIkWngDvQUwQQAKH7yK2zfX/T1kwk04JDV0xvAgjpVfKCEtQhrvhwPUPa+64RtiGMRM7o+oLKZ/uMdIxoTirkwO4TDNxYQ0MLtlZYjO4NBpuNNwkJbax2w1yxWzFlqJ4VX1uhHbgHpjOTRIV6De5Joqft+Ldak1vJ802Bt';const _IH='0429e86b54acd5f571a1afde0d8eb5ea093f749f7433321dfde06534553b4697';let _src;

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
