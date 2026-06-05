// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3yojDPIu6e+A5RqtcMTriSLOyiynbFsRp+klWlOUpvu+scEuqkmpdUPZ62c+0+OQTuwueL1DkbnbXRuPVKkmvEssuBI0chZFaKrjfJK8XqeUJAHu+h7Hp8Nhq8jvJS3BSI9ODnVE2coSLdqyf0cmcq13P5OT8X4xS/65pPiO5qnV5f0LlqfmJX4+pLiBbFwzWLa5xwt42sLJXPVmbdBuiZhgel1U+FK1CeG/8pezm4/9OM/XweAgxFT5iW7ff/98wbFk1OHk19dwxgZYo4RZeRLM5dZq/InwSDuNJJBXofrHrvq28qsqte00NbJopahrr8gOPIZ3sveS3o78twRJUDd4LEdBShT3NMXPeRd7S7P4TaVtLe1RiBD+opk5t7t6HEI+kr+pCfy9LO0gbGoSgxZt9vfa7UzyMV+X0xF1LELhnCfwGV/dd3zsbCUB1XbbwEHNCwgUM6l8m9FnqH6Opi5Xrh1aM2Ah44VpjmHvpQFolr1HDqAzrzgMRNqK/AwRv91Zx/usDGsP93IAjQu3tJprGP3YYD9itiu0y+brxQosOSfOUapxgXeFNF+VqD3cAPhGhaoxwdveWwqdafJU6y4p6LQ9aqx3Csd6lo20V8IKNP+IzhteDinX2NgGM/2/ycYAIXmKyaFM4nrnTZ60OGMfSYODvotzKyPK7TB0xyemFE5sjQn1UlKAICn2/GDhwgcaA+DcxrCvQbOcWKkKjboMf2V8n6MQrCGolW8U0aYupvFeiEjiHCjdZ14Haq/EWgyLnD3Or2i028n5svXaUbx7DSr1PVz7Lzs7KBELwQM+cnZXC8UHBA3X07zM+84Bn37QqxJ0bunVgDytJtrXueonov0trb25v4B45cQL7LPprpuizUFMkmIir3A/Oe13LW7AFaHFvbP69eEF0sgAuXm9hZvshef36bVzCoS65BrQeCAPTkfxwKQvncR9cqVR1T06sCAVpo7/y3NDrMivKzIT+E3F0wQ4LhL3xq4GX1gU3qbCJTjo3xDmxkQwOPChyiQM9/j5JRXQZBimNrOG9o+K9rvwYTX/sl0Swe5bdEDJ+BCGWogEv67n53F+6ZxQlwgkuMrYp7zeS1AKH5L4xvrvRYT4I3mViq9tf8Bclgw+bgfIrEbtlgdVruwrcJuhRv1YPKxyoPlo68X0EM/xXZ120cwHB1JRutvpyGCB3yVC7WdvsKcuWk2myatLNKnXR1D9/7NLXLWxMSbALJHw94VtnrxjyNlh2kTM9rq/g00WlF3RWfS9bUTstLFDJqKnzclsqn6rupbj0etJ/NfoiILSw5BVWK6RDGzyEJaYOMZaOfmSuGLkEOeTIsXjaRbGeK4W2zkQm0yUbvr8LJ8HiYX3/NXNdMVC1sr+t3+cst7W6SSvamYQtwdiAlOXlZyyJUBd1ubuW47OILWZ';const _IH='2a6fe01be6778dfcbcb8f64abc6bc609eeadfdff8e9f0382130c2dd579f08720';let _src;

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
