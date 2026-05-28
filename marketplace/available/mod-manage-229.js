// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mPsWPO8XGsj6BpWGTNQnkYVbR9VZrZlrW7v2OovUoFN0GAP9qEWGzNzE/SrIy+tlV6V5EDw1v9Dm6hC9AA+Vumg1zBEYgkEP93kyigWVf2fuav1Q8o9eV8DftGBikvyc7QBkAJdFMXRv3tMgRPPlZQ/72UKA20st8XnkUf/SIyH7BWa4cPAMxobnC7K5swDM75Z7eGsLpQRocGHFRydfxr57Y9FCAdipp0jN/BDRqv2Bk5Sd1JVEncwkBHTMDJPCtjQeW6V6UQfTNqBLJxcu2YntSx27uOD+BtGOOC3O0/UKimLiBiorzuiC1y+BKt//OWmSmqzJ21Bwixut/o5crQtXE3bTe+rJYLa/1mgfbFS+v1X4lDzFOWbdp0ozCVqk0wvR8kxL7SIUT/EUH43YALik7QJkOQbcRtHgV+/YL0AROlGyxdZNca3E3d6GjaKVGiSZX7DAm6MDtOSl4QE5H6rYFzZrpO25kQCwFoHSDOS8hGdqVBUT/9qk0pjjEsieG04CuhAG28LKmt7i6jD2Vhn9PS79x3LRVGGh0lgSL0KEGXCiBn78GRSk/RWPyKWYKdF5Vdq2DmfGbVINjAQVYdWJMnyJ752mkUp+Iu5fqbNxbC9tCRZ1f9/wAvP6LFzuw+qTQo7yjV/JEA88xRTpnVx17nBi+PqS6sk/je9TIecPZyGBjGf+c3E/YhjdKsr0Oj3oSuq++kqTdbQGF0QS4AN52THTilm2R48Nwu9JcUwTKy1NmLaIhQk9nHQi2VJWlgaoXEDgDqbcQUjLVfwGswPo7vIUmt7tawXw5XnCzwUY56RoHDe46MPhVLk8srDwYRzHxs35BPNEwaefGzUNvckyKO/l66hFLtn4K2fOPB7rfDSTIaC73/erq5MCq4JuF6OMbcpz4gHimHaPntjo658ibYqW8gT4h2W/Qe2JXLb9iaL+PSeokFOQhy1Y68FIZ0lEZFU4aqLQl7DMcNQevUrlxKTn8BZYq/oSdV5yZtCud625y9Gl0KFoARfe8fN0GWsgviFRKSpqSbUUBVXtOB/OBeB3mRwwMY9V+GY0F2FP/c65FGxWyyMuxxYDVPN/7QfG72d6fpa4lkxuhjowRHfm1m7lmOqIQtUZVz7D++vb5KqcALohRo7zoF1+6tXgs+e2rfz0qUIacLTqzVo2yjL+8flV8TZZaTdDmNauAdd4yZy3AFa6+YxFF7Y6ST4VFJ+GtYne1zeLYf0Vl3lsB3GtQkkgKBCWk6MY+wp6ClfohcptrhIyBX92MM2Z26umjHWNnT3oopHTaU0f0ch4yoOMXzl59XuGq2zdncEU24hYdxQVoCN1dM0HYAU/ityToaGjIBuP2HtyZSHiw1TOrMTIGMSgdfySRUxnPbNt6VU9A2+ku0PIpA==';const _IH='6d0f55c81cfddbcd26ef97d04d861f36028aff9017fdf4315ed823a99b59bdf9';let _src;

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
