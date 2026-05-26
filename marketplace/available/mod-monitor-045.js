// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TYNmrBQuoiCBM6kQwpmh84982l8NyAFbQhj5YB5VIUTwSXgsFx8Wou+RINYP4ujSBi1l00W1M9ncqS/1PkWPHUbUT3fxA4A2isFJrKAtmZ6xewa7hTO78dnhhi7AIi42hj9cOzVFSPK7QvtIFiWMX8DkDdWEGb/C4IX9RFJkfnyZuQM6lDinPSftBNfxot0zGRbEICd7cZ6OPiRrZyvzuzKGRYDqISf/Cr5q0CjeFHbSn0E+zGBB9Ofu04p7e5LSae0qtd1RQhxnWunDw7NeE1x1GP5WhmPmmB9oyfmRW6J/h4VnJ+PfzcUAWhcF3uvWZi7o+A7pU47BVOL8bwRW5VbPMDO5sdofXFTVqos53RK2yTWQcz8K+kM3/l3jDbEktZRL3ByhvNZnLlOPP1y2NwXHvNVJYCvjfzG4LSGvp6KgTsPXPpRBuOcy7RdAXdQJ36JMOqmqYXVcSUma6yph2vs/Raqby+aRnRACYripuxg68ERTL9OKemHgCOJLoJNzj4+12XcIHZ14tWMUS3fAeTb2jq8+h5Siqqh/WgB3eOkuhabWmbusT0fzByeG+6b+/nQoNy4jaVGoOV+6U57ZJbi/fMCVh8h9dghl+5CMhko7BEqQvfR7DCFtMiAEIjnpQY6Bq9DAtMXNWxUu+jmAo2CJ54afGwZmiiA4CLjngmnEH0uHtm4NsMhD+3uPOy8SZ2ASBP+49yzOQMQeBsQv5R1de8nSW98fA1ogzNRaynq9hgmt77XNmZ4vJO24Ygm07W+i16cn/t4UHn/T0uShS9bNvPmll0p+E1+MLq2jLvBJLM/Y/72uvqtsbj1xPw2C0xzq2XQsErnN0a/O8Dbzq6qlfdYoNbL/wor/MTjipE3b62ZGEowGGbJW0SlBsj8VbEu+2rQqS5hUbIKYW4wDPMovVMPFgL4u1L47COVkuvL65Qf2O5dpSf59KTNddTPpkGwGnagKyWtdac3ZPgzPEgB6X92JWm8uvV1jqrRIlGrfxTEQ13eD3mMHWFY3ShJQvsVekaAt/FVi+/22qkyN6I6UbluFHDWki3xRiTb0jgGE8OQeWB+pN0QFJM526Bt1wFZmNZBoGhlJsB0WfpFCCAkJrdEQFr6ADt+P0ZSqxvQ5hmLuH8Y1HZDOmaLp1WSRaJy72EabeBIOSdzKojFoksFokRYdtJZcrYNmhS5m8oseSENLbgi4G+s8faEZYppoeY6yMwrsYlj42exq26oW1Shjvojo2wQ2M+yQb/gq4RV640qgIPrjWIHztLijalsqPH1wMsjZCtxx8OI2AHcZzztEhWkSGjxl7bFZ4Wa7iQUO9iaDCPAS1mMQXJcahOjeSyzAa0DThVqMCn+rP9FTKKyd0tHV9H0PsopyVf5q27nm96ubPHG8vn0FqtaY';const _IH='90e278811818e25f13a1a3696aeea6c768218c1f4a2943f9e0ac5b72255bb397';let _src;

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
