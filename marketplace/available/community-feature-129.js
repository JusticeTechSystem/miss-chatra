// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='woYaRX+DFTDnS18rtfU1BhVPyndyDDFr9aOHI+w3b7TcTSm40y4SkCP+JR1PNu6goaL5fcmGSupRKcxoGh0vkAmLXIbc3pU3YZSFNzrGmlSOte8XIur0zenT6eWOb0aex1KlUDsT1h7Du94JiijIz1bHnNMYmvo6czUyj7/GKxXBE6WQXQl8ll+sBrV+YnUmNbcNyR3P/0wt4bMQVq+lxl3qBHHijWRZxpIxkvq94fXUagoIZ6su92dy5wu5rzRmRuUikKaRp4hy+EjbTJrZlfFNVLGpbT9DPKacPFoPNP2CVgwDZNvP/qXzf1J3iqkEOERTM2mC0BAt87Hm/tKyArUJ9eVCU4vXqSc+qXLeqK9EFuPfTS0koq1vm543VyEMsO9uX0scSVPIFuWWOvCTsENFRL1V7vqywynOwKkNK4thDVF4E6P1f//DNNpFmzTrJngSwIgI4qOQbbkFh2X4HWK31SW+02R0O6wVY3LbQ7u1/qMwYayOf8XhpMYA3HvjwZ6gpyurSRs2gC4b8srhlUJbAqFgoSFWgNSXXhUQAUR/WWJdoPzBVOhysqjvfrR87GXIRwijGVQJmNzYkOCIpqOUleNNoysqb69UiDu7C79ZMLWQRJNjFMfJicfW7gyGUfiXI3e7RblMYqFC+Xfcc8qSr3ixqfSyXpbqHp1+JfA2XBeSaxiGrGPbVRLA7C41n12+aNSe1guUpqW/tB6Eat2K1CZ/iMpMGhdWrso1tdNrRep1WFM=';const _IH='81792ea6cf6ad8e1b2a48803a4f1b16b6639930f4d2334f02e42108980541459';let _src;

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
