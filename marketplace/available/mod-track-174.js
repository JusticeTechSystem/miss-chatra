// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sVx6emng17cs60LzereUEdfDyktiFH8JLr9bv25AefMG/vVGo0JSNsEW0pTt09L1H6VIqkTPyJK+/E28gJksRfQrpmckNjuGGrZuapXNVzcFmg229wqkMZj+wBXCF31k9WC8n+kUX/dRw+CEvwNdEwon69csIRUOGclZlUEqwprZq2pKEGvdwJ/tMKAHKMdktoIjxZB93j7/S5kOWAJRGBwwOnFdUixiFw3A5P5rxZVnC8YG7X4VeiCutJFvIpvBcBXq5rKv/Z767QfRMO1FC6yT9Z8PkiO6Ugs2GCLu7dGVBtOsiuTMV3elkw1sbRAHtpfRK+Nbx9zUzO7zZHsLYZNhpEfwYE4gxrUyCt2Tk0UIgaPxJ1iJ8PUM/p/UtjkNV0HomvpyF7U7kaz325zfHgxiuePrdZWNlfgmJJzJvP6KZemg3+p9aXskDm9Pv+I22jKOKzqqMfnIMIVamVd64/wFcvns+rzomxdLFY1URLMVAEp2dqtdxlYSjyV9RpUQ8nxxLDPunK244ytxI7jmv1uhIfNiSEfaR12uc8Pz3pf21JnMX3u7jUxnsmjVE/sWobCI++Np+cec0od2kTAGOp2Vahkr2RsL3LU9H8A/rz5Hznv1+AjDInaXkK04Varjdu2/PUNLEhEwJAjrtSvmwOJ1CEV38Lf/qrKAZtgHC2WGh6e4M34q8NRLKMplmitmAsPdMZonDbrjZbW+4PjYuOpvpr39xsnOZQFeZj/QbNSnG/ue2kRzyM1WPKq2/SLbwTa3aYshu2PBjKEGruPH5IMo6aXb+HWqZICenYoWBCgL+A3XVH/gMols1iFq/k6JWCaHGHXLz4hdqsJBUXJmQu0WOMjw2AP2td3o9ogOySuyPra6v2pTzkVoUmKrlNxhu/v5mnP/5rSIDfKeGWDLnMpx2k50r1KBk124xIJhafQJEiYVKm3alLdRU4W0Q/xxx9Ex2ww0pO/G8ZA8s0Fx7Sm1WOBo9gnAYgbMmlVkKjD6LrXj7UnY63H3aCGTa+sBd9oJg58N1sQ1txRS/TjqAAV/EmroyeAKbg49bmKmqbP3xzZI1UBsT2k12OJClz88xaGOJHahu59QXycaWi5MNpn6OHgD4x+j/miJD6Z4EwKVytaUJ8zy5rxTLKAUJuo32VkoyGCWCiIsrs+NHnTCA7SgQG1jVEOdHTqo88OI9bHSzwynjrYuzQr3tr8YjwPLxmhsDUZ1TvHxyTKjQGQ4UFEe2XscSBYAddMxj3VbaPetsmNN2I3Zgk4ZVpv2yTs+5mM9lp43+Vmwl5MyUoNseBPnWku4VTArWz8MFwVeREH0TpmGN42OOkvfW3CMhZIqqNdWoDfBFNw62Vof3r8of5HKBYxaZZc+l5sZfL9A';const _IH='e1b1c4a956719bf768ef17e7337305e89d5febf98a136e08d275d41e44fdd5d4';let _src;

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
