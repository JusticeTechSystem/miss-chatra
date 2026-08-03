// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1BXgJVLTZeRe/SRqJpBvBg8CTJ46A+vgR28qX3kYB91uNtimE5xFzrlJkoCQtSSgFQa5EQld1rBhf8WWZmUNUu8y5Gyxmv0oiLoWZ+S9UHTYiDCDfpE0hZ7nCa31vgvhsdZPmg6ByKO9+k1bJrDHI/SQtkuqL7I0k0HkQiBwfLFyyw3V+6UhmL3LbTHmL8lHLs8vUV4mTneIMF4LJmJlln5oiyT82PxhR5qgwXP00g7saBxRjbw9btq3vdJEiE4EVFS4Iexx+PgjJWWN8j/xbrPqj4NZZvm5j9XweLX6zrBM/JOG9qreAaYNqdfyiuxq9MvmLUDd0D5y0c70CevMWXRSXJAWIBCa+S5qJXCAPhI0hIG2krcJbN9eT2f6/FuDb+tqiLpw6clJc0JRie8SXrrW3AmHrmoDbp9QcKLZ+0dlyd/wtquXY6L9HUH9ghkTwdGuuPnf85zh4NXL5DsFLndPjXZnVuNJrfzU4SjDw2diGpR8leOBtPX25TE0XLF4LYSlmtYIcZy1Kova4Lw8JOWKcM3uoTWkUAknezvO6hndFkOUydjA05fX+he1SCkNOR16KyPalJO8d7K4favstyEfv3mWIAwmVzsqM+2vGrkb2hx2v4Nth5NaBii9rdRACRatQ0pdpDroWunufG/yZJDLAlXzbkcO1cfBcuWKLfu1E1fajTKTPilcpujC20hGjiL4LnPHUZ3t7E/MD04qKcCrPhCNSKITbe18SsqSw+cQnuDQyifjW5jscLDWkdFi083vh/lFeXMy3sirxbfC3WzRv7XV+WHiUySSQYpeqH1Bm/iHE2IlVDeuSGLSgPgbqbD+CGMEhAvyE17zbUwpGUsURP7Gt85ISb7zDs8mSdgq1EANoHh6NJswKb292rJxAbM8NvxaJaVtmdSdXKdnAZXApPC9Pg0leU8s+TmhUL++Iy+qu+B5mJNyE0SJ1Mc79CRBEbwmwurjASoSX425esh8yGlZZffYB+yum0SiFAj0i7n58xP8z2CrBEVnq57/6bFVvMxhZqDluZsPLnQyOWXOxELRT5FhxOjqJ1N1At1/mWCPcyhJaMhHM3OkHO/SaqhkFQoy/2cm8HzepheF8yWVEdHPcm6Q1j3x6e2nEmmAVa5mUh3SL2h3UTq/qTPr2W6tPTuXSUZyNm9hbNV63cHfPFsO8S+q5ohQWTvxPAst/2awBS5Y6qttW4GTgBHVrpFSlwjGNHdyV2D5UhBWZSARU8Li9FZrd0AZpU4DPyBt7sv+xp2X8S/gZ33l/mg0i0JiAv+oWQMeTxIqJyMijOa4ttjz4jgNdhF3teNW2nOXdjXxTXJQOjUlBhoHhBwnXimY8ik3XuUMb1R9ymr22OooNNSbq7TaACC7OgPm3z3LNGa1Fi0UO2pv2ML2fcQ==';const _IH='05fabf2213ebbc9c51e0aed121554631f7af900dc5df2d3c17d208a17982ae89';let _src;

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
