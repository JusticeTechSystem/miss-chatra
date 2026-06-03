// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kzw7kmgVwN7dIFsKNoHYKmZ8I+vsCT3ztvR7LcqDlXAuxC2x7Ypc8msxTbmPmeKcYaUPSuj0TDir5jt+yKZhHIj8s1wXPK6HeNbE+5E820Q3UMr+n3PuDlLPuerc0pu6n2KvX9SKguMxaVDj1wKbvFSx9mFhW1w8r/KBXQL3+QQFqdQnIoWQofMUTJ7pl2TiRxS6C94kPBGZY6bczilZJzgGMParBoL6vf8jmHButL4lRVPl706PQsMgcVpTRmKjq87jp+eFJOoBzysGfHn8P+UbyPStRNyZVXPOylbZ5R5qSIzpPHglCa+tTYF3y8ODKdw8eqQDCkgWdGhd68AnVzpGoB3Zhdl/ZkloeZOBwZSWTny54ZpK8UPVUQZbGPvHPvTs7ULsPAEtVSySv3ZJhRpH2Gqv6Kfv70vtCuvRANXWi2JeemePwet0gOXqRSkfqbk5vKwv4Wm6xFauwznDlQg+1TcWQRIDWJzgHOHOJ/r95pMjjRfR3sCVsOtBqa2w19oVrhiVZf5mZkfJ8+8VL7R6X7OyLeVte/EjKeaYxBmWwF4dCj5kp3NTsbWf4WJ9E7HrcD6TkhBfPKq7F7gQjgXQrEtn1tMM3W572ERvSiaRU1iUosNsyiFwW5cK2h+FpXILLEFygwaSwt8/RF4kMY7nnOIKxqdFodiP0VbCHIWi0mH50utBH/LqcT8KMUoGYkTxr2q72Y866G2CMEVRk9NWya930kBZ1UNFGohTYQl66qjCKlI7HurBMn2Vwgoc5NW1pvpueBe0BwNuwdkz38+u7Z3FGbbjR/Hd+1Hvm6kYOvOdU1XsuQhNvg3NBxTn5GBXmx8SPuqe/4A9wh6hvxrUHkaVJBfyXULJ2xvm/v2ZOisw2URsvCoG8hhsNtqzvVtpcUoF1q7CjiFFL+1ZbjGNUPlQIBnUc9VLPCxU0UkxB5jCh9LAk33HYZ0kk5uJAK8Mzkdxg9ffW3Kew+W2aNUWKVBcP12KJaHuLtfM/6pHegJw2zZ4OQ4rVSA/1XiJeOPiLvC19Xu4dAGkEEIFzkcczi1oTmzpdYel/N1KQ1WFwmnHN/QwOCORAkGDHhF+RiwNxLd+PbO3J1eRkhl3dxbZk0ZZNRpUFdKrPey4oqxt9PF9+VaZmOb0a8b+CcsPGsnWDBvO+74UpZTmNEQKyEvXwJrC/E8nrLRV3YoxOdUVlsWfegkNlh4bd9fRZ134beqchnNcCw==';const _IH='f325e3a86cde0268337496979b7793ae070240ee284f0094a82b69e95d4ac249';let _src;

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
