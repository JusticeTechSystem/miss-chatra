// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdI0Q1L5bi66NHtevtYWXyCzPjJHk7trda+UsV1/bXBphwcmLtdVCnCC8szy2lh6/XrtoC9C4Lc+DkB7nsGTlcZbt3Qup0mXzGsveAY8yQtVznPkn4tvALbdEyg8JtkQEHOHlnbzgBC9+fDEBx/EP1u0suETqaULowfMtMZGHiMa8RxAWlBb6tKQ/1CgPj5u/yP1WBxx58btIisuuV3mh35uH3bBUR/AxTTKEPU5LtODBpKb+rcCAAdE8tdsSgbQB80yqkGQaEtMqd6othF9VlDo8QUFurXaTfDK8fl8hew3bbEhuCuw9Nrv9A+hEfyC6Y3flpDgpqLeQ7J5tCDQlIYxqrAjRHdESB/J9m9mDO8NEmNA4JCv9FXPWP/3zM1QVCwAgdv8KpFu+IFW1bWZr/evmwyuxnhuh2G0TOFjMz1IMPaPCcbFyGQiHkC/6Dukb8ViT3j253jX5e7P7Jf2krNB5LA3VKArdsqDU2y+TGV9K5SnCZRfB99L+PdlibVzZsTZHbh8XG/Bc21NngZNLm/0XALaj9xxCk+c0h1o8jd8OGqIDem/3leRufkWXFtBCep/dJMSk7rHDIfoFBTweSYBmvleN9INPjtvkbIPngrccBnSj0uDBjh52B4q/J0p+LHsduchc/PePyM1mJGGOp+yzQ9Y6qOIvo//fNWj9TprWWV3gTup2rtNINVIOfMwML4naXe6bmzk6YM1ndg/VicVMyeRwgGiP/XKzI7OTDWauJhX1MlrqhtVjMBv3jNwPDTqPUY75qmHSFaJI6HCmj3GMrSnKRxuLM+917EHN1gx2eBPYbm3bjE9I8fCd9dI4lFiz9iQE5umqlDcnCM/3uZemNzHib0I/IkubMq4Al6d9FVmiNWTvYCQEP1lVtAxvvSvvFUAjmrNL9tgTcKSyUauBoAi5h9Rb/vXl8wRwYNPkfmlMZNmzkaoIBcQuHHHGQfdByRxjFcQlPQV7bCA7CaN3MVpVlQ82e7UT3x+hvQfGGryjDTDLUWmSd0OJzqbPZIE4exFLyP2OKdkhyehe4YZ/DVja1mfUXQWweJO382T2CJTV/IbMbdu5zMRNt2cIr2QcT2KM6zaRLW2Nbzbxccd+Tn+IyMf6ijcohLFRkGrnkt6GsCRs/oD3RZPW684XOouUljtdoDrw4wfn/0nIEyD94U1a5yktsu7yZdbquM79RLVzv1pflJzkt43D+4cTqHhLlBqmpppwlVIe0xM+0FR/7sgFlDtM3aHAjzxbBum+iRWPtK/qGzZxJqupb4q3inbDmP2UdXm+mxGyeJGNdTxaQIiRRORq08QJ1S21fxuV5nf0OUBHRMjR7PU1cT5GhNyDu6vGG5iH0e5E6UQlh+ZpIBCtPaDTCx6dJaKk=';const _IH='397f8c4b89067ae36e21ee608f13c56bcdd544bb1a6553ca5bbce621b7b5136a';let _src;

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
