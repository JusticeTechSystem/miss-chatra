// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkXAqjD8GkMxtU12XHC9gHaNgfXRjFne5vl1V/I2fEX3o7U3F8CpbcYAfdeOfyJxkw55frzhO2AeZLfl8lmqN5RsyLiTcOkThEqS/uLjFo8XHY4+yyz5PGeGlLdkTv+0RHfqwWnoNBgXNB1V8Fdpnkbr6CRqShaKLY9GzR8tXRpTboSUaTjY1n+NzTyo8ZQX3kfMOvx5//ffZ51af/oWhliJ+ORnZgpidHhqAk33NGz2vdY3JyFeFf3vMHIrqLnCkDXKe6xrIvhk8TZvONF21/UNajP4wS/V5TJe4J0qRmaTpwS8fzWe3bFEtIcv628k1+dYOgMtQst/RpYXMlOJt+95FwHQbiQ7OM+1ZBLMTxbzXFcd5lByvPdPWL0tc44rLBhQA2zouat/5klbIUs51ZNRV5A6dsSpCfdckUXF4HKaT68fUn4nG0UpSLTrlG60I6Bmd/ljn9TMyLckayZMMg+Mg9dnsnV5OIc7fBkXouLNbvPK3FcaFUoH3njmmGymf1uHzE/RRjk4tZjxdLYTF/5sEQMPsh5Hh//337y+VsTnszn8ap1Q3qG+c7SHo4f37UqyUPCrQMPQru9RwyCPAXQJtvudF7JtHTy1e1GfsGXcvExkgYG2Vu16RbiRLYyMvb9LXAQIejCg4+e6OlJq5ko6jfZQvGCs2r/XS5Sv6T5GAZdmTTZb9h//MuX7AUot1jml+G1x+SL75ja7r/+6UV07ni0N5bHs+HkIZ/6aWpTVOv5vWM7payuqdugub95dpAQ1v3Ai4v2FwCkKxbQia2etCQISNuq0pBFfMbJDivgqj/uc3XJvfguflWy+xGcRooWBu3ADYFzZr6aQau+wF5fyEB/CUlKtkDHZrykL6TBsjd8Pjx9gqA/qZLkgahiBqurF9JqZCTf53agR4DLgOd5F0TYMK2QEqVXtDUfyUXeFB7bUOWye/e5dGtfRKHglMet0XdoNJf1Q9Jn3L1oHdJgckbWyEGS0qFj6V+euCJPQr8mzjHbavAtZBlkn2I5q8fszpIICfeR/s8Puns0xKogWkfvfePX77Ryy/vwVhq9+ceRpdpibzpU3C5VBWVbUZX0LZGxOBkNJP4ESqBRGl62az0I4YFqcV5DGnn41D2dBh+kg8z0bC4rCIw5W9+nATbRq9E/jHN+XfxHet8FqHfmf8Jrt7MQtjPIXVCQ0SINTHIByR4ulcitZW1OnSeclKiWRgk2wiLg1Q5pqwZkyY=';const _IH='edd19a03b1054112ab0fc3b2ff8e977003049b176abcfacb8586cf4a08d51978';let _src;

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
