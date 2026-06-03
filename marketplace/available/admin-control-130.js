// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rhrl2O9O+E/McWqLlxrYLWudh9E+gjFmPrHyp3qD5A8PHvIlvHkxdpHSTBPcPNQox2Jbp05uaIzKHBakxXUpjFuRlm+/rNjKLqjY+hSI/Z43D7CfzIaY2B0iGG8i+lkfA85lz3JDsRYGO64J6ps62W+20Hb2nlneQzDTixHYCP+rWissLYw7L3h1vM30zWCa7gcPI2ufEZtc3o365/UN9BXj4OA0KOPEc7TjFggt7Vvuye/Gst0YMriW9ds0rh3JrAcyhjgKOxblJ5dyuypMiQ3ORsUNQeDBEu6giuBl1J14pBEDVTtPP5OlHjZcZBR/XNsK9+FxX1v7bGz4Xwr3BSUsMUUaPELLlTEcAx+BW1eBRLvkK1bkCUacMGCmMYTh7mJw+7L7pZv2r0GcLbIOgOkcFO3yVgFzjZHGFeQIi+KnabjOCSu0FpM+PQ9l+FvwH/hk+w8TeXvOpZNYxyYZzmXthS83r7x/fnlXfo+YIhsJO8X2/s7NkEpCHpXz7VR1suUm5hUjU4RGfFF+ckzXaqHTDRdOpMl/0XpBE1FeE6S+/mWymdL1NXteEDluVZC8W3ek2j7DUuMEZ1W/O3sASxZMHfHLgmWmlyGXQdA8M1kauIZ5hYSbzrC8NaGaVPaPfLInux+hvyGVFiVzwJ0UBQBrNB81YHY58eIeuC5u+aUVyK5LUlrbc2artLTWuu62i4CmTjZnvnF4dvDE6E0n7QGngfU1JgLvL7HXHfuU4MhbkHGx+vP44dnhEDeyFbFF0SEfOCOO1rtpcXRLJ14iIgF1vt3mT+m/rZ9vN93Iq8FbPG75/61qwmhAenyz17j/f4lub8d9ayNuZPOrjlAHa9L7Hm3c9b6FaTLz5JpMeWnTykUk7p/e8vG7ZdKHyXurA0u2jCdJQFP8S9SJFKvPr1lsAPQhw8Jc1uCmWGS62VsKYTRAOgGewUs9WXFd5akdBScTbtPbjdHdtJ/OJEV38lHkmDYQXasCbKYaYMNge6SoKDlS07xy2pC5IK1/QhzNxee6mFMb5L4=';const _IH='c4b8f34ccb8efd094a5686a07f7a2241716c8ac1533fb75605d1a945d6a91362';let _src;

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
