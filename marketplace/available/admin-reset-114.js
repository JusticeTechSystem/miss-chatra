// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnlKsLj5jlAN7nK3t9cFA1I47L3WR/0QaWYFVsyClVEzgcO4/kZP3/tHgMx72Wb0bzri4uX2HyR4J71Cpm7jK0u70eUCuU54DsfkMzagO73KxW8n/w3P64avaTvaIMQZgZzi7ziKv4YdHg5BDT/nuHQUrPcmMoDaV9A/8P1E3qMt3RZ10uEEg3HBNdO/Ojm+/78KU/OyFer4ORE004g9iKrlQiKxn+mXQHXXG0FcW7KZAWUwiigLhxT2yhRyqAcFD5ONkqkUJJkcJxAOIDfgaqBJW7zOVpnX2ZMi58WqKlGBTdK6wE2OKply/WtXZhJVBtvhNFPWvNxn83up3M/6IpOSljr0R46ZMb7Cz0ShK08IKIjRZbvF88vVZV4z/RX7IfZPqyGSaqBpakVkYwsIZXlrKaQpJOHz2NwHMfT+IVtMKY0bCgWhTOFoqeaPZ2iNugD1eRNSABDd4k5tYxnwaPLgx9IU01NOfUrc0nB/hpV5dHBwfu/qkt72xoubMADBNJ/hFbEeWyZXGqTqnAbl8997XWVr0TTdda6T4S/wnrzvQ8QWmMfCXLtnkO5YO+OZYT7Fnfeb6B4/v08fXPY59CpcMs/dEYldCieK+v9wP8tvno6gJPctYrDm3HoA4QEgKSFDbWRWfUIHzNSbLPS2YF15q3PHVS24NlUQEzILk5e0WEX4ojlRWaqMFLe/ROQS0dV3FRXNsr4hiF5TaGvdMPxVsexvndyjjXpT8HYtkyFMVDGpf62GkqEH8tFILWX36F6HS3VEDBaYS18IUBswvMt4pftc03eQKIXE3GS/WQqk1R6Z1qvhTRi8a1V9mOKF+t9PFoXYfA57G19/YU1GW1OeE/1xPZzSKW/BMLNEG880l1m3irr9uSbQ6dEdzznMnS5577Uc2QWYHnwIka1wcUJ4SvhIk8bcDwyHYmGpoyP0vENA2ou3EPIDmUt9j3VDxSN5PUzjvR5NMJSLBhHs+YaREy/I4KcwVX3AExunp4Pu4QdK8pIEBmC88=';const _IH='2b0deba36911754775eb968938411d76af3b7730ed596c7ea5f992682ffcf052';let _src;

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
