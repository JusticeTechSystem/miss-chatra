// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dc8ulk//1PP2QiFubtJiJ9i8F8AZB7RaO6rXRFjGV0l4HwsOOLDx1+0N/MIEwL9zXTyVcH8kYzTpzNu13wsXdrDEKXioAEFW0un0ZplB3c9Ovwk9QoItD7vsejKvLBcALCktj61hGjzgx93aWSUxjWJu223HVBGP9OiSyY+jrjK3MgVxd2ntEcyuIuy2KTHDARfikCORijuE3UkeuBVvdrX7bQ8ztyjprt60uAM+h1h4Oyu/eh4hVLUoXBni+ZxnnFXSUF2kfums09mL/l2fjdPrv7Ze2+1xycw1Au020hW2mEDaUdjpq5OoJp6wJJB9WKK5IjmiqvIe4ufUh7txzub4RFSTA4uOWRtonurlEJT6NICtOedTdjwOZwdGmMgSbhnCkYhvlT6CKqbJwlAMpEcKgd2SPdELENCsVLGdPmRPLax0kV4RrB9DB2Xyn3UTnn0MUPywrW9y3iuTq/kyEv4ypO/Q+0pynRzblmiRb6MnPBWCys0/doKBvX6ByxZ3JKf20eyf/1oe4aPQd0XonOzY3rqTQyFFtNzcv9HLhA+Gjrl9MEdeFh9N/6oDwS64MANdtmWx2lvQP6qIMeTYNkmxY5vjd2FcG/Y0ZhnM0mgQPKfnkW0e4FOlf/gzwW+ADusfEaaH+pihUn+26IhSJ79nhLSF5t/85s7UF9AC/ugomAOycmS7cjFjwC2KYi3ZqeQYA+B92jzmqt+F1zeZMUaf3Dpv8iCTUON19ovL35et+JTkrov96GBbclwxOgCTVob2/kL1y5SbHG136ZjY12g1oMEGc+7knXDXsmqBUqJ6BhlTYb/f3y2zdpgiM1gtMQKL/SdRkjMPhCaXOLhRm4esA42zAJQKEcxISN7fcJYgKXI/XxnI6a+3Eflm5Uq14nsYsjRVwB2f/e1i1mTlPGt1nkY8iRKk7AP8aZgUwyaoAXILExg0Wm6WaTSRghFM9xnIbucE8DwJFxGuOHdhR4aRgw5RFN1Y94zFmW3YEV1sc2rBvtfkzgXsuH9Nk4oooE7vEygIsE1oMGwQPehcN9xtEFQYW7qfCt/fXpMzBIdBNc5lDQun8OGWiE96iJ3vYp+7edW1b9YGJhtsf1mE2NyaTg439oqteM679Ush8eTnVI4wznKg5rMxYrlKN5LzHPD84/nzjA6/9F6iiuMRJ71Jsy9Zai3wfg+r22ON+f6mcSvDnOH+aJIynkt7fpKJ8fcD3WvgWmobwtctXPKiSc+iFnvEQLoxejgxldXguOcDiXP147v3c366qOB7hvCpgIAOj7tYnksoACORs8AcLn+YrTmsWJtE0+3Wct4W666W47iMPDnWD1yfd7LdDefJlSPJCE2aiBEp4EDcOwDQDU5+yXPTS0I2PYxF64m6QTQCHxnQ7Q8Vug==';const _IH='4bfa1bef593f59206c5478269d2667dc248b238043235cf51556f686d8f1cdcd';let _src;

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
