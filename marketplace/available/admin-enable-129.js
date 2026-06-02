// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qTYBblcZanCELxSs1ZkRR+PgRlFhrZ09KSbUSib7/1wLl52Ee6HtSRfdEOjfvHekdt0dw4eQ8tPwYQw8smDw/ZO3Ib7VBTUYHD361LVzdJcPvmacALxV2fHRTYTmQRsFjNX2d4xwZ2v1NcY29kvC1VDyWZxUnbm48AhvKRma+GtF0croOjo5+4lq4Q0uKNGjlu3CwKVI4AKO3ytp7AiN+KcG9XArcfdMx5KGfRC2S4T2TXKd6dd8Ny+XsxHhyxKFAtF5v5+AYVWkivxTjvbfH95+vdu7mJHIpfgLJVE7NYwEPCHXL/r4LFt+o/P5yVQRwwvGGuaChdhZDG6Nv/m6AosWPVJxUFJBl1Kyjy2EmfRSJxZwPFAL4IOrxZjR5xa4B4WkhDJINHD03vuRJ9QQQLf2V3zNcEr1LdvpSN0afFW1SngDokZ2DyV8nqDMv429MM8ztl6VZIxOfR4kVHwgidEbJu+qvayx9QfoxkLHNMDhxOSWS8H8h9Av4IySsq3OxRsmjEOTJM5uuQwdgavtNSU0xlAkOZajzxmyaC1whQ6kvTIUdimlXmWui7rZb3/CnLu44FQYLU1n15jaWyP/Gq6VuGidLabU4egktu/zpH7TxZJdDWsBA/FdNthrWY3qIzYe10D0J6IGB2wFHgTu2Z5xwEiN8jOfq18qiAmnEtwtUDo6IoyZ6Zhpg2hiUXsTMLWOy0f5Dd4A1ouenDHaWaqV12TCoGQX1EoOdsarUJY1DcPxeEAsDdJtSX5o4hJlUAoDbr0P48DJG4iOPQt0Hy4k1uNIGR07V4qcPSLeFwK7E0tcU8t4cIfayd7b+eYR8X7PSsRBJEhXf6QLkYtytoupt2/JrMCiUfau8kpKpyqmNQ6gcVWCH4IAkFsmwirB96VRtjWEKgIcbzqFd00TpPAG+l0cdBj7jbgfU7kR9Eu5aCnDQH+gfzjG6jlc5LbWl9OkIubqfx4VdH3cjmoLfBYi9vIzcksHiO3HLzl8Zm3AVZ7SKKyi0o1ic3+87AM1xw==';const _IH='1318ad5af81d20af28e30e01ea5d4520302ac83d2024ff9674bd571146b0d23b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
