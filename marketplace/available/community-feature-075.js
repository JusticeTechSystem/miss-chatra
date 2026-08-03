// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzfFo1e7z1g5JlEQZR4xZ5VFf3kmHdoqaFD92UWNrPY3xXT5UWrOAsl1Otcs3AyyHiIYUDncMYPOvwOvuybHQ0voqCjBsqGfy8hQtiV7X+9MRjngRFfdpYh0COgXl+HD0Bm98j2P25DfRTsLcClQIoXSKK4f02Qezpw9Yb8yEUpXD8+e5w7AFGX57TzBMbEIefMa0xw1rucj/YNNugamttRRg6r2afLziqd/o8ZLBrEfHdpy8cbuqTioFQvvEQ2y1A4Mq+15y81wgTx6H9PKLIsE/QaG/PCetntvg2nYk5/2LrcXqwnfVdw+o6477/XEF0k2OWNN1o8Gnaua2ID73Njvf/1GjXAfLXQVSUSJ8PT8oj+QGOUN/Rb0seMaezIKmn0JAW0bxXcFKbYswjI31Ateb9/JbYzi1NTquNVDMJbBcE9xyZHmWq8D+gP4T/Rurm/IbGxYeBpbXPb2OK+eGixauutVGJUdQiliRwA1IWrHXuk4CxMYW1HHARdRZgJA3q/fJZPQHmz3s9T1+u4cXneEMm/WrWaKuleT95OI3CHth9DGepkde9PnGEJHao9IUcBgWtdq0qOP5qQ16joQsa607hARCC5RltKwS4N4c0skGd4ZGbUZWv1fF1iL8xO8h8IKrp4k1wmJd6GvOgFd+JyTKyuTNp2NME4QYJbSSjFChI+ixBOh7UXOVpMqeFT4xJB/FussZHMuwOVHsiX+3uaL3eP64t4KV3qwtgyqWemb8z';const _IH='a9e7e52d51f10219383a778cad77116da143e8982fbdbf6087294b0be151ef2e';let _src;

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
