// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y4PJJ0PcA9VIKPTde9UMgo2j2R6hleddM9C/CGgc1rDyQONR7/JxK5ywu36qCQqaoIczTaS41/MPuqeSDNjnOKerPLecsijgJYyS0A19h8IDWMKmp3rQrAHI9DLydDVh6j/S8qlnvjUu+nqggWBVBdULJnLHKFPSdImenm8HlnKA/qyHUBQ4Td4TJJIenJIGev05Gepzgax//B6MQ/2RCHoKJFsD/EFYPf79bSx3JZz6Z72QHKJcNDPU3jorfM82YNfQqb18QmRNSaZKXR2mxTdzv7rrM4vozGAFeptbXd7eixKr+6uzW+3tjp/Zf6/3FRTDmA9kQKE6Pa5hIkEdbko5ikl9kUdc7ccrQ64ONsTxpqFgoE0bdUUfiB+5nb14mPva6MPW5s9Z/vFBziR2lcKrua7D5/mxZoeaM7++4sJYnwKS9/5c8ppsMiqmgJUhV8YbonzNMBNUpH+eP8wgIDIXP6dFa4a7Y1uBOZXahwOjxeVnZMu1XiMRq7odf5FsHtaCmImOHioYY4nL/Wl82QnAZJ4bQ0i38JYGr0DWHgRpqdxMFEV99mTtzJRpVr2V5b/5URXB4plVGbP0gPr7ShsJBwJN2TDVujI/sP+ngWyvlxd40BMKjs4w9U8iLpBgSOupxVlOy5zNGJVrWkf7aKsttXJ6+Fw/oNwahVdemCoTd/fTinu4nC+4PAFPtVmO/i9LKkizHIPA1nfW2oA+3ex1jvHFIolOOunlSXXLduAH3F4z6o9LDGHwVsuwNq00arMbm0uAPvIogdrdSSoNqKqU1ZsC2dboHb3N+O1yL1gvu/GAUTw5zjvC9UaDNqLhwWRnqFjdUqvoZKfaPsWdBViqhw2IT3lAVx6XA2dHX8f7olpbBOtz3lDp627UsgEK5GnEh716luAXPOVmQfBlvq4uoC11qTo6ilJKQ3Y6EYfSnJ1d1yikVTDpAGVUuxypCpY7lZp0dFnq8vzus9gDeyVCKCxb/iw8ihW91uG9v5FnGwFAGZoyLcSAk13lKG/PIC4cHgopZlet6LVz9OvBHV8Ncdd/AqiGjH9e2wax7shUoA==';const _IH='7fb049c67f995eaed13edd5910409bda21896f00414a8103293272242c1886c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
