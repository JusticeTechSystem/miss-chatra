// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3bus07F+ZYvAjTaa91ABk0B5pLaFBleLx2TTs2Qrl7kJ90RooXkpOAmDtqYzqCgN46GayTjExL0DcQPSuola7SzxyPDZ28yt9vU5AV1dhrkdYRdHm6WEXfZSW5L1XZ6JfI5NLq2lSVZDLGxLo3aXyqDnhWNdPqUheyRSoDMNzhbLiTAqRSF3lz1XQfnQWfjEB6j+YxY0duWPUw9HolinFJRzo1zn9WURlqiIK2NZbCJxLdVZ37MKvama3f3bFujNvksvGFEWoTO+wOn45YFvkkhP5h+D7JGujfbd1/lx0Xy4B4QqnU8qF10WfMJsrC5UlDhe5FkdGABnI+ANHg/I6/ceTxHG55B74TGEPIagcPdk89x/xkXqnGpnUGXIlq1mXw9cY8au0nZNke9TGC2IFjNVRLo6xsdyionA6CnkiKDsu7ftDGwRNHTA1t8inZBHi5/Qtpo5tksYe5y1jkPoPlxVggcjfXpWQ30jJbl6L5RoHLkw/H/C5XJFd1ksFVwAeVm7iVH8fC8ON+Kol1WpH+URx9Cbosj7rEG+8zFFmShtS5IUrlHUH5ldcXdZWV5tLleDWh+nnOFqsBHBgY04hMpUrBITM9scVpB4ywvKeAq9XbG7xEY7XqQDckGymlFIzJbhPzuwP7nE2SVBlOPCJgJPhsgy624ja6rMVBmBLopA+U6eR5c9TcX4uru2nNJgmkBSdvPfMzFsOFHj/HpF4fz7l26PRFQ3ebzt22rm9d46/pCe6rtAbHZdKmzNwmL6/sV0WtToT5e1WTvJOwO6vNPgRLJ0UzqSUm54RygFp7wDHFBc/szbr7D1tuxdhI29y4LkHz1v8/mGn4XcoEUFsAkXjW2Nj8Bz3GSYR0WHVW5hP4sKfOnf5Sdr3cjWx6XglwSCsunpM8J7Z30Qz40cMWbYsgAsVQd6Xcub9tKaUCv9axrWgciNHhLBZbBknODJtPRcnvvLWYwUQEnoqoAphdhv07Emppu5I8OUfooMfHAWjW9nRbqk9IDRqlp1yfbsKtcgiq7sHK3cdsSuQHX/QEDRA5+N1IkH2fLNIViv2c3DdyWjYQEJ74+FRJH/QoTfbCLdY1T3bT3Rwg+P5A+4uiq1IKDS5N/6fNFlirIk0E5S+pATjoS+M6C8NoBUFI87tDUWyrE/7QRUz8Zdi4fLh62azk1vyjTkQSSrYhK404uTevJUiqofCnVRk1MK1M6dzBfFsArmlPk/XUEgTRA7a6wlPreWshmmhKLB7o4XCc8SD9ytilx+Ad2irHYmBVjs4BvbCgZyI0RtamsSruzkNAWlXWVGRn8HkThIqgHg0Ncd3llQvDFW9CSfaw/xJfD1ZOxg7ovtRelEMtHYAc2KCQyHF2Jyz8uV1rnKqKYTqI0Pk0w==';const _IH='72e6d0d5b33dc63bcb3d19bc5bbd3790b7eadbc18f8fc3ee507e6009c4f9a1f4';let _src;

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
