// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJ0UFyBPDfJrP55PQJTSi/QXmu6ixncBDTMRpnYtvi90vO6RFNUE7vx7zp6RBAbdl08V/pf7tD347reyrEjnz/ppfZ7+AW5Kco2lWCPkeVH5JvmHSOCn/sc8PY41fQ5NM1yiWmItG7XlYIrjq3nzacwBOwy8oIHPpALUFm6nzyuQmWUK7jARZSnwIekbLbyn+o2mUvBOobT2IbqotisAzFfzNSeUxt2SrHVPv/cmxIh6EpY3EbBaMgxf1JVrAOd6RwTxsAb3hwCPreaqxYsQmiugGiJcvsrkw9sbOfhEB9BTSv8K2YtCDBqcv89GZnckdj6i3kWZy5/jYRKhAkYmRUPSaBevp0570+1Ca9B6RvSMGxfMyq+WughEVmsO6E7VDZAGMfHOjUDex4qoiQQKXqYcsYHxfxpzi69iS5w35/HyWRguYiJSfx1SxIHU8aRXlR/atM5TiPsYD3QBKjrSnfqDioyGn5eA2xD83W8T5nDK1PGuh5VlyG0CMwfKvEslIkmsBB5DBLvVYDcBUyGWYG1Lw+OM1YLb+ywmgs38LfJwzKQC8UFH8P3PRKPhNg2X94LutjPEJQlNktFZU23mvFFIt6nRQOx7ui/CS1kl7PoeWyaVd2panlygfo+yf/Dc+jX8ezHcdBKZy0OF/mm9CMyAILlbemMlKiYGTNCZQ3y+1WU4q/l0Ui/5mIG9dhqc4slYmjkbsg1R/44yUOsidrI96cKmHqvzLvy9OQ/PORxllT1kUNeBcJd5/n9nnbZeBMNvMuWqBWo4HzKxyXvrMUiRgTkyW2DK/lAptjlUwTMNdBYnZdeX5y4mN+VvFNm8UWyCBwpOIsW8Mc1qvP8x034zzHFgsZAibfEjR4/aHfgTh7kucE09RaNTZoCjmMTeQhjpr8rimC/OQC9lD/YeoPm1O6ZV+M+k+6dRPVOndAHcow/B5l0/a0H6/dXHC74+HTrc7gMch6/165F9tx9Sm701w4JHChKrVttG++/97XdCsSySmYDOPfn7LedXvuiQkmrE+f2AgAPYWUMyAIqPoOQIAS5YC2DYBxFxWmkWeF0ZxIR1CAeD6cmCunfp170kJFcFK9HVcg2uTesnpput6aM/Qe8Z+z2CqmiNJzGprcE+vTxmGSNrG8mUQjNl8EaeShkh4MwqGFHW3xo9SRKQc7Hy1y5C5ztddIJs0py4DFV8knbDs8GR4+YEMbMsq1h5Cs637NeszymV87fUjDf6VVlFv0MxjkLOz4Cp8+i9y+33unZOiqobNBrmYeXhCv24Wj+/aKvZQeAw26KxyF/KGpAOUif/E/mxn8XrckiWHcu/67HCVC153692w1Ut8jfVueoDf/f5r+X61ZtL27HhPFM6vEcM+Ne94y1cQ61WP/J6VQmH/jaK1BVsL2Gg';const _IH='35b0072c56c326e091f49e91e1485710d7fabfdac7d907577022e622e032487c';let _src;

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
