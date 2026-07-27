// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHV84cLIpjdZwahsdeNBK4bY1L8ES4bSq7v+eiHhd+2++87ssiL0NOh/i36P5KHLQP3fESb4AvP0aYf2UPHtSTrIFYdkG8GwQw+Xd15FB2IMPT4DLQtCEYrVnaRpzzOlIQIdmcJQVxG2H7x20hqQLpPVh/B+Yx7+zJf/TGmnl21sAV310aLh2mIxQ4q4LW2KClCfs6fmPkKxFSUhlsg1//Z6XqsQ0+s8EZmxU+PN7m1OWB42NbOP/m93pCVb/O7ylCOKKcVT2DauaxGSA8O27X+cYIo0DQLJrndjV3Vdt7VgXKeQooAWprIhptE0vHaZhNRotQCAxiliFOkceCyoOAVRHFee9jxulIZydAi5GG8pEGttkgqbmndrnSRyXGvZ5BsdmH3wgp8IsKNMYM50X3SjRmkHDXiHPniNAPoaOzZD5uLbz9xzt1TgOeOd3N9Va3OUl3cRmzIZGz2tAAtraybXTXmtDdeODetcbXdz5GwZutIdtmdY90uYnbeh4MUlyqMkWKyCkV/hp0fAIwnlwqPG7NuIoXv6aTynU/CWNgy4nlQPZX9QRGD/bX3bmOGszV0SW0ne0qpAFLW55slzsSn64KIi29c1f/gKeohXn2mGl+CRNmxpggK4+AndVJ8U7lPtL5uwx3DJEpFqnFN+6rL3gHKNPoDa30GyouZ6SJPjTdvV65UCgQwkXB640vVN8jSa5AQ32+W6/SsB538a8bHf8KoX9CdoLlZ9FSxw==';const _IH='4acad5673811479ba9ad14af7d8b2fc4f2ed9b4ff537817b76843e08e3390295';let _src;

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
