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
  const _b64='T0JGdjQOZbU6fGTaw5McuZ9/Ss7FR4j0oHlkebWz05sUDsrYGa+COUPUa7B63TRsl5dwT4Ghulw73tj8tGkDHU1u/065HH4doNc16Fg+dreY70nqMhQMcofa5iJ/3jBLHLnvpkxvLAOQhE834/0K1THSLf6rnmtWrjS9/rpZx8+3JgOhPhwJiLopmCws+ij2UyA8ayFSQCjS9yZj/mxWOftqLa+bZpONQabA6//ujVq4xtP1oV2oxooJxxi4D5M9OsLPWk8IAo7I3BhNG4xgpuNVBESCpB1y4HcjFq8Ui1TrBg0gA9LCRdtH07J3JZy5RYd1o+6JWoj8R/SdIfqj2FAz9lvv5Skv76D7dOOU5y7MCMEUvF7vaKMcC2GH/yHefSgScV5B6WZc2bYf8qWVtp/i5/s9LPeocWKx3MQHDy0VyUtut810L9+ZpceGBJoeNr2VoCMXMxo/rOSPHTdCfF3+zrRB/Fuf0sHe5GxXNrmMxGDYfKC6XuugEwVIVxyIDnsV4hNAEGf5sIHLuHLPVmfq4ohpjxHQXOQ08YjGOEBXelHHDbUKgX7WdDUjBP/EW5g0VVoyi319Xj+T1m5NRnxHUUoh01mB6ZuP4ma3XRvYwPs9uKga6W6HAXP7GmL0lQTi+DtMc+psGxY2XFxz4dPCQRE/covU7HZNcCU+H0tujW0MWNxAHOKKJASTde4uNDsveBK9bT4+deX2p+g3BubyZppWIFPjASsW+/bd+mxnYxzJdrknsmdFfTsVPlr7bcM4LZuH3vfPL1Tcl2PcUEAx0xjB2hK1si8dICf8nPks9WE/wyunLdHRjhrSskd7yNYzmRVHbn/O9J0w5GI4AuwQ5UQPyStYQ2WBAzhvp4QdPHWP8yhNv2kdUirrTkWRfLPu9vDZFxvsJetiuHYte64flDKxLgyZ9y3IPVUHObUkKQOEjb5kkLBvXN4TLr2YvRN0GyqOIuosB6i8jJsEEHzXtS1sVAiGNqRXspbOMZrE4/DSORppp4QpXg==';const _IH='a38c1ffbff16a9e1445ad32835e180917014f088bf7502935d7499cd87d5807b';let _src;

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
