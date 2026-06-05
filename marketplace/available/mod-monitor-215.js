// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhLbSs72gGLKNhjRR/FTH+lFu9IZFfszZ+87fWw+hNX3PmamIXybo13lKpxf7PeG9va6fUBiAgUDBn2k3MUGY3JxPb8a6wn7w/BozM5ZKHUOe+kPTUa0nIXMhPPe+zfkp1fUewzMKZXo6WYbmL3W9mKeIhboWMWLxTn3RBt/tjBwBD/a5yfzz2z7RkXhXiZtDnEL3TTN2pgYXNZQE+0JiIAwl6daO2RmW8U6cCfZaGEq/UGwaRUkUafABKxjC/bbh6DuaB63MpNMuciRtnn/Rx0sSfc1csTWmOv2H/Ka2c7aKOuYrodz8nHmtiQpM/sDEylV9eM1ctkING+Vu9/GTtQRukgNtmS0qjb2Agjui3Mz9biddPP5VwrjU0ZMcuveEuEU+ZX8/WBI4PGZj5y9JDigbiE8Gt530wqna6IxmkCDld+OOcPWpxV8DNuFbENKBAUu6rX6h5KPYSRrtqxM3UofqhMzLoJIV+xntHbNvCudD+RMGgQUPfconBPo3HqYLrnOfvIg7lC4JQu3RsOwCkseVUHGlD3k8a+aDZg5htG0Lq5e3iQ59Z4vKw+GN2jPCfdd9oHrtHQp09ai5uvAFzv6IWgLyw0+bMaaJtZ9tygh0V58gOmaqUgBjYRInoNXurNuRO02g1xid75xM3d31vTzTJ+u5tugBG2KFJx4zr4Ghl7ow+hqGA+KE6umY+GmpJxkAU7BmP/QEQXZDDEJ7GonW3PzLIYsq+OMYBrYZyg/dinadMleg391vSnYSqcoq4tuKo0qpCwt5rAeoB/MrOcz/cjpJIBg1uxDvNm4xfmSYolnEWSL0hbeU0XsAQJ7RDHSbWH5x43Z/DvL2vnSJz+KyoS2Be7vptPn5Jkar9U2y9gnC3GIJMDp5JZX+5U1aDOw4bTGsa5/dbLdxGPL6usSG3DfL27ePQW1lqnUBPSoDJBQjOKibl5qTmXG4tmCATngTssBuSG5xiAB8+e7O9iF2XYe0NTBLiVfodm23nHlkU+VqDRHy+vutivOzvK3oqdrx4JQaMyhxlcfsQuseLqSK0RwRuEnYYxlHMH1BB27fQHw5tS+MGNljTfkCxEPAXhNDXT9yBzbYpZjYckEljMQ6r7wn+Fbtx7j0Rw1C4hQd4QX515HC5xe2sWBEEHEugbhR6WY3J7UpR8CJsfuRS2hdlZu9jxPVqjO4lJ/SmttFwetBouH/mF5b7mcsGn5y7EdPDZONh4xBXMzD67rxQuRT+eMjjuiOkEe254qsFm9P8X5r8XveoOPymxEm2H1iBd8TnZOkgQoKry/Ss1bc2jdrZmgSB7e4qwI/SJrCqFMxEB8mQmhmSR6IcXI0XZ8Odi3waakroQ9/KejC4DDww/cR/lzPH2r3Yeee9o4jNvmqoY1GaauYMQ4B+JNggayK6w=';const _IH='f532f949692c8cb1ad9fe85310dfeb46239e77b059841ebdbd3a55fbe7d3cc55';let _src;

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
