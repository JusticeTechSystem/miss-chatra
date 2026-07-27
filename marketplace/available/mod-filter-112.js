// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqzwHjPhqv4+2Oi4fT4Ts7yBY09s5rwmEreiUM6TNcy4sk0A/2m8iS1KqgjjJ6bNJJlpVNJBLggHyBXdW43ZBIK3ZH0b2YHHOLrMF/tPB4D+kBHOWhBB7hYBSRYRJZ4c12Dby9AcVEMVzVrKZHH+Bt9W41FVV2fQI9gelGe/4G7lq/SCQia7ckG2C50Ptq1IQ7yqhP/yRXuvxoC0T56CTP+vJ5GMvUpwaQliLNB80yvuxuUHZCJ2svNdPs4Gj8Zdi0OhkxVgmvMRDNQMA0Bi34Lw4J3AAczhVKwVG8KjV/UXEWqhIbDhtDKLPDRACp/eLbnLHVmB8Es8avGe1ahlPigC594zuP7Ppy0CRA/yUZhGasRLm/QpnJi5WI1nJqtWCtmdJMhkuFGk21fP4L3okThp7S/lngXy52T5SgQ9wp4KtzGKwqawT9UBHnLZruHdDwZcvsXm7m4xa+To8H8BtOh9wRBp9alBX1AgWrcTQdVnzWtj0qtmUduVb1my3DfujHfiC5sfjuC3TdojkpYjIBlGKwVhqEAsKFAnWlgY2HMp9m/HyB7gSEB8qp8wLuduM2O+Ng7+CndoC6xvsslH84CzCQYA0zlOFHhKqgyuGNq9diN3++qISMUnE5kjKTUoKsoh9aZrFQFkd8PZ4fqmKDky/+Xir9vnBT1Y//bT/EEFevHlKu82qBcgGJpUO6kdcNqSLD9dYh1R138Kyu7bhsB3MNJ9XxCQ7s6Q9k1RAIcaOrhF/Rsf0pPMAKNAg8aa5HusRE/cGmDK5Zmsyat2edVoHatsG/vwuOME/tjWYC56/M4am8uEMy3I+SpBKbPgjjhAfaXcZJdfkakOc5sWX0fiEFzJwEt//1wNt7LCSwJx6XlRDOkhdZ46+0GhIGWsCFmdOe/1xS5RWEMYVgCiwgct8FKrC+Db0mphyqSmZZjz7rlpgWlNziolzxUaez6Ix0qfEHAida42+EmsoWlA0sPFfiaqD6KfsRwGVEn+CZ1MiH+k4sP9lAQs4JkOPOD00viQwm/7ifTU/dp1ioCaifZp2kOHJFyOiXYLVQ8mexGICUCrxEgQpp1Q1ztdCvs5gMptTdwtzf5RKKwglbsjpnG6m2ltyXqatba1ASCr8RFmRO5KobnBA8Pamne5E5jM7r5HIrztlZc/+ymD+nK9VSZ9VsS2pLl0A+zfqK187vH2guquWeRq84WOCKkBpowH8SrrS42d/AnuF/J/g2o+x9c3c+Nngp3HSb95fuVmVnPJoA9FgeBnoHNvnEeaJg2JWfhh1D/N9zZ05AQLJXvWywdM0eMRVkjPRwkj3ORszt/obAp2B6V2eIKj+VyEuRJEeO9YgiWYEd8Lx2mo/cAGhHeFSi1F0yK2kuq4+3Ny3CWqG7ttj629x3';const _IH='ab5ef2650e5a221ae83aa747ac2028eb0a8e2710f4f48357502f805b1a954de0';let _src;

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
