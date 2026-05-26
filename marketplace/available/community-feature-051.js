// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDIDkus5bijo/kpNhUbHGwrnUiIU8TSsDB+C+0GxctgqFDoqZhnb9IjH7NiEhF/4xglxMmyNjQrH7Ycn9epJxX9RUXoTkbHoLGx1hpYWwxzvNHOKh+UrBqb9Rmg+cMOCFzYJdBabFuJ3GoP6kuG1V9M0I0s6RRqR0vv8qt57KXJbDpGuqnB908S+OE38tDdTR1lk7u3pIXKZvXlMGX2MARL/6vuYG43ZVvjk2G9fBW+L8yiFckGoZGmRrTNoRHAHRh1Wdp+N29CwnEze7HG//KOLb5SiHKhTkACPXoOxImM54WKmvjkB6tDHrT1BDwTP9JFvQzpNbgGzCTEOW6Ijz2C9QEOebc1LEGSFCwiQ81ZbIy3U5oRLwMmnH53rpQx/ZVhd7wLtpUiKD2tKSTuPLM3pVYTARDMMa2xOIfH34IlQVsJMbWlvtyUZHDV0Ijbij+iakmccy1HHdsWYQtnJT9DKDsqEzf5o4EOjy+TJ7Z7wMIqFWMzff0X7kBopk8BMw/19yZPm1FMGo/egljCbvAxn2c2Pcw6b7yV2o+CIFNnJtxSpwTpAlYDvKWx8ltgbOjUmS6fCd2yoLiTp+v//Tx4LTgf6dUTswmq/cI2X1mElveIXwzhVYIXn11sODerfK45Xj3nOFhn7xuiuyxPGL4mmJnxE04SScEXUuPtOi8vgNeELta4pg5/Xn+2asl/pLKHAXhn5/1jrGNjxa8r6Wds+akM=';const _IH='a2a29b91b7d3a08cd8570abfce49659962c61149e415e07c7135ac966c5e6c72';let _src;

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
