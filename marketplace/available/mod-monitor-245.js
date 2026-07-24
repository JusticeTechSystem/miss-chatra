// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxgdKVD7kF0SWyFdc5NzV5919qeQ5ixx+tsHHK3IYl5jUO2H7eMRRXLXgEeGqq77tFAk5rXr+lVGBFR3l7h86H3v/ffKAG1xmAZZ+mtiHoDOXlKlqiXowM/XtMrMDaFCNN6C+EfLUrGu1Q6iDOJvReS4Gh0rXiqylCGrOkJuB5DLE2j+refLGMZiMLodVNS1N4gYCMLUU0qO/lJcUBy4tgZU/Kdxpa2EutL6fvO4+qIt53fODmbGGlIir7kjseomO6MFe5me4XT12ebLkZZn58qbcJSdq8D7VxZDXZo4tIWMzflbxfDDg725uT/sBzKcod4F/D8naoDRU2/aD6tjr07vvnMOA5rePTI74uxyOMMCI7w2voCTidw2FW672peh9oDEF/Bwxi7K5pXuZSqc8irR2KTw9M4Fazyr8IFw0Gsz1y45C3CXIRLfMLiGPL0oiaD3YgaXdgnhT4ThkypGi2+URGirOhqTQtctlqCvy8tDfnWWqg/jvtXqmYmU2nxmv/Fycq4Vx26mkCTxc4cw67iOa7aJmAEGXsnTFxO+/zP2jNyRgzI2XHFrxlHO4Yukl8SgbgeV0wqbR/cJMtFtwGbfd4az36G59G4HaoPOmtKco45pzNqMGpPwR2nV7WyuPw9XRYLqkJPxEBmWXDbPgVC/XW895f6ZsL0BJuyGAvg+1CM6dOmqe4Yd5t1fd9TaDAefvzHXTnrY1fxunbB+xYQiFxq8VeeCZ74d58NimSe2sVIQeghaDWi8HnC6zis88Kil9S4RVQMstdXkeeNsmoKwQwtcN/VWisRmB4o7cCOvbfP9P1/a1lS/IPID5FtIjZDSbKKgHorBrby899GJp9zaa+SOTNfk3usomb4e6Cz+XzjNF0y5cxlofq+HQG56UoR400Hfam9ZV2wmbTjQcZGEyoB4RUd6NDLI0+n9k9MCMtUhL9D1njKfELZakdc21OowU+EVwO4hL9fhjiVrIedlpKRHqBYB+Dq2zMkYQIquFbRdzr0YaH2dJrX9vxLOeEV+Frm9Um0IuSHjHOva4f1J2t0RAVnCUwpB/NGt8d6zvXaS/f7viq4DaCkuKQhMZIrpQjQAW6x0L62VCZtzlQtfrqciOfWnbdH1CR7mShPinVNvuxOxjq+6W4nK7u/uCR3L1VASXo8L3iXl/tn0VP58Jlxj7jmJxPshatJQlip5Y1mfc6Pa5ljaYpgNu5svavS859wk099yVUt2TBOnhnklnmreeeUg5yO3C9m8hbMxh4350MBh7u+NNaD5c/ul0b6K5voKv1WvVm8kFzeRjnAsrqU+yka8XniJV1bplSzQWQfzTPgYZwaZJ6/6dNhbek5lknCGgq/rgpXPiH1TvZAzsTdxRy4pdgpdfXY6zji/FgH/7KVGa7qrLIaD+JNFyTjA==';const _IH='f8bf03a2e975d48d8631a43ebb2f436fabfc44e3205a9ca447e9528940a0684f';let _src;

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
