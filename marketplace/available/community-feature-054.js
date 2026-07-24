// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVpU5I8nSAnLwKAjuxsoBvRFko4fkUlxROkJCd7GVazW/dWacg5ZSb62dsqgNsH2ZkuSVHTe3EbBt32EHS/U+Nc0Ko6y4l9fSHiSNE6qpiSTO9rh7GsmMe5NEhGUprAq/MO+wMPlGbt5Gkn2So5VyznJsvffHtIiY6hnHZ5hMns03ZFB8FjQYKKIurO+GJIejtJrpUby95iRUsUT7SM4DLpfglXa8MuaPqnWuyEosfLq+dxXI4x+G7sDGZDjB/XPsF4W/sxYhv5TGk1Lc88tjZgrg6esuvtsIUA4JMCKxX32tWfec/7WoPvDgiKqwfYIz57/y2izPHNkZbRhGW8RoMyLp6WoWUArZpL3FirDc1t0Q+c16tWKO5azXGumj2VDH3aed4ywBUBoEDT4fXmXV0OPR0I7AYPud3IosQo4bzCVASWdyxxj/ELI7i+HB85yTNTirwC3SE9QDU+t7FbDY/5f9WMNxlHMjMWRUFzsan1WmlzcBiWoWtBABKjcHkZ0aukbgHYxdZiwqWvBKWKUUfTp8YttH/gNrS4KCcHmyN68Bpdrx1iEPnMSNOhuu7DcANg77T+1hyiX2AjPX8MjePUBg9nch8yYTww74DcFuuS18WjxVTekEMEwYjumnz3t1d2ikHdUFrc5Ye9Sth2L06z1dRchhQnKrKI1vJcHuCU+IdLwL2RKHHBzk2rPof19eiu4P26o/IJtaE+Z7Jk36rrlY2FseR07FRG5BqU1jtAOl/';const _IH='591bc3dc969c4de9f81327693ea898922403f1529e3933c16072feee87abc1e5';let _src;

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
