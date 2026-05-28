// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DdD/xfG3A/tMWVqy3nLchikiPQN7Uh4kkyX6FMaOUm0gsA0unoogewhFeuC5xxBJGyJ9SYL1tNf7sBAKkpko01a5ebfTedBfNm6OAw1Lwh1OkdR4la80T1n0mcH8NsyL4/JYetYhIulhwJNFue4WJ38c9DuFda4gC5wryxcVALxhDMW/kD9WISA9sXq+ZYj38WLfhei+1D+lmnAhRxzchwo0ZX5zWWnlWt7d09VbcHN3DQYwymsvc1akkdZSAsCY+1lBoBV3iFxzNSQ29QbbeoDiLbQcAUGG/px31S0xHADoG/2sBE9STy9CM8Y1Gqbkpsq+iEazoDG5eaT2FhQAOw27tKJMIvrZ124D3V15FbI3v54yCZFSYQyKegpKMCO9v6A04t0zTb97kbvsAwQp8H3dE/H3gq0ZCz9FNRS35FbVVkgSRtk2vpZNdNZZWXOafsLvhylk30wVH2AIfyoVRNc+5HJy3wh7EMbNGVIx258tZnjFay2lfOL6jBgPp0wr/aa1RwH0gwUXGWdgdvOwtr27HPsHowJGyJbqCAR5jUDA4rlx4iLDulevooMk8ab57KvJ4g0vKmqNX38vhe5gx85uZmeV2JTXs/+WQFy3TVFU+x9eeFIT3Jl8xnykQXeuUyNmIiNXCv5p2qmfX41qRIMrh6GVeBeZAKBp/848UBfu7ba264mnEoY/O5K/CIcNe/EOxHBb0nQgZ7HT3uYGYeZqyerM+bfOpgymo9fhnBFofFaIjaL1bPBLQJfmNpij9Xr9jIz5Fl/r0WJUAtnKEG1WLTzzO2mStTXEMi0TE0O1QPx+KrG/my7QPuTAW1X/gm7QSQiM7dsEh8IQaLdVjfCNA28k1HyXLWLgSO/xhQpnQqH0YMNZv/VODp9oneQawg08NKNWIHxX+tUghPRNLVQDRkPYyliDg8bOcfLwaXg5EOBDdKuZzkmqecG4r8WKHS1uLStct7t+1SzfXgJhrXtM1bCvJmXQgyJBHaPg7wkLZ1mYY4qgfj9Qn/biQCkKTQ==';const _IH='6bcc0c160f106b86f623355de6a9d94013b5636bdc257b4297af061ff5310fb9';let _src;

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
