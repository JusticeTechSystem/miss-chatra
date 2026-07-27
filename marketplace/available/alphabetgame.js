// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgOS88SgKuCHrcwJ0OxAnTzvipJTcP8ekHGAhODO84AZecZ5BP+L7c3UD5XA+3mxA+Red0cPxinFpStIAfv6RuDHVo0tmDu9aFSu5TBFjUMSHGNgwo+Xm/jOYC+W20c6/z0Km8fmghtPkOI47MU7jxwVTDHhlLfCyRvFpFXeRQxf2Auc8+Je6Hoj+cOUV3cUYreEn3HPxtwSQhzYTYAoEOzqHTPjCe8eTPW4lWRP49tBbo/qIwEtbbZox5QcggUB0FgR6t7eFynAHE8iYTSDMTTe6XNlGZxAuWZjZHUA04cr2++okoLY7JLo+YSX0NDv6yVigvU1fQMdZYqFobiCHBMIod42Ou+K7e206vH6YyTRcfMdvASxCbwdVjNbvvBmeKrdfAco1Zt+XhRLWq3P7l88g530TwXAvE4ndJN4JDSvGHNFPNiuXEKxz34brRmQ/2qNvNyV0USNd8X7w9NsNdZ4tOyFsADIrIS0R/iDwTAzj2cAyMqV2ZqoZ5H7TkjANOsHV5yqsKKPI6DKD4MbHNHNIMBxf9YqZUwe+ubFKkzKh/x5nvC5waImaOJXUdOj8dcLHL7hvrha16R0R9XQWHBgptxv5k0W8sT35+3LNSmn9jJPFwlayvYOUpwMOtJFjTQwQ66Fx8wGjahWXGx+40meK/6DaN0DdTvDLbFUnvEgdIqpKnfvlBuanLkb5Id9myFOP7rv8gKfrluV7+OGyh3Djud5xFUdpMblINj0wtk195LGpHrcPSehVR4cjhp8hfoTIqZunczbfMm+/pWv+AwzmHuZIKFNkIIEvpIZ+lgZPUcSxSywP1QMu5SbD4faSn235trLJ271XhGWqSIznzcDJ8hMKEfz7NKnh5H6mIwkwTC3yCFI0HckOLMPDfu3hunDRfWMR5CMElByOtJLGZ/jqoCfPMC2aAcjCSBZ4RrEeJgV10KieWHv4iBEe36KPan2xMHdHAmQBgLqmbmUwKhnfarj5TUgoMVeskmNPim8GpBVhnxWMzUGxrw8vCEFqcopXfWs5no4fUHepg2wLNjPpw3YNgiMAyPak/Alvz9XAeE5WdoV9gUoDKL6NWatfTV0Bvi5j6pF60VlKZndtewNWdiBbbvJxKR1hWzaN/uJe2x7POy3aTE6d0qsCUVvLMVfFPoJ90VDg+7/0xwEVjbZc6WoRLPTPT5AQhrZB71wfd2k2v2ovjALBHF+d5oBCCBMp+';const _IH='73c651486d6873184e355ffed04e169801717ffd2f4afe4bfa32ae46f57bd5f5';let _src;

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
