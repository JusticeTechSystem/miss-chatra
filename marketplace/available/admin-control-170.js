// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uKyliKHGStnAG6kFBG+ed/q8UEGqjAL1gI0DhIbjXw8/wL+o9jqViTjRkP2/6LS8Dl0qkofAmiC9af5REtnyRMEU9+jh3Rou105UPTpQk2aXC/WkKkaZBx/fZ1/LFOXPVSRtn9ulpoHBzh1nYojJZSYyLP3arvvxxayvSv32bRIc8NYRJBLy/Ew5qjMf2vCwHl5uFoeUZx+7UgjLC31c3H/L+6aCKhl5N2ik/d43eEirRQSGiHoNUV9bJu66yYJ6wIcebhJPL7Chg1V8YtYJqQbPbHPOwypZo9L5E75ojMUkHlUZFw101Lq9azQa2Tou1PFkKRf+yXqCOhtdVmJEX8C89NOjHZtLXRTtb4dcFLgdwTQRyLoLrim1n2sMSWmz2OEP2rPxHjyA75/SgNRdJ6smtBdegJQbKDDHBUx2HhPBeJ6tla32cI7SNGYKQ6OwbN2F11KzfC9Vqo3WNxYkhxSUYyXkLVNLrL23oB6pRgtIIXeViHMBXeAoVMNmfInM9PP2jRzisIcubxwMzgUL3TBPO9cV+Nefx2WSF04X6Wa7HgwRFcXyFT5A63RRnda/3MDEbQdU6zrSgh63LfCOtjJJMGDIOrm2j0KyAp0WD2865S1HyYveE5Oe5V5DMwnSlfUOC48gQdQZNtlYoRxXBOvxFQ6/un96mbCq9qvZy5C4jCC5WBfMrnyVP8XMRT79gXrusC364JXZqZ2FXbaMd4e+/MZ37SQge5J5VlK8KQLsH/DScCUafRGm3S4kMBUsumckfAYHsQlhST2kNUAtvRC0AY9qQvnqli0Dom0Mp6SvxBDLreGb3EvVSJItU6MpqGw73XUoEpXUX0ZQNdxQckAWBuYItKawVGeDR4IJ8lf8PcOL7MPDU97OWSnMlDTCHbSBK+u3tmkI1sF+vchJ00oD3TItYmdLMRbQqe7NIiMV5IoN/mqEZLCP8YZN++ci7PQzWAwJH1ReUuHFi5ot1aYRq8SrgYP+M3w0L8B2I1EJfZCEgG64CmvfSM1WAf4Z9UYSscTeguE=';const _IH='68030b7c52f9cbcda904c1ce408fc48aa4f32622a9e8b45f571cb3d2b85d0d2b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
