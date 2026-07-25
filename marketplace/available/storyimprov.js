// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQb4lBJIiUvl67AwwpEusKlXX6TtHHn4vRzTSRWYunnHCCgF10ZSiJboi0DsYu2O6TCPXilMD0n0Jnk3I522+KDTLK4EqkDWCH61zqbz+cO75q7ajqtxXjbrTEP+BzbQLDEs0yJi8QmJOT4bUkL7gYZfm89uSf8P+t92M7WR6M28VMBFKOoiVOoxZ3XiWoQ7jVa4kltTJUjCic+o5uV6pktfKvQKC+oDB0aEIC8EtNi7PIjAR8VarNVCb0OfCKeE97nESlcrEhTgCCaFuDLNiYK6zStZJ+t7ogS+qW0YOxy/5zgNE18jwF85seG99RBw2OKMcqsJKUUT6b7m7x3l/KufI3OB3eWT6n/LyCMfuoRvzZtTem6BoD2hck8zmDZtkRCB7YeQHRLe7gBBQHPKq5c2mDcXu0BlKt9aYNumHbk6D+gcKbzItHgUVwFEMmo8pk0O5efWTnFF81OACb0jPdisLWtNKRCZQTgg+OgI50tsTnS1GCLGsebdeP0DLK38lgHeLVHo+TfAWLqmLC9BroIWtKRsiwM5Zg6ePzCIudA0JT8mIUM91AMhlGlG3jz1oNGmwNNp09ysB9kuJKB5TPHDQA7bwCD30qJ2GWv6xOppJqScgpBYMFRXpfY0RinPveReqIO96hVXgwpoaVBBghsQYT55Ccatl+U0Az/Oq12C60ImNHeKglRx/tAN/gKP27Jq3awZ+f4iHmGYpO/6q+wqSGj5eRVTfBcAsgbkKblrtO89JCWpHYRr/Fa/3hYUL321lAp8U5l2kxfnPXqvvg1WeboDrzdKGFyYaqTHlnMfp98jh0tf1lJ34LpqxP10e/Ms0zYmWpP8/R3pFMvE5e+8RFFEKGVOffHMX+JV7WNANt2486QuPsXFCiUww+zl2vz1fUulR4LAGAcmP/cGlC4SpfW7Unfwcq0DI3LD6Qh7WnK57PqejZYFO+uBMGmyuY88vNERGO3qq/FdYgJUJ4bMCfZYl4/CFfuBoNGNRl/HTzcJiv4E0COr6A0RIuYCpwLBPEKJm0r182qa4iZqa3QHqAmzVJGbduMQjOvG3aprWNVoEzqm9RvOOgmXA9Pd707I5O1SIMYBdcO1X7W8/iJ2stAR48rQK2KYUCyvDeuH8W6qqXWGdtseV17piG6er8k1Y8FbVcIdGLldtSyrrNN19tNyHQ0cVJ9UFp02Dcyuo73ZbwDhi1dG7/g8MaOJqoLgT0=';const _IH='e5670a13b482146c3c5e5cc520cdcaff071371866418f68c7f4a44da66eb3da8';let _src;

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
