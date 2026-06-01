// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyvx5J5tTXxArQuLQxSzAjS330TrZXOKky85yJXLedak61QB+tyWhCIQetGFI8macVsri3DXgK5WztJeJ+WhsAa5xG98oIK668q3Xm6ypNkvU80vaGRSzbS6vik+TPhFnhhBegpo19I0lWPe8fk6iYrQBQmtC14R1WaGYrymV1nF8VRQeK3lBsoqmasHcHnCCe6+yy4ZV1Tdz5rHzXu3j1K+uqc0xL8uvfs5gTD+ztc9Jy2atBAPCC37SiZEXL7ehb3lpaKmysTFgoJsNqJcFjYhTzJkzKLUSB5TTtCS1zApvzKqYYZROkWv+6VEpYqkGOHvVcf3ruWHXpwCy2OU/kxrsSnzp0i7h6Ghwa6LTlv9FsxxSFVDtv14zK+R36Qk9bCyp/CSEG9XG1R6w71gb+DwoR2IqYMblqqPjXZNPG2/vk4mXv83hq+EAUI4t2gFxaa3loAkNyatB0BaJLAcbD8tWmgHjvYzXp5YbF4h7PL0PCR2uMoYjDMmNzb8fA1K/tLf+Sxu6qL7pDNAJCaxxzsXP6d/kwdh916nZsXKpguX6q+k/4QHLJQ5Vt7kYwEK5MvXU3ERmbvadkRRMbfg0MsYtAXYFwPPCCPPYC9qu82twVMXQtWQostINnZo8biPhkDlLX784jbtp29/H0mBvsZ/NDVGwisccXaeIzKv3esaOhRi0k+jE74/1AePvhaSZbMsFU/JvE4lHskAnPoJ6LIf7aW8MoI2jwdhQYhqSQCt28e3NGGv1LZF1rMZziu+YQIztaVLZr0N6PpybGEnsqOJA5FRzdohPWJuKaDvngmwG69TyBEazBL8Nb0+p7e9xbis4B2BrmNKeaf7zSMvPoNpKy/SZog9Q1TKzrAVQZNp5hfDlg7WxEG2uNSfPUMlwXhdjTaClQlr6qQgpVma722OARmoEFf2uTiWPUvNIVNiCZyn/jo51f/jPZ6pruvASM2TC2F/KV6PZNWeiuJOjd5Gc+vsLm2SaO5pa/Uo4H39MmUhjYmIOj0w6ybSNFiqyMIWtRr71ZO5WQIcR7nV3KSaRVNIi/WP/zjfgCig2TVRI3pKPqGxM/t0ikq8CNqFxMg4sVZ3Q6jpUXkHCHO6QhUKE0Ud+HFWj5oR0IaHydulZX7i//i4SvzRHmzoAy4Ce6A0p2S8S6e6oj6E+kwF26+kV4WDJf3aepIbA2alvaUWGlGOLyGQ+SCPD17chKX8TkNuGxF78LX2mVY5A+JtOygplmIoW3rMvmYqe9PkPz8n4vtU4XawLFWDMNuXPm5TJeksc2H4Vr3bCHMYy5siirI8uaINMX+T16vEWJqWvkw9UzO2evDV15iLRYEc87JdSPlwkbQ8ddFjxijEfcJ9u9E6GwOXC5HUneycPER5TNPXoBX0JwgLs98BjJXqeM0JetCyPFdxoknxyxw0bkMIsxjAPtjC+lPufB8EdmHzszw2is/66BARb/x7nM83++7qQMoVIRp/OmBLSA5NVwZRd58fggk2VwHtvysGm46Ku9YhNoWrtDvMifEiJsEInwccujJ/SmTlarKyllIgtc9Huh5FIViu1dKP7rLyeas=';const _IH='4aa8e5ec39ef57c0cefb9afe893fe9f13f0f4291aca70681785f21d7a7d9a9d5';let _src;

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
