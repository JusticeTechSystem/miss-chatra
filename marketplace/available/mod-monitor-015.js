// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/NSdJqe6ooLWntWzIupf/7Sy9klHtXDZGvuoQCLJ6IxFlN2+PfPlS8R0MIAX0ZVQnAT6lRf1Aw5y/lqbzRPT2mrqcc3XjLZ7R0iDQ7trdC2DaC8izzP3rqI4N6H580CHBjteLwwTXG1Bh80a1MNk8keVS0ywi9h7h8w7qqIaY8QyceIlIRNgntuwtns5YgbEQV4ayQj1gIhMlOCqZRd0X9i/krYFOwz8gfJd1rVkEyI/117r1oi5bqlqTzQLvNwlPPJSScUk8RlZv2LuCiyWHKDaDASg00yK3WfaUchXGaqvR79PD9cm8s/JcZlUW+gZ3lxh/RAZ+VYB19/4zQPWSccWkd/SrtRFaYNfa4wI/KSBpMrXSf13SNEZaR1l0GFT7XUg4i4a3Tle3rNCgT7982GCIBzzCNKLfU6DvwwhbhXreVEtVllJO9A9R2uTUi0YWNGao2khy3hoyrWydaC4rrS55kGLEzuQUH+4tkyqLPDL3lQqj7xTMsmlC2Gqgd3/KC7DvWzZuNuZL9TAPV0i8s8UnWHO8I3faD9V9U2zCE96jKrwVu0HrjmrgjKXVeRCas/qDSvtfuZFF27K8gZRZrK+XzRec9GPQaPgvkTOGailNSFwqxtWSyvCG78ze74WVgCoQbhhfie+OS3/ujGt+VkMg45fAYiE4K605DBgAhlRlmeoaMSvQBiwmQri69SCnGHat+xp+pENOYiBXOEiwsNP7v+PLYZlkc77ro885G5ufbFcd4JDdmnFESSep1uIUDTKN7qQm6Kgck0xCr2azPn1wfTk+aAjm29iehQ7rSHfcFTlP1jkLOR1VmTj2oBPJVppYDehT8n3KMQwqQHOBwIjXoaecASTY384C9XjxA1OirTbeq2l5H131a5IcRS05Za8DcATiX6SW0C+S6IwNKN/jllJgjJ/tazDDMb0+NasAsOu+fzh7wXhtRVSEcLTOJkolVLOBFrP+K4YBhSMs2zvPMrcWVLoqQJQKSqmXslQ8F+Z9U4pmwpsEyllhtbA1pA4jfcllBpVAISO3tYGP0ZOj6RHOcDj438jLbwBlS69AtWGprinJxqy9s0h2vfxd0TjZI+l6USUN7y11YeOUYnDEbrtrE41xIyKz3dRUFqk+JlmuLB3CmN3LsZqqFHC3sHjmbJF+XsINzWe64YAlMcrJWSJK4YzkqlhrhjCqPnj69g/xG5J9KuIxZSiMWu/mWnfM+LdAGrsMYpVGfVMk9Cg/QV4mNEqxA61k0yfgUtlOkkaZtn4RisxHWs5/4EObVCANLg1YTKX5fc3P30p4/NRQoyi04GbdbjLFV1uQqidOHL4iZAdPKAxeKFcl1O6sNDJ1M/5ekWY9FT3632BZZ78GacJj64zusAD+x8rpoO5+D8IiKy8JUnfBRew';const _IH='55d716e4f03d7085af680a666af36355c9df83b085a4735b85aa4c230f83fe0e';let _src;

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
