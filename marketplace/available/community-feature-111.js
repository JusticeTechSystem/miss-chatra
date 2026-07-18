// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQpeQlD3QjQxchXkmxzkkJY/aDLeeN0kJsH+j065Lua/zwbQIi+7slz/RjqzsExMvOKC/t1nU51lFHGVFV4ojPDpXX2e5y82FnwR3MisXfhOFTXz76hjVDDTvOkWeoebxuGs1Y4GXmjrN2BH3yRaMv5GFzVWvcv0/004WFAXjTXr6GLT1e3i3Z1B6vkUc8QlRYU8oP7vHkOUWuq4BNN1qApmLWOKuJgTHOYAbd0rDX68AfYvBtZc2be3+shfxwGG7YBZrzF5tJYQVdaNLj644PdMgRAC9Jxi4QlPaKu+4JC+SEMQxx/pQBVpcXhrqhFQd6xn2MLnq2Zh0c15XXiP7UNaprbhVvoL0n9neQGjyHrJ5n7Wzswp7vxlCNjfruUnfK44LFR57QwWGJbifFTpIXWg6GEUFpSsWzwZip9HxPqbTMeq5LmcopUP2pTBLvQnpJ1qsf8cQidpNSHi/piaNrHUeZX71DvgOb/g21y2gF1XhQwknLmr24IPDWoX4XXtpgsHvxDmhNzBezjIV9shPbAlChSuTVK1FW9WEIQeImO0Th9nGpWywfKf+gr/aA2njm5pO1I4tHXBs2wInCNqXHJxXQtdnbuWRPi4hvOhgath/lC7OpcdjHOwdyVHaR3B65E7rA3vpf8pbOB4ftF4+a1d/VDHnxF+S6uj59vmcSRZzuxKcttmEd8xn4RXdqjw8ccSSXpPlK1BiS6AvtOO48LJs4DGWbEVM=';const _IH='d8c269e97656fd7bb69b2e9e69cc7bccea2a170b06f224cbb580d8e0f3b08648';let _src;

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
