// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXx5/7wpffo9Ni4IbTd0lVqoQBjXZeQXQKza2v4GtX9fY8dgZokkaPiGexdzOPBy51ysaBTOvNo1lJyOLm+ujpi/H0OyZAFJLOGz4Cb+I+VP+9eiiXFn+WVa/KX4+ez8Wyu2oDSIbA39EKszmfyxOrmOp1A1kpgFV86RCW4p/b4ojsfOozF+auubk9KM+VYZnxT2JBG58TNxRxljKTNuy9sis/P7G98Wq77CurXl0RlBf7LpVye6U334l1Xg03uyKJ0tpBChWHRWvEnZgt2G3WuNubW61H904dqv7zUz4W6UNpDaSKye/SKmIRuBhHt5EdiFJCOLgiuNZQGQUUlIsYBPvHRXdhuBkN6r4G3lAneytTSRdNapunpdjbtjST2Ncr+vo/gn06+HZ+AQ6a0W3wBGTSV/ggmVtOyJaz5epyfd/OkGfpNwvm101FpcvC6KYSQRIRBaBB7gP4wePb7ovPQtPXgzjjU380yeP01Jjg7s1W8/rs1KO0kOkTGgziXN0N6PsLkK/bP013Qaim3GxGvCE2tkFalq7uvgTEuKcACHWjBmmd3Ze9M+HOgERsOLy5DGfAfvOk0Ru9VcPjAeGp8k2Af7zdvI3W5O1Kf3g2PUo4Vyn3bBFvTom8r5KHjTBdhrZsJGlCnFKolO1nfDbLTLwXE8FPDt0KC7UOqHSMt1Wjer6qIdIZNB6WsDQDHiRkbavC08ZwcOO815GIGJSYw5P6ARVevSR9FOmfPKJ4YMDTbkY/z+ImDe5sdEItiwNRt31NEc3k0tAEsBj4hBXlI6SHCa7N9vpB8273uP9nYaIp5ZdlFa0InIQr9vnHduoWXLZdTDJh9YPaGY3sEO0cSY6tmH+YDfkrwO/e4OoyTd/YPLSWr4OiTx5EkwmrDyVFt9CvYce/KTw8U7XE3VTW5BsnlqPTrK69NdzKetsiNxylaXQk0nDb/iTT/rkmlmuOtdmO3GzeFdeYn927IxkyhNGfwzxrmTL94Q+/rE2MDU51WCkbxR0bSQcBS9lucFni/jaHZJKaUqVW7PkM1UyaJK18IUCtYPs727JDJKhqx2sfOmSxBM/mgnw5MSOgyxhbpMLPn0tSXhMFqtX6Ln3dWVU0SxKFFGljlOSXya+ZiFKGPkEqO5sdhnqIc06MGICiT93qCzDCMtdsqF4UXAvVpDjdK8tfaXr46vkRGaZclm0T4WDhuXMnJgGJ0IhtiVgiGrMEFFo38MU=';const _IH='775c4178615b7f0b01d429c8497e5e83c14f611e47d7e5261d5f6667ab74719f';let _src;

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
