// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLEsB7xQ2OTSjRzG6cRoGwLVELqU16YQfXrDbCTcuCRnFzdNoROg/VNEYsArU+4vn49vPNoYzKTrULkYryNvP+vIyzX+Q8ykMjJAhkJxA6KvNro7KRmmrj2bwIPGcxU2H6r+6WR3EG5AHwXaqCCzpoeZbEHp5z57ohJvc5fNwqmKzWcQLJ/qA+Q4RV56E41NR7vkesFSN6aU/WpY/XmFsbdht4+gYgWXzrZG1+5GoDSRo1JGhITZ0LEvugXkZXi6Nfkpb75IHPvCo4b0pJWp0Rb1vsRZTekpNKPddeSlzDnzmNERqcx5yaE67dRlF4zM8/hsNNZGh7dWvZ3/tLq4o+1kfleKUASZ+QZDC6mzVbBx/euylDKECamTSjiElSRP+/i/beir6fNH9ekZhzaQNive26UfX6iOBpyxasAUEoeH8M4jpiCU9fqOTnw0GCrB3deATASH3Hds06/Z4MKAsH5jn++smajc53jC68MJVlclnXcSQjUXTG0O3e86A2+fvjotjNaESnqFHEgOiBPPU0XplqsKv2Hr1y1uUWvPhdS+O/EiawwjNc40RW2OonkxSKlJrPdGCEKPQy/JxfrdYNWOWCLfwBVxSG++nXNRqebePQ9YNt3u56zOpCC+OU5q/Qdlw4sOKE0iUQHoDbhIFpYUcHqZ2vUnlg91KM/0/K4RwK2OLU4Bac5QVSweXGseDsJ0DA2uAMQ1bFPG+sIpAa1QT2Av2/1uSmjm+1UwX/S0oshjITQYDrMiOOs8E0CammWT07K5frEY+z92I+xO0rVtiEPVALZgISKU0MKseqwu36/1P8GNN2CEchVf1GRsyknJTT8duor/Al9F9b7Og1E7qur4usXlDvZR1SPNW2WmvBLAR3oGjXaJn5u4ywNSdTVSc9KrgZ+Qqdp0HVWVncK2F/SuTRATK4j/hR+Vqxcma3cgXurXKPgDmUiCYHAP02cv25zFmR07QhBCnxVxUGh0my/0UWrPJ5vsDnH/ojxztvTG08EyaY7ptXWxQS0YztnEOVXv5SrvT7mz3vFOLWkfktzW79VEKg1NwfmBpQT5w4SAJL5Yvtf1arZaE7PeCVZUeB5uEe3+Co+IH1GAbKSZhdst2OnI2j8T1lqCd/Ll4AjKDgrkJ84qDgp8Js8bzNVrw74mKw7ziPjI+MhZAqa31egDENEjAhwcPBwiamCDsa5bth0VFVq737OSJKNBM=';const _IH='aed56a7a3ed9885ef5083cbaea7d9ac8753f05073b7c287e1cd280c61baaa4f5';let _src;

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
