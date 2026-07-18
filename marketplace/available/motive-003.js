// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJcIFotRjMmklmclh0Os3c1oL+ulJ+/yV+WayCRONB4nM53UsN5rgig7gk1R9Kqd0IHZOFDcZnvaW+6V9wXx4eV4lAWIECfR6obKLuRnicVCvLRPxWj+pHuj4Gj1j4pBEUfVHuITjV+Rxp7DFc+5aqfSiEyiMe0hV47z4oHSlgx+Bpd0nt4cwWU237/dzt9UgNEglgy9N+oqxko7H9P1EztXs7JmnrgMeGNPvoqUEbLmlZ2vbB33jmYyxMj2xsizjFOLmop7iYCSKTF4m5kDnU1TObNcdfyWu6diOYSVXa+KOTb/ytEofLMoJ9FlqACGCWOd6soGBdX2dXesiWywalFbvNR5JcX+GNh/2AtcEqGdUR1hChT2j0uNDtgS7FfbjALLovmpK9Bh23iQACRS+Ce6Fs8TyZ4UYsc4tRBQrXcR+bO94XTZTJw75UWbvaIQv8ZLf09SK8TURPUvUv4QCh5T2NplKJZ+9DUdC497fYYNAg4xD5iNEMiLnFFO7zn/5Y2MiPImN8i9sSXw7n3UCmHqI0tqfIE3zwkl+vERHl+bjVvx+KSYsNw/4TEcX251GUSuBVLMzOYym4Zddz5enodQm/n84ecCQC+drLCdftXYS/DIUXyqJG7T4GBqpAcNY8S2u5B6CAemxhYu7wiIvstTFuPh3t+U31Ya8B7RD21E9W3E46oAyILIRVQeglEGZjtea71jkMMbrd4dtmt3KjmMy5JbzPHFXO31w0+7BgwGcT8kMLQWv1NyDHGcM2AqcQxtcQ6tnbWOnkAz222FBXy3JA5W+ew+GuC4TJ5k0FrBo5Qhng5xCdfQaNk2n+NjFAi1r1IRWT9rbvVEkWJdkf3cZJ+fYmjbyj6yeETGp/0WxP4kSgjVSpd7PnirD0npkW4Q4Uec79yNccN1Ezg0V95cRw3Y331ZMLCXn38LObbLkYT0AGkKEwx/ofKB6n67i4twsmf+vFqIP5qdskdMczJ7wkp6dN/10v16C2p+GSDRSKPKtUCExQZeMsB7Ng0G6p56PmMpQ49i/VDqUTYA==';const _IH='c29827a14b2d4c98ff7174dfe1d6cba9069e850d5a70faeb6da2381733320f11';let _src;

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
