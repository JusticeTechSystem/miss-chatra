// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XD0phpsbohXx6RJgIHpDNlMs0++nM9Sr2M45rWOcndK0VDoOw732U3A5G5d+e/1PES4EC2I7YKnxs/544IKMDcjKYOhRITCxPBf6M/0H+sNkoxq1hV+JIaMikqiHpVgADjrSjNdmtCTb0nIFIZHGBBYsfs6frxVigLoSEZlRONTYn5BsP5P76h1QzgQdbU5CxSZV0n9aZPJSAMWZvSqgCTWzadgLnmXJRz531tzOSRcacPc4u5/f9gKlD2Q3CzD4DD0z17nWjsT9vuVwes8bnRrBTIYNm16t1ePSDKUARNHHvRwI32oUqoY9f2oxLvfEYcJahSPh2SJmbeNtLT9JMeOnTzIkhJwGAayuoIfFiAHKM+MizFlsJG00EsxowPVm4Xfh/jsQ17vL2pvGXcQEoYvDzMUwzTpYPyk6xRBO2ZmB59S81A8SNwlkKonH8XzH8L3o6cf1hF/Rgc6DQQpNlYHOO97NXSAEsdwCC6mFOCTAR+0HrnT+Gs17gIsPTZvYrumEenG9+xPqltLVffgwwY/T/9rDq0LFrLuQ7/Tky6Cvy2pQo8AZO/GyDxrIQ9jyycjeycl3lEl7k4oSLyXgwGVU+v1eiLIg7Ga3FG7vgrM2niEORn1wIsP0Bi9v8v5avbtGAYFKNiKswsOQix91jepzoPy/bgeXPRdBZ7Z7z3+LcqjCs5SqB+t3Y1pvj7mrs9ZDKI+1Dq2Ghlm7b+iui2x6ROmdiIJNjFGtDvhcsKi6bemii11D4BM2x5zZbCf4SBJzpZzlUaFWjxRKi4eKmSAZY/2uNGk4n37utHTaJRtsf5Fu/6YZgog9iJ2nUba7a8zGi2jF/RyRFsPs5/fzfEkdUok2lCUJR/juBNa8las0ojB5Uas4o4xtFOpVuQUEGxLZ1MNTk/kDUNaI7zA3nIhIGPeI8qaPkZEQ438JrK4NS/tW2TqIJAEhHw6NsWx4EgLL/Fz6w8qG0PwmbGJtfjbuwsaxFgD8G2qEevaqZ9MRDNPvQCE6Ak15jVXYbUrTTJKWg+N6+6E01TGhXWluv1sAGh5sHF6oWlqk8dWL1XYjc70AnO1MPKnUZfx2G4dyp+vk7Jj1FOfcNu9chPs3+SDHqC7BNt386AeYaHJqkFJU3Pzy/D1oqCXezlGo4CnlyP21oYInTb1EcvSEPt7+1X9zPrfj7j64HhCbhWTiTZ+soM11WksRuk0bGWM7+0aiq1jGrxfwxEbBFnb9cXNCPQ2ETj3mb/qTNnD5ZJImbtrAX9CfJ1YLT7mapr4Pm/EeFuzasAFvhWBd/AKuYqB4sLhtWfmG5jZ7Ygcb1VADtq9KDWCBt4xtgpZG1frzEMSRtIyFdePxQRez4+b4CPWRFwfXbIRyDQVSpjfd5MSZoflSLnifJuRmUA==';const _IH='b2554d2c4d3de9c83bccf3d7dfc5e9d6018ad3281a23f02014caade8edfa3ff7';let _src;

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
