// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8pp3cSC9gfYNpuImuxWedUP+fXrqimLCIovGn0z+uDo7WUJTu9o5UHU8rALS4mn2CJJ0Q2KarrVQxZGgCeeTTLUhxfDrC/AgB/IooovOuQwH7Qi98Ku+pxbneDsdD7Gc/30+/vTBLSXqlIrMNYEQdYVcuEw0pBM1LNmMWiyTAUDjQW8MorzVCO+kfdRfCq6IopSf+dEqEeWWNUbIL0nUkt9/D6/vCnWbAmJEbrqYi4AiqJBQ1bGgCDtCSsdqbAuSXGxKlxFPa3FUuXaqVRzlvtEnCa0Td7+TfBIvReUJB1mKPaQ5sDjSY1yETOeSdTyItfajqXrD+uF3C62vim0mBd8Rbp1iVo4HdJacqnFWRmWBQmcZmFzsuwl1cM29RCD11INp9LbTX9F1XkQO8GhJqd8g6dceDR0LZt3WcZM3mD9U7RxvB4a3MscSPFp8jfKplT0pwSWQKaM5AsbxnY8xsOvwhewWT++Y/CLeD8SKo54Mjn31iCyjeA8yl+vKVZGb2m7iRaTqegGqxrnwveNYCvi67qWAJNMKpQwORQzjknzrhZh1THuQKTfkmZBbwZDGkg2KPVzqyHMlm2KjD2N9HY15gxvywc+Jf5wH6VQ+f9g8ba2qgejYYfAOHIBbMTAyVqfGjnVoq7Yp3B2iEP7oTFSZ0ju0ybssf783LyM970IclWPLpYEIXn6f/E1/0ga13xZsGhd1BMtwOQS/RkQb6gkDanuR6ptHwvWg0Fp3dV7+ivJOlGEMzzUN/qyittANnfdv4/+frZjhscFXUvzyT0U0o+Q88z+IHnokCOXaMxmDAFpBAGwNy9yvd8UMJXx/gJvLUAfpmSeiQMaYTFLANHfKepr6Izl51lvXD5O15XWeH360fzwNMdMpX6nJDbKUkXMpROqozeN37p9aWYC4YsK/9t8jWaZlXZEeLJbly8mbyC4UxVJwvmm4cktQLBqe9diGj+Lqo+3VIbX0ro4gm3lUQMJOCKU9iqz53pqZreDYPcP3R6MJy+wunMf1xfNcGyLw/dd6Y3gT7/7wa6+KoXDiHMgixpJ+IZ2g5IxZE8JTfQI5hE5mM6qb+Pa66iRmOpNpnkuOhlMPg7uyRk6pJsdw2txeGfL8h6mGPec4/egpqlaogUsE077Hy79rkEwLIh6rzO1FNvMf7O8h7iSKZNQ3oYOpjDMxGU0DVl/D9XsyjdTgh4Zj3NwkmDHiMIfkIuEqcUMtoogOyT0aH9zM/6epZJ5EjupNEHM0jjZs+paZyRoM+mWWaGevOpN4Z+vEJMLlly7XU4M4sZNye7MlclofOrwcjXPS3YKbQsZ6Vf/bbJea5EjcINNn5yBX34Z21y/IvmcEm+n8/4FhmuI8raquDXHBAJPpZFWDLgqLmW7AL2pV8kwK4r1+Xp2oOKS9c9ydcZ82tvG4a+KGHAF+h8wh02eIHmMYDoGJOcf89DBiwgQLof3AjPxahmUMFQ5s6w0FfEiy7D3abXyiAwLEvEMZyTSnasB/rp5mkjOrmbgISw3b8Jl5+jTcVFV3Q07LY2ER4Ym78JsBDavllwiMjU25iP4WsgBVz3CspQVSLrMuUrftGBmENn64looieP9XweVm+BRGA6ed7Y1j36ECiTHMfsffvBObaLJbvsTFReIGVkuAAMndkh1z7JIJlEwTkiX1Y6egMR9VGmB7rmLfD4tf1amfOqSszrqsfdw5dtEedPmxZuRuXgmW+eR/Bq4C7ABAdz9N9pbk1lPQeeYSitJqW8VFc6wSZz2rAMCAP+9Fgxpg4ODrxDYQ394p4r/k+32N/sCbPV34dh+Uho4yG1q2QAmSalFgyfLHqd3GI2BnQ==';const _IH='973ad4be07cf15a9155ec4e9b6220895a3e4d17da57ac701b5665ab23449883b';let _src;

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
