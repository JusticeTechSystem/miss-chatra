// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9KPmxavw8qlbY6em+NjHzkrPdenw6Tc6ISxWevbisfmT90cvn7A4DuiL/JrYJIUJnufMCNYPq+Mh9X6R/vV36YEtjqVYZ3cwmdIj/TL8Ewe2YCsGgirYoc59YOt2+gbOjFeAntqaag331oSA6mKexqzbL1263dTHLcsL2Dx7rxQtHVV2cM98luhYsoC9Wzll/bktF2yMSBFgWpd5O4EDoE/VQXctaj29kFP1HUli+NnWOMWcu3zNtr5ZPX2prKrxoilA3Hp5OMsBjSaUUnm2zIIWh7QmD4igPmUvH8tPfI1lreWPrzrauISoCSEuh5+VTIoknRu5a40okOqhaDkFYRd7g6+MTNTnDxf3zO86eDjS1rIvSAoUYCn0swRBHFPgiYggC8CoEBZc7z1Fk2H45gqHY1HZMvEo47kL0BgWQYOoXhcCerhzhOQ6QRF/zrAVUGlng2z/lQeFM86Tn2bjfSzUEPkPlTS8eEvxDDR878k8JMNG96H28uIeMeN/jWKAK7DVM6roVwqNBEcJ22/wCuSGrm2bCOSJNgrUm6+44j9MQ9hFcplzzk30EUAOc7ttg9oxmreXoaL8LEFskSw2WUoeJbZlV05B7ppZTCy8iMWKATx9nW5svfTZeuC577XSZ7CHapybC4NXCAGVSokP+SnTJAQJp+Jny13vUApTpzH0a3zqyQXCJxQyU0y1owv4yBv6EvtDn8lPbPnOV53G35lzFPyZGd2IIsgQS0cUJkQ8M3WqVPYUoEI9S2eavx8gvyTrBFqf/q+L2m1x/nO8eG17fGvGnbfpY889LOxTk1vgdem1tsJr+hxtbSF3JPOU+/cqnl6h0FLfuHy+z8iY+IZ6GlzeHKfQmlGzj4pv47ZNdJatFXsNi0Nn9H0B9P+uxgZ0qh/f203vHaOcyeaC0cw66me0qcmtox4oRqRBKWVAUh83tofPLZO63y9p4SQnjV2+yF2yjg1BB4dOqjESIrfCgOukca4+zEqe90ZN/zjXBWdJf/PZFIQjFi6aB7iFzI8ctsUuyU6N8OE7YfpUyAGYFugbywTRImeqHNt8JiPIK5VcMI2xrvbW2WZ69Ga6/M0LQ+NHq3K2pyzZ4FGGI3GDAUlp11HG7wTbptaS8QNp/kqelR6PSSgDb0xfDiCMXrbiOnYfmMI2zoyMxhrrUkwwXnWxDHVvb93dgPmycHe1jkoDGjuFC2FOD7Xwv5Qk+nyPrcyzI9RD/oeyAWwuTrRSMkESjuwK7vpnAHGp9lOkKzaVaOi9f2+GyClTRKJMQimUJmmfzIK8ZHEMkq7GZqSmYNipLFGMaQGSafo2UMBFbMeDo4Lol0xDtw4CKV8QSCX2u9bmoJucP6NFP8xS/+Ymbt+PimjzqxV0t+9i';const _IH='d570031efa169aa9149a3afffeeaadc693e616087251af2b461768404e5ddcf2';let _src;

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
