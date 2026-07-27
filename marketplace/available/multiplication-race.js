// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRToQjDx+YRKaijNJD7XRZgZdjLvHkideSKUU3HqAi230ykYY30X/zE9xpHTT7Zv0pBDRUc2EvNE0wysFMQ3+Cu+F7LcPYFy38hs0UMw0bVVr9Sc9fuR4QAGUGCUa1n0XKnN6ElvU6Bwtn9j5mu/CvHvlVzLVHTjgJT91fnGWBYorZrkLPhLZQOTn59hczYo3hZgf0mgDlB+kdf/bBv0HNWySotSwQrcEErqYzJLqFC7wwam9ptrlrsf8k97PxshsT0Nr06lIpWleeTsrrudkuVRR45bv2qRY8NMOKW/fFZfPN+Vq4JNGiQTO2cIsky6rvcvr70tR7xnOtZAyZa7HioMk03d9iQ/z5iUQRb5RfeEFqxIUWmr74M43jlgPtUBPuDhdO2isku0sAi1bVxdWXq4Qk+JecgcbYgtQCTlojySBTA2nHOiwmAbI4bjFFsD+dIvzRv6hTaj6ljexiBmfddDqufUJbFnoJ4l74U3/IT0h1A2XHiaxK3HVM+TrKNi14Ol8NMi0vlFSJ0FNKPDj3Fwg1yNqRNDid8wQYl8nmetkRmhtvgiuvVgqMKV3P53oxfTaf8TlitLM0hhtOyU7TjtddG2yBHncaVa5WKT86dKAsr94SqKuTtEQvO0NgpGFozOnJSetEb6/ihZHC9Hflv95q48TV1tY6Q4tC2QHF0aUmQW0RxEFe8vpYiejTGxx+JuR2/cV7//33kMQn0G6lnc+Mie/H4Ec6LM/Cz6Bn6Q8Ek2X1B6gC0Xg6NGNmU1iKbjTVi/wi2UhSo3h6H617ZTYTYtCrsqE+MDJuTYdWf2kVCakcSEGjJW94ZBn+7JO/JorwKLwpk0eN9L0Ff9FAlzzrI5zATMDpRBXVaCLRT3zA78eq4cSJra0nA3oWhOhSfC0W42gVV/sMO28hRXK8Ughyt/HQf3ioY1dAYcTKp/5lKDyu6K2FlhZK049dX3Wxc9MZw4uOI0bvpwC+BfSAGGGfdRs5OCU4ofyXcj4iDcPOey8bEVRlCkvM/WzK0VUXjMIn/xpydwrVfyEC0pbVu3EQ7zBEkiNRV/s/YNCDO4Tnqk7fCkwp7Fk4260YYDyd7ofQxis2HFuNG+uSYBraRsbO/EbzR3zfGOCcpEe75y58lFhewWmMQx5ZHQLSgsiVxavLblS1hFkBcpYo6q+BcxsMzZMSM3WIGV/z6YWmtnGKs0X6rtr4u8YrcgxsSWtilZWACF8mdiMyTrurK/e7XwGV3fhf9RNqU+Zu2wTxTDb/6Och6kfS/0rfqYNp5IwTZWTdsWwmykPErXkprugK6eUYKALmfiImTR3hrwzzLDfNchvVMXZZpKzDciEIOkKdgveNBGCDl3HanLT0ytBpTZHyAEexfHpd1JS1dxw7bwRgmNaNO83hZ7P4yr+EaVWVrbZHPLqEgDGyvivp+muEJb2Fpdh04C50FEIqCSEEmRKytQwgf5448C+G4gOG77+kN07V71sz/Fz0D7mxAIy8d9oQE+93KM9BYXscb+SVAfvrGgYK+j5tEb6wYSDwcl6U3qizh3GOa/AjFp/dFlkCUC2h2tOzlcmuBq97p8ZR8hJEy0ytWvgwG';const _IH='c2ce55c1a37db0ebec275c6fa6642b49720ad53abd70909147ead1ae23596223';let _src;

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
