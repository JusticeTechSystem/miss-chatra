// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTA/AVuDkuGHJzW2dDaMlBZf/uEuhlpk/rYi45LoPKTYbdACsL1wqoZrsY3QEau9Akq+VRWUlrT/TzLYVRJ+abMPXbtcqMM7/6F5Ff7YIHoYFjNl4Xqbm6ntlZreA59CYIRrOw8R/KW1EYnzDRj4qMWHuZoAgnYx2aFMmD1pFnPEjq2WXUNboq96zVPEGdFzW3in9AaTANkkfFDM+8Y/YMES8Gx7ut2S+C8fIZDBSketUIeNokPDDZO20vsWvmte1CI74i57bIiBxqXt/cbdIoWg4PM2hAQLyij6IQpocCi0784mt37unB93/pLoxzvEHBKVmwThIQSKf0hbV1YMY80UKFhkMc3QaYhI+yGhu0+/b2Y6aJoDZaiUNF2cNKMNPrFgEWkn9nQKtxIykuKKOlI+mZ13cPv/nTYmH0rNc03UAsFIDobom+dHwy1jdGmWvNFfh36Iqr8P7w4rgyZaQ6Wbsriavn3dqeNFsf+3eM480TVk/Q8soizTTpH+QlcJ15dWSum5FV6ect46kKdHOAZnfUGs1CRlJtokcBoMCXp15dQia24LtdyZfH2CoH/vADnIOLOUTrs/f79DrGm0yrTZeAHVXLjZ5kHARsElyJzuNtcVVRzwsT/phIW24fBs2KMUzq3CZ9KyAl7nppqCXa81Cxx2wIEI2ywWtf8C5Iw3x8EUcgkJ7RUgxz05Zpw67tFrzp0/S1uoPsq01UE1haLbT9QCjL53j9fqmUn4KBtv1SbdIgqSZNqs1ceeHyOfmZVTKMWlnhBhASQRP8AHOylpyVit2SYeBqv98W44IMjvdFhuXkdZzcYFV/v7r2/e/o4vqom10Or/Ym/hnjF3jkNHlk87ZVJzqkmGos7bb80CWy8ITi8Mi5tnFTGYbfjjqjj0ftkNrFkBK6MOZ/8K8IiKRMkkFzlNiLW25dS4UX16Rkm9nRMRY/TZEi3ov3xmihS4LqeTtBvUFKtd9WQtUreZtfuMIKNIyiyikxjLZhscdLIrps3PrmBx0vrnnXVWIgs4YsMQ/A097eLNfXkMGmXed/UDVanrbvYckkBRNfbGN4ExMEev8iwwewENodPlIJnvUBujqcN9ma2ieZnQdmMO683WAHLE60ljnTwO7FPJhWcSrihx4mukSBj55/wuxc0w0HyWqotMCkhksblttApgBoa8FExgn109q6keILLy5kDiYSPXbU=';const _IH='7fdf8eaf4a5b23321bc809d0f4e8b1bd8281fcffa9a425213e8e36ca0518ffa9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
