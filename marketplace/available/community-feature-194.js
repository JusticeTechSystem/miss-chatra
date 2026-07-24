// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQa9iQ8k3Q8ygQS83VXxQRcSd8asfVaQG011Kmq04zsGE12iOROll+8SAP8t3hR+YWkb5YNfqQ4WSXX7vIZOmyVgt+hNoNLzPn4ihzHMmqux6fyoewYyo/aQR/hCC/xGdMe77NqChu+e8HmTFDDy9aEJYDaEXlStk0lE1T9sC+E59io7IEmZAcTQdWSx5FQprgmWUYzA8pIEJLypWGIbHAcx8WpMKgkN3gurrI4fjM6OeDryvrQqWJMq+EQVaj6SMnN4AAEBYqoX2vJbLNzaEtn9CqDhoLoZFuMJ2EqCkkp+RhtSAHR5IWrh3H/dR0zx/E3y1o3XhOLW118eGSPtkMItUGip9KockvyI7I9v7vAaC5PfNkyWJDiVdmQkve1eJQ7JbB4UBlrWpWqVB5PAMJqeQtuFT/o2b67IGeH4Q2Vu325MJWO3ruqxzr+ExKWzuO1VVyDUyElHGz5Ui01YRElCO47w7lxIlbOqotolz8kEfFiJmqEN8X4UAuCBf4UEdzya2f+j2Lwhtu4iQYb2mLxu/LQNQz4MsiBPBMn6neQ75Yn6xSPFPsnfClDv9gp4JU9k/mrbEC7XEZr6XK++miE5O7GdGpnrRcIJO04A2GTDwvlR8MydnCQ00uOdD916+mrUW1XlrLA2seu/7IcssteicYZXh26seTlinMid8QZnLCMu9ZQnPUASDEAkminkBiM2gJHrg7KX6A2odMYOfLGEfcqV2IT3vUw0C8Qe0PLCN5xollGUg==';const _IH='ef973c3e3f0571d1023baf22337e465817ea373ff4d9e34f4d9685f27e07b165';let _src;

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
