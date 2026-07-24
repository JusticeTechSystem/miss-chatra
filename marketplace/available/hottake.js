// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSX4VK5+1+9E7/GqoEoENgbgc5XpeRooAt3CmmpBZRXBIqlycZ4Olsz7zT+mmmfA8VTvGmQM1scXgTnpqp+Smv6Q1+ljl+ENMeNsO+7ZYCd/7VSWh78P5HLQh9TUXDAmqpZMuvUgzcqJZMvUfphEeyeIKk31oroyh4RivV74+Q/hbHJ9KUmWSIWVfKSnIm35KiPTBXhDekX3Ca8x/uJPud5Cwif70mctJQP/6GUQJ+DZ4tZhfxo5Xin8Z9/JXFDj9cg5fyivX2xxyEBgstGA4M4evvKukm5TcahBC88m1ig7soWBFImrGW06AztvVfo8FVKBiJo4rDWXLPWR3i0nI3GY6PPJBbtLBUcHsUCYzld5PAin1PhZmQ5BXKQG1Ty9AlXcwo0XGwz6tDFVY8H/W32d8opVrbMsiy2FkQpqjVPIVaUjAd5G6x3yNqTx9hEm5a9L2/yHpYuoMeFto7M9nxzc54ow4GmCRU0k3qtY/xk0brmhLGOQHbdWE71dBaKVw61jCCZYk/wkXZMoLblw+DTHbZRY1q3v5jpDYsj+Ezz2YBUviBBGMyCY6F89xHf5wno6dpqrVxFKQxlhY1ax+VglEiNW8dQY1XI2NEn91Er3I/WTt/IcbA58XAXKeP6tg8iBbSzLvg0nNAZlTxz2v6VOT1AIGklWt4yuhz4xxa1KQRxPkdfU60w3l31NoGpK8//rMS0S85TVr7AH36P80e4RKofiUuMDcwiwvUemF1I7Q8YkZk3XjQiai62TeUFwKbbyBKzv8vpFQ5hgORpG+pNMHM3qA0PjPkpZNkQnBp2VVfH9QHh1LKGnhSXs47iKkfZOcxbBY7LoRYnH3IK3yXz6vET0jA5/7O+pIDWN194v5A+k/qLtwbXGdtbPVZhtmyl+lssPYnv4NHO2MC0b84eL6oIuT+GKEwbEnFrH4pWlMIWeK3QFo5ELZlun2508+szmHLPWGs4KY5TILOlRiAs1lYUcRHGqzbSQybmC0DFK1CqAlhnMlYZwA9WUiaDobl/GisuvRpj0+U2UwQ6LekOlPPJWUExkPVW1Kuc9Yim8c7+khwfm+X9lMLlSJmjPIy8bog8D5IzKN5SCBHMvPUSMnoGRIRilRg2aOyKjbfsADW3kpWq3JQQntJHhoGLIf/dq9ama6ncc1JmeulD66I+rVjz0b7xpTy6pJ7cmIA0JH14pheQRDW3U0/olEZmyDABnA==';const _IH='0a7798cb282313c4df7d99b20825645dc7c177d7c80ad18c781981951916e211';let _src;

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
