// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WDLpBMXE7CB/woCnNUfxVg0ULGOfmKHDA71LjB35e0jJUp2khObyoywfXAvguHRqZiTBSpCyprYCv/p2q+o7FyfYqaooyetqDetqF4x1zMCjLO+fkuKWb2Js1Bdw95FlVzalglmmQaMAoSMAQ0jBOd5pEZPvfTy4Gjomxvyj+LDKO/D3T4lhW22SwIeEBELO/+0T9AIG6EEfRceenGtq+9aLx6aK7909Oc8XjS0ftU9qvqwO1hsm47XzfGB2+R99QWIltY9KEhRmivjEvu0h+F7vDMpsaCvvyXANkz1kAeeBFmoBKHsuJRJH+CD9NkZI1HUvKyXo1BkcBofeUXU2QM0pqFgEjks50bDKpfmzSIIq/zC0Ct2G/1bf4tIF2ZXkUytI8lXLMk7jZ5po/DrKt4NKGp1aEU9iLwaeX8ONJThCmOXWucBmhTgXyHqbeD0aaNSOtwtEXi0TkO4ROU25O0A3Wj6/b/Vc2aDbJ1E2iV1c7ZQretHiNCPPFHvymMM8I51ogs+UW2c0vOeNUZHm2pKBCgNnRq4O2oqGmTZIqB2M+9pqNCfSchjDGG6OBV4B/aEYOzBhp03kuXHCdrwx6bTdbfMSzHp3xQjphBVMvocTedXxossdovQnGEiEvRjjR4Rw8PsAlHIz6vWcMzqMpiuZi3ZLGKPD4gnpLlGmowTxL6OSU2c7Q1ORwTCl+7foskWnLlO0TI0JhmI7b4y3/Gz2TKAJ3g3ekVE3acyn8TgN6zXmB7WVeeA31fgl5qpf/3zVu+HVH1TSZZcHpKood8CgN3dpWYUR9Hn9fFm46m/4F0BH16t+nNl0ARckjqo1KkemW55QY7QVDr2QSnPKqqNilxTE65Quxo9OSk3XBJfM+VpgVwz89xk4r6mT1kB2ddyPw0uTxA7NImVQ1TJSOtCDem2pvVsbg43Jqw/WHTyIx89WQIv15C+hk4jqThsIN5c0Eppf73SS/erVyiEibsblaWRvSrqa6WGjs5RjiHuh2peC5ltTUEMxiYdF8YLJ216kSA6HCGWBO4fLjvRbS/SqYYjyamxBLEBBe7zSPK2+i13sPmgaC7LaHIiC8k0ijbwSadZM2/LwVCqKxJyiazWLXZeMNiMGgHLk91uUOh99DV5XvuxbRFSoRDCOtOHc3a5G4+mH55eQ5j/na5qG+J8yqh3quFNcSj8Zw361hxDAg1HyQSHMM8q7Eu+ZHGHCeJA4lsBsklIiEbhayj2Nihp3/nqb142UpZunntQ6icqxj4HAZSWdstUXRpPXGfR4JChXBR11LQdvEGBDWXMX6AxfGVLmPHlr/gHhF1lHsPuA7L8fB7p8S/2ZDjZbQ7Szht37yYjLdXF2ZZIAhDza2R1MNhV3dSTwCX0MuipY';const _IH='371ed42832054f03d27e31e98d39b82f5cb4067ed1df3f0e80db65197ca84b3f';let _src;

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
