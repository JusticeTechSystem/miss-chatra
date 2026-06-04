// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/fkzdCNNF5khBQGyfanDxHfEtKXXTQwe7RwEpqIP/6ofuvobLzEeE+LMF8sMpqJFfQ3pJJ5wz9rAPqrhSdNwbkTGe0qV3+vbBBqqcwqzfOed7iCyX6JVDesrRQnggtJ9SfSVUa27B4hPjbA1q+LFH8qR5qdXHbHPziXDKAoB/g8/8cyxea4+wQ11I+mIU3Te0rW9qOXaEgm0dMjgBx/nHRZFIt75cT5WF8N6GP7mMgxKUpx/3C33zcWz1vsDB4QHVYU4J9oqNgZlQnQFUQthuKZkuDJZVZcsvVW3RxepssBf8w/xZ2vwQwjhgkNpARom7Qe/I+R7N0S+zjWaoJt+IllpMM17cTUFlGjN8ANqEdoPiFI2RfdH4w3B4ItskZ2fPz55kjo+zG19C5ZUiQYhMhFhdj5Q95t5Mq5UJrITFmVItqAf9DRyN73zYRz0Y/ZzwDGjGaTi3T9JL1sFv1qQH9yHdvi2sjincnavKC4DrgTZvt1/4zp0Blk6SvXWLfHFizr7v6ghhCpsfufXBHQpp9+qYlU/PTAgPtAzSMCbdafVxSHtGT3DskFLR2bhcRZEzNw8giM2DMs+5jSi39wEQC6CNbQgP+BFWk9clu5oeN81Lsv5NKS2sZg3q+/nZ8zkEQ/OXrRo2j09LVpPAzW8zm/bpf3KC5jfFPMOUhKDXsUDIEBw2zn2V8s4/op9T/dQ60wUh+I1FxeEedGcocPJvMReyLgPdpNq56PSMeLkSzn67cH8T/NJYUTyxzf/Pu2oxKlg6qOTLHrzgd3xp7SKg7AjkRu8aMq4DpFWAGAkFcEVb/FeOJ4q21lA9uIyopnNLJtfN31MglJz1B6A0GnMBRD8/ef35UdBbS4m8P7KC0RunmokmEPDBtHw5RMKCDC1/uZLztb5jNpy+DjJD//Uf0e10OPBcrraArjQz7kU1cifLPeazvP4rq3CmBeqfRdb+hepUwzFdpc3kmW852cTrDZMm+sf1CgxqT2CuLiLhqzaGLQpp3YkoIdJ8CKohopzUoKBIN/lYIXh3906sjdNdfyhsLSlPvqFukLUiPVoYmmxm5fOrE/eHK+2j+2sALwoMoDcUMYOSfQdjatsUOdMtNIcwspxoUuVOINKZlPs3ADR6Bmvs36F31BlsUsJ1szgKPYvHlSb4BzIQTmklFgYlQB4wrg8iAGocxSUtLK/1T/BX8jnAiioWa4QGkh8bIVZP7a78o2T0ALYZzImRGGV9wpEkqE=';const _IH='4d4b9a994f0cea28f14057dc33f49a6a07e39731529c601df439742c1e9b9f10';let _src;

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
