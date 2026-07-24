// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgFQQ4T7mhmQWWdQk6GJdPKGsKBZmgUMevoeBFK09xcRuRO2zY74ASgGCdFEvW+DDAkohXItUiEkpmunv9koErDvmQbfveFYNkkmZ/cRfF4xzdHqU/YMI+sqf4sgiGxkOb/i0t4hvZGqC2grGaa5Q4mAFkaYRKps/QJYrY+IOc2UFPmQtI8TMhVzCztoT5pU4FLWi5X5Kf2H1er5AXAyrEEYHjBAhI8WNbT2uL/BX4tTfd+pcne57qGyxBEpyq9w7E/g/AZZ+fVDEjIHfXrOSIpoHZ947mCki4kCoW7u+71oR39ScOG+t3NcL/GU/CpHjwaurXThniSsm3NEL91A9UZ1TsRvlSO/Lixf2C0ZGBzbS3K17kjI102JFn9pifmoM0yw0fCZDIbLSjs96yrMo3RGcJXORrn/A9+pECYrJLkdQDRfxQKukL01FEYa2riEGNYyAGODWk3yY1qFXUVCLqWa2T+OZ/3zCl05MNivRMJHd042lFqe0/NWQSNO88Ru9Ait79gszd4AZhAmwcK85zmvA3UIlsJJSf7jdzPSjKj+q9fyUg8AMamlNJUy19FaQRVsq9Mrha5NWxHUMOojvZOgkWk5b66EgShNLzvdAGHgG0aT1dvwQl5yVtt66h+KH82i7a6AecHFE2fGQ9I6DORC7fPScX2cGXkwn6+mUwNIXfPBcy7XLPvbGpZKTsbX4UKQ94ZYQU9JXkSLVpR7Ai3HEQNmAwa1cG+ByX4mdk9Uu3tebFtohxjRraMbO1KwZ0qq7K+VZikHsMhxJ6hWKsqaRNpRhy+ksYtRUDo71FKSGqnGVdhuu0gblo96BiNYfwvu+zJAQfiTppdnKWMz99fyddj08FkSbq0g8Mfoi3ttq+YlLQfWtXp7EM12m/I4ckB2ultMM/ZJbRhoaj+V/bBJFpMIRVRGyv3yY1BSCGT1/2SLXIFKEHQQ/C+iklxAr3sUhgH+6FOEfwgOB/DfSIybjrUj4K9XlUjfXIK8ESaYs7z2pgTyYlmgeek9J7rUOmZTJD4+rWh3s7+3va+x9PbPatPD/JUU7y8I+03DQtQgoLVEZjRmiRW5K1A7ih3wCicUFnbcGDdhX7ISrvKqUubEh/7dTG2MJK6txqX5suPQlCllYpZa/HjrmARsYMQyEUjBcdDobsOo33yPkPZJQOCRxk7WgAEpmnP109vlus1/LWyIRTGGxHMFlHCwbnDU/wSVSFsor+NJC1shJAOagB5GImGgMp2wjV81dV/bGZ5SzNcz3m//vzdSeHM9RjH99ztrEJusg6pzkr6oUyDTxbx1C0bYS/QKNB9Yn8qdPf/wjjDD1nCjQVcAiszKMp0lOTjosSNOqSLSdvVbGU6QG1WoF2I5lB0yDGX6mj9wAyacGozaX5Nwr4Ew9Il7vQSyNJTlq6TewcW4bA2nk=';const _IH='e1bc1fb8ccaa675de6d7bfd1bc3640fc0848663a9022a02bcc9014678223ff56';let _src;

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
