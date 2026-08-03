// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbuONBX+n689O18ednCEfB6R3WSfTW/BzHuVhVwvqDyzLvN773Au/Oj6fH+9eamgMBO0i3l4CzSJiMLF/e7Qr1aTkfIEB3OdHJGdKLo9uc7uwhQHne1t4nUetN6yc5wX1Tut86KQTuEGw+luNzO0eMZgL49mR7y0lFdMCj7vulUpcvd0xx0WiJNIJRdndQ53B0GvKvP/kpX1kkb/kZrM8q9LPbHlp7tSUacs7rthj7npW1n0ems5sx0xmAz9rNzAOmxhLbIa0puVl06YuLCX2Ho3F3Is4X2/Paidaf5T0o+Uf+AIrb3kzXfuzvwPTP2iAMgdBXEazqW6vMljk67EJnGJuBdIEbSMaQXIM2aG70IBMckeiIIzvCp+zOW8YrlGQa94BiC0hhVB47zr7rQfoAnbiSPHxjORRz8v2KciFaBAk3rk+SgKuLK3PJWhvGfX7yfzkfCFjPlj3bXBKs4Iehn1BwPegg0tQjzvIl5FJ/wCOQHK/nqCli9bOvMIc04INAWgVR1+oqs8WIA6ppB/EWi6ZUjahlaEOycCKK3dYjUMqyAX4a6VF/zXlPSP5riqgMJZW3Et7vrFVtz5M4Xg3lORUu/h4it36OJSg/F4Muekwz/1Dg2/sGvI23yb18JaC5pFm70fulOytNeDVfint3wFwPqVZkKH849O2a18s3Tb3Q50zI3C12PVXeNBMeu3oarsBe4PgFHBDTScCSXWissWYVInIfITkCu8WgCgifmUkhVtIpe64UjQu3PM2i2NBolqn4CSwNJ4VauBBkbKVIIsVuKJ3TiRypuwgmem4T4tiNT9bIZVR6CGiMC37taS4QNBTUicw7MfF3ijhGSuvH8YKZmlPfpAFvn4wjSLhb+cq0fOyPkm5BOGDFXGkqeYFFGMyLE7KJgKTsPpVPM+Eokt4Y/OhUyEsBPaKitcCROMOf0xuUky9zZFggW2G64butieBckl31Ch70e1mS73BCRKFAubMgw+fpJDMpdgD29cuP6Kr1umlJL7Y442YpqzUhR2U8amEdftrKToNmJMB67p5mcF3ithdY2q0lBySEORy3eUtXmKy+Rbp2rbu84mlvJ5KY45toQLk=';const _IH='166fc008f3df01053ae9a99a57827804e61bd7abd20ba3915628b67838532e1e';let _src;

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
