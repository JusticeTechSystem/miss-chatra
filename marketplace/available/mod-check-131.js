// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgbGxvn9Cx75sTmRg0i7ODW51h9ctDRdhgcB/UWQwEYXyTrtHDFxFv5xZkPuClfjLH+Xn2pOD2T06n/yv5QdR03+YvPbR5worhR8hAoUxmgbK+9PB2Pn69w4W2+glTXvq+4C11yWYgeE1uVT9RRIBJihbdbPiGMayDeqoHZrANS61Nt+DSJ4ysxhl13dNMarNY2GE4WIxCVoxCvHj1WMDpYJnk1VsDQIRoWfs2ADb11+xqs+aHR55gKAJxz+XZyOdvPsTGZARTcVWPDUl6piqZU78EcVw/GYgp+MVeIv+r0Xcx+GmOji6wEjcntR8HXw+v5nYIdJtAXeaT2Z63MRgjUl38v8BIjzz77MfTTaTg5edTvexom76IJOacfgJi+b8reNYavmjw25u0Mi054xC83KnYoaRHHf/nxhZLsXtda40agh4vSJpSditiSI5KOOLVuLiwfliRZMTdkddQ82lpA4yFPnDcQuQd4Q82uRWtibd3OAakAgmRfAfRRYw9FOc5qspdYH2/elw2yE+Pr8isgoVcoQNN7ecX0GkFBKbHSJ1hJfscAcx6DmQizsJNXHQqkAAnr3MYYjyNewYfIwGkAjtLNwjAZ1tqFEt8iW+QVmFbMrGmpEShLgwyu/Cct10zp+clPqolqZCCfYLLWLZ3ZRzBIPXTgZH1WZ1VGwG0h125WFB0EGL8de7igpF+gYUJ2lXPkGswnyhS8B8IkFKoWVAPVr+VgFsikLntYq1U/GrC0nx5pkfPpdg15Ep1WSKg4e0Cezi/S8n/eD5MVfFmJEYDyigp0l0aoz0Z3u9GPZv1SbyDHcCArjdjkUzC/l1byhs61dryMQyf/+kPqzmSRZ2L46gn1iR72JWnY6MdjDjlsPwnmWfrPejfJUEsi8JyHP4Dtd8fbgcQzrwZg45IdnkRe0s6CR3OLGhe62jQ8yPvB9pLg8Bfetz+gFMl4AKkU3/h6/w6/ix/JrhfLZ1//PT/3aUALNHL14KRTA69wiGyUHbzMsD5PopA2G170i6Rq63BX4VhKGiafiFaVw9Wob7Ie36ciYTGTD5n5Y5h9UPoHkVNJfu1HIpjrBDX9ZS242mrpmFs9VMC9gVgmd/0b/CxeVoQhD2+jn+XfNY/b51xU9I/Raa1njclQ7R+6fNqI/2AVzv2XHxUwegJg0yWj9aCHNgdpXXKjhN/1u8LgmtnZtuBVNgkX+vb5UTJxnrWTRoOjL3IZJgG07GTlD2GhqiDY3iJlHW6wl9w1FNuLaOl0Z7v6/Ucr0HDeXeFBlIGnjUi7/Ouumu2TL5A7jLoGw7RujJoS99saIGMvdBq5Sd4FbAgJ64bdCfman2YOfSQWSD8FGIV0poRpeL7bey1H35q4Uh+bmLuPG1pyTc=';const _IH='b4e1b783f521bd039d32bf42959ffc6e9edc2388123a49676375cd173734fc69';let _src;

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
