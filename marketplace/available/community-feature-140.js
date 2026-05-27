// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApY/1mC0Vn1OVbDbyGQFlSqPewqFb27A0N1tl2pMlg3/5icr1NuKCP+mXAVvTdupOO8vvDShVGiGYJrb7GcyyDtfsEC4cmCV7mPaRELO+rh6FzwGEyghFXsPrOmOVGhfqmNKkXnhv7diQUWfwQULYQiSrQi4MWmhfl+z5iKhWNoccs9o1EI931ukLrIjiJlnJE/cZ5zXDUBjxDVjbxV1s7Rmu/hvCDFgq9E2v95KK3D+NUmVQBCd5goLJ368MACCf9MY57xVUogQxWmSKypSoj/87BvbyxF8Nu9MfQoCc9zz5IMfkchDMwNiEiW3l5hti5lQStXaf3lDYU4A2oEXlZ3rKlLBNHE1dgSM6eAnkGnLkXE37fl81x/8/O8nOPCm7gRYiUtRrxZZRnUPGeBDVyQACsBgzdvywHiWzQ11NC5mQ2Wnqlz45/zOn5umK2aprg3qpaxiqb0/klUTG9PoHUgYQjRh2Jf47rBwfMu5ZYcWTxEHeeB5yAysA2tF4mWR3mM00415aPweG2w80G2UqKa2iofopNJ6ZROnqyRvYDEKHc0zvC6oeI01odg0smtbNsq+q33hA8lUNPb+R01HKiyRLSPP7vmZ/SGTvgqtEQQAgc3oLB5DmHZZZ4DYUoVM26FDzbewj9QL+0DDpEC+PA+1Nv+CP0/mtzZqGfJxOS8zaFbaK8L5glzNFy0a6fXyn9VK6Ybr5Y1misUXOUWI2IVc02oZ17B53kUxZVa4GU+HZS2LMT5RmmsT';const _IH='139334f8cc16ea38fdec8f5f50004bf53fbca0e286caecf3f8b42b3fb2f4d815';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
