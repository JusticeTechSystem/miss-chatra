// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KdQIl1PpMUedC9dVDV6vaMkuNb9sgLSkvSEF/XdPbO6pTHsp9ImqV0BsfjSut9SKyAPcloJ91czxWgfHWruzKOjWpyW/klw/xSGrMv3LhdnbtAIarK/KmvG9gTNuQcLkRAKkQ/P0Fhabf7OiY0dRnvBEsnBP79wkDfgFAtaAZ5CZT9BdQcYlX9jMZSqqCepkZX0Qfy0Sjq9l5dDvbfKzIKz349IMJx5R56bSf3ERDvLQv1vRukYw6uRzpUn7sOmlSpBdFT35eDHi1/aweke7soxqd8iIUjNEVL/OoON8FpHYX5M4FSeJ7XRNv0ItGPYnpLPcKCo3DHsFzpHIxY736FeEEYhmpUJ0aC8Xa6QaNTA51gxRjqNuDMVrieObCTwIOZqv1Pib6MJ5a72EoetS6z11yrZg08UlmrH1TNv3QoM17HdZhlNevRvwssX/IVcIp/pKnJ7m+aNtZcrnMM8ox/dE+u0SiXTdMudEdAxfBS2L19jNqVscPn31a+EW6OpfdRFyQnaJX/ZHBm6/luU7m1R43tJ3HsXo5YMQ9ytGJACTEyWX13qnuonXy5g5KdTUDbvdKzV6OmrTcLroOr+B20Vsm5stIDlMgMoEss5vkWMguVmwjvyBg+2XHQjOaCJgDHINLcpoPbrjqcEGXLWuutUF1bjTed5x6kE8szOGr2iq/NwS79OOfTZVDe8QFV/jAYBR5zRMy5aGCbjtROtl7rcjkl1nZ7EGhjW+cdyfQ9yE6vn87p0=';const _IH='27f3294af9b10236c35420d413465587f9dac752c8112e034226a63b9a806a0c';let _src;

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
