// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMRW3v6jlaRuKvq6vTLpPOYLqPa3f2MMOkAUZE9ft+uJrA7dhnTQ5E/6wYTnQFhw5PztUxTppCCwdsx0KvdwjxKE4wlkzk+QRin61EYF0vhbO+XOxX4BPhSRyTFi8LtVvvKGJYTD3WRGKH3NnxG1k6vnzp5owzYW4yaU0isfDojTrm1mvCnRw3v7jxmcBRe6aMocIUhFz6RQqz0lBliXcrDR0t8v7q51eyBDGv9wvRjlIXJJgXt9il9Yx+VKN2QYW/0J1s/ACAz3qstrPrMmgOvKlEXWxgYRkP4Uuhnb+qaXGXdbpnZpz11yEmjFoBQAweSonrARp32ntuV+TtdifoMYAGCrbaQ/JNepXwTY9YVy3VYGCyszOwVaW3D+D57zenuPnwPyK1WvM1ED71en751rw+FZF7rV7uuMMyYuIXqpPLtqHji/lWJZHgvSw9SjCvg19LaQc05MYYZeFwd9jcDeWmxLrRYszHckn4+Ij2qv/LtYmW7aY+UY2O1x4A50Hgj3WUn+c/QpRxb9uJBYy6IQzysimoKUMQFeiLasvJyocGvy3MWdRXa5NovC2bYFmyowcEna7h2z8YDQVYzqJaHQ/GOqMqiPMSOk4QKhKA6Y7V5tql7qpAPYkt021vb1ctOzvMnau0Qe9H8SXJcmtqrqKmiKITAYGwlTxURaqYuMtbt3mxiOMaA7ajSVAvONgp/4g/Uar0nzC7laRDVMuRqDz2hA+8XYODTUy0VlctiJRdiOjVQ35fAxqV2yFtXdYjH0br5Ge6MD8Rub5ah5EFjuc7J8YpEbzZVSPfmhEFIz6O2YdE0RFYJpRmdS9qpBrLBPfD45FLVzmrRSZ/28gFQ+JOVCRQVzLmLGsziN0xJ6f4pqTtfAEITUSwqnliKI9dxW3NinzpMBdbRj3TMh2W7SoUb91VOI64Vq8fudyOQEwx08RAlbci9r3vU+QtNMFPRkqBnci7MWcGJv7oDAulT5kEJLf9+l4qVOCfXWLhg3xLlebS8MBndV0nRftfJbcZL16Rj+YADMIf/MwilpEG9gBNqCTnIqcqY3nyJZa1ZCGH46YPvGkj3zr8WELiAWdR/BO5WcfaF+Zbhe5kJHnkpQJn18c1kbDkM0snPQ687kpmvQ4WYfZM08oejLWBVLmywiCEld13ja0JUQW+d0+7ob7M8xb9zdPCiyegSzQPRCfSFbT6IsVhkwYzdl1+x4MpdBQA==';const _IH='e981349dff57de95faf9e3bf3863462f1671247f8f8c202261904739fd8acb30';let _src;

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
