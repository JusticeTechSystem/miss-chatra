// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mryFHjV97DKuvZvXV1XMEi9ob3AJT6G+cKG0GUShzo4O61QNQ4HFDlN4dNZKzNisoXb2NcB3/LAsO+EmlthGpMBcLTvBTWFpUk0gxn7OY0QTkkiujDXDxk7E5I3ELJL6vfjRcQ/d8V0wqdTP5uZMFofKjPLwHjDmQaXmERwx6RzfYHoFUyYldHwYZaRQNkiWas8WEJfZLU4vHiK8iWuUKPcw3FopsjipkO7iJuRoGsjhIMJfmyx5mkbi0tw5RmzeC81wW5GBVQD/uQ0AOqGhksV08WHGJpdVSKnIt01QJQVD4H/4GHm4Ocf3eSTpqnGZMyNVighu9Axb0uW0o4FXiE15Wz5+56dz4IfGozl6eAEeT9MYiTMKL5k9AQ9jcLNwx/kBONlBqXOGB0aglJejdCsl1D05doIARcrwBen0Kx/G0/92mQxtCQd6kquaGJbmEELWJ6vJijX9lwtqs+yFuSOrmvFWiTce7nahIrv7jZppYNi9YISfkOuDuP8Xff5KW3pSFFM/kUl0d6uUXi2NJuZeuTakCbkCeciuRJcbfi45HM0SN54B7XDSSrkUeUm5m3+cRMgj/eMmSVZzZgHl81Pn3tSS9HwRXPzzVT0KZklN0m4j+M7DbcuCOIHDHeoutW6ZlurLvsV63LtoswwZQyV40QfTsam04IH89YCso3do9P/ZiXul2lBSHoHHrPFB2hyXVUEll/jB9URDsLnwUFI4hd5WzHXys31x/kLBjhB/EqK7HPRocQEtKjM/YEPR+ICCiPmwc/nxK1RAu/DTRmNk0gvFinIDIAqoFBKxPvdxYDni2KvfFx3+VXCYAX4eyB5/WTdX6ppULT8hI2W8D30LHROyP1wYbuQ9z6Ppud5ZfxtgTIIFsueLwgaeT3zTQ2SbVGE3tfakOembAHReBE8ZZ9e70ez3SqI6ylL6yFjfotRKabMHEox/SQoPpZHK93XDzZesoeFzdXvrQdmhSQxlz+mexFCcck5LumnygaZT9kwSg07SmlXxfKY5khgKnwzH7n2I6GxtR488g7LfNVA42bBkB1aNxcDPCxHm/g1YEFucnpcGczaNTT1012tSQG8p2zZ2BR4n0wBEgeFE8yeeM2jKzFIfs//KZgbW8TA+CcwFVvrRp7gSBRhpxzctntIFsbkk7cr0tMPmOhs97fsVBTr12Ux7SoU0/BYbcaljnRWhgKpxDEyGxT+RHc925mzHcWqffY=';const _IH='a9398a9144546cc2cfb6986648ce8417dd30c9e0f84bf7171131f7d1730828e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
