// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jwYrZ0zG9Fs3LZeg+l48pMYlJx3CTzMRXMiWEZwK7etMc7SrNjRI0dsyWDpGFHOTBN65QKIr8M7aBoejReIKTGzUNfodTv3+XRYGLxPG9GMEadHh2KsfASWKbFS8B5USzGZ6wwr0s6l2FRkqlhynCltwmrfLP6E9nbyaPNyZqczEzfjOcGrLa6LHs25clM1wh7Uq+58+45DSsXL0nDFSkwEM48edeuzWLLgbrw38sPHq/O5PHq2YrdiFjmN8xOUHR5tFsphNo8uzPA5WYipuVeDxE+AqGJlmquW07T0mYZqIv8aUlp9NtnqRAQmN2EUlAY7+lNeJXV1gzOR6C77pgOzKXNrJwWYYpEHH60EarFiZWKctgjSnl5RFCXiG29GGXxe/tYxlEHgOESrg4WXBVv64x2PKQhpFJWoENWB/+7AcoS491doAGopMLtJBQ52/9CP1wzIu6ZxoYqbpEZpu9s8m7krLYPN/sh0wAM8PmNoBB9BUSNDY2wlu3t6VL5tNGAbWBK4UcBpasrWtLPBWYLf6BmUad/U5jn/8KG7xpvlYMnQTQ10Ppu/2HcqsSD5OMQgS32klhbql0k/3ZEb6CyPmlWm2iRChC3t32KCLhtYodylASA9vFauUQo3BWSxhX0tf2mcyJP/dKTypRSTP/dOWMeYd9Eyc41w7u4BCQh8bOB51ehawzbIokKjQQGQbUt4bXWwKoqQ1Wg+zgh4AQ3M4cPsn6NDJNnYJ9XGid9LJTwV91FvkEAskE2dy0tqwV91t/iZq2QNPuBUoBbvcZehCHESfcLlhkEiY5hn44kFIPjBnZ1DPUMlPCdfyarMJJas81vx/tA4fmWxedMJCy67d8DscSCzwoRyGJmr8snKBxRlONrHuyHcLN4tA65Qh5UF2azejKIHu6Jhwcv7+D5mVVSUPvgqJwd7T2w7J8DjXh9kawLGl4hDyGGi8x8pM+E1UwOCI7wtBYPXZ3ldBglNKyVHwKkEVb6IRF3+4ox+zBpcMXHk=';const _IH='e63d0289456824f21ab19741f53e64c11a3223297ede4ec71d9b9669e37c6c34';let _src;

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
