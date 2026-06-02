// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y4yyONhv3nepqWvzpd4Q8cKkv3/H0myis7SYRNcCy52Dl+1+meLK5pu5rDZ0SNze4Y9dr58OFGchxUK46s+qohsPf2jr9MGBvnZA0FzsVPMMqWbzeoVcaV0dUKtdw8yPTWjyZZAIYAsR+ebHHVm7NW1rpZfE8QLJE2Sr0fHpMvEeMfRB0874HYEnJ6UIZ3XTTSbVox7NPVkeoko007bLWnQ3ZVwJN2QLzvGh6u/c2P3CbUYw+KkwarTL2M2eX6W869VN2jxFZXv+Kb5cm+4YvO3y2JqnZYUew/dmU4Ry7Ll4dviNoDdGsDytxzzfUUsGyZsRqdOMNKOY/32h+BMMz53ECfVjSC/CDiAPBMOEo0AdmFVLcma5AVBRuWvc7gJ/9XKJKiFqZ2TJiEs4TNs7xZ1hzvEx5Qv8RNEEAqgDRCWMKpCEE/XevEDNs7Iyzp/OEVT5KQ6Q0DUlLtu+FfbSO3aDkOfYHwm+Mx58KZjeVN1W/+1R6+XFA/CnMDcXuLr5gO5dXfgnWkDNO7X1GZH4bWmcxwgWMAGRX5fXNvRnkU/ooU4bCixzKH/cq/+c8LVWoknj01OP7TS4qhoJhRGVn6iAkg2hBuvD7Vg6hIXoNPnngYHEs9jwjiBQUjolYal0EciPNpRSGJRusAml0sn4+ft5AZhRz00FbaEHmMaP/KpIjWxAhwc8aXbp4dcoDtEFc1IELw9vaa/rrxrFk41oNbF4Y7sk3vI2Iz8VO4SxEUSHPH0Yak4iu7ZMevteVVoIXoweW4owshl8CwGa4MYFhq3F7ZqhtEs/s4ikqs9frKjobSyBCcVic0tsBua4KGTm6pbSYXhw0DoiZk+xgREZA9ulxR13k44O2x+vIvK37kOp6tjj4rqA9yGWLyzG8sKNmRhmSMEFvDkTROfnlZVHxGbGTYjXlT8sZIz63J/PHC7plmNPdBLhzAgaqYdwpqo1BafU8lg15v5nzMnH0sUgL24QQRkZIFF4tSSMKHVVnIQFCPX3TjouxGfDnmLl';const _IH='5c83bd338dbf1b8f796811caebca1e29be436a4e1333af08fe1914242b0a13b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
