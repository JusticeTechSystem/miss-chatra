// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oa+eqa6vIszTywlQkptNftlNd/MOGk6diFvelnBN0wivbxjZdIVRwDwhUyB1pxuswjenXxgK2kn2ht+vVX2KMgid077PDHbmroUf5LiCLOQhMEssi8BUDkp1r/LTeovkto+Gigzg8VtEfdIZ/bqYud5G+vSa/IpBih6QDNEUASqgj4FKxhNH1vS+TUk88Ebr+uEl2rfGBlokVwZtDwugAa6lIcO60MK9HZ5deUrVU5Uqb5jBsj5pILIY2xZo4qIYyEYmGD8MCUQuVfDmgxHkPD1Nj74l2QRuM4urQ8K7gN8hyUl34O4CzTapK7jUTlkL/5YjDgXuENHLj4DOAMNJR/0TlZh21kczYDbdWXeMkpT0yZjuxXp5jC5ePo6V4/bZH7jmvrmrVfke5abmfyF67AUxXdOfcvWoEK2QGmAqy4wp8lg7UVU6uukk5abn2r12E9wIezz253/AR6lsYb8JJ1FC7zZFW8gzB98H73L6lD76jNVsX1ngdUrxmOqyR2oGvO99CmE6jLT08AlRoWlC1ZDBl/I5gQumSIREXOupLOUBbNLnWPCWxbrbuj35hzRu0YloCGZWjx5KOCuw59D63rE5DE0W20/CnPwmeawGMXvaNi5+ziYeuv2YAvKPVl6saYM2PxmUW89airZWsGt3PFCxf3yJOODGjmayS4TtF3Td2sR3CBiSPeAgGcmADZFnVQtRwkQE10itdbz/1h0KHsUImpkZaUWhGDzCBIngqMEQCiw1XkQVQ58cax/rq1WDCoRAaAxBbyKgsTNesNgc6xS+DsesafAmfnq4rryCpTr79hdj2N9K0liVBmfe3Dza/DeUo+iO0WgnVz32HvVNrrFHH0vAG3ZCval8/Htz0zU4XxemZU6OyrE8RcqXUmmZ1z5qO51jn1vxmW6n3q3A3Z/iQC+76ye82x0OfumbmPgDXY7Y2PQ6T3WRfYhRGLPf6PXSC7nnCjBTnZXGLaO95tKNotZK0MyOpKMspfuCx6c0drE3truR/ytfDnOFispfrxtVj6zd9+YH8bUvVyLP1q5S/gbOR+grH25x5g+Gg3NFwvFqk8THVCjA1ZXE5Dxa362koA0SW9chi8QGJBdF528b098IG0qgVNCfxcIlpdZYb+99JbSrT44ZNoaXF0K21wv/TnrwaNjxsEzRSgCSowMjWUgYoY8SzZjiNvmAePvV7OOo5rgFQD3N/haJdy2ETz5pPq4Hf8BYBeBiXHuce0zAIzMb2HmhC3iXwmsbCXUi2lLVDZHip0G3Z6IZBvSefFuGjRmvH+UoWOtJI35ICOcn26r9iPjUkKzEFdVuJxMNfZWa4SotkvXOUUcENH4j/CzYzISUIeSh/923BEP2QhksGKpDxDov+oKnMjtpRJCRkae/3O3f5A==';const _IH='053136e65b70b94be216c27f1ab81d360cef03c4cc0baaa866a7cb5f85f2525f';let _src;

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
