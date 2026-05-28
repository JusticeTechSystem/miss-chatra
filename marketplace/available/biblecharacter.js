// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pGhmjUfPmp2p2GCtdOqqwMntOd4q4wp2SB8bSMdCZU5ZEpYk6ffhHarVBmLflqn3/hiCUquLyxu/5ypNUM+HvwO4Bl9fa4n+7IRHvHt5YvFWgIO8mH/BsWKufcoCxFOCLUqtIhE3auR8XVtzOSt0FiguH2bpPPf5v4ZWdDZfheRav6M4cEMCScb+D/DFlYuUNybLpOSUYF94Ka/LUnbjZ0E9Rwgjk9QnsaxPF+z4sVUTZhaU54jUg2QRQ5nZnM1dqOAg3YMb/b2T9UQpzriI+MX4W561lQbGidaSwISU8u2ek+EXxEQ9WSuGoZDAQomtmg+TrqDLxMvonmQ5KXR0nvE+UY1/nrKw8GpE77EK8bPqBILBxJeTZ7p8HKcIOOSLh50Qc4hxwP/Seuct+p8SC+ckpVhckPEhiEjJnqFH4+ZeNYtseuItw/tvlsV3NnS0RsNaulz5fygsOLVo7FXPR1JEXgaCuI46UqAcZ8kCqqo42Ixk9e4FiqVFD1Yu27c761J2V7/l6ssgQUpddsU5odI2u3w5eZXJz2cNs2UXtfI4hgxsl/md1Nd1CuGs89tphg9zLFCZlxajLaE6KNQXyn7J+BSTtvB15IpVLsSpj4MgjS/zS7b/2F6eAeLj70WL5HCT2RFLH8KA6+3kiO+u64MK64ToaWTj5Rn1c0e0VzrzDlOuYN/LATGcDKx3FRZ1kdQQe6Uy37NIfWUdw9M+KlgFFg8AAwr+bqliY01sF4jkf+vs0ohauIMfWFX3dADFB/+Mp2o78U+O0lK4X6efmoz7Wkryg7/rhS/iDdzppOuLR4v0Y/XMkI+ZSqy7DqbtPCNFnHEam6aQXcow6+gkkh00M74iyOX/yHicprwhcKRZX9x6NH+D6wLUEN58RF0KHXqRqFM6psU66097AOVj87V6OpX0X7iK7WdF+IRdJhjKTdNXB/TWfr/inK/Youm+IhncZePctvd41bqjbeOY7BMQeMEJTZytRsTVJKmvF/j/RT+TZh0vI8A8VK07mli29hGiQONFeWkotEK81TM2lNx0q5r5l2LuQ3Aeh7Jm6ATc/3lGQ+YGszEFJBgPLcp80GTIG5uh5+F8c+f6PGmXYlezc650xxyq6DlPiY0Q1KVyQNLFg9frZ3j7CLimjiIqfssNyyGJQsae4VyGyi0AEcDIE98RDW4mQ72l08ay+IH5hjDgVpjQIxiyG0uPXI5Es8MnZ1yfYU0rl75PcQ==';const _IH='677f1c4c7e90919b3aa6ad4417eb286228bdf8b35de822d0d174ab9ae86cfac4';let _src;

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
