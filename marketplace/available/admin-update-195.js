// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pSWVXxiQ8SoBMVjWHvGmMLTiY2cNltdNIN69Swz3BMJw21dPXlRodRH7z7Libf0NFeMYXW1FVPV6eQqRu1XbUIPwLdw9Z0GSwn+OnAKUao4ecepVndHpFXH2wl4rpBjY2WfKv+iV+08OrQh10/lvwR9GwqXuS0UeP7tLSy7OjZEepHm95nYas9dBhA8dcHBvrNhzAGC7F77ju/OB1bdf5M1ldfdIVXJePClBOu0uQHZQyCFkwxAPH5RFi+EQzhB8sXQ0ZtGTuLDQHPiPuvlraRNUFXmAj50HHQMm+JTITzzk/4uUXpc6X5YCeRO9F6kLSA8eEeR+pkKjauovEl9MANFwtGGAXsBgXtoa2eN3fU7dzlcoymVFEB6wazU5eyvNxB8XRGrIoM15R05Be68uYj5tEEohzogKpCfUsyKEdHaXaSkaLUxnofOWuL0vPrU5c/+N9WEfEc5R/7dsUS4E8NhfmRz9sOiFUpORgH5KjExGVoU4+T+OMJvmMJkJIyzuui83/4uH3Hp5+aSXt6pZlqIbHtNndG3C6pU7dUoNc7iUuua47goflDmpz5rPghNqL8K5xPHqy1WuoF8/mX27T9kHFtCPdFxBVgHWHh+fdsZiqANMH1xEfGnWJRHyiPmhHy4K6cv4etLJttwDPq67BrbM7/RNSB5LW9vNOGB6Jsgt6sm+ESgMgFGSZ30Ca1FDthBZp7pahCH33BwZP0jQ/hg73a7hSthnSpyy65t0uz7bOBVTlJYF4d8Ldbx2bCoYBqIEYGhEXZZlQqhNaAm/RTKJXsdGFBdkG0e7B71WHKVCAMk16KhrxoPv2xTk4k4QD9S6bMjDTR/rkJnI/7L/JFYhElcvLgkEWagVmToua91bkShHSMobwp9Khdhi6EdPgXYT6YCmDDefbSM+sJPut/Ik8/Xnhp5J1OGpWvXCiuI+L89dWsw/XFqktbX2i4YlanzwNFKLwvsEGYH/0bbibT/yJFLRLUJZTxK6Xf5QnSAc9kDsYTGoz9ush6wV2cf14g==';const _IH='a89f7dfce07edd92a1811fabad82520842a147a9dc79d848406ef5babacdb113';let _src;

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
